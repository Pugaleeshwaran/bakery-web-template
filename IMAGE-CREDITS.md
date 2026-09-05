# Images, fonts and third-party assets

> **⚠ Read this before you sell or publish.** It has one action item for the
> seller and one for the buyer.

---

## For the SELLER — do this before listing the template

The **code, layout, CSS, SVG artwork and documentation** in this download are
original work and yours to license.

The **photographs are not automatically yours to redistribute.** Distributing a
template means giving every buyer a copy of every photo in it, and that needs a
licence that permits redistribution. Most stock licences — including most free
ones — explicitly forbid it.

Before you list this template, do one of the following:

1. **Replace the photos** with images licensed for redistribution in a template.
   Unsplash and Pexels both permit this; check the current terms yourself, and
   record which photo came from where in the table below.
2. **Confirm your existing rights.** If the photos were generated with an AI
   image tool, check that tool's terms for commercial use *and* redistribution —
   the two are separate permissions and having one does not give you the other.
   If they were commissioned or shot by you, you already hold the rights.
3. **Ship the template without photos.** Delete `assets/images/*.webp` and
   `assets/hero-bg/*.webp`. The template is built for this: every product falls
   back to a hand-drawn SVG illustration, so it still looks finished and
   demonstrates the design. Say "photos not included" in your listing.

Marketplaces generally require you to declare the source of every asset, so
filling in the table below is worth the ten minutes either way.

| File | Source | Licence | Redistribution allowed? |
|---|---|---|---|
| `assets/images/*.webp` | *(fill in)* | *(fill in)* | *(fill in)* |
| `assets/hero-bg/*.webp` | *(fill in)* | *(fill in)* | *(fill in)* |
| `assets/images/og-cover.jpg` | *(fill in)* | *(fill in)* | *(fill in)* |

---

## For the BUYER — the photos are demo content

The cakes, brownies and cookies you see are **placeholders to show the design**.
They are not pictures of your food, and you should replace them with your own
before you go live. Customers ordering a cake that looks nothing like the photo
is a real complaint, and in some places it is also a consumer-protection issue.

Replacing them is easy — drop a file into `assets/images/` named after the item:

```
red-velvet-cake.webp   →  Red Velvet Cake
classic-brownie.webp   →  Classic Brownie
```

`.webp`, `.png`, `.jpg` and `.jpeg` all work. Nothing else to edit.
See `docs/index.html` for the full list of names.

---

## Assets that ARE included and free to use

| Asset | Notes |
|---|---|
| `assets/images/logo.svg` | Original artwork. Edit the wording or replace it. |
| `assets/images/favicon.svg` | Original artwork. Change the letter and colours. |
| `assets/images/menu-card.svg` | Original artwork. It is a text file — edit the prices directly. |
| All icons and illustrations in `assets/js/visuals.js` | Original, hand-written SVG paths. |

---

## Fonts

Not included in the download. They load from Google Fonts at runtime:

| Font | Used for | Licence |
|---|---|---|
| Cormorant Garamond | headings | SIL Open Font Licence 1.1 |
| Great Vibes | script accents | SIL Open Font Licence 1.1 |
| Jost | body and UI text | SIL Open Font Licence 1.1 |

The OFL permits commercial use and embedding. If you need the site to work
offline, download the font files, put them in `assets/fonts/`, and swap the
Google Fonts `<link>` in each page for a local `@font-face` block.

---

## Third-party code

**None.** No jQuery, no Bootstrap, no Tailwind, no build tools, no npm
packages, no analytics, no trackers. Everything in `assets/js/` and
`assets/css/` was written for this template.
