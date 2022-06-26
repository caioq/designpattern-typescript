import { Post } from "./post";

export interface IExportPostsService {
  export(posts: Post[]): string;
}
