"use client"

import { useEffect, useRef, useState } from "react"
import {
  ArrowRight,
  Mail,
  Phone,
  Clock,
  CheckCircle,
  Headphones,
  FileQuestion,
  BookOpen,
  BarChart2,
  Shield,
  Users,
  Zap,
  Award,
  ThumbsUp,
  HelpCircle,
} from "lucide-react"
import "./NeedHelp.css"

const NeedHelp = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const faqRef = useRef(null)
  const statsRef = useRef(null)
  const [activeQuestion, setActiveQuestion] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  useEffect(() => {
    window.scrollTo(0, 0)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              entry.target.classList.add("animate")
            } else if (entry.target === contentRef.current) {
              entry.target.classList.add("animate")
            } else if (entry.target === faqRef.current) {
              entry.target.classList.add("animate")
            } else if (entry.target === statsRef.current) {
              entry.target.classList.add("animate")
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    if (contentRef.current) {
      observer.observe(contentRef.current)
    }

    if (faqRef.current) {
      observer.observe(faqRef.current)
    }

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      if (contentRef.current) {
        observer.unobserve(contentRef.current)
      }
      if (faqRef.current) {
        observer.unobserve(faqRef.current)
      }
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index)
  }

  const contactOptions = [
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      description: "Speak directly with our Amazon experts",
      info: "+1 (555) 123-4567",
      color: "blue",
      animation: "fadeInLeft",
    },
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      description: "Send us your questions anytime",
      info: "support@vixcommerce.com",
      color: "green",
      animation: "fadeInUp",
    },
    {
      icon: <Headphones size={24} />,
      title: "Priority Support",
      description: "Get dedicated support for urgent issues",
      info: "Premium clients only",
      color: "orange",
      animation: "fadeInUp",
    },
    {
      icon: <Clock size={24} />,
      title: "Response Time",
      description: "We aim to respond quickly",
      info: "Within 24 hours",
      color: "purple",
      animation: "fadeInRight",
    },
  ]

  const faqs = [
    {
      question: "What services do you offer for Amazon sellers?",
      answer:
        "We offer a comprehensive suite of services including PPC management, listing optimization, SEO, brand launch, FBA management, and strategic consulting tailored specifically for Amazon sellers.",
    },
    {
      question: "How quickly can I expect results from your services?",
      answer:
        "While initial improvements can be seen within 2-4 weeks, significant results typically take 2-3 months as we optimize your strategy based on data and market response.",
    },
    {
      question: "Do you work with new Amazon sellers?",
      answer:
        "We work with sellers at all stages, from brand new to established. We have specialized programs for new sellers to help you launch successfully on Amazon.",
    },
    {
      question: "What makes your agency different from others?",
      answer:
        "Our team consists of former Amazon employees and experienced sellers who understand the platform inside out. We focus on data-driven strategies and maintain complete transparency with our clients.",
    },
    {
      question: "How do your pricing plans work?",
      answer:
        "We offer flexible pricing plans based on your specific needs and business size. Our packages start with essential services and can be customized with additional services as needed.",
    },
  ]

  const stats = [
    {
      icon: <Users size={28} />,
      value: "50+",
      label: "Happy Clients",
      color: "blue",
    },
    {
      icon: <Award size={28} />,
      value: "93%",
      label: "Success Rate",
      color: "green",
    },
    {
      icon: <Zap size={28} />,
      value: "24/7",
      label: "Support Access",
      color: "orange",
    },
    {
      icon: <ThumbsUp size={28} />,
      value: "100%",
      label: "Satisfaction",
      color: "purple",
    },
  ]

  const supportFeatures = [
    {
      icon: <Shield size={32} />,
      title: "Expert Guidance",
      description: "Get advice from Amazon specialists with years of experience",
    },
    {
      icon: <BarChart2 size={32} />,
      title: "Data-Driven Solutions",
      description: "Receive recommendations backed by market analysis and data",
    },
    {
      icon: <FileQuestion size={32} />,
      title: "Troubleshooting",
      description: "Quick resolution for technical issues and account problems",
    },
    {
      icon: <BookOpen size={32} />,
      title: "Knowledge Resources",
      description: "Access our library of guides, tutorials and best practices",
    },
  ]

  return (
    <section className="need-help-section">
      <div className="need-help-hero" ref={sectionRef}>
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
        <div className="need-help-hero-content">
          <div className="hero-badge">SUPPORT</div>
          <h1>
            NEED HELP?
            <br />
            <span className="gradient-text">WE'VE GOT YOU COVERED</span>
          </h1>
          <div className="hero-line"></div>
          <p className="hero-subtitle">
            Our team of Amazon experts is ready to assist you with any questions or challenges you're facing
          </p>
          <button
            className="hero-button"
            onClick={() => document.getElementById("contact-options").scrollIntoView({ behavior: "smooth" })}
          >
            Contact Us Now <ArrowRight size={16} className="btn-icon" />
          </button>
        </div>

        <div className="floating-icons">
          <div className="floating-icon icon-1">
            <Mail size={20} />
          </div>
          <div className="floating-icon icon-2">
            <Phone size={20} />
          </div>
          <div className="floating-icon icon-3">
            <HelpCircle size={20} />
          </div>
          <div className="floating-icon icon-4">
            <CheckCircle size={20} />
          </div>
          <div className="floating-icon icon-5">
            <Shield size={20} />
          </div>
        </div>
      </div>

      <div className="need-help-container">
        <div className="need-help-content" ref={contentRef} id="contact-options">
          <div className="section-badge">HOW WE CAN HELP</div>
          <h2 className="section-title animated-title">We're Here For You</h2>
          <p className="section-description">
            At Vix Commerce, we understand that navigating the Amazon marketplace can be challenging. Whether you're
            facing technical issues, have questions about our services, or need strategic advice for your Amazon
            business, our dedicated team is here to provide the support you need.
          </p>

          <div className="contact-options">
            {contactOptions.map((option, index) => (
              <div key={index} className={`contact-option option-${option.color} ${option.animation}`}>
                <div className="option-icon-wrapper">
                  <div className="option-icon">{option.icon}</div>
                  <div className="option-icon-ring"></div>
                </div>
                <h3>{option.title}</h3>
                <p>{option.description}</p>
                <div className="option-info">{option.info}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="support-features-section">
          <div className="features-grid">
            {supportFeatures.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="feature-bg"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="faq-section" ref={faqRef}>
          <div className="section-badge">FREQUENTLY ASKED QUESTIONS</div>
          <h2 className="section-title">Common Questions</h2>

          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeQuestion === index ? "active" : ""}`}
                onClick={() => toggleQuestion(index)}
              >
                <div className="faq-question">
                  <span>{faq.question}</span>
                  <div className="faq-icon">
                    {activeQuestion === index ? <div className="minus-icon"></div> : <div className="plus-icon"></div>}
                  </div>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="help-cta">
          <div className="cta-content">
            <h2>Still Have Questions?</h2>
            <p>Our team is ready to provide personalized assistance for your specific needs</p>
            <div className="cta-buttons">
              <a href="mailto:support@vixcommerce.com" className="cta-button primary">
                Email Us <Mail size={16} className="btn-icon" />
              </a>
              <a href="tel:+15551234567" className="cta-button secondary">
                Call Now <Phone size={16} className="btn-icon" />
              </a>
            </div>
          </div>
          <div className="cta-decoration">
            <div className="cta-circle circle-1"></div>
            <div className="cta-circle circle-2"></div>
            <div className="cta-circle circle-3"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NeedHelp
