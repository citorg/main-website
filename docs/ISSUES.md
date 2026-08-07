# Seed issues

Copy each of these into GitHub Issues with the suggested labels.

---

**1. Localize sponsor logos** — `good first issue`
Sponsor logos on the homepage are hotlinked from third-party sites and will
break if those sites change. Download each logo (ask organizers for original
files if quality is poor), place them in `src/images/sponsors/`, and import
them in `src/routes/index.tsx`.
Done when: no `<img>` on the homepage points at an external logo URL.

---

**2. Replace hero stock photo with real CIT photography** — `good first issue` `design`
The hero uses an Unsplash image. We have 40+ meetups of real photos on our
Meetup page. Pick a strong wide shot (organizers can confirm photo
permissions), optimize it (~1600px wide, compressed), and swap it in. Also
compress: the current hero JPG is 880 KB.
Done when: hero shows a real CIT photo under 250 KB.

---

**3. Create a proper OG share image** — `good first issue` `design`
`index.html` currently reuses a Meetup photo for `og:image`. Design a
1200×630 branded share image (logo + tagline) and set it. Bonus: a distinct
one for `/hack`.
Done when: sharing christians-in-tech.org in Discord/Slack shows a branded card.

---

**4. Per-route document titles and meta descriptions** — `good first issue`
Routes define `head` titles but the root needs TanStack Router's HeadContent
wired so they render. Verify each page shows its own `<title>` and add a
meta description per route.
Done when: browser tab title changes as you navigate.

---

**5. First component test** — `good first issue` `infra`
Vitest is configured with zero tests. Write a test for `NextEvent`: renders
the banner when a future event exists in data, renders nothing when all
events are past. (Testing Library + jsdom are already installed; a
`vitest.config` or environment comment may be needed.)
Done when: `npm test` runs at least one meaningful passing test.

---

**6. Mobile menu focus trap** — `help wanted`
The mobile drawer closes on Escape and backdrop click, but focus isn't
trapped inside it and doesn't return to the menu button on close. Implement
both.
Done when: keyboard-only navigation through the mobile menu works cleanly.

---

**7. Newsletter signup in footer** — `content` `infra`
Decide on a provider (Buttondown is simple and free at our size), create the
account (organizers), and add a signup form to the footer.
Done when: footer form successfully subscribes a test address.

---

**8. #HACK Columbus page content** — `hack-columbus` `content`
`/hack` is a scaffold. Once dates/venue/registration are confirmed, fill in
the real content: schedule, FAQ, sponsor section, registration CTA.
Done when: organizers sign off on the live page.

---

**9. CIT Serve page copy review** — `content`
`/serve` copy was drafted from a short description. Organizers should review
against how we actually describe CIT Serve (see intro-circle slides) and
refine. Add photos from serving sessions if available.
Done when: organizers sign off on the live page.

---

**10. VolunteerPress project entry** — `content`
After the announcement, update the VolunteerPress entry in
`src/data/projects.json` with real links (repo, site) and set
`"contribute": true` if it's open for contributors.
Done when: the Projects page links to the live VolunteerPress repo.

---

**11. Design pass: typography and spacing** — `design`
Larger effort — see `docs/DESIGN.md` for the proposed direction. Introduce
the display typeface, type scale, and section rhythm across all pages.
Done when: the direction in DESIGN.md is implemented or consciously amended.

---

**12. Add Merch link when Queensboro store launches** — `content`
Footer has a TODO for this. Add the store URL to the Support column (and
consider header placement).
