"use client"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import LOGO from "../../../assets/LOGO.png"
import "./Header.css"

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false)
        setIsCaseStudiesOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [isMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  const handleDropdownToggle = (e, setter, currentState) => {
    e.preventDefault()
    // Close other dropdown if open
    if (setter === setIsServicesOpen && isCaseStudiesOpen) {
      setIsCaseStudiesOpen(false)
    } else if (setter === setIsCaseStudiesOpen && isServicesOpen) {
      setIsServicesOpen(false)
    }
    setter(!currentState)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
    setIsCaseStudiesOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <img src={LOGO || "/placeholder.svg"} alt="Logo" className="logo-image" />
          </Link>
        </div>

        {/* Hamburger Button */}
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        </div>

        <nav className={`navigation ${isMenuOpen ? "active" : ""}`} ref={dropdownRef}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeMenu}>
                HOME
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/services"
                className={`nav-link ${isServicesOpen ? "active" : ""}`}
                onClick={(e) => handleDropdownToggle(e, setIsServicesOpen, isServicesOpen)}
              >
                SERVICES <span className="dropdown-arrow">▼</span>
              </Link>
              <ul className={`dropdown-menu ${isServicesOpen ? "show" : ""}`}>
                <li>
                  <Link to="/Services/SEO" onClick={closeMenu}>
                    SEO
                  </Link>
                </li>
                <li>
                  <Link to="/Services/AmazonPPCManagement" onClick={closeMenu}>
                    Amazon PPC Management
                  </Link>
                </li>
                <li>
                  <Link to="/Services/AmazonBrandManagement" onClick={closeMenu}>
                    Amazon Brand Management
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/CaseStudies"
                className={`nav-link ${isCaseStudiesOpen ? "active" : ""}`}
                onClick={(e) => handleDropdownToggle(e, setIsCaseStudiesOpen, isCaseStudiesOpen)}
              >
                CASE STUDIES <span className="dropdown-arrow">▼</span>
              </Link>
              <ul className={`dropdown-menu ${isCaseStudiesOpen ? "show" : ""}`}>
                <li>
                  <Link to="/CaseStudies/CaseStudy1" onClick={closeMenu}>
                    Case Study 1
                  </Link>
                </li>
                <li>
                  <Link to="CaseStudies/CaseStudy2" onClick={closeMenu}>
                    Case Study 2
                  </Link>
                </li>
                {/* <li>
                  <Link to="/case-studies/study3" onClick={closeMenu}>
                    Case Study 3
                  </Link>
                </li> */}
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/about-us" className="nav-link" onClick={closeMenu}>
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pricing" className="nav-link" onClick={closeMenu}>
                PRICING
              </Link>
            </li>
          </ul>

          <div className="contact-button-container">
            <Link to="/contact" className="contact-button" onClick={closeMenu}>
              CONTACT US
            </Link>
          </div>
        </nav>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && <div className="mobile-menu-overlay" onClick={closeMenu}></div>}
    </header>
  )
}

export default Header
