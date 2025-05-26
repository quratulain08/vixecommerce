"use client"

import { useEffect, useRef } from "react"
import { CheckCircle, TrendingUp, Award, Users, ArrowRight } from "lucide-react"
import "./GetStarted.css"

const GetStarted = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const featuresRef = useRef([])
  const statsRef = useRef([])

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
              featuresRef.current.forEach((feature, index) => {
                if (feature && entry.target === feature) {
                  setTimeout(() => {
                    feature.classList.add("animate")
                  }, index * 200)
                }
              })
              statsRef.current.forEach((stat, index) => {
                if (stat && entry.target === stat) {
                  setTimeout(() => {
                    stat.classList.add("animate")
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
    featuresRef.current.forEach((feature) => {
      if (feature) observer.observe(feature)
    })
    statsRef.current.forEach((stat) => {
      if (stat) observer.observe(stat)
    })

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
      if (contentRef.current) observer.unobserve(contentRef.current)
      featuresRef.current.forEach((feature) => {
        if (feature) observer.unobserve(feature)
      })
      statsRef.current.forEach((stat) => {
        if (stat) observer.unobserve(stat)
      })
    }
  }, [])

  const features = [
    {
      icon: <Users size={24} />,
      title: "Expert Team",
      description: "Dedicated specialists for every aspect of your Amazon business",
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Proven Results",
      description: "Track record of driving growth and maximizing ROI",
    },
    {
      icon: <Award size={24} />,
      title: "Full Service",
      description: "Complete Amazon management under one roof",
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Quality Assured",
      description: "Premium service delivery with guaranteed satisfaction",
    },
  ]

  const stats = [
    { number: "100+", label: "Clients Served" },
    { number: "$15M+", label: "Sales Generated" },
    { number: "92%", label: "Client Retention" },
    { number: "7+", label: "Expert Team Members" },
  ]

  return (
    <section className="getstarted-main-section" ref={sectionRef}>
      <div className="getstarted-background-wrapper">
        <div className="getstarted-floating-shape getstarted-shape-primary"></div>
        <div className="getstarted-floating-shape getstarted-shape-secondary"></div>
        <div className="getstarted-floating-shape getstarted-shape-tertiary"></div>
        <div className="getstarted-particles-container">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`getstarted-particle getstarted-particle-${i + 1}`}></div>
          ))}
        </div>
      </div>

      <div className="getstarted-content-wrapper">
        <div className="getstarted-hero-content" ref={contentRef}>
          <div className="getstarted-expert-badge">AMAZON EXPERTS</div>

          <h1 className="getstarted-primary-heading">
            Your end-to-end
            <br />
            <span className="getstarted-highlighted-text">brand management</span>
            <br />
            is done in one <span className="getstarted-nowrap-text">place</span>
          </h1>

          <div className="getstarted-divider-line"></div>

          <div className="getstarted-description-block">
            <p>
              We have individual expert team members of <span className="getstarted-accent-text">Product Research</span>{" "}
              & <span className="getstarted-accent-text">Sourcing Experts</span>,{" "}
              <span className="getstarted-accent-text">Content writers</span>,{" "}
              <span className="getstarted-accent-text">Graphic Designers</span>,{" "}
              <span className="getstarted-accent-text">SEO</span>, and{" "}
              <span className="getstarted-accent-text">PPC managers</span> all under one roof. No need to hire across
              multiple agencies or freelancers to pay them a large amount separately when you can all get it done in one
              place.
            </p>
          </div>

          <div className="getstarted-cta-wrapper">
            <button className="getstarted-primary-button">
              Book Call Now <ArrowRight size={16} className="getstarted-button-icon" />
            </button>
          </div>
        </div>

        {/* <div className="getstarted-features-container">
          {features.map((feature, index) => (
            <div key={index} className="getstarted-feature-item" ref={(el) => (featuresRef.current[index] = el)}>
              <div className="getstarted-feature-icon-wrapper">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div> */}
      </div>

      {/* <div className="getstarted-stats-wrapper">
        <div className="getstarted-stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="getstarted-stat-block" ref={(el) => (statsRef.current[index] = el)}>
              <div className="getstarted-stat-value">{stat.number}</div>
              <div className="getstarted-stat-description">{stat.label}</div>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  )
}

export default GetStarted
