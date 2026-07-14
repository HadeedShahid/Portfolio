# Hadeed Shahid — Portfolio

A one-page, single-viewport personal portfolio built with **Next.js (App Router)**
in the **"Industry"** design system: a technical blueprint/CAD aesthetic —
steel-blue accent on a light ground, hairline-framed cards with `+` registration
marks, condensed uppercase headings, a cursor-tracking crosshair instrument, a
live Lahore clock, and a drafting-style intro animation.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- `next/font` — Barlow Condensed (headings) + Barlow (body)
- Plain CSS (design tokens + component classes in `app/globals.css`)
- No CSS framework, no animation library — the instruments/intro are Web
  Animations API + `requestAnimationFrame` in a single `useEffect`.

## Structure

```
app/layout.tsx        → fonts, metadata, <html> shell
app/page.tsx          → server shell → renders <Portfolio />
app/globals.css       → Industry design tokens, .blueprint/.corner/.duotone/.tag,
                        hover states, and the responsive media queries
components/Portfolio.tsx → "use client": layout, state, intro + instruments
lib/data.ts           → contacts + projects
```

## Getting Started

```bash
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Data to wire before launch (currently placeholder)

These come from the design handoff and still need real values:

- **`public/resume.pdf`** — the RESUME card's VIEW and SAVE both point at
  `/resume.pdf`; add the file.
- **Phone number** — `lib/data.ts` has a placeholder `+92 300 0000000`.
- **Projects** — the 4 entries in `lib/data.ts` are `Project One…Four` with
  `href: "#"` and hatched placeholder logos; add real names, live URLs, and
  logos (render logos through the `.duotone` wrapper).
- **Confirm** email / LinkedIn / GitHub values in `lib/data.ts`.

> Note: the LinkedIn/GitHub links open in the same tab, matching the handoff
> prototype. Add `target="_blank" rel="noopener"` in `components/Portfolio.tsx`
> if you'd prefer them to open in a new tab.
