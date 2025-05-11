"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, CheckCircle, Search, FileText, BarChart2, AlertTriangle, Zap } from "lucide-react"
import "./ListingAudit.css"

const ListingAudit = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const auditStepsRef = useRef([])

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
              auditStepsRef.current.forEach((step, index) => {
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

    auditStepsRef.current.forEach((step) => {
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
      auditStepsRef.current.forEach((step) => {
        if (step) {
          observer.unobserve(step)
        }
      })
    }
  }, [])

  const auditSteps = [
    {
      icon: <Search size={24} />,
      title: "Keyword Analysis",
      description:
        "We analyze your current keywords and identify opportunities for improvement to increase visibility.",
      color: "blue",
    },
    {
      icon: <FileText size={24} />,
      title: "Content Review",
      description:
        "We evaluate your titles, bullet points, and descriptions for clarity, persuasiveness, and keyword optimization.",
      color: "green",
    },
    {
      icon: <BarChart2 size={24} />,
      title: "Performance Metrics",
      description: "We examine your conversion rates, click-through rates, and other key performance indicators.",
      color: "blue",
    },
    {
      icon: <AlertTriangle size={24} />,
      title: "Compliance Check",
      description: "We ensure your listings comply with Amazon's policies and guidelines to prevent suspension risks.",
      color: "green",
    },
    {
      icon: <Zap size={24} />,
      title: "Actionable Recommendations",
      description: "We provide a detailed report with specific, prioritized recommendations for improvement.",
      color: "blue",
    },
  ]

  const benefits = [
    "Identify hidden opportunities for improvement",
    "Understand why your listings aren't converting",
    "Get expert insights on Amazon best practices",
    "Receive a prioritized action plan",
    "Increase visibility and conversion rates",
    "Stay ahead of competitors",
  ]

  return (
    <section className="audit-section">
      <div className="audit-hero" ref={sectionRef}>
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
        <div className="audit-hero-content">
          <div className="hero-badge">OUR SERVICES</div>
          <h1>
            AMAZON LISTING
            <br />
            <span className="gradient-text">AUDIT</span>
          </h1>
          <div className="hero-line"></div>
          <p className="hero-subtitle">Uncover hidden opportunities and boost your Amazon performance</p>
          <button className="hero-button">
            Get Started <ArrowRight size={16} className="btn-icon" />
          </button>
        </div>
      </div>

      <div className="audit-container">
        <div className="audit-content" ref={contentRef}>
          <div className="audit-text">
            <div className="section-badge">OVERVIEW</div>
            <h2 className="section-title">Comprehensive Listing Audit</h2>
            <p>
              Are your Amazon listings performing below expectations? Our Amazon Listing Audit service provides a
              thorough analysis of your product listings to identify areas for improvement and unlock hidden potential.
            </p>
            <p>
              Our team of Amazon experts will evaluate every aspect of your listings, from keywords and content to
              images and backend settings. We'll identify what's working, what's not, and provide actionable
              recommendations to optimize your listings for maximum visibility and conversion.
            </p>
          </div>

          <div className="audit-benefits">
            <h3>Benefits of Our Listing Audit</h3>
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

        <div className="audit-process">
          <div className="section-badge">OUR PROCESS</div>
          <h2 className="section-title">How We Audit Your Listings</h2>

          <div className="process-steps">
            {auditSteps.map((step, index) => (
              <div
                key={index}
                className={`process-step step-${step.color}`}
                ref={(el) => (auditStepsRef.current[index] = el)}
              >
                <div className="step-number">{index + 1}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="audit-features">
          <div className="section-badge">WHAT WE ANALYZE</div>
          <h2 className="section-title">Comprehensive Audit Elements</h2>

          <div className="features-grid">
            <div className="feature-card">
              <h3>Product Titles</h3>
              <p>
                We analyze your titles for keyword optimization, readability, and compliance with Amazon's guidelines.
              </p>
            </div>
            <div className="feature-card">
              <h3>Bullet Points</h3>
              <p>We evaluate your bullet points for persuasiveness, keyword inclusion, and benefit-focused content.</p>
            </div>
            <div className="feature-card">
              <h3>Product Descriptions</h3>
              <p>We review your descriptions for completeness, keyword richness, and compelling storytelling.</p>
            </div>
            <div className="feature-card">
              <h3>Images & Media</h3>
              <p>
                We assess your images and videos for quality, information value, and compliance with Amazon standards.
              </p>
            </div>
            <div className="feature-card">
              <h3>Backend Keywords</h3>
              <p>We check your backend search terms for completeness, relevance, and optimization opportunities.</p>
            </div>
            <div className="feature-card">
              <h3>Pricing Strategy</h3>
              <p>We evaluate your pricing in relation to competitors and perceived value to maximize conversions.</p>
            </div>
          </div>
        </div>

        <div className="audit-cta">
          <div className="cta-background">
            <div className="cta-shape cta-shape-1"></div>
            <div className="cta-shape cta-shape-2"></div>
          </div>
          <h2>Ready to Unlock Your Listing's Potential?</h2>
          <p>
            Partner with Vix Commerce for a comprehensive Amazon listing audit. Our team of experts will identify
            opportunities for improvement and provide actionable recommendations to boost your performance.
          </p>
          <button className="cta-button">
            Request an Audit <ArrowRight size={16} className="btn-icon" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default ListingAudit
