"use client"

import { useEffect, useRef } from "react"
import "./AmazonRevenuePartner.css"

const AmazonRevenuePartner = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const statsRefs = useRef([])

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
              statsRefs.current.forEach((stat, index) => {
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

    statsRefs.current.forEach((stat) => {
      if (stat) {
        observer.observe(stat)
      }
    })

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      if (contentRef.current) {
        observer.unobserve(contentRef.current)
      }
      statsRefs.current.forEach((stat) => {
        if (stat) {
          observer.unobserve(stat)
        }
      })
    }
  }, [])

 const stats = [
  {
    id: 1,
    label: "REVENUE MANAGED",
    value: "€4.3M",
    unit: "PER QUARTER",
    color: "orange",
  },
  {
    id: 2,
    label: "SUCCESS RATE",
    value: "93%",
    unit: "CONVERSION RATE",
    color: "orange",
  },
  {
    id: 3,
    label: "WORKED ON",
    value: "30+",
    unit: "CATEGORIES",
    color: "orange",
  },
  {
    id: 4,
    label: "WE'VE HELPED",
    value: "50+",
    unit: "BRANDS",
    subtext: "PROSPER TO NEW HEIGHTS",
    color: "orange",
  },
];
  return (
    <section className="revenue-partner-section" ref={sectionRef}>
      <div className="revenue-partner-container">
        <div className="revenue-partner-content" ref={contentRef}>
          <div className="about-badge">ABOUT US</div>
          <h2 className="about-title">Your Amazon Revenue Partner</h2>
          <p className="about-text">
            At Vix Commerce, we are more than just a service provider; we are your strategic partner in navigating the
            dynamic world of Amazon advertising. With a passion for Amazon excellence and a commitment to driving
            results, we take pride in being a trusted ally for Amazon brand owners seeking to maximize their potential
            on the world's largest online marketplace.
          </p>
        </div>

        <div className="revenue-partner-stats">
          {stats.map((stat, index) => (
            <div key={stat.id} className={`statt-card stat-${stat.color}`} ref={(el) => (statsRefs.current[index] = el)}>
              <div className="statt-content">
                <div className="statt-label">{stat.label}</div>
                <div className="statt-value-container">
                  <span className="statt-value">{stat.value}</span>
                  <span className="statt-unit">{stat.unit}</span>
                </div>
                {stat.subtext && <div className="statt-subtext">{stat.subtext}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AmazonRevenuePartner
