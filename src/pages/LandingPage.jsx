import React from 'react';
import './LandingPage.css';
import GetStarted from '../component/LandingPage/GetStarted/GetStarted';
import WhatWeOffer from '../component/LandingPage/WhatWeOffer/WhatWeOffer';
import WhyChooseUs from '../component/LandingPage/WhyChooseUs/WhyChooseUs';
import Testimonials from '../component/LandingPage/Testimonial/Testimonial';
import CaseStudies from '../component/LandingPage/CaseStudies/CaseStudies';
import FAQs from '../component/LandingPage/FAQs/FAQs';


export default function LandingPage() {
  return (
    <div className="landing">
      <GetStarted />
      {/* <About/> */}
      <WhatWeOffer/>
      <WhyChooseUs/>
      <CaseStudies/>
      <Testimonials/>
  
      <FAQs/>
    </div>
  );
}