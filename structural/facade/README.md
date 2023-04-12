## Facade Pattern

- Goal is to simplify an interface
- Application of Principle of Least Interest (Law of Demeter): Every component should have little knowledge of how other components work and only communicate with a few specific close friends. That a component should only exchange information with its immediate neighbors and not with distant strangers. This principle is a stricter form of loose coupling.
- A common use case of the facade pattern is when you are making use of an external service or API. Example: Social media and authentication services - Facebook, Google, Twitter, so on. SaaS - Mailchimp, Stripe, Slack, Google Drive and so on

## To test locally

Run

```
npm run ts-node app
```
