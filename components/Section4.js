import React,{useState} from 'react'
import styles from '../styles/Home.module.css';
import Image from "next/image";
import schema from '../public/schema.jpg'
import Acarousel from '../components/Aboutus/Acarousel'
import Qna from './Qna';

function Section4() {
    const [num , setNum] = useState(1)
  return (
    <div className={styles.section4}>
        <div className={styles.wrapper}>
            <div className={styles.left}> 
                <h2 className={styles.h2}>FREQUENTLY ASKED QUESTIONS</h2>
                <div className={styles.lines}></div>
                <div className={styles.alin}>
                    <Qna num={num}/>
                    <div className={styles.btnbox}>
                        <button className={styles.bootn} onClick={()=>{setNum(1)}}> 1 </button>
                        <button className={styles.bootn} onClick={()=>{setNum(2)}}> 2 </button>
                        <button className={styles.bootn} onClick={()=>{setNum(3)}}> 3 </button>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <h2 className={styles.h2}>ABOUT US</h2>
                <div className={styles.lines}></div>    
                <Acarousel/>

            </div>
        </div>
    </div>
  )
}

export default Section4