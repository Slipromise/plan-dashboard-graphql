import {
  Arg,
  Authorized,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { Service } from "typedi";
import { UserRole } from "../enum";
import TaskService from "../Task/service";
import UserService from "../User/service";
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

  // TODO: 限制數量 收尋
  @Authorized()
  @Query((returns) => [Plan!])
  async plans() {
    return this.planService.getAll();
  }

  @Authorized(UserRole.ADMIN, UserRole.MANAGER)
  @Mutation((returns) => Plan, { name: "planAdd" })
  async add(@Arg("PlanAddInput") args: AddInput) {
    return this.planService.addPlan(args);
  }

  @Authorized(UserRole.ADMIN, UserRole.MANAGER)
  @Mutation((returns) => Plan, { name: "planSetter" })
  async setter(@Arg("PlanSetterInput") args: SetterInput) {
    return this.planService.updatePlan(args);
  }

  @Authorized(UserRole.ADMIN, UserRole.MANAGER)
  @Mutation((returns) => Plan, { name: "planRemove" })
  async remove(@Arg("planId") id: string) {
    return this.planService.removePlan(id);
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
