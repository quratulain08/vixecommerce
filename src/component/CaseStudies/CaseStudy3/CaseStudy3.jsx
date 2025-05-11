"use client"

import { useEffect, useRef } from "react"
import { ArrowUpRight, TrendingUp, ShoppingCart, Search, DollarSign } from "lucide-react"
import "./CaseStudy3.css"

const CaseStudy3 = () => {
  const statsRef = useRef(null)
  const chartRef = useRef(null)

  // Animation for stats when they come into view
  useEffect(() => {
    window.scrollTo(0,0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".cs3-stat-item").forEach((item, index) => {
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
            const bars = entry.target.querySelectorAll(".cs3-chart-bar")
            bars.forEach((bar, index) => {
              setTimeout(() => {
                bar.style.height = bar.dataset.height
              }, index * 100)
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

  return (
    <section className="cs3-section">
      {/* Hero Section */}
      <div className="cs3-hero">
        <div className="cs3-container">
          <div className="cs3-hero-content">
            <div className="cs3-tag">CASE STUDY #3</div>
            <h1 className="cs3-hero-title">
              Textile Niche Product <span className="cs3-highlight">Success</span>
              <br />
              Earning <span className="cs3-highlight">£10,000</span> Net Profit Monthly
            </h1>
            <p className="cs3-hero-description">
              Discover how we launched a product in a highly competitive Home & Kitchen category on Amazon UK, achieving
              remarkable success with £40,000 monthly revenue and £10,000 monthly profit.
            </p>
            <button className="cs3-cta-button">
              Get Similar Results <ArrowUpRight size={18} />
            </button>
          </div>
          <div className="cs3-hero-image">
            <div className="cs3-image-placeholder">
              <div className="cs3-textile-animation">
                <div className="cs3-textile-pattern"></div>
                <div className="cs3-textile-fold"></div>
              </div>
              <div className="cs3-image-shape"></div>
              <div className="cs3-image-circle"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="cs3-stats" ref={statsRef}>
        <div className="cs3-container">
          <div className="cs3-stats-grid">
            <div className="cs3-stat-item cs3-stat-blue">
              <h3 className="cs3-stat-number">£40K+</h3>
              <p className="cs3-stat-label">Monthly Revenue</p>
            </div>
            <div className="cs3-stat-item cs3-stat-green">
              <h3 className="cs3-stat-number">£10K</h3>
              <p className="cs3-stat-label">Monthly Net Profit</p>
            </div>
            <div className="cs3-stat-item cs3-stat-purple">
              <h3 className="cs3-stat-number">3,896</h3>
              <p className="cs3-stat-label">Units Sold in May</p>
            </div>
            <div className="cs3-stat-item cs3-stat-orange">
              <h3 className="cs3-stat-number">Top 10</h3>
              <p className="cs3-stat-label">Ranking for 82K Keywords</p>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Content */}
      <div className="cs3-content">
        <div className="cs3-container">
          <div className="cs3-section">
            <h2 className="cs3-section-title">Introduction</h2>
            <p className="cs3-section-text">
              The sustainable income stream offered by Amazon attracts millions of sellers each year, despite most
              product categories being high in competition. Many sellers fall out of the market because they are unable
              to outrank their competitors' strategies and resources.
            </p>
            <p className="cs3-section-text">
              In this case study we discuss how a product launched by Zelevate in a highly competitive niche began
              yielding up to £10,000 per month. Our client's product (belonging to the Home and Kitchen category of
              Amazon) was launched in March 2021 in the UK market exclusively. After the launch phase, the average
              monthly sales crawled up to £40,000 making a profit of £10,000 per month – which reflect incredible
              success.
            </p>
          </div>

          <div className="cs3-section-alt">
            <h2 className="cs3-section-title">Product Sales & Performance</h2>
            <div className="cs3-columns">
              <div className="cs3-column">
                <div className="cs3-card">
                  <div className="cs3-card-icon">
                    <TrendingUp size={28} />
                  </div>
                  <h3 className="cs3-card-title">Product Sales</h3>
                  <p className="cs3-card-text">
                    Amazon Best Seller Rank (BSR) of the product is of key importance because this ultimately determines
                    the sales and profitability of a product. Using strategic solutions to any possible ranking issues,
                    the product was launched in March. In the month of May, the sales boosted to a remarkable £40,000
                    revenue with 3,896 units sold. Per day revenue generated reached up to £211.63.
                  </p>
                </div>
              </div>
              <div className="cs3-column">
                <div className="cs3-card">
                  <div className="cs3-card-icon">
                    <ShoppingCart size={28} />
                  </div>
                  <h3 className="cs3-card-title">Sales History</h3>
                  <p className="cs3-card-text">
                    Sales history refers to the sales made within a certain period on a monthly or daily basis. The
                    sales history dashboard reveals that from the last 1 month (27.04.2021 to 27.05.2021), 3916 units
                    were sold against a revenue generation of £40,383.44.
                  </p>
                </div>
              </div>
            </div>

            <div className="cs3-chart-container" ref={chartRef}>
              <h3 className="cs3-chart-title">Monthly Sales Growth (Units)</h3>
              <div className="cs3-chart">
                <div className="cs3-chart-bars">
                  <div className="cs3-chart-bar" data-height="30%" style={{ height: "0%" }}>
                    <span className="cs3-bar-value">850</span>
                    <span className="cs3-bar-label">March</span>
                  </div>
                  <div className="cs3-chart-bar" data-height="55%" style={{ height: "0%" }}>
                    <span className="cs3-bar-value">1,650</span>
                    <span className="cs3-bar-label">April</span>
                  </div>
                  <div className="cs3-chart-bar" data-height="95%" style={{ height: "0%" }}>
                    <span className="cs3-bar-value">3,896</span>
                    <span className="cs3-bar-label">May</span>
                  </div>
                </div>
                <div className="cs3-chart-axis"></div>
              </div>
            </div>
          </div>

          <div className="cs3-section">
            <h2 className="cs3-section-title">Keyword Tracking Success</h2>
            <div className="cs3-keyword-section">
              <div className="cs3-keyword-content">
                <div className="cs3-card-icon">
                  <Search size={28} />
                </div>
                <h3 className="cs3-card-title">Helium Keyword Tracker</h3>
                <p className="cs3-card-text">
                  Sale ranks show how good a product is selling in relation to other products under the same category –
                  Home and Kitchen category for instance. We say that you are ranking more highly in Amazon searches
                  when people search for a particular keyword and your product pops up on top in the results.
                </p>
                <p className="cs3-card-text">
                  Helium 10 recent keyword tracker reveals that product launched by Zelevate has ranked in top 10 for
                  82,000 search results, bringing 100 organic orders per day. This was a breakthrough in our expected
                  sales.
                </p>
              </div>
              <div className="cs3-keyword-visual">
                <div className="cs3-keyword-stats">
                  <div className="cs3-keyword-stat">
                    <div className="cs3-stat-circle cs3-blue">
                      <span>82K</span>
                    </div>
                    <p>Keywords in Top 10</p>
                  </div>
                  <div className="cs3-keyword-stat">
                    <div className="cs3-stat-circle cs3-green">
                      <span>100</span>
                    </div>
                    <p>Daily Organic Orders</p>
                  </div>
                  <div className="cs3-keyword-stat">
                    <div className="cs3-stat-circle cs3-orange">
                      <span>25%</span>
                    </div>
                    <p>Conversion Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cs3-section-alt">
            <h2 className="cs3-section-title">Conclusion</h2>
            <div className="cs3-conclusion">
              <div className="cs3-conclusion-icon">
                <DollarSign size={40} />
              </div>
              <div className="cs3-conclusion-content">
                <p>
                  A competitive advantage in a specific product niche/category on Amazon could only be achieved through
                  careful and calculated strategies. Expertise employed by our team at Zelevate has got remarkable
                  profits and sales on this account, and several other accounts. Our 100% success rate speaks for
                  commitment and expertise of our team.
                </p>
                <p>
                  If you want to start your business on Amazon or want a boost in your pre-existing business, you can
                  schedule a free consultation call to discuss the possible strategies for it.
                </p>
                <button className="cs3-secondary-button">Schedule a Free Consultation</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudy3
