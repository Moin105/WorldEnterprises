import React from 'react';
import styles from '../styles/Home.module.css';
import svg from '../public/section3.png';
import Image from "next/image";
import Carousel from './Carousel';
import Section3Card from './Section3Card';

import sv1 from '../public/sc1.png';
import sv2 from '../public/sc2.png';
import sv3 from '../public/sc3.png';
    function Section3() {
  return (

    <div className={styles.section3}>

{/* <figure className={styles.sectionbackground}>
                            <Image
                            src={svg}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                    </figure> 
                 */}
        <div className={styles.wrapper}>
        <h2 className={styles.h2}>Featured work</h2>
        <div className={styles.lines}></div>
        <div className={styles.carousel}>
            {/* <Carousel/> */}
            <Section3Card img={sv1} h1="Building, Office, Workspace" h2="LUXURY BUILDINGS" />
            <Section3Card img={sv2} h1="Building, Office, Workspace" h2="LUXURY BUILDINGS"/>
            <Section3Card img={sv3} h1="Architecture, Garden, Interior" h2="LUXURY BUILDINGS"/>
        </div>
        </div>
    </div>
  )
}

export default Section3