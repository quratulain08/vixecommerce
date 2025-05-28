"use client"

import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowRight, CheckCircle, Package, BarChart2, Search, ShoppingCart, Award } from "lucide-react"
import "./BrandLaunch.css"
import Testimonial from "../../LandingPage/Testimonial/Testimonial"
import Brand from "../../LandingPage/FeaturedPartners/FeaturedPartners"

const BrandLaunch = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const stepsRef = useRef([])
  const navigate = useNavigate()
  const [showNeedHelp, setShowNeedHelp] = useState(false)

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
            Amazon brand &<br />
            <span className="gradient-text">product launch</span>
          </h1>
          <div className="hero-line"></div>
          <p className="hero-subtitle">Start your Amazon journey with a strong foundation for success</p>
          <button className="hero-button" onClick={handleGetStartedClick}>
            Get started <ArrowRight size={16} className="btn-icon" />
          </button>
        </div>
      </div>

      <div className="service-container">
        <div className="service-content" ref={contentRef}>
          <div className="overview-section">
            <div className="section-badge">OVERVIEW</div>
            <h2 className="section-title">Launch your Amazon business</h2>
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

          

        <div className="service-process">
          <div className="section-badge">OUR PROCESS</div>
          <h2 className="section-title">How we launch your brand</h2>

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
        <div className="benefits-section">
            <h3 className="benefits-title">Why choose our launch service</h3>
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
      <Testimonial />
      <Brand />
    </section>
  )
}

export default BrandLaunch
