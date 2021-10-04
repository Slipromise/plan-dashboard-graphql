import { registerEnumType } from "type-graphql";

export enum TaskStatus {
  INITIAL,
  PROGRESS,
  COMPLETE,
  FAIL,
  PENDING,
  ACCEPTING,
}

registerEnumType(TaskStatus, { name: "TaskStatus" });

export enum UserRole {
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
  MEMBER = "MEMBER",
}

registerEnumType(UserRole, { name: "UserRole" });
