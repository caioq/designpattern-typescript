import { JsonExportService } from "./json-export-service";
import { MockPostsService } from "./mock-posts-service";
import { NewsFeed } from "./news-feed";
import { PostsService } from "./posts-service";

let mockService = new MockPostsService();
mockService.export(new JsonExportService()).then((result) => console.log(result));
