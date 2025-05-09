"use client"

import { useState, useEffect, useRef } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Rocket,
  Search,
  Target,
  Link,
  Tag,
  Globe,
  Trophy,
  BarChart2,
  KeyRound,
  MessageCircle,
  Facebook,
} from "lucide-react"
import "./ProductLaunch.css"
import Testimonials from "../../LandingPage/Testimonial/Testimonial"

const ProductLaunch = () => {
  const [activeCard, setActiveCard] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const cardsRef = useRef(null)
  const autoPlayRef = useRef(null)

  const cards = [
    {
      id: 1,
      icon: <Search size={28} />,
      title: "Keyword Research",
      description:
        "Different buyer intents used on Amazon for searching the desired product are provided by advanced keyword research.",
    },
    {
      id: 2,
      icon: <Target size={28} />,
      title: "Targeting Different Intents",
      description: "Ranking is determined by targeting intent keywords one by one.",
    },
    {
      id: 3,
      icon: <Link size={28} />,
      title: "URL Generators",
      description:
        "Super URLs are used to bring traffic to your product page by putting keywords in these Special URLs to rank on the certain intent.",
    },
    {
      id: 4,
      icon: <Tag size={28} />,
      title: "Discount Coupons",
      description: "Discount coupons are provided to increase engagement on your product listing.",
    },
    {
      id: 5,
      icon: <Globe size={28} />,
      title: "Google Search Ranking",
      description: "Canonical keywords are produced to rank your listing on Google search results.",
    },
    {
      id: 6,
      icon: <Trophy size={28} />,
      title: "Ranking",
      description:
        "We bring traffic by SFB method to get more weightage by Amazon after getting ranked on page 1. Reviews and public questions are collected for making your listing stable.",
    },
    {
      id: 7,
      icon: <BarChart2 size={28} />,
      title: "BSR Tracking",
      description:
        "Our dedicated team actively keeps an eye on your as well as your competitors' BSR (Best Seller Rank) at different times of the day.",
    },
    {
      id: 8,
      icon: <KeyRound size={28} />,
      title: "Keyword Tracking",
      description: "Keyword Tracker is used for tracking keywords positioning.",
    },
    {
      id: 9,
      icon: <MessageCircle size={28} />,
      title: "Customers Interaction",
      description:
        "Our launch experts use chatbots like manychat to interact with customers during your launch period.",
    },
    {
      id: 10,
      icon: <Facebook size={28} />,
      title: "Facebook Components",
      description:
        "We use Facebook pages, Facebook ads manager and Facebook business manager for handling Facebook traffic.",
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
    <section className="pl-section">
      {/* Hero Section */}
      <div className="pl-hero">
        <div className="pl-container">
          <div className="pl-hero-content">
            <div className="pl-tag">PRODUCT LAUNCH</div>
            <h1 className="pl-hero-title">
              Our Amazon Journey starts with the <span className="pl-highlight">Winning Product Selection</span> that
              guarantees Business Success
            </h1>
            <p className="pl-hero-description">
              We propose a wholesome launch bundle to Skyrocket your PL business. From keyword research to customer
              interaction, our comprehensive approach ensures your product gets the best possible start on Amazon.
            </p>
            <button className="pl-cta-button">
              Schedule a Consultation Call <Rocket size={18} className="pl-icon-rocket" />
            </button>
          </div>
          <div className="pl-hero-image">
            <div className="pl-image-placeholder">
              <div className="pl-rocket-animation">
                <Rocket size={80} className="pl-rocket-icon" />
                <div className="pl-rocket-trail"></div>
              </div>
              <div className="pl-image-shape"></div>
              <div className="pl-image-circle"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="pl-process">
        <div className="pl-container">
          <div className="pl-process-layout">
            <div className="pl-process-content">
              <div className="pl-tag">OUR LAUNCH STRATEGY</div>
              <h2 className="pl-process-title">
                Comprehensive <span className="pl-highlight">Launch Bundle</span> to Skyrocket Your Business
              </h2>
              <p className="pl-process-description">
                Our proven product launch strategy is designed to give your Amazon products the best possible start. We
                handle everything from keyword research to customer interaction, ensuring your product gains visibility,
                rankings, and sales from day one.
              </p>
            </div>

            <div className="pl-cards-wrapper">
              <div
                className="pl-cards-container"
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
                    className={`pl-card ${
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
                    <div className="pl-card-icon">{card.icon}</div>
                    <h3 className="pl-card-title">{card.title}</h3>
                    <p className="pl-card-description">{card.description}</p>
                  </div>
                ))}

                <button className="pl-nav-button prev-button" onClick={prevCard} aria-label="Previous card">
                  <ChevronLeft size={24} />
                </button>
                <button className="pl-nav-button next-button" onClick={nextCard} aria-label="Next card">
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="pl-card-indicators">
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
      <div className="pl-stats">
        <div className="pl-container">
          <div className="pl-stats-header">
            <h2>We help brands win on Amazon</h2>
            <p>
              We help brands selling on Amazon Vendor Central and Seller Central maximize sales and profitability by
              providing complete strategy, management and operational services.
            </p>
          </div>
          <div className="pl-stats-grid">
            <div className="pl-stat-item">
              <h3 className="pl-stat-number">200+</h3>
              <p className="pl-stat-label">Brands We Helped</p>
            </div>
            <div className="pl-stat-item">
              <h3 className="pl-stat-number">60</h3>
              <p className="pl-stat-label">Client Sales on Amazon</p>
            </div>
          </div>
        </div>
      </div>
      <Testimonials/>
    </section>
  )
}

export default ProductLaunch
