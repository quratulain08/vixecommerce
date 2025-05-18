"use client"

import { useEffect, useRef, useState } from "react"
import {
  CheckCircle,
  TrendingUp,
  BarChart2,
  ArrowRight,
  Users,
  Target,
  Shield,
  Search,
  Package,
  Rocket,
} from "lucide-react"
import "./AboutUs.css"

const AboutUs = () => {
  const sectionRef = useRef(null)
  const statsRef = useRef(null)
  const contentRef = useRef(null)
  const cardsRef = useRef([])
  const [animateStats, setAnimateStats] = useState(false)

  useEffect(() => {
     window.scrollTo(0,0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              entry.target.classList.add("animate")
            } else if (entry.target === statsRef.current) {
              setAnimateStats(true)
              entry.target.querySelectorAll(".stat-card").forEach((card, index) => {
                setTimeout(() => {
                  card.classList.add("animate")
                }, index * 150)
              })
            } else if (entry.target === contentRef.current) {
              entry.target.classList.add("animate")
            } else {
              cardsRef.current.forEach((card, index) => {
                if (card && entry.target === card) {
                  setTimeout(() => {
                    card.classList.add("animate")
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

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    if (contentRef.current) {
      observer.observe(contentRef.current)
    }

    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card)
      }
    })

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
      if (contentRef.current) {
        observer.unobserve(contentRef.current)
      }
      cardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card)
        }
      })
    }
  }, [])

  const services = [
    {
      id: 1,
      title: "Amazon PPC Management",
      description: "Maximize ROI with strategic, sales-driven Amazon ads.",
      icon: <TrendingUp size={24} />,
      color: "blue",
    },
    {
      id: 2,
      title: "Amazon FBA Management",
      description: "Streamline fulfillment for smoother Amazon operations.",
      icon: <Package size={24} />,
      color: "green",
    },
    {
      id: 3,
      title: "Listing Optimization & SEO",
      description: "Boost visibility and conversions with optimized listings.",
      icon: <CheckCircle size={24} />,
      color: "purple",
    },
    {
      id: 4,
      title: "Amazon Brand & Product Launch",
      description: "Launch successfully with sourcing, setup, and listing support.",
      icon: <Rocket size={24} />,
      color: "orange",
    },
    {
      id: 5,
      title: "Efficient Sourcing",
      description: "Find reliable suppliers and manage sourcing end-to-end.",
      icon: <BarChart2 size={24} />,
      color: "blue",
    },
    {
      id: 6,
      title: "Amazon Listing Audit",
      description: "Get actionable insights to improve and optimize listings.",
      icon: <Search size={24} />,
      color: "green",
    },
  ]

  const stats = [
    { value: "50+", label: "Helped Brands", startValue: 0, endValue: 100, suffix: "+" },
    { value: "€4.3M", label: "Revenue Managed per Quarter", startValue: 0, endValue: 15, prefix: "$", suffix: "M+" },
    { value: "93%", label: "Success Rate", startValue: 0, endValue: 92, suffix: "%" },
    { value: "6", label: "Amazon Experts", startValue: 0, endValue: 7 },
  ]

  const values = [
    {
      icon: <Target size={24} />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering results that exceed expectations.",
    },
    {
      icon: <Shield size={24} />,
      title: "Integrity",
      description: "We operate with complete transparency and honesty, building trust with our clients.",
    },
    {
      icon: <Users size={24} />,
      title: "Collaboration",
      description: "We work closely with our clients, treating their business as our own.",
    },
  ]

  return (
    <section className="about-section">
      <div className="about-hero" ref={sectionRef}>
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
        <div className="about-hero-content">
          <div className="hero-badge">ABOUT US</div>
          <h1>
            YOUR ONE-STOP
            <br />
            <span className="gradient-text">AMAZON GROWTH PARTNER</span>
          </h1>
          <div className="hero-line"></div>
          <p className="hero-subtitle">Empowering brands to thrive in the Amazon marketplace</p>
          <button className="hero-button">
            Learn More <ArrowRight size={16} className="btn-icon" />
          </button>
        </div>
      </div>

      <div className="about-container">
        <div className="about-content" ref={contentRef}>
          <div className="about-text">
            <div className="section-badge">OUR STORY</div>
            <h2 className="section-title">Who We Are</h2>
            <p>
              Vix Commerce empowers businesses to thrive on Amazon. Founded in 2021 by two passionate Amazon
              freelancers, we've grown from a duo to a team of seven experts. We understand the Amazon landscape
              inside-out, having transitioned from freelancers to a full-service agency dedicated to your success.
            </p>
            <p>
              We offer a comprehensive suite of Amazon services, including PPC management, amazon FBA, listing
              optimization, SEO expertise, and everything in between. Let us navigate the complexities of Amazon and
              unlock your brand's full potential.
            </p>
          </div>

          <div className="about-values">
            <div className="value-card">
              <h3>Our Mission</h3>
              <p>
                To empower e-commerce businesses with strategic Amazon expertise that drives sustainable growth and
                maximizes profitability.
              </p>
            </div>
            <div className="value-card">
              <h3>Our Vision</h3>
              <p>
                To be the most trusted Amazon growth partner, known for delivering exceptional results through
                innovation, integrity, and client-focused solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="stats-section" ref={statsRef}>
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <h2>
                {stat.prefix || ""}
                {animateStats ? stat.value : "0"}
              </h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="values-section">
          <div className="section-badge">OUR VALUES</div>
          <h2 className="section-title">What Drives Us</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-box">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="services-section">
          <div className="section-badge">WHAT WE DO</div>
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`service-card service-${service.color}`}
                ref={(el) => (cardsRef.current[index] = el)}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-hover-effect"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-cta">
          <div className="cta-background">
            <div className="cta-shape cta-shape-1"></div>
            <div className="cta-shape cta-shape-2"></div>
          </div>
          <h2>Ready to Grow Your Amazon Business?</h2>
          <p>
            Partner with Vix Commerce and take your Amazon presence to the next level. Our team of experts is ready to
            help you achieve your e-commerce goals.
          </p>
          <button className="cta-button">
            Get Started Today <ArrowRight size={16} className="btn-icon" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
