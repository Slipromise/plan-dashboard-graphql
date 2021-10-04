import { Field, ID, InputType } from "type-graphql";
import User from "../User/type";
import Plan from "./type";

@InputType()
export class AddPlanInput implements Partial<Plan> {
  @Field((type) => ID)
  creatorId!: User["id"];
  @Field({ nullable: true })
  description?: string;
}

@InputType()
export class ModifyPlanInput implements Partial<Plan> {
  @Field({ nullable: true })
  isFavorite?: boolean;
  @Field({ nullable: true })
  description?: string;
  @Field({ nullable: true })
  bucket?: string;
  @Field((type) => ID, { nullable: true })
  memberId?: User["id"];
}
