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
    <section className="contact-section">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>We're here to help you succeed on Amazon</p>
      </div>

      <div className="contact-container">
        <div className="contact-info-container">
          <div className="logo-container">
            <img src={logo || "/placeholder.svg"} alt="Company Logo" className="logo-image" />
          </div>

          <p className="company-description">
            We provide end-to-end Amazon brand management services with expert team members in Product Research, Content
            Writing, Graphic Design, SEO, and PPC Management all under one roof.
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <Mail size={20} />
              <span>info@yourcompany.com</span>
            </div>
            <div className="contact-detail-item">
              <Phone size={20} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-detail-item">
              <MapPin size={20} />
              <span>123 Business Ave, Suite 100, New York, NY 10001</span>
            </div>
          </div>

          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <Twitter size={24} />
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
          </div>

          <div className="quick-links">
            <h3>Quick Links</h3>
            <div className="links-columns">
              <div className="links-column">
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
              <div className="links-column">
                <h4>Case Studies</h4>
                <ul>
                  <li>
                    <a href="/case-studies/headgear">HeadGear</a>
                  </li>
                  <li>
                    <a href="/case-studies/bidding-assistant">Bidding Assistant</a>
                  </li>
                  {/* <li>
                    <a href="/case-studies/amazon-ppc">Amazon PPC</a>
                  </li>
                  <li>
                    <a href="/case-studies/product-launch">Product Launch</a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <div className="form-header">
            <h2>Get A Free Audit</h2>
            <p>Fill up the below form and our team will reach you out for a free audit.</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">
                Full Name <span className="required">*</span>
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

            <div className="form-group">
              <label htmlFor="email">
                Email Address <span className="required">*</span>
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

            <div className="form-group">
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

            <div className="form-group">
              <label htmlFor="revenue">
                Average Monthly Revenue (USD) <span className="required">*</span>
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

            <div className="form-group">
              <label htmlFor="helpRequired">
                Help Required <span className="required">*</span>
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

            <button type="submit" className="submit-button">
              Get a Free Audit Now
            </button>

            {formSubmitted && (
              <div className="form-success-message">
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
