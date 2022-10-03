import React from 'react'
import styles from '../styles/Home.module.css';
import Image from "next/image";
import schema from '../public/schema.jpg'
import star from '../public/star.png'
import profile from '../public/profile.png'

function Section7() {
  return (
    <div className={styles.section7}>
        <div className={styles.wrapper}>
            <div className={styles.left}> 
                <h2 className={styles.h2}>OUR PARTNERS</h2>
                <div className={styles.lines}></div>
                <div className={styles.boxing}>
                
                <figure className={styles.schema}>
                            <Image
                            src={schema}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                </figure> 
                
                <figure className={styles.schema}>
                            <Image
                            src={schema}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                </figure> 

                <figure className={styles.schema}>
                            <Image
                            src={schema}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                </figure>

                <figure className={styles.schema}>
                            <Image
                            src={schema}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                </figure> 

                <figure className={styles.schema}>
                            <Image
                            src={schema}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                </figure> 

                <figure className={styles.schema}>
                            <Image
                            src={schema}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                </figure> 

                

                </div>
            </div>
            <div className={styles.right}>
                <h2 className={styles.h2}>TESTIMONIALS</h2>
                <div className={styles.lines}></div>    
                <div className={styles.testimonial}>
                    <p className={styles.p}>
                    “World Enterprises is a really professional business. As a general contractor,
                    I depend on them to guarantee excellent plan takeoffs. I have complete faith in
                    my recommendation of World Enterprises Services.”
                    </p>
                </div>
                <div className={styles.profile}>
                    <figure className={styles.prof}>
                                <Image
                                src={profile}
                                alt="system"
                                layout="fill"
                                objectFit="contain"
                                />
                    </figure> 
                    <div className={styles.pcontent}>
                        <h2 className={styles.h3}>DON PAULSON <br></br><span>Architectural Co.</span></h2>
                        <figure className={styles.star}>
                                <Image
                                src={star}
                                alt="system"
                                layout="fill"
                                objectFit="contain"
                                />
                        </figure> 
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Section7