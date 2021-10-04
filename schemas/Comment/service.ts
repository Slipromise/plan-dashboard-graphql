import Comment from "./type";
import { v4 as uuid } from "uuid";

import { Service, Inject } from "typedi";

@Service()
export default class CommentService {
  constructor(
    @Inject("SAMPLE_COMMENTS") private readonly comments: Comment[]
  ) {}

  async getAll() {
    return this.comments;
  }

  async getOne(id: string) {
    return this.comments.find((item) => id === item.id);
  }

  async add(data: Partial<Comment>) {
    const comment = this.create(data);
    this.comments.push(comment);
    return comment;
  }

  private create(props: Partial<Comment>): Comment {
    const comment = Object.assign(new Comment(), props);
    comment.id = uuid();
    comment.date = new Date().toISOString();
    return comment;
  }
}
