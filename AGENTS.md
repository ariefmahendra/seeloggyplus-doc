---
description: Binding operating rules for AI coding agents (OpenCode etc.) working in this repository.
applies_to: "**"
---

# SeeLoggyPlus Docs — Agent Rules

Astro + Starlight landing & documentation site for SeeLoggyPlus (JavaFX desktop log
viewer), deployed on Vercel. Bilingual: English (default, `/`) and Indonesian (`/id/`).

Rule strength: **MUST** = never skip; **SHOULD** = default, deviate only with a
clear reason; **NEVER** = stop and choose another path.

## 0. Skills & source style

- Project-local skills live in `.agents/skills/` (lockfile `skills-lock.json`).
  Before analysis or edits, load the relevant skill and mention it briefly:
  `frontend-design` and `web-design-guidelines` (UI work), `doc-coauthoring`
  (writing/rewriting pages), `seo` (meta tags, sitemap, structured data),
  `agent-browser` (visual verification in a real browser),
  `systematic-debugging` (build or runtime failures).
- Repository rules override skill defaults.
- Sources carry no comments unless a tool requires them.

## 1. Commands

| Goal | Command |
| --- | --- |
| Dev server | `npm run dev` |
| Production build | `npm run build` |
| UI tests (build + Playwright) | `npm test` |
| UI tests only (existing build) | `npx playwright test` |
| Content & type check | `npx astro check` |
| Preview built site | `npm run preview` |

- MUST write or extend a failing Playwright test in `tests/` BEFORE changing landing UI
  behaviour or layout (run `npx playwright test`, watch it fail for the expected reason,
  then implement until the whole suite is green). The suite covers text overflow, hero
  and feature screenshot size/ratio/HD delivery, the live tail switch, the FAQ and
  console errors.
- MUST run `npx astro check` and `npm test` before reporting a change as done.
  `starlight-links-validator` turns broken internal links into build failures.
- MUST verify user-visible UI changes in a browser (`agent-browser`) at desktop and
  mobile widths, light and dark themes, before calling them done.

## 2. Content (MUST)

- Every page exists in BOTH languages: `src/content/docs/` (en) and
  `src/content/docs/id/` (id). A page is not done until its translation exists.
- Frontmatter MUST have `title` and `description`; `description` feeds SEO.
- Use Starlight components first (`Steps`, `Asides`, `Cards`, `Badges`); keyboard
  shortcuts use `<kbd>` elements (styled in `custom.css`).
- Screenshots in docs pages use Markdown image syntax with localized alt text
  (`![Main window](../../assets/screenshots/main-window.png)`), optionally followed by a
  `<p class="screenshot-caption">` caption. Landing components use `<Image>` from
  `astro:assets`. Never raw `<img>`.
- The landing page lives in `src/pages/index.astro` and `src/pages/id/index.astro`,
  built from `src/components/landing/` with all copy in `src/content/landing/copy.ts`
  (both languages must stay in sync). The hero and the gallery show the real application
  screenshots captured in the app's DARK theme (the site itself still follows the visitor's
  light/dark preference), and the feature panels show the full window screenshots, never
  cropped. All landing screenshots come from the app repository's
  `LandingScreenshotGeneratorTest` (1440×900 at 2×, dark theme) and live in
  `src/assets/landing/`; never hand-edit them. Images MUST keep `quality={90}` and
  width variants up to 2880 so retina screens get at least a 2× source.
- The landing follows the "product performs" art direction: real, working interface
  fragments marked with `data-ui` (their product conventions, monospace and 1px borders,
  are intentional and exempt from the design house rules via `taste-skill-ignore`
  comments). Design tokens are `--lp-*` and the five type steps `--step-*` in
  `custom.css`; motion uses `[data-rise]`, `[data-reveal]` and the hero shutter CSS
  animation. Before shipping visual changes to the landing, run the design gate:
  `node .agents/skills/design-taste-frontend/scripts/lint.mjs src/components/landing src/pages`
  and `node .agents/skills/design-taste-frontend/scripts/inspect.mjs <url>` (expect
  0 FAIL).
- Starlight's automatic page title is hidden on landing pages via a CSS rule scoped with
  `body:has(.lp)`; keep the `.lp` wrapper when editing the landing pages.
- Internal links use absolute site paths (`/guides/tail/`) so the link validator can check
  them. Pages in the Indonesian tree link to their `/id/` counterparts
  (`/id/guides/tail/`); inconsistent-locale links fail the build.
- Keyboard shortcuts and preference names MUST match the application (source of truth:
  the app repository's `README.md` and `help/` content).
- Guide pages stay task-oriented and concise; landing copy may be bolder.

## 3. Brand & UI

- Colours only via CSS custom properties in `src/styles/custom.css`, ported from the
  app theme tokens (`-sl-*`); brand `#3871e1`. Light and dark modes must both stay
  readable and consistent.
- Do not fork Starlight layout internals; extend via CSS customisation and content
  configuration.
- Screenshots ship in both themes where feasible; compress before adding.

## 4. Version sync

- Docs describe the latest released application version; any version badge MUST match
  the app repository's `gradle.properties` version.
- `src/content/docs/changelog/` mirrors the app repository's
  `docs/release-notes/<version>.md` entries.

## 5. Commits (MUST)

- Conventional Commits (`feat|fix|docs|style|refactor|chore|ci`), one logical change
  per commit.
- NEVER commit `node_modules/`, `dist/`, `.astro/`, `*.log`, or local env files.
- Check `git status` before committing: relevant files only.
