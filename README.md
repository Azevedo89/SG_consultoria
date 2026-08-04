# SG Consultoria e Assessoria

Institutional website for SG Consultoria e Assessoria, built with React and Vite, and set up for deployment to GitHub Pages.

## Tech Stack

- React 19
- Vite 7
- CSS organized by responsibility (base, layout, components, sections)
- GitHub Pages (via GitHub Actions)
- FormSubmit for contact form submission
- Static legal pages in PT/EN

## Features

- Bilingual website: Portuguese and English, with the selected language persisted in `localStorage`.
- Anchor-based navigation with active state on scroll, including the Approach section.
- Mobile hamburger menu.
- Initial preloader.
- Scroll-triggered entrance animations, with staggered reveal on cards.
- Approach section with pillars and a highlighted quote.
- Contact form with all required fields, including phone number.
- Form submissions sent to `geral@sgconsultoria.pt` via FormSubmit.
- Embedded Google Maps per office (Portugal, Brazil, Cape Verde) with no API key required.
- Footer with contacts, addresses, social links, and legal policy links.
- Baseline SEO: Open Graph, Twitter Cards, web manifest, `robots.txt`, `sitemap.xml`, and JSON-LD.

## Project Structure

```txt
.
├── .github/workflows/deploy.yml
├── docs/
│   └── ARCHITECTURE.md
├── public/
│   ├── assets/
│   │   ├── sg-about.png
│   │   ├── sg-favicon.png
│   │   └── sg-logo.png
│   ├── CNAME
│   ├── politica-de-privacidade.html
│   ├── privacy-policy.html
│   ├── robots.txt
│   ├── site.webmanifest
│   ├── sitemap.xml
│   ├── termos-de-servico.html
│   └── terms-of-service.html
├── src/
│   ├── components/
│   │   ├── cards/
│   │   ├── forms/
│   │   ├── layout/
│   │   └── ui/
│   ├── data/
│   │   └── siteData.js
│   ├── sections/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Where to Edit Content

Most of the site's content lives in `src/data/siteData.js`.

Edit there:

- PT/EN copy;
- navigation items;
- metadata;
- contact details;
- social media links;
- office addresses;
- service areas;
- form subjects;
- footer text.

Static legal pages live in:

- `public/politica-de-privacidade.html`
- `public/privacy-policy.html`
- `public/termos-de-servico.html`
- `public/terms-of-service.html`

## Contact Form

The form uses FormSubmit:

```js
formEndpoint: "https://formsubmit.co/ajax/geral@sgconsultoria.pt"
```

All visible fields are required:

- Name
- Email
- Phone (with a `pattern` to prevent invalid input)
- Subject
- Message

Note: on the very first submission, FormSubmit sends an activation email to `geral@sgconsultoria.pt`. After clicking the `Activate` button in that email, all subsequent submissions are delivered directly with no further validation step.

## Office Maps

Each office in [`siteData.js`](src/data/siteData.js) has a `mapEmbed` field containing the parameters injected into the iframe URL `https://www.google.com/maps?<params>&output=embed`.

Supported formats:

- `cid=<numeric>`: points to a registered Google Maps business listing (shows name, photos, "Open in Maps" button). Used for the Lisbon office.
- `q=<address>` or `q=<lat,lng>`: address or coordinate query.

No API key is required. This works on any static hosting, including GitHub Pages.

## Deployment

Deployment is configured in `.github/workflows/deploy.yml`.

The custom domain is defined in:

```txt
public/CNAME
```

For the `sgconsultoria.pt` domain, Vite's `base` should remain `/`.

If the project is published without a custom domain (e.g. `username.github.io/repository`), set:

```bash
VITE_BASE_PATH=/repository/
```

before building.

## Architecture and Maintenance

See `docs/ARCHITECTURE.md` for details on the app structure, component responsibilities, styling layers, responsive breakpoints, and a pre-publish checklist.
