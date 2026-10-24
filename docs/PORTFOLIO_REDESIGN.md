# Portfolio redesign — review before production

This branch proposes a responsive Astro redesign of the personal portfolio for Samson Sibona Njaji.

## Content and research boundaries

- SIONA Technologies is identified as the co-founded **company**, not an employer.
- "Sibona AI" is a **public editorial label** for exploratory applied AI interests, not a claim of a launched product or the name of an internal engineering repository.
- Private research project names, intellectual-property details, architecture hypotheses, benchmark results and unreleased code are intentionally omitted from public copy.
- Real achievements are preferred to invented vanity metrics, fictional blog posts or unsupported performance claims.

## Portrait

The existing checked-in image at \`public/profile.png\` is used by the hero and profile metadata. The updated portrait supplied by the owner is not yet included in this branch; it must be copied to \`public/profile.png\` from the owner's device, then optimized into a suitable web image, and verified before merge. No additional stock images are required.

## Validate the preview

From the repository root, on Node.js >= 22.12:

\`\`\`bash
npm ci
npm run build
npm run dev
\`\`\`

Inspect keyboard and mobile layouts at 360, 390, 768, 1024 and 1440 px and verify reduced-motion behavior. Verify every external URL before publishing.

## Release safety

The live \`njaji-sibona.pages.dev\` site may still be a separate older deployment. Check Cloudflare project bindings, its actual production commit and preview deployment before merging. Do not run the deploy script or enable automatic production release without approval. The draft PR is for review only.
