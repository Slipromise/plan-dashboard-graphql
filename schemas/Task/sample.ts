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
  // ---
  createTask({
    id: "d72ecb8d-ad56-5ea8-b9de-be4ba19841a2",
    title: "Teresa Diaz",
    bucket: "Todo",
    participatorsIds: ["1df9aa13-1c74-5955-9c82-1b8ee73aa055"],
    status: TaskStatus.ACCEPTING,
    planId: "584fb04b-4160-57fd-a47a-b669f3082bf2",
  }),
  createTask({
    id: "45e3d9e0-e45a-5269-86b5-258c2014b579",
    title: "Augusta Gray",
    bucket: "Todo",
    participatorsIds: ["1df9aa13-1c74-5955-9c82-1b8ee73aa055"],
    status: TaskStatus.ACCEPTING,
    planId: "584fb04b-4160-57fd-a47a-b669f3082bf2",
  }),
  createTask({
    id: "713c35ac-5007-5ed3-a221-240cb9c2cd73",
    title: "Amanda Maxwell",
    bucket: "Todo",
    participatorsIds: ["1df9aa13-1c74-5955-9c82-1b8ee73aa055"],
    status: TaskStatus.ACCEPTING,
    planId: "584fb04b-4160-57fd-a47a-b669f3082bf2",
  }),
  createTask({
    id: "20beabeb-3428-5ed1-b5ab-a0defd72183e",
    title: "Georgia Reeves",
    bucket: "Todo",
    participatorsIds: ["1df9aa13-1c74-5955-9c82-1b8ee73aa055"],
    status: TaskStatus.ACCEPTING,
    planId: "584fb04b-4160-57fd-a47a-b669f3082bf2",
  }),
  createTask({
    id: "9ad2d28a-12be-50d9-bc0d-0227d48c0087",
    title: "Jonathan Alvarez",
    bucket: "Todo",
    participatorsIds: ["1df9aa13-1c74-5955-9c82-1b8ee73aa055"],
    status: TaskStatus.ACCEPTING,
    planId: "584fb04b-4160-57fd-a47a-b669f3082bf2",
  }),
  createTask({
    id: "8be51d76-2a6b-5276-b444-67496445ea63",
    title: "Abbie Reynolds",
    bucket: "Todo",
    participatorsIds: ["1df9aa13-1c74-5955-9c82-1b8ee73aa055"],
    status: TaskStatus.ACCEPTING,
    planId: "584fb04b-4160-57fd-a47a-b669f3082bf2",
  }),
  createTask({
    id: "dfe4e297-9ee3-51fd-83c5-52d1f948820c",
    title: "Jean Leonard",
    bucket: "Todo",
    participatorsIds: ["1df9aa13-1c74-5955-9c82-1b8ee73aa055"],
    status: TaskStatus.ACCEPTING,
    planId: "584fb04b-4160-57fd-a47a-b669f3082bf2",
  }),
  createTask({
    id: "7b721162-f4d9-5c24-a4a5-bd7bb0149e8b",
    title: "Frank Davidson",
    bucket: "Todo",
    participatorsIds: ["1df9aa13-1c74-5955-9c82-1b8ee73aa055"],
    status: TaskStatus.ACCEPTING,
    planId: "584fb04b-4160-57fd-a47a-b669f3082bf2",
  }),
  createTask({
    id: "2afd7d1c-4331-5783-bb75-46b178ce3f14",
    title: "Harriett Mann",
    bucket: "Todo",
    participatorsIds: ["1df9aa13-1c74-5955-9c82-1b8ee73aa055"],
    status: TaskStatus.ACCEPTING,
    planId: "584fb04b-4160-57fd-a47a-b669f3082bf2",
  }),
  createTask({
    id: "82df101a-33c0-57df-be0c-0e6ae2c517d1",
    title: "Catherine Rogers",
    bucket: "Todo",
    participatorsIds: ["1df9aa13-1c74-5955-9c82-1b8ee73aa055"],
    status: TaskStatus.ACCEPTING,
    planId: "584fb04b-4160-57fd-a47a-b669f3082bf2",
  }),
  createTask({
    id: "d9e9c16d-3804-564e-a6ed-7938a699bcba",
    title: "Joel Hoffman",
    bucket: "Todo",
    participatorsIds: ["1df9aa13-1c74-5955-9c82-1b8ee73aa055"],
    status: TaskStatus.ACCEPTING,
    planId: "584fb04b-4160-57fd-a47a-b669f3082bf2",
  }),
  createTask({
    id: "37f5e8e2-9d7c-5413-96e2-02b118e42e57",
    title: "Jennie Atkins",
    bucket: "Todo",
    participatorsIds: ["1df9aa13-1c74-5955-9c82-1b8ee73aa055"],
    status: TaskStatus.ACCEPTING,
    planId: "584fb04b-4160-57fd-a47a-b669f3082bf2",
  }),
  createTask({
    id: "3b11ac0d-d78e-567b-984d-7a78f559a43a",
    title: "Cody Phelps",
    bucket: "Todo",
    participatorsIds: ["1df9aa13-1c74-5955-9c82-1b8ee73aa055"],
    status: TaskStatus.ACCEPTING,
    planId: "584fb04b-4160-57fd-a47a-b669f3082bf2",
  }),
  createTask({
    id: "62c704f3-8393-5970-a7e9-8b32d3b6bfdf",
    title: "Jay White",
    bucket: "Todo",
    participatorsIds: ["1df9aa13-1c74-5955-9c82-1b8ee73aa055"],
    status: TaskStatus.ACCEPTING,
    planId: "584fb04b-4160-57fd-a47a-b669f3082bf2",
  }),
  createTask({
    id: "908f29a2-99c3-5d8e-a6a9-869136fec333",
    title: "Danny McKinney",
    bucket: "Todo",
    participatorsIds: ["1df9aa13-1c74-5955-9c82-1b8ee73aa055"],
    status: TaskStatus.ACCEPTING,
    planId: "584fb04b-4160-57fd-a47a-b669f3082bf2",
  }),
  createTask({
    id: "cf1a44b0-bddd-55a5-97b4-b1e44f7e98ec",
    title: "Christina Powers",
    bucket: "Todo",
    participatorsIds: ["1df9aa13-1c74-5955-9c82-1b8ee73aa055"],
    status: TaskStatus.ACCEPTING,
    planId: "584fb04b-4160-57fd-a47a-b669f3082bf2",
  }),
  createTask({
    id: "6273452b-ee37-5278-8ea7-b7438b15324e",
    title: "Sarah Blake",
    bucket: "Todo",
    participatorsIds: ["1df9aa13-1c74-5955-9c82-1b8ee73aa055"],
    status: TaskStatus.ACCEPTING,
    planId: "584fb04b-4160-57fd-a47a-b669f3082bf2",
  }),
  createTask({
    id: "d1450738-f6d9-5965-bb9f-9876d1ee0930",
    title: "Helen Dunn",
    bucket: "Todo",
    participatorsIds: ["1df9aa13-1c74-5955-9c82-1b8ee73aa055"],
    status: TaskStatus.ACCEPTING,
    planId: "584fb04b-4160-57fd-a47a-b669f3082bf2",
  }),
  createTask({
    id: "35651dea-24e2-5670-818a-0b27db0b2bce",
    title: "Owen West",
    bucket: "Todo",
    participatorsIds: ["1df9aa13-1c74-5955-9c82-1b8ee73aa055"],
    status: TaskStatus.ACCEPTING,
    planId: "584fb04b-4160-57fd-a47a-b669f3082bf2",
  }),
  createTask({
    id: "93d97d86-5e93-5534-90fc-73d42bda04b9",
    title: "Lula Stone",
    bucket: "Todo",
    participatorsIds: ["1df9aa13-1c74-5955-9c82-1b8ee73aa055"],
    status: TaskStatus.ACCEPTING,
    planId: "584fb04b-4160-57fd-a47a-b669f3082bf2",
  }),
  createTask({
    id: "6e029e95-5581-53cb-a7e2-09a83cb70c7f",
    title: "Justin Henry",
    bucket: "Todo",
    participatorsIds: ["1df9aa13-1c74-5955-9c82-1b8ee73aa055"],
    status: TaskStatus.ACCEPTING,
    planId: "584fb04b-4160-57fd-a47a-b669f3082bf2",
  }),
  createTask({
    id: "7bd00976-3790-5f26-ac7a-22baddc2ff95",
    title: "Theodore Evans",
    bucket: "Todo",
    participatorsIds: ["1df9aa13-1c74-5955-9c82-1b8ee73aa055"],
    status: TaskStatus.ACCEPTING,
    planId: "584fb04b-4160-57fd-a47a-b669f3082bf2",
  }),
  createTask({
    id: "f317e063-9e42-5f73-9cf4-c908043c0a0c",
    title: "Ian Foster",
    bucket: "Todo",
    participatorsIds: ["1df9aa13-1c74-5955-9c82-1b8ee73aa055"],
    status: TaskStatus.ACCEPTING,
    planId: "584fb04b-4160-57fd-a47a-b669f3082bf2",
  }),
  createTask({
    id: "5e5bd7c3-ac49-554b-a9c2-596301c06443",
    title: "Lilly Alvarez",
    bucket: "Todo",
    participatorsIds: ["1df9aa13-1c74-5955-9c82-1b8ee73aa055"],
    status: TaskStatus.ACCEPTING,
    planId: "584fb04b-4160-57fd-a47a-b669f3082bf2",
  }),
  createTask({
    id: "7cee087e-d6da-593a-a9c2-50a49e8d5d05",
    title: "Cecilia Dawson",
    bucket: "Todo",
    participatorsIds: ["1df9aa13-1c74-5955-9c82-1b8ee73aa055"],
    status: TaskStatus.ACCEPTING,
    planId: "584fb04b-4160-57fd-a47a-b669f3082bf2",
  }),
  createTask({
    id: "14967367-a2b4-5470-8142-36e8d5779efb",
    title: "Kathryn Gilbert",
    bucket: "Todo",
    participatorsIds: ["1df9aa13-1c74-5955-9c82-1b8ee73aa055"],
    status: TaskStatus.ACCEPTING,
    planId: "584fb04b-4160-57fd-a47a-b669f3082bf2",
  }),
  createTask({
    id: "dc745967-bed4-5a6f-b1f6-24567d01b419",
    title: "Olga Jacobs",
    bucket: "Todo",
    participatorsIds: ["1df9aa13-1c74-5955-9c82-1b8ee73aa055"],
    status: TaskStatus.ACCEPTING,
    planId: "584fb04b-4160-57fd-a47a-b669f3082bf2",
  }),
  // ----
  // ------
  createTask({
    id: "85887847-a8bb-59f3-a802-b82a94c00087",
    title: "Herbert McDaniel",
    bucket: "Todo",
    participatorsIds: [
      "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
      "1e69f37b-bcba-58fd-ab05-e409cce8f5f5",
      "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    ],
    status: TaskStatus.ACCEPTING,
    planId: "db8f7668-b9b0-5e4d-b38d-ca925dabe339",
  }),
  createTask({
    id: "19abd794-ef40-59fc-b6e1-caffdb48cb51",
    title: "Herbert McDaniel",
    bucket: "??????007",
    participatorsIds: [
      "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
      "1e69f37b-bcba-58fd-ab05-e409cce8f5f5",
      "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    ],
    status: TaskStatus.ACCEPTING,
    planId: "db8f7668-b9b0-5e4d-b38d-ca925dabe339",
  }),
  createTask({
    id: "ce74981a-7eab-5a3f-bccd-38c0afa4d6f8",
    title: "Herbert McDaniel",
    bucket: "??????007",
    participatorsIds: [
      "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
      "1e69f37b-bcba-58fd-ab05-e409cce8f5f5",
      "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    ],
    status: TaskStatus.ACCEPTING,
    planId: "db8f7668-b9b0-5e4d-b38d-ca925dabe339",
  }),
  createTask({
    id: "5b17e09e-fb52-5e86-8e03-4f0598ad464c",
    title: "Herbert McDaniel",
    bucket: "??????007",
    participatorsIds: [
      "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
      "1e69f37b-bcba-58fd-ab05-e409cce8f5f5",
      "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    ],
    status: TaskStatus.ACCEPTING,
    planId: "db8f7668-b9b0-5e4d-b38d-ca925dabe339",
  }),
  createTask({
    id: "c4c99c34-1c16-55cf-8450-f18498f1f2ee",
    title: "Herbert McDaniel",
    bucket: "??????007",
    participatorsIds: [
      "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
      "1e69f37b-bcba-58fd-ab05-e409cce8f5f5",
      "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    ],
    status: TaskStatus.ACCEPTING,
    planId: "db8f7668-b9b0-5e4d-b38d-ca925dabe339",
  }),
  createTask({
    id: "92bafb2b-bf53-5658-9a73-089bcc9989cb",
    title: "Herbert McDaniel",
    bucket: "Todo",
    participatorsIds: [
      "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
      "1e69f37b-bcba-58fd-ab05-e409cce8f5f5",
      "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    ],
    status: TaskStatus.ACCEPTING,
    planId: "db8f7668-b9b0-5e4d-b38d-ca925dabe339",
  }),
  createTask({
    id: "a2251999-2048-510a-934b-f4115207ce17",
    title: "Herbert McDaniel",
    bucket: "Todo",
    participatorsIds: [
      "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
      "1e69f37b-bcba-58fd-ab05-e409cce8f5f5",
      "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    ],
    status: TaskStatus.ACCEPTING,
    planId: "db8f7668-b9b0-5e4d-b38d-ca925dabe339",
  }),
  createTask({
    id: "5f6014b2-6a96-559d-8f81-02976c036d27",
    title: "Herbert McDaniel",
    bucket: "???????????????",
    participatorsIds: [
      "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
      "1e69f37b-bcba-58fd-ab05-e409cce8f5f5",
      "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    ],
    status: TaskStatus.ACCEPTING,
    planId: "db8f7668-b9b0-5e4d-b38d-ca925dabe339",
  }),
  createTask({
    id: "9832b4b0-dbba-570d-96df-92399f56290a",
    title: "Herbert McDaniel",
    bucket: "???????????????",
    participatorsIds: [
      "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
      "1e69f37b-bcba-58fd-ab05-e409cce8f5f5",
      "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    ],
    status: TaskStatus.ACCEPTING,
    planId: "db8f7668-b9b0-5e4d-b38d-ca925dabe339",
  }),
  createTask({
    id: "7dc17712-8965-51ee-ace1-09e0c702347d",
    title: "Herbert McDaniel",
    bucket: "???????????????",
    participatorsIds: [
      "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
      "1e69f37b-bcba-58fd-ab05-e409cce8f5f5",
      "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    ],
    status: TaskStatus.ACCEPTING,
    planId: "db8f7668-b9b0-5e4d-b38d-ca925dabe339",
  }),
  createTask({
    id: "02df6eeb-c811-584f-9f71-a33dd97cba7a",
    title: "Herbert McDaniel",
    bucket: "????????????",
    participatorsIds: [
      "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
      "1e69f37b-bcba-58fd-ab05-e409cce8f5f5",
      "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    ],
    status: TaskStatus.ACCEPTING,
    planId: "db8f7668-b9b0-5e4d-b38d-ca925dabe339",
  }),
  createTask({
    id: "99d25e12-2d61-5dcc-8d0a-03a090d50c4a",
    title: "Herbert McDaniel",
    bucket: "????????????",
    participatorsIds: [
      "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
      "1e69f37b-bcba-58fd-ab05-e409cce8f5f5",
      "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    ],
    status: TaskStatus.ACCEPTING,
    planId: "db8f7668-b9b0-5e4d-b38d-ca925dabe339",
  }),
  createTask({
    id: "1e9eefd1-3581-5c0c-ab86-526257d58fa7",
    title: "Herbert McDaniel",
    bucket: "AV??????",
    participatorsIds: [
      "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
      "1e69f37b-bcba-58fd-ab05-e409cce8f5f5",
      "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    ],
    status: TaskStatus.ACCEPTING,
    planId: "db8f7668-b9b0-5e4d-b38d-ca925dabe339",
  }),
  createTask({
    id: "51b117cd-6723-5b4b-930b-bd5b66f0234f",
    title: "Herbert McDaniel",
    bucket: "AV??????",
    participatorsIds: [
      "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
      "1e69f37b-bcba-58fd-ab05-e409cce8f5f5",
      "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    ],
    status: TaskStatus.ACCEPTING,
    planId: "db8f7668-b9b0-5e4d-b38d-ca925dabe339",
  }),
  createTask({
    id: "dd1c9899-8801-56c4-9f86-2caa4f6a9462",
    title: "Herbert McDaniel",
    bucket: "????????????",
    participatorsIds: [
      "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
      "1e69f37b-bcba-58fd-ab05-e409cce8f5f5",
      "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    ],
    status: TaskStatus.ACCEPTING,
    planId: "db8f7668-b9b0-5e4d-b38d-ca925dabe339",
  }),
  createTask({
    id: "397b53dc-18a1-5320-a97c-700e18e95fe6",
    title: "Herbert McDaniel",
    bucket: "????????????",
    participatorsIds: [
      "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
      "1e69f37b-bcba-58fd-ab05-e409cce8f5f5",
      "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    ],
    status: TaskStatus.ACCEPTING,
    planId: "db8f7668-b9b0-5e4d-b38d-ca925dabe339",
  }),
  createTask({
    id: "66324b0a-5afc-5e41-8ae6-d9a199cf62de",
    title: "Herbert McDaniel",
    bucket: "?????????",
    participatorsIds: [
      "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
      "1e69f37b-bcba-58fd-ab05-e409cce8f5f5",
      "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    ],
    status: TaskStatus.ACCEPTING,
    planId: "db8f7668-b9b0-5e4d-b38d-ca925dabe339",
  }),
  createTask({
    id: "cc4245d7-0fc5-532d-b6bc-ff62d4352111",
    title: "Herbert McDaniel",
    bucket: "?????????",
    participatorsIds: [
      "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
      "1e69f37b-bcba-58fd-ab05-e409cce8f5f5",
      "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    ],
    status: TaskStatus.ACCEPTING,
    planId: "db8f7668-b9b0-5e4d-b38d-ca925dabe339",
  }),
  createTask({
    id: "1f642711-d421-5d6d-950f-98eaec6bef5e",
    title: "Herbert McDaniel",
    bucket: "Todo",
    participatorsIds: [
      "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
      "1e69f37b-bcba-58fd-ab05-e409cce8f5f5",
      "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    ],
    status: TaskStatus.ACCEPTING,
    planId: "db8f7668-b9b0-5e4d-b38d-ca925dabe339",
  }),
  // ------
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
