import {
  Arg,
  FieldResolver,
  Mutation,
  Resolver,
  ResolverInterface,
  Root,
} from "type-graphql";
import { Service } from "typedi";
import TaskService from "../Task/service";
import UserService from "../User/service";
import { AddCommentInput } from "./input";
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

  @Mutation((returns) => Comment)
  async addComment(@Arg("AddCommentInput") args: AddCommentInput) {
    return this.commentService.add(args);
  }

  @FieldResolver()
  async creator(@Root() root: Comment) {
    return this.userService.getOne(root.creatorId);
  }

  @FieldResolver()
  async task(@Root() root: Comment) {
    return this.taskService.getOne(root.taskId);
  }
}
