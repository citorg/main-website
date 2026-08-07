# Migration guide: turning main-website into a community project

Follow these steps in order. Total time: ~30 minutes.

## 1. Archive the old structure (preserves everything)

```bash
git clone https://github.com/citorg/main-website.git
cd main-website
git tag v1-archive          # snapshot of v1/V2/under-construction as-is
git push origin v1-archive
```

Anyone can recover the old code anytime with `git checkout v1-archive`.

## 2. Replace the repo contents with this kit

```bash
git checkout -b restructure
git rm -r v1 V2 under-construction README.md
# Unzip cit-website-kit.zip and copy ALL its contents (including hidden
# .github folder) into the repo root, then:
git add -A
git commit -m "Restructure: V2 becomes repo root; add community project scaffolding"
git push -u origin restructure
```

Open a PR from `restructure` → `main`, confirm the Vercel preview looks right,
and merge. (This PR is also a nice artifact — the "founding commit" of the
community project.)

Note: `node_modules/` and `dist/` are not in the kit — run `npm install`
locally after copying. A `.gitignore` covering both is included.

## 3. Update Vercel settings

In the Vercel project (main-website):
- **Root Directory:** clear it (was presumably `V2`); the app is now at repo root.
- **Framework preset:** Vite. Build command `npm run build`, output `dist`.
- Confirm the production domain mapping for christians-in-tech.org.
- Preview deployments should be on for all branches/PRs (default).

## 4. GitHub repository settings

- **Settings → General:** enable Issues and Discussions (Discussions is a
  good home for "how do I get started" questions).
- **Settings → Branches → add branch protection for `main`:**
  - Require a pull request before merging (1 approval).
  - Require status checks to pass: select the `checks` job from CI.
- **Settings → Actions → General → Workflow permissions:** set to
  "Read and write permissions" (needed so `sync-events.yml` can commit
  event data).
- **Labels:** create `good first issue`, `design`, `content`, `infra`,
  `hack-columbus`, `help wanted`.

## 5. Seed the issues

Copy the issues from `docs/ISSUES.md` into GitHub Issues, applying the
suggested labels. These are the on-ramp for contributors at the next meetup.

## 6. Test the event sync

Actions tab → "Sync Meetup events" → Run workflow. Verify it either commits
an updated `src/data/events.json` or exits cleanly with "Events unchanged."
If it fails, the parser needs adjusting to Meetup's current markup — the
site keeps working on committed data regardless.

## 7. When the Queensboro store launches

Add a "Merch" link in `src/components/Footer.tsx` (there's a TODO marking the
spot) and optionally in the header nav. Queensboro company stores are hosted
on their infrastructure, so linking out is the expected pattern — treat it
like the Meetup and Discord links.
