import { Field, ID, InputType } from "type-graphql";
import Task from "../Task/type";
import User from "../User/type";
import Comment from "./type";

@InputType()
export class AddCommentInput implements Partial<Comment> {
  @Field()
  content!: string;

  @Field((type) => ID)
  taskId!: Task["id"];
}
