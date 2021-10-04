import { Field, InputType } from "type-graphql";
import User from "./type";

@InputType("UserRegisterInput")
export class RegisterInput implements Partial<User> {
  @Field()
  email!: string;
  @Field()
  password!: string;
}

@InputType("UserSettingInput")
export class SettingInput implements Partial<User> {
  @Field({ nullable: true })
  name?: string;
  @Field({ nullable: true })
  avatar?: string;
}
