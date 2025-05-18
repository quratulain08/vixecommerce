"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, CheckCircle, Search, Globe, Package, Truck } from "lucide-react"
import "./Sourcing.css"

const Sourcing = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const servicesRef = useRef([])

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
            EFFICIENT
            <br />
            <span className="gradient-text">SOURCING</span>
          </h1>
          <div className="hero-line"></div>
          <p className="hero-subtitle">Optimize your supply chain with reliable suppliers and quality products</p>
          <button className="hero-button">
            Get Started <ArrowRight size={16} className="btn-icon" />
          </button>
        </div>
      </div>

      <div className="sourcing-container">
        <div className="sourcing-content" ref={contentRef}>
          <div className="sourcing-text">
            <div className="section-badge">OVERVIEW</div>
            <h2 className="section-title">Sourcing Excellence</h2>
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

          <div className="sourcing-benefits">
            <h3>Benefits of Our Sourcing</h3>
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

        <div className="sourcing-services">
          <div className="section-badge">WHAT WE OFFER</div>
          <h2 className="section-title">Our Sourcing Services</h2>

          <div className="service-grid">
            {services.map((service, index) => (
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

        <div className="sourcing-approach">
          <div className="approach-container">
            <div className="approach-content">
              <div className="section-badge">OUR APPROACH</div>
              <h2 className="section-title">Sourcing Excellence</h2>
              <p>
                Our sourcing approach is built on years of experience working with manufacturers and suppliers around
                the world. We have established relationships with reliable partners who understand Amazon's requirements
                and can deliver products that meet your specifications.
              </p>
              <ul className="approach-list">
                <li>
                  <span className="approach-number">01</span>
                  <div>
                    <h3>Market Research</h3>
                    <p>We analyze market trends and competition to identify profitable product opportunities.</p>
                  </div>
                </li>
                <li>
                  <span className="approach-number">02</span>
                  <div>
                    <h3>Supplier Vetting</h3>
                    <p>We thoroughly vet potential suppliers to ensure reliability, quality, and fair pricing.</p>
                  </div>
                </li>
                <li>
                  <span className="approach-number">03</span>
                  <div>
                    <h3>Sample Testing</h3>
                    <p>We coordinate sample production and testing to verify product quality before bulk orders.</p>
                  </div>
                </li>
                <li>
                  <span className="approach-number">04</span>
                  <div>
                    <h3>Order Management</h3>
                    <p>We manage the entire order process, from negotiation to production monitoring.</p>
                  </div>
                </li>
                <li>
                  <span className="approach-number">05</span>
                  <div>
                    <h3>Logistics Coordination</h3>
                    <p>We coordinate shipping, customs clearance, and delivery to Amazon fulfillment centers.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="approach-image sourcing-image">
              <div className="approach-image-content">
                <div className="approach-icon-grid">
                  <div className="approach-icon-item">
                    <Package size={28} />
                    <span>Quality Products</span>
                  </div>
                  <div className="approach-icon-item">
                    <Globe size={28} />
                    <span>Global Sourcing</span>
                  </div>
                  <div className="approach-icon-item">
                    <Truck size={28} />
                    <span>Reliable Shipping</span>
                  </div>
                  <div className="approach-icon-item">
                    <CheckCircle size={28} />
                    <span>Quality Control</span>
                  </div>
                </div>
                <div className="approach-stats">
                  <div className="approach-stat">
                    <span className="stat-number">93%</span>
                    <span className="stat-label">Success Rate</span>
                  </div>
                  <div className="approach-stat">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Helped Brands</span>
                  </div>
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
          <h2>Ready to Optimize Your Sourcing?</h2>
          <p>
            Partner with Vix Commerce to streamline your supply chain. Our team of experts will help you find reliable
            suppliers to grow your business.
          </p>
          <button className="cta-button">
            Schedule a Consultation <ArrowRight size={16} className="btn-icon" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Sourcing
