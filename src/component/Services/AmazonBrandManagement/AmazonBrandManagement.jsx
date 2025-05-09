"use client"

import { useState, useEffect, useRef } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import "./AmazonBrandManagement.css"
import Testimonials from "../../LandingPage/Testimonial/Testimonial"

const AmazonBrandManagement = () => {
  const [activeCard, setActiveCard] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const cardsRef = useRef(null)
  const autoPlayRef = useRef(null)

  const cards = [
    {
      id: 1,
      title: "SEO and Competitor Analysis",
      tagline: "Dominate Search Results",
      description:
        "Our mission is to secure and maintain your position on the first page of Amazon search results. Through constant testing and optimization, we don't just move the needle—we aim to make you the top contender and keep you there.",
    },
    {
      id: 2,
      title: "PPC Management",
      tagline: "Boost Sales and Outshine Competitors",
      description:
        "Our PPC strategies are laser-focused on maximizing sales and leaving competitors behind. By optimizing your ad spend, we deliver greater returns and ensure that customers choose your products, time and time again.",
    },
    {
      id: 3,
      title: "Amazon Seasonality Planning",
      tagline: "Stay Ahead of Market Shifts",
      description:
        "We analyze seasonal trends to predict market changes, ensuring your products stay in demand year-round. By understanding these shifts, we help you maintain relevance and capitalize on peak sales periods.",
    },
    {
      id: 4,
      title: "Amazon Listing Optimization and Creation",
      tagline: "Turn Browsers into Buyers",
      description:
        "We create and optimize product listings that convert clicks into sales. By building trust and brand authority, we make your products the obvious choice over competitors, driving more conversions and boosting your bottom line.",
    },
    {
      id: 5,
      title: "Amazon Support Management",
      tagline: "Leave Amazon Support to Us",
      description:
        "Navigating Amazon's support system is critical yet time-consuming. Let us handle it all, from opening cases to resolving issues, so you can focus on growing your business while we take care of the details.",
    },
    {
      id: 6,
      title: "Enhanced Brand Management",
      tagline: "Your Vision, Our Commitment",
      description:
        "We're fully invested in your brand's success. As your dedicated partner, we collaborate on everything from strategic planning to daily operations, ensuring that your vision and our expertise drive your brand to new heights.",
    },
    {
      id: 7,
      title: "Lightning Deal Creation",
      tagline: "Get Noticed, Get Sold",
      description:
        "We craft Lightning Deals that grab attention and drive sales. With our expertly timed deals, your products won't just get seen—they'll be in high demand, helping you dominate the marketplace.",
    },
    {
      id: 8,
      title: "Amazon Inventory and Logistics Management",
      tagline: "Scale Without the Stress",
      description:
        "Don't let logistics slow your growth. We manage your inventory and fulfillment operations, ensuring smooth processes and happy customers, so you can focus on scaling your brand to new heights.",
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
    <section className="brand-section">
      {/* Hero Section */}
      <div className="brand-hero">
        <div className="brand-container">
          <div className="brand-hero-content">
            <h1 className="brand-hero-title">Complete Amazon Account Management</h1>
            <h2 className="brand-hero-subtitle">Focus on Your Brand, While We Handle the Rest</h2>
            <p className="brand-hero-description">
              Success on Amazon takes more than just listing your products—it requires expert attention to every detail.
              That's where we come in. As your all-in-one Amazon partner, we manage every aspect of your account, from
              strategy to execution, ensuring your brand thrives. You can leave the heavy lifting to us and focus on
              what you do best: growing your business and enjoying the results.
            </p>
            <button className="brand-cta-button">Book Call Now</button>
          </div>
          <div className="brand-hero-image">
            <div className="brand-image-placeholder">
              <div className="brand-image-shape"></div>
              <div className="brand-image-circle"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="brand-process">
        <div className="brand-container">
          <div className="brand-process-layout">
            <div className="brand-process-content">
              <div className="brand-tag">HOW WE DO IT</div>
              <h2 className="brand-process-title">A Proven Process for Amazon Success</h2>
              <p className="brand-process-description">
                Our step-by-step approach is designed to maximize your brand's potential on Amazon. From improving
                search rankings to enhancing your listings and managing logistics, we ensure every detail is covered.
              </p>
            </div>

            <div className="brand-cards-wrapper">
              <div
                className="brand-cards-container"
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
                    className={`brand-card ${
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
                    <div className="brand-card-icon">
                      <Star size={28} />
                    </div>
                    <h3 className="brand-card-title">{card.title}</h3>
                    <h4 className="brand-card-tagline">{card.tagline}</h4>
                    <p className="brand-card-description">{card.description}</p>
                  </div>
                ))}

                <button className="brand-nav-button prev-button" onClick={prevCard} aria-label="Previous card">
                  <ChevronLeft size={24} />
                </button>
                <button className="brand-nav-button next-button" onClick={nextCard} aria-label="Next card">
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="brand-card-indicators">
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
      <Testimonials/>
    </section>
  )
}

export default AmazonBrandManagement
