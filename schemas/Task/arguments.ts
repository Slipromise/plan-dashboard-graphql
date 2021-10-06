import { Length, length, Max, Min } from "class-validator";
import { ArgsType, Field, ID } from "type-graphql";
import { TaskStatus } from "../enum";
import Task from "./type";

@ArgsType()
export class TasksArguments implements Partial<Task> {
  @Field({ nullable: true })
  @Length(1)
  title?: string;

  @Field((type) => ID, { nullable: true })
  userId?: string;

  @Field((type) => TaskStatus, { nullable: true })
  status?: TaskStatus;

  @Field((type) => ID, { nullable: true })
  planId?: string;

  @Field({ nullable: true })
  bucket?: string;

  @Field()
  @Min(1)
  @Max(30)
  size: number = 15;

  @Field((type) => ID, { nullable: true })
  cursorId?: string;
}

@ArgsType()
export class ParticipatorsArguments {
  @Field()
  @Min(1)
  @Max(20)
  size: number = 5;
}

@ArgsType()
export class CommentsArguments {
  @Field()
  @Min(1)
  @Max(30)
  size: number = 15;

  @Field((type) => ID, { nullable: true })
  cursorId?: string;
}
