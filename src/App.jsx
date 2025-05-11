
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/LandingPage/Header/Header';
import ContactUs from './component/LandingPage/ContactUs/ContactUs';
import Footer from './component/LandingPage/Footer/Footer';
import "./App.css";
import LandingPage from './pages/LandingPage';
import SEO from './component/Services/SEO/SEO';
import AmazonPPCManagement from './component/Services/AmazonPPCManagement/AmazonPPCManagement';
import AmazonBrandManagement from './component/Services/AmazonBrandManagement/AmazonBrandManagement';
import CaseStudy1 from './component/CaseStudies/CaseStudy1/CaseStudy1';
import CaseStudy2 from './component/CaseStudies/CaseStudy2/CaseStudy2';
import ProductLaunch from './component/Services/ProductLaunch/ProductLaunch';
import AccountMaintenance from './component/Services/AccountMaintenance/AccountMaintenance';
import InfluencerMarketing from './component/Services/InfluencerMarketing/InfluencerMarketing';
import ProductDevelopment from './component/Services/ProductDevelopment/ProductDevelopment';
import CaseStudy3 from './component/CaseStudies/CaseStudy3/CaseStudy3';
import CaseStudy4 from './component/CaseStudies/CaseStudy4/CaseStudy4';
import AboutUs from './component/AboutUs/AboutUs';
import Team from './component/Team/Team';

function App() {
  return (
    <Router>
      <div className="header">
        <Header />
      </div>
      <Routes>
        {/* Landing Page ROUTES */}
        <Route path="/" element={<LandingPage />} />
        {/* Services ROUTES */}
        <Route path ="Services/SEO" element={<SEO/>}/>
        <Route path ="Services/AmazonPPCManagement" element={<AmazonPPCManagement/>}/>
        <Route path ="Services/AmazonBrandManagement" element={<AmazonBrandManagement/>}/>
        <Route path ="Services/ProductLaunch" element={<ProductLaunch/>}/>
         <Route path ="Services/AccountMaintenance" element={<AccountMaintenance/>}/>
          <Route path ="Services/InfluencerMarketing" element={<InfluencerMarketing/>}/>
          <Route path ="Services/ProductDevelopment" element={<ProductDevelopment/>}/>
        {/* case studies */}
        <Route path ="CaseStudies/CaseStudy1" element={<CaseStudy1/>}/>
        <Route path ="CaseStudies/CaseStudy2" element={<CaseStudy2/>}/>
        <Route path ="CaseStudies/CaseStudy3" element={<CaseStudy3/>}/>
        <Route path ="CaseStudies/CaseStudy4" element={<CaseStudy4/>}/>
        
        {/* AboutUS */}
        <Route path ="/AboutUs" element={<AboutUs/>}/>
        <Route path ="/Team" element={<Team/>}/>

      </Routes>
      <div className="ContactUs">
        <ContactUs />
        </div>

     
      <div className="footer">
        <Footer />
        </div>

      

    </Router>

  );
}

export default App;
