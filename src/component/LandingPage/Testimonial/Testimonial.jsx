"use client"

import { useState, useEffect, useRef } from "react"
import { Star, User } from "lucide-react"
import "./Testimonial.css"

const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false)
  const autoScrollRef = useRef(null)

  const testimonials = [
    {
      id: 1,
      name: "Irena Pink",
      country: "United States",
      flag: "🇺🇸",
      rating: 5,
      text: "Are you looking to scare your business on Amazon? Well, you are lucky because you have come to the right place!!! I have had the greatest pleasure working with Vix Commerce and his team of experts in the field of E-commerce business. They are super professional and the work that they deliver is superb and of the highest quality! I would highly recommend Vix Commerce services to anyone looking to launch a PL product on Amazon. Thank you Vix Commerce for all your help!",
    },
    {
      id: 2,
      name: "Tatsiana Tati",
      country: "Belarus",
      flag: "🇧🇾",
      rating: 5,
      text: "Great great thank you for detailed information about the criteria for choosing winning product on Amazon. Your knowledge and experience exceeded my expectations. I hope very much on our fruitful cooperation. I wish you all the best!",
    },
    {
      id: 3,
      name: "Lauf Dz",
      country: "Costa Rica",
      flag: "🇨🇷",
      rating: 5,
      text: "Fast, Efficient, and Great Communication. Working with Vix Commerce has been an exceptional experience! Their level of efficiency is impressive; every task was completed in record time without sacrificing quality. Moreover, their communication is clear and responsive, making the entire process even smoother. I am thrilled with the results and will definitely return to work with Vix Commerce in the future. Highly recommended!",
    },
    {
      id: 4,
      name: "Bruno Fts",
      country: "Thailand",
      flag: "🇹🇭",
      rating: 5,
      text: "The patent research brought helpful results and was adequate for a quick dip into the topic. The provided information was well presented and well framed so that I could make sense and use of it. for similar topics I would come back to the seller again.",
    },
    {
      id: 5,
      name: "Wratch Ford",
      country: "United States",
      flag: "🇺🇸",
      rating: 5,
      text: "Vix Commerce gave me some great information to help have a successful launch. By the end of the meeting my launch strategy has changed for the better. He was also very lenient with my busy schedule and was able to get a meeting setup on very short notice at an odd time. I definitely recommend!",
    },
    {
      id: 6,
      name: "Kristen Benedict",
      country: "United States",
      flag: "🇺🇸",
      rating: 5,
      text: "Vix Commerce's services are just like what all other reviews say. He is great with communication and is very helpful every step of the way. It is also clear that he is very knowledgeable about the Amazon e-commerce space. I have learned a lot from Vix Commerce and I look forward to working with him again. 5 stars, highly recommend his services to anyone!",
    },
    {
      id: 7,
      name: "Rocket Jamaica",
      country: "Jamaica",
      flag: "🇯🇲",
      rating: 5,
      text: "This was my first introduction to selling on season by an experienced person. I got a very honest and clearly explained insight into the marketplace with samples and references. would recommend without hesitation. A great experience.",
    },
  ]

  // Clone testimonials for infinite scroll effect
  const allTestimonials = [...testimonials, ...testimonials]

  // Auto scroll functionality
  useEffect(() => {
    const scrollContainer = autoScrollRef.current
    if (!scrollContainer) return

    let animationId
    let scrollPosition = 0
    const scrollSpeed = 1.5

    const scroll = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed

        // Reset position when we've scrolled through all slides
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0
        }

        if (scrollContainer) {
          scrollContainer.style.transform = `translateX(-${scrollPosition}px)`
        }
      }
      animationId = requestAnimationFrame(scroll)
    }

    // Start the animation
    animationId = requestAnimationFrame(scroll)

    // Toggle pause on click instead of hover
    const handleClick = () => {
      setIsPaused((prevState) => !prevState)

      // Toggle the paused class for visual feedback
      if (scrollContainer) {
        scrollContainer.classList.toggle("paused", !isPaused)
      }
    }

    // Handle touch events for mobile - don't automatically pause/resume
    const handleTouchStart = (e) => {
      // Track touch position but don't pause
    }

    const handleTouchEnd = () => {
      // Handle touch end but don't automatically resume
    }

    scrollContainer.addEventListener("click", handleClick)
    scrollContainer.addEventListener("touchstart", handleTouchStart)
    scrollContainer.addEventListener("touchend", handleTouchEnd)

    // Clean up
    return () => {
      cancelAnimationFrame(animationId)
      if (scrollContainer) {
        scrollContainer.removeEventListener("click", handleClick)
        scrollContainer.removeEventListener("touchstart", handleTouchStart)
        scrollContainer.removeEventListener("touchend", handleTouchEnd)
      }
    }
  }, [isPaused])

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>Clients' Testimonials</h2>
          <p>What They Say About Our Services</p>
        </div>

        <div className="testimonials-carousel-container">
          <div className="testimonials-carousel-wrapper">
            <div className="testimonials-carousel auto-scroll" ref={autoScrollRef}>
              {allTestimonials.map((testimonial, index) => (
                <div className="testimonial-card" key={`${testimonial.id}-${index}`}>
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      <User size={40} strokeWidth={1.5} />
                    </div>
                    <div className="testimonial-user-info">
                      <h3>{testimonial.name}</h3>
                      <div className="testimonial-country">
                        <span className="country-flag">{testimonial.flag}</span>
                        <span>{testimonial.country}</span>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="star-icon" fill="#FFD700" stroke="#FFD700" />
                    ))}
                  </div>
                  <div className="testimonial-text">
                    <p>{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
