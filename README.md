<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
  
## Description


Example created for study, going through the concepts and main uses of NestJs


## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Usage

After running the start development command
access the route:  [development episodes](http://localhost:3000/episodes)



```python
# returns all episodes
http://localhost:3000/episodes

# returns one episode
http://localhost:3000/episodes/<id here>

# returns controlled limit episodes
http://localhost:3000/episodes?limit=<number here>

# create an episode
## when you want to create an episode, pass the body with the following values:
{
"name":"episode name here",
"publishedAt": "2024-06-05"
}
# It will give an error if you just call it like this, you have to add the key in the header: X-API-KEY with the value nest-is-awesome
```

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
