# Sumryx landing page

This is the marketing site for **life.sumryx.com**.

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
5. Set up the D1 database for lead capture (see below) before or after the
   first deploy — the Function returns a 500 until the `DB` binding exists,
   but the rest of the site works fine regardless.

## Lead capture (Cloudflare Pages Function + D1)

The launch-interest and newsletter forms `POST` JSON to `/api/leads`:

```json
{
  "email": "finance@example.com",
  "intent": "launch-interest",
  "source": "primary-cta",
  "submittedAt": "2026-06-13T12:00:00.000Z"
}
```

That endpoint is handled by `functions/api/leads.ts`, a Cloudflare Pages
Function that validates the payload and writes to a D1 database (binding
name `DB`, table `leads`, schema in `migrations/0001_create_leads.sql`).
Security/abuse measures already in the Function:

- Strict server-side validation of `email` (regex + length) and `intent`
  (must be `launch-interest` or `newsletter`) — the client's `submittedAt`
  is never trusted, the server's own clock is used instead.
- Per-IP rate limiting (max 8 submissions per 10 minutes, via `CF-Connecting-IP`).
- `UNIQUE (email, intent)` in the schema, so re-submitting the same email
  just refreshes the timestamp instead of creating duplicate rows.
- Only `POST` is accepted; every other method gets `405`.

**One-time setup:**

1. `npx wrangler d1 create sumryx-leads` — copy the `database_id` it prints
   into `wrangler.toml`.
2. Apply the schema:
   ```bash
   npx wrangler d1 execute sumryx-leads --remote --file=./migrations/0001_create_leads.sql
   ```
3. In the Cloudflare Pages project dashboard: **Settings → Functions → D1
   database bindings** → add a binding named `DB` pointing at `sumryx-leads`.
   (`wrangler.toml`'s `[[d1_databases]]` block covers `wrangler pages`-based
   local dev/deploys; the dashboard binding is what the Git-integration
   deploy actually uses in production.)
4. Redeploy (or trigger a new build) so the Function picks up the binding.

**Local testing:** `npm run build && npx wrangler pages dev dist` serves the
built site with Functions active against a local D1 (add `--local` to
`wrangler d1 execute` for the same schema against that local copy).

**Viewing leads:**
```bash
npx wrangler d1 execute sumryx-leads --remote --command="SELECT * FROM leads ORDER BY created_at DESC LIMIT 50"
```

**Not done yet, worth adding before real traffic:** a CAPTCHA
(Cloudflare Turnstile) on the forms for stronger bot resistance than the
rate limit alone provides.

**Alternative:** to point the forms at an external CRM/ESP instead of D1,
set `VITE_LEAD_CAPTURE_ENDPOINT` in `.env` (copy from `.env.example`) to
that service's endpoint — this bypasses `/api/leads` entirely.

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
