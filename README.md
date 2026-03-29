# Navigator Portfolio

A navigator/cartographic-themed developer portfolio. Compass roses, bearing badges, topographic grids, ship's logbooks, and a working terminal overlay.

Built with Astro, Tailwind CSS, and GSAP. Fully configurable through a single config file.

## Quick Start

```sh
git clone <this-repo>
cd portfolio-website
npm install
```

### 1. Edit `src/config.ts`

This is the only file you need to touch. Every personal detail lives here:

```ts
export const siteConfig = {
  name: { first: 'Your', last: 'Name', full: 'Your Name', short: 'yourname' },
  role: 'Software Engineer',
  specialty: 'Backend / Systems',
  tagline: 'Your one-liner tagline.',
  careerStart: '2021-06-21',     // used to auto-calculate YOE
  location: { city: 'Tokyo', country: 'Japan', countryCode: 'JP', lat: 35.6762, lon: 139.6503 },
  siteUrl: 'https://yourdomain.com',
  social: {
    github:        { username: 'you', url: 'https://github.com/you' },
    linkedin:      { username: 'you', url: 'https://linkedin.com/in/you' },
    devto:         { username: 'you', url: 'https://dev.to/you' },
    buymeacoffee:  { username: 'you', url: 'https://buymeacoffee.com/you' },
  },
  email: 'you@example.com',
  web3formsKey: 'your-key-here',  // free at https://web3forms.com
  // ... about section, map places, terminal man page, etc.
};
```

### 2. Update content

- **Blog posts** — Add MDX files to `src/content/books/`
- **Books** — Add markdown files to `src/content/books/`
- **OG image** — Replace `public/og-image.png` (1200x630)
- **Favicon** — Replace `public/favicon.svg` and `public/favicon.ico`
- **Robots.txt** — Update `public/robots.txt` with your domain
- **Resume** — Add `public/resume.pdf`

### 3. Dev.to integration (optional)

Your dev.to articles are fetched at build time via the public API. Just set your `devto.username` in config.

For view counts, set the `DEVTO_API_KEY` environment variable (get one at dev.to/settings/extensions):

```sh
DEVTO_API_KEY=your_key npm run build
```

### 4. Run

```sh
npm run dev        # localhost:4321
npm run build      # static output in ./dist/
npm run preview    # preview the build
```

Requires Node >= 22.12.0.

## What's included

| Route | Description |
|:------|:------------|
| `/` | Hero with GitHub avatar, about, terrain map, contact form |
| `/blog` | Logbook — local MDX posts + dev.to articles |
| `/blog/[id]` | Individual blog post |
| `/blog/dev/[slug]` | Dev.to article (pre-rendered at build) |
| `/books` | Library — books being read/planned |

### Components

- **Header** — Collapsible sidebar (desktop) + bottom bar (mobile)
- **NavComOverlay** — Working terminal (type `help` for commands: `whoami`, `log`, `signal`, `neofetch`, `man`, `terrain`, etc.)
- **MapOverlay** — Leaflet.js interactive map with your travel waypoints
- **TerrainMap** — GitHub contribution heatmap styled as topographic terrain
- **Footer** — Social links, waypoint nav, buy-me-a-coffee

### Features

- Dark/light mode with full CSS variable theming
- GSAP scroll animations, magnetic buttons, 3D card tilt
- Lenis smooth scrolling
- SEO: canonical URLs, Open Graph, Twitter cards, JSON-LD structured data, sitemap
- `prefers-reduced-motion` support
- Responsive: sidebar on desktop, bottom bar on mobile
- Contact form via Web3Forms (free, no backend needed)

## Stack

- [Astro](https://astro.build) v6 (static site generation)
- [Tailwind CSS](https://tailwindcss.com) v4
- [GSAP](https://gsap.com) + ScrollTrigger
- [Lenis](https://lenis.darkroom.engineering/) smooth scroll
- Fonts: Syne (display), DM Sans (body), Space Mono (mono)

## Design System

All theming runs through CSS custom properties in `src/styles/global.css`:

```
--color-bg, --color-surface, --color-raised
--color-text, --color-dim, --color-faint
--color-edge, --color-accent, --color-warm, --color-tertiary
```

Light mode overrides live under `[data-theme="light"]`. To customize colors, edit those two blocks.

## License

MIT
