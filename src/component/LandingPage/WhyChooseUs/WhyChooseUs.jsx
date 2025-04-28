"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "./WhyChooseUs.css"

const WhyChooseUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [slideHeight, setSlideHeight] = useState('auto')
  const slideContentsRef = useRef([])
  const slideRef = useRef(null)
  const autoPlayRef = useRef(null)

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

  // Calculate and set the maximum slide height
  useEffect(() => {
    const updateSlideHeight = () => {
      if (slideContentsRef.current && slideContentsRef.current.length > 0) {
        // Give a small delay to ensure content is rendered
        setTimeout(() => {
          let maxHeight = 0;
          slideContentsRef.current.forEach(contentEl => {
            if (contentEl) {
              const height = contentEl.offsetHeight;
              maxHeight = Math.max(maxHeight, height);
            }
          });
          // Add some padding to ensure content fits
          setSlideHeight(`${maxHeight + 30}px`);
        }, 100);
      }
    };

    // Update height on window resize
    window.addEventListener('resize', updateSlideHeight);
    
    // Initial height calculation
    updateSlideHeight();

    return () => {
      window.removeEventListener('resize', updateSlideHeight);
    };
  }, []);

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === reasons.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === 0 ? reasons.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 500)
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

  // Auto play functionality
  useEffect(() => {
    const play = () => {
      nextSlide()
    }

    autoPlayRef.current = play

    const interval = setInterval(() => {
      if (autoPlayRef.current) {
        autoPlayRef.current()
      }
    }, 6000)

    return () => clearInterval(interval)
  }, [currentSlide])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        prevSlide()
      } else if (e.key === "ArrowRight") {
        nextSlide()
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
          <div
            className="carousel-wrapper"
            ref={slideRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ height: slideHeight }}
          >
            <div 
              className="carousel-slides" 
              style={{ 
                transform: `translateX(-${currentSlide * 100}%)`,
                height: slideHeight
              }}
            >
              {reasons.map((reason, index) => (
                <div key={reason.id} className="carousel-slide" style={{ height: slideHeight }}>
                  <div 
                    className="slide-content"
                    ref={el => slideContentsRef.current[index] = el}
                  >
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

          <button className="carousel-arrow prev-arrow" onClick={prevSlide} aria-label="Previous slide">
            <ChevronLeft size={24} />
          </button>
          <button className="carousel-arrow next-arrow" onClick={nextSlide} aria-label="Next slide">
            <ChevronRight size={24} />
          </button>

          <div className="carousel-indicators">
            {reasons.map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator ${index === currentSlide ? "active" : ""}`}
                onClick={() => goToSlide(index)}
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