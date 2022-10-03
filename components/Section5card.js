import React from 'react'
import styles from '../styles/Home.module.css';
import Image from "next/image";

function Section5card(props) {
  return (
    <div className={styles.card5}>
          <figure className={styles.sectionbackground5}>
                            <Image
                            src={props.img}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
          </figure> 
          <h3 className={styles.h3}>{props.heading}</h3>
          <p className={styles.p}>{props.des}</p>
          <button className={styles.btn}>VIEW MORE</button>
    </div>
  )
}

export default Section5card