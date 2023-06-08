import styles from './NavBar.module.css'
import Logo from './Logo';
const NavBar=(props)=>{
    return (
        <div className={styles.cont}>
            <Logo></Logo>
            {/* <div className={styles.navlinks}>
                <span>Home</span>
                <span 
                
                onClick = {(e)=>{
                    e.preventDefault();
                    const section = document.querySelector( '#portfolio' );
                    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
                 ;}}
                 
                 >Portfolio</span>
                <span>Services</span>
            </div> */}
            <div className={styles.icons}>
                <a href="mailto:hadeed.shahid08@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <img className={`${styles.email}`} src='/icons/email.svg' alt="Email"></img>
                </a>
                <a href="https://www.linkedin.com/in/hadeedshahid" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <img className={`${styles.linkedin}`} src='/icons/linkedin.svg' alt="LinkedIn"></img>
                </a>
                <a href="https://github.com/HadeedShahid" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <img className={`${styles.github}`} src='/icons/github.svg' alt="GitHub"></img>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <img className={`${styles.twitter}`} src='/icons/twitter.svg' alt="Twitter"></img>
                </a>
            </div>
        </div>
    );
}
export default NavBar