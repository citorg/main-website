# Contributing to christians-in-tech.org

Thanks for helping build the CIT website! This project exists partly *so that*
people can learn by contributing — questions are welcome, and no contribution
is too small.

## The short version

1. **Find or open an issue.** Check the [issue list](https://github.com/citorg/main-website/issues).
   Issues labeled `good first issue` are scoped for newcomers. If you want to
   work on something that isn't filed yet, open an issue first so we can talk
   it through.
2. **Comment on the issue** to claim it so two people don't do the same work.
3. **Fork / branch.** Branch from `main` using a descriptive name:
   `fix/mobile-menu-focus`, `feat/hack-schedule`, `chore/sponsor-logos`.
4. **Make your change.** Run `npm run check` and `npm run build` locally
   before pushing.
5. **Open a pull request.** Fill in the PR template. CI will lint, typecheck,
   test, and build your branch, and Vercel will post a preview URL so
   reviewers can click around your change.
6. **Review.** A maintainer reviews, may request changes, and merges. Merges
   to `main` deploy to production automatically.

## Using AI tools (encouraged!)

Part of CIT's mission with this repo is teaching AI-assisted development
workflows. Using Claude Code, Copilot, Cursor, or similar tools is not just
allowed — it's encouraged. Two rules:

- **You own what you submit.** Read and understand the code your tools
  produce. "The AI wrote it" is not a review response.
- **Keep changes scoped to the issue.** Agents love refactoring things they
  weren't asked to touch. Diffs should match the issue they close.

The repo includes a [CLAUDE.md](CLAUDE.md) with project conventions that
coding agents pick up automatically.

## Code conventions

- TypeScript everywhere; no `any` unless there's a comment explaining why.
- Tailwind utility classes for styling — avoid inline `style` objects.
- Formatting and lint rules are enforced by Biome (`npm run check`); don't
  fight the formatter.
- Pages live in `src/routes/` (file-based routing). Shared UI goes in
  `src/components/`. Content-like data (events, projects, sponsors) goes in
  `src/data/` as JSON so non-experts can edit it via PR.
- External links: `target="_blank"` always pairs with
  `rel="noopener noreferrer"`.
- Accessibility is a requirement, not a nice-to-have: semantic headings (one
  `h1` per page), alt text on images, keyboard-reachable interactions.

## Questions?

Ask in the CIT Discord (#website channel if it exists, or wherever makes
sense) or bring it to a meetup — this project is meant to be worked on
together, in person, too.
