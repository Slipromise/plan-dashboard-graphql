import { Field, ObjectType } from "type-graphql";
import { BasePayload } from "../payload";

@ObjectType("UserLoginPayload")
export class LoginPayload extends BasePayload {
  @Field({ nullable: true })
  token?: string;
}

@ObjectType("UserRegisterPayload")
export class RegisterPayload extends BasePayload {
  @Field({ nullable: true })
  token?: string;
}
