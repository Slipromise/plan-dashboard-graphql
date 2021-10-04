import { Field, ID, ObjectType } from "type-graphql";
import Comment from "../Comment/type";
import { TaskStatus } from "../enum";
import Plan from "../Plan/type";
import User from "../User/type";

@ObjectType()
export default class Task {
  @Field((type) => ID)
  id!: string;

  @Field()
  title!: string;

  @Field()
  bucket!: string;

  @Field({ nullable: true })
  description?: string;

  @Field((type) => [User!], { nullable: true })
  participators?: User[];

  // TODO: participators 數量

  participatorsIds?: User["id"][];

  @Field({ nullable: true })
  startDate?: string;

  @Field({ nullable: true })
  endDate?: string;

  @Field((type) => [Comment!], { nullable: true })
  comments?: Comment[];

  // TODO: comments 數量

  @Field((type) => TaskStatus)
  status!: TaskStatus;

  // TODO: status 列舉

  @Field(() => Plan)
  plan!: Plan;

  planId!: Plan["id"];
}
