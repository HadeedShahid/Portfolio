// Single source of truth for site-wide SEO. Override the URL per environment
// with NEXT_PUBLIC_SITE_URL (e.g. a custom domain) — everything else derives
// from here so metadata, robots, sitemap, manifest, and JSON-LD stay in sync.

const rawUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hadeed-portfolio.vercel.app";

export const siteConfig = {
  url: rawUrl.replace(/\/$/, ""),
  name: "Hadeed Shahid",
  role: "Front-End Software Engineer",
  title: "Hadeed Shahid — Front-End Software Engineer for Hire in Pakistan",
  titleTemplate: "%s — Hadeed Shahid",
  description:
    "Front-end software engineer in Lahore, Pakistan, available for hire. I build fast, accessible web apps with React, Next.js, and TypeScript for remote and Pakistan-based teams — work spanning Hatla2ee, OLX, Bayut, and Dubizzle.",
  availableForHire: true,
  locale: "en_US",
  language: "en-US",
  email: "hadeed.shahid08@gmail.com",
  location: {
    city: "Lahore",
    region: "Punjab",
    regionCode: "PK-PB",
    country: "Pakistan",
    countryCode: "PK",
    latitude: 31.5497,
    longitude: 74.3436,
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/hadeedshahid",
    github: "https://github.com/HadeedShahid",
    x: "https://x.com/hadeedshahid",
  },
  keywords: [
    "Hadeed Shahid",
    "Hadeed Shahid portfolio",
    "front-end software engineer",
    "front-end engineer for hire",
    "front-end developer for hire",
    "hire front-end developer Pakistan",
    "hire React developer Pakistan",
    "hire Next.js developer Pakistan",
    "software engineer for hire Pakistan",
    "front-end developer Lahore",
    "software engineer Pakistan",
    "remote front-end developer Pakistan",
    "freelance front-end developer Pakistan",
    "React developer Pakistan",
    "Next.js developer",
    "TypeScript developer",
    "UI engineer",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Front-End Development",
    "Web Performance",
    "Web Accessibility",
    "User Interface Engineering",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
