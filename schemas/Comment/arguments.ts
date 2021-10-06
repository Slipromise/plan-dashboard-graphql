import { IsInt, Max, Min, NotEquals } from "class-validator";
import { ArgsType, Field, ID, Int } from "type-graphql";
import Comment from "./type";

@ArgsType()
export class CommentsArguments implements Partial<Comment> {
  @Field((type) => ID, { nullable: true })
  taskId?: string;

  @Field((type) => Int)
  @Min(-15)
  @Max(15)
  @NotEquals(0)
  size: number = 15;

  @Field((type) => ID, { nullable: true })
  cursorId?: string;
}
