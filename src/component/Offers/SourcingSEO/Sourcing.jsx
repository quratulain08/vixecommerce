"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, CheckCircle, Search, Globe, Package, Truck } from "lucide-react"
import "./Sourcing.css"
import { useNavigate } from "react-router-dom"
import Testimonial from "../../LandingPage/Testimonial/Testimonial"
import Brand from "../../LandingPage/FeaturedPartners/FeaturedPartners"

const Sourcing = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const servicesRef = useRef([])
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

  const services = [
    {
      icon: <Search size={24} />,
      title: "Product Research",
      description: "We identify profitable product opportunities with high demand and manageable competition.",
      color: "blue",
    },
    {
      icon: <Globe size={24} />,
      title: "Supplier Sourcing",
      description: "We connect you with reliable manufacturers and suppliers who meet your quality standards.",
      color: "green",
    },
    {
      icon: <Package size={24} />,
      title: "Quality Control",
      description: "We implement quality control processes to ensure your products meet Amazon's standards.",
      color: "blue",
    },
    {
      icon: <Truck size={24} />,
      title: "Logistics Management",
      description: "We coordinate shipping, customs clearance, and delivery to Amazon fulfillment centers.",
      color: "green",
    },
  ]

  const benefits = [
    "Find high-quality products at competitive prices",
    "Reduce sourcing risks and avoid scams",
    "Ensure consistent product quality",
    "Streamline your supply chain",
  ]

  return (
    <section className="sourcing-section">
      <div className="sourcing-hero" ref={sectionRef}>
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
        <div className="sourcing-hero-content">
          <div className="hero-badge">OUR SERVICES</div>
          <h1>
            Product sourcing
            <br />
            <span className="gradient-text">solutions</span>
          </h1>
          <div className="hero-line"></div>
          <p className="hero-subtitle">Optimize your supply chain with reliable suppliers and quality products</p>
          <button className="hero-button" onClick={handleGetStartedClick}>
            Get Started <ArrowRight size={16} className="btn-icon" />
          </button>
        </div>
      </div>

      <div className="sourcing-container">
        <div className="sourcing-content" ref={contentRef}>
          <div className="overview-section">
            <div className="section-badge">OVERVIEW</div>
            <h2 className="section-title">Sourcing excellence</h2>
            <p>
              Success on Amazon begins with great products. Our Efficient Sourcing service addresses this critical
              aspect of your Amazon business.
            </p>
            <p>
              We help you find reliable suppliers who can deliver quality products at competitive prices. We manage the
              entire process from product research to delivery, ensuring your inventory arrives on time and meets
              Amazon's standards.
            </p>
          </div>

          <div className="service-process">
            <div className="section-badge">WHAT WE OFFER</div>
            <h2 className="section-title">Our sourcing services</h2>

            <div className="process-steps">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`process-step service-${service.color}`}
                  ref={(el) => (servicesRef.current[index] = el)}
                >
                  <div className="step-number">{index + 1}</div>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="benefits-section">
            <h3 className="benefits-title">Benefits of our sourcing</h3>
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

        <div className="sourcing-approach">
          <div className="seo-header">
            <div className="section-badge">OUR APPROACH</div>
            <h2 className="section-title">Sourcing excellence</h2>
            <p className="seo-description">
              Our sourcing approach is built on years of experience working with manufacturers and suppliers around the
              world. We have established relationships with reliable partners who understand Amazon's requirements and
              can deliver products that meet your specifications.
            </p>
          </div>

          <div className="seo-showcase">
            <div className="seo-showcase-content">
              <div className="seo-features-grid">
                <div className="seo-feature-item">
                  <div className="seo-feature-icon">
                    <Search size={32} />
                  </div>
                  <h3>Market Research</h3>
                  <p>We analyze market trends and competition to identify profitable product opportunities</p>
                </div>
                <div className="seo-feature-item">
                  <div className="seo-feature-icon">
                    <Globe size={32} />
                  </div>
                  <h3>Supplier Vetting</h3>
                  <p>We thoroughly vet potential suppliers to ensure reliability and quality</p>
                </div>
                <div className="seo-feature-item">
                  <div className="seo-feature-icon">
                    <Package size={32} />
                  </div>
                  <h3>Sample Testing</h3>
                  <p>We coordinate sample production and testing to verify product quality</p>
                </div>
                <div className="seo-feature-item">
                  <div className="seo-feature-icon">
                    <Truck size={32} />
                  </div>
                  <h3>Logistics Coordination</h3>
                  <p>We coordinate shipping, customs clearance, and delivery to Amazon</p>
                </div>
              </div>

              <div className="seo-results">
                <div className="seo-result-card">
                  <div className="result-number">93%</div>
                  <div className="result-label">Success Rate</div>
                  <div className="result-description">
                    Our clients see significant improvements in their supply chain
                  </div>
                </div>
                <div className="seo-result-card">
                  <div className="result-number">50+</div>
                  <div className="result-label">Helped Brands</div>
                  <div className="result-description">We've helped over 50 brands optimize their sourcing process</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sourcing-cta">
          <div className="cta-background">
            <div className="cta-shape cta-shape-1"></div>
            <div className="cta-shape cta-shape-2"></div>
          </div>
          <h2>Ready to optimize your sourcing?</h2>
          <p>
            Partner with VixCommerce to streamline your supply chain. Our team of experts will help you find reliable
            suppliers to grow your business.
          </p>
          <button className="cta-button" onClick={handleGetStartedClick}>
            Schedule a call<ArrowRight size={16} className="btn-icon" />
          </button>
        </div>
      </div>
      <Testimonial />
      <Brand />
    </section>
  )
}

export default Sourcing
