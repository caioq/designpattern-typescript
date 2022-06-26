import { IExportPostsService } from "./iexport-posts-service";
import { IPostsService } from "./iposts-service";
import { Post } from "./post";

export class MockPostsService implements IPostsService {
  posts: Post[] = [];
  constructor() {
    this.posts = [{ id: 1, title: "Test Post 1", body: "Body Test Post 1", postedBy: "Me" }];
  }
  getAll(): Promise<Post[]> {
    return Promise.resolve(this.posts);
  }
  save(post: Post): Promise<void> {
    this.posts.push(post);
    return Promise.resolve();
  }

  export(service: IExportPostsService): Promise<string> {
    return this.getAll().then((posts) => service.export(posts));
  }
}
