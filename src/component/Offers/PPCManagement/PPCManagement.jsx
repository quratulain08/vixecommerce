"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, CheckCircle, TrendingUp, BarChart2, Target, DollarSign, Search } from "lucide-react"
import "./PPCManagement.css"

const PPCManagement = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const strategyRef = useRef([])

  useEffect(() => {
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

  return (
    <section className="ppc-section">
      <div className="ppc-hero" ref={sectionRef}>
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
        <div className="ppc-hero-content">
          <div className="hero-badge">OUR SERVICES</div>
          <h1>
            AMAZON PPC
            <br />
            <span className="gradient-text">MANAGEMENT</span>
          </h1>
          <div className="hero-line"></div>
          <p className="hero-subtitle">Drive targeted traffic and maximize your return on ad spend</p>
          <button className="hero-button">
            Get Started <ArrowRight size={16} className="btn-icon" />
          </button>
        </div>
      </div>

      <div className="ppc-container">
        <div className="ppc-content" ref={contentRef}>
          <div className="ppc-text">
            <div className="section-badge">OVERVIEW</div>
            <h2 className="section-title">Strategic PPC Management</h2>
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

          <div className="ppc-benefits">
            <h3>Benefits of Our PPC Management</h3>
            <ul className="benefits-list">
              {benefits.map((benefit, index) => (
                <li key={index} className="benefit-item">
                  <CheckCircle size={20} className="benefit-icon" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="ppc-strategies">
          <div className="section-badge">OUR APPROACH</div>
          <h2 className="section-title">Strategic PPC Management</h2>

          <div className="strategies-grid">
            {ppcStrategies.map((strategy, index) => (
              <div
                key={index}
                className={`strategy-card strategy-${strategy.color}`}
                ref={(el) => (strategyRef.current[index] = el)}
              >
                <div className="strategy-icon">{strategy.icon}</div>
                <h3>{strategy.title}</h3>
                <p>{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="ppc-process">
          <div className="section-badge">OUR PROCESS</div>
          <h2 className="section-title">How We Manage Your PPC Campaigns</h2>

          <div className="process-timeline">
            <div className="timeline-item">
              <div className="timeline-number">1</div>
              <div className="timeline-content">
                <h3>Account Analysis</h3>
                <p>
                  We begin by analyzing your current PPC performance, product listings, and competitors to identify
                  opportunities and challenges.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">2</div>
              <div className="timeline-content">
                <h3>Strategy Development</h3>
                <p>
                  Based on our analysis, we develop a customized PPC strategy aligned with your business goals and
                  budget.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">3</div>
              <div className="timeline-content">
                <h3>Campaign Setup</h3>
                <p>
                  We create optimized campaign structures with strategic keyword targeting, bidding strategies, and ad
                  placements.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">4</div>
              <div className="timeline-content">
                <h3>Continuous Optimization</h3>
                <p>
                  We continuously monitor and optimize your campaigns, adjusting bids, refining keywords, and
                  eliminating underperforming elements.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">5</div>
              <div className="timeline-content">
                <h3>Reporting & Analysis</h3>
                <p>
                  We provide regular performance reports with insights and recommendations for ongoing improvement and
                  scaling.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ppc-results">
          <div className="section-badge">PROVEN RESULTS</div>
          <h2 className="section-title">What Our PPC Management Delivers</h2>

          <div className="results-grid">
            <div className="result-card">
              <div className="result-number">30%</div>
              <p>Average reduction in ACoS (Advertising Cost of Sale)</p>
            </div>
            <div className="result-card">
              <div className="result-number">45%</div>
              <p>Average increase in conversion rates from PPC traffic</p>
            </div>
            <div className="result-card">
              <div className="result-number">60%</div>
              <p>Average improvement in organic rankings for target keywords</p>
            </div>
            <div className="result-card">
              <div className="result-number">3X</div>
              <p>Average return on ad spend (ROAS) for our clients</p>
            </div>
          </div>
        </div>

        <div className="ppc-cta">
          <div className="cta-background">
            <div className="cta-shape cta-shape-1"></div>
            <div className="cta-shape cta-shape-2"></div>
          </div>
          <h2>Ready to Maximize Your Amazon Ad Performance?</h2>
          <p>
            Partner with Vix Commerce for expert PPC management that drives results. Our team of Amazon advertising
            specialists will help you create and optimize campaigns that increase visibility, sales, and profitability.
          </p>
          <button className="cta-button">
            Get Started Today <ArrowRight size={16} className="btn-icon" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default PPCManagement
