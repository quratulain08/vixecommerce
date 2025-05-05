"use client"

import { useState, useEffect, useRef } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import "./AmazonPPCManagement.css"

const AmazonPPCManagement = () => {
  const [activeCard, setActiveCard] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const cardsRef = useRef(null)
  const autoPlayRef = useRef(null)

  const cards = [
    {
      id: 1,
      title: "Account Audit",
      description:
        "We start with a comprehensive analysis of your account and marketplace performance. This includes a deep dive into your product listings, past ad performance, keyword rankings, market trends, and competitor insights. Our goal is to identify your strengths and highlight key areas for immediate improvement to set a solid foundation for growth.",
    },
    {
      id: 2,
      title: "Tailored Strategy",
      description:
        "Your brand's uniqueness requires a customized strategy. We craft a plan designed specifically for your needs, whether that involves optimizing current campaigns, scaling operations, relaunching, or boosting organic rankings. Our focus is on achieving the perfect balance between visibility and cost-effectiveness.",
    },
    {
      id: 3,
      title: "Campaign Launch",
      description:
        "With the strategy in place, we quickly set your campaigns in motion. Our team manages everything from restructuring campaigns and targeting profitable keywords to fine-tuning ads for optimal performance. The outcome? Increased sales, reduced ACoS, and a positive impact on overall profitability.",
    },
    {
      id: 4,
      title: "A Collaborative Partnership",
      description:
        "We don't see ourselves as just another agency—we become an extension of your marketing team. Your dedicated project manager ensures seamless collaboration, keeping our efforts aligned with your business objectives and working closely with you to achieve them.",
    },
    {
      id: 5,
      title: "Transparent Analytics & Reporting",
      description:
        "Stay in the loop with clear, regular updates. We provide daily, weekly, and monthly reports covering PPC spend, sales, sessions, conversion rates, and cost-per-acquisition. These reports give you a clear understanding of what's driving performance and how your campaigns are evolving.",
    },
    {
      id: 6,
      title: "Continuous Optimization & Growth",
      description:
        "Our work doesn't stop at launch. We constantly test, tweak, and refine your campaigns to achieve maximum performance. Even once we've hit optimal results, we continue to iterate and adapt to the ever-changing Amazon landscape, ensuring long-term growth and success.",
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
    <section className="ppc-section">
      {/* Hero Section */}
      <div className="ppc-hero">
        <div className="ppc-container">
          <div className="ppc-hero-content">
            <h1 className="ppc-hero-title">Amazon PPC Management</h1>
            <h2 className="ppc-hero-subtitle">Driving Traffic that Converts!</h2>
            <p className="ppc-hero-description">
              PPC can be scary... but we know all the tips and tricks to get the sales going profitably. We use
              laser-focus keyword targeting techniques that bring in traffic bound to convert.
            </p>
            <button className="ppc-cta-button">Book Call Now</button>
          </div>
          <div className="ppc-hero-image">
            <div className="ppc-image-placeholder">
              <div className="ppc-image-shape"></div>
              <div className="ppc-image-circle"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="ppc-process">
        <div className="ppc-container">
          <div className="ppc-process-layout">
            <div className="ppc-process-content">
              <div className="ppc-tag">HOW WE DO IT</div>
              <h2 className="ppc-process-title">Our Proven Process for Driving Success</h2>
              <p className="ppc-process-description">
                Unlock the full potential of your Amazon PPC campaigns with our expert management. Our strategic
                approach is designed to deliver both immediate wins and sustainable, long-term growth!
              </p>
            </div>

            <div className="ppc-cards-wrapper">
              <div
                className="ppc-cards-container"
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
                    className={`ppc-card ${
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
                    <div className="ppc-card-icon">
                      <Star size={28} />
                    </div>
                    <h3 className="ppc-card-title">{card.title}</h3>
                    <p className="ppc-card-description">{card.description}</p>
                  </div>
                ))}

                <button className="ppc-nav-button prev-button" onClick={prevCard} aria-label="Previous card">
                  <ChevronLeft size={24} />
                </button>
                <button className="ppc-nav-button next-button" onClick={nextCard} aria-label="Next card">
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="ppc-card-indicators">
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

export default AmazonPPCManagement
