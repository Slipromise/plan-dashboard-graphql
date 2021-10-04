import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { Service } from "typedi";
import TaskService from "../Task/service";
import UserService from "../User/service";
import { AddPlanInput, ModifyPlanInput } from "./input";
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

  @Query((returns) => Plan)
  async plan(@Arg("planId") id: string) {
    return this.planService.getOne(id);
  }

  @Query((returns) => [Plan!])
  async plans() {
    return this.planService.getAll();
  }

  @Mutation((returns) => Plan)
  async addPlan(@Arg("AddPlanInput") args: AddPlanInput) {
    return this.planService.addPlan(args);
  }

  @Mutation((returns) => Plan)
  async ModifyPlan(@Arg("ModifyPlanInput") args: ModifyPlanInput) {
    return this.planService.updatePlan(args);
  }

  @Mutation((returns) => Plan)
  async removePlan(@Arg("planId") id: string) {
    return this.planService.removePlan(id);
  }

  @FieldResolver()
  async creator(@Root() root: Plan) {
    return this.userService.getOne(root.creatorId);
  }

  @FieldResolver()
  async members(@Root() root: Plan) {
    const { membersIds } = root;
    return Promise.all(membersIds.map((id) => this.userService.getOne(id)));
  }
  @FieldResolver()
  async tasks(@Root() root: Plan) {
    const { id } = root;
    const allTasks = await this.taskService.getAll();
    return allTasks.filter((item) => item.planId === id);
  }
}
