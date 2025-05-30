"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import "./CaseStudy1.css"
import casestudy1Image1 from "../../../assets/casestudy1-1.png"
import casestudy1Image2 from "../../../assets/casestudy1-2.png"
import { useNavigate } from "react-router-dom"
import Testimonials from "../../LandingPage/Testimonial/Testimonial"
import FeaturedPartners from "../../LandingPage/FeaturedPartners/FeaturedPartners"

const CaseStudy1 = () => {
  const statsRef = useRef(null)
  const navigate = useNavigate()

  const handleGetStartedClick = () => {
    navigate("/contact")
  }

  // Animation for stats when they come into view
  useEffect(() => {
    window.scrollTo(0, 0)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".vx-stat-card").forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("animate")
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])

  return (
    <section className="case-study-section">
      {/* Hero Section */}
      <div className="case-hero">
        <div className="hero-background">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
          <div className="hero-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`particle particle-${i + 1}`}></div>
            ))}
          </div>
        </div>
        <div className="case-container">
          <div className="case-hero-content" style={{ maxWidth: "600px" }}>
            <div className="hero-badge">CASE STUDY</div>
            <h1 className="case-hero-title">
              European market <span className="gradient-text">expansion</span>
            </h1>
            <div className="hero-line"></div>
            <p className="case-hero-description">
              How we launched an Amazon store in Germany and expanded across Europe, achieving €2.3M revenue and
              extraordinary growth in just over a year.
            </p>
            <button className="case-cta-button" onClick={handleGetStartedClick}>
              Request an audit <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="vx-stats-section" ref={statsRef}>
        <div className="case-container">
          <div className="vx-stats-grid">
            <div className="vx-stat-card vx-stat-blue">
              <div className="vx-stat-decoration"></div>
              <div className="vx-stat-content">
                <p className="vx-stat-label">Yearly Revenue</p>
                <div className="vx-stat-value-container">
                  <h3 className="vx-stat-value">€2.3M+</h3>
                </div>
              </div>
            </div>
            <div className="vx-stat-card vx-stat-teal">
              <div className="vx-stat-decoration"></div>
              <div className="vx-stat-content">
                <p className="vx-stat-label">ACOS</p>
                <div className="vx-stat-value-container">
                  <h3 className="vx-stat-value">1.83%</h3>
                </div>
                <p className="vx-stat-subtext">Reduced from 13.86%</p>
              </div>
            </div>
            <div className="vx-stat-card vx-stat-blue">
              <div className="vx-stat-decoration"></div>
              <div className="vx-stat-content">
                <p className="vx-stat-label">Monthly Units Sold</p>
                <div className="vx-stat-value-container">
                  <h3 className="vx-stat-value">145K+</h3>
                </div>
              </div>
            </div>
            <div className="vx-stat-card vx-stat-teal">
              <div className="vx-stat-decoration"></div>
              <div className="vx-stat-content">
                <p className="vx-stat-label">Return on Investment</p>
                <div className="vx-stat-value-container">
                  <h3 className="vx-stat-value">61.18%</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Content */}
      <div className="case-content">
        <div className="case-container">
          <div className="case-section">
            <h2 className="case-section-title">How we did it</h2>
            <h3 className="case-section-subtitle">Discover how we solved the problem</h3>
            <div className="vx-centered-content">
              <p>
                In March 2023, we launched an Amazon store in Germany, initiating a remarkable growth journey. Over the
                next year, the store expanded its presence across major European markets, including Italy, Spain,
                France, and the UK.
              </p>
              <p>
                From November to mid-December 2024, the store witnessed consistent growth, with daily sales surging
                above €15,000 by December. Despite facing challenges related to inventory management during this rapid
                scaling phase, strategic recommendations by VixCommerce ensured record-breaking sales and profitability.
              </p>
              <p>
                With 628 open orders and a 100% featured offer rate, the store's performance highlights a strong
                operational foundation, leading the business toward establishing a seven-figure brand across Europe.
              </p>
            </div>
          </div>

          <div className="case-section-alt">
            <h2 className="case-section-title">Challenge, Solution & Results</h2>
            <div className="case-challenge-section">
              <h3 className="case-card-title">Challenge</h3>
              <div className="case-text-with-image">
                <div className="case-text">
                  <p>
                    Launching a new Amazon store in a competitive European market with no established presence or
                    customer base. Scaling rapidly across multiple countries while maintaining profitability and
                    managing inventory effectively during periods of explosive growth.
                  </p>
                </div>
                <div className="case-image">
                  <img src={casestudy1Image1 || "/placeholder.svg"} alt="Case Study Challenge" className="case-img" />
                </div>
              </div>
            </div>

            <div className="case-solution-section">
              <h3 className="case-card-title">Solution</h3>
              <p className="case-card-text">
                Implemented a strategic market expansion plan with optimized listings for each country. Developed
                targeted advertising campaigns with continuous optimization, reducing ACOS from 13.86% to just 1.83%
                while maintaining visibility and growth.
              </p>
            </div>

            <div className="case-result-section">
              <h3 className="case-card-title">Result</h3>
              <div className="case-text-with-image">
                <div className="case-text">
                  <p>
                    After launching in March 2023, the business achieved remarkable growth, culminating in monthly
                    revenues exceeding €2.3 million by November 2024. This optimization, combined with strong sales
                    volume of over 145,000 units, resulted in a monthly net profit of nearly €300,000 and an impressive
                    ROI of 61.18%.
                  </p>
                </div>
                <div className="case-image">
                  <img src={casestudy1Image2 || "/placeholder.svg"} alt="Growth Chart" className="case-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="case-container">
        <div className="service-cta">
          <div className="cta-background">
            <div className="cta-shape cta-shape-1"></div>
            <div className="cta-shape cta-shape-2"></div>
          </div>
          <h2>Ready to launch your Amazon business?</h2>
          <p>
            Partner with VixCommerce and start your Amazon journey with a strong foundation. Our team of experts is
            ready to help you achieve your e-commerce goals.
          </p>
          <button className="cta-button" onClick={handleGetStartedClick}>
            Schedule a call <ArrowRight size={16} className="btn-icon" />
          </button>
        </div>
      </div>

      <Testimonials />
      <FeaturedPartners />
    </section>
  )
}

export default CaseStudy1
