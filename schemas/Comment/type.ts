import { Field, ID, ObjectType } from "type-graphql";
import Task from "../Task/type";
import User from "../User/type";

@ObjectType()
export default class Comment {
  @Field((type) => ID)
  id!: string;

  @Field()
  date!: string;

  @Field()
  content!: string;

  @Field((type) => User!)
  creator!: User;

  creatorId!: User["id"];

  @Field({ nullable: true })
  isActivity?: boolean;

  @Field((type) => Task)
  task!: Task;

  taskId!: Task["id"];
}
