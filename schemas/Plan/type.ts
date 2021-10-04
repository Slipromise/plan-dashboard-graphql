import { Field, ID, ObjectType } from "type-graphql";
import Task from "../Task/type";
import User from "../User/type";

@ObjectType()
export default class Plan {
  @Field((type) => ID)
  id!: string;

  @Field()
  name!: string;

  @Field((type) => User)
  creator!: User;

  creatorId!: User["id"];

  @Field((type) => [User!])
  members!: User[];

  membersIds!: User["id"][];

  @Field((type) => [Task!], { nullable: true })
  tasks?: Task[];

  @Field({ nullable: true })
  isFavorite?: boolean;

  @Field({ nullable: true })
  isCurrent?: boolean;

  @Field({ nullable: true })
  description?: string;

  @Field((type) => [String!])
  buckets!: string[];
}
