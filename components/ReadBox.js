import React from 'react'
import styles from '../styles/Home.module.css';
import Image from "next/image";

function ReadBox(props) {
  return (
    <div className={styles.readbox}>
       <figure className={styles.figures}>
              <Image
                src={props.img}
                alt="system"
                layout="fill"
                objectFit="contain"
              />
       </figure>
       <div className={styles.readmore}>
           <h2 className={styles.h2}>{props.heading}</h2>
           <p className={styles.p}>Read More</p>
       </div>
    </div>
  )
}

export default ReadBox