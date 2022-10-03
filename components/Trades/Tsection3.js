import React from 'react'
import styles from '../../styles/Home.module.css';
import svg from '../../public/svg.png';
import barger from '../../public/barger.png';

import Image from "next/image";
function Tsection3() {
  return (
    <div className={styles.tsection3}>
    <div className={styles.wrapper}>
           <h2 className={styles.h2}>Highlights of services offered by World Enterprises</h2>
           <span className={styles.lines}></span>
           <p className={styles.p}>World Enterprises provides material takeoff and building cost estimation services to its clients in the US, UK, Canada, Australia, and other nations. You may look up our popularity and profile on The Blue Book.</p>
            <div className={styles.section3row}> 
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
                <figure className={styles.barger}>
                                        <Image
                                        src={barger}
                                        alt="system"
                                        layout="fill"
                                        objectFit="contain"
                                        />
                                </figure> 
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
</div>
  )
}

export default Tsection3