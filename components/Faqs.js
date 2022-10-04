
import React,{useState,useEffect} from 'react'
import styles from '../styles/Home.module.css';
import Image from "next/image";
import bdrop from '../public/bdrop.png'
import wminus from '../public/wminus.png'
import wdown from '../public/wdown.png'
import bplus from '../public/bplus.png'

function Faqs({query}) {
    const [show, setShow] = useState(true)

  return (
    <div>
         <> {show ?  <div className={styles.ques1} key={query.key} onClick={()=>{
                setShow(!show)
            }}>
          <div className={styles.qbox}>
                <figure className={styles.bplus}>
                <Image
                src={bplus}
                alt="system"
                layout="fill"
                objectFit="contain"
                />
                </figure>
                <p className={styles.p}>{query.question_title}</p>
          </div>
        <figure className={styles.bdrop}>
                <Image
                src={bdrop}
                alt="system"
                layout="fill"
                objectFit="contain"
                />
                </figure>  
        </div>:
        <>
        <div className={styles.ques2}onClick={()=>{
                setShow(!show)
            }}>
          <div className={styles.qbox}>
                <figure className={styles.bplus}>
                <Image
                src={wminus}
                alt="system"
                layout="fill"
                objectFit="contain"
                />
                </figure>
                <p className={styles.p}>{query.question_title}</p>
          </div>
        <figure className={styles.bdrop}>
                <Image
                src={wdown}
                alt="system"
                layout="fill"
                objectFit="contain"
                />
                </figure>  
        </div>
        <div className={styles.answer}onClick={()=>{
                setShow(!show)
            }}>
        <p className={styles.p}>{query.answers}</p>
        </div>
        </>}
        </>
    </div>
  )
}

export default Faqs