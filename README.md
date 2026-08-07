# christians-in-tech.org

The official website for [Christians in Tech](https://www.christians-in-tech.org/) — a community at the intersection of faith and technology, gathering bi-weekly in Columbus, Ohio.

This site is a **community project**. It's built and maintained by CIT members as a real-world codebase for learning modern web development and AI-assisted workflows. If you've never contributed to open source before, this is a great place to start — see [CONTRIBUTING.md](CONTRIBUTING.md).

## Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for build tooling
- [TanStack Router](https://tanstack.com/router) (file-based routes in `src/routes/`)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Biome](https://biomejs.dev/) for linting and formatting
- [Vitest](https://vitest.dev/) for tests
- Deployed on [Vercel](https://vercel.com/) — every PR gets a preview URL

## Getting started

```bash
git clone https://github.com/citorg/main-website.git
cd main-website
npm install
npm run dev        # http://localhost:3000
```

Other commands:

```bash
npm run check      # lint + format check (Biome)
npx tsc --noEmit   # typecheck
npm test           # run tests
npm run build      # production build
```

## Project structure

```
src/
  routes/          # one file per page (TanStack Router file-based routing)
    __root.tsx     # shared layout: Header + <Outlet /> + Footer
    index.tsx      # homepage
    events.tsx     # upcoming meetups
    serve.tsx      # CIT Serve
    projects.tsx   # community projects (VolunteerPress, this site, #HACK)
    hack.tsx       # #HACK Columbus
  components/      # shared components
  data/            # committed JSON data (events, projects)
  images/          # imported image assets
scripts/
  sync-events.mjs  # fetches upcoming events from our public Meetup page
.github/workflows/
  ci.yml           # lint, typecheck, test, build on every PR
  sync-events.yml  # nightly event sync (commits src/data/events.json)
```

## How event data works

Meetup no longer offers open iCal/RSS feeds, so a scheduled GitHub Action
(`sync-events.yml`) parses our public [Meetup page](https://www.meetup.com/citcbus/events/)
nightly and commits the results to `src/data/events.json`. The site itself is
fully static — if Meetup is unreachable or changes its markup, the site keeps
serving the last known-good data and the workflow fails loudly instead of
writing garbage.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md), then look for issues labeled
[`good first issue`](https://github.com/citorg/main-website/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).
We especially welcome contributions from CIT members learning AI-assisted
development — this repo includes a [CLAUDE.md](CLAUDE.md) so coding agents
(Claude Code, Copilot, Cursor) can work productively here.

## License

[MIT](LICENSE)
