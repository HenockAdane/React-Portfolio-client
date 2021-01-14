import React from 'react'
import styles from "../CSScomponents/Title.module.scss"

function Title(props) {

    const title = props.title
    return (
        <div className={styles.titleContainer} style={{borderTopLeftRadius: props.borderTopLeftRadius, borderTopRightRadius: props.borderTopRightRadius, margin: props.margin, backgroundColor: props.backgroundColor, color: props.color, border: props.border,
            boxShadow: props.boxShadow}}>
        
        {title.split("").map(letter => letter === " " ? <h1 style={{fontSize: props.fontSize}}>&nbsp;</h1> : <h1 style={{fontSize: props.fontSize}}>{letter}</h1>)}
        </div>
    )
}

export default Title
