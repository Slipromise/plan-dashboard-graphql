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
import { ModifyUserInput, RegisterUserInput } from "./input";
import { LoginPayload } from "./payload";
import UserService from "./service";
import User from "./type";
import jwt from "jsonwebtoken";

@Service()
@Resolver((of) => User)
export default class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly planService: PlanService,
    private readonly taskService: TaskService
  ) {}

  @Query((returns) => User)
  async user(@Arg("userId") id: string) {
    return this.userService.getOne(id);
  }
  @Authorized()
  @Query((returns) => [User!])
  async users() {
    return this.userService.getAll();
  }
  @Mutation((returns) => User)
  async registerUser(@Arg("RegisterUserInput") args: RegisterUserInput) {
    return this.userService.addUser(args);
  }
  @Mutation((returns) => User)
  async modifyUser(@Arg("ModifyUserInput") args: ModifyUserInput) {
    return this.userService.updateUser(args);
  }
  @Mutation((returns) => LoginPayload)
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

  @FieldResolver()
  async plans(@Root() root: User) {
    const { id } = root;

    const allPlans = await this.planService.getAll();

    return allPlans.filter((item) => item.membersIds.includes(id));
  }

  @FieldResolver()
  async tasks(@Root() root: User) {
    const { id } = root;

    const allTasks = await this.taskService.getAll();

    return allTasks.filter((item) => item.participatorsIds?.includes(id));
  }
}
