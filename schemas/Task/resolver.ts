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
import { Inject, Service } from "typedi";
import { Context } from "../..";
import CommentService from "../Comment/service";
import { TaskStatus } from "../enum";
import { BasePayload } from "../payload";
import PlanService from "../Plan/service";
import UserService from "../User/service";
import {
  CommentsArguments,
  ParticipatorsArguments,
  TasksArguments,
} from "./arguments";
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

  @Authorized()
  @Query((returns) => [Task!])
  async tasks(@Args() args: TasksArguments) {
    const { size, cursorId, title, userId, status, planId, bucket } = args;

    let result = await this.taskService.getAll();

    result = result.filter(
      (item) =>
        (!status || item.status === status) &&
        (!planId || item.planId === planId) &&
        (!bucket || item.bucket === bucket) &&
        (!title || item.title.includes(title)) &&
        (!userId || item.participatorsIds?.includes(userId))
    );

    const foundIndex = result.findIndex((item) => item.id === cursorId) + 1;

    result = result.slice(foundIndex, foundIndex + size);

    return result;
  }

  @Authorized()
  @Query((returns) => Task)
  async task(@Arg("taskId") id: string) {
    return this.taskService.getOne(id);
  }

  @Authorized()
  @Mutation((returns) => BasePayload, { name: "taskAdd" })
  async add(@Arg("TaskAddInput") args: AddInput): Promise<BasePayload> {
    this.taskService.addTask(args);
    return { isSuccess: true };
  }

  @Authorized()
  @Mutation((returns) => BasePayload, { name: "taskSetter" })
  async setter(
    @Arg("SetterTaskInput") args: SetterInput
  ): Promise<BasePayload> {
    this.taskService.updateTask(args);
    return { isSuccess: true };
  }

  @Authorized()
  @FieldResolver()
  async participators(
    @Root() root: Task,
    @Args() args: ParticipatorsArguments
  ) {
    const { participatorsIds } = root;
    if (!participatorsIds) {
      return [];
    }

    const result = participatorsIds.slice(0, args.size);

    return Promise.all(result.map((id) => this.userService.getOne(id)));
  }

  @Authorized()
  @FieldResolver()
  async comments(@Root() root: Task, @Args() args: CommentsArguments) {
    const { id } = root;

    const { size, cursorId } = args;

    const allComment = await this.commentService.getAll();

    const foundIndex = cursorId
      ? allComment.findIndex((item) => item.id === cursorId)
      : -1;

    const result = allComment
      .slice(foundIndex + 1, foundIndex + 1 + size)
      .filter((item) => id === item.taskId);

    return result;
  }

  @Authorized()
  @FieldResolver()
  async plan(@Root() root: Task) {
    const { planId } = root;

    return this.planService.getOne(planId);
  }

  @Authorized()
  @FieldResolver()
  async participatorsLength(@Root() root: Task) {
    return root.participatorsIds?.length || 0;
  }

  @Authorized()
  @FieldResolver()
  async commentsLength(@Root() root: Task) {
    const { id } = root;

    const allComment = await this.commentService.getAll();

    return allComment.filter((item) => id === item.taskId).length;
  }

  @Authorized()
  @FieldResolver()
  async statusOptions() {
    // TODO: 身份條件限制
    return [
      TaskStatus.INITIAL,
      TaskStatus.ACCEPTING,
      TaskStatus.PROGRESS,
      TaskStatus.PENDING,
      TaskStatus.FAIL,
      TaskStatus.COMPLETE,
    ];
  }
}
