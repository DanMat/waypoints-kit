# waypoints-kit

The reusable building blocks behind [Waypoints](https://waypoints.danmat.workers.dev) —
a privacy-first travel log built from your own location history. Two packages:

| Package | What it is |
| --- | --- |
| [`@danmat/waypoints-core`](packages/core) | The engine: parse a Google Timeline export → sanitized, city-level places + stats. Browser-safe, dataset-agnostic, zero deps. |
| [`@danmat/waypoints-ui`](packages/ui) | React components: world map, stat tiles, fun-facts band, sortable places table. |

The core is pure and synchronous, so it runs in a Web Worker in the browser
(raw location data never leaves the device) or in CI.

## Develop

```sh
pnpm install
pnpm build && pnpm test
```

## Releasing

Versioned + published to npm with **provenance** via
[`.github/workflows/release.yml`](.github/workflows/release.yml), using npm
**Trusted Publishing (OIDC)** — no `NPM_TOKEN` stored. Bump the package
versions, then run the Release workflow (manually or by pushing a `v*` tag).
Each package must list this repo + `release.yml` as a trusted publisher on
npmjs.com.

## License

MIT © DanMat
