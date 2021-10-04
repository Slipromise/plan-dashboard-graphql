import { Arg, FieldResolver, Mutation, Resolver, Root } from "type-graphql";
import { Inject, Service } from "typedi";
import CommentService from "../Comment/service";
import PlanService from "../Plan/service";
import UserService from "../User/service";
import { AddTaskInput, ModifyTaskInput } from "./input";
import TaskService from "./service";
import Task from "./type";

@Service()
@Resolver((of) => Task)
export default class TaskResolver {
  constructor(
    private readonly taskService: TaskService,
    private readonly userService: UserService,
    private readonly commentService: CommentService,
    private readonly planService: PlanService
  ) {}

  @Mutation((returns) => Task)
  async addTask(@Arg("AddTaskInput") args: AddTaskInput) {
    return this.taskService.addTask(args);
  }
  @Mutation((returns) => Task)
  async modifyTask(@Arg("ModifyTaskInput") args: ModifyTaskInput) {
    return this.taskService.updateTask(args);
  }

  @FieldResolver()
  async participators(@Root() root: Task) {
    const { participatorsIds } = root;
    if (!participatorsIds) {
      return [];
    }
    return Promise.all(
      participatorsIds.map((id) => this.userService.getOne(id))
    );
  }
  @FieldResolver()
  async comments(@Root() root: Task) {
    const { id } = root;

    const allComment = await this.commentService.getAll();

    return allComment.filter((item) => id === item.taskId);
  }
  @FieldResolver()
  async plan(@Root() root: Task) {
    const { planId } = root;

    return this.planService.getOne(planId);
  }
}
