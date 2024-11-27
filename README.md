# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```sh
$ npm install
```

### Local Development

```sh
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```sh
$ npm run build-api && npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Updating OpenAPI definitions

Update the [src/openapi.json](src/openapi.json) file.

Then, run the following to generate the MDX files:
```sh
$ npm run build-api
```