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
import { BasePayload } from "../payload";
import TaskService from "../Task/service";
import UserService from "../User/service";
import { CommentsArguments } from "./arguments";
import { AddInput } from "./input";
import CommentService from "./service";
import Comment from "./type";

@Service()
@Resolver((of) => Comment)
export default class CommentResolver {
  constructor(
    private readonly commentService: CommentService,
    private readonly userService: UserService,
    private readonly taskService: TaskService
  ) {}

  @Authorized()
  @Query((returns) => Comment)
  async comment(@Arg("commentId") id: string) {
    return this.commentService.getOne(id);
  }

  @Authorized()
  @Query((returns) => [Comment!])
  async comments(@Args() args: CommentsArguments) {
    const { taskId, size, cursorId } = args;
    let result = await this.commentService.getAll();

    result = taskId ? result.filter((item) => item.taskId === taskId) : result;

    const foundIndex = cursorId
      ? result.findIndex((item) => item.id === cursorId)
      : undefined;

    result =
      size > 0 && foundIndex !== undefined
        ? result.slice(foundIndex + 1, foundIndex + 1 + size)
        : size < 0 && foundIndex !== undefined
        ? result.reverse().slice(foundIndex + 1, foundIndex + 1 + size)
        : result.slice(0, size);

    return result;
  }

  @Authorized()
  @Mutation((returns) => BasePayload, { name: "commentAdd" })
  async add(
    @Arg("CommentAddInput") arg: AddInput,
    @Ctx() ctx: Context
  ): Promise<BasePayload> {
    const { user } = ctx;

    user &&
      this.commentService.add({
        ...arg,
        creatorId: user.id,
        date: new Date().toISOString(),
      });

    return {
      isSuccess: !!user,
      message: !user ? "No user data" : undefined,
    };
  }

  @Authorized()
  @FieldResolver()
  async creator(@Root() root: Comment) {
    return this.userService.getOne(root.creatorId);
  }

  @Authorized()
  @FieldResolver()
  async task(@Root() root: Comment) {
    return this.taskService.getOne(root.taskId);
  }
}
