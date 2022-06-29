# Dependency Injection

### Traditional approach without dependency injection:

```typescript
export class ProfileService {
  private _usersService: UsersService;
  private _httpClient: HttpClient;
  private _endpoints: Endpoints;

  public constructor() {
    this._usersService = new UsersService();
    this._httpClient = new HttpClient();
    this._endpoints = new Endpoints();
  }
}
```

Dependency injection suggests to inverse the flow control, and request the dependencies in the constructor like this:

```typescript
export class ProfileService {
  private _usersService: UsersService;
  private _httpClient: HttpClient;
  private _endpoints: Endpoints;

  public constructor(usersService: UsersService, httpClient: HttpClient, endpoints: Endpoints) {
    this._usersService = usersService;
    this._httpClient = httpClient;
    this._endpoints = endpoints;
  }
}
```

The dependencies are already passed over to the controler, already initialized. Using this approach the profile service class is no longer responsible for initializing itself. It does not need to know how to create instances of its dependencies anymore, because it receives them from the constructor already initialized.
But if the profile service does not initialize its dependencies, and it doesn't know how to do so, then who does? A DI Container

### DI Container

Basic operations of a containers

- Register
- Resolve
