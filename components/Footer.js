import React from 'react'
import styles from '../styles/Home.module.css';
import Link from "next/link";


function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.upperfooter}>
        <div className={styles.wrapper}>
           <div className={styles.foot1}>
              <h2 className={styles.h2}>ABOUT US</h2>
              <div className={styles.lines}></div>
              <p className={styles.p}>Our expert team of construction estimators offers professional construction estimating services. With an in-hand experience of 15 years, we have a proven track record of delivering the right material estimates to our valuable clients for every construction trade within the fastest turnaround time.</p>
           </div>
           <div className={styles.foot2}>
              <h2 className={styles.h2}>COMPANY LINKS</h2>
              <div className={styles.lines}></div>
              <ul>
                    <a href="/"><p>Home</p></a> 
                    <a href="/Aboutus"><p>About us</p></a>  
                    <a href="/Trades"> <p>Services/Traders</p></a>
                    <a href="/Pricing"><p>Pricing</p></a>
                    <a href="/Contact"><p>Contact us</p></a>
              </ul>
           </div>
           <div className={styles.foot3}>
              <h2 className={styles.h2}>CONTACT INFO</h2>
              <div className={styles.lines}></div>
              <ul>
              <div className={styles.footrow}>
                 <h3 className={styles.h3}>Address:</h3>
                 <p className={styles.p}>750 N Saint Paul st ste 250 DALLAS,TX, USA</p>
              </div>
           
              <div className={styles.footrow}>
                 <h3 className={styles.h3}>Phone:</h3>
                 <p className={styles.p}>205-588-1306</p>
              </div>

              <div className={styles.footrow}>
                 <h3 className={styles.h3}>Email:</h3>
                 <p className={styles.p}><a href="mailto:johnmiller@worldenterprises.us">johnmiller@worldenterprises.us</a></p>
              </div>
              </ul>
           </div>
        </div>  
      </div>
      <div className={styles.lowerfooter}>
         <div className={styles.wrapper}>
            <p className={styles.p}>© 2020 — World Enterprises. All Rights Reserved.</p>
            <div className={styles.footbox}>
            <p className={styles.p}>HISTORY</p>
            <p className={styles.p}>FAQ</p>
            <p className={styles.p}>EVENTS</p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Footer