"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, Play } from 'lucide-react'
import "./GetStarted.css"
import { useNavigate } from "react-router-dom"

const GetStarted = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
   const navigate = useNavigate();
  
    const handleGetStartedClick = () =>{
      navigate('/contact')
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

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
      if (contentRef.current) observer.unobserve(contentRef.current)
    }
  }, [])

  return (
    <section className="hero-section" ref={sectionRef}>
      {/* Animated Background */}
      <div className="hero-background">
        <div className="gradient-overlay"></div>

        {/* Floating Bubbles */}
        <div className="bubbles-container">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`bubble bubble-${i + 1}`}
              style={{
                "--delay": `${Math.random() * 8}s`,
                "--duration": `${12 + Math.random() * 8}s`,
                "--size": `${30 + Math.random() * 80}px`,
                "--start-x": `${Math.random() * 100}%`,
                "--end-x": `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Particle Network */}
        <div className="particles-network">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                "--delay": `${Math.random() * 4}s`,
                "--x": `${Math.random() * 100}%`,
                "--y": `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Floating Shapes */}
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      {/* Content */}
      <div className="hero-content" ref={contentRef}>
        <div className="hero-badge">
          <span className="badge-icon">🚀</span>
          AMAZON GROWTH EXPERTS
        </div>

        <h1 className="hero-title">
          Your end-to-end
          <br />
          <span className="highlight-text">Amazon management</span>
          <br />
          partner for sustainable growth
        </h1>

        <p className="hero-description">
          We have individual expert team members for Product Research & Sourcing, Content Writing, Graphic Design, SEO,
          and PPC Management all under one roof. No need to hire across multiple agencies when you can get it all done
          in one place.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary" onClick={handleGetStartedClick}>
            <span>Book Call Now</span>
            <ArrowRight size={18} className="btn-icon" />
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">$15M+</span>
            <span className="stat-label">Revenue Generated</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">100+</span>
            <span className="stat-label">Brands Scaled</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">92%</span>
            <span className="stat-label">Client Retention</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetStarted
