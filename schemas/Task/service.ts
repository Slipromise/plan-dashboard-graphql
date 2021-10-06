import Task from "./type";
import { v4 as uuid } from "uuid";
import { TaskStatus } from "../enum";
import { Inject, Service } from "typedi";

@Service()
export default class TaskService {
  constructor(@Inject("SAMPLE_TASKS") private readonly tasks: Task[]) {}

  async getAll() {
    return this.tasks;
  }

  async getOne(id: string) {
    const found = this.tasks.find((item) => id === item.id);

    if (!found) {
      throw new Error("Task not found");
    }
    return found;
  }

  async addTask(data: Partial<Task>) {
    const task = this.create(data);

    this.tasks.push(task);

    return task;
  }

  async updateTask(data: Partial<Task>) {
    if (!data.id) {
      throw new Error("Task's id is none");
    }
    const task = await this.getOne(data.id);
    Object.assign(task, data);
    return task;
  }

  async removeTask(id: string) {
    const task = await this.getOne(id);
    this.tasks.splice(this.tasks.indexOf(task), 1);
    return task;
  }

  private create(props: Partial<Task>) {
    const task = Object.assign(new Task(), props);
    task.id = uuid();
    task.status = TaskStatus.INITIAL;
    return task;
  }
}
