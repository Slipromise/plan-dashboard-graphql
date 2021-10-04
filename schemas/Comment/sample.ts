import Comment from "./type";

function createComment(props: Partial<Comment>): Comment {
  return Object.assign(new Comment(), props);
}

export const sampleComments = [
  createComment({
    id: "3c23b763-deb6-58cb-a0d9-4a491a5bfd21",
    date: "2021-07-04T12:55:03+08:00",
    content: "內容",
    creatorId: "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    taskId: "bcca285b-98d3-5e45-b8c6-3f135e046493",
  }),
  createComment({
    id: "09212355-3865-5094-9757-ba9da0122396",
    date: "2021-07-15T23:58:09+08:00",
    content: "內容",
    creatorId: "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    taskId: "3ef1126d-5b65-5056-a932-3191551bc82a",
  }),
  createComment({
    id: "6b3e8434-f213-584f-a3f7-6aef8727ed11",
    date: "2021-10-25T08:30:31+08:00",
    content: "內容",
    creatorId: "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    taskId: "bcca285b-98d3-5e45-b8c6-3f135e046493",
  }),
  createComment({
    id: "bc50adf3-fe19-5d8b-9a3f-fdc951ef5acf",
    date: "2021-11-04T23:16:17+08:00",
    content: "內容",
    creatorId: "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    taskId: "3ef1126d-5b65-5056-a932-3191551bc82a",
  }),
  createComment({
    id: "8616ed6d-4dab-58fe-a55e-e7d16fc77639",
    date: "2021-01-20T22:25:18+08:00",
    content: "內容",
    creatorId: "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
    taskId: "3ef1126d-5b65-5056-a932-3191551bc82a",
  }),
  createComment({
    id: "a0e3cd60-fca4-54df-8edc-6f7e28bb37a9",
    date: "2021-11-23T16:00:07+08:00",
    content: "內容",
    creatorId: "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
    taskId: "480d669b-53dc-5b22-b322-c378aa9c038d",
  }),
  createComment({
    id: "1b6dd0c9-fae9-54e1-bfbb-cf6fb7651dd3",
    date: "2021-12-07T19:58:36+08:00",
    content: "內容",
    creatorId: "816edecb-eb90-5e2b-b5ed-c48719cc0d9b",
    taskId: "41bd944b-f695-5c7a-9136-4b42cc9cfb55",
  }),
  createComment({
    id: "d4884757-1c51-5767-846b-0ce5165c9185",
    date: "2021-01-02T12:42:44+08:00",
    content: "內容",
    creatorId: "5d7527c7-20e8-5eb0-baa2-a9ca93bfc0a8",
    taskId: "41bd944b-f695-5c7a-9136-4b42cc9cfb55",
  }),
  createComment({
    id: "865a1cd3-2c47-59e4-a44f-aef122a8b69f",
    date: "2021-10-03T17:25:17+08:00",
    content: "內容",
    creatorId: "5d7527c7-20e8-5eb0-baa2-a9ca93bfc0a8",
    taskId: "45366db7-fc8d-56f8-abc5-fc200e801f7d",
  }),
];
