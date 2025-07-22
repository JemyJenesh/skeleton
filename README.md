# Turborepo Monorepo Starter

This repository is a monorepo managed with [Turborepo](https://turborepo.com/).

## Overview

This monorepo contains multiple applications and packages, all written in [TypeScript](https://www.typescriptlang.org/):
The project is setup with postgresql database and adminer as a database client using docker.

### Apps

- **api**: Express API and prisma with postgresql for database
- **web**: [Next.js](https://nextjs.org/) web app

### Packages

- **@repo/utils**: Shared schema, types, config and other utilities.
- **@repo/eslint-config**: Shared ESLint configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- **@repo/typescript-config**: Shared TypeScript configurations

### Utilities

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Build

To build all apps and packages:

```sh
pnpm build
```

To build a specific package/app:

```sh
pnpm build --filter=web
```

## Develop

Start all services with Docker Compose:

```sh
docker-compose up --build
```

To start development for all apps and packages:

```sh
pnpm dev
```

To develop a specific package/app:

```sh
pnpm dev --filter=web
```

## Useful Links

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
