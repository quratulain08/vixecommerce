"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, CheckCircle, TrendingUp, BarChart2, Target, DollarSign, Search, Zap } from "lucide-react"
import "./PPCManagement.css"
import { useNavigate } from "react-router-dom"
import Testimonial from "../../LandingPage/Testimonial/Testimonial"
import Brand from "../../LandingPage/FeaturedPartners/FeaturedPartners"

const PPCManagement = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const strategyRef = useRef([])
  const resultsRef = useRef([])
  const navigate = useNavigate()

  const handleGetStartedClick = () => {
    navigate("/contact")
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              entry.target.classList.add("animate")
            } else if (entry.target === contentRef.current) {
              entry.target.classList.add("animate")
            } else {
              strategyRef.current.forEach((strategy, index) => {
                if (strategy && entry.target === strategy) {
                  setTimeout(() => {
                    strategy.classList.add("animate")
                  }, index * 150)
                }
              })

              resultsRef.current.forEach((result, index) => {
                if (result && entry.target === result) {
                  setTimeout(() => {
                    result.classList.add("animate")
                  }, index * 100)
                }
              })
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    if (contentRef.current) {
      observer.observe(contentRef.current)
    }

    strategyRef.current.forEach((strategy) => {
      if (strategy) {
        observer.observe(strategy)
      }
    })

    resultsRef.current.forEach((result) => {
      if (result) {
        observer.observe(result)
      }
    })

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      if (contentRef.current) {
        observer.unobserve(contentRef.current)
      }
      strategyRef.current.forEach((strategy) => {
        if (strategy) {
          observer.unobserve(strategy)
        }
      })
      resultsRef.current.forEach((result) => {
        if (result) {
          observer.unobserve(result)
        }
      })
    }
  }, [])

  const ppcStrategies = [
    {
      icon: <Search size={24} />,
      title: "Keyword Research",
      description: "We identify high-converting keywords with optimal search volume and competition levels.",
      color: "blue",
    },
    {
      icon: <Target size={24} />,
      title: "Campaign Structure",
      description: "We build organized, strategic campaign structures for maximum control and performance.",
      color: "green",
    },
    {
      icon: <DollarSign size={24} />,
      title: "Bid Optimization",
      description: "We implement dynamic bidding strategies to maximize ROI and minimize ACoS.",
      color: "blue",
    },
    {
      icon: <BarChart2 size={24} />,
      title: "Performance Analysis",
      description: "We continuously monitor and analyze campaign data to identify optimization opportunities.",
      color: "green",
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Scaling Strategies",
      description: "We develop strategies to scale successful campaigns while maintaining profitability.",
      color: "blue",
    },
  ]

  const benefits = [
    "Increase visibility for your products",
    "Drive targeted traffic to your listings",
    "Boost sales and revenue",
    "Improve organic rankings",
    "Maximize return on ad spend",
    "Stay ahead of competitors",
  ]

  const results = [
    {
      icon: <Target size={32} />,
      number: "30%",
      description: "Average reduction in ACoS (Advertising Cost of Sale)",
      color: "blue",
    },
    {
      icon: <TrendingUp size={32} />,
      number: "45%",
      description: "Average increase in conversion rates from PPC traffic",
      color: "green",
    },
    {
      icon: <BarChart2 size={32} />,
      number: "60%",
      description: "Average improvement in organic rankings for target keywords",
      color: "purple",
    },
    {
      icon: <Zap size={32} />,
      number: "3X",
      description: "Average return on ad spend (ROAS) for our clients",
      color: "orange",
    },
  ]

  return (
    <section className="ppcm-section">
      <div className="ppcm-hero" ref={sectionRef}>
        <div className="ppcm-hero-background">
          <div className="ppcm-hero-shape ppcm-shape-1"></div>
          <div className="ppcm-hero-shape ppcm-shape-2"></div>
          <div className="ppcm-hero-shape ppcm-shape-3"></div>
          <div className="ppcm-hero-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`ppcm-particle ppcm-particle-${i + 1}`}></div>
            ))}
          </div>
        </div>
        <div className="ppcm-hero-content">
          <div className="ppcm-hero-badge">OUR SERVICES</div>
          <h1>
            Amazon PPC
            <br />
            <span className="ppcm-gradient-text">management</span>
          </h1>
          <div className="ppcm-hero-line"></div>
          <p className="ppcm-hero-subtitle">Drive targeted traffic and maximize your return on ad spend</p>
          <button className="ppcm-hero-button" onClick={handleGetStartedClick}>
            Get Started <ArrowRight size={16} className="ppcm-btn-icon" />
          </button>
        </div>
      </div>

      <div className="ppcm-container">
        <div className="ppcm-content" ref={contentRef}>
          <div className="overview-section">
        
            <h2 className="ppcm-section-title">Strategic PPC management</h2>
            <p>
              In today's competitive Amazon marketplace, effective advertising is essential for visibility and sales.
              Our Amazon PPC Management service helps you navigate the complex world of Amazon advertising to maximize
              your return on investment.
            </p>
            <p>
              We specialize in creating and managing Pay-Per-Click (PPC) advertising campaigns that drive targeted
              traffic to your listings. Our data-driven approach ensures that your ad spend is optimized for maximum
              results, whether your goal is to launch new products, increase sales, or improve organic rankings.
            </p>
            <p>
              We have a proven track record of helping clients who started from scratch become the best sellers in their
              niches through strategic PPC management. Our ultimate goal is to achieve top organic rankings while
              minimizing your Total Advertising Cost of Sale (TACOS) in the long run.
            </p>
          </div>

          <div className="ppcm-strategies">
            {/* <div className="ppcm-section-badge">OUR APPROACH</div> */}
            <h2 className="ppcm-section-title">Our PPC strategies</h2>

            <div className="ppcm-strategies-grid">
              {ppcStrategies.map((strategy, index) => (
                <div
                  key={index}
                  className={`ppcm-strategy-card ppcm-strategy-${strategy.color}`}
                  ref={(el) => (strategyRef.current[index] = el)}
                >
                  <div className="step-number">{index + 1}</div>
                  <div className="ppcm-strategy-icon">{strategy.icon}</div>
                  <h3>{strategy.title}</h3>
                  <p>{strategy.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="ppcm-process">
            {/* <div className="ppcm-section-badge">OUR PROCESS</div> */}
            <h2 className="ppcm-section-title">How we manage your PPC campaigns</h2>

            <div className="ppcm-process-timeline">
              <div className="ppcm-timeline-item">
                <div className="ppcm-timeline-number">1</div>
                <div className="ppcm-timeline-content">
                  <h3>Account analysis</h3>
                  <p>
                    We begin by analyzing your current PPC performance, product listings, and competitors to identify
                    opportunities and challenges.
                  </p>
                </div>
              </div>

              <div className="ppcm-timeline-item">
                <div className="ppcm-timeline-number">2</div>
                <div className="ppcm-timeline-content">
                  <h3>Strategy Development</h3>
                  <p>
                    Based on our analysis, we develop a customized PPC strategy aligned with your business goals and
                    budget.
                  </p>
                </div>
              </div>

              <div className="ppcm-timeline-item">
                <div className="ppcm-timeline-number">3</div>
                <div className="ppcm-timeline-content">
                  <h3>Campaign Setup</h3>
                  <p>
                    We create optimized campaign structures with strategic keyword targeting, bidding strategies, and ad
                    placements.
                  </p>
                </div>
              </div>

              <div className="ppcm-timeline-item">
                <div className="ppcm-timeline-number">4</div>
                <div className="ppcm-timeline-content">
                  <h3>Continuous Optimization</h3>
                  <p>
                    We continuously monitor and optimize your campaigns, adjusting bids, refining keywords, and
                    eliminating underperforming elements.
                  </p>
                </div>
              </div>

              <div className="ppcm-timeline-item">
                <div className="ppcm-timeline-number">5</div>
                <div className="ppcm-timeline-content">
                  <h3>Reporting & Analysis</h3>
                  <p>
                    We provide regular performance reports with insights and recommendations for ongoing improvement and
                    scaling.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="benefits-section">
            <h3 className="benefits-title">Benefits of our PPC management</h3>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon-wrapper">
                    <CheckCircle size={24} className="benefit-icon" />
                  </div>
                  <span className="benefit-text">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ppcm-cta">
          <div className="ppcm-cta-background">
            <div className="ppcm-cta-shape ppcm-cta-shape-1"></div>
            <div className="ppcm-cta-shape ppcm-cta-shape-2"></div>
          </div>
          <h2>Ready to maximize your Amazon ad performance?</h2>
          <p>
            Partner with VixCommerce for expert PPC management that drives results. Our team of Amazon advertising
            specialists will help you create and optimize campaigns that increase visibility, sales, and profitability.
          </p>
          <button className="ppcm-cta-button" onClick={handleGetStartedClick}>
            Schedule a call <ArrowRight size={16} className="ppcm-btn-icon" />
          </button>
        </div>
      </div>
      <Testimonial />
      <Brand />
    </section>
  )
}

export default PPCManagement
