// ═══════════════════════════════════════════════════════════════════
// SITE CONFIG — Edit this file to make this portfolio your own.
// Every personal detail is centralized here. No need to touch
// component files unless you want to change the layout/design.
// ═══════════════════════════════════════════════════════════════════

export const siteConfig = {
  // ── Identity ──
  name: {
    first: 'Adheeban',
    last: 'Manoharan',
    full: 'Adheeban Manoharan',
    /** Shown in sidebar/footer brand. Typically first name, lowercase. */
    short: 'adheeban',
  },

  // ── Professional ──
  role: 'Software Engineer',
  /** Specialty shown in the "Bearing" card and NavCom. */
  specialty: 'Backend / Systems',
  /** One-liner used as the meta description fallback. */
  description: 'Software Engineer. History nerd. Traveller.',
  /** Hero tagline — the sentence below your name. */
  tagline: "Software engineer who builds what works, then goes looking for what lasted.",
  /** Career start date — used to calculate YOE dynamically. */
  careerStart: '2021-06-21',

  // ── Location ──
  location: {
    city: 'Chennai',
    country: 'India',
    /** ISO 3166-1 alpha-2 */
    countryCode: 'IN',
    lat: 13.0827,
    lon: 80.2707,
  },

  // ── Site ──
  /** Production URL (no trailing slash). Used for canonical URLs, OG tags, sitemap. */
  siteUrl: 'https://adheeban.com',

  // ── Social & Contact ──
  social: {
    github: {
      username: '0xcaffeinated',
      url: 'https://github.com/0xcaffeinated',
    },
    linkedin: {
      username: 'adheeban-manoharan',
      url: 'https://linkedin.com/in/adheeban-manoharan',
    },
    devto: {
      username: 'iamadhee',
      url: 'https://dev.to/iamadhee',
    },
    buymeacoffee: {
      username: 'adheebanm',
      url: 'https://buymeacoffee.com/adheebanm',
    },
  },
  email: 'caeser.alfred@gmail.com',

  // ── Contact Form ──
  /** Web3Forms access key. Get yours free at https://web3forms.com */
  web3formsKey: '39264fb2-c9ea-4952-9feb-1fa159b4d28d',

  // ── About / Personality ──
  about: {
    /** The heading in the About section. Supports HTML. */
    headline: "I build the invisible machinery — databases that don't page you at 3 AM, APIs that scale without drama",
    paragraphs: [
      "Five years of backend systems, distributed architectures, and the quiet plumbing that keeps the internet running. I care about code that's honest — does what it says, nothing more, nothing less.",
      "Outside the terminal, I'm probably reading about Norse gods, wandering through a city I can't pronounce, or on my third coffee before noon.",
      "History teaches patterns. Travel teaches perspective. Both make you build better.",
    ],
    /** Tags shown in the "Shore Leave" card. */
    interests: ['History', 'Travel', 'Books', 'Coffee'],
    /** Currently reading — shown in the about card. */
    reading: 'The Anarchy — Dalrymple',
  },

  // ── Map Overlay — Places you've been ──
  /** First entry with `home: true` is your base marker. */
  places: [
    { name: 'Chennai',       lat: 13.08, lon: 80.27,  home: true },
    { name: 'Kolkata',       lat: 22.57, lon: 88.36,  home: false },
    { name: 'Bangkok',       lat: 13.76, lon: 100.50, home: false },
    { name: 'Phuket',        lat: 7.88,  lon: 98.39,  home: false },
    { name: 'Kuala Lumpur',  lat: 3.14,  lon: 101.69, home: false },
    { name: 'Changi',        lat: 1.36,  lon: 103.99, home: false },
    { name: 'Hanoi',         lat: 21.03, lon: 105.85, home: false },
    { name: 'Da Nang',       lat: 16.05, lon: 108.22, home: false },
  ],

  // ── NavCom Terminal — man page flavor text ──
  man: {
    /** One-line NAME description in `man` command. */
    name: 'software engineer, history nerd, traveller',
    /** Synopsis flags shown after your name. */
    flags: '[--coffee] [--backend] [--history]',
    /** 2-3 lines of DESCRIPTION. Each string is one line. */
    description: [
      "Builds invisible machinery. Databases that don't page",
      "you at 3 AM. APIs that scale without drama.",
    ],
    /** Off-duty line in DESCRIPTION. */
    offDuty: [
      "When not writing code, probably reading about",
      "Norse gods or wandering through a city he can't",
      "pronounce.",
    ],
  },
} as const;

// ── Derived helpers (don't edit) ──

const { lat, lon } = siteConfig.location;
const latDir = lat >= 0 ? 'N' : 'S';
const lonDir = lon >= 0 ? 'E' : 'W';

/** e.g. "13.0827°N" */
export const coordsFull = {
  lat: `${Math.abs(lat)}°${latDir}`,
  lon: `${Math.abs(lon)}°${lonDir}`,
};

/** e.g. "13.08°N 80.27°E" */
export const coordsShort = `${Math.abs(lat).toFixed(2)}°${latDir} ${Math.abs(lon).toFixed(2)}°${lonDir}`;

/** GitHub avatar URL */
export const avatarUrl = `https://github.com/${siteConfig.social.github.username}.png`;

/** GitHub contributions API URL */
export const contributionsUrl = `https://github-contributions-api.jogruber.de/v4/${siteConfig.social.github.username}?y=last`;

/** Dev.to public articles API URL */
export const devtoApiUrl = `https://dev.to/api/articles?username=${siteConfig.social.devto.username}&per_page=100`;
