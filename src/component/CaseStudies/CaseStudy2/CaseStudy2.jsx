"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import "./CaseStudy2.css"
import casestudy2Image1 from "../../../assets/casestudy2-1.png"
import casestudy2Image2 from "../../../assets/casestudy2-2.png"
import { useNavigate } from "react-router-dom"
import Testimonials from "../../LandingPage/Testimonial/Testimonial"
import FeaturedPartners from "../../LandingPage/FeaturedPartners/FeaturedPartners"

const CaseStudy2 = () => {
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
            entry.target.querySelectorAll(".cs2-stat-item").forEach((item, index) => {
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
    <section className="cs2-section">
      {/* Hero Section */}
      <div className="cs2-hero">
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
        <div className="cs2-container">
          <div className="cs2-hero-content">
            <div className="hero-badge">CASE STUDY</div>
            <h1 className="cs2-hero-title">
              Double sales with <span className="gradient-text">half d-Spend</span>
              {/* <br />
              For Amazon UK Brand */}
            </h1>
            <div className="hero-line"></div>
            <p className="cs2-hero-description">
              See how we transformed a struggling TV brand on Amazon UK by optimizing listings and reducing ad spend
              while dramatically increasing sales and organic rankings.
            </p>
            <button className="cs2-cta-button" onClick={handleGetStartedClick}>
              Request an Audit <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section
      <div className="cs2-stats" ref={statsRef}>
        <div className="cs2-container">
          <div className="cs2-stats-grid">
            <div className="cs2-stat-item cs2-stat-blue">
              <h3 className="cs2-stat-number">100+</h3>
              <p className="cs2-stat-label">TV Products Optimized</p>
            </div>
            <div className="cs2-stat-item cs2-stat-green">
              <h3 className="cs2-stat-number">63%</h3>
              <p className="cs2-stat-label">Reduction in TACOS</p>
            </div>
            <div className="cs2-stat-item cs2-stat-purple">
              <h3 className="cs2-stat-number">50%</h3>
              <p className="cs2-stat-label">Increase in Organic Sales</p>
            </div>
            <div className="cs2-stat-item cs2-stat-orange">
              <h3 className="cs2-stat-number">2</h3>
              <p className="cs2-stat-label">Months to Complete Optimization</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Case Study Content */}
      <div className="cs2-content">
        <div className="cs2-container">
          <div className="cs2-section">
            <h2 className="cs2-section-title">How We Did It</h2>
            <h3 className="cs2-section-subtitle">How We Transformed Their Amazon Presence</h3>
            <div className="cs2-approach-grid">
              <div className="cs2-approach-item">
                <div className="cs2-approach-number">01</div>
                <h4 className="cs2-approach-title">Comprehensive Audit</h4>
                <p className="cs2-approach-text">
                  We conducted a thorough analysis of all 100+ product listings, identifying key areas for improvement
                  in images, copy, and keyword strategy.
                </p>
              </div>
              <div className="cs2-approach-item">
                <div className="cs2-approach-number">02</div>
                <h4 className="cs2-approach-title">Content Optimization</h4>
                <p className="cs2-approach-text">
                  Our copywriters completely revamped the bullet points to highlight key features and benefits while
                  incorporating high-value keywords.
                </p>
              </div>
              <div className="cs2-approach-item">
                <div className="cs2-approach-number">03</div>
                <h4 className="cs2-approach-title">Visual Enhancement</h4>
                <p className="cs2-approach-text">
                  We created new product images that clearly showcased the unique selling propositions of each TV model,
                  improving conversion rates.
                </p>
              </div>
              <div className="cs2-approach-item">
                <div className="cs2-approach-number">04</div>
                <h4 className="cs2-approach-title">Ad Campaign Refinement</h4>
                <p className="cs2-approach-text">
                  We restructured PPC campaigns to focus on high-converting keywords, eliminating wasted ad spend and
                  improving TACOS dramatically.
                </p>
              </div>
            </div>
          </div>

          <div className="cs2-section-alt">
            <h2 className="cs2-section-title">Challenge, Solution & Results</h2>
            <div className="cs2-problem-section">
              <h3 className="cs2-card-title">Challenge</h3>
              <div className="cs2-text-with-image">
                <div className="cs2-text">
                  <p>
                    The listings were lacking proper images and bullet points for all the listings. The ACOS of the
                    account was at 15% whereas the previous average was 12%.
                  </p>
                </div>
                <div className="cs2-image">
                  <img src={casestudy2Image1 || "/placeholder.svg"} alt="Problem visualization" className="cs2-img" />
                </div>
              </div>
            </div>

            <div className="cs2-solution-section">
              <h3 className="cs2-card-title">Solution</h3>
              <p className="cs2-card-text">
                The copywriting of bullets was completely revamped. New listing images were uploaded that showed the
                unique selling prepositions of the products. Considering the client wanted quick results so we worked
                over time and got 50+ listings within a month. The entire catalog was optimized over a span of 2 months.
              </p>
            </div>

            <div className="cs2-result-section">
              <h3 className="cs2-card-title">Result</h3>
              <div className="cs2-text-with-image">
                <div className="cs2-text">
                  <p>
                    The TACOS dropped from 15% to 5.57% which is 63% decrease in Ad-Spend. The organic ranks and sales
                    increased by 50% year on year. This marked a turning point for the entire account.
                  </p>
                </div>
                <div className="cs2-image">
                  <img src={casestudy2Image2 || "/placeholder.svg"} alt="Results chart" className="cs2-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials/>
      <FeaturedPartners/>
    </section>
  )
}

export default CaseStudy2
