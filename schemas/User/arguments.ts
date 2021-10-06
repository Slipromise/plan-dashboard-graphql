import { IsEmail, Length, Max, Min } from "class-validator";
import { ArgsType, Field, ID } from "type-graphql";
import User from "./type";

@ArgsType()
export class UsersArgument implements Partial<User> {
  @Field({ nullable: true })
  @Length(1)
  name?: string;
  @Field({ nullable: true })
  @IsEmail()
  @Length(1)
  email?: string;

  @Field()
  @Min(1)
  @Max(20)
  size: number = 10;
}

@ArgsType()
export class PlansArguments {
  @Field({ defaultValue: 20 })
  @Max(40)
  @Min(1)
  size!: number;

  @Field((type) => ID, { nullable: true })
  cursorId?: string;
}

@ArgsType()
export class TasksArguments {
  @Field({ defaultValue: 20 })
  @Max(80)
  @Min(1)
  size!: number;

  @Field((type) => ID, { nullable: true })
  cursorId?: string;
}
