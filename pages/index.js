import { Fragment } from "react";
import Hero from "@/Components/Hero";
import styles from "./index.module.css";
import Intro from "@/Components/Intro";
import PortfolioSection from "@/Components/PortfolioSection";
import Footer from "../Components/Footer";
import Head from "next/head";
const Portfolio = (props) => {
  return (
    <>
      <Head>
        <link rel="canonical" href={props.url} />
      </Head>
      <div className={styles.layout}>
        <div className={styles.container}>
          <Hero></Hero>
        </div>
        <Intro></Intro>
        <div className={styles.horizontal_line}></div>
        <PortfolioSection></PortfolioSection>
        <Footer></Footer>
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  return {
    props: {
      url: ctx.resolvedUrl,
    },
  };
}
export default Portfolio;
