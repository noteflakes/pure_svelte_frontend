## Svelte on the Frontend, Anything on the Backend

This repository is a template repo for creating apps using Svelte on the
frontend. I've been playing with Svelte, which is itself really great, but the
build situation is IMHO not satisfactory, that is if you don't use SvelteKit or
if you don't run JS on the backend with all the tooling involved.

So I made a basic Svelte app with the minimal `package.json` and
`rollup.config.js` files that will permit building the source code, without
having to install node, deno, bun or whatever. The build is done by running 
bun and rollup in a container.

## Usage

```bash
# install all dependencies
$ bin/install

# build source code
$ bin/build

# watch for file changes and rebuild
$ bin/build -w
```

The source code is in the `src` directory. The output bundles are in the
`public` directory.

## License

This repository is licensed under the MIT license.
