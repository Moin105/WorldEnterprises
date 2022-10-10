import React from 'react'
import styles from '../../styles/Home.module.css';

import sv1 from '../../public/sv1.png';
import sv2 from '../../public/sv2.png';
import sv3 from '../../public/sv3.png';
import sv4 from '../../public/sv4.png';
import sv5 from '../../public/sv5.png';
import sv6 from '../../public/sv6.png';
import sv7 from '../../public/sv7.png';
import sv8 from '../../public/sv8.png';
import sv9 from '../../public/sv9.png';
import TradeCard from './TradeCard';

function Tsection() {
  return (
    <div className={styles.tsection}>
        <div className={styles.wrapper}>
        <TradeCard img={sv1} heading="GENERAL CONTRACTORS"            des="World Enterprises consists of a skilled team of general Construction Estimators and Material Takeoff Specialists who have a diverse portfolio."  />                           
           <TradeCard img={sv2} heading="CONCRETE CONTRACTORS"           des="Our portfolio in concrete takeoff services includes Dams Bridges, Residential buildings, Commercial buildings, Marine structures, Highways, Driveways etc" />                 
           <TradeCard img={sv3} heading="PLUMBING CONTRACTORS"           des="The range of plumbing estimating services covers Material Takeoffs, Budget Estimates, Conceptual Estimates, Design Development Estimates, Bid Estimates, Bid Reviews etc" />  
           <TradeCard img={sv4} heading="ROOFING CONTRACTORS"            des="Our deliverables for Roofing estimates include takeoff sheets, Material pricing, Labor costs, drawing plans Takeoff summary and Complete bid." />                            
           <TradeCard img={sv5} heading="ELECTRICAL CONTRACTORS"         des="The range of Electrical Estimating services cover Electric Cost Estimates, Material Takeoffs, Cost per Square Foot Project Cost, CAD Services, Value Engineering etc." />     
           <TradeCard img={sv6} heading="SITE WORK/ GRADING"             des="With our site work estimation services, we consider all other elements such as construction equipment, insurance, logistics, safety, permits, contingencies, etc" />          
           <TradeCard img={sv7} heading="INTERIOR & EXTERIOR FINISHES"   des="Estimates for interior and exterior finishes are crucial for building development. Allow us to assist you with our efficient and precise estimation services." />             
           <TradeCard img={sv8} heading="MASONARY CONTRACTORS"           des="If you are searching for the best masonry estimating services, World estimating is at your service. Apart from that, we also offer masonry brick wall 3d design services." /> 
           <TradeCard img={sv9} heading="LUMBER CONTRACTORS"             des="When it comes to economical lumber estimates, woodwork contractors, framers, builders, and carpenters are among our regular clientele. " />                                   

        </div>
           
    </div>
  )
}

export default Tsection