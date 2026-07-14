import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { siteConfig } from "@/lib/seo";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body-next",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-heading-next",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  generator: "Next.js",
  keywords: [...siteConfig.keywords],
  category: "technology",
  referrer: "origin-when-cross-origin",
  // Our own tel: link handles the phone — stop mobile browsers auto-linking it.
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: "/",
    languages: { [siteConfig.language]: "/" },
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    locale: siteConfig.locale,
    // og:image is supplied by app/opengraph-image.tsx (file convention).
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    // twitter:image is supplied by app/twitter-image.tsx (file convention).
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "default",
  },
  // Add real codes here once you register the site:
  // verification: { google: "…", other: { "msvalidate.01": "…" } },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f2f2f3",
  colorScheme: "light",
};

/** schema.org structured data — Person + WebSite + ProfilePage. */
function StructuredData() {
  const person = {
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/opengraph-image`,
    jobTitle: siteConfig.role,
    email: `mailto:${siteConfig.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.country,
    },
    sameAs: [siteConfig.socials.linkedin, siteConfig.socials.github],
    knowsAbout: [...siteConfig.knowsAbout],
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      person,
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        publisher: { "@id": `${siteConfig.url}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteConfig.url}/#profilepage`,
        url: siteConfig.url,
        name: siteConfig.title,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#person` },
        inLanguage: siteConfig.language,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable}`}
    >
      <body>
        {children}
        <StructuredData />
      </body>
    </html>
  );
}
