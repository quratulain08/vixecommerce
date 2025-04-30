"use client"

import { useState } from "react"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import "./ContactUs.css"
import logo from "../../../assets/LOGO.png" // Adjust the path as needed

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    brandName: "",
    revenue: "",
    helpRequired: "",
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    setFormSubmitted(true)

    // Reset form after submission
    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        brandName: "",
        revenue: "",
        helpRequired: "",
      })
      setFormSubmitted(false)
    }, 5000)
  }

  return (
    <section className="vix-contact-section">
      <div className="vix-contact-header">
        <h1>Get In Touch</h1>
        <p>We're here to help you succeed on Amazon</p>
      </div>

      <div className="vix-contact-container">
        <div className="vix-contact-info-container">
          <div className="vix-logo-container">
            <img src={logo || "/placeholder.svg"} alt="Company Logo" className="vix-logo-image" />
          </div>

          <p className="vix-company-description">
            We provide end-to-end Amazon brand management services with expert team members in Product Research, Content
            Writing, Graphic Design, SEO, and PPC Management all under one roof.
          </p>

          <div className="vix-contact-details">
            <div className="vix-contact-detail-item">
              <Mail size={20} />
              <span>info@yourcompany.com</span>
            </div>
            <div className="vix-contact-detail-item">
              <Phone size={20} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="vix-contact-detail-item">
              <MapPin size={20} />
              <span>123 Business Ave, Suite 100, New York, NY 10001</span>
            </div>
          </div>

          <div className="vix-social-links">
            <a href="#" className="vix-social-link" aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href="#" className="vix-social-link" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href="#" className="vix-social-link" aria-label="Twitter">
              <Twitter size={24} />
            </a>
            <a href="#" className="vix-social-link" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
          </div>

          <div className="vix-quick-links">
            <h3>Quick Links</h3>
            <div className="vix-links-columns">
              <div className="vix-links-column">
                <h4>Navigation</h4>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/services">Services</a>
                  </li>
                  <li>
                    <a href="/case-studies">Case Studies</a>
                  </li>
                  <li>
                    <a href="/about-us">About Us</a>
                  </li>
                  <li>
                    <a href="/pricing">Pricing</a>
                  </li>
                </ul>
              </div>
              <div className="vix-links-column">
                <h4>Case Studies</h4>
                <ul>
                  <li>
                    <a href="/case-studies/headgear">HeadGear</a>
                  </li>
                  <li>
                    <a href="/case-studies/bidding-assistant">Bidding Assistant</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="vix-contact-form-container">
          <div className="vix-form-header">
            <h2>Get A Free Audit</h2>
            <p>Fill up the below form and our team will reach you out for a free audit.</p>
          </div>

          <form className="vix-contact-form" onSubmit={handleSubmit}>
            <div className="vix-form-group">
              <label htmlFor="fullName">
                Full Name <span className="vix-required">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="vix-form-group">
              <label htmlFor="email">
                Email Address <span className="vix-required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="vix-form-group">
              <label htmlFor="brandName">Brand Name</label>
              <input
                type="text"
                id="brandName"
                name="brandName"
                value={formData.brandName}
                onChange={handleChange}
                placeholder="Enter your brand name (Not required if it's a new brand launch)"
              />
            </div>

            <div className="vix-form-group">
              <label htmlFor="revenue">
                Average Monthly Revenue (USD) <span className="vix-required">*</span>
              </label>
              <input
                type="text"
                id="revenue"
                name="revenue"
                value={formData.revenue}
                onChange={handleChange}
                placeholder="Enter your average monthly revenue $"
                required
              />
            </div>

            <div className="vix-form-group">
              <label htmlFor="helpRequired">
                Help Required <span className="vix-required">*</span>
              </label>
              <textarea
                id="helpRequired"
                name="helpRequired"
                value={formData.helpRequired}
                onChange={handleChange}
                placeholder="Describe your question or issue in detail"
                required
                rows={5}
              ></textarea>
            </div>

            <button type="submit" className="vix-submit-button">
              Get a Free Audit Now
            </button>

            {formSubmitted && (
              <div className="vix-form-success-message">
                Thank you! Your request has been submitted. We'll contact you shortly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
