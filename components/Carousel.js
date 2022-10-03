import React ,{Component}from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import sv1 from '../public/sv1.png';
import sv2 from '../public/sv2.png';
import sv3 from '../public/sv3.png';
import sv4 from '../public/sv4.png';
import sv5 from '../public/sv5.png';
import sv6 from '../public/sv6.png';
import sv7 from '../public/sv7.png';
import sv8 from '../public/sv8.png';
import sv9 from '../public/sv9.png';
import Section5Card from './Section5Card';

export default class Carousel extends Component {
  render() {
    return (
      <CarouselProvider 
        isPlaying={true}
        naturalSlideWidth={1}
        naturalSlideHeight={1}
        visibleSlides={3}
        totalSlides={9}
      >
        <Slider>
          <Slide index={0}> <Section5Card img={sv1} heading="GENERAL CONTRACTORS"            des="World Enterprises consists of a skilled team of general Construction Estimators and Material Takeoff Specialists who have a diverse portfolio."  />                           </Slide>
          <Slide index={1}> <Section5Card img={sv2} heading="CONCRETE CONTRACTORS"           des="Our portfolio in concrete takeoff services includes Dams Bridges, Residential buildings, Commercial buildings, Marine structures, Highways, Driveways etc" />                 </Slide>
          <Slide index={2}> <Section5Card img={sv3} heading="PLUMBING CONTRACTORS"           des="The range of plumbing estimating services covers Material Takeoffs, Budget Estimates, Conceptual Estimates, Design Development Estimates, Bid Estimates, Bid Reviews etc" />  </Slide>
          <Slide index={3}> <Section5Card img={sv4} heading="ROOFING CONTRACTORS"            des="Our deliverables for Plumbing estimates include takeoff sheets, Material pricing, Labor costs, drawing plans Takeoff summary and Complete bid." />                            </Slide>
          <Slide index={4}> <Section5Card img={sv5} heading="ELECTRICAL CONTRACTORS"         des="The range of Electrical Estimating services cover Electric Cost Estimates, Material Takeoffs, Cost per Square Foot Project Cost, CAD Services, Value Engineering etc." />     </Slide>
          <Slide index={5}> <Section5Card img={sv6} heading="SITE WORK/ GRADING"             des="With our site work estimation services, we consider all other elements such as construction equipment, insurance, logistics, safety, permits, contingencies, etc" />          </Slide>
          <Slide index={6}> <Section5Card img={sv7} heading="INTERIOR & EXTERIOR FINISHES"   des="Estimates for interior and exterior finishes are crucial for building development. Allow us to assist you with our efficient and precise estimation services." />             </Slide>
          <Slide index={7}> <Section5Card img={sv8} heading="MASONARY CONTRACTORS"           des="If you are searching for the best masonry estimating services, World estimating is at your service. Apart from that, we also offer masonry brick wall 3d design services." /> </Slide>
          <Slide index={8}> <Section5Card img={sv9} heading="LUMBER CONTRACTORS"             des="When it comes to economical lumber estimates, woodwork contractors, framers, builders, and carpenters are among our regular clientele. " />                                   </Slide>
        </Slider>
        {/* <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext> */}
      </CarouselProvider>
    );
  }
}