import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../CSScomponents/ProjectSmall.module.scss"

function ProjectSmall(props) {
    return (

        <Link to={props.to} className={styles.container}>

            <p className={styles.title}>{props.title}</p>

            <div className={styles.hoverContainer}>
                
                <img className={styles.projectImg} src={props.projectImg} alt="Project Website"/>

                <div className={styles.techStackContainer}>

                    <div className={styles.tech}>
                        {props.techUsed}
                    </div>
                </div>

            </div>
            
        </Link>
    )
}

export default ProjectSmall
