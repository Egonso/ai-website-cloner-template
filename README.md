# Walker School Clone Template

This workspace lives inside the Paideia project and is configured as a high-fidelity reference clone target for [The Walker School](https://www.thewalkerschool.org/).

It combines two tracks:

1. A research-oriented `clone-website` workspace for later rebuild/customization.
2. A full local mirror workflow for capturing all public pages, assets and front-end behaviors as a precise baseline.

## Quick Start

```bash
npm install
npm run mirror:fetch
npm run mirror:serve
```

Then open `http://127.0.0.1:4315/`.

## What Is Included

- Walker target configuration in `TARGET.md`
- Sitemap inventory in `docs/research/sitemap-urls.txt`
- Interaction notes in `docs/research/BEHAVIORS.md`
- Homepage/page-type notes in `docs/research/PAGE_TOPOLOGY.md`
- A `wget`-based mirror pipeline in `scripts/mirror-site.mjs`
- A small local preview server in `scripts/serve-mirror.mjs`

## Commands

```bash
npm run build         # Verify the Next.js template shell
npm run dev           # Open the local project dashboard
npm run mirror:fetch  # Download/update the Walker mirror
npm run mirror:serve  # Serve the mirrored site locally
npm run lint          # ESLint check
```

## Project Layout

```
docs/research/   # Site inventory and behavior notes
mirror/site/     # Downloaded local mirror output
scripts/         # Mirror + local preview helpers
src/app/         # Lightweight Next.js project dashboard
TARGET.md        # Clone scope for Walker School
```

## Notes

- The mirror aims to preserve the public front-end as closely as possible, including Slick sliders, AOS reveals, popup behavior and the desktop horizontal scroller.
- Authenticated areas and third-party analytics are intentionally not reproduced.
- Vimeo/embed behavior depends on the downloaded assets plus the original external providers where applicable.
