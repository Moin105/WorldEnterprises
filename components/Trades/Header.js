import React from 'react';
import styles from '../../styles/Home.module.css';
import phone from '../../public/phone.png';
import envelope from '../../public/envelope.png';
import clock from '../../public/clock.png';
import logo from '../../public/logo2.png'
import search from '../../public/search.png'

import Image from "next/image";


function Header() {
  return (
  
    <header className={styles.header}>
        <div className={styles.line}></div>
        <div className={styles.wrapper}>
            <div className={styles.upperheader}>
            {/* box start */}
                <div className={styles.box}>
                    <figure className={styles.figure}>
                    <Image
                    src={phone}
                    alt="OBS TECHNOLOGIA"
                    layout="fill"
                    objectFit="contain"
                    />
                    </figure>
                    <p className={styles.p}>205-588-1306</p>
                </div>
            {/*box ends  */}
            {/* box start */}
            <div className={styles.box}>
                <figure className={styles.figure}>
                <Image
                src={envelope}
                alt="envelope"
                layout="fill"
                objectFit="contain"
                />
                </figure>
                <p className={styles.p}>johnmiller@worldenterprises.us</p>
            </div>
            {/*box ends  */}   
            {/* box start */}
            <div className={styles.box}>
                <figure className={styles.figure}>
                <Image
                src={clock}
                alt="OBS TECHNOLOGIA"
                layout="fill"
                objectFit="contain"
                />
                </figure>
                <p className={styles.p}>Mon-Fri: 8:00 - 17:00</p>
            </div>
            {/*box ends  */}
            </div>
        </div> 

            <div className={styles.bottomheader}>
            <div className={styles.wrapper}>
                <figure className={styles.logo}>
                <Image
                src={logo}
                alt="system"
                layout="fill"
                objectFit="contain"
                />
                </figure>    
                <div className={styles.nav}>
                    <ul className={styles.ul}>
                       <li>Home</li>
                       <li>About us</li>
                       <li>Services/Traders</li>
                       <li>Pricing</li>
                       <li>Contact us</li>
                    </ul>

                    <figure className={styles.figure}>
                    <Image
                    src={search}
                    alt="system"
                    layout="fill"
                    objectFit="contain"
                    />
                    </figure> 

                </div>
            </div>
        </div>
    </header>

  )
}

export default Header