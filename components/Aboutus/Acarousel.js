import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import r1 from '../../public/r1.png';
import r2 from '../../public/r2.png';
import r3 from '../../public/r3.png';
import r4 from '../../public/r4.png';
import r5 from '../../public/r5.png';
import styles from '../../styles/Home.module.css';
import Image from "next/image";

const handleDragStart = (e) => e.preventDefault();

const items = [
    <figure className={styles.cimg}  onDragStart={handleDragStart} role="presentation"> 
    <Image
    src={r1}
    alt="system"
    layout="fill"
    objectFit="contain"
    />
</figure>  ,
    <figure className={styles.cimg}  onDragStart={handleDragStart} role="presentation"> 
    <Image
    src={r2}
    alt="system"
    layout="fill"
    objectFit="contain"
    />
</figure>  ,
    <figure className={styles.cimg}  onDragStart={handleDragStart} role="presentation"> 
    <Image
    src={r3}
    alt="system"
    layout="fill"
    objectFit="contain"
    />
</figure>  ,
    <figure className={styles.cimg}  onDragStart={handleDragStart} role="presentation"> 
    <Image
    src={r4}
    alt="system"
    layout="fill"
    objectFit="contain"
    />
</figure>  ,
    <figure className={styles.cimg}  onDragStart={handleDragStart} role="presentation"> 
    <Image
    src={r5}
    alt="system"
    layout="fill"
    objectFit="contain"
    />
</figure>  ,
//   <img src="../../public/r1.png" onDragStart={handleDragStart} role="presentation" />,
//   <img src="../../public/r2.png" onDragStart={handleDragStart} role="presentation" />,
//   <img src="../../public/r3.png" onDragStart={handleDragStart} role="presentation" />,
//   <img src="../../public/r4.png" onDragStart={handleDragStart} role="presentation" />,
//   <img src="../../public/r5.png" onDragStart={handleDragStart} role="presentation" />,
//   <img src="../../public/r1.png" onDragStart={handleDragStart} role="presentation" />,
];

const Acarousel = () => {
  return (
    <AliceCarousel mouseTracking items={items}  style={{color:"#FFBC13 !important"}}/>
  );
}
export default Acarousel
