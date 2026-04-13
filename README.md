# steveslevinski.me

This README is copied from `public/` into `dist/` during build.

- In `public/`, these files are static build inputs for `steveslevinski.me`.
- In `dist/`, these files are part of the deployable static site.

- `CNAME` sets the custom domain to `steveslevinski.me`
- `images/` contains static images used by the site
- `series/` contains the generated mirror copied from `docs/series/`
- `site-index.json` is the generated public discovery manifest used by the site index and search page
- `dist.zip` is created beside `dist/` after a successful build from the app root
- old `#series/.../handout` links are normalized by the app to the canonical `#series/.../essay` route

Refresh `series/` with:

```bash
cd apps/steveslevinski-me
npm run sync-docs
```

That sync step also rebuilds `site-index.json`.

Build the final deployable site into `dist/` with:

```bash
cd apps/steveslevinski-me
npm run build
```

That build command also creates `dist.zip` automatically after `dist/` is written.

If `dist/` already exists and you only need to recreate the archive:

```bash
cd apps/steveslevinski-me
npm run package-dist
```

After build:

- `dist/` is the deployable static site
- `dist.zip` is the packaged archive for transfer or deployment workflows
- `site-index.json` and `series/index.json` are public metadata files used by the search page
