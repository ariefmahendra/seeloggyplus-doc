# SeeLoggyPlus Documentation

Landing page and user documentation for [SeeLoggyPlus](https://github.com/ariefmahendra/seeloggyplus),
a fast, modern and intelligent log viewer for local and remote (SSH) log files.

Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build),
deployed on Vercel. The content is bilingual: English (default, `/`) and Indonesian (`/id/`).

## Commands

| Command | Action |
| --- | --- |
| `npm run dev` | Start the dev server at `localhost:4321` |
| `npm run build` | Build the production site to `dist/` |
| `npx astro check` | Run content and type checks |
| `npm run preview` | Preview the production build locally |

## Structure

- `src/pages/` — custom landing pages: `/` (English) and `/id/` (Indonesian), built with
  Starlight's `<StarlightPage>`
- `src/components/landing/` — landing sections (hero, features, carousel, FAQ, ...)
- `src/content/landing/copy.ts` — all landing copy, both languages in one file
- `src/content/docs/` — English pages (root locale)
- `src/content/docs/id/` — Indonesian pages (same slugs; keep both in sync)
- `src/content/i18n/` — Starlight UI translation strings per language
- `src/assets/screenshots/` — screenshots used throughout the guides
- `src/assets/landing/` — landing screenshots (generated from the application repo)
- `src/styles/custom.css` — brand tokens ported from the application theme
- `.agents/skills/` — project skills for AI agents (see `AGENTS.md`)

## Content sources

The guides describe the released application and its
`README.md`. The changelog mirrors `docs/release-notes/` from the application repository.
When the application UI changes, update both language trees.

## License

© 2025–2026 SeeLoggyPlus

Production documentation: https://seeloggyplus-doc.vercel.app/. Version 0.8.0 moves application Help to this website.
