import {
  Arg,
  Authorized,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { Inject, Service } from "typedi";
import CommentService from "../Comment/service";
import PlanService from "../Plan/service";
import UserService from "../User/service";
import { AddInput, SetterInput } from "./input";
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

  // TODO: 數量 收尋條件
  @Authorized()
  @Query((returns) => [Task!])
  async tasks() {
    return this.taskService.getAll();
  }

  @Authorized()
  @Query((returns) => Task)
  async task(@Arg("taskId") id: string) {
    return this.taskService.getOne(id);
  }

  // TODO: Payload

  @Authorized()
  @Mutation((returns) => Task, { name: "taskAdd" })
  async add(@Arg("TaskAddInput") args: AddInput) {
    return this.taskService.addTask(args);
  }

  // TODO: Payload

  @Authorized()
  @Mutation((returns) => Task, { name: "taskSetter" })
  async setter(@Arg("SetterTaskInput") args: SetterInput) {
    return this.taskService.updateTask(args);
  }

  @Authorized()
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

  @Authorized()
  @FieldResolver()
  async comments(@Root() root: Task) {
    const { id } = root;

    const allComment = await this.commentService.getAll();

    return allComment.filter((item) => id === item.taskId);
  }

  @Authorized()
  @FieldResolver()
  async plan(@Root() root: Task) {
    const { planId } = root;

    return this.planService.getOne(planId);
  }
}
