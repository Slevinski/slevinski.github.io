# steveslevinski.me

This README is copied from `public/` into `dist/` during build.

- In `public/`, these files are static build inputs for `steveslevinski.me`.
- In `dist/`, these files are part of the deployable static site.

- `CNAME` sets the custom domain to `steveslevinski.me`
- `images/` contains static images used by the site
- `series/` contains the generated mirror copied from `docs/series/`

Refresh `series/` with:

```bash
cd apps/steveslevinski-me
npm run sync-docs
```

Build the final deployable site into `dist/` with:

```bash
cd apps/steveslevinski-me
npm run build
```
