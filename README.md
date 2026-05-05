# steveslevinski.me

This directory is a deployable static build of `steveslevinski.me`.

It is intended to stand on its own when copied into the deployment repository.

- `CNAME` sets the custom domain to `steveslevinski.me`
- `index.html` is the application entry point
- `assets/` contains the bundled JavaScript, CSS, fonts, and SignWriting browser assets
- `images/` contains static images used by the site
- `iswa-hands/` contains generated Sutton SignWriting hand-symbol images used by the site
- `series/` contains the public publication and document mirror served by the site
- `site-index.json` is the public discovery manifest used by site search and navigation
- `.nojekyll` keeps GitHub Pages from treating underscore-prefixed build assets specially

The site is a client-side application. Public routes use hash fragments, such as:

- `#section/publications`
- `#section/stewardship`
- `#series/foundations/start-here/primary`

Do not edit these files directly in the deployment repository unless making an emergency deployment-only fix.

Normal updates should replace this directory with a newly prepared static-site release.
