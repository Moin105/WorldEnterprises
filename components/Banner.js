import React from 'react';
import styles from '../styles/Home.module.css';
import Image from "next/image";
import banner1 from '../public/banner1.png'
import drop from '../public/drop.png'
import calc from '../public/calc.png'
import dollar from '../public/dollar.png'
import watch from '../public/watch.png'

import ReadBox from './ReadBox';



function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.black}></div>
        <figure className={styles.figure}>
          <Image
            src={banner1}
            alt="system"
            layout="fill"
            objectFit="cover"
          />
        </figure>    
        <div className={styles.context}>
          <div className={styles.wrapper}>
            <h1 className={styles.h1}>
                 <span> World Enterprises:</span><br></br> Excellence in Construction 
                  Estimation <span>since 1981</span>
            </h1>
            <figure className={styles.drop}>
              <Image
                src={drop}
                alt="system"
                layout="fill"
                objectFit="contain"
              />
            </figure>
            <div className={styles.row}>
               <ReadBox img={calc} heading="Certified Estimators" />
               <ReadBox img={dollar} heading="Affordable Prices" />
               <ReadBox img={watch} heading="Fastest Turnaround Time" />
            </div>            
          </div>
        </div>
    </div>
  )
}

export default Banner