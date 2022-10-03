import React from 'react';
import styles from '../styles/Home.module.css';
import svg from '../public/svg.png';
import Image from "next/image";


function Section2() {
  return (
    <div className={styles.section2}>
        <div className={styles.usec}>
                <div className={styles.wrapper}>
                    <p className={styles.lp}>Contractors & Construction Managers Since 1981</p>
                    <button className={styles.quote}>GET A QUOTE</button>
                </div>   
        </div>
        <div className={styles.lsec}>
               <h2 className={styles.h2}>WHAT WE OFFER</h2>
               <span className={styles.lines}></span>
        <div className={styles.boxcontainer}>
            <div className={styles.sectionbox}>
                <div className={styles.circle}>
                    <figure className={styles.svg}>
                            <Image
                            src={svg}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                    </figure> 
                </div>
               
                <div className={styles.secdescription}>
                    <h3 className={styles.h3}>92% Bid-Hit Ratio</h3>
                    <p className={styles.p}>Our bid success ratio is greater than 92%. If any of our clients need a complete estimate at the beginning of the project, we provide it as well.</p>
                </div>
            </div>
            <div className={styles.sectionbox}>
                <div className={styles.circle}>
                    <figure className={styles.svg}>
                            <Image
                            src={svg}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                    </figure> 
                </div>
               
                <div className={styles.secdescription}>
                    <h3 className={styles.h3}>92% Bid-Hit Ratio</h3>
                    <p className={styles.p}>Our bid success ratio is greater than 92%. If any of our clients need a complete estimate at the beginning of the project, we provide it as well.</p>
                </div>
            </div>
            <div className={styles.sectionbox}>
                <div className={styles.circle}>
                    <figure className={styles.svg}>
                            <Image
                            src={svg}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                    </figure> 
                </div>
               
                <div className={styles.secdescription}>
                    <h3 className={styles.h3}>92% Bid-Hit Ratio</h3>
                    <p className={styles.p}>Our bid success ratio is greater than 92%. If any of our clients need a complete estimate at the beginning of the project, we provide it as well.</p>
                </div>
            </div>
            <div className={styles.sectionbox}>
                <div className={styles.circle}>
                    <figure className={styles.svg}>
                            <Image
                            src={svg}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                    </figure> 
                </div>
               
                <div className={styles.secdescription}>
                    <h3 className={styles.h3}>92% Bid-Hit Ratio</h3>
                    <p className={styles.p}>Our bid success ratio is greater than 92%. If any of our clients need a complete estimate at the beginning of the project, we provide it as well.</p>
                </div>
            </div>
            <div className={styles.sectionbox}>
                <div className={styles.circle}>
                    <figure className={styles.svg}>
                            <Image
                            src={svg}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                    </figure> 
                </div>
               
                <div className={styles.secdescription}>
                    <h3 className={styles.h3}>92% Bid-Hit Ratio</h3>
                    <p className={styles.p}>Our bid success ratio is greater than 92%. If any of our clients need a complete estimate at the beginning of the project, we provide it as well.</p>
                </div>
            </div>
            <div className={styles.sectionbox}>
                <div className={styles.circle}>
                    <figure className={styles.svg}>
                            <Image
                            src={svg}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                    </figure> 
                </div>
               
                <div className={styles.secdescription}>
                    <h3 className={styles.h3}>92% Bid-Hit Ratio</h3>
                    <p className={styles.p}>Our bid success ratio is greater than 92%. If any of our clients need a complete estimate at the beginning of the project, we provide it as well.</p>
                </div>
            </div>


        </div>
        </div>
    </div>
  )
}

export default Section2