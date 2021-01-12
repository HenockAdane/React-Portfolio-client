import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../CSScomponents/Footer.module.scss"

function Footer() {
    return (
        <div className={styles.container}>

        <div className={styles.intro}>
            <p>Get In Touch</p>
            <p>Feel Free To Submit A Form At <Link to="contact">Contact Page</Link> or email me at <a href="mailto:adanehenock@gmail.com" target="_blank" rel="noreferrer">adanehenock@gmail.com</a>
            </p>
        </div>
            
        </div>
    )
}

export default Footer
