"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "./WhyChooseUs.css"

const WhyChooseUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [slideHeight, setSlideHeight] = useState("auto")
  const slideContentsRef = useRef([])
  const autoScrollRef = useRef(null)
  const autoScrollPositionRef = useRef(0) // Track scroll position for manual navigation

  const reasons = [
    {
      id: 1,
      number: "1",
      title: "200+ Satisfied Clients in 5 Years",
      subtitle: "Proven Sales Growth Track Record",
      description:
        "When we say we are good at what we do, we really mean it. It's not us saying that — this is what 200+ people we have served over the past 5 years have to say.",
    },
    {
      id: 2,
      number: "2",
      title: "Team From Top 10 Institutions",
      subtitle: "All-Star Trained Team",
      description:
        "With in-house training and employees that graduate from the top Pakistani schools, we settle for nothing but the very best. From product research to PPC management, we have specialized team members who do it all.",
    },
    {
      id: 3,
      number: "3",
      title: "Up to 80% Revenue Growth Year on Year",
      subtitle: "Data-Backed Decision-Making",
      description:
        "Our team has refined SOPs and proven strategies that have bought amazing results for all our clients. Year on year, we've achieved 80% revenue growth, ROAS increases of up to 45% within a month, and a 35% improvement in conversion rates within one quarter. We have done it all.",
    },
    {
      id: 4,
      number: "4",
      title: "Save Up to 20+ Hours a Week",
      subtitle: "Time Efficient Work",
      description:
        "We tailor our services to meet your specific needs and business goals, providing personalized solutions that drive results. From initial setup to ongoing maintenance, we provide continuous support. By offering all the services you need to run your Amazon store under one roof, we save you valuable time by streamlining the entire process.",
    },
    {
      id: 5,
      number: "5",
      title: "Reduce Costs by 30%",
      subtitle: "One-Stop Shop for All Your Amazon Needs",
      description:
        "We offer all essential services to run your Amazon store, eliminating your need to hire multiple agencies. Our comprehensive approach ensures that you receive high-quality, cost-effective solutions tailored to your specific needs.",
    },
    {
      id: 6,
      number: "6",
      title: "Bi-Weekly Updates & 100% Visibility",
      subtitle: "Transparent Communication",
      description:
        "We maintain open and transparent communication, keeping you informed about the progress and performance of your Amazon operations. We adhere to strict follow-up schedules and meetings, keeping you updated on all decisions and changes that we implement while managing your account.",
    },
  ]

  // Duplicate reasons for continuous scrolling
  const allReasons = [...reasons, ...reasons]

  // Calculate and set the maximum slide height
  useEffect(() => {
    const updateSlideHeight = () => {
      if (slideContentsRef.current && slideContentsRef.current.length > 0) {
        // Give a small delay to ensure content is rendered
        setTimeout(() => {
          let maxHeight = 0
          slideContentsRef.current.forEach((contentEl) => {
            if (contentEl) {
              const height = contentEl.offsetHeight
              maxHeight = Math.max(maxHeight, height)
            }
          })
          // Add some padding to ensure content fits
          setSlideHeight(`${maxHeight + 30}px`)
        }, 100)
      }
    }

    // Update height on window resize
    window.addEventListener("resize", updateSlideHeight)

    // Initial height calculation
    updateSlideHeight()

    return () => {
      window.removeEventListener("resize", updateSlideHeight)
    }
  }, [])

  // Function to manually navigate to next slide
  const nextSlide = () => {
    if (isAnimating || !autoScrollRef.current) return

    // Temporarily pause auto-scrolling during manual navigation
    const wasPaused = isPaused
    setIsPaused(true)
    setIsAnimating(true)

    // Get slide width from the first slide
    const slideWidth = autoScrollRef.current.querySelector(".auto-scroll-slide").offsetWidth + 20 // 20px for margin

    // Update position
    autoScrollPositionRef.current += slideWidth
    autoScrollRef.current.style.transition = "transform 0.5s ease-in-out"
    autoScrollRef.current.style.transform = `translateX(-${autoScrollPositionRef.current}px)`

    // Update current slide indicator
    setCurrentSlide((prev) => (prev === reasons.length - 1 ? 0 : prev + 1))

    // Reset auto-scrolling after animation
    setTimeout(() => {
      setIsAnimating(false)
      autoScrollRef.current.style.transition = "none"
      if (!wasPaused) {
        setIsPaused(false)
      }
    }, 500)
  }

  // Function to manually navigate to previous slide
  const prevSlide = () => {
    if (isAnimating || !autoScrollRef.current) return

    // Temporarily pause auto-scrolling during manual navigation
    const wasPaused = isPaused
    setIsPaused(true)
    setIsAnimating(true)

    // Get slide width from the first slide
    const slideWidth = autoScrollRef.current.querySelector(".auto-scroll-slide").offsetWidth + 20 // 20px for margin

    // Update position (prevent negative values)
    autoScrollPositionRef.current = Math.max(0, autoScrollPositionRef.current - slideWidth)
    autoScrollRef.current.style.transition = "transform 0.5s ease-in-out"
    autoScrollRef.current.style.transform = `translateX(-${autoScrollPositionRef.current}px)`

    // Update current slide indicator
    setCurrentSlide((prev) => (prev === 0 ? reasons.length - 1 : prev - 1))

    // Reset auto-scrolling after animation
    setTimeout(() => {
      setIsAnimating(false)
      autoScrollRef.current.style.transition = "none"
      if (!wasPaused) {
        setIsPaused(false)
      }
    }, 500)
  }

  // Function to go to a specific slide
  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide || !autoScrollRef.current) return

    // Temporarily pause auto-scrolling during manual navigation
    const wasPaused = isPaused
    setIsPaused(true)
    setIsAnimating(true)

    // Get slide width from the first slide
    const slideWidth = autoScrollRef.current.querySelector(".auto-scroll-slide").offsetWidth + 20 // 20px for margin

    // Calculate position based on index
    autoScrollPositionRef.current = index * slideWidth

    // Apply smooth transition
    autoScrollRef.current.style.transition = "transform 0.5s ease-in-out"
    autoScrollRef.current.style.transform = `translateX(-${autoScrollPositionRef.current}px)`

    // Update current slide
    setCurrentSlide(index)

    // Reset auto-scrolling after animation
    setTimeout(() => {
      setIsAnimating(false)
      autoScrollRef.current.style.transition = "none"
      if (!wasPaused) {
        setIsPaused(false)
      }
    }, 500)
  }

  // Handle touch events for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide()
    }
  }

  // Toggle pause on click
  const handleCarouselClick = () => {
    setIsPaused(!isPaused)
  }

  // Auto scroll functionality
  useEffect(() => {
    const scrollContainer = autoScrollRef.current
    if (!scrollContainer) return

    let animationId
    const scrollSpeed = 0.5

    const scroll = () => {
      if (!isPaused && !isAnimating) {
        autoScrollPositionRef.current += scrollSpeed

        // Reset position when we've scrolled through all slides
        if (autoScrollPositionRef.current >= scrollContainer.scrollWidth / 2) {
          autoScrollPositionRef.current = 0
        }

        if (scrollContainer) {
          scrollContainer.style.transform = `translateX(-${autoScrollPositionRef.current}px)`
        }
      }
      animationId = requestAnimationFrame(scroll)
    }

    // Start the animation
    animationId = requestAnimationFrame(scroll)

    // Clean up
    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [isPaused, isAnimating])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        prevSlide()
      } else if (e.key === "ArrowRight") {
        nextSlide()
      } else if (e.key === " ") {
        // Space bar toggles pause
        setIsPaused((prev) => !prev)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSlide, isAnimating])

  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-container">
        <div className="why-choose-us-header">
          <h2>Why Choose Us?</h2>
          <p>Discover Why We're the Best Choice for Your Amazon Success</p>
        </div>

        <div className="carousel-container">
          {/* Auto-scrolling carousel */}
          <div
            className={`carousel-wrapper auto-scroll-wrapper ${isPaused ? "paused" : ""}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onClick={handleCarouselClick}
          >
            <div className="carousel-slides auto-scroll" ref={autoScrollRef}>
              {allReasons.map((reason, index) => (
                <div key={`${reason.id}-${index}`} className="carousel-slide auto-scroll-slide">
                  <div className="slide-content" ref={(el) => (slideContentsRef.current[index] = el)}>
                    <div className="reason-number">{reason.number}</div>
                    <div className="reason-text">
                      <h3>{reason.title}</h3>
                      <h4>{reason.subtitle}</h4>
                      <p>{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons - will be hidden on mobile */}
          <button
            className="carousel-arrow prev-arrow"
            onClick={(e) => {
              e.stopPropagation() // Prevent click from bubbling to carousel
              prevSlide()
            }}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="carousel-arrow next-arrow"
            onClick={(e) => {
              e.stopPropagation() // Prevent click from bubbling to carousel
              nextSlide()
            }}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          <div className="carousel-indicators">
            {reasons.map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator ${index === currentSlide ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation() // Prevent click from bubbling to carousel
                  goToSlide(index)
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
