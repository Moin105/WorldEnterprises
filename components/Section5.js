import React from 'react'
import styles from '../styles/Home.module.css';
import Image from "next/image";
import Carousel from './Carousel';
function Section5() {
  return (
    <div className={styles.section5}>
        <div className={styles.wrapper}>
        <h2 className={styles.h2}>Our Trades</h2>
        <div className={styles.lines}></div>
        <Carousel/>
        </div>
    </div>
  )
}

export default Section5