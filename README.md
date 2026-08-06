# Altmax Property Management — Website

A React (Vite) marketing site for Altmax Property Management, an NYC condo & co-op
property management company. Includes Home, About, Services, FAQ, and Contact pages,
a "Request a Proposal" form wired to [Resend](https://resend.com) for email delivery,
and on-page SEO (meta tags, sitemap, robots.txt, JSON-LD structured data).

## Stack

- **React 18 + React Router** — client-side routed SPA
- **Vite** — build tooling
- **Tailwind CSS** — styling, themed to the Altmax brand (`tailwind.config.js`)
- **Resend** — transactional email for the proposal-request form (`api/contact.js`,
  deployed as a Vercel serverless function)
- **lucide-react** — icons

## Brand

Colors, typography, and the logo lockup come from `Altmax Brand Style Sheet` (Aug 2026):

| Token | Value |
|---|---|
| Regal Blue | `#063779` |
| Light Sky Blue | `#80C7F8` |
| Dark Charcoal | `#262827` |
| White | `#FFFFFF` |
| Headline font | PT Serif |
| Body font | Inter |

The `ALTMAX` wordmark (`src/components/Logo.jsx`) is rebuilt in code using Poppins
(the closest widely-available match to the geometric sans in the style sheet) since
the source PDF only contained mockup renders, not a vector logo file. If Altmax has
an actual vector/SVG logo file, drop it in `public/` and swap `Logo.jsx` to render an
`<img>` instead.

## Getting started

```bash
npm install
cp .env.example .env   # then fill in the values below
npm run dev
```

The dev server runs the frontend only — the `/api/contact` endpoint is a Vercel
serverless function, so to test the contact form locally, use the Vercel CLI instead:

```bash
npm install -g vercel
vercel dev
```

## Environment variables (`.env`)

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | API key from your [Resend dashboard](https://resend.com/api-keys) |
| `CONTACT_TO_EMAIL` | Where proposal requests should be delivered, e.g. `info@altmaxny.com` |
| `CONTACT_FROM_EMAIL` | The "from" address, e.g. `Altmax Website <proposals@altmaxny.com>` — must be on a domain verified in Resend. Until a domain is verified, Resend only allows sending from `onboarding@resend.dev`. |
| `SITE_URL` | Canonical site URL, used for SEO metadata |

**Setting up Resend:**
1. Create a Resend account and verify your sending domain (e.g. `altmaxny.com`) under
   **Domains** — add the DNS records they give you.
2. Create an API key under **API Keys**.
3. Set the three `CONTACT_*` variables above in your deployment platform's
   environment variable settings (e.g. Vercel → Project → Settings → Environment
   Variables) — not just locally, since `.env` is gitignored and won't deploy.

## Deploying (Vercel)

The repo is already configured for Vercel via `vercel.json` — it pins the Vite
build (`npm run build` → `dist`), routes everything except `/api/*` through
`index.html` for React Router's client-side routing, and picks up
`api/contact.js` as a serverless function automatically. `package.json` also
pins `engines.node` to `20.x` so local and deployed builds use the same Node
version.

**Option A — Git integration (recommended):** push this repo to GitHub/GitLab/
Bitbucket, then in the Vercel dashboard choose **Add New → Project** and
import it. Vercel will detect the Vite framework from `vercel.json` and deploy
on every push automatically.

**Option B — CLI:**
```bash
npm install -g vercel
vercel login   # opens a browser to authenticate
vercel         # deploys a preview
vercel --prod  # promotes to production
```

Either way, add the four environment variables from the table above under
**Project → Settings → Environment Variables** in the Vercel dashboard (do
this for both Preview and Production environments) — `.env` is gitignored and
never gets deployed, so these have to be set there directly. Redeploy after
adding them.

## Content & assets

- **Copy**: All page content is rewritten (not copied from competitor sites) and
  lives in `src/data/` (`services.js`, `faq.js`, `testimonials.js`) and directly in
  the page components (`src/pages/`).
- **Google rating badge**: reads from `src/data/googleReviews.js`. Update the
  rating/review count/link once the Google Business Profile is live.
- **Property photos**: the "old & new buildings" galleries on Home/About currently
  render stylized illustrations, not real photos — see
  `src/assets/properties/README.md` for how to swap in real photography.
- **SEO**: page titles/descriptions are set per-page via `src/components/SEO.jsx`;
  sitewide JSON-LD (`RealEstateAgent`) is in `index.html`; FAQ page also emits
  `FAQPage` JSON-LD. Update `public/sitemap.xml` and the canonical URLs if the final
  domain differs from `altmaxny.com`.

## Project structure

```
api/contact.js          Resend email-sending serverless function
public/                  Static files (favicon, robots.txt, sitemap.xml)
src/
  components/            Shared UI (Header, Footer, forms, cards, SEO helpers)
  data/                   Content: services, FAQ, testimonials, properties, reviews
  pages/                  Route-level pages (Home, About, Services, FAQ, Contact, 404)
  App.jsx, main.jsx       Routing & app entry
  index.css               Tailwind + global styles
```
