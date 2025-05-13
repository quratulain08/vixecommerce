"use client"

import { useEffect, useRef } from "react"
import "./About.css"

const About = () => {
  const statsRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === contentRef.current) {
              entry.target.classList.add("animate")
            } else if (entry.target === statsRef.current) {
              const statCards = entry.target.querySelectorAll(".stat-card")
              statCards.forEach((card, index) => {
                setTimeout(() => {
                  card.classList.add("animate")
                }, index * 150)
              })
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    if (contentRef.current) {
      observer.observe(contentRef.current)
    }

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current)
      }
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-content" ref={contentRef}>
            <div className="about-badge">ABOUT US</div>
            <h2 className="about-title">Your Amazon Revenue Partner</h2>
            <p className="about-description">
              At Vix Commerce, we are more than just a service provider; we are your strategic partner in navigating the
              dynamic world of Amazon advertising. With a passion for Amazon excellence and a commitment to driving
              results, we take pride in being a trusted ally for Amazon brand owners seeking to maximize their potential
              on the world's largest online marketplace.
            </p>
          </div>

          <div className="about-stats" ref={statsRef}>
            <div className="stat-card">
              <div className="stat-header">MANAGED AD SPEND</div>
              <div className="stat-value">
                <span className="stat-number">15</span>
                <span className="stat-unit">MILLION</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-header">AVERAGE REVENUE GROWTH</div>
              <div className="stat-value">
                <span className="stat-number">135%</span>
                <span className="stat-unit">YOY</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-header">WORKED ON</div>
              <div className="stat-value">
                <span className="stat-number">30+</span>
                <span className="stat-unit">CATEGORIES</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-header">WE'VE HELPED</div>
              <div className="stat-value">
                <span className="stat-number">150+</span>
                <span className="stat-unit">BRANDS</span>
              </div>
              <div className="stat-subtitle">PROSPER TO NEW HEIGHTS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
