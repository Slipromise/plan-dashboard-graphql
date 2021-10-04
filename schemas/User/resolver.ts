import {
  Arg,
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
import { SettingInput, RegisterInput } from "./input";
import { LoginPayload } from "./payload";
import UserService from "./service";
import User from "./type";
import jwt from "jsonwebtoken";
import { UserRole } from "../enum";

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

  // TODO: 數量限制 收尋參數

  @Authorized()
  @Query((returns) => [User!])
  async users() {
    return this.userService.getAll();
  }

  // TODO: Payload

  @Mutation((returns) => User, { name: "userRegister" })
  async register(@Arg("userRegisterInput") args: RegisterInput) {
    return this.userService.addUser(args);
  }

  // TODO: Payload

  @Authorized()
  @Mutation((returns) => User, { name: "userSetter" })
  async setter(@Arg("ModifyUserInput") args: SettingInput) {
    return this.userService.updateUser(args);
  }

  @Mutation((returns) => LoginPayload, { name: "userLogin" })
  async login(@Ctx() ctx: Context): Promise<LoginPayload> {
    const { authorization } = ctx.req.headers;

    const authorizationSections = authorization?.split(/\s+/);

    const isBasic = authorizationSections?.[0] === "Basic";

    if (!isBasic) return { isSuccess: false };

    const decodeSections =
      isBasic && authorizationSections?.[1]
        ? Buffer.from(authorizationSections[1], "base64")
            .toString("ascii")
            .split(":")
        : undefined;

    const email = decodeSections?.[0];

    const password = decodeSections?.[1];

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

  // TODO: 數量限制

  @Authorized()
  @FieldResolver()
  async plans(@Root() root: User) {
    const { id } = root;

    const allPlans = await this.planService.getAll();

    return allPlans.filter((item) => item.membersIds.includes(id));
  }

  // TODO: 數量限制

  @Authorized()
  @FieldResolver()
  async tasks(@Root() root: User) {
    const { id } = root;

    const allTasks = await this.taskService.getAll();

    return allTasks.filter((item) => item.participatorsIds?.includes(id));
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
