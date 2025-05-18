"use client"

import { useEffect, useRef } from "react"
import { Linkedin, Twitter, Mail, Award, TrendingUp } from "lucide-react"
import "./Team.css"
import HarisButt from "../../assets/HarisButt.jpg"
import AliHassan from "../../assets/AliHassan.jpg"
import FizzaZaidi from "../../assets/FizzaZaidi.jpg"
import UsamaSikandar from "../../assets/UsamaSikander.jpg"
import UmarTatla from "../../assets/UmarTatla.jpg"
import AbdullahKhan from "../../assets/AbdullahKhan.jpg"

const Team = () => {
  const sectionRef = useRef(null)
  const leadersRef = useRef(null)
  const teamMembersRef = useRef([])

  useEffect(() => {
     window.scrollTo(0,0);
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
      name: "HARIS BUTT",
      role: "FOUNDER & CEO",
      image: HarisButt,
      description:
        "Haris is an Amazon Brand Management expert with 5,000+ hours of experience. He has managed 10+ brands across US, German, and Canadian marketplaces, generating over $5M in sales.",
      stats: [
        { value: "100%", label: "Upwork Success" },
        { value: "87%", label: "Client Retention" },
        { value: "$5M+", label: "Sales Generated" },
      ],
      quote: "Our mission is to empower brands with the strategies and expertise they need to dominate on Amazon.",
      icon: <Award size={24} />,
    },
    {
      name: "ALI HASSAN",
      role: "CO-FOUNDER & MARKETING DIRECTOR",
      image: AliHassan,
      description:
        "Ali Hassan is a top marketing strategist with a 100% Upwork success rate and 99% Fiverr satisfaction. He has managed 20+ brands across 40+ niches, driving $8.5M in sales last year.",
      stats: [
        { value: "99%", label: "Fiverr Rating" },
        { value: "92%", label: "Client Retention" },
        { value: "$8.5M", label: "Annual Sales" },
      ],
      quote:
        "We don't just manage Amazon accounts, we build sustainable businesses that thrive in competitive markets.",
      icon: <TrendingUp size={24} />,
    },
  ]

  return (
    <section className="team-section">
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
            MEET THE <span className="gradient-text">EXPERTS</span>
            <br />
            BEHIND VIX COMMERCE
          </h1>
          <div className="hero-line"></div>
          <p className="hero-subtitle">Passionate professionals dedicated to your Amazon success</p>
        </div>
      </div>

      <div className="team-container">
        <div className="leaders-section" ref={leadersRef}>
          <div className="section-badge">LEADERSHIP</div>
          <h2 className="section-title">Our Leadership Team</h2>
          <div className="leaders-grid">
            {leaders.map((leader, index) => (
              <div key={index} className="leader-card">
                <div className="leader-top">
                  <div className="leader-image-container">
                    <img src={leader.image || "/placeholder.svg"} alt={leader.name} className="leader-image" />
                    <div className="leader-icon">{leader.icon}</div>
                  </div>
                  <div className="leader-title">
                    <h3>{leader.name}</h3>
                    <p>{leader.role}</p>
                  </div>
                </div>

                <div className="leader-content">
                  <p className="leader-description">{leader.description}</p>

                  <div className="leader-stats">
                    {leader.stats.map((stat, i) => (
                      <div key={i} className="leader-stat">
                        <span className="stat-value">{stat.value}</span>
                        <span className="stat-label">{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  <blockquote className="leader-quote">{leader.quote}</blockquote>

                  <div className="social-links">
                    <a href="#" className="social-link">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="social-link">
                      <Twitter size={18} />
                    </a>
                    <a href="#" className="social-link">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="team-members-section">
          <div className="section-badge">OUR EXPERTS</div>
          <h2 className="section-title">Team Members</h2>
          <div className="team-members-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member-card" ref={(el) => (teamMembersRef.current[index] = el)}>
                <div className="member-image">
                  <img src={member.image || "/placeholder.svg"} alt={member.name} />
                  <div className="member-social">
                    <a href="#" className="member-social-link">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="member-social-link">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="team-cta">
          <div className="cta-background">
            <div className="cta-shape cta-shape-1"></div>
            <div className="cta-shape cta-shape-2"></div>
          </div>
          <h2>Join Our Growing Team</h2>
          <p>
            We're always looking for talented individuals who are passionate about e-commerce and Amazon. If you think
            you'd be a good fit, we'd love to hear from you.
          </p>
          <button className="cta-button">View Open Positions</button>
        </div>
      </div>
    </section>
  )
}

export default Team
