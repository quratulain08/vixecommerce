import React from 'react';
import './LandingPage.css';
import GetStarted from '../component/LandingPage/GetStarted/GetStarted';
import WhatWeOffer from '../component/LandingPage/WhatWeOffer/WhatWeOffer';

export default function LandingPage() {
  return (
    <div className="landing">
      <GetStarted />
      <WhatWeOffer/>
    </div>
  );
}