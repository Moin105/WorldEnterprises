import React from 'react';
import styles from '../../styles/Home.module.css';
import t1 from '../../public/t1.png';
import t2 from '../../public/t2.png';
import t3 from '../../public/t3.png';
import t4 from '../../public/t4.png';
import t5 from '../../public/t5.png';
import t6 from '../../public/t6.png';
import t7 from '../../public/t7.png';
import t8 from '../../public/t8.png';

import Image from "next/image";
import Link from "next/link";

function Tsection2() {
  return (
    <div className={styles.section2}>
        <div className={styles.usec}>
                <div className={styles.wrapper}>
                    <p className={styles.lp}>Contractors & Construction Managers Since 1981</p>
                    <Link href="/Contact"><button className={styles.quote}>GET A QUOTE</button></Link>

                </div>   
        </div>
        <div className={styles.lsec}>
               <h2 className={styles.h2}>Highlights of services offered by World Enterprises</h2>
               <span className={styles.lines}></span>
               <p className={styles.p}>World Enterprises provides material takeoff and building cost estimation services to its clients in the US, UK, Canada, Australia, and other nations. You may look up our popularity and profile on The Blue Book.</p>
        <div className={styles.boxcontainer}>
            <div className={styles.sectionbox}>
                <div className={styles.circle}>
                    <figure className={styles.svg}>
                            <Image
                            src={t1}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                    </figure> 
                </div>
               
                <div className={styles.secdescription}>
                    <h3 className={styles.h3}>Certified Estimating</h3>
                    <p className={styles.p}>We offer construction estimating services with a quick turnaround of 24 to 48 hours. Our team holds a vast range of construction estimators. All of them have credible accreditations.</p>
                </div>
            </div>
            <div className={styles.sectionbox}>
                <div className={styles.circle}>
                    <figure className={styles.svg}>
                            <Image
                            src={t2}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                    </figure> 
                </div>
               
                <div className={styles.secdescription}>
                    <h3 className={styles.h3}>Commercial Estimating</h3>
                    <p className={styles.p}>We are aware of how intricate commercial take-offs and estimations are. At the same time, our estimators have a solid base understanding of business projects</p>
                </div>
            </div>
            <div className={styles.sectionbox}>
                <div className={styles.circle}>
                    <figure className={styles.svg}>
                            <Image
                            src={t3}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                    </figure> 
                </div>
               
                <div className={styles.secdescription}>
                    <h3 className={styles.h3}>Construction Takeoff</h3>
                    <p className={styles.p}>We offer estimates in excel and pdf formats in a unique corporate structure. Our portfolio for this includes various residential, commercial, civil, electrical, etc.</p>
                </div>
            </div>
            <div className={styles.sectionbox}>
                <div className={styles.circle}>
                    <figure className={styles.svg}>
                            <Image
                            src={t4}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                    </figure> 
                </div>
               
                <div className={styles.secdescription}>
                    <h3 className={styles.h3}>Residential Estimating</h3>
                    <p className={styles.p}>For many years, we have offered very precise home estimates. Also, we have learned everything there is to know about residential projects throughout the years.</p>
                </div>
            </div>
            <div className={styles.sectionbox}>
                <div className={styles.circle}>
                    <figure className={styles.svg}>
                            <Image
                            src={t5}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                    </figure> 
                </div>
               
                <div className={styles.secdescription}>
                    <h3 className={styles.h3}>Industrial Estimating</h3>
                    <p className={styles.p}>Our estimators are skilled in using an organized method to create thorough industrial estimating services. we can meet the industry&apos;s shifting demands</p>
                </div>
            </div>
            <div className={styles.sectionbox}>
                <div className={styles.circle}>
                    <figure className={styles.svg}>
                            <Image
                            src={t6}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                    </figure> 
                </div>
               
                <div className={styles.secdescription}>
                    <h3 className={styles.h3}>Construction Estimating</h3>
                    <p className={styles.p}>Foundation, footing, slabs, blocks, pavers, driveways, garages, basements, and parking lots, are all taken into account in our concrete estimates.</p>
                </div>
            </div>
            <div className={styles.sectionbox}>
                <div className={styles.circle}>
                    <figure className={styles.svg}>
                            <Image
                            src={t7}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                    </figure> 
                </div>
               
                <div className={styles.secdescription}>
                    <h3 className={styles.h3}>Preliminary Estimating</h3>
                    <p className={styles.p}>Because we base our preliminary cost estimates on floor space, it is simple for your clients and architects to grasp and analyze the data.</p>
                </div>
            </div>
            <div className={styles.sectionbox}>
                <div className={styles.circle}>
                    <figure className={styles.svg}>
                            <Image
                            src={t8}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                    </figure> 
                </div>
               
                <div className={styles.secdescription}>
                    <h3 className={styles.h3}>Project Leads</h3>
                    <p className={styles.p}>We assist our clients by giving them project leads in addition to our many other services. We also enlist the aid of bidding networks and expert advice on bidding.</p>
                </div>
            </div>


        </div>
        </div>
    </div>
  )
}

export default Tsection2