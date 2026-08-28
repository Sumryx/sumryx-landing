# Sumryx landing page

This is the marketing site for **life.sumryx.com**.

> **First checkout on this branch:** `package.json` now depends on
> `react-router-dom`, but `package-lock.json` wasn't updated in this push
> (it's a large generated file the tooling used for this change couldn't
> safely edit). Run `npm install` once locally to refresh the lockfile and
> commit it — otherwise `npm ci` will fail with an out-of-sync lockfile
> error. `npm install`/`npm run dev`/`npm run build` all work fine in the
> meantime since they don't require the lockfile to be in sync.

## Pages

The site is a client-side routed React app (`react-router-dom`), not a single
long scroll. Routes live in `src/App.tsx`, shared chrome (nav, footer, theme)
lives in `src/layout/SiteLayout.tsx`, and each route's content is in
`src/pages/`:

- `/` — Home (`HomePage.tsx`) — the full marketing scroll: hero, features, AI
  copilot, consolidation, accounting firms, security, CTA.
- `/product` — Product (`ProductPage.tsx`) — scaffolded with six pillar cards;
  expand each into its own detailed section as the product story develops.
- `/pricing` — Pricing (`PricingPage.tsx`) — the three plan brackets
  (Starter / Growth / Firms & Enterprise) with their feature sets already
  filled in. Prices are placeholders (`TBD`) — fill in real numbers in the
  `tiers` array once pricing is finalised.
- `/about` — About (`AboutPage.tsx`) — scaffolded, needs company content.
- `/resources` — Resources (`ResourcesPage.tsx`) — scaffolded, needs blog/docs
  content.
- `*` — 404 (`NotFoundPage.tsx`).

Add a new page by creating a component in `src/pages/`, adding a `<Route>` in
`src/App.tsx`, and linking to it from `src/components/Navigation.tsx` and/or
`src/components/Footer.tsx`.

The "Join early access" / "Register interest" buttons across the site link to
`/#waitlist`, which lands on the lead-capture form in the `CTA` section on the
Home page (`ScrollManager` in `src/layout/ScrollManager.tsx` handles smooth
scrolling to hash targets on route change, including from another page).

## Deploying to Cloudflare Pages

This is a static Vite build, so it deploys to Cloudflare Pages like any other
static site:

1. In the Cloudflare dashboard, create a Pages project connected to this
   GitHub repo.
2. Build command: `npm run build`. Build output directory: `dist`.
3. `public/_redirects` (`/* /index.html 200`) is already in place so
   client-side routes (e.g. `/pricing`) resolve correctly instead of 404ing
   on a hard refresh.
4. Add `life.sumryx.com` as a custom domain on the Pages project once you're
   ready to point the subdomain at it.
5. If you want the lead-capture forms to work without an external CRM
   endpoint, either set `VITE_LEAD_CAPTURE_ENDPOINT` to a real endpoint (see
   below) or add a Cloudflare Pages Function at `functions/api/leads.ts` to
   handle `/api/leads` directly — not set up yet, since the backend approach
   hasn't been decided.

## Lead capture

The launch-interest and newsletter forms send JSON `POST` requests to the endpoint
configured in `.env`:

```bash
VITE_LEAD_CAPTURE_ENDPOINT=https://example.com/api/leads
```

Each request contains:

```json
{
  "email": "finance@example.com",
  "intent": "launch-interest",
  "source": "primary-cta",
  "submittedAt": "2026-06-13T12:00:00.000Z"
}
```

Copy `.env.example` to `.env` and connect the endpoint to your CRM, mailing-list
provider, or serverless function. Without this variable the forms submit to
`/api/leads`, ready for a same-origin API route.

## Development

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
