import Plan from "./type";

function createPlan(props: Partial<Plan>): Plan {
  return Object.assign(new Plan(), props);
}

export const samplePlans = [
  createPlan({
    id: "584fb04b-4160-57fd-a47a-b669f3082bf2",
    name: "Curtis Vaughn",
    creatorId: "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    membersIds: ["1df9aa13-1c74-5955-9c82-1b8ee73aa055"],
    buckets: ["Todo"],
  }),
  createPlan({
    id: "db8f7668-b9b0-5e4d-b38d-ca925dabe339",
    name: "Gussie Delgado",
    creatorId: "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    membersIds: ["1df9aa13-1c74-5955-9c82-1b8ee73aa055"],
    buckets: ["Todo"],
  }),
  createPlan({
    id: "bcca285b-98d3-5e45-b8c6-3f135e046493",
    name: "Emilie Terry",
    creatorId: "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
    membersIds: ["3e5d246b-2548-5276-bd9b-16fa453fc7e5"],
    buckets: ["Todo"],
  }),
  createPlan({
    id: "0be7846f-08e4-5003-8890-8e9804bde85a",
    name: "Kate Myers",
    creatorId: "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
    membersIds: ["3e5d246b-2548-5276-bd9b-16fa453fc7e5"],
    buckets: ["Todo"],
  }),
  createPlan({
    id: "e9d3526c-d2ca-5b44-936b-e52d5df96d85",
    name: "Franklin Miller",
    creatorId: "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
    membersIds: [
      "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
      "1e69f37b-bcba-58fd-ab05-e409cce8f5f5",
      "816edecb-eb90-5e2b-b5ed-c48719cc0d9b",
    ],
    buckets: ["Todo"],
  }),
  createPlan({
    id: "ea4f4633-94d6-5d6d-8517-8a39387fedd3",
    name: "Herman Ford",
    creatorId: "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
    membersIds: [
      "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
      "1e69f37b-bcba-58fd-ab05-e409cce8f5f5",
    ],
    buckets: ["Todo"],
  }),
  createPlan({
    id: "4dd56ba3-0260-59e1-a4b0-e972b55b04b8",
    name: "Olga Mendoza",
    creatorId: "816edecb-eb90-5e2b-b5ed-c48719cc0d9b",
    membersIds: ["816edecb-eb90-5e2b-b5ed-c48719cc0d9b"],
    buckets: ["Todo"],
  }),
  createPlan({
    id: "bdb58559-71d2-5f76-943c-28316c8c7846",
    name: "Alex Burgess",
    creatorId: "816edecb-eb90-5e2b-b5ed-c48719cc0d9b",
    membersIds: ["816edecb-eb90-5e2b-b5ed-c48719cc0d9b"],
    buckets: ["Todo"],
  }),
];
