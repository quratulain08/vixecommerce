"use client"

import { useEffect, useRef } from "react"
import { ArrowUpRight, TrendingUp, ShoppingCart, DollarSign, BarChart3 } from "lucide-react"
import "./CaseStudy4.css"

const CaseStudy4 = () => {
  const statsRef = useRef(null)
  const chartRef = useRef(null)
  const valuationRef = useRef(null)

  // Animation for stats when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".cs4-stat-item").forEach((item, index) => {
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

  // Chart animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const lines = entry.target.querySelectorAll(".cs4-chart-line")
            lines.forEach((line, index) => {
              setTimeout(() => {
                line.style.width = line.dataset.width
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.5 },
    )

    if (chartRef.current) {
      observer.observe(chartRef.current)
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current)
      }
    }
  }, [])

  // Valuation animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      { threshold: 0.5 },
    )

    if (valuationRef.current) {
      observer.observe(valuationRef.current)
    }

    return () => {
      if (valuationRef.current) {
        observer.unobserve(valuationRef.current)
      }
    }
  }, [])

  return (
    <section className="cs4-section">
      {/* Hero Section */}
      <div className="cs4-hero">
        <div className="cs4-container">
          <div className="cs4-hero-content">
            <div className="cs4-tag">CASE STUDY #4</div>
            <h1 className="cs4-hero-title">
              Baby Product <span className="cs4-highlight">Success Story</span>
              <br />
              From Launch to <span className="cs4-highlight">$500,000</span> Valuation
            </h1>
            <p className="cs4-hero-description">
              Discover how we successfully launched a baby product in a highly competitive niche on Amazon USA,
              generating $50,000 in monthly sales and achieving a $500,000 valuation offer in less than a year.
            </p>
            <button className="cs4-cta-button">
              Get Similar Results <ArrowUpRight size={18} />
            </button>
          </div>
          <div className="cs4-hero-image">
            <div className="cs4-image-placeholder">
              <div className="cs4-baby-animation">
                <div className="cs4-baby-rattle"></div>
                <div className="cs4-baby-stars">
                  <div className="cs4-star cs4-star-1"></div>
                  <div className="cs4-star cs4-star-2"></div>
                  <div className="cs4-star cs4-star-3"></div>
                </div>
              </div>
              <div className="cs4-image-shape"></div>
              <div className="cs4-image-circle"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="cs4-stats" ref={statsRef}>
        <div className="cs4-container">
          <div className="cs4-stats-grid">
            <div className="cs4-stat-item cs4-stat-blue">
              <h3 className="cs4-stat-number">$50K+</h3>
              <p className="cs4-stat-label">Monthly Sales</p>
            </div>
            <div className="cs4-stat-item cs4-stat-green">
              <h3 className="cs4-stat-number">$10K</h3>
              <p className="cs4-stat-label">Monthly Net Profit</p>
            </div>
            <div className="cs4-stat-item cs4-stat-purple">
              <h3 className="cs4-stat-number">1,100+</h3>
              <p className="cs4-stat-label">Monthly Orders</p>
            </div>
            <div className="cs4-stat-item cs4-stat-orange">
              <h3 className="cs4-stat-number">$500K</h3>
              <p className="cs4-stat-label">Listing Valuation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Content */}
      <div className="cs4-content">
        <div className="cs4-container">
          <div className="cs4-section">
            <h2 className="cs4-section-title">Introduction</h2>
            <p className="cs4-section-text">
              Many products run out of the market due to extreme competition and complexities. This case study will
              explain how a highly competitive niche product was launched successfully. The product comes under baby
              category that was un-gated in USA market. This product was launched on October 2020.
            </p>
            <p className="cs4-section-text">
              The product started generating $50,000 sales with 1100 monthly orders. $10,000 average monthly profit was
              propagated from this ASIN. All these factors had collectively grown the asset valuation up to $500,000.
            </p>
          </div>

          <div className="cs4-section-alt">
            <h2 className="cs4-section-title">Product Sales & Performance</h2>
            <div className="cs4-columns">
              <div className="cs4-column">
                <div className="cs4-card">
                  <div className="cs4-card-icon">
                    <TrendingUp size={28} />
                  </div>
                  <h3 className="cs4-card-title">Product Sales</h3>
                  <p className="cs4-card-text">
                    Significant sales on the product depend upon the ranking and stability of the product. Organic
                    orders determine the profitability. After the development stage over, sales in May 2021 boomed and
                    produced $43,604.86 in revenue with 1,117 units ordered. Average daily sales were $800 – $1,200.
                    There was 100% buy box wins.
                  </p>
                </div>
              </div>
              <div className="cs4-column">
                <div className="cs4-card">
                  <div className="cs4-card-icon">
                    <ShoppingCart size={28} />
                  </div>
                  <h3 className="cs4-card-title">Sales History</h3>
                  <p className="cs4-card-text">
                    Sales history is calculated by the overall sales in a certain period of time. It shows how many
                    sales are generated on daily and monthly basis. The last 1 year data from 28/07/2021 to 01/06/2021
                    represents that average total orders are 1300 units. Significant traffic was achieved in each month
                    with average 4000 sessions.
                  </p>
                </div>
              </div>
            </div>

            <div className="cs4-chart-container" ref={chartRef}>
              <h3 className="cs4-chart-title">Monthly Performance Metrics</h3>
              <div className="cs4-chart">
                <div className="cs4-chart-metrics">
                  <div className="cs4-metric">
                    <div className="cs4-metric-label">Revenue</div>
                    <div className="cs4-chart-line-container">
                      <div className="cs4-chart-line cs4-blue" data-width="85%" style={{ width: "0%" }}></div>
                      <span className="cs4-metric-value">$43,604</span>
                    </div>
                  </div>
                  <div className="cs4-metric">
                    <div className="cs4-metric-label">Orders</div>
                    <div className="cs4-chart-line-container">
                      <div className="cs4-chart-line cs4-green" data-width="75%" style={{ width: "0%" }}></div>
                      <span className="cs4-metric-value">1,117</span>
                    </div>
                  </div>
                  <div className="cs4-metric">
                    <div className="cs4-metric-label">Sessions</div>
                    <div className="cs4-chart-line-container">
                      <div className="cs4-chart-line cs4-purple" data-width="90%" style={{ width: "0%" }}></div>
                      <span className="cs4-metric-value">4,000+</span>
                    </div>
                  </div>
                  <div className="cs4-metric">
                    <div className="cs4-metric-label">Conversion Rate</div>
                    <div className="cs4-chart-line-container">
                      <div className="cs4-chart-line cs4-orange" data-width="65%" style={{ width: "0%" }}></div>
                      <span className="cs4-metric-value">28%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cs4-section">
            <h2 className="cs4-section-title">Listing Valuation</h2>
            <div className="cs4-valuation-section">
              <div className="cs4-valuation-content">
                <div className="cs4-card-icon">
                  <BarChart3 size={28} />
                </div>
                <h3 className="cs4-card-title">Listing Valuation</h3>
                <p className="cs4-card-text">
                  Listing can be evaluated based on monthly profit a product is producing. It is factored with certain
                  no of months and valuation is offered to be purchased. We have been contacted by the famous brand to
                  sell our listing with the valuation offer of $500,000.
                </p>
                <p className="cs4-card-text">
                  Our next strategy is to launch two new ASINs to double the listing valuation for $1,000,000 after 6 to
                  7 months.
                </p>
              </div>
              <div className="cs4-valuation-visual">
                <div className="cs4-valuation-meter" ref={valuationRef}>
                  <div className="cs4-meter-label">Current Valuation</div>
                  <div className="cs4-meter-value">$500,000</div>
                  <div className="cs4-meter-bar">
                    <div className="cs4-meter-fill"></div>
                  </div>
                  <div className="cs4-meter-target">
                    <div className="cs4-target-label">Target Valuation</div>
                    <div className="cs4-target-value">$1,000,000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cs4-section-alt">
            <h2 className="cs4-section-title">Conclusion</h2>
            <div className="cs4-conclusion">
              <div className="cs4-conclusion-icon">
                <DollarSign size={40} />
              </div>
              <div className="cs4-conclusion-content">
                <p>
                  The right strategy at the right time is the key to a successful business on Amazon. High spending is
                  not always the answer. With the experts working on this account, it got stable sales and profits
                  because of which it got a beneficial valuation offer.
                </p>
                <p>
                  If you want to start your business on Amazon or want a boost in your pre-existing business, you can
                  schedule a free consultation call to discuss the possible strategies for it.
                </p>
                <button className="cs4-secondary-button">Schedule a Free Consultation</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudy4
