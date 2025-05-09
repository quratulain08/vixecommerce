"use client"

import { useState, useEffect, useRef } from "react"
import { Shield, AlertCircle, FileText, FileWarning, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react"
import "./AccountMaintenance.css"
import Testimonials from "../../LandingPage/Testimonial/Testimonial"

const AccountMaintenance = () => {
  const [activeCard, setActiveCard] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const cardsRef = useRef(null)
  const autoPlayRef = useRef(null)
  const shieldRef = useRef(null)

  // Shield animation
  useEffect(() => {
    const shieldElement = shieldRef.current
    if (shieldElement) {
      const pulseAnimation = () => {
        shieldElement.classList.add("pulse")
        setTimeout(() => {
          shieldElement.classList.remove("pulse")
        }, 1000)
      }

      // Initial pulse
      pulseAnimation()

      // Pulse every 3 seconds
      const interval = setInterval(pulseAnimation, 3000)

      return () => clearInterval(interval)
    }
  }, [])

  const cards = [
    {
      id: 1,
      icon: <AlertCircle size={28} />,
      title: "Account Health Examination",
      description:
        "Our expert team checks your account's health on a daily basis and ensures the account's protection.",
    },
    {
      id: 2,
      icon: <Shield size={28} />,
      title: "Account Protection",
      description: "We make sure your ASIN remains active all the time and it shoots your sales.",
    },
    {
      id: 3,
      icon: <FileText size={28} />,
      title: "Account Suspension Appeal",
      description:
        "Get interacted with our legal team and prevent your account from suspension and receive an effective and customised appeal as per your condition.",
    },
    {
      id: 4,
      icon: <FileWarning size={28} />,
      title: "ASIN Suspension Appeal",
      description:
        "A well drafted ASIN suspension appeal including all the ins-outs of the actionable plan will help reinstate your ASIN.",
    },
    {
      id: 5,
      icon: <ShoppingCart size={28} />,
      title: "Daily Order Management",
      description:
        "Daily order management of your FBA and FBM accounts is taken in control with much vigilance and daily reporting of your account is carried out.",
    },
  ]

  // Auto-rotate cards every 5 seconds
  useEffect(() => {
    const nextSlide = () => {
      if (!isPaused) {
        setActiveCard((prev) => (prev === cards.length - 1 ? 0 : prev + 1))
      }
    }

    autoPlayRef.current = setInterval(nextSlide, 5000)

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isPaused, cards.length])

  // Handle manual navigation
  const goToCard = (index) => {
    setActiveCard(index)
    // Reset the interval when manually changing cards
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
      autoPlayRef.current = setInterval(() => {
        if (!isPaused) {
          setActiveCard((prev) => (prev === cards.length - 1 ? 0 : prev + 1))
        }
      }, 5000)
    }
  }

  const nextCard = () => {
    goToCard(activeCard === cards.length - 1 ? 0 : activeCard + 1)
  }

  const prevCard = () => {
    goToCard(activeCard === 0 ? cards.length - 1 : activeCard - 1)
  }

  // Handle touch events for swipe
  const handleTouchStart = (e) => {
    setIsPaused(true)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    setIsPaused(false)

    // Minimum swipe distance threshold
    const minSwipeDistance = 50

    if (touchStart - touchEnd > minSwipeDistance) {
      // Swipe left (next)
      nextCard()
    }

    if (touchStart - touchEnd < -minSwipeDistance) {
      // Swipe right (prev)
      prevCard()
    }
  }

  // Pause auto-rotation on hover
  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  return (
    <section className="am-section">
      {/* Hero Section */}
      <div className="am-hero">
        <div className="am-container">
          <div className="am-hero-content">
            <div className="am-tag">ACCOUNT MAINTENANCE</div>
            <h1 className="am-hero-title">
              Build your confidence, sell with <span className="am-highlight">satisfaction</span> and let us take your
              worries
            </h1>
            <p className="am-hero-description">
              Establish a successful business with a healthy profitable account. Our comprehensive account management
              services ensure your Amazon business runs smoothly without interruptions.
            </p>
            <button className="am-cta-button">Schedule a consultation call</button>
          </div>
          <div className="am-hero-image">
            <div className="am-image-placeholder">
              <div className="am-shield-container" ref={shieldRef}>
                <Shield size={100} className="am-shield-icon" />
                <div className="am-shield-glow"></div>
              </div>
              <div className="am-image-shape"></div>
              <div className="am-image-circle"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="am-services">
        <div className="am-container">
          <div className="am-services-layout">
            <div className="am-services-content">
              <div className="am-tag">OUR SERVICES</div>
              <h2 className="am-services-title">
                Comprehensive <span className="am-highlight">Account Protection</span> Services
              </h2>
              <p className="am-services-description">
                We provide end-to-end account maintenance services to keep your Amazon business running smoothly. From
                daily health checks to suspension appeals, we've got you covered.
              </p>
            </div>

            <div className="am-cards-wrapper">
              <div
                className="am-cards-container"
                ref={cardsRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {cards.map((card, index) => (
                  <div
                    key={card.id}
                    className={`am-card ${
                      index === activeCard
                        ? "active"
                        : index === (activeCard + 1) % cards.length
                          ? "next"
                          : index === (activeCard - 1 + cards.length) % cards.length
                            ? "prev"
                            : ""
                    }`}
                    aria-hidden={index !== activeCard}
                  >
                    <div className="am-card-icon">{card.icon}</div>
                    <h3 className="am-card-title">{card.title}</h3>
                    <p className="am-card-description">{card.description}</p>
                  </div>
                ))}

                <button className="am-nav-button prev-button" onClick={prevCard} aria-label="Previous card">
                  <ChevronLeft size={24} />
                </button>
                <button className="am-nav-button next-button" onClick={nextCard} aria-label="Next card">
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="am-card-indicators">
                {cards.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === activeCard ? "active" : ""}`}
                    onClick={() => goToCard(index)}
                    aria-label={`Go to card ${index + 1}`}
                    aria-current={index === activeCard}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="am-stats">
        <div className="am-container">
          <div className="am-stats-header">
            <h2>We help brands win on Amazon</h2>
            <p>
              We help brands selling on Amazon Vendor Central and Seller Central maximize sales and profitability by
              providing complete strategy, management and operational services.
            </p>
          </div>
          <div className="am-stats-grid">
            <div className="am-stat-item">
              <h3 className="am-stat-number">200+</h3>
              <p className="am-stat-label">Brands We Helped</p>
            </div>
            <div className="am-stat-item">
              <h3 className="am-stat-number">60</h3>
              <p className="am-stat-label">Client Sales on Amazon</p>
            </div>
          </div>
        </div>
      </div>
      <Testimonials/>
    </section>
  )
}

export default AccountMaintenance
