# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

SunPlex is a static, dependency-free front-end prototype of an IPTV streaming UI (modeled after IPTV Smarters Pro). There is no backend, no database, and no build tooling — it's three files:

- `index.html` — markup for all views and modals (splash screen, dashboard, Live TV, Movies, Series, EPG, Multi-screen)
- `styles.css` — CSS custom-property-based dark "cinematic" theme and component styles
- `app.js` — all application logic
- `DESIGN_LAYOUT.md` — the design spec: color tokens, typography, layout wireframe, and a "Framework Conversion Guide" for eventually porting this prototype to React/Next.js, Vue/Nuxt, or Laravel+Blade+Vite

## Commands

There is no package.json, composer.json, or Makefile — no install, build, lint, or test step exists. Serve the folder as static files (e.g. via Laragon's local Apache/Nginx) and open `index.html` in a browser; edits to the `.html`/`.css`/`.js` files take effect on refresh.

## Architecture

- **No routing** — it's a single HTML document. Switching between screens (dashboard, Live TV player, movie catalog, EPG, multi-screen) is done client-side by toggling section visibility (see the view-switching logic in `app.js`, e.g. `switchView`/`goBack`).
- **No backend or API** — all catalog content is mock data hardcoded in `app.js` (e.g. a `MOVIES_DATA` array with fields like `id`, `title`, `poster`, `backdrop`, `streamUrl`).
- **Video playback** uses HLS.js against `.m3u8` stream URLs.
- **All external dependencies are CDN-loaded** (Remix Icon, Google Fonts Outfit/Inter, HLS.js) — there is no npm/bundler, so don't introduce one without reason; add new dependencies via `<script>`/`<link>` tags consistent with the existing pattern.
- Notable scaffolded features in `app.js`: Xtream Codes IPTV login modal, parental-lock PIN modal, category filter modal, search toggle.

This is a design prototype, not production architecture — treat `DESIGN_LAYOUT.md` as the source of truth for visual/UX decisions (color tokens like `--bg-primary`, `--accent-gold`, `--accent-purple`, typography) before changing styles or layout.
