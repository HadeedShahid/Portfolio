import styles from './Footer.module.css';
const Footer=()=>{
    return (
        <div className={`bck_pl ${styles.container}`}>
            <img src='/icons/left.png' className={`${styles.left_img}`}></img>
            <img src='/icons/right.png' className={`${styles.animate} ${styles.right_img}`}></img>
                <div className={styles.logo}>Hadeed_.</div>
                <div className={styles.sent}>One Pixel at a Time.</div>
                <div className={styles.icons}>
                <a href="mailto:hadeed.shahid08@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <img className={`${styles.email}`} src='/icons/gmail_white.svg' alt="Email"></img>
                </a>
                <a href="https://www.linkedin.com/in/hadeedshahid" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <img className={`${styles.linkedin}`} src='/icons/linkedin_white.svg' alt="LinkedIn"></img>
                </a>
                <a href="https://github.com/HadeedShahid" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <img className={`${styles.github}`} src='/icons/github_white.svg' alt="GitHub"></img>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <img className={`${styles.twitter}`} src='/icons/twitter_white.svg' alt="Twitter"></img>
                </a>
            </div>
        </div>
    );
}
export default Footer;