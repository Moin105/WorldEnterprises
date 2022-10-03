import React from 'react'
import styles from '../styles/Home.module.css'

function Tags(props) {
  return (
    <div className={styles.tags}>
        <div className={styles.wrapper}>
        <h2 className={styles.like}>{props.heading}</h2>
        <p className={styles.p}>Home/<span>{props.heading}</span></p>
        </div>
       

    </div>
  )
}

export default Tags