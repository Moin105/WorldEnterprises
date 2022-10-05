import React from 'react';
import styles from '../styles/Home.module.css';
import svg from '../public/svg.png';
import Image from "next/image";
import Link from "next/link";

function Section2() {
  return (
    <div className={styles.section2}>
        <div className={styles.usec}>
                <div className={styles.wrapper}>
                    <p className={styles.lp}>Contractors & Construction Managers Since 1981</p>
                  <Link href="/Contact"><button className={styles.quote}>GET A QUOTE</button></Link>
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
                    <h3 className={styles.h3}>Accurate And Detailed Estimates</h3>
                    <p className={styles.p}>After reviewing the plans and documents, we will send you the quote within a few minutes. As soon as it gets accepted at your end, you can pay the invoice via debit card, credit link, cash app, or PayPal, and our team will start working.</p>
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
                    <h3 className={styles.h3}>Highly Skilled Professional Team</h3>
                    <p className={styles.p}>Our team has a certified construction estimator having credible accreditations and experience. We are proficient in using various construction estimating software like Plan, Bluebeam, Trimble. Also we’ve a fully licensed estimators.</p>
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
                    <h3 className={styles.h3}>Get A Quote</h3>
                    <p className={styles.p}>After reviewing the plans and documents, we will send you the quote within a few minutes. As soon as it gets accepted at your end, you can pay the invoice via debit card, credit link, cash app, or PayPal, and our team will start working.</p>
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
                    <h3 className={styles.h3}>Receive Estimate</h3>
                    <p className={styles.p}>You will receive an estimate that will contain all the material & labor quantities with pricing. We deliver the estimate and take-off sheet in EXCEL or our template or the client&apos;s template, as per demand.</p>
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
                    <h3 className={styles.h3}>24/7 Customer Support</h3>
                    <p className={styles.p}>We ensure that our customer service is accessible to you 24/7 even on closed holidays/ weekends. No matter where you are, you&apos;ll find satisfactory service and attention. We provide our customers with excellent timely services.</p>
                </div>
            </div>


        </div>
        </div>
    </div>
  )
}

export default Section2