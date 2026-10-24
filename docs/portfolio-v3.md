# Portfolio Version 3 — approved editorial design

This branch replaces the previous dark redesign with the approved light editorial Version 3 design. The original approved prototype was provided in ChatGPT as `sibona_portfolio_design_v3.zip`.

## Composition and accuracy

- Hero is engineering-first, with no portrait. The systems illustration is explicitly conceptual.
- Only the supplied portrait in `public/assets/samson-portrait.webp` appears in About.
- SIONA Technologies is Samson's co-founded company; never represent it as an external employer.
- Sibona AI is a broad public-facing research descriptor, not a product launch.
- No mention of private research programme names, methods, or undisclosed internal architecture.
- Project illustrations are conceptual and labeled accordingly. No invented outcome metrics or client identities.

## Architecture

Page sections are separated into `src/components/v3/*.astro`. Visual styles are retained in `src/styles/global.css` from the approved prototype. The metadata and theme defaults live in `src/layouts/Layout.astro`. A small inline script controls the mobile menu and color theme.

## Release gates

- Run `npm ci` and `npm run build` with Node 22.12+.
- Browser-test navigation, theme toggle, About portrait, and mobile layouts at 360/390/768/1024/1440 pixels.
- Audit for outdated public copy in unused legacy components and `src/data/site.ts` before merge.
- Verify Cloudflare production project and domain. Do not deploy or merge without manual review.
