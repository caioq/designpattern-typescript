import { IJsonPlaceholderService } from "./ijson-placeholder-service";
import { User } from "./models/user";

// this facade method combines different calls to the API. If we didn't have the facade class for every different use case, we would have to do all that in the client code. But the facade abstruct it out in an isolated well-defined and easily tested environment that we can then use in the rest of our code

export class JsonPlaceholderFacade {
  constructor(private _service: IJsonPlaceholderService) {}

  async getUser(userId: number): Promise<User | null> {
    let allUsers = await this._service.getUsers();
    const currentUser = allUsers.find((user) => user.id === userId);
    let allPosts = await this._service.getPosts();
    let allTodos = await this._service.getTodos();
    if (currentUser) {
      currentUser.posts = allPosts.filter((post) => post.userId === userId);
      currentUser.todos = allTodos.filter((todo) => todo.userId === userId);
      return currentUser;
    }

    return null;
  }
}
