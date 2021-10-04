import "reflect-metadata";
import { ApolloServer, gql } from "apollo-server";
import * as path from "path";
import Container from "typedi";
import CommentResolver from "./schemas/Comment/resolver";
import PlanResolver from "./schemas/Plan/resolver";
import TaskResolver from "./schemas/Task/resolver";
import UserResolver from "./schemas/User/resolver";
import { sampleComments } from "./schemas/Comment/sample";
import { samplePlans } from "./schemas/Plan/sample";
import { sampleTasks } from "./schemas/Task/sample";
import { sampleUsers } from "./schemas/User/sample";
import { AuthChecker, buildSchema } from "type-graphql";
import User from "./schemas/User/type";
import { ContextFunction } from "apollo-server-core";
import { ExpressContext } from "apollo-server-express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { UserRole } from "./schemas/enum";

export const privateKey =
  "557q4uzfepw39s0cdus5ezunle63rlvxp40s8g7vk6s61xw47k372qjgnr5bszj4";

export type CustomJwtPayload = {
  sub: string;
  name: string;
  roles: UserRole[];
} & JwtPayload;

export type Context = {
  user?: Pick<User, "id" | "roles">;
} & ExpressContext;

Container.set({ id: "SAMPLE_COMMENTS", factory: () => sampleComments.slice() });
Container.set({ id: "SAMPLE_PLANS", factory: () => samplePlans.slice() });
Container.set({ id: "SAMPLE_TASKS", factory: () => sampleTasks.slice() });
Container.set({ id: "SAMPLE_USERS", factory: () => sampleUsers.slice() });

const authChecker: AuthChecker<Context> = ({ context }, roles) => {
  const { user } = context;

  const result =
    roles.length === 0
      ? !!user
      : user?.roles.some((role) => roles.includes(role))
      ? true
      : false;

  return result;
};

const context: ContextFunction<ExpressContext, Context> = (context) => {
  const { authorization } = context.req.headers;

  const authorizationSections = authorization?.split(/\s+/);

  const isBearer = authorizationSections?.[0] === "Bearer";

  const token = isBearer ? authorizationSections?.[1] : undefined;

  let user: Context["user"];

  if (token) {
    const { sub, roles } = jwt.verify(token, privateKey) as CustomJwtPayload;
    user = { id: sub, roles };
  }

  const result: Context = {
    ...context,
    user,
  };

  return result;
};

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [CommentResolver, PlanResolver, TaskResolver, UserResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
    container: Container,
    authChecker,
  });

  const server = new ApolloServer({
    schema,
    context,
  });

  const { url } = await server.listen(4000);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
