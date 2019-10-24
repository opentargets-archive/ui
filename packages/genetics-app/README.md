# Open Targets Genetics

See [genetics-app](https://github.com/opentargets/genetics-app) for the current production code.

## GraphQL API

The GraphQL API endpoint is provided by the `REACT_APP_GENETICS_API_URL` environment variable (development default in `.env.development`).

**Important**: Whenever the remote API schema or the app's `.gql` queries change, you will likely need to regenerate the query types for TypeScript. This can be done with `yarn api:codegen`.

## Usage

This React app was bootstrapped using `create-react-app`. See the `create-react-app` documentation for more details, but the main commands needed are `yarn start` (development mode, watches for file changes) and `yarn build` (build for production, runs once and exits).
