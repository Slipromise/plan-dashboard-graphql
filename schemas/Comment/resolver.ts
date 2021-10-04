import {
  Arg,
  Authorized,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  ResolverInterface,
  Root,
} from "type-graphql";
import { Service } from "typedi";
import TaskService from "../Task/service";
import UserService from "../User/service";
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

  // TODO: 限制數量 收尋
  @Authorized()
  @Query((returns) => [Comment!])
  async comments() {
    return this.commentService.getAll();
  }

  // TODO: 取得所有評論 pagination

  @Authorized()
  @Mutation((returns) => Comment, { name: "commentAdd" })
  async add(@Arg("CommentAddInput") args: AddInput) {
    return this.commentService.add(args);
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
