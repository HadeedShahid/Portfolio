import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Design & Development Services | Hadeed Shahid</title>
        <meta
          name="description"
          content="Providing top-tier design & development solutions. Explore my portfolio for websites tailored to meet your business needs."
        />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
