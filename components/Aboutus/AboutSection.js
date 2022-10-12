import React from 'react';
import styles from '../../styles/Home.module.css';
import svg from '../../public/svg.png';
import Link from "next/link";
// import c1 from '../../public/c1.png';
// import c2 from '../../public/c2.png';
// import c  from '../../public/c.png';
// import e  from '../../public/e.png';
// import p  from '../../public/p.png';

import wd from '../../public/wd.png';
import wcal from '../../public/wcal.png';
import wclock from '../../public/wclock.png';
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
                            src={wd}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                    </figure> 
                </div>
               
                <div className={styles.secdescription}>
                    <h3 className={styles.h3}>Affordable Prices</h3>
                    <p className={styles.p}>We have many different types of building estimators on our team. They all have respectable credentials and Experience. Our prices for quantity take-offs and construction estimates are competitive.</p>
                </div>
            </div>
            <div className={styles.sectionbox}>
                <div className={styles.circle}>
                    <figure className={styles.svg}>
                            <Image
                            src={wclock}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                    </figure> 
                </div>
               
                <div className={styles.secdescription}>
                    <h3 className={styles.h3}>Faster Turnaround Time</h3>
                    <p className={styles.p}>We offer construction estimating services with a quick turnaround of 24 to 48 hours.It shouldn&apos;t be difficult to estimate projects. Our staff of experienced estimators will provide an accurate cost estimate for your project.</p>
                </div>
            </div>
            <div className={styles.sectionbox}>
                <div className={styles.circle}>
                    <figure className={styles.svg}>
                            <Image
                            src={wcal}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                    </figure> 
                </div>
               
                <div className={styles.secdescription}>
                    <h3 className={styles.h3}>Certified Estimates</h3>
                    <p className={styles.p}>We prepare diverse kind of building estimates. Our team excels in professional credentials and variable experience.  Highly Skilled Professional Team Offers quality estimates on competitive rates.</p>
                </div>
            </div>
        </div>
      
        </div>
    </div>
  )
}

export default AboutSection