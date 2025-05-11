"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, CheckCircle, BarChart2, TrendingUp, ShoppingCart, Settings, Clock } from "lucide-react"
import "./FBAManagement.css"

const FBAManagement = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const servicesRef = useRef([])

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
              servicesRef.current.forEach((service, index) => {
                if (service && entry.target === service) {
                  setTimeout(() => {
                    service.classList.add("animate")
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

    servicesRef.current.forEach((service) => {
      if (service) {
        observer.observe(service)
      }
    })

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      if (contentRef.current) {
        observer.unobserve(contentRef.current)
      }
      servicesRef.current.forEach((service) => {
        if (service) {
          observer.unobserve(service)
        }
      })
    }
  }, [])

  const fbaServices = [
    {
      icon: <BarChart2 size={24} />,
      title: "Inventory Management",
      description:
        "We monitor your inventory levels, forecast demand, and ensure you never run out of stock or overstock.",
      color: "blue",
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Performance Monitoring",
      description:
        "We track key metrics and provide regular reports on your account's performance and growth opportunities.",
      color: "green",
    },
    {
      icon: <ShoppingCart size={24} />,
      title: "Order Processing",
      description:
        "We handle order fulfillment, customer service inquiries, and returns management to ensure customer satisfaction.",
      color: "blue",
    },
    {
      icon: <Settings size={24} />,
      title: "Account Optimization",
      description:
        "We continuously optimize your Amazon account settings, listings, and pricing strategies for maximum profitability.",
      color: "green",
    },
    {
      icon: <Clock size={24} />,
      title: "Proactive Management",
      description:
        "We stay ahead of Amazon policy changes, seasonal trends, and marketplace shifts to keep your business competitive.",
      color: "blue",
    },
  ]

  const benefits = [
    "Save 20+ hours per week on account management",
    "Increase sales with optimized listings and inventory",
    "Reduce costs with efficient inventory management",
    "Improve customer satisfaction and reviews",
    "Stay compliant with Amazon's policies",
    "Scale your business without increasing workload",
  ]

  return (
    <section className="fba-section">
      <div className="fba-hero" ref={sectionRef}>
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
        <div className="fba-hero-content">
          <div className="hero-badge">OUR SERVICES</div>
          <h1>
            AMAZON FBA
            <br />
            <span className="gradient-text">MANAGEMENT</span>
          </h1>
          <div className="hero-line"></div>
          <p className="hero-subtitle">Focus on growing your business while we handle the day-to-day operations</p>
          <button className="hero-button">
            Get Started <ArrowRight size={16} className="btn-icon" />
          </button>
        </div>
      </div>

      <div className="fba-container">
        <div className="fba-content" ref={contentRef}>
          <div className="fba-text">
            <div className="section-badge">OVERVIEW</div>
            <h2 className="section-title">Comprehensive FBA Management</h2>
            <p>
              Running a successful Amazon FBA business requires constant attention to detail, monitoring of key metrics,
              and staying up-to-date with Amazon's ever-changing policies. Our Amazon FBA Management service takes this
              burden off your shoulders, allowing you to focus on growing your business.
            </p>
            <p>
              Our team of experienced Amazon specialists will handle all aspects of your FBA account, from inventory
              management and order processing to performance monitoring and account optimization. We implement proven
              strategies to increase your sales, improve your rankings, and maximize your profits.
            </p>
          </div>

          <div className="fba-benefits">
            <h3>Benefits of Our FBA Management</h3>
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

        <div className="fba-services">
          <div className="section-badge">WHAT WE DO</div>
          <h2 className="section-title">Our FBA Management Services</h2>

          <div className="services-grid">
            {fbaServices.map((service, index) => (
              <div
                key={index}
                className={`service-card service-${service.color}`}
                ref={(el) => (servicesRef.current[index] = el)}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="fba-process">
          <div className="section-badge">OUR APPROACH</div>
          <h2 className="section-title">How We Manage Your FBA Business</h2>

          <div className="process-timeline">
            <div className="timeline-item">
              <div className="timeline-number">1</div>
              <div className="timeline-content">
                <h3>Initial Assessment</h3>
                <p>
                  We conduct a comprehensive audit of your Amazon account, analyzing your current performance, inventory
                  levels, pricing strategy, and listing quality.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">2</div>
              <div className="timeline-content">
                <h3>Strategy Development</h3>
                <p>
                  Based on our assessment, we develop a customized management strategy tailored to your specific
                  business goals and market position.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">3</div>
              <div className="timeline-content">
                <h3>Implementation</h3>
                <p>
                  We implement our strategy, optimizing your listings, adjusting inventory levels, and setting up
                  systems for ongoing management.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">4</div>
              <div className="timeline-content">
                <h3>Daily Management</h3>
                <p>
                  Our team handles the day-to-day operations of your FBA business, including inventory management, order
                  processing, and customer service.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">5</div>
              <div className="timeline-content">
                <h3>Performance Reporting</h3>
                <p>
                  We provide regular reports on your account's performance, including sales, profitability, inventory
                  levels, and growth opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="fba-cta">
          <div className="cta-background">
            <div className="cta-shape cta-shape-1"></div>
            <div className="cta-shape cta-shape-2"></div>
          </div>
          <h2>Ready to Streamline Your Amazon FBA Business?</h2>
          <p>
            Partner with Vix Commerce and let our experts handle the day-to-day management of your Amazon FBA business.
            Free up your time to focus on growth while we ensure your operations run smoothly and profitably.
          </p>
          <button className="cta-button">
            Schedule a Consultation <ArrowRight size={16} className="btn-icon" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default FBAManagement
