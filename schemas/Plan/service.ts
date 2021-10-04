import Plan from "./type";
import { v4 as uuid } from "uuid";
import { Inject, Service } from "typedi";

@Service()
export default class PlanService {
  constructor(@Inject("SAMPLE_PLANS") private readonly plans: Plan[]) {}

  async getAll() {
    return this.plans;
  }

  async getOne(id: string) {
    const found = this.plans.find((item) => id === item.id);
    if (!found) {
      throw new Error("Plan not found");
    }
    return found;
  }

  async addPlan(data: Partial<Plan>) {
    const plan = this.create(data);
    this.plans.push(plan);
    return plan;
  }

  async updatePlan(data: Partial<Plan>) {
    if (!data.id) {
      throw new Error("Plan's id is none");
    }
    const plan = await this.getOne(data.id);
    Object.assign(plan, data);
    return plan;
  }

  async removePlan(id: string) {
    const plan = await this.getOne(id);
    this.plans.splice(this.plans.indexOf(plan), 1);
    return plan;
  }

  private create(props: Partial<Plan>): Plan {
    const plan = Object.assign(new Plan(), props);
    plan.id = uuid();
    plan.membersIds = [plan.creatorId];
    plan.buckets = ["Todo"];
    return plan;
  }
}
