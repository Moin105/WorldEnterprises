import React from 'react';
import styles from '../../styles/Home.module.css';
import svg from '../../public/svg.png';
import c1 from '../../public/c1.png';
import c2 from '../../public/c2.png';
import c  from '../../public/c.png';
import e  from '../../public/e.png';
import p  from '../../public/p.png';
import Image from "next/image";
import Link from "next/link";

function Psection() {
  return (
    <div className={styles.psection}>

        <div className={styles.lsec}>
               <h2 className={styles.h2}>Pricing Packages</h2>
               <span className={styles.lines}></span>
               {/* <p className={styles.p}>World Enterprises provides material takeoff and building cost estimation services to its clients in the US, UK, Canada, Australia, and other nations. You may look up our popularity and profile on The Blue Book.</p> */}
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
                    <h3 className={styles.h3}>Affordable Prices</h3>
                    <p className={styles.p}>We have many different types of building estimators on our team. They all have respectable credentials and Experience. Our prices for quantity take-offs and construction estimates are competitive.</p>
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
                    <h3 className={styles.h3}>Fater Turnaround Time</h3>
                    <p className={styles.p}>We offer construction estimating services with a quick turnaround of 24 to 48 hours.
It shouldn&apos;t be difficult to estimate projects. Our staff of experienced estimators will provide an accurate cost estimate for your project. </p>
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
                    <h3 className={styles.h3}>Certified Estimates</h3>
                    <p className={styles.p}>We prepare diverse kind of building estimates. Our team excels in professional credentials and variable experience.  Highly Skilled Professional Team Offers quality estimates on competitive rates.</p>
                </div>
            </div>
        </div>
        <div className={styles.pricerow}>
            <div className={styles.pricingbox}>
                <figure className={styles.clogo}>
                <Image
                            src={c1}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                </figure>
                <p className={styles.p}>Package I</p>
                <h2 className={styles.h2}>Single Trade Pricing</h2>
                <p className={styles.p}>$200 Approx.</p>
                <p className={styles.p}>
                    We charge less (within $100) for small 
                    projects that require a few hours to get
                    estimated.
                </p>
            <button className={styles.upload}><Link href="/Contact">Upload Plan</Link></button>
                <p className={styles.p}>
                    After uploading the plans, fill out the
                    form on the contact page. We will 
                    quote you in the next 5 minutes after 
                    reviewing your plans.
                </p>
            </div>
            <div className={styles.pricingbox}>
                <figure className={styles.clogo}>
                <Image
                            src={c2}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                </figure>
                <p className={styles.p}>Package II</p>
                <h2 className={styles.h2}>PRICING FOR RESIDENTIAL & COMMERCIAL ESTIMATES</h2>
                {/* <p className={styles.p}>$200 Approx.</p> */}
                <p className={styles.p}>
                Our Rates Depend Upon The Scope 
                And Size Of The Project
                </p>
            <button className={styles.upload}><Link href="/Contact">Upload Plan</Link></button>
                <p className={styles.p}>
                    Upload Plans In The Below Button, We 
                    Will Review And Quote In A Minute. After
                    uploading the plans, fill out the form on
                    the contact page.
                </p>
            </div>
            <div className={styles.cus}>
                <h2 className={styles.h2}>Contact Us</h2>
               <p className={styles.p}>
                 If the files are large, just email me. We can provide you a drop box link.
                 So, you can upload your plans.
               </p>
               <div className={styles.cusbox}>
                 <figure className={styles.cuslogo}>
                 <Image
                            src={c}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                 </figure>
                 <p className={styles.cusp}>
                  Call<br></br>
                 <span>
                    You can directly call us at 205-588-1306 to discuss your project 
                    specifications.
                 </span>


                 </p>
               </div>
               <div className={styles.cusbox}>
                 <figure className={styles.cuslogo}>
                 <Image
                            src={e}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                 </figure>
                 <p className={styles.cusp}>
                  Email<br></br>
                 <span>
                    Email your plans and specifications at<b> johnmiller@worldenterprises.us</b><br></br> and we provide
                     you a quick quote or schedule a call.
                 </span>
                 </p>
               </div>
               <div className={styles.cusbox}>
                 <figure className={styles.cuslogo}>
                 <Image
                            src={p}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                 </figure>
                 <p className={styles.cusp}>
                 Live Chat <br></br>
                 <span>                
                    <b> 24/7 live chat</b> support is available where we instantly respond to<br></br> 
                    your queries and help you in your critical times
                 </span>
                 </p>
               </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Psection