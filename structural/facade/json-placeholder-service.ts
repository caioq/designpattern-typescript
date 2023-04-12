import axios from "axios";
import { IJsonPlaceholderService } from "./ijson-placeholder-service";
import { Album } from "./models/album";
import { Comment } from "./models/comment";
import { Photo } from "./models/photo";
import { User } from "./models/user";
import { Todo } from "./models/todo";
import { Post } from "./models/post";

export class JsonPlaceholderService implements IJsonPlaceholderService {
  private _baseUrl = "https://jsonplaceholder.typicode.com";

  private _getEntity<T>(url: string): Promise<T[]> {
    return axios.get(url).then((response) => response.data as T[]);
  }

  private _endpoints = {
    albums: `${this._baseUrl}/albums`,
    comments: `${this._baseUrl}/comments`,
    photos: `${this._baseUrl}/photos`,
    users: `${this._baseUrl}/users`,
    todos: `${this._baseUrl}/todos`,
    posts: `${this._baseUrl}/posts`,
  };

  async getAlbums(): Promise<Album[]> {
    return this._getEntity<Album>(this._endpoints.albums);
  }

  async getComments(): Promise<Comment[]> {
    return this._getEntity<Comment>(this._endpoints.comments);
  }

  async getPhotos(): Promise<Photo[]> {
    return this._getEntity<Photo>(this._endpoints.photos);
  }

  async getUsers(): Promise<User[]> {
    return this._getEntity<User>(this._endpoints.users);
  }

  async getTodos(): Promise<Todo[]> {
    return this._getEntity<Todo>(this._endpoints.todos);
  }

  async getPosts(): Promise<Post[]> {
    return this._getEntity<Post>(this._endpoints.posts);
  }
}
