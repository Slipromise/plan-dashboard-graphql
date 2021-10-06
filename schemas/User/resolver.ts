import {
  Arg,
  Args,
  Authorized,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { Service } from "typedi";
import { Context, CustomJwtPayload, privateKey } from "../..";
import PlanService from "../Plan/service";
import TaskService from "../Task/service";
import { SettingInput, RegisterInput, LoginInput } from "./input";
import { LoginPayload, RegisterPayload } from "./payload";
import UserService from "./service";
import User from "./type";
import jwt from "jsonwebtoken";
import { UserRole } from "../enum";
import { PlansArguments, TasksArguments, UsersArgument } from "./arguments";
import { BasePayload } from "../payload";

@Service()
@Resolver((of) => User)
export default class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly planService: PlanService,
    private readonly taskService: TaskService
  ) {}

  @Authorized()
  @Query((returns) => User)
  async me(@Ctx() ctx: Context) {
    if (!ctx.user?.id) {
      throw new Error("Context not have user");
    }
    return this.userService.getOne(ctx.user.id);
  }

  @Authorized()
  @Query((returns) => User)
  async user(@Arg("userId") id: string) {
    return this.userService.getOne(id);
  }

  @Authorized()
  @Query((returns) => [User!])
  async users(@Args() args: UsersArgument) {
    const { name, email, size } = args;
    let result = await this.userService.getAll();

    result = result.filter(
      (item) =>
        (!name || item.name?.includes(name)) &&
        (!email || item.email.includes(email))
    );

    result = result.slice(0, size);

    return result;
  }

  @Mutation((returns) => RegisterPayload, { name: "userRegister" })
  async register(
    @Arg("userRegisterInput") args: RegisterInput
  ): Promise<RegisterPayload> {
    const allUsers = await this.userService.getAll();

    const isDouble = allUsers.some((item) => item.email === args.email);

    const name = args.email.split("@")[0];

    const newUser = !isDouble
      ? await this.userService.addUser({
          ...args,
          roles: [UserRole.MEMBER],
          name,
        })
      : undefined;

    const jwtPayload: CustomJwtPayload | undefined = newUser
      ? {
          sub: newUser.id,
          name: name || "",
          roles: [UserRole.MEMBER],
        }
      : undefined;

    const token = jwtPayload
      ? jwt.sign(jwtPayload, privateKey, { expiresIn: "30d" })
      : undefined;

    console.log(isDouble);
    const message = isDouble ? "Email has registered" : undefined;

    return {
      isSuccess: !isDouble,
      message,
      token,
    };
  }

  @Authorized()
  @Mutation((returns) => BasePayload, { name: "userSetter" })
  async setter(
    @Arg("ModifyUserInput") args: SettingInput
  ): Promise<BasePayload> {
    this.userService.updateUser(args);
    return { isSuccess: true };
  }

  @Mutation((returns) => LoginPayload, { name: "userLogin" })
  async login(@Arg("LoginInput") arg: LoginInput): Promise<LoginPayload> {
    const { email, password } = arg;

    const allUsers = await this.userService.getAll();
    const foundUser =
      email && password
        ? allUsers.find(
            (item) => item.email === email && item.password === password
          )
        : undefined;

    const isSuccess = !!foundUser;

    if (!foundUser) return { isSuccess };

    const payload: CustomJwtPayload = {
      sub: foundUser.id,
      name: foundUser.name || "",
      roles: foundUser.roles,
    };
    const token = jwt.sign(payload, privateKey, { expiresIn: "30d" });

    return {
      isSuccess,
      token,
    };
  }

  @Authorized()
  @FieldResolver()
  async plans(@Root() root: User, @Args() args: PlansArguments) {
    const { id } = root;

    const { size, cursorId } = args;

    let result = await this.planService.getAll();

    const foundIndex = result.findIndex((item) => item.id === cursorId);

    result = cursorId
      ? result.slice(foundIndex + 1, foundIndex + 1 + size)
      : result.slice(0, size);

    result = result.filter((item) => item.membersIds.includes(id));

    return result;
  }

  @Authorized()
  @FieldResolver()
  async tasks(@Root() root: User, @Args() args: TasksArguments) {
    const { id } = root;

    const { size, cursorId } = args;

    let result = await this.taskService.getAll();

    // console.log(result);

    result = result.filter((item) => item.participatorsIds?.includes(id));
    // TODO: size 無法預設值

    const foundIndex = result.findIndex((item) => item.id === cursorId);

    // console.log(cursorId);

    // console.log(size);
    result = cursorId
      ? result.slice(foundIndex + 1, foundIndex + 1 + size)
      : result.slice(0, size);

    // console.log(result);
    // console.log("----");

    // console.log(result);
    return result;
  }

  @Authorized()
  @FieldResolver()
  async authToken(@Root() root: User) {
    const { id, name, roles } = root;

    const payload: CustomJwtPayload = {
      sub: id,
      name: name || "",
      roles: roles,
    };

    const token = jwt.sign(payload, privateKey, { expiresIn: "30d" });

    return token;
  }
}
