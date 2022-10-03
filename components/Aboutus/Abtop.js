import React from 'react'
import styles from '../../styles/Home.module.css';
import {AiOutlinePlus} from 'react-icons/Ai';
import Acarousel from './Acarousel';

function Abtop() {
  return (
    <div className={styles.abtop}>
        <div className={styles.wrapper}>
            <div className={styles.abl}>
                <h2 className={styles.h2}>OUR HISTORY AND FACTS</h2>
                <div className={styles.lines}></div>
                <p className={styles.p}>
                    It should not be difficult to estimate projects. Our staff of experienced estimators will provide an accurate cost estimate for your project. <br></br>
                    Our estimators have extensive expertise in estimating for subcontractors, general contractors, estate owners, developers, and financiers in a variety of construction activities for residential, commercial, and industrial buildings, and they take delight in offering high-quality services. Our estimating experts have a wealth of experience through years of hands-on experience producing comprehensive and precise estimate tasks.<br></br> 
                    We understand that each task is unique and that things cannot be fit into a single template, therefore we pay close attention to the demands of our clients and provide estimates that are tailored to their requirements and worth the money they have invested in us.<br></br>
                    We keep the prices for our quantity take-offs and construction estimates competitive and affordable for our clients.<br></br>
                </p>
                <div className={styles.qbox}>
                    <div className={styles.ques}>
                       <h2 className={styles.h}>13691   <p className={styles.cc}><AiOutlinePlus/></p></h2>
                       <p className={styles.h2}>Project Completed</p>
                    </div>
                    <div className={styles.ques}>
                       <h2 className={styles.h}>1725  <p className={styles.cc}><AiOutlinePlus/></p></h2>
                       <p className={styles.h2}>Satisfied Clients</p>
                    </div>
                    <div className={styles.ques}>
                       <h2 className={styles.h}>984  <p className={styles.cc}><AiOutlinePlus/></p></h2>
                       <p className={styles.h2}>Employees</p>
                    </div>
                </div>
            </div>
            <div className={styles.abr}>
                <Acarousel/>
            </div>
        </div>

    </div>
  )
}

export default Abtop