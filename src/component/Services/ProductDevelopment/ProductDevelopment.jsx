"use client"

import { useState, useEffect, useRef } from "react"
import { Users, Lightbulb, Target, ChevronLeft, ChevronRight } from "lucide-react"
import "./ProductDevelopment.css"
import Testimonials from "../../LandingPage/Testimonial/Testimonial"

const ProductDevelopment = () => {
  const [activeCard, setActiveCard] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const cardsRef = useRef(null)
  const autoPlayRef = useRef(null)
  const lightbulbRef = useRef(null)

  // Lightbulb animation
  useEffect(() => {
    const lightbulbElement = lightbulbRef.current
    if (lightbulbElement) {
      const glowAnimation = () => {
        lightbulbElement.classList.add("glow")
        setTimeout(() => {
          lightbulbElement.classList.remove("glow")
        }, 1000)
      }

      // Initial glow
      glowAnimation()

      // Glow every 3 seconds
      const interval = setInterval(glowAnimation, 3000)

      return () => clearInterval(interval)
    }
  }, [])

  const cards = [
    {
      id: 1,
      icon: <Users size={28} />,
      title: "Customer Need Analysis",
      description:
        "We start off by hearing out what the customers want rather than what we want to give. It is completed through many ways: 1. Review analysis, 2. FAQs, 3. Article/blog reading, 4. YouTube channels, 5. Following related influencers.",
    },
    {
      id: 2,
      icon: <Lightbulb size={28} />,
      title: "Problem Identification",
      description:
        "Problem identification in your product layout and market dynamics eases the process by many folds. We use audience polls in this process too.",
    },
    {
      id: 3,
      icon: <Target size={28} />,
      title: "Ideal Solution",
      description:
        "Ideal solution that stands out in market ensures the product success to 100% times. We execute it through branding of your solution on social platforms.",
    },
  ]

  // Auto-rotate cards every 5 seconds
  useEffect(() => {
    const nextSlide = () => {
      if (!isPaused) {
        setActiveCard((prev) => (prev === cards.length - 1 ? 0 : prev + 1))
      }
    }

    autoPlayRef.current = setInterval(nextSlide, 2000)

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
    <section className="pd-section">
      {/* Hero Section */}
      <div className="pd-hero">
        <div className="pd-container">
          <div className="pd-hero-content">
            <div className="pd-tag">PRODUCT DEVELOPMENT</div>
            <h1 className="pd-hero-title">
              We develop your <span className="pd-highlight">winning product</span> by Working Backwards from customer
              viewpoint to product specifications
            </h1>
            <p className="pd-hero-description">
              We aim to find gaps in established markets or niches. Our approach starts with understanding customer
              needs, identifying problems, and developing ideal solutions that stand out in the market.
            </p>
            <button className="pd-cta-button">Schedule a Consultation Call</button>
          </div>
          <div className="pd-hero-image">
            <div className="pd-image-placeholder">
              <div className="pd-lightbulb-container" ref={lightbulbRef}>
                <Lightbulb size={100} className="pd-lightbulb-icon" />
                <div className="pd-lightbulb-glow"></div>
              </div>
              <div className="pd-image-shape"></div>
              <div className="pd-image-circle"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="pd-process">
        <div className="pd-container">
          <div className="pd-process-layout">
            <div className="pd-process-content">
              <div className="pd-tag">OUR APPROACH</div>
              <h2 className="pd-process-title">
                From <span className="pd-highlight">Customer Needs</span> to Market Success
              </h2>
              <p className="pd-process-description">
                Our product development process is customer-centric and market-driven. We analyze customer needs,
                identify problems in existing products, and develop innovative solutions that stand out in the
                marketplace.
              </p>
            </div>

            <div className="pd-cards-wrapper">
              <div
                className="pd-cards-container"
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
                    className={`pd-card ${
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
                    <div className="pd-card-icon">{card.icon}</div>
                    <h3 className="pd-card-title">{card.title}</h3>
                    <p className="pd-card-description">{card.description}</p>
                  </div>
                ))}

                <button className="pd-nav-button prev-button" onClick={prevCard} aria-label="Previous card">
                  <ChevronLeft size={24} />
                </button>
                <button className="pd-nav-button next-button" onClick={nextCard} aria-label="Next card">
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="pd-card-indicators">
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
      <div className="pd-stats">
        <div className="pd-container">
          <div className="pd-stats-header">
            <h2>We help brands win on Amazon</h2>
            <p>
              We help brands selling on Amazon Vendor Central and Seller Central maximize sales and profitability by
              providing complete strategy, management and operational services.
            </p>
          </div>
          <div className="pd-stats-grid">
            <div className="pd-stat-item">
              <h3 className="pd-stat-number">200+</h3>
              <p className="pd-stat-label">Brands We Helped</p>
            </div>
            <div className="pd-stat-item">
              <h3 className="pd-stat-number">60</h3>
              <p className="pd-stat-label">Client Sales on Amazon</p>
            </div>
          </div>
        </div>
      </div>
    <Testimonials/>
    </section>
  )
}

export default ProductDevelopment
