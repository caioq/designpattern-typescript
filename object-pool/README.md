- A pool of pre-initialized objects whose initialization is heavy weight
- Every time we need such an object we take one from the pool
- Once we are done with it, we return it to the pool or destroy it

- With the advancements in programming languages and the general speed in which instantiate objects, having to maintain an object pool is more of a headache than it is useful.
- However object pooling is still useful in game development. In games where you have a band of disposable instances like enemies, bullets, or trees, it's nice to not have to initialize them all over again every time you need them.
- May be combined with Factory Pattern. Take a loot at this example
