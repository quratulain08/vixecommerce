"use client"

import { useState, useEffect, useRef } from "react"
import "./SEO.css"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const SEO = () => {
  const [activeCard, setActiveCard] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const cardsRef = useRef(null)
  const autoPlayRef = useRef(null)

  const cards = [
    {
      id: 1,
      title: "Free Account Audit",
      description:
        "Start with a thorough analysis of your current SEO performance. We'll identify keywords, and relevancy gaps to help you improve your ranking. This audit will highlight all the keywords missing. A new title and bullets will be compared so that you know why our SEO works!",
    },
    {
      id: 2,
      title: "Plan of Action Set Up",
      description:
        "Our team will adjust the titles. All the keywords included in the title and bullets will be tracked through Helium10. The organic rank improvement data will be presented to you on a weekly basis so that you are reaching your SEO milestones with measurable improvements.",
    },
    {
      id: 3,
      title: "Results Optimization",
      description:
        "Our work doesn't stop once we reach the milestones. We continuously fine-tune and optimize your SEO performance to ensure sustainable, long-term growth. Once we achieve consistent organic ranking, we keep on adding a variation of new keywords that are bound to increase traffic on your listing.",
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
    <section className="seo-section">
      {/* Hero Section */}
      <div className="seo-hero">
        <div className="seo-container">
          <div className="seo-hero-content">
            <div className="seo-tag">SEO BOOST</div>
            <h1 className="seo-hero-title">
              Get the <span className="seo-highlight">SEO Results</span> You Deserve
            </h1>
            <h2 className="seo-hero-subtitle">
              More Traffic & Sales <span className="seo-highlight">WITHOUT</span> the Ad-Spend!
            </h2>
            <p className="seo-hero-description">
              Our proven process will guide you through every step, from a free account audit to optimizing for maximum
              results. Whether you're aiming to improve rankings, drive more traffic, and boost conversions through SEO
              with a great copy side by side.
            </p>
            <button className="seo-cta-button">Book Call Now</button>
          </div>
          <div className="seo-hero-image">
            <div className="seo-image-placeholder">
              <div className="seo-image-shape"></div>
              <div className="seo-image-circle"></div>
            </div>
          </div>
        </div>
      </div>

      {/* How We Do It Section */}
      <div className="seo-process">
        <div className="seo-container">
          <div className="seo-process-layout">
            <div className="seo-process-content">
              <div className="seo-tag">HOW WE DO IT</div>
              <h2 className="seo-process-title">
                Learn the Next Steps to Get the <span className="seo-highlight">SEO Results</span> You Want
              </h2>
              <p className="seo-process-description">
                Unlock the full potential of your SEO strategy with our step-by-step approach. Your Amazon listing title
                and bullets will be fed to Data Dive and you will get a detailed report on all the keywords that are
                missed. From broad match types to exact match types, we cover it all. See what you are missing and sign
                up for a free audit right away.
              </p>
            </div>

            <div className="seo-cards-wrapper">
              <div
                className="seo-cards-container"
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
                    className={`seo-card ${
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
                    <div className="seo-card-icon">
                      <Star size={28} />
                    </div>
                    <h3 className="seo-card-title">{card.title}</h3>
                    <p className="seo-card-description">{card.description}</p>
                  </div>
                ))}

                <button className="seo-nav-button prev-button" onClick={prevCard} aria-label="Previous card">
                  <ChevronLeft size={24} />
                </button>
                <button className="seo-nav-button next-button" onClick={nextCard} aria-label="Next card">
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="seo-card-indicators">
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
    </section>
  )
}

export default SEO
