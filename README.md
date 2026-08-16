# waypoints-kit

Reusable Waypoints packages: the travel-log engine (@danmat/waypoints-core) and React components (@danmat/waypoints-ui)

## Packages

- `@waypoints-kit/core` — the core library
- `@waypoints-kit/utils` — utilities built on `@waypoints-kit/core`

## Develop

```sh
pnpm install
pnpm build     # build all packages (Turborepo)
pnpm test
```

## Continuous integration

The `CI` workflow runs typecheck, lint, tests, and build on every push. It installs from a committed lockfile — so after creating the repo, run `pnpm install` and commit the generated `pnpm-lock.yaml`. Until then CI fails on the install step with a missing-lockfile error (expected on a brand-new repo).

## License

MIT © DanMat
