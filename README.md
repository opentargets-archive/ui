# UI

A monorepo containing Open Targets UI apps and common components. **Not currently in production.**

The aim of using the monorepo is to more easily keep common components up to date and in usage across the apps. The repo also uses TypeScript.

Contents:

- Common components (see `packages/ui`)
- Open Targets Platform (see `packages/platform-app`)
- Open Targets Genetics (see `packages/genetics-app`)

## Usage

### Development

To start development, run:

```
lerna bootstrap && lerna link
```

Open three other terminals and run:

```
# shared ui components
cd packages/ui
yarn start
```

```
# platform (starts on 3001)
cd packages/platform-app
yarn start
```

```
# genetics (starts on 3002)
cd packages/genetics-app
yarn start
```

### Production

Not currently used in production, but the build steps in the root `package.json` create the distributions needed for Netlify or Docker packaging. Setting up one Netlify project for Open Targets Platform and Open Targets Genetics using the respective output directories has been tested and works fine.

## Environment

The apps depend on GraphQL APIs (`platform-api` and `genetics-api` repos). These can be run locally or the latest live version can be used. See `packages/*-app/.env.development` for development defaults.
