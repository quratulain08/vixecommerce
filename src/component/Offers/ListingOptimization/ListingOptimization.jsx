"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, CheckCircle, Edit, ImageIcon, Search, FileText, BarChart2 } from "lucide-react"
import "./ListingOptimization.css"

const ListingOptimization = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const optimizationStepsRef = useRef([])

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
              optimizationStepsRef.current.forEach((step, index) => {
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

    optimizationStepsRef.current.forEach((step) => {
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
      optimizationStepsRef.current.forEach((step) => {
        if (step) {
          observer.unobserve(step)
        }
      })
    }
  }, [])

  const optimizationSteps = [
    {
      icon: <Search size={24} />,
      title: "Keyword Research",
      description:
        "We conduct in-depth keyword research to identify high-volume, relevant search terms for your products.",
      color: "blue",
    },
    {
      icon: <Edit size={24} />,
      title: "Content Creation",
      description:
        "We craft compelling titles, bullet points, and descriptions that incorporate keywords while highlighting benefits.",
      color: "green",
    },
    {
      icon: <ImageIcon size={24} />,
      title: "Image Enhancement",
      description:
        "We create or optimize product images and infographics to showcase features and increase conversions.",
      color: "blue",
    },
    {
      icon: <FileText size={24} />,
      title: "Backend Optimization",
      description: "We optimize backend search terms, attributes, and other hidden fields to improve discoverability.",
      color: "green",
    },
    {
      icon: <BarChart2 size={24} />,
      title: "Performance Tracking",
      description:
        "We monitor key metrics after optimization to ensure improvements in visibility and conversion rates.",
      color: "blue",
    },
  ]

  const benefits = [
    "Increase organic visibility in Amazon search results",
    "Improve click-through rates with compelling titles and images",
    "Boost conversion rates with persuasive content",
    "Reduce advertising costs with better organic rankings",
    "Stand out from competitors with professional listings",
    "Increase customer satisfaction with clear product information",
  ]

  return (
    <section className="optimization-section">
      <div className="optimization-hero" ref={sectionRef}>
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
        <div className="optimization-hero-content">
          <div className="hero-badge">OUR SERVICES</div>
          <h1>
            AMAZON LISTING
            <br />
            <span className="gradient-text">OPTIMIZATION</span>
          </h1>
          <div className="hero-line"></div>
          <p className="hero-subtitle">Transform your listings into high-converting sales machines</p>
          <button className="hero-button">
            Get Started <ArrowRight size={16} className="btn-icon" />
          </button>
        </div>
      </div>

      <div className="optimization-container">
        <div className="optimization-content" ref={contentRef}>
          <div className="optimization-text">
            <div className="section-badge">OVERVIEW</div>
            <h2 className="section-title">Comprehensive Listing Optimization</h2>
            <p>
              Your Amazon product listings are your digital storefront. In a marketplace with millions of products,
              standing out requires more than just good products—it demands exceptional listings that capture attention
              and drive conversions.
            </p>
            <p>
              Our Amazon Listing Optimization service transforms your listings end-to-end. From rewriting titles, bullet
              points, and descriptions to designing high-quality images, infographics, and videos, we create listings
              that not only rank higher in search results but also convert browsers into buyers.
            </p>
          </div>

          <div className="optimization-benefits">
            <h3>Benefits of Optimized Listings</h3>
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

        <div className="optimization-process">
          <div className="section-badge">OUR PROCESS</div>
          <h2 className="section-title">How We Optimize Your Listings</h2>

          <div className="process-steps">
            {optimizationSteps.map((step, index) => (
              <div
                key={index}
                className={`process-step step-${step.color}`}
                ref={(el) => (optimizationStepsRef.current[index] = el)}
              >
                <div className="step-number">{index + 1}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="optimization-elements">
          <div className="section-badge">WHAT WE OPTIMIZE</div>
          <h2 className="section-title">Key Listing Elements</h2>

          <div className="elements-grid">
            <div className="element-card">
              <div className="element-header">
                <h3>Product Titles</h3>
              </div>
              <div className="element-content">
                <div className="element-before">
                  <h4>Before</h4>
                  <p>Yoga Mat</p>
                </div>
                <div className="element-after">
                  <h4>After</h4>
                  <p>
                    Premium Yoga Mat 1/4" Thick, Non-Slip Exercise & Fitness Mat with Carrying Strap for Yoga, Pilates &
                    Floor Exercises (72"x24")
                  </p>
                </div>
              </div>
            </div>

            <div className="element-card">
              <div className="element-header">
                <h3>Bullet Points</h3>
              </div>
              <div className="element-content">
                <div className="element-before">
                  <h4>Before</h4>
                  <p>
                    • Thick yoga mat
                    <br />• Non-slip
                    <br />• Comes with strap
                  </p>
                </div>
                <div className="element-after">
                  <h4>After</h4>
                  <p>
                    • EXTRA THICK & COMFORTABLE: 1/4 inch (6mm) thick premium mat provides optimal cushioning for joints
                    and excellent balance support
                    <br />• NON-SLIP TEXTURE: Double-sided textured surface ensures grip and stability during the most
                    challenging poses
                  </p>
                </div>
              </div>
            </div>

            <div className="element-card">
              <div className="element-header">
                <h3>Product Descriptions</h3>
              </div>
              <div className="element-content">
                <div className="element-before">
                  <h4>Before</h4>
                  <p>This is a yoga mat for exercise. It's thick and non-slip.</p>
                </div>
                <div className="element-after">
                  <h4>After</h4>
                  <p>
                    Transform your yoga practice with our Premium Yoga Mat, designed for yogis of all levels. The
                    perfect balance of cushioning and stability, our 1/4" thick mat protects your joints while providing
                    the firm foundation you need for balance poses...
                  </p>
                </div>
              </div>
            </div>

            <div className="element-card">
              <div className="element-header">
                <h3>Product Images</h3>
              </div>
              <div className="element-content">
                <div className="element-before">
                  <h4>Before</h4>
                  <p>Single product photo on white background</p>
                </div>
                <div className="element-after">
                  <h4>After</h4>
                  <p>
                    Main image + lifestyle images + infographics highlighting key features + size comparison + packaging
                    + close-up details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="optimization-cta">
          <div className="cta-background">
            <div className="cta-shape cta-shape-1"></div>
            <div className="cta-shape cta-shape-2"></div>
          </div>
          <h2>Ready to Transform Your Amazon Listings?</h2>
          <p>
            Partner with Vix Commerce to optimize your Amazon listings for maximum visibility and conversion. Our team
            of experts will create compelling content and visuals that drive sales and grow your business.
          </p>
          <button className="cta-button">
            Get Optimized Listings <ArrowRight size={16} className="btn-icon" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default ListingOptimization
