import { Field, ObjectType } from "type-graphql";
import { BasePayload } from "../payload";

@ObjectType()
export class LoginPayload extends BasePayload {
  @Field({ nullable: true })
  token?: string;
}
