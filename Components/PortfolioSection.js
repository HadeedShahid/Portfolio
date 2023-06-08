import { Fragment, useState } from "react";
import styles from './PortfolioSection.module.css'
import { useTrail, animated } from '@react-spring/web';
import { useRef } from "react";
const PortfolioSection=(props)=>{
    const initialProjects = [
        {
          id: 1,
          image: '/icons/iGiftit.png',
          title: 'iGiftit.',
          desc: "An Ai based recommendation system to help users decide and buy gifts for their lived ones",
          type:"Design + Development",
          date: "March 19, 2023",
          url:"https://igiftit.vercel.app/",
        },
        {
            id: 2,
            image: '/icons/estate.png',
            title: 'Estate.',
            desc: "An online marketplace that provides a platform for individuals to rent out their apartments/homes or spare rooms.",
            type:"Design",
            date: "March 19, 2023",
            url:"https://www.figma.com/file/4WXEMPI3EihjVu8tMjp7DU/Untitled?type=design&node-id=206%3A234&t=Y3OGM7ynMKeToS4z-1",
        },
        {
            id: 3,
            image: '/icons/rahmat.png',
            title: 'Rahmat-e-Alam',
            desc: "slims living in West Des Moines and its surrounding cities.",
            type:"Development",
            date: "March 19, 2023",
            url:"https://www.figma.com/file/4WXEMPI3EihjVu8tMjp7DU/Untitled?type=design&node-id=206%3A234&t=Y3OGM7ynMKeToS4z-1",
        },
        {
            id: 4,
            image: '/icons/cosmos.png',
            title: 'CosmosGroup',
            desc: "A Dubai-based private equity firm that supports early-stage businesses globally providing financial and strategic help.",
            type:"Design",
            date: "March 19, 2023",
            url:"https://www.figma.com/file/lXkRcaDE61BjVCdZuhvTJQ/Untitled?type=design&node-id=1%3A2&t=YTz11OggDRrrb9zW-1",
        },
    ];

    const [projects, setProjects] = useState(initialProjects);
    const [visibleProjects, setVisibleProjects] = useState(2);
    // const [showMore, setShowMore] = useState(false);
    const trails = useTrail(2, {
        from: { opacity: 0 },
        to: { opacity: 1 },
      })
    const handleSeeMore = () => {
        if (visibleProjects < projects.length) {
        setVisibleProjects(prevVisibleProjects => prevVisibleProjects + 2);
        }
    };
    const handleSeeLess = () => {
            setVisibleProjects(2);
    };

    // const visitButton = <button className={styles.visit_btn}>
    //                         <div>Visit</div>
    //                         <img src="/Icons/right_arrow.svg"></img>
    //                     </button>
    
                    

    return (
        <Fragment >
            <div id="portfolio" className={styles.my_portfolio}>My Portfolio</div>
            <div className={styles.grid_container}>
                {projects.slice(0, visibleProjects).map((project, index) => (
                    <Fragment key={Math.random()}>
                        {(index % 2 === 0) ? (
                            <div className={`${styles.grid_item}`} key={project.id}>
                                <div className={styles.img_cont}>
                                    <img className={styles.proj_img} src={project.image} alt={`Project ${project.id}`} />
                                    <a className={`${styles.link} ${styles.additional_description}`} target="_blank" href={project.url} rel="noopener noreferrer">
                                            <div className={styles.card_cont}>
                                                <div className={styles.card_type}>Type: <span>{project.type}</span></div>
                                                <div className={styles.date}>{project.date}</div>
                                            </div>
                                        <img src="/icons/slant.svg"></img>
                                    </a>
                                </div>
                                <div className={styles.grid_flex}>
                                    <div className={styles.description}>Description</div>
                                    <div className={styles.title}>{project.title}</div>
                                    <div className={styles.desc}>{project.desc}</div>
                                    <a className={styles.link} target="_blank" href={project.url} rel="noopener noreferrer">
                                        <div className={styles.button_container_1}>
                                            <span className={styles.mas}>
                                                    Visit
                                                    <img src="/Icons/right_arrow.svg"></img>
                                                </span>
                                            <button id='work' type="button" name="Hover">
                                                Visit
                                                <img src="/Icons/right_arrow.svg"></img>
                                                </button>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        ) : (
                            <div className={`${styles.reverse_grid_item}`} key={project.id}>
                                <div className={styles.reverse_grid_flex}>
                                    <div className={styles.reverse_adjust}>
                                        <div className={styles.description}>Description</div>
                                        <div className={styles.title}>{project.title}</div>
                                        <div className={styles.desc}>{project.desc}</div>
                                        <a className={styles.link} target="_blank" href={project.url} rel="noopener noreferrer">
                                            <div className={styles.button_container_1}>
                                                <span className={styles.mas}>
                                                        Visit
                                                        <img src="/icons/right_arrow.svg"></img>
                                                    </span>
                                                <button id='work' type="button" name="Hover">
                                                    Visit
                                                    <img src={"/icons/right_arrow.svg"}></img>
                                                    </button>
                                            </div>
                                        </a>
                                    </div>
                                    
                                </div>
                                <div className={styles.img_cont}>
                                    <img className={styles.proj_img} src={project.image} alt={`Project ${project.id}`} />
                                    <a className={`${styles.link} ${styles.additional_description}`} target="_blank" href={project.url} rel="noopener noreferrer">
                                            <div className={styles.card_cont}>
                                                <div className={styles.card_type}>Type: <span>{project.type}</span></div>
                                                <div className={styles.date}>{project.date}</div>
                                            </div>
                                        <img src="/icons/slant.svg"></img>
                                    </a>
                                </div>
                            </div>
                        )}
                    </Fragment>
                ))}
            {visibleProjects < projects.length && (
                <button className={styles.seemore} onClick={handleSeeMore}>
                    <div>See More</div>
                    <img src='/icons/down_arrow.svg'></img>
                </button>
            )}
            {visibleProjects === projects.length && (
                <button className={styles.seemore} onClick={handleSeeLess}>
                    <div>See Less</div>
                    <img style={{transform: 'rotateX(180deg)'}} src='/icons/down_arrow.svg'></img>
                </button>
            )}
            </div>
        </Fragment>
    );
};
export default PortfolioSection;