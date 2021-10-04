import { UserRole } from "../enum";
import User from "./type";

function createUser(props: Partial<User>): User {
  return Object.assign(new User(), props);
}

export const sampleUsers = [
  createUser({
    id: "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    name: "Josephine Cox",
    email: "job@robiwof.gn",
    password: "123456",
    roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.MEMBER],
  }),
  createUser({
    id: "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
    name: "Dominic Boone",
    email: "nuoko@izirat.uz",
    password: "123456",
    roles: [UserRole.MANAGER, UserRole.MEMBER],
  }),
  createUser({
    id: "816edecb-eb90-5e2b-b5ed-c48719cc0d9b",
    name: "Lottie Benson",
    email: "porawusi@towkapju.kn",
    password: "123456",
    roles: [UserRole.MEMBER],
  }),
  createUser({
    id: "1e69f37b-bcba-58fd-ab05-e409cce8f5f5",
    name: "Lewis Rios",
    email: "nitije@mukutfe.zw",
    password: "123456",
    roles: [UserRole.MEMBER],
  }),
  createUser({
    id: "5d7527c7-20e8-5eb0-baa2-a9ca93bfc0a8",
    name: "Harold Bailey",
    email: "sikuc@zutzitva.eu",
    password: "123456",
    roles: [UserRole.MEMBER],
  }),
];
