# Rosewood — Bakery & Cake Shop Website Template

A complete four-page website for bakeries, home bakers, cake studios and dessert
shops. Pure HTML, CSS and JavaScript — **no build step, no npm, no database.**
Open `index.html` in a browser and it works.

---

## Start here (5 minutes)

1. **Unzip** this folder anywhere on your computer.
2. **Double-click `index.html`.** The whole site runs straight from your hard
   drive — you don't need a server to look at it.
3. **Open `assets/js/data.js`** in any text editor (Notepad, TextEdit, VS Code).
4. Change the values in **section 1** to your own name, phone, email and address.
5. Save the file and refresh the browser. Done — every page has updated.

That one file also holds your entire menu, your prices, your opening hours,
your reviews and your FAQ. Most people never need to touch anything else.

> Full walkthrough with pictures: open **`docs/index.html`** in your browser.

---

## What's in the box

| Page | File | What it does |
|---|---|---|
| Home | `index.html` | Scroll-animated hero, categories, signatures, story, reviews |
| Products | `products.html` | Full menu with live search and category filters |
| About | `about.html` | Story, values, ingredients, kitchen, stats |
| Contact | `contact.html` | Order form, hours, map area, FAQ accordion |
| Not found | `404.html` | Styled error page |

```
bakery-template/
├── index.html  products.html  about.html  contact.html  404.html
├── robots.txt  sitemap.xml
├── docs/index.html          ← the full manual, open it in a browser
├── LICENSE.txt  CHANGELOG.md  IMAGE-CREDITS.md
└── assets/
    ├── js/
    │   ├── data.js          ← YOUR CONTENT LIVES HERE
    │   ├── app.js           rendering + page behaviour
    │   ├── visuals.js       icons, illustrations, image fallbacks
    │   ├── scroll.js        scroll animations
    │   └── theme.js         colour-theme switcher (optional, see below)
    ├── css/                 base · layout · components · animations · pages
    ├── images/              product photos, logo, favicon, share image
    └── hero-bg/             one background photo per page
```

---

## The things people ask first

**Change the business name, phone, address**
`assets/js/data.js`, section 1. It appears in the header, footer, contact page
and every order button automatically.

**Change prices or add a cake**
`assets/js/data.js`, section 4. Copy an existing block, change the values, save.
The home page, the products grid, the search, the filters and the order form all
pick it up on their own.

**Change the currency**
`assets/js/data.js`, section 1: `currencySymbol` and `locale`. Set `'£'` +
`'en-GB'`, `'€'` + `'de-DE'`, `'₹'` + `'en-IN'`, and so on.

**Change a photo**
Drop your image in `assets/images/` and name it after the item's id —
`red-velvet-cake.webp` becomes the Red Velvet Cake photo with no code change.
`.webp`, `.png`, `.jpg` and `.jpeg` all work. Anything without its own photo
falls back to its category photo, so a typo can never leave a broken image.

**Change the colours**
`assets/css/base.css`, right at the top. Every colour on the site comes from
that one block of variables.

**Switch the order button from WhatsApp to text or phone**
`assets/js/data.js`, section 1: set `orderChannel` to `'sms'` or `'phone'`.
The links, the wording and the icon all follow.

**Turn off the colour-theme switcher**
The floating swatch in the corner is a demo tool. Pick the theme you want, then
delete this one line from all five HTML files:
`<script src="assets/js/theme.js?v=1"></script>`

---

## Putting it online

Any static host works, free ones included. Drag the whole folder onto
[Netlify Drop](https://app.netlify.com/drop) and it's live in about ten seconds.
Vercel, Cloudflare Pages, GitHub Pages and ordinary cPanel hosting all work the
same way — upload the folder, done.

**Before you go live**, search the project for `TEMPLATE TODO`. Every spot that
still holds demo content is marked with that phrase, and `docs/index.html` has
the full go-live checklist.

---

## Browser support

Chrome, Edge, Firefox and Safari — current versions, desktop and mobile.
Animations respect `prefers-reduced-motion`. The layout is responsive from
320 px upward.

---

## Licence

See `LICENSE.txt`. Short version: use it on your own sites and your clients'
sites as much as you like; don't resell or redistribute the template itself.

Photos are covered separately — see `IMAGE-CREDITS.md`.
