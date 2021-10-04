import { TaskStatus } from "../enum";
import Task from "./type";

function createTask(props: Partial<Task>): Task {
  return Object.assign(new Task(), props);
}

export const sampleTasks = [
  createTask({
    id: "45366db7-fc8d-56f8-abc5-fc200e801f7d",
    title: "Mollie Matthews",
    bucket: "Todo",
    participatorsIds: ["1df9aa13-1c74-5955-9c82-1b8ee73aa055"],
    status: TaskStatus.ACCEPTING,
    planId: "584fb04b-4160-57fd-a47a-b669f3082bf2",
  }),
  createTask({
    id: "20233894-fc9f-5cf9-8526-55b07399c43d",
    title: "Effie Caldwell",
    bucket: "Todo",
    participatorsIds: ["1df9aa13-1c74-5955-9c82-1b8ee73aa055"],
    status: TaskStatus.ACCEPTING,
    planId: "584fb04b-4160-57fd-a47a-b669f3082bf2",
  }),
  createTask({
    id: "41bd944b-f695-5c7a-9136-4b42cc9cfb55",
    title: "Herbert McDaniel",
    bucket: "Todo",
    participatorsIds: [
      "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
      "1e69f37b-bcba-58fd-ab05-e409cce8f5f5",
    ],
    status: TaskStatus.ACCEPTING,
    planId: "db8f7668-b9b0-5e4d-b38d-ca925dabe339",
  }),
  createTask({
    id: "480d669b-53dc-5b22-b322-c378aa9c038d",
    title: "Birdie Houston",
    bucket: "Todo",
    participatorsIds: ["3e5d246b-2548-5276-bd9b-16fa453fc7e5"],
    status: TaskStatus.ACCEPTING,
    planId: "db8f7668-b9b0-5e4d-b38d-ca925dabe339",
  }),
  createTask({
    id: "3ef1126d-5b65-5056-a932-3191551bc82a",
    title: "Curtis Silva",
    bucket: "Todo",
    participatorsIds: ["3e5d246b-2548-5276-bd9b-16fa453fc7e5"],
    status: TaskStatus.ACCEPTING,
    planId: "db8f7668-b9b0-5e4d-b38d-ca925dabe339",
  }),
  createTask({
    id: "bd0dfe16-f442-5f97-a6e0-26761835517c",
    title: "Olga Pena",
    bucket: "Todo",
    participatorsIds: ["3e5d246b-2548-5276-bd9b-16fa453fc7e5"],
    status: TaskStatus.ACCEPTING,
    planId: "bcca285b-98d3-5e45-b8c6-3f135e046493",
  }),
  createTask({
    id: "3deb5406-818b-5783-99ce-d4b7c7508719",
    title: "Luke Hall",
    bucket: "Todo",
    participatorsIds: ["3e5d246b-2548-5276-bd9b-16fa453fc7e5"],
    status: TaskStatus.ACCEPTING,
    planId: "bcca285b-98d3-5e45-b8c6-3f135e046493",
  }),
  createTask({
    id: "84383320-a771-5ff8-9743-c405cf61e06c",
    title: "Antonio Carr",
    bucket: "Todo",
    participatorsIds: ["3e5d246b-2548-5276-bd9b-16fa453fc7e5"],
    status: TaskStatus.ACCEPTING,
    planId: "bcca285b-98d3-5e45-b8c6-3f135e046493",
  }),
  createTask({
    id: "b51b9775-ad41-59c7-aa3c-288bbc7f95c9",
    title: "Andre Flores",
    bucket: "Todo",
    participatorsIds: ["3e5d246b-2548-5276-bd9b-16fa453fc7e5"],
    status: TaskStatus.ACCEPTING,
    planId: "bcca285b-98d3-5e45-b8c6-3f135e046493",
  }),
  createTask({
    id: "f210472c-eff3-5153-b4d2-0139c808c796",
    title: "Vera Vaughn",
    bucket: "Todo",
    participatorsIds: ["3e5d246b-2548-5276-bd9b-16fa453fc7e5"],
    status: TaskStatus.ACCEPTING,
    planId: "bcca285b-98d3-5e45-b8c6-3f135e046493",
  }),
];
