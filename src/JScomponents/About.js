import React from 'react'
import styles from "../CSScomponents/About.module.scss"
import {Link } from "react-router-dom"
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import {GoMail} from 'react-icons/go';

function About() {


    return (
        <div className={styles.container}>
            
            <div className={styles.intro}>
                <h1>Henock Adane's Portfolio</h1>



                <p className={styles.introMsg}>I am a self taught Fullstack-Developer who is looking for a role in an exciting company where I am able to improve myself as a developer. Check out my latest portfolio projects.</p>


                

                <div className={styles.getInTouch}>
                    <h2>Get In Touch</h2>
                    <p>Feel Free To Submit A Form At <Link to="contact">Contact Page</Link> or email me at <a href="mailto:adanehenock@gmail.com" target="_blank" rel="noreferrer">adanehenock@gmail.com</a>
                    </p>
                </div>

                <div className={styles.socials}>

                    <p>Contact Me</p>

                    <a href="https://www.linkedin.com/in/henock-adane-1ab49219b/" target="_blank" rel="noreferrer"><FaLinkedin size="50"/></a>
                    <a href="https://github.com/HenockAdane?tab=repositories" target="_blank" rel="noreferrer"><FaGithubSquare size="50"/></a>
                    <a href="mailto:adanehenock@gmail.com" target="_blank" rel="noreferrer"><GoMail size="50"/></a>
                </div>
            </div>
        </div>
    )
}

export default About
