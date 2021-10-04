import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class BasePayload {
  @Field()
  isSuccess!: boolean;
  @Field()
  message?: string;
}
