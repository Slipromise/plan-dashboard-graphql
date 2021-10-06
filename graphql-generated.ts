import { api } from './apiSlice';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BasePayload = {
  __typename?: 'BasePayload';
  isSuccess: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
};

export type Comment = {
  __typename?: 'Comment';
  content: Scalars['String'];
  creator: User;
  date: Scalars['String'];
  id: Scalars['ID'];
  isActivity?: Maybe<Scalars['Boolean']>;
  task: Task;
};

export type CommentAddInput = {
  content: Scalars['String'];
  taskId: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  commentAdd: BasePayload;
  planAdd: BasePayload;
  planRemove: BasePayload;
  planSetter: BasePayload;
  taskAdd: BasePayload;
  taskSetter: BasePayload;
  userLogin: UserLoginPayload;
  userRegister: UserRegisterPayload;
  userSetter: BasePayload;
};


export type MutationCommentAddArgs = {
  CommentAddInput: CommentAddInput;
};


export type MutationPlanAddArgs = {
  PlanAddInput: PlanAddInput;
};


export type MutationPlanRemoveArgs = {
  planId: Scalars['String'];
};


export type MutationPlanSetterArgs = {
  PlanSetterInput: PlanSetterInput;
};


export type MutationTaskAddArgs = {
  TaskAddInput: TaskAddInput;
};


export type MutationTaskSetterArgs = {
  SetterTaskInput: TaskSetterInput;
};


export type MutationUserLoginArgs = {
  LoginInput: UserLoginInput;
};


export type MutationUserRegisterArgs = {
  userRegisterInput: UserRegisterInput;
};


export type MutationUserSetterArgs = {
  ModifyUserInput: UserSettingInput;
};

export type Plan = {
  __typename?: 'Plan';
  buckets: Array<Scalars['String']>;
  creator: User;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isCurrent?: Maybe<Scalars['Boolean']>;
  isFavorite?: Maybe<Scalars['Boolean']>;
  members: Array<User>;
  name: Scalars['String'];
  tasks?: Maybe<Array<Task>>;
};

export type PlanAddInput = {
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type PlanSetterInput = {
  bucket?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isFavorite?: Maybe<Scalars['Boolean']>;
  memberId?: Maybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  comment: Comment;
  comments: Array<Comment>;
  me: User;
  plan: Plan;
  plans: Array<Plan>;
  task: Task;
  tasks: Array<Task>;
  user: User;
  users: Array<User>;
};


export type QueryCommentArgs = {
  commentId: Scalars['String'];
};


export type QueryCommentsArgs = {
  cursorId?: Maybe<Scalars['ID']>;
  size?: Maybe<Scalars['Int']>;
  taskId?: Maybe<Scalars['ID']>;
};


export type QueryPlanArgs = {
  planId: Scalars['String'];
};


export type QueryPlansArgs = {
  cursorId?: Maybe<Scalars['ID']>;
  isCurrent?: Maybe<Scalars['Boolean']>;
  isFavorite?: Maybe<Scalars['Boolean']>;
  memberID?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
};


export type QueryTaskArgs = {
  taskId: Scalars['String'];
};


export type QueryTasksArgs = {
  bucket?: Maybe<Scalars['String']>;
  cursorId?: Maybe<Scalars['ID']>;
  planId?: Maybe<Scalars['ID']>;
  size?: Maybe<Scalars['Float']>;
  status?: Maybe<TaskStatus>;
  title?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};


export type QueryUserArgs = {
  userId: Scalars['String'];
};


export type QueryUsersArgs = {
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
};

export type Task = {
  __typename?: 'Task';
  bucket: Scalars['String'];
  comments?: Maybe<Array<Comment>>;
  commentsLength?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  participators?: Maybe<Array<User>>;
  participatorsLength?: Maybe<Scalars['Float']>;
  plan: Plan;
  startDate?: Maybe<Scalars['String']>;
  status: TaskStatus;
  statusOptions: Array<TaskStatus>;
  title: Scalars['String'];
};


export type TaskCommentsArgs = {
  cursorId?: Maybe<Scalars['ID']>;
  size?: Maybe<Scalars['Float']>;
};


export type TaskParticipatorsArgs = {
  size?: Maybe<Scalars['Float']>;
};

export type TaskAddInput = {
  bucket?: Maybe<Scalars['String']>;
  planId: Scalars['ID'];
  title: Scalars['String'];
};

export type TaskSetterInput = {
  bucket?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  participatorsId?: Maybe<Scalars['ID']>;
  planId?: Maybe<Scalars['ID']>;
  startDate?: Maybe<Scalars['String']>;
  status?: Maybe<TaskStatus>;
  title?: Maybe<Scalars['String']>;
};

export enum TaskStatus {
  Accepting = 'ACCEPTING',
  Complete = 'COMPLETE',
  Fail = 'FAIL',
  Initial = 'INITIAL',
  Pending = 'PENDING',
  Progress = 'PROGRESS'
}

export type User = {
  __typename?: 'User';
  authToken?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  password: Scalars['String'];
  plans?: Maybe<Array<Plan>>;
  roles: Array<UserRole>;
  tasks?: Maybe<Array<Task>>;
};


export type UserPlansArgs = {
  cursorId?: Maybe<Scalars['ID']>;
  size?: Maybe<Scalars['Float']>;
};


export type UserTasksArgs = {
  cursorId?: Maybe<Scalars['ID']>;
  size?: Maybe<Scalars['Float']>;
};

export type UserLoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserLoginPayload = {
  __typename?: 'UserLoginPayload';
  isSuccess: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type UserRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserRegisterPayload = {
  __typename?: 'UserRegisterPayload';
  isSuccess: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export enum UserRole {
  Admin = 'ADMIN',
  Manager = 'MANAGER',
  Member = 'MEMBER'
}

export type UserSettingInput = {
  avatar?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type AddTaskMutationVariables = Exact<{
  taskAddInput: TaskAddInput;
}>;


export type AddTaskMutation = { __typename?: 'Mutation', taskAdd: { __typename?: 'BasePayload', isSuccess: boolean, message?: string | null | undefined } };

export type AddTaskCommentMutationVariables = Exact<{
  taskAddInput: TaskAddInput;
}>;


export type AddTaskCommentMutation = { __typename?: 'Mutation', taskAdd: { __typename?: 'BasePayload', isSuccess: boolean, message?: string | null | undefined } };

export type GetPlanQueryVariables = Exact<{
  planId: Scalars['String'];
}>;


export type GetPlanQuery = { __typename?: 'Query', plan: { __typename?: 'Plan', name: string, id: string, buckets: Array<string>, members: Array<{ __typename?: 'User', name: string, avatar?: string | null | undefined }> } };

export type GetPlanMemberAndSearchUserQueryVariables = Exact<{
  usersName?: Maybe<Scalars['String']>;
  planPlanId: Scalars['String'];
}>;


export type GetPlanMemberAndSearchUserQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', name: string, avatar?: string | null | undefined, id: string }>, plan: { __typename?: 'Plan', members: Array<{ __typename?: 'User', id: string, name: string, avatar?: string | null | undefined }> } };

export type GetPlanMemberAndTaskMemberQueryVariables = Exact<{
  planPlanId: Scalars['String'];
  taskTaskId: Scalars['String'];
}>;


export type GetPlanMemberAndTaskMemberQuery = { __typename?: 'Query', plan: { __typename?: 'Plan', members: Array<{ __typename?: 'User', name: string, avatar?: string | null | undefined, id: string }> }, task: { __typename?: 'Task', participators?: Array<{ __typename?: 'User', name: string, avatar?: string | null | undefined, id: string }> | null | undefined } };

export type GetPlanTasksQueryVariables = Exact<{
  tasksPlanId?: Maybe<Scalars['ID']>;
  tasksBucket?: Maybe<Scalars['String']>;
}>;


export type GetPlanTasksQuery = { __typename?: 'Query', tasks: Array<{ __typename?: 'Task', title: string, id: string, description?: string | null | undefined, participatorsLength?: number | null | undefined, commentsLength?: number | null | undefined, bucket: string, status: TaskStatus, statusOptions: Array<TaskStatus>, participators?: Array<{ __typename?: 'User', name: string, avatar?: string | null | undefined }> | null | undefined }> };

export type GetSelfPlansQueryVariables = Exact<{
  plansSize?: Maybe<Scalars['Float']>;
  plansCursorId?: Maybe<Scalars['ID']>;
}>;


export type GetSelfPlansQuery = { __typename?: 'Query', me: { __typename?: 'User', plans?: Array<{ __typename?: 'Plan', name: string, description?: string | null | undefined, isCurrent?: boolean | null | undefined, isFavorite?: boolean | null | undefined, id: string, members: Array<{ __typename?: 'User', name: string }> }> | null | undefined } };

export type GetSelfTasksQueryVariables = Exact<{
  tasksSize?: Maybe<Scalars['Float']>;
  tasksCursorId?: Maybe<Scalars['ID']>;
}>;


export type GetSelfTasksQuery = { __typename?: 'Query', me: { __typename?: 'User', tasks?: Array<{ __typename?: 'Task', title: string, description?: string | null | undefined, status: TaskStatus, id: string, statusOptions: Array<TaskStatus>, commentsLength?: number | null | undefined, participatorsLength?: number | null | undefined, plan: { __typename?: 'Plan', name: string }, participators?: Array<{ __typename?: 'User', name: string, avatar?: string | null | undefined }> | null | undefined }> | null | undefined } };

export type GetSelfUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSelfUserQuery = { __typename?: 'Query', me: { __typename?: 'User', name: string, email: string, avatar?: string | null | undefined, roles: Array<UserRole> } };

export type GetSidebarDataQueryVariables = Exact<{
  plansSize?: Maybe<Scalars['Float']>;
  plansCursorId?: Maybe<Scalars['ID']>;
}>;


export type GetSidebarDataQuery = { __typename?: 'Query', me: { __typename?: 'User', name: string, avatar?: string | null | undefined, plans?: Array<{ __typename?: 'Plan', name: string, id: string }> | null | undefined } };

export type GetTaskCommentsQueryVariables = Exact<{
  taskTaskId: Scalars['String'];
}>;


export type GetTaskCommentsQuery = { __typename?: 'Query', task: { __typename?: 'Task', comments?: Array<{ __typename?: 'Comment', content: string, id: string, date: string, creator: { __typename?: 'User', name: string } }> | null | undefined } };

export type GetTaskParticipatorsQueryVariables = Exact<{
  taskTaskId: Scalars['String'];
}>;


export type GetTaskParticipatorsQuery = { __typename?: 'Query', task: { __typename?: 'Task', participators?: Array<{ __typename?: 'User', name: string, avatar?: string | null | undefined, id: string }> | null | undefined } };

export type GetTokenQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTokenQuery = { __typename?: 'Query', me: { __typename?: 'User', authToken?: string | null | undefined } };

export type LoginMutationVariables = Exact<{
  loginInput: UserLoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', userLogin: { __typename?: 'UserLoginPayload', isSuccess: boolean, token?: string | null | undefined } };

export type RegisterMutationVariables = Exact<{
  userRegisterInput: UserRegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', userRegister: { __typename?: 'UserRegisterPayload', isSuccess: boolean, message?: string | null | undefined, token?: string | null | undefined } };

export type SetTaskMutationVariables = Exact<{
  taskSetterInput: TaskSetterInput;
}>;


export type SetTaskMutation = { __typename?: 'Mutation', taskSetter: { __typename?: 'BasePayload', isSuccess: boolean, message?: string | null | undefined } };


export const AddTaskDocument = `
    mutation AddTask($taskAddInput: TaskAddInput!) {
  taskAdd(TaskAddInput: $taskAddInput) {
    isSuccess
    message
  }
}
    `;
export const AddTaskCommentDocument = `
    mutation AddTaskComment($taskAddInput: TaskAddInput!) {
  taskAdd(TaskAddInput: $taskAddInput) {
    isSuccess
    message
  }
}
    `;
export const GetPlanDocument = `
    query GetPlan($planId: String!) {
  plan(planId: $planId) {
    name
    members {
      name
      avatar
    }
    id
    buckets
  }
}
    `;
export const GetPlanMemberAndSearchUserDocument = `
    query GetPlanMemberAndSearchUser($usersName: String, $planPlanId: String!) {
  users(name: $usersName) {
    name
    avatar
    id
  }
  plan(planId: $planPlanId) {
    members {
      id
      name
      avatar
    }
  }
}
    `;
export const GetPlanMemberAndTaskMemberDocument = `
    query GetPlanMemberAndTaskMember($planPlanId: String!, $taskTaskId: String!) {
  plan(planId: $planPlanId) {
    members {
      name
      avatar
      id
    }
  }
  task(taskId: $taskTaskId) {
    participators {
      name
      avatar
      id
    }
  }
}
    `;
export const GetPlanTasksDocument = `
    query GetPlanTasks($tasksPlanId: ID, $tasksBucket: String) {
  tasks(planId: $tasksPlanId, bucket: $tasksBucket) {
    title
    id
    description
    participatorsLength
    participators {
      name
      avatar
    }
    commentsLength
    bucket
    status
    statusOptions
  }
}
    `;
export const GetSelfPlansDocument = `
    query GetSelfPlans($plansSize: Float, $plansCursorId: ID) {
  me {
    plans(size: $plansSize, cursorId: $plansCursorId) {
      name
      members {
        name
      }
      description
      isCurrent
      isFavorite
      id
    }
  }
}
    `;
export const GetSelfTasksDocument = `
    query GetSelfTasks($tasksSize: Float, $tasksCursorId: ID) {
  me {
    tasks(size: $tasksSize, cursorId: $tasksCursorId) {
      title
      description
      status
      plan {
        name
      }
      id
      statusOptions
      commentsLength
      participatorsLength
      participators {
        name
        avatar
      }
    }
  }
}
    `;
export const GetSelfUserDocument = `
    query GetSelfUser {
  me {
    name
    email
    avatar
    roles
  }
}
    `;
export const GetSidebarDataDocument = `
    query GetSidebarData($plansSize: Float, $plansCursorId: ID) {
  me {
    name
    avatar
    plans(size: $plansSize, cursorId: $plansCursorId) {
      name
      id
    }
  }
}
    `;
export const GetTaskCommentsDocument = `
    query GetTaskComments($taskTaskId: String!) {
  task(taskId: $taskTaskId) {
    comments {
      content
      id
      date
      creator {
        name
      }
    }
  }
}
    `;
export const GetTaskParticipatorsDocument = `
    query GetTaskParticipators($taskTaskId: String!) {
  task(taskId: $taskTaskId) {
    participators {
      name
      avatar
      id
    }
  }
}
    `;
export const GetTokenDocument = `
    query GetToken {
  me {
    authToken
  }
}
    `;
export const LoginDocument = `
    mutation Login($loginInput: UserLoginInput!) {
  userLogin(LoginInput: $loginInput) {
    isSuccess
    token
  }
}
    `;
export const RegisterDocument = `
    mutation Register($userRegisterInput: UserRegisterInput!) {
  userRegister(userRegisterInput: $userRegisterInput) {
    isSuccess
    message
    token
  }
}
    `;
export const SetTaskDocument = `
    mutation SetTask($taskSetterInput: TaskSetterInput!) {
  taskSetter(SetterTaskInput: $taskSetterInput) {
    isSuccess
    message
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    AddTask: build.mutation<AddTaskMutation, AddTaskMutationVariables>({
      query: (variables) => ({ document: AddTaskDocument, variables })
    }),
    AddTaskComment: build.mutation<AddTaskCommentMutation, AddTaskCommentMutationVariables>({
      query: (variables) => ({ document: AddTaskCommentDocument, variables })
    }),
    GetPlan: build.query<GetPlanQuery, GetPlanQueryVariables>({
      query: (variables) => ({ document: GetPlanDocument, variables })
    }),
    GetPlanMemberAndSearchUser: build.query<GetPlanMemberAndSearchUserQuery, GetPlanMemberAndSearchUserQueryVariables>({
      query: (variables) => ({ document: GetPlanMemberAndSearchUserDocument, variables })
    }),
    GetPlanMemberAndTaskMember: build.query<GetPlanMemberAndTaskMemberQuery, GetPlanMemberAndTaskMemberQueryVariables>({
      query: (variables) => ({ document: GetPlanMemberAndTaskMemberDocument, variables })
    }),
    GetPlanTasks: build.query<GetPlanTasksQuery, GetPlanTasksQueryVariables | void>({
      query: (variables) => ({ document: GetPlanTasksDocument, variables })
    }),
    GetSelfPlans: build.query<GetSelfPlansQuery, GetSelfPlansQueryVariables | void>({
      query: (variables) => ({ document: GetSelfPlansDocument, variables })
    }),
    GetSelfTasks: build.query<GetSelfTasksQuery, GetSelfTasksQueryVariables | void>({
      query: (variables) => ({ document: GetSelfTasksDocument, variables })
    }),
    GetSelfUser: build.query<GetSelfUserQuery, GetSelfUserQueryVariables | void>({
      query: (variables) => ({ document: GetSelfUserDocument, variables })
    }),
    GetSidebarData: build.query<GetSidebarDataQuery, GetSidebarDataQueryVariables | void>({
      query: (variables) => ({ document: GetSidebarDataDocument, variables })
    }),
    GetTaskComments: build.query<GetTaskCommentsQuery, GetTaskCommentsQueryVariables>({
      query: (variables) => ({ document: GetTaskCommentsDocument, variables })
    }),
    GetTaskParticipators: build.query<GetTaskParticipatorsQuery, GetTaskParticipatorsQueryVariables>({
      query: (variables) => ({ document: GetTaskParticipatorsDocument, variables })
    }),
    GetToken: build.query<GetTokenQuery, GetTokenQueryVariables | void>({
      query: (variables) => ({ document: GetTokenDocument, variables })
    }),
    Login: build.mutation<LoginMutation, LoginMutationVariables>({
      query: (variables) => ({ document: LoginDocument, variables })
    }),
    Register: build.mutation<RegisterMutation, RegisterMutationVariables>({
      query: (variables) => ({ document: RegisterDocument, variables })
    }),
    SetTask: build.mutation<SetTaskMutation, SetTaskMutationVariables>({
      query: (variables) => ({ document: SetTaskDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useAddTaskMutation, useAddTaskCommentMutation, useGetPlanQuery, useLazyGetPlanQuery, useGetPlanMemberAndSearchUserQuery, useLazyGetPlanMemberAndSearchUserQuery, useGetPlanMemberAndTaskMemberQuery, useLazyGetPlanMemberAndTaskMemberQuery, useGetPlanTasksQuery, useLazyGetPlanTasksQuery, useGetSelfPlansQuery, useLazyGetSelfPlansQuery, useGetSelfTasksQuery, useLazyGetSelfTasksQuery, useGetSelfUserQuery, useLazyGetSelfUserQuery, useGetSidebarDataQuery, useLazyGetSidebarDataQuery, useGetTaskCommentsQuery, useLazyGetTaskCommentsQuery, useGetTaskParticipatorsQuery, useLazyGetTaskParticipatorsQuery, useGetTokenQuery, useLazyGetTokenQuery, useLoginMutation, useRegisterMutation, useSetTaskMutation } = injectedRtkApi;

