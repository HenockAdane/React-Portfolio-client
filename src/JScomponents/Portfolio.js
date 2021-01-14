import React from 'react'
import styles from "../CSScomponents/Portfolio.module.scss"
import ProjectSmall from '../JScomponents/ProjectSmall';
import Title from './Title';


function Portfolio(props) {


    return (
        <div className={styles.container}>

                <section className={styles.techStackIntro}>
                <Title title="TECHSTACK" margin="23px 0" border="1px solid" fontSize="26px" />

                    <div className={styles.techStackContainer}>
                        
                        <li><span className={styles.techBtn}>HTML5</span></li>
                        <li><span className={styles.techBtn}>SCSS</span></li>
                        <li><span className={styles.techBtn}>ES6 JAVASCRIPT</span></li>
                        <li><span className={styles.techBtn}>REACT</span></li>
                        <li><span className={styles.techBtn}>REACT-ROUTER-DOM</span></li>
                        <li><span className={styles.techBtn}>REDUX</span></li>
                        <li><span className={styles.techBtn}>NODEJS</span></li>
                        <li><span className={styles.techBtn}>MONGODB</span></li>

                    </div>
                </section>


                <section className={styles.projects}>
                <Title title="PROJECTS" margin="23px 0" border="1px solid" fontSize="26px" />
                    <div className={styles.projectsFlex}>
    
                    {props.projectDetails.map((project, index) => <ProjectSmall
                    to={`/projects/${project.title}`}
                    title={project.title}
                    projectImg={project.img}
                    techUsed={project.techUsed.map(tech => <li>{tech}</li>)}
                    
                    />)}
                </div>
                </section>
            
        </div>
    )
}

export default Portfolio
