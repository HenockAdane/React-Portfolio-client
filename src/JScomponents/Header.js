import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styles from "../CSScomponents/Header.module.scss"
import { ImHome3 } from 'react-icons/im';
function Header() {

    const [state, setState] = useState(()=> ({
        classes: {
            menu: styles.menu,
            nav: styles.nav
        }
    }))

    const toggleMenu = (e) => {

        if (state.classes.menu === styles.menu && state.classes.nav === styles.nav ){

            setState(ps => ({
                ...ps,
                classes: {
                    menu: `${styles.menu} ${styles.open}`,
                    nav: `${styles.nav} ${styles.open}`
                }
            }))
            
        }

        else{

            setState(ps => ({
                ...ps,
                classes: {
                    menu: styles.menu,
                    nav: styles.nav
                }
            }))
        }
    }

    return (
        <header className={styles.header}>

                <div className={styles.absoluteHeader}>
                
                    <Link to="/" className={styles.logoContainer}>
                        <ImHome3 className={styles.home3} size="47" />
                    </Link>

                    <div className={state.classes.menu} onClick={toggleMenu}>

                        <div className={styles.burger}></div>
                    </div>

                </div>


                <nav className={state.classes.nav}>
                    <Link to="/" onClick={toggleMenu}><span>HOME</span></Link>
                    <Link to="/portfolio" onClick={toggleMenu}><span>PORTFOLIO</span></Link>
                    <Link to="/contact" onClick={toggleMenu}><span>CONTACT</span></Link>
                </nav>
            
        </header>
    )
}

export default Header
