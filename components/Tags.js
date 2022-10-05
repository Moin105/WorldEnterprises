import React from 'react'
import styles from '../styles/Home.module.css'

function Tags({heading}) {
  return (
    <div className={styles.tags}>
        <div className={styles.wrapper}>
        <h2 className={styles.like}>{heading}</h2>
        <p className={styles.p}>Home/<span>{heading}</span></p>
        </div>
       

    </div>
  )
}

export default Tags