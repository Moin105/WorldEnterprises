import React from 'react'
import styles from '../../styles/Home.module.css';
import Link from "next/link";
function AboutBanner() {
  return (
    <div className={styles.abban}>
        <div className={styles.wrapper}>
            <h1 className={styles.abbanner}>
            EXCELLENCE IN CONSTRUCITON<span> SINCE 1981</span>
            </h1>
           <Link href="/Contact"><button className={styles.abtn}>GET A QUOTE</button></Link>
        </div>
    </div>
  )
}

export default AboutBanner