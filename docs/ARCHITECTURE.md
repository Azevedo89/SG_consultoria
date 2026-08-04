# Architecture

This project is organized to separate content, components, sections, and styles. The home page is assembled by composition, avoiding concentrating logic and layout in a single file.

## Overview

```txt
src/
├── App.jsx
├── main.jsx
├── components/
│   ├── cards/
│   ├── forms/
│   ├── layout/
│   └── ui/
├── data/
│   └── siteData.js
├── sections/
└── styles/
```

## App Entry

- `src/main.jsx`: mounts the React application.
- `src/App.jsx`: controls language, dynamic metadata, scroll reveal, preloader, header, sections, and footer.

The selected language is persisted in `window.localStorage` under the `language` key. On page reload, or when navigating to one of the static legal pages (`/politica-de-privacidade.html`, `/privacy-policy.html`, etc.) and back, the preference is retained.

Current section order:

1. Hero
2. Method
3. Approach
4. Services
5. Executive experience
6. Contact
7. Footer

## Content

The central content file is:

```txt
src/data/siteData.js
```

It includes:

- `siteMeta`: titles, descriptions, and locale.
- `anchorIds`: translated anchors per language (`home`, `method`, `approach`, `services`, `about`, `contact`).
- `navigation`: navbar items.
- `contacts`: phone, email, and form endpoint (FormSubmit).
- `socialLinks`: Instagram, LinkedIn, and Facebook.
- `offices`: addresses for Portugal, Brazil, and Cape Verde, each with a `mapEmbed` for the Google Maps iframe.
- `copy`: PT/EN website copy, including the `approach` block with `kicker`, `title`, `lead`, `quote`, and `quoteCaption`.
- `heroFacts`: hero metrics.
- `processSteps`: method steps.
- `approachPillars`: pillars of the Approach section (3 cards with `number`, `eyebrow`, `title`, `text`).
- `services`: service areas.
- `trustMarkers`: trust markers.
- `contactSubjects`: form subject options.

Rule of thumb: if it's text, a link, a contact, an address, or a list item, start in `siteData.js`.

## Components

### Layout

```txt
src/components/layout/
```

- `Header.jsx`: navbar, language switch, active state on scroll, and mobile menu.
- `Footer.jsx`: footer, addresses, contacts, legal links, and social links.
- `Brand.jsx`: logo and brand text.

### UI

```txt
src/components/ui/
```

- `Button.jsx`: primary and ghost buttons.
- `Preloader.jsx`: initial loading screen.
- `SectionHeading.jsx`: section headings.
- `SocialIcon.jsx`: social media icons.

### Cards

```txt
src/components/cards/
```

- `ProcessCard.jsx`: method step cards.
- `ServiceCard.jsx`: service area cards.

### Form

```txt
src/components/forms/ContactForm.jsx
```

Responsible for:

- field state;
- required validation via HTML;
- AJAX submission to FormSubmit;
- fallback with `action` and `method`;
- success/error messages.

## Sections

```txt
src/sections/
```

- `Hero.jsx`
- `Method.jsx`
- `Approach.jsx`
- `Services.jsx`
- `About.jsx`
- `Contact.jsx`

Each section receives `language` and pulls its copy from `siteData.js`.

The Approach section is composed of:

- a heading with kicker and title on a single line (`white-space: nowrap` on `.approach .section-heading h2`);
- a lead paragraph;
- a grid of 3 pillars with staggered reveal (90ms / 180ms);
- a highlighted quote with a decorative serif quotation mark.

The Contact section contains the form and, in a full-width block below `.contact__grid`, three `.office-card` elements with address and Google Maps iframe. The iframe is absolutely positioned inside a container with `overflow: hidden` for consistent clipping.

## Styles

```txt
src/styles/
├── base.css
├── layout.css
├── components.css
└── sections.css
```

- `base.css`: tokens, reset, global styles, and base containers.
- `layout.css`: header, footer, navigation, and global structure.
- `components.css`: buttons, cards, form, preloader, icons, and reusable components.
- `sections.css`: hero and section-specific styles.

## Responsiveness

Main breakpoints:

- `380px`: very small phones.
- `760px`: mobile.
- `900px`: intermediate tablets.
- `1020px`: switches to mobile/tablet navigation.
- `1440px`: large desktop.
- `1800px`: very wide monitors.

The site was tuned to avoid horizontal scroll, keep the hero compact on mobile, and preserve essential content on small screens as well.

## SEO and Public Files

```txt
public/
```

- `robots.txt`
- `sitemap.xml`
- `site.webmanifest`
- `CNAME`
- PT/EN legal pages
- images in `public/assets` (`sg-logo.png`, `sg-favicon.png`, `sg-about.png`)

`index.html` includes:

- base metadata;
- Open Graph;
- Twitter Cards;
- JSON-LD with contacts, social links, and addresses.

## Legal Pages

The legal pages are static HTML in `public/`, served directly by GitHub Pages:

- `politica-de-privacidade.html`
- `privacy-policy.html`
- `termos-de-servico.html`
- `terms-of-service.html`

These pages don't go through React Router, since the site is a single page with no dedicated router. `Footer.jsx` chooses which file to point to based on the active language (`/privacy-policy.html` in EN, `/politica-de-privacidade.html` in PT, etc.). The language preference is preserved via `localStorage`, so returning to the home page from these pages keeps the selected language.

Both versions (PT and EN) reference FormSubmit as the technical form provider and Google Maps as the embedded maps service, for compliance with transparency rules.

## Office Maps

Each `office` in `siteData.js` has a `mapEmbed` field whose value is injected into
`https://www.google.com/maps?<mapEmbed>&output=embed`. It supports:

- `cid=<numeric>`: a registered Google Maps business listing. Used for Lisbon to display the "Sérgio Gouveia – Consultoria e Assessoria, S.A." card.
- `q=<address>` or `q=<lat,lng>`: an address or coordinate query. Used for Brazil and Cape Verde.

The iframe uses `loading="lazy"` and Google's public CORS. No API key, billing, or Google Cloud Console registration is required.

The CSS applies a `grayscale + invert` filter to harmonize the map with the site's dark theme, and clips the iframe via `overflow: hidden` on the container, with `position: absolute` on the iframe (intentionally taller than the visible viewport).

## Deployment

The workflow is located at:

```txt
.github/workflows/deploy.yml
```

Flow:

1. checkout the repository;
2. install dependencies;
3. build with Vite;
4. publish the `dist` folder to GitHub Pages.

The custom domain is controlled by:

```txt
public/CNAME
```

## Pre-publish Checklist

- Run `npm run build`.
- Confirm the first FormSubmit submission was validated via email (the `Activate` button).
- Check `public/CNAME`.
- Confirm `public/sitemap.xml`.
- Review legal copy (PT and EN) before final publication.
- Confirm the 3 office maps point to the correct locations.
- Test mobile, tablet, and desktop, and the language switch with navigation to legal pages.
