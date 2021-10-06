import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class BasePayload {
  @Field()
  isSuccess!: boolean;
  @Field({ nullable: true })
  message?: string;
}
