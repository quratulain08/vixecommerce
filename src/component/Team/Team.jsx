"use client"

import { useEffect, useRef } from "react"
import { Linkedin, Twitter, Mail, Award, TrendingUp, Users, Star,ArrowRight } from "lucide-react"
import "./Team.css"
import HarisButt from "../../assets/HarisButt.jpg"
import AliHassan from "../../assets/AliHassan.jpg"
import FizzaZaidi from "../../assets/FizzaZaidi.jpg"
import UsamaSikandar from "../../assets/UsamaSikander.jpg"
import UmarTatla from "../../assets/UmarTatla.jpg"
import AbdullahKhan from "../../assets/AbdullahKhan.jpg"
import Testimonials from "../LandingPage/Testimonial/Testimonial"
import Brand from "../LandingPage/FeaturedPartners/FeaturedPartners"


const Team = () => {
  const sectionRef = useRef(null)
  const leadersRef = useRef(null)
  const teamMembersRef = useRef([])

  useEffect(() => {
    window.scrollTo(0, 0)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              entry.target.classList.add("animate")
            } else if (entry.target === leadersRef.current) {
              entry.target.classList.add("animate")
            } else {
              teamMembersRef.current.forEach((member, index) => {
                if (member && entry.target === member) {
                  setTimeout(() => {
                    member.classList.add("animate")
                  }, index * 150)
                }
              })
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    if (leadersRef.current) {
      observer.observe(leadersRef.current)
    }

    teamMembersRef.current.forEach((member) => {
      if (member) {
        observer.observe(member)
      }
    })

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      if (leadersRef.current) {
        observer.unobserve(leadersRef.current)
      }
      teamMembersRef.current.forEach((member) => {
        if (member) {
          observer.unobserve(member)
        }
      })
    }
  }, [])

  const teamMembers = [
    {
      name: "Fizza Zaidi",
      role: "Business Developer",
      image: FizzaZaidi,
    },
    {
      name: "Usama Sikandar",
      role: "Brand Manager",
      image: UsamaSikandar,
    },
    {
      name: "Umar Tatla",
      role: "Content Writer",
      image: UmarTatla,
    },
    {
      name: "Abdullah Khan",
      role: "Graphic Designer",
      image: AbdullahKhan,
    },
  ]

  const leaders = [
    {
      name: "Haris Butt",
      role: "Founder & CEO",
      image: HarisButt,
      description:
        "Haris is an Amazon Brand Management expert with 5,000+ hours of experience. He has managed 10+ brands across US, German, and Canadian marketplaces.",
      mainStat: "$5M+",
      mainStatLabel: "Sales Generated",
      achievements: ["100% Upwork Success Rate", "87% Client Retention", "10+ Brands Managed"],
      quote: "Our mission is to empower brands with the strategies and expertise they need to dominate on Amazon.",
      icon: <Award size={20} />,
    },
    {
      name: "Ali Hassan",
      role: "Co-Founder & Marketing Director",
      image: AliHassan,
      description:
        "Ali Hassan is a top marketing strategist with a 100% Upwork success rate and 99% Fiverr satisfaction. He has managed 40+ brands across 20+ niches.",
      mainStat: "$8.5M",
      mainStatLabel: "Annual Sales",
      achievements: ["99% Fiverr Rating", "92% Client Retention", "20+ Niches Covered"],
      quote:
        "We don't just manage Amazon accounts, we build sustainable businesses that thrive in competitive markets.",
      icon: <TrendingUp size={20} />,
    },
  ]

  return (
    <section className="team-section">
      {/* Hero Section */}
      <div className="team-hero" ref={sectionRef}>
        <div className="hero-background">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
          <div className="hero-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`particle particle-${i + 1}`}></div>
            ))}
          </div>
        </div>
        <div className="team-hero-content">
          <div className="hero-badge">OUR TEAM</div>
          <h1>
            Meet the <span className="gradient-text">experts</span>
            <br />
            behind VixCommerce
          </h1>
          <div className="hero-line"></div>
          <p className="hero-subtitle">Passionate professionals dedicated to your Amazon success</p>
        </div>
      </div>

      <div className="team-container">
        {/* Leaders Section */}
        <div className="leaders-section" ref={leadersRef}>
          <div className="section-header">
            <div className="section-badge">
              <Users size={16} />
              LEADERSHIP
            </div>
            <h2 className="section-title">Our leadership team</h2>
            <p className="section-description">
              Meet the visionaries driving Vix Commerce forward with years of expertise and proven results.
            </p>
          </div>

          <div className="leaders-grid">
            {leaders.map((leader, index) => (
              <div key={index} className="leader-card">
                <div className="leader-image-section">
                  <div className="leader-image-container">
                    <img src={leader.image || "/placeholder.svg"} alt={leader.name} className="leader-image" />
                    <div className="leader-badge-icon">{leader.icon}</div>
                  </div>
                </div>

                <div className="leader-content-section">
                  <div className="leader-header">
                    <h3 className="leader-name">{leader.name}</h3>
                    <p className="leader-role">{leader.role}</p>
                  </div>

                  <p className="leader-description">{leader.description}</p>

                  <div className="leader-highlight">
                    <div className="highlight-stat">
                      <span className="highlight-number">{leader.mainStat}</span>
                      <span className="highlight-label">{leader.mainStatLabel}</span>
                    </div>
                  </div>

                  <div className="leader-achievements">
                    <h4 className="achievements-title">Key Achievements</h4>
                    <ul className="achievements-list">
                      {leader.achievements.map((achievement, i) => (
                        <li key={i} className="achievement-item">
                          <Star size={14} />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <blockquote className="leader-quote">"{leader.quote}"</blockquote>

                  <div className="leader-social">
                    <a href="#" className="social-link">
                      <Linkedin size={16} />
                    </a>
                    <a href="#" className="social-link">
                      <Twitter size={16} />
                    </a>
                    <a href="#" className="social-link">
                      <Mail size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members Section */}
        <div className="team-members-section">
          <div className="section-header">
            <div className="section-badge">
              <Users size={16} />
              OUR EXPERTS
            </div>
            <h2 className="section-title">Team Members</h2>
            <p className="section-description">
              Our talented team of specialists working together to deliver exceptional results for your brand.
            </p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card" ref={(el) => (teamMembersRef.current[index] = el)}>
                <div className="team-card-image">
                  <img src={member.image || "/placeholder.svg"} alt={member.name} />
                  <div className="team-card-overlay">
                    <div className="team-social-links">
                      <a href="#" className="team-social-link">
                        <Linkedin size={18} />
                      </a>
                      <a href="#" className="team-social-link">
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-card-content">
                  <h3 className="team-member-name">{member.name}</h3>
                  <p className="team-member-role">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="about-cta">
          <div className="cta-background">
            <div className="cta-shape cta-shape-1"></div>
            <div className="cta-shape cta-shape-2"></div>
          </div>
          <h2>Get Help from Experts</h2>
          <p>
            Partner with VixCommerce and take your Amazon presence to the next level. Our team of experts is ready to
            help you achieve your e-commerce goals.
          </p>
          <button className="cta-button">
            Get help <ArrowRight size={16} className="btn-icon" />
          </button>
        </div>


      <Testimonials />
      <Brand />
    </section>
  )
}

export default Team



