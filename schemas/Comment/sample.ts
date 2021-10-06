import Comment from "./type";

function createComment(props: Partial<Comment>): Comment {
  return Object.assign(new Comment(), props);
}

export const sampleComments = [
  createComment({
    id: "4ae4699d-6d5f-5500-bfb9-26e6fb66eb8a",
    date: "2021-07-04T12:55:03+08:00",
    content: "內容",
    creatorId: "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    taskId: "3ef1126d-5b65-5056-a932-3191551bc82a",
  }),
  createComment({
    id: "ff5d5a53-3403-5c8d-8a62-fe26657fe4c3",
    date: "2021-07-15T23:58:09+08:00",
    content: "內容",
    creatorId: "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    taskId: "3ef1126d-5b65-5056-a932-3191551bc82a",
  }),
  createComment({
    id: "9a400611-8ef7-52ee-8561-5ce95a92076a",
    date: "2021-10-25T08:30:31+08:00",
    content: "內容",
    creatorId: "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    taskId: "3ef1126d-5b65-5056-a932-3191551bc82a",
  }),
  createComment({
    id: "2ffa20e4-aab1-57b2-a1fa-a96e9a3da5c8",
    date: "2021-11-04T23:16:17+08:00",
    content: "內容",
    creatorId: "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    taskId: "3ef1126d-5b65-5056-a932-3191551bc82a",
  }),
  createComment({
    id: "576d0387-95fb-5501-b7d8-ade570ad3288",
    date: "2021-01-20T22:25:18+08:00",
    content: "內容",
    creatorId: "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
    taskId: "3ef1126d-5b65-5056-a932-3191551bc82a",
  }),
  createComment({
    id: "9f618efd-43df-5011-b8e1-24c799c46244",
    date: "2021-11-23T16:00:07+08:00",
    content: "內容",
    creatorId: "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
    taskId: "480d669b-53dc-5b22-b322-c378aa9c038d",
  }),
  createComment({
    id: "6751670b-c4cc-5951-9026-8ed6af236379",
    date: "2021-12-07T19:58:36+08:00",
    content: "內容",
    creatorId: "816edecb-eb90-5e2b-b5ed-c48719cc0d9b",
    taskId: "41bd944b-f695-5c7a-9136-4b42cc9cfb55",
  }),
  createComment({
    id: "3567640f-ed17-5434-a149-87b5668f415f",
    date: "2021-01-02T12:42:44+08:00",
    content: "內容",
    creatorId: "5d7527c7-20e8-5eb0-baa2-a9ca93bfc0a8",
    taskId: "41bd944b-f695-5c7a-9136-4b42cc9cfb55",
  }),
  createComment({
    id: "0eba53ee-7585-5ce3-ae19-7e73e4fa41ae",
    date: "2021-10-03T17:25:17+08:00",
    content: "內容",
    creatorId: "5d7527c7-20e8-5eb0-baa2-a9ca93bfc0a8",
    taskId: "45366db7-fc8d-56f8-abc5-fc200e801f7d",
  }),

  createComment({
    id: "3e652b2f-9e16-5d54-afed-487aeaecc7ea",
    date: "2021-07-04T12:55:03+08:00",
    content: "內容",
    creatorId: "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    taskId: "3ef1126d-5b65-5056-a932-3191551bc82a",
  }),
  createComment({
    id: "16627655-f277-5716-a47e-05461db99a67",
    date: "2021-07-15T23:58:09+08:00",
    content: "內容",
    creatorId: "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    taskId: "3ef1126d-5b65-5056-a932-3191551bc82a",
  }),
  createComment({
    id: "b0bf4fc3-7305-574c-a7e1-50388eac1fe9",
    date: "2021-10-25T08:30:31+08:00",
    content: "內容",
    creatorId: "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    taskId: "3ef1126d-5b65-5056-a932-3191551bc82a",
  }),
  createComment({
    id: "b8bd67c8-36e4-5df2-98cc-c7c1ab937bb9",
    date: "2021-11-04T23:16:17+08:00",
    content: "內容",
    creatorId: "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    taskId: "3ef1126d-5b65-5056-a932-3191551bc82a",
  }),
  createComment({
    id: "e5464ec4-0e6b-5817-890c-892c7cdb687a",
    date: "2021-01-20T22:25:18+08:00",
    content: "內容",
    creatorId: "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
    taskId: "3ef1126d-5b65-5056-a932-3191551bc82a",
  }),
  createComment({
    id: "aea4324f-b413-5639-8056-20624fc6eddf",
    date: "2021-11-23T16:00:07+08:00",
    content: "內容",
    creatorId: "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
    taskId: "480d669b-53dc-5b22-b322-c378aa9c038d",
  }),
  createComment({
    id: "0cec74b3-b815-5054-a56c-d059172684af",
    date: "2021-12-07T19:58:36+08:00",
    content: "內容",
    creatorId: "816edecb-eb90-5e2b-b5ed-c48719cc0d9b",
    taskId: "41bd944b-f695-5c7a-9136-4b42cc9cfb55",
  }),
  createComment({
    id: "38df802a-758a-5f19-9e21-421e86ab0bc5",
    date: "2021-01-02T12:42:44+08:00",
    content: "內容",
    creatorId: "5d7527c7-20e8-5eb0-baa2-a9ca93bfc0a8",
    taskId: "41bd944b-f695-5c7a-9136-4b42cc9cfb55",
  }),
  createComment({
    id: "327a786d-1ff6-5717-a227-de0f58abd5c4",
    date: "2021-10-03T17:25:17+08:00",
    content: "內容",
    creatorId: "5d7527c7-20e8-5eb0-baa2-a9ca93bfc0a8",
    taskId: "45366db7-fc8d-56f8-abc5-fc200e801f7d",
  }),

  createComment({
    id: "70a07ebd-281c-5059-9692-e01e7ac9e6ae",
    date: "2021-07-04T12:55:03+08:00",
    content: "內容",
    creatorId: "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    taskId: "3ef1126d-5b65-5056-a932-3191551bc82a",
  }),
  createComment({
    id: "d9ca9428-c8eb-5b68-aa70-8a0b85ae8c79",
    date: "2021-07-15T23:58:09+08:00",
    content: "內容",
    creatorId: "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    taskId: "3ef1126d-5b65-5056-a932-3191551bc82a",
  }),
  createComment({
    id: "a67b2992-8761-516c-87f5-6b309a85f546",
    date: "2021-10-25T08:30:31+08:00",
    content: "內容",
    creatorId: "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    taskId: "3ef1126d-5b65-5056-a932-3191551bc82a",
  }),
  createComment({
    id: "8b885806-f1dd-535e-a4ac-12f508c26953",
    date: "2021-11-04T23:16:17+08:00",
    content: "內容",
    creatorId: "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    taskId: "3ef1126d-5b65-5056-a932-3191551bc82a",
  }),
  createComment({
    id: "7c90f5c7-b2b5-5300-b26f-fadb951e8cc5",
    date: "2021-01-20T22:25:18+08:00",
    content: "內容",
    creatorId: "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
    taskId: "3ef1126d-5b65-5056-a932-3191551bc82a",
  }),
  createComment({
    id: "fadc883b-d1d9-508e-8454-364a4a931e8a",
    date: "2021-11-23T16:00:07+08:00",
    content: "內容",
    creatorId: "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
    taskId: "480d669b-53dc-5b22-b322-c378aa9c038d",
  }),
  createComment({
    id: "2089920d-e19e-57c0-bbcf-789e7064d3b1",
    date: "2021-12-07T19:58:36+08:00",
    content: "內容",
    creatorId: "816edecb-eb90-5e2b-b5ed-c48719cc0d9b",
    taskId: "41bd944b-f695-5c7a-9136-4b42cc9cfb55",
  }),
  createComment({
    id: "e5ad56d0-98cd-55e3-be5c-980cf0398256",
    date: "2021-01-02T12:42:44+08:00",
    content: "內容",
    creatorId: "5d7527c7-20e8-5eb0-baa2-a9ca93bfc0a8",
    taskId: "41bd944b-f695-5c7a-9136-4b42cc9cfb55",
  }),
  createComment({
    id: "855d7247-93f6-5e12-8cb5-0c0b851a0a8a",
    date: "2021-10-03T17:25:17+08:00",
    content: "內容",
    creatorId: "5d7527c7-20e8-5eb0-baa2-a9ca93bfc0a8",
    taskId: "45366db7-fc8d-56f8-abc5-fc200e801f7d",
  }),

  createComment({
    id: "6e9b7d46-d816-5114-bc31-9c84582ea8c7",
    date: "2021-07-04T12:55:03+08:00",
    content: "內容",
    creatorId: "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    taskId: "3ef1126d-5b65-5056-a932-3191551bc82a",
  }),
  createComment({
    id: "d0ec832c-56c9-5ffc-b997-770be4888625",
    date: "2021-07-15T23:58:09+08:00",
    content: "內容",
    creatorId: "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    taskId: "3ef1126d-5b65-5056-a932-3191551bc82a",
  }),
  createComment({
    id: "00848300-4da5-5c8e-a2dd-582035195d47",
    date: "2021-10-25T08:30:31+08:00",
    content: "內容",
    creatorId: "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    taskId: "3ef1126d-5b65-5056-a932-3191551bc82a",
  }),
  createComment({
    id: "3b2d6352-e737-5ba3-ad5b-579f6732dd37",
    date: "2021-11-04T23:16:17+08:00",
    content: "內容",
    creatorId: "1df9aa13-1c74-5955-9c82-1b8ee73aa055",
    taskId: "3ef1126d-5b65-5056-a932-3191551bc82a",
  }),
  createComment({
    id: "aff170b1-9d06-58b9-9f05-d1ae1f30d405",
    date: "2021-01-20T22:25:18+08:00",
    content: "內容",
    creatorId: "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
    taskId: "3ef1126d-5b65-5056-a932-3191551bc82a",
  }),
  createComment({
    id: "c76102fa-5288-5cb3-a03c-99a6e3c20d5a",
    date: "2021-11-23T16:00:07+08:00",
    content: "內容",
    creatorId: "3e5d246b-2548-5276-bd9b-16fa453fc7e5",
    taskId: "480d669b-53dc-5b22-b322-c378aa9c038d",
  }),
  createComment({
    id: "11f0c324-7744-52d9-9af1-734798ec79ac",
    date: "2021-12-07T19:58:36+08:00",
    content: "內容",
    creatorId: "816edecb-eb90-5e2b-b5ed-c48719cc0d9b",
    taskId: "41bd944b-f695-5c7a-9136-4b42cc9cfb55",
  }),
  createComment({
    id: "0f47d6f4-31f3-54a1-8a2e-00344923ac08",
    date: "2021-01-02T12:42:44+08:00",
    content: "內容",
    creatorId: "5d7527c7-20e8-5eb0-baa2-a9ca93bfc0a8",
    taskId: "41bd944b-f695-5c7a-9136-4b42cc9cfb55",
  }),
  createComment({
    id: "e401bdb4-8413-5717-9bc0-9b4c13ec4ba1",
    date: "2021-10-03T17:25:17+08:00",
    content: "內容",
    creatorId: "5d7527c7-20e8-5eb0-baa2-a9ca93bfc0a8",
    taskId: "45366db7-fc8d-56f8-abc5-fc200e801f7d",
  }),
];
