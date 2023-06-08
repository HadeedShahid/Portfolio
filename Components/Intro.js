import styles from './Intro.module.css'

const Intro=()=>{
    return(
        <div className={styles.outer_cont}>
            <img className={`${styles.animate_left} ${styles.back_img}`} src='/icons/greetimg.png'></img>
            <div className={`bck_pl ${styles.container}`}>
                <div className={styles.heading}>Hi, I’m Hadeed. Great to meet you. </div>
                <div className={styles.desc}>Built and deployed multiple web applications for business and consumer use. With over a year of experience in design and development, I'm quietly confident, naturally curious, and continuously working on improving, one pixel at a time!</div>
                <div className={styles.skill_card}>
                    <div className={styles.left}>
                        <img className={styles.skill_img} src='/icons/designer.svg'></img>
                        <div className={styles.skill_title}>Designer</div>
                        <div className={styles.skill_chars}>Simple, Clean, Minimalist</div>
                        <div className={styles.services}>
                            <span>Design Services:</span>
                            <div>UX Design</div>
                            <div>Wireframes</div>
                            <div>Prototyping</div>
                            <div>Mockups</div>
                        </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.right}>
                        <img className={styles.skill_img} src='/icons/developer.svg'></img>
                        <div className={styles.skill_title}>Frontend Developer</div>
                        <div className={styles.skill_chars}>Interactive, Robust, Performant</div>
                        <div className={styles.services}>
                            <span>Dev Services:</span>
                            <div>Ed-Tech</div>
                            <div>E-commerce</div>
                            <div>Landing Funnels</div>
                            <div>Social Media</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
export default Intro