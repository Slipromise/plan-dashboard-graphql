import User from "./type";
import { v4 as uuid } from "uuid";
import { Inject, Service } from "typedi";

@Service()
export default class UserService {
  constructor(@Inject("SAMPLE_USERS") private readonly users: User[]) {}

  async getAll() {
    return this.users;
  }

  async getOne(id: string) {
    const found = this.users.find((item) => id === item.id);
    if (!found) {
      throw new Error("Plan not found");
    }
    return found;
  }

  async addUser(data: Partial<User>) {
    const user = this.create(data);

    this.users.push(user);

    return user;
  }

  async updateUser(data: Partial<User>) {
    if (!data.id) {
      throw new Error("User's id is none");
    }
    const user = await this.getOne(data.id);
    Object.assign(user, data);
    return user;
  }

  async removeUser(id: string) {
    const user = await this.getOne(id);
    this.users.splice(this.users.indexOf(user), 1);
    return user;
  }

  private create(props: Partial<User>) {
    const user = Object.assign(new User(), props);
    user.id = uuid();
    return user;
  }
}
