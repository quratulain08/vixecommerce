"use client"

import { useState, useEffect, useRef } from "react"
import {
  Users,
  Search,
  MessageSquare,
  BarChart2,
  Target,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Twitter,
  Youtube,
  Facebook,
  TwitterIcon as TikTok,
} from "lucide-react"
import "./InfluencerMarketing.css"
import Testimonials from "../../LandingPage/Testimonial/Testimonial"

const InfluencerMarketing = () => {
  const [activeCard, setActiveCard] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const cardsRef = useRef(null)
  const autoPlayRef = useRef(null)
  const socialIconsRef = useRef(null)

  // Floating social icons animation
  useEffect(() => {
    const icons = socialIconsRef.current?.querySelectorAll(".im-social-icon")
    if (icons && icons.length) {
      icons.forEach((icon, index) => {
        const delay = index * 0.5
        icon.style.animationDelay = `${delay}s`
      })
    }
  }, [])

  const cards = [
    {
      id: 1,
      icon: <Users size={28} />,
      title: "Influencer Hunting",
      description:
        "Our influencer hunting techniques include finding best influencers based on their engagement rates, targeted countries and weekly post stats. Our hunting techniques consist of both manual & automated methods which ensure you get the best fit for your brand.",
    },
    {
      id: 2,
      icon: <MessageSquare size={28} />,
      title: "Reaching Out & Follow Ups",
      description:
        "Our dedicated marketing teams make sure shortlisted influencers are timely reached with a custom welcome note. They are followed up regularly to make the perfect business deals.",
    },
    {
      id: 3,
      icon: <Target size={28} />,
      title: "KPIs Setup",
      description:
        "Certain valuable Key performance Indicators are set according to the campaign objectives and ensured they are fulfilled on stipulated deadline.",
    },
    {
      id: 4,
      icon: <BarChart2 size={28} />,
      title: "Tracking the Shout out Campaign",
      description:
        "Shout out campaigns are finalized within your due budget. All campaigns and promotions are tracked for given time period with all public interactive statistics on all social channels.",
    },
    {
      id: 5,
      icon: <Search size={28} />,
      title: "Reports & Analytics",
      description:
        "The final step is to form an overall analytics report comprises of pre and post campaign stats, improvements in the given campaign and future recommendation for the niche brand promotions.",
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
    <section className="im-section">
      {/* Hero Section */}
      <div className="im-hero">
        <div className="im-container">
          <div className="im-hero-content">
            <div className="im-tag">INFLUENCER MARKETING</div>
            <h1 className="im-hero-title">
              We believe in the art of <span className="im-highlight">dominance</span> & influence your brand to rule &
              become people's choice
            </h1>
            <p className="im-hero-description">
              Successful social media influencers guarantee the 100% success of your brand. Global Insightful Campaigns,
              Tailor-made Strategy, and partnerships with influencers make our strategy a No.1 strategy for your brand.
            </p>
            <button className="im-cta-button">Drive More Traffic To Your AMZ Business</button>
          </div>
          <div className="im-hero-image">
            <div className="im-image-placeholder">
              <div className="im-social-icons" ref={socialIconsRef}>
                <div className="im-social-icon im-instagram">
                  <Instagram size={40} />
                </div>
                <div className="im-social-icon im-twitter">
                  <Twitter size={40} />
                </div>
                <div className="im-social-icon im-youtube">
                  <Youtube size={40} />
                </div>
                <div className="im-social-icon im-facebook">
                  <Facebook size={40} />
                </div>
                <div className="im-social-icon im-tiktok">
                  <TikTok size={40} />
                </div>
              </div>
              <div className="im-image-shape"></div>
              <div className="im-image-circle"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="im-process">
        <div className="im-container">
          <div className="im-process-layout">
            <div className="im-process-content">
              <div className="im-tag">OUR CAMPAIGN PROCESS</div>
              <h2 className="im-process-title">
                Influencer <span className="im-highlight">Funnel</span>
              </h2>
              <p className="im-process-description">
                Our IM process works like a funnel with step by step approach. At Zelevate, we develop and execute
                influencer marketing strategies on a global scale. Based on your brand goals, we shape the optimal
                strategy that is right for you.
              </p>
            </div>

            <div className="im-cards-wrapper">
              <div
                className="im-cards-container"
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
                    className={`im-card ${
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
                    <div className="im-card-icon">{card.icon}</div>
                    <h3 className="im-card-title">{card.title}</h3>
                    <p className="im-card-description">{card.description}</p>
                  </div>
                ))}

                <button className="im-nav-button prev-button" onClick={prevCard} aria-label="Previous card">
                  <ChevronLeft size={24} />
                </button>
                <button className="im-nav-button next-button" onClick={nextCard} aria-label="Next card">
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="im-card-indicators">
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

      {/* CTA Section */}
      <div className="im-cta-section">
        <div className="im-container">
          <div className="im-cta-content">
            <h2>Want to Drive More Traffic To Your AMZ Business?</h2>
            <p>
              We handle it all: from developing creative concepts to campaign realisation and measuring and reporting on
              the results, we make sure it's done properly.
            </p>
            <button className="im-secondary-button">Schedule a Consultation Call</button>
          </div>
        </div>
      </div>
      <Testimonials/>
    </section>
    
  )
}

export default InfluencerMarketing
