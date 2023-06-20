# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment with Cloudflare

### Create the "pages" project

Using Wrangler to deploy to cloudflare.

```sh
% wrangler pages project create someprojectname
✔ Enter the production branch name: … main
✨ Successfully created the 'someprojectname' project. It will be available at https://someprojectname.pages.dev/ once you create your first deployment.
To deploy a folder of assets, run 'wrangler pages deploy [directory]'.:
```

### Publish


```sh
% wrangler pages deploy build/
🌎  Uploading... (40/40)

✨ Success! Uploaded 40 files (2.56 sec)

✨ Deployment complete! Take a peek over at https://dc249725.generalconsulting.pages.dev
```
