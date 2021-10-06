import { Length } from "class-validator";
import { Field, ID, InputType } from "type-graphql";
import User from "../User/type";
import Plan from "./type";

@InputType("PlanAddInput")
export class AddInput implements Partial<Plan> {
  @Field({ nullable: true })
  description?: string;
  @Field()
  @Length(1, 25)
  name!: string;
}

@InputType("PlanSetterInput")
export class SetterInput implements Partial<Plan> {
  @Field((type) => ID)
  id!: string;
  @Field({ nullable: true })
  isFavorite?: boolean;
  @Field({ nullable: true })
  description?: string;
  @Field({ nullable: true })
  bucket?: string;
  @Field((type) => ID, { nullable: true })
  memberId?: User["id"];
}
