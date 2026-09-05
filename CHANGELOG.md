# Changelog

All notable changes to this template are recorded here.
Dates are `YYYY-MM-DD`. This project follows [semantic versioning](https://semver.org):
`MAJOR.MINOR.PATCH`.

> **Seller's note:** keep this file up to date. Buyers check it before they
> purchase and again before they update, and marketplaces reward templates that
> show a maintenance history. Delete this quoted note before shipping.

---

## [1.0.0] — 2026-09-05

First public release.

### Pages
- Home with a scroll-driven hero, category grid, signature bakes, a four-step
  process story, values and reviews
- Products with live search and category filtering across 24 items
- About with story, values, ingredient list and stats
- Contact with an order form, opening hours, map area and a FAQ accordion
- Styled 404 page

### Features
- **Single-file setup** — business details, the whole menu, prices, hours,
  reviews and FAQ all live in `assets/js/data.js`
- **Two colour themes** — dark gold, and a light blush-and-gold theme, with a
  switcher that remembers the visitor's choice
- **Configurable currency** — set the symbol and locale, and every price on the
  site reformats
- **Configurable order channel** — send order buttons to WhatsApp, to the
  phone's text app, or straight to a phone call
- **Never-broken images** — every product falls back to its category photo and
  then to a hand-drawn SVG illustration, so a missing or misspelt filename
  cannot leave a broken image on the page
- **Cross-fading hero** — one photo, or a list that fades every five seconds
- Scroll-reveal animations, a scroll progress bar and a parallax hero, all of
  which stand down under `prefers-reduced-motion`
- Per-page hero background images
- Order form that composes a complete message and hands it to the order channel
  — nothing is stored, and no backend is needed

### Technical
- No build step, no npm, no framework, no jQuery. Classic `<script>` tags, so
  the site also runs from `file://`
- Responsive from 320 px up
- Accessible: skip link, focus states, ARIA on the drawer and accordion,
  keyboard-operable throughout
- SEO ready: per-page titles and descriptions, canonical URLs, Open Graph and
  Twitter cards, `Bakery` JSON-LD structured data, `sitemap.xml`, `robots.txt`
- Images shipped as WebP; total page weight roughly 2–4 MB per page
- Every place that still holds demo content is marked `TEMPLATE TODO`

---

## Planned

- Optional gallery page
- Optional light/dark auto-switch on system preference
- Additional colour presets
