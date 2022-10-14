This course starts by exploring SOLID principles to write clean code. Then you will create new objects and instance of classes with creational design Patterns. Next, you will utilize dependency injection with InversifyJS to create testable, maintainable, and extensible code. We will then leave creational patterns for good, and we will focus on structural design patterns to better express the relationships between different application entities. Finally in the last section, we will study behavioral design patterns and how they can help us add layers of communication between our entities.

## Creational Patterns

### Singleton

- Sometimes we need to only have a single instance of a class.

### Factory

- Following the single responsibility principle, our consumer classes shouldn’t be the ones responsible for knowing how to instantiate classes that we need.

## Structural Patterns

### Decorator

- Sometimes we need to combine entities into mixins but only dynamically on runtime. Here’s where the decorator pattern comes in.

### Adapter

- In cases where we need to connect different APIs (extended use of third party libraries) we need a way to avoid having to rewrite all the code.

## To test locally

Run

```
npm run ts-node <directory>/<file>
```
