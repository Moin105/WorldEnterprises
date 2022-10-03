import React from 'react';
import styles from '../../styles/Home.module.css';
import svg from '../../public/svg.png';
// import c1 from '../../public/c1.png';
// import c2 from '../../public/c2.png';
// import c  from '../../public/c.png';
// import e  from '../../public/e.png';
// import p  from '../../public/p.png';

import Image from "next/image";


function AboutSection() {
  return (
    <div className={styles.absection}>

        <div className={styles.lsec}>
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
        </div>
      
        </div>
    </div>
  )
}

export default AboutSection