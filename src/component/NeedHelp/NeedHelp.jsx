"use client"

import { useEffect, useRef, useState } from "react"
import {
  ArrowRight,
  Mail,
  Phone,
  Clock,
  CheckCircle,
  FileQuestion,
  BookOpen,
  BarChart2,
  Shield,
  HelpCircle,
  Linkedin,
  ExternalLink,
} from "lucide-react"
import "./NeedHelp.css"
import ContactUs from "../LandingPage/ContactUs/ContactUs"

const NeedHelp = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const faqRef = useRef(null)
  const statsRef = useRef(null)
  const featuresRef = useRef(null)
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
            } else if (entry.target === featuresRef.current) {
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

    if (featuresRef.current) {
      observer.observe(featuresRef.current)
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
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current)
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

  const handleEmailClick = (email = "brandmanagement@vixcommerce.com") => {
    window.location.href = `mailto:${email}?subject=Support Request&body=Hello, I need help with...`
  }

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/company/vixcommerce/", "_blank", "noopener,noreferrer")
  }

  const handlePhoneClick = () => {
    window.location.href = "tel:+15551234567"
  }

  const contactOptions = [
    {
      icon: <Phone size={24} />,
      heading: "Expert Guidance",
      title: "Call Us",
      description: "Speak directly with our Amazon experts",
      info: "+1 (555) 123-4567",
      color: "blue",
      animation: "fadeInLeft",
      action: handlePhoneClick,
      actionIcon: <Phone size={16} />,
      actionText: "Call Now",
    },
    {
      icon: <Mail size={24} />,
      heading: "Direct Communication",
      title: "Email Us",
      description: "Send us your questions anytime",
      info: "brandmanagement@vixcommerce.com",
      color: "green",
      animation: "fadeInUp",
      action: () => handleEmailClick("brandmanagement@vixcommerce.com"),
      actionIcon: <Mail size={16} />,
      actionText: "Send Email",
    },
    {
      icon: <Linkedin size={24} />,
      heading: "Professional Network",
      title: "Connect on LinkedIn",
      description: "Follow us for updates and insights",
      info: "Vix Commerce",
      color: "linkedin",
      animation: "fadeInUp",
      action: handleLinkedInClick,
      actionIcon: <ExternalLink size={16} />,
      actionText: "Visit Profile",
    },
    {
      icon: <Clock size={24} />,
      heading: "Quick Response",
      title: "Response Time",
      description: "We aim to respond quickly",
      info: "Within 24 hours",
      color: "purple",
      animation: "fadeInRight",
      actionText: "Guaranteed",
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

  const supportFeatures = [
    {
      icon: <Shield size={32} />,
      title: "Expert Guidance",
      description: "Get advice from Amazon specialists with years of experience",
      color: "blue",
    },
    {
      icon: <BarChart2 size={32} />,
      title: "Data-Driven Solutions",
      description: "Receive recommendations backed by market analysis and data",
      color: "green",
    },
    {
      icon: <FileQuestion size={32} />,
      title: "Troubleshooting",
      description: "Quick resolution for technical issues and account problems",
      color: "orange",
    },
    {
      icon: <BookOpen size={32} />,
      title: "Knowledge Resources",
      description: "Access our library of guides, tutorials and best practices",
      color: "purple",
    },
  ]

  return (
    <section className="help-page-section">
      <div className="help-page-hero" ref={sectionRef}>
        <div className="help-hero-background">
          <div className="help-hero-shape help-shape-1"></div>
          <div className="help-hero-shape help-shape-2"></div>
          <div className="help-hero-shape help-shape-3"></div>
          <div className="help-hero-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`help-particle help-particle-${i + 1}`}></div>
            ))}
          </div>
        </div>
        <div className="help-page-hero-content">
          <div className="help-hero-badge">SUPPORT</div>
          <h1>
            Need help?
            <br />
            <span className="help-gradient-text">We've got you covered</span>
          </h1>
          <div className="help-hero-line"></div>
          <p className="help-hero-subtitle">
            Our team of Amazon experts is ready to assist you with any questions or challenges you're facing
          </p>
          <button
            className="help-hero-button"
            onClick={() => document.getElementById("contact-options").scrollIntoView({ behavior: "smooth" })}
          >
            Contact us now <ArrowRight size={16} className="help-btn-icon" />
          </button>
        </div>

        <div className="help-floating-icons">
          <div className="help-floating-icon help-icon-1">
            <Mail size={20} />
          </div>
          <div className="help-floating-icon help-icon-2">
            <Phone size={20} />
          </div>
          <div className="help-floating-icon help-icon-3">
            <HelpCircle size={20} />
          </div>
          <div className="help-floating-icon help-icon-4">
            <CheckCircle size={20} />
          </div>
          <div className="help-floating-icon help-icon-5">
            <Shield size={20} />
          </div>
        </div>
      </div>

      <div className="help-page-container">
        <div className="help-page-content" ref={contentRef} id="contact-options">
          <div className="help-section-badge">How can we help</div>
          <h2 className="help-section-title help-animated-title">We're here for you</h2>
          <p className="help-section-description">
            At VixCommerce, we understand that navigating the Amazon marketplace can be challenging. Whether you're
            facing technical issues, have questions about our services, or need strategic advice for your Amazon
            business, our dedicated team is here to provide the support you need.
          </p>

          <div className="help-contact-options">
            {contactOptions.map((option, index) => (
              <div
                key={index}
                className={`help-contact-option help-option-${option.color} help-${option.animation}`}
                onClick={option.action}
                style={{ cursor: option.action ? "pointer" : "default" }}
              >
                <div className="help-option-icon-wrapper">
                  <div className="help-option-icon">{option.icon}</div>
                  <div className="help-option-icon-ring"></div>
                  <div className="help-option-icon-glow"></div>
                </div>
                <div className="help-option-heading">{option.heading}</div>
                <h3>{option.title}</h3>
                <p>{option.description}</p>
                <div className="help-option-info-container">
                  <div className="help-option-info">{option.info}</div>
                </div>
                {option.action && (
                  <button className={`help-option-action-btn help-btn-${option.color}`}>
                    {option.actionIcon}
                    <span>{option.actionText}</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Support Features Section with Heading */}
        <div className="help-support-features-wrapper" ref={featuresRef}>
          <div className="help-features-header">
            <div className="help-section-badge">
              <Shield size={16} />
              Support features
            </div>
            <h2 className="help-section-title">How we support you</h2>
            {/* <p className="help-section-description">
              Our comprehensive support system is designed to provide you with the assistance you need, when you need
              it. From expert guidance to troubleshooting, we're here to help you succeed.
            </p> */}
          </div>

          <div className="help-support-features-grid">
            {supportFeatures.map((feature, index) => (
              <div key={index} className={`help-support-feature-card help-feature-${feature.color}`}>
                <div className={`help-support-feature-icon help-icon-${feature.color}`}>{feature.icon}</div>
                <h3 className="help-support-feature-title">{feature.title}</h3>
                <p className="help-support-feature-description">{feature.description}</p>
                <div className="help-support-feature-bg"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="help-faq-section" ref={faqRef}>
          <div className="help-section-badge">Frequently asked questions</div>
          <h2 className="help-section-title">Common questions</h2>

          <div className="help-faq-container">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`help-faq-item ${activeQuestion === index ? "help-faq-active" : ""}`}
                onClick={() => toggleQuestion(index)}
              >
                <div className="help-faq-question">
                  <span>{faq.question}</span>
                  <div className="help-faq-icon">
                    {activeQuestion === index ? (
                      <div className="help-minus-icon"></div>
                    ) : (
                      <div className="help-plus-icon"></div>
                    )}
                  </div>
                </div>
                <div className="help-faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="help-cta-section">
          <div className="help-cta-content">
            <h2>Still have questions?</h2>
            <p>Our team is ready to provide personalized assistance for your specific needs</p>
            <div className="help-cta-buttons">
              <button
                className="help-cta-button help-cta-primary"
                onClick={() => handleEmailClick("brandmanagement@vixcommerce.com")}
              >
                Email Us <Mail size={16} className="help-btn-icon" />
              </button>
              <button className="help-cta-button help-cta-secondary" onClick={handlePhoneClick}>
                Call Now <Phone size={16} className="help-btn-icon" />
              </button>
            </div>
          </div>
          <div className="help-cta-decoration">
            <div className="help-cta-circle help-circle-1"></div>
            <div className="help-cta-circle help-circle-2"></div>
            <div className="help-cta-circle help-circle-3"></div>
          </div>
        </div>
      </div>
      <ContactUs />
    </section>
  )
}

export default NeedHelp
