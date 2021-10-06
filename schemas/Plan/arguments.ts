import { ArgsType, Field, ID } from "type-graphql";
import Plan from "./type";

@ArgsType()
export class PlansArguments implements Partial<Plan> {
  @Field({ nullable: true })
  name?: string;

  @Field((type) => ID, { nullable: true })
  memberID?: string;

  //   TODO: 待實作
  @Field({ nullable: true })
  isFavorite?: boolean;

  //   TODO: 待實作
  @Field({ nullable: true })
  isCurrent?: boolean;

  @Field({ nullable: true })
  size?: number;

  @Field((type) => ID, { nullable: true })
  cursorId?: string;
}
