import React from 'react'
import svg from '../public/sc1.png';
import styles from '../styles/Home.module.css';
import Image from "next/image";

function Section3Card(props) {
  return (
    <div className={styles.sectioncard3}>
        <figure className={styles.sectionbackground}>
                            <Image
                            src={props.img}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                    </figure> 
                    <div className={styles.content}>
                        <h3 className={styles.h3}>{props.h1}</h3>
                        <h3 className={styles.h4}>{props.h2}</h3>
                        <div className={styles.liness}></div>
                    </div>
    </div>
  )
}

export default Section3Card