import { Fragment } from 'react';
import styles from './Hero.module.css'
import NavBar from "@/Components/NavBar";
import {useHover} from '@floating-ui/react';
const Hero=(props)=>{
    return(
        <div className={styles.hero}>
            <img className={styles.backimg} src='/icons/hero_back.svg'></img>
            <NavBar></NavBar>
            <div className={styles.hero_text}>
                <div className={styles.hero_title}>Designer<span className='cy'>,</span> Frontend Developer</div>
                <div className={styles.hero_desc}>Transforming Ideas into Seamless Realities : One Pixel at a Time.</div>
                <img className={styles.myimg} src='/icons/avatar.svg'></img>
                <div className={`${styles.med} ${styles.animate} ${styles.figma}`}>
                    <img src='/icons/figma.svg'></img>
                </div>
                <div className={`${styles.med} ${styles.animate_up} ${styles.tail}`}>
                    <img src='/icons/tail.svg'></img>
                </div>
                <div className={`${styles.med} ${styles.float_bot_left} ${styles.react}`}>
                    <img src='/icons/react.svg'></img>
                </div>
                <div className={`${styles.med} ${styles.animate} ${styles.graph}`}>
                    <img src='/icons/graph.svg'></img>
                </div>
                <div className={`${styles.med} ${styles.float_bot_right} ${styles.mongo}`}>
                    <img src='/icons/mongo.svg'></img>
                </div>
                <div className={`${styles.med} ${styles.animate_up} ${styles.next}`}>
                    <img src='/icons/next.svg'></img>
                </div>
            </div>
           
            
        </div>
        
    );
}
export default Hero;