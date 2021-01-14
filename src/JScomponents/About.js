import React from 'react'
import styles from "../CSScomponents/About.module.scss"
import {Link } from "react-router-dom"
import Title from "../JScomponents/Title.js"

function About() {


    return (
        <div className={styles.container}>
            
                {/* <h1>Welcome, my name is Henock Adane.</h1> */}
                <Title title="Welcome, my name is Henock Adane." margin="25px 0" />




                <p className={styles.introMsg}>I am a self taught Fullstack-Developer who is looking for a role in an exciting company where I am able to improve myself as a developer. Check out my projects on the <Link to="/portfolio">Portfolio Page</Link> or contact me on the <Link to="/contact">Contact Page</Link>.</p>


            
        </div>
    )
}

export default About
