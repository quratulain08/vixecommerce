import React from 'react';
import './LandingPage.css';
import GetStarted from '../component/LandingPage/GetStarted/GetStarted';
import WhatWeOffer from '../component/LandingPage/WhatWeOffer/WhatWeOffer';
import WhyChooseUs from '../component/LandingPage/WhyChooseUs/WhyChooseUs';
import Testimonials from '../component/LandingPage/Testimonial/Testimonial';

export default function LandingPage() {
  return (
    <div className="landing">
      <GetStarted />
      <WhatWeOffer/>
      <WhyChooseUs/>
      <Testimonials/>
    </div>
  );
}