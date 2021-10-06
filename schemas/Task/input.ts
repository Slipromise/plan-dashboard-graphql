import { Field, ID, InputType } from "type-graphql";
import { TaskStatus } from "../enum";
import Task from "./type";

@InputType("TaskAddInput")
export class AddInput implements Partial<Task> {
  @Field()
  title!: string;

  @Field({ nullable: true, defaultValue: "Todo" })
  bucket!: string;

  @Field((type) => ID)
  planId!: string;
}

@InputType("TaskSetterInput")
export class SetterInput implements Partial<Task> {
  @Field((type) => ID)
  id!: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  bucket?: string;

  @Field({ nullable: true })
  description?: string;

  @Field((type) => ID, { nullable: true })
  participatorsId?: string;

  @Field({ nullable: true })
  startDate?: string;

  @Field({ nullable: true })
  endDate?: string;

  @Field((type) => TaskStatus, { nullable: true })
  status?: TaskStatus;

  @Field((type) => ID, { nullable: true })
  planId?: string;
}
