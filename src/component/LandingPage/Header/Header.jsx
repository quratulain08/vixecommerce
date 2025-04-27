"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <div className="logo-text">LOGO</div>
          </Link>
        </div>

        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/services"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault()
                  setIsServicesOpen(!isServicesOpen)
                }}
              >
                SERVICES <span className="dropdown-arrow">▼</span>
              </Link>
              {isServicesOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/services/service1">Service 1</Link>
                  </li>
                  <li>
                    <Link to="/services/service2">Service 2</Link>
                  </li>
                  <li>
                    <Link to="/services/service3">Service 3</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/case-studies"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault()
                  setIsCaseStudiesOpen(!isCaseStudiesOpen)
                }}
              >
                CASE STUDIES <span className="dropdown-arrow">▼</span>
              </Link>
              {isCaseStudiesOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/case-studies/study1">Case Study 1</Link>
                  </li>
                  <li>
                    <Link to="/case-studies/study2">Case Study 2</Link>
                  </li>
                  <li>
                    <Link to="/case-studies/study3">Case Study 3</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <Link to="/about-us" className="nav-link">
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pricing" className="nav-link">
                PRICING
              </Link>
            </li>
          </ul>
        </nav>

        <div className="contact-button-container">
          <Link to="/contact" className="contact-button">
            CONTACT US <span className="phone-icon">📞</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
