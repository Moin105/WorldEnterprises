import React from 'react'
import styles from '../styles/Home.module.css';
// import Image from "next/image";
import {AiOutlinePlus} from 'react-icons/Ai';
function Section6() {
  return (
    <div className={styles.section6}>
           {/* <figure className={styles.svg}>
                            <Image
                            src={svg}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                    </figure>  */}
        <div className={styles.wrapper}>
            <h2 className={styles.h2}>World Enterprises</h2>
            <h1 className={styles.h}>AWESOME FACTS</h1>
            <div className={styles.palet}>
            
                <div className={styles.bbox}>
                    <div className={styles.row}>
                        <h2 className={styles.h2}>
                        13691
                        </h2>
                        <p className={styles.cc}><AiOutlinePlus/></p>
                    </div>
                    <h2 className={styles.h2}>
                    Project Completed
                    </h2>
                </div>
               
                <div className={styles.bbox}>
                    <div className={styles.row}>
                        <h2 className={styles.h2}>
                         12950
                        </h2>
                        <p className={styles.cc}><AiOutlinePlus/></p>
                    </div>
                    <h2 className={styles.h2}>
                    Satisfied Clients
                    </h2>
                </div>

                {/* <div className={styles.bbox}>
                    <div className={styles.row}>
                        <h2 className={styles.h2}>
                        984
                        </h2>
                        <p className={styles.cc}><AiOutlinePlus/></p>
                    </div>
                    <h2 className={styles.h2}>
                    Employees
                    </h2>
                </div> */}
            
            </div>
        </div>            

    </div>
  )
}

export default Section6