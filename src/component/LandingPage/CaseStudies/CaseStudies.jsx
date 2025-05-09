"use client"
import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { TrendingUp, DollarSign, ShoppingCart, BarChart2 } from "lucide-react"
import "./CaseStudies.css"

const CaseStudies = () => {
  const navigate = useNavigate()
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  // Animation for when component appears in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          document.querySelector(".case-studies-header").classList.add("animate")

          // Animate cards with delay
          cardsRef.current.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("animate")
            }, 100 * index)
          })
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const caseStudies = [
    {
      id: 1,
      title: "European Market Expansion",
      icon: <TrendingUp size={24} />,
      path: "/CaseStudies/CaseStudy1",
      color: "blue",
    },
    {
      id: 2,
      title: "Double Sales With Half Ad-Spend",
      icon: <DollarSign size={24} />,
       path: "/CaseStudies/CaseStudy2",
      color: "green",
    },
    {
      id: 3,
      title: "Textile Niche Product",
      icon: <ShoppingCart size={24} />,
    path: "/CaseStudies/CaseStudy3",
      color: "purple",
    },
    {
      id: 4,
      title: "Baby Product Success",
      icon: <BarChart2 size={24} />,
       path: "/CaseStudies/CaseStudy4",
      color: "orange",
    },
  ]

  const handleCaseClick = (path) => {
    navigate(path)
  }

  return (
    <section className="case-studies-section" ref={sectionRef}>
      <div className="case-studies-container">
        <div className="case-studies-header">
          <h2>Our Success Stories</h2>
          <p>Discover how we've helped businesses achieve remarkable growth and success on Amazon.</p>
        </div>

        <div className="case-studies-grid">
          {caseStudies.map((caseStudy, index) => (
            <div
              key={caseStudy.id}
              className={`case-card case-${caseStudy.color}`}
              onClick={() => handleCaseClick(caseStudy.path)}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="case-icon">{caseStudy.icon}</div>
              <h3>{caseStudy.title}</h3>
              <div className="view-case-btn">View Case Study</div>
            </div>
          ))}
        </div>

        {/* <div className="case-studies-cta">
          <button className="view-all-button">View All Case Studies</button>
        </div> */}
      </div>
    </section>
  )
}

export default CaseStudies
