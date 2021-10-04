import { Field, InputType } from "type-graphql";
import User from "./type";

@InputType()
export class RegisterUserInput implements Partial<User> {
  @Field()
  email!: string;
  @Field()
  password!: string;
}

@InputType()
export class ModifyUserInput implements Partial<User> {
  @Field({ nullable: true })
  name?: string;
  @Field({ nullable: true })
  avatar?: string;
}
