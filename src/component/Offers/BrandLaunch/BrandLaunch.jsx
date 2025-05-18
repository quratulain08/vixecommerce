"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, CheckCircle, Package, BarChart2, Search, ShoppingCart, Award } from "lucide-react"
import "./BrandLaunch.css"

const BrandLaunch = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const stepsRef = useRef([])

  useEffect(() => {
     window.scrollTo(0,0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              entry.target.classList.add("animate")
            } else if (entry.target === contentRef.current) {
              entry.target.classList.add("animate")
            } else {
              stepsRef.current.forEach((step, index) => {
                if (step && entry.target === step) {
                  setTimeout(() => {
                    step.classList.add("animate")
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

    stepsRef.current.forEach((step) => {
      if (step) {
        observer.observe(step)
      }
    })

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      if (contentRef.current) {
        observer.unobserve(contentRef.current)
      }
      stepsRef.current.forEach((step) => {
        if (step) {
          observer.unobserve(step)
        }
      })
    }
  }, [])

  const launchSteps = [
    {
      icon: <Search size={24} />,
      title: "Market Research",
      description:
        "We conduct thorough market research to identify profitable niches and product opportunities on Amazon.",
      color: "blue",
    },
    {
      icon: <Package size={24} />,
      title: "Product Sourcing",
      description: "We help you find reliable suppliers and ensure your products meet Amazon's quality standards.",
      color: "green",
    },
    {
      icon: <ShoppingCart size={24} />,
      title: "Account Setup",
      description:
        "We set up your Amazon Seller account with all the necessary configurations for optimal performance.",
      color: "blue",
    },
    {
      icon: <BarChart2 size={24} />,
      title: "Listing Creation",
      description:
        "We create optimized product listings with compelling copy and high-quality images to maximize conversions.",
      color: "green",
    },
    {
      icon: <Award size={24} />,
      title: "Launch Strategy",
      description:
        "We develop a comprehensive launch strategy to generate initial sales and reviews for your products.",
      color: "blue",
    },
  ]

  const benefits = [
    "Minimize risk with expert guidance",
    "Save time and resources on research",
    "Avoid common pitfalls new sellers face",
    "Launch with optimized listings from day one",
    "Start generating sales faster",
    "Build a foundation for long-term success",
  ]

  return (
    <section className="service-section">
      <div className="service-hero" ref={sectionRef}>
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
        <div className="service-hero-content">
          <div className="hero-badge">OUR SERVICES</div>
          <h1>
            AMAZON BRAND &<br />
            <span className="gradient-text">PRODUCT LAUNCH</span>
          </h1>
          <div className="hero-line"></div>
          <p className="hero-subtitle">Start your Amazon journey with a strong foundation for success</p>
          <button className="hero-button">
            Get Started <ArrowRight size={16} className="btn-icon" />
          </button>
        </div>
      </div>

      <div className="service-container">
        <div className="service-content" ref={contentRef}>
          <div className="service-text">
            <div className="section-badge">OVERVIEW</div>
            <h2 className="section-title">Launch Your Amazon Business</h2>
            <p>
              Launching a new brand or product on Amazon can be overwhelming. With millions of sellers competing for
              attention, standing out requires strategic planning and execution. Our Amazon Brand & Product Launch
              service provides you with a comprehensive roadmap to success.
            </p>
            <p>
              Whether you're starting a new business or expanding your existing brand to Amazon, our team of experts
              will guide you through every step of the process. From market research and product sourcing to account
              setup and optimized listings, we ensure a profitable and smooth launch on Amazon.
            </p>
          </div>

          <div className="service-benefits">
            <h3>Benefits of Our Launch Service</h3>
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

        <div className="service-process">
          <div className="section-badge">OUR PROCESS</div>
          <h2 className="section-title">How We Launch Your Brand</h2>

          <div className="process-steps">
            {launchSteps.map((step, index) => (
              <div
                key={index}
                className={`process-step step-${step.color}`}
                ref={(el) => (stepsRef.current[index] = el)}
              >
                <div className="step-number">{index + 1}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="service-stats">
          <div className="stat-card">
            <h2>85%</h2>
            <p>of new Amazon sellers are profitable within the first year with proper guidance</p>
          </div>
          <div className="stat-card">
            <h2>63%</h2>
            <p>higher success rate for sellers who launch with optimized listings</p>
          </div>
          <div className="stat-card">
            <h2>2X</h2>
            <p>faster growth for brands that launch with a strategic plan</p>
          </div>
        </div> */}

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
          <button className="cta-button">
            Schedule a Consultation <ArrowRight size={16} className="btn-icon" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default BrandLaunch
