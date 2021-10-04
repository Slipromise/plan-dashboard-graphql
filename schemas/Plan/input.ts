import { Field, ID, InputType } from "type-graphql";
import User from "../User/type";
import Plan from "./type";

@InputType("PlanAddInput")
export class AddInput implements Partial<Plan> {
  @Field((type) => ID)
  creatorId!: User["id"];
  @Field({ nullable: true })
  description?: string;
}

@InputType("PlanSetterInput")
export class SetterInput implements Partial<Plan> {
  @Field({ nullable: true })
  isFavorite?: boolean;
  @Field({ nullable: true })
  description?: string;
  @Field({ nullable: true })
  bucket?: string;
  @Field((type) => ID, { nullable: true })
  memberId?: User["id"];
}
