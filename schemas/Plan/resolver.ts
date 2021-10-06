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
import { Context } from "../..";
import { UserRole } from "../enum";
import { BasePayload } from "../payload";
import TaskService from "../Task/service";
import UserService from "../User/service";
import { PlansArguments } from "./arguments";
import { AddInput, SetterInput } from "./input";
import PlanService from "./service";
import Plan from "./type";

@Service()
@Resolver((of) => Plan)
export default class PlanResolver {
  constructor(
    private readonly planService: PlanService,
    private readonly userService: UserService,
    private readonly taskService: TaskService
  ) {}

  @Authorized()
  @Query((returns) => Plan)
  async plan(@Arg("planId") id: string) {
    return this.planService.getOne(id);
  }

  // TODO: isCurrent isFavorite
  @Authorized()
  @Query((returns) => [Plan!])
  async plans(@Args() args: PlansArguments, @Ctx() ctx: Context) {
    const { name, memberID, isCurrent, isFavorite } = args;

    const { user } = ctx;

    const targetId = memberID || user?.id;

    let result = await this.planService.getAll();

    result =
      name || targetId
        ? result.filter(
            (item) =>
              (!name || item.name.includes(name)) &&
              (!targetId || item.membersIds.includes(targetId))
          )
        : !!targetId
        ? result
        : [];

    return result;
  }

  @Authorized(UserRole.ADMIN, UserRole.MANAGER)
  @Mutation((returns) => BasePayload, { name: "planAdd" })
  async add(
    @Arg("PlanAddInput") args: AddInput,
    @Ctx() ctx: Context
  ): Promise<BasePayload> {
    const { user } = ctx;

    if (!user) throw new Error("User is undefined");

    user &&
      this.planService.addPlan({
        ...args,
        creatorId: user.id,
        membersIds: [user.id],
      });

    return {
      isSuccess: true,
    };
  }

  @Authorized(UserRole.ADMIN, UserRole.MANAGER)
  @Mutation((returns) => BasePayload, { name: "planSetter" })
  async setter(
    @Arg("PlanSetterInput") args: SetterInput
  ): Promise<BasePayload> {
    const { isFavorite, memberId, ...otherArgs } = args;

    const foundPlan = await this.planService.getOne(args.id);

    const membersIds =
      memberId && foundPlan.membersIds.includes(memberId)
        ? foundPlan.membersIds.filter((item) => item !== memberId)
        : memberId && foundPlan.membersIds.includes(memberId)
        ? [...foundPlan.membersIds, memberId]
        : undefined;

    this.planService.updatePlan({ ...otherArgs, membersIds });

    return { isSuccess: true };
  }

  @Authorized(UserRole.ADMIN, UserRole.MANAGER)
  @Mutation((returns) => BasePayload, { name: "planRemove" })
  async remove(@Arg("planId") id: string): Promise<BasePayload> {
    this.planService.removePlan(id);
    return { isSuccess: true };
  }

  @Authorized()
  @FieldResolver()
  async creator(@Root() root: Plan) {
    return this.userService.getOne(root.creatorId);
  }

  @Authorized()
  @FieldResolver()
  async members(@Root() root: Plan) {
    const { membersIds } = root;
    return Promise.all(membersIds.map((id) => this.userService.getOne(id)));
  }
  @Authorized()
  @FieldResolver()
  async tasks(@Root() root: Plan) {
    const { id } = root;
    const allTasks = await this.taskService.getAll();
    return allTasks.filter((item) => item.planId === id);
  }
}
