import { Authorized, Field, ID, ObjectType } from "type-graphql";
import { UserRole } from "../enum";
import Plan from "../Plan/type";
import Task from "../Task/type";

@ObjectType()
export default class User {
  @Field((type) => ID)
  id!: string;

  @Field()
  name?: string;

  @Field()
  email!: string;

  @Authorized(UserRole.ADMIN)
  @Field()
  password!: string;

  @Field({ nullable: true })
  avatar?: string;

  @Field(() => [Plan!], { nullable: true })
  plans?: Plan[];

  @Field(() => [Task!], { nullable: true })
  tasks?: Task[];

  @Field({ nullable: true })
  authToken?: string;

  @Field((type) => [UserRole!])
  roles!: UserRole[];
}
