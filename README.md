# Alpha Fusion Ltd — Next.js site

Next.js 16 (App Router, Cache Components) · React 19 · Tailwind CSS 4 · TypeScript. No extra runtime dependencies.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Pages
`/` Home · `/services` · `/solutions` · `/approach` · `/about` · `/contact`

## Where to edit
| What | File |
|---|---|
| Copy, services, contact details, nav | `lib/site.ts` |
| Colors & tokens (dark theme) | `app/globals.css` (`:root`) |
| Glow, glass, spotlight & animation utilities | `app/globals.css` |
| Bento services cards / hover spotlight | `components/capabilities.tsx`, `components/spotlight-card.tsx` |
| Fonts (Space Grotesk headings, Sora body) | `app/fonts/` + `app/layout.tsx` (self-hosted) |
| Images | `public/images/` (`hero-knot.jpg`, `team.jpg`) |
| Enquiry form | `components/contact-form.tsx` (opens a pre-filled email via `mailto:`) |

`/contact?service=Mobile+App+Development` pre-selects the service in the form.
# alphafusion
# alphafusion
