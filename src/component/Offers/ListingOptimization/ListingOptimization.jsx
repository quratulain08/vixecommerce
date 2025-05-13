"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, CheckCircle, Edit, ImageIcon, Search, FileText, BarChart2, TrendingUp } from "lucide-react"
import "./ListingOptimization.css"

const ListingOptimization = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const optimizationStepsRef = useRef([])
  const seoStepsRef = useRef([])

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

              seoStepsRef.current.forEach((step, index) => {
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

    seoStepsRef.current.forEach((step) => {
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
      seoStepsRef.current.forEach((step) => {
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

  const seoSteps = [
    {
      number: "01",
      title: "Keyword Research",
      description: "We identify high-volume, relevant keywords that your target customers are searching for.",
    },
    {
      number: "02",
      title: "Listing Optimization",
      description: "We optimize your titles, bullet points, and descriptions with strategic keyword placement.",
    },
    {
      number: "03",
      title: "Backend Optimization",
      description: "We optimize search terms, subject matter, and other backend fields to improve discoverability.",
    },
    {
      number: "04",
      title: "Enhanced Content",
      description: "We create A+ Content and Store pages that improve conversion rates and keyword relevance.",
    },
    {
      number: "05",
      title: "Performance Tracking",
      description: "We monitor keyword rankings and organic traffic to continuously improve your SEO strategy.",
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
            LISTING OPTIMIZATION
            <br />
            <span className="gradient-text">& SEO</span>
          </h1>
          <div className="hero-line"></div>
          <p className="hero-subtitle">
            Transform your listings into high-converting sales machines with maximum visibility
          </p>
          <button className="hero-button">
            Get Started <ArrowRight size={16} className="btn-icon" />
          </button>
        </div>
      </div>

      <div className="optimization-container">
        <div className="optimization-content" ref={contentRef}>
          <div className="optimization-text">
            <div className="section-badge">OVERVIEW</div>
            <h2 className="section-title">Comprehensive Listing Optimization & SEO</h2>
            <p>
              Your Amazon product listings are your digital storefront. In a marketplace with millions of products,
              standing out requires more than just good products—it demands exceptional listings that capture attention,
              drive conversions, and rank high in search results.
            </p>
            <p>
              Our Amazon Listing Optimization & SEO service transforms your listings end-to-end. From rewriting titles,
              bullet points, and descriptions to designing high-quality images, infographics, and videos, we create
              listings that not only rank higher in search results but also convert browsers into buyers.
            </p>
            <p>
              We implement proven SEO strategies to help your listings climb the search rankings. By optimizing your
              product listings with strategic keywords, enhanced content, and backend optimizations, we help you get
              more organic traffic and generate more revenue without additional ad spend.
            </p>
          </div>

          <div className="optimization-benefits">
            <h3>Benefits of Optimized Listings & SEO</h3>
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
          <div className="section-badge">OPTIMIZATION PROCESS</div>
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

        <div className="seo-approach">
          <div className="approach-container">
            <div className="approach-content">
              <div className="section-badge">SEO STRATEGY</div>
              <h2 className="section-title">Amazon SEO Mastery</h2>
              <p>
                Our Amazon SEO strategies are designed to improve your organic rankings and drive more traffic to your
                listings. We focus on both on-page and backend optimizations to ensure maximum visibility in Amazon's
                search results.
              </p>
              <ul className="approach-list">
                {seoSteps.map((step, index) => (
                  <li key={index} ref={(el) => (seoStepsRef.current[index] = el)}>
                    <span className="approach-number">{step.number}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="approach-image seo-image">
              <div className="approach-image-content">
                <div className="approach-icon-grid">
                  <div className="approach-icon-item">
                    <Search size={28} />
                    <span>Keyword Research</span>
                  </div>
                  <div className="approach-icon-item">
                    <TrendingUp size={28} />
                    <span>Ranking Improvement</span>
                  </div>
                  <div className="approach-icon-item">
                    <BarChart2 size={28} />
                    <span>Performance Tracking</span>
                  </div>
                  <div className="approach-icon-item">
                    <ArrowRight size={28} />
                    <span>Conversion Optimization</span>
                  </div>
                </div>
                <div className="approach-stats">
                  <div className="approach-stat">
                    <span className="stat-number">65%</span>
                    <span className="stat-label">Avg. Ranking Improvement</span>
                  </div>
                  <div className="approach-stat">
                    <span className="stat-number">3X</span>
                    <span className="stat-label">Organic Traffic Growth</span>
                  </div>
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
