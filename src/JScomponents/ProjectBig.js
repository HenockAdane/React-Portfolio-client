import React from 'react'
import styles from "../CSScomponents/ProjectBig.module.scss"


function ProjectBig(props) {

    let title = props.title

    return (
        <div className={styles.container}>

        <div className={styles.titleContainer}>
            {title.split("").map(letter => <h1 className={styles.titleLetters}>{letter}</h1>)}
        </div>

        <img src={props.img} alt="Project Website" />




            <div className={styles.spanDiv}>

                <h1>ABOUT THIS PROJECT</h1>
                <a className={styles.liveLink} href={props.liveLink} target="_blank" rel="noreferrer"><span>VISIT THE WEBSITE</span></a>

            </div>

            <p className={styles.description}>{props.description}</p>

            <div className={styles.techStackContainer}>

                <h1>Tech Stack I Used For This Project</h1>

                <ul>
                    {props.techUsed}
                </ul>
            </div> 

            
        </div>
    )
}

export default ProjectBig
