
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/LandingPage/Header/Header';
import ContactUs from './component/LandingPage/ContactUs/ContactUs';
import Footer from './component/LandingPage/Footer/Footer';
import "./App.css";
import LandingPage from './pages/LandingPage';


function App() {
  return (
    <Router>
      <div className="header">
        <Header />
      </div>
      <Routes>
        {/* Landing Page ROUTES */}
        <Route path="/" element={<LandingPage />} />
        {/* VERTICAL ROUTES */}

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
