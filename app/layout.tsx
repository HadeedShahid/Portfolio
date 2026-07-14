import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
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
  title: "Hadeed Shahid — Software Engineer, Front End",
  description:
    "Portfolio of Hadeed Shahid, Software Engineer — Front End. Based in Lahore, PK.",
  metadataBase: new URL("https://hadeed-portfolio.vercel.app"),
  openGraph: {
    title: "Hadeed Shahid — Software Engineer, Front End",
    description:
      "Portfolio of Hadeed Shahid, Software Engineer — Front End. Based in Lahore, PK.",
    url: "https://hadeed-portfolio.vercel.app",
    siteName: "Hadeed Shahid",
    type: "website",
  },
};

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
      <body>{children}</body>
    </html>
  );
}
