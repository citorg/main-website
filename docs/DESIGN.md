# Design direction

A spec for the design milestone (issue #11). The goal is FaithTech-level
polish with a CIT-specific identity — borrow their confidence, not their look.
This is a proposal: amend it deliberately rather than drifting from it.

## Foundation (keep)

The stark black/white identity already matches the CIT logo and reads
distinctly "us." Don't soften it into grays and gradients. Polish comes from
typography, spacing, and real photography — not more color.

## Palette

| Token | Hex | Use |
|---|---|---|
| `ink` | `#0A0A0A` | Headers, footer, hero overlays, primary text |
| `paper` | `#FFFFFF` | Page background |
| `stone` | `#F4F4F4` | Alternating section background |
| `mist` | `#6B6B6B` | Secondary text, eyebrows, captions |
| `signal` | `#C8102E` | Accent — used in exactly one place per page |

Signal red is the single point of energy. It passes WCAG AA on white
(5.9:1), so it can carry real interaction weight — not just decoration.
Signal red appears only in interaction states site-wide (link hovers,
active-nav underline, focus rings) and at most one accent element on
subpages; the homepage hero deliberately carries no red. (Candidates
considered: crimson #D7263D, deep scarlet #A4161A, coral #E63946 — signal
red balanced energy against AA compliance best.)

## Typography

- **Display:** Montserrat (Google Fonts, 700–800 for uppercase headlines,
  with `letter-spacing: 0.02em` on uppercase settings). It keeps the current
  bold-uppercase voice but with real character at large sizes.
- **Body:** Inter (already in use). 18px/1.7 for long-form paragraphs.
- **Eyebrow/labels:** Inter, 12–13px, uppercase, `tracking-[0.25em]`, `mist`.

Type scale (desktop / mobile): hero 72/40, page h1 56/36, section h2 36/28,
card h3 24/20, body 18/16, label 13/12.

## Signature element

Signature: in the CHRISTIANS IN TECH lockup, the word IN renders in light
weight (300) against the extrabold surrounding words — matching the CIT
wordmark.

## Section rhythm

One idea per section, one CTA per section. Sections alternate `paper` /
`stone`; hero and footer are `ink`. Vertical padding: `py-24` desktop,
`py-16` mobile. Every section: eyebrow label → heading → body → single CTA.

## Photography

Real CIT photos only — meetups, serving sessions, whiteboards, coffee. Warm,
candid, uncropped-feeling. Retire stock imagery entirely (issue #2). Photos
at slight scale within sections beat full-bleed backgrounds everywhere;
reserve full-bleed + dark overlay for the homepage hero alone.

## Motion

One orchestrated moment: a staggered fade-up on hero text at page load
(respecting `prefers-reduced-motion`). Hover states elsewhere are
color/underline transitions already in place. No scroll-jacking, no parallax.

## Quality floor

Responsive to 360px, visible keyboard focus on all interactive elements,
one `h1` per page, WCAG AA contrast (signal red passes AA on white at
body sizes; on black use it only for large type and 2px+ graphic elements).
