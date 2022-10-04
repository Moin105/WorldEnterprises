import React,{useState,useEffect} from 'react'
import styles from '../styles/Home.module.css';
import Faqs from './Faqs';
function Qna({num}) {
    const [show ,setShow] = useState(true)
    const [pagination ,setPagination] = useState(num)
    const [arr ,setArr] = useState([])
    const  questions =  [
  
      {
      "key": 1,
      "answers": "We don't work with time-based projects. We calculate our price on the basis of each project. For various busy contractors that want `on-demand` estimates to finish it, our professionals provide quotes. Besides, the quotation from our contractor is based on a few jobs for a month. We offer trustworthy and cost-effective pricing so you may reduce the cost of your construction project and finish it on schedule.",
      "question_title": "How much does a typical construction job cost per hour?"
    
      },
      {
        "key": 2,
        "answers": "Yes, you may view our predicted samples on each of our website's service pages. We have completed several estimation projects for various clients. Residential projects, painting, drywall, framing, developers, architects, and other professionals are some of our valuable clients.",
        "question_title": "How can your estimation samples be evaluated?"
      
      },
      {
        "key": 3,
        "answers": "Our delivery window is designed to hand in estimation between 24 and 48 hours. However, the magnitude of a building project determines the time slot. Generally, a building job takes 2-4 days to complete. Additionally, we can handle a variety of tasks that call for speedy delivery. It is simple. Let us know when you plan to submit your bid. One of our qualified estimators will will respond quickly and help you out. Sometimes, a small urgent order fee is charged.  You will get your package quickly and well in time.",
        "question_title": "What is the anticipated turnaround time for delivery?"
      
      },
      {
        "key": 4,
        "answers": "We at World Enterprises use the following software to determine our labor and material costs, Plan Swift,  RS Means,  Blue beam, Quest Estimating,  Fast PIPE,  Fast DUCT,  IMHS Marks Systems,   Trimble",
        "question_title": "What is the primary estimating software that we employ?"
      
      },
      {
        "key": 5,
        "answers": "To keep costs down, you must outsource estimation services in the modern construction industry. As a result, there are significant cost reductions and simultaneous quality assurances. Besides, outsourcing your quantity take-offs may save a lot of time and financial burden. You may be able to use the time and fund thus saved to complete other crucial activities. These include actions like growing your firm, submitting more project bids, accurately pricing your labor, etc.",
        "question_title": "Why do you need to use World Enterprises construction estimators?"
      
      },
      {
        "key": 6,
        "answers": "World Enterprises consists of a skilled team of general Construction Estimators and Material Take-off Specialists who have a diverse portfolio.",
        "question_title": "WHO ARE OUR TRADES GENERAL CONTRACTORS?"
      
      },
      {
        "key": 7,
        "answers": "Our portfolio in concrete take-off services includes Dams, Bridges, Residential buildings, Commercial buildings, Marine structures, Highways, Driveways, etc",
        "question_title": "WHO ARE OUR CONCRETE CONTRACTORS?"
      
      },
      {
        "key": 8,
        "answers": "The range of plumbing estimating services covers Material Take-offs, Budget Estimates, Conceptual Estimates, Design Development Estimates, Bid Estimates, Bid Reviews, etc",
        "question_title": "WHAT IS THE RANGE OF PLUMBING CONTRACTORS?"
      
      },
      {
        "key": 9,
        "answers":"Our deliverables for Plumbing estimates include take-off sheets, Material pricing, Labour costs, drawing plans Take-off summary, and Complete bid." ,
        "question_title": "DO YOU HAVE ROOFING CONTRACTORS?"
      
      },
      {
        "key": 10,
        "answers":"The range of Electrical Estimating services covers Electric Cost Estimates, Material Take-offs, Cost per Square Foot, Project Cost, CAD Services, Value Engineering, etc." ,
        "question_title": "DO YOU HAVE ELECTRICAL CONTRACTORS?"
      
      },
      {
        "key": 11,
        "answers": "With our site work estimation services, we consider all other elements such as construction equipment, insurance, logistics, safety, permits, contingencies, etc",
        "question_title": "DO YOU ALSO CATER FOR SITE WORK/ GRADING?"
      
      },
      {
        "key": 12,
        "answers": "Estimates for interior and exterior finishes are crucial for building development. Allow us to assist you with our efficient and precise estimation services.",
        "question_title": "CAN YOU MANAGE INTERIOR & EXTERIOR FINISHES?"
      
      },
      {
        "key": 13,
        "answers": "If you are searching for the best masonry estimating services, World Enterprises Estimates are at your service. Apart from that, we also offer masonry brick wall 3-D design services.",
        "question_title": "WHAT MASONARY CONTRACTORS SERVICES DO YOU OFFER?"
      
      },
      {
        "key": 14,
        "answers": "When it comes to economical lumber estimates, woodwork contractors, framers, builders and carpenters are among our regular clientele.",
        "question_title": "WHAT IS WORLD ENTERPRISES, LUMBER CONTRACTORS, CLIENTELE?"
      
      },
      {
        "key": 15,
        "answers": "92% Bid-Hit Ratio, Accurate And Detailed Estimates,  Get A Quote, Receive Estimate, 24/7 Customer Support",
        "question_title": "WHAT DO WORLD ENTERPRISES OFFER IN NUTSHELL?"
      
      }
  
        
    ]
useEffect(() => {
    setPagination(num)
console.log("questions",questions)  
if(pagination == 1){
   setArr( questions.slice(1,5))
}
if(pagination == 2){
    setArr( questions.slice(5,10))
 }
 if(pagination == 3){
    setArr( questions.slice(10,15))
 } 
}

, [num])

const quriesList = arr.map(query => (<Faqs key={query.id} query={query} />))

  return (
    <div className={styles.questions}>
        {quriesList}        
    </div>
  )
}

export default Qna