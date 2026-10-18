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

- `src/content/docs/` — English pages (root locale)
- `src/content/docs/id/` — Indonesian pages (same slugs; keep both in sync)
- `src/content/i18n/` — Starlight UI translation strings per language
- `src/assets/screenshots/` — screenshots used throughout the guides
- `src/styles/custom.css` — brand tokens ported from the application theme
- `.agents/skills/` — project skills for AI agents (see `AGENTS.md`)

## Content sources

The guides are ported from the application repository's offline `help/` pages and its
`README.md`. The changelog mirrors `docs/release-notes/` from the application repository.
When the application UI changes, update both language trees.

## License

© 2025–2026 SeeLoggyPlus
