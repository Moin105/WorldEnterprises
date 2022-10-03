import React from 'react'
import Image from "next/image";
import styles from '../styles/Home.module.css';
import map from '../public/map.png'
function Map() {
  return (
    <div className={styles.map}>     
    <div className={styles.wrapper}>
        <figure className={styles.maps}>
        <Image
        src={map}
        alt="system"
        layout="fill"
        objectFit="contain"
        />
        </figure>
    </div> 
   
    </div>
  )
}

export default Map