import { Fragment } from "react";
import Hero from "@/Components/Hero";
import styles from './index.module.css'
import Intro from "@/Components/Intro";
import PortfolioSection from "@/Components/PortfolioSection";
import Footer from '../Components/Footer';
const Portfolio=()=>{
  return(
    <div className={styles.layout}>
      <div className={styles.container}>
        <Hero></Hero>
      </div>
      <Intro></Intro>
      <div className={styles.horizontal_line}></div>
      <PortfolioSection></PortfolioSection>
      <Footer></Footer>
    </div>
  );
}
export default Portfolio