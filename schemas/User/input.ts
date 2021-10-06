import { IsEmail, Length } from "class-validator";
import { Field, InputType } from "type-graphql";
import User from "./type";

@InputType("UserRegisterInput")
export class RegisterInput implements Partial<User> {
  @Field()
  @IsEmail()
  email!: string;
  @Field()
  @Length(6, 20)
  password!: string;
}

@InputType("UserSettingInput")
export class SettingInput implements Partial<User> {
  @Field({ nullable: true })
  name?: string;
  @Field({ nullable: true })
  avatar?: string;
}

@InputType("UserLoginInput")
export class LoginInput implements Partial<User> {
  @Field()
  @IsEmail()
  email!: string;
  @Field()
  @Length(6, 20)
  password!: string;
}
