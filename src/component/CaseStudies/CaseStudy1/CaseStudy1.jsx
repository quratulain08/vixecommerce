"use client"

import { useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import "./CaseStudy1.css"
import casestudy1Image1 from "../../../assets/casestudy1-1.png"
import casestudy1Image2 from "../../../assets/casestudy1-2.png"

const CaseStudy1 = () => {
  const statsRef = useRef(null)

  // Animation for stats when they come into view
  useEffect(() => {
    window.scrollTo(0,0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".stat-item").forEach((item, index) => {
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
        <div className="case-container">
          <div className="case-hero-content">
            <div className="case-tag">CASE STUDY #1</div>
            <h1 className="case-hero-title">
              European Market <span className="case-highlight">Expansion</span>
              <br />
              From Zero to <span className="case-highlight">€2.3 Million</span> Monthly
            </h1>
            <p className="case-hero-description">
              Discover how we helped a new Amazon store launch in Germany and expand across Europe, achieving
              extraordinary growth and profitability in just over a year.
            </p>
            <button className="case-cta-button">
              Get Similar Results <ArrowUpRight size={18} />
            </button>
          </div>
          <div className="case-hero-image">
            <div className="case-image-placeholder">
              <div className="case-image-shape"></div>
              <div className="case-image-circle"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="case-stats" ref={statsRef}>
        <div className="case-container">
          <div className="stats-grid">
            <div className="stat-item stat-blue">
              <h3 className="stat-number">€2.3M+</h3>
              <p className="stat-label">Monthly Revenue</p>
            </div>
            <div className="stat-item stat-green">
              <h3 className="stat-number">1.83%</h3>
              <p className="stat-label">ACOS (Reduced from 13.86%)</p>
            </div>
            <div className="stat-item stat-purple">
              <h3 className="stat-number">145K+</h3>
              <p className="stat-label">Monthly Units Sold</p>
            </div>
            <div className="stat-item stat-orange">
              <h3 className="stat-number">61.18%</h3>
              <p className="stat-label">Return on Investment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Content */}
      <div className="case-content">
        <div className="case-container">
          <div className="case-section">
            <h2 className="case-section-title">How We Did It</h2>
            <h3 className="case-section-subtitle">Discover How We Solved The Problem</h3>
            <div className="case-text-with-image">
              <div className="case-text">
                <p>
                  In March 2023, we launched an Amazon store in Germany, initiating a remarkable growth journey. Over
                  the next year, the store expanded its presence across major European markets, including Italy, Spain,
                  France, and the UK.
                </p>
                <p>
                  From November to mid-December 2024, the store witnessed consistent growth, with daily sales surging
                  above €15,000 by December. Despite facing challenges related to inventory management during this rapid
                  scaling phase, strategic recommendations by VixCommerce ensured record-breaking sales and
                  profitability.
                </p>
                <p>
                  With 628 open orders and a 100% featured offer rate, the store's performance highlights a strong
                  operational foundation, leading the business toward establishing a seven-figure brand across Europe.
                </p>
              </div>
              <div className="case-image">
                <div className="case-image-placeholder">
                  <div className="case-image-shape"></div>
                  <div className="case-image-circle"></div>
                  <div className="case-image-stats">
                    <div className="case-stat">
                      <span className="case-stat-number">€15K+</span>
                      <span className="case-stat-label">Daily Sales</span>
                    </div>
                    <div className="case-stat">
                      <span className="case-stat-number">628</span>
                      <span className="case-stat-label">Open Orders</span>
                    </div>
                    <div className="case-stat">
                      <span className="case-stat-number">100%</span>
                      <span className="case-stat-label">Featured Rate</span>
                    </div>
                  </div>
                </div>
              </div>
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
    </section>
  )
}

export default CaseStudy1
