"use client"

import { useNavigate } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import "./CTA.css"

const CTA = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/contact');
  };

  return (
    <section className="service-section">
      <div className="service-cta">
        <div className="cta-background">
          <div className="cta-shape cta-shape-1"></div>
          <div className="cta-shape cta-shape-2"></div>
        </div>
        <h2>Ready to Launch Your Amazon Business?</h2>
        <p>
          Partner with Vix Commerce and start your Amazon journey with a strong foundation. Our team of experts is
          ready to help you achieve your e-commerce goals.
        </p>
        <button className="cta-button" onClick={handleGetStartedClick}>
          Request an audit <ArrowRight size={16} className="btn-icon" />
        </button>
      </div>
    </section>
  )
}

export default CTA
