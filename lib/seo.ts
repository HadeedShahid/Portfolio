// Single source of truth for site-wide SEO. Override the URL per environment
// with NEXT_PUBLIC_SITE_URL (e.g. a custom domain) — everything else derives
// from here so metadata, robots, sitemap, manifest, and JSON-LD stay in sync.

const rawUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hadeed-portfolio.vercel.app";

export const siteConfig = {
  url: rawUrl.replace(/\/$/, ""),
  name: "Hadeed Shahid",
  role: "Front-End Software Engineer",
  title: "Hadeed Shahid — Front-End Software Engineer",
  titleTemplate: "%s — Hadeed Shahid",
  description:
    "Front-end software engineer in Lahore, Pakistan, building fast, accessible web interfaces with React, Next.js, and TypeScript. Selected work: Hatla2ee, OLX, Bayut, and Dubizzle.",
  locale: "en_US",
  language: "en-US",
  email: "hadeed.shahid08@gmail.com",
  location: { city: "Lahore", region: "Punjab", country: "PK" },
  socials: {
    linkedin: "https://www.linkedin.com/in/hadeedshahid",
    github: "https://github.com/HadeedShahid",
  },
  keywords: [
    "Hadeed Shahid",
    "Hadeed Shahid portfolio",
    "front-end software engineer",
    "front-end developer",
    "frontend engineer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "JavaScript engineer",
    "UI engineer",
    "web developer",
    "frontend developer Lahore",
    "software engineer Pakistan",
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
