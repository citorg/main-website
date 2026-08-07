# CLAUDE.md

Guidance for AI coding agents (Claude Code, Copilot, Cursor, etc.) working in
this repository.

## What this is

The website for Christians in Tech (CIT), a Columbus, Ohio community at the
intersection of faith and technology. It is intentionally maintained as a
community learning project — clarity beats cleverness.

## Commands

- `npm run dev` — dev server on port 3000
- `npm run check` — Biome lint + format check (run before committing)
- `npx tsc --noEmit` — typecheck
- `npm test` — Vitest
- `npm run build` — typecheck + production build

## Architecture

- **Routing:** TanStack Router, file-based. Every file in `src/routes/` is a
  page. `src/routes/__root.tsx` is the shared layout (Header + Outlet +
  Footer) — page content never goes in the root route.
- **`src/routeTree.gen.ts` is generated.** Never edit it by hand; the Vite
  plugin regenerates it when routes change.
- **Data as JSON:** events (`src/data/events.json`) and projects
  (`src/data/projects.json`) are committed JSON imported directly into
  components. `events.json` is written by `scripts/sync-events.mjs` via a
  nightly GitHub Action — don't hand-edit events except to hotfix.
- **Styling:** Tailwind v4 utilities. No inline `style` objects, no CSS
  modules. Shared CTA styling lives in `src/components/CtaLink.tsx` — use it
  instead of styling raw anchors.

## Conventions

- One `h1` per page; sections use `h2`/`h3`.
- External links always get `rel="noopener noreferrer"` with
  `target="_blank"`.
- Internal navigation uses TanStack Router `<Link>`, never `<a href>`.
- Biome enforces tabs and double quotes — run `npm run check` rather than
  guessing.
- Keep diffs scoped to the issue being worked on. Do not refactor unrelated
  code in the same PR.

## Gotchas

- Sponsor logos are currently hotlinked from third-party sites (known issue —
  localizing them is a tracked task).
- The `/hack` and `/serve` pages contain draft copy marked with `NOTE:`
  comments; content changes there should be confirmed with CIT organizers.
- Devtools render only when `import.meta.env.DEV` is true — keep it that way.
