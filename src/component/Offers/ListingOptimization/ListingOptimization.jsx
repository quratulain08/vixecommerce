"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, CheckCircle, Edit, ImageIcon, Search, FileText, BarChart2, TrendingUp } from "lucide-react"
import { useNavigate } from "react-router-dom"
import "./ListingOptimization.css"
import Testimonial from "../../LandingPage/Testimonial/Testimonial"
import Brand from "../../LandingPage/FeaturedPartners/FeaturedPartners"

const ListingOptimization = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const optimizationStepsRef = useRef([])
  const seoStepsRef = useRef([])
  const elementsRef = useRef([])
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

              elementsRef.current.forEach((element, index) => {
                if (element && entry.target === element) {
                  setTimeout(() => {
                    element.classList.add("animate")
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

    elementsRef.current.forEach((element) => {
      if (element) {
        observer.observe(element)
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
      elementsRef.current.forEach((element) => {
        if (element) {
          observer.unobserve(element)
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

  const listingElements = [
    {
      id: "title",
      title: "Product Titles",
      before: "Yoga Mat",
      after:
        'Premium Yoga Mat 1/4" Thick, Non-Slip Exercise & Fitness Mat with Carrying Strap for Yoga, Pilates & Floor Exercises (72"x24")',
      className: "title-card",
    },
    {
      id: "bullet",
      title: "Bullet Points",
      before: "• Thick yoga mat\n• Non-slip\n• Comes with strap",
      after:
        '• <span class="bullet-highlight">EXTRA THICK & COMFORTABLE:</span> 1/4 inch (6mm) thick premium mat provides optimal cushioning for joints and excellent balance support\n <br/> • <span class="bullet-highlight">NON-SLIP TEXTURE:</span> Double-sided textured surface ensures grip and stability during the most challenging poses',
      className: "bullet-card",
    },
    {
      id: "description",
      title: "Product Descriptions",
      before: "This is a yoga mat for exercise. It's thick and non-slip.",
      after:
        'Transform your yoga practice with our Premium Yoga Mat, designed for yogis of all levels. The perfect balance of cushioning and stability, our 1/4" thick mat protects your joints while providing the firm foundation you need for balance poses...',
      className: "description-card",
    },
    {
      id: "image",
      title: "Product Images",
      before: "Single product photo on white background",
      after:
        "Main image + lifestyle images + infographics highlighting key features + size comparison + packaging + close-up details",
      className: "image-card",
    },
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
            Listing optimization
            <br />
            <span className="gradient-text">& SEO</span>
          </h1>
          <div className="hero-line"></div>
          <p className="hero-subtitle">
            Transform your listings into high-converting sales machines with maximum visibility
          </p>
          <button className="hero-button" onClick={handleGetStartedClick}>
            Get Started <ArrowRight size={16} className="btn-icon" />
          </button>
        </div>
      </div>

      <div className="optimization-container">
        <div className="optimization-content" ref={contentRef}>
          <div className="overview-section">
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
           <div className="benefits-section">
            <h3 className="benefits-title">Benefits of Optimized Listings & SEO</h3>
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

        <div className="optimization-elements">
          <div className="section-badge">WHAT WE OPTIMIZE</div>
          <h2 className="section-title">Key Listing Elements</h2>

          <div className="elements-grid">
            {listingElements.map((element, index) => (
              <div
                key={element.id}
                className={`element-card ${element.className}`}
                ref={(el) => (elementsRef.current[index] = el)}
              >
                <div className="element-header">
                  <h3>{element.title}</h3>
                </div>
                <div className="element-content">
                  <div className="element-before">
                    <h4>Before</h4>
                    <p dangerouslySetInnerHTML={{ __html: element.before }}></p>
                  </div>
                  <div className="element-after">
                    <h4>After</h4>
                    <p dangerouslySetInnerHTML={{ __html: element.after }}></p>
                  </div>
                </div>
              </div>
            ))}
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
          <button className="cta-button" onClick={handleGetStartedClick}>
            Get Optimized Listings <ArrowRight size={16} className="btn-icon" />
          </button>
        </div>
      </div>
      <Testimonial />
      <Brand />
    </section>
  )
}

export default ListingOptimization
