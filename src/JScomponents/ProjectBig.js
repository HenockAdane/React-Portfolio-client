import React from 'react'
import styles from "../CSScomponents/ProjectBig.module.scss"
import Title from './Title'


function ProjectBig(props) {


    return (
        <div className={styles.container}>

        <Title title={props.title} borderTopLeftRadius="20px" borderTopRightRadius="20px" color="rgb(42,42,42)"
    backgroundColor="white" margin="25px 0 0 0" boxShadow="10px 10px 1px rgba(0,0,0,.25)"/>

        <img src={props.img} alt="Project Website" />



            <a className={styles.liveLink} href={props.liveLink} target="_blank" rel="noreferrer"><span>VISIT THE WEBSITE</span></a>

                <h1>ABOUT THIS PROJECT</h1>
                


            <p className={styles.description}>{props.description}</p>

            <div className={styles.techStackContainer}>

                <h2>Tech Stack I Used For This Project</h2>

                <ul>
                    {props.techUsed}
                </ul>
            </div> 

            
        </div>
    )
}

export default ProjectBig
