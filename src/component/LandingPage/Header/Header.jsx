"use client"

import { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import LOGO from "../../../assets/LOGO.png"
import "./Header.css"

const Header = () => {
  const location = useLocation()
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false)
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const dropdownRef = useRef(null)

  // Set active section based on current path
  useEffect(() => {
    const path = location.pathname

    if (path === "/") {
      setActiveSection("home")
    } else if (path.includes("/Services")) {
      setActiveSection("services")
    } else if (path.includes("/CaseStudies")) {
      setActiveSection("casestudies")
    } else if (path.includes("/AboutUs") || path.includes("/Team")) {
      setActiveSection("about")
    } else if (path.includes("/pricing")) {
      setActiveSection("pricing")
    } else if (path.includes("/contact")) {
      setActiveSection("contact")
    } else {
      setActiveSection("")
    }
  }, [location])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false)
        setIsCaseStudiesOpen(false)
        setIsAboutUsOpen(false)
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

  const handleDropdownToggle = (e, setter, currentState, section) => {
    e.preventDefault()

    // Close other dropdowns if open
    if (setter === setIsServicesOpen) {
      if (isCaseStudiesOpen) setIsCaseStudiesOpen(false)
      if (isAboutUsOpen) setIsAboutUsOpen(false)
    } else if (setter === setIsCaseStudiesOpen) {
      if (isServicesOpen) setIsServicesOpen(false)
      if (isAboutUsOpen) setIsAboutUsOpen(false)
    } else if (setter === setIsAboutUsOpen) {
      if (isCaseStudiesOpen) setIsCaseStudiesOpen(false)
      if (isServicesOpen) setIsServicesOpen(false)
    }

    // Toggle the selected dropdown
    setter(!currentState)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
    setIsCaseStudiesOpen(false)
    setIsAboutUsOpen(false)
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
              <Link to="/" className={`nav-link ${activeSection === "home" ? "active-page" : ""}`} onClick={closeMenu}>
                HOME
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/services"
                className={`nav-link ${isServicesOpen ? "active" : ""} ${activeSection === "services" ? "active-page" : ""}`}
                onClick={(e) => handleDropdownToggle(e, setIsServicesOpen, isServicesOpen, "services")}
              >
                SERVICES <span className="dropdown-arrow">▼</span>
              </Link>
              <ul className={`dropdown-menu ${isServicesOpen ? "show" : ""}`}>
                <li>
                  <Link
                    to="/Services/SEO"
                    className={location.pathname === "/Services/SEO" ? "active-sublink" : ""}
                    onClick={closeMenu}
                  >
                    SEO
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Services/AmazonPPCManagement"
                    className={location.pathname === "/Services/AmazonPPCManagement" ? "active-sublink" : ""}
                    onClick={closeMenu}
                  >
                    Amazon PPC Management
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Services/AmazonBrandManagement"
                    className={location.pathname === "/Services/AmazonBrandManagement" ? "active-sublink" : ""}
                    onClick={closeMenu}
                  >
                    Amazon Brand Management
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Services/ProductLaunch"
                    className={location.pathname === "/Services/ProductLaunch" ? "active-sublink" : ""}
                    onClick={closeMenu}
                  >
                    Product Launch
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Services/AccountMaintenance"
                    className={location.pathname === "/Services/AccountMaintenance" ? "active-sublink" : ""}
                    onClick={closeMenu}
                  >
                    Account Maintenance
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Services/InfluencerMarketing"
                    className={location.pathname === "/Services/InfluencerMarketing" ? "active-sublink" : ""}
                    onClick={closeMenu}
                  >
                    Influencer Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Services/ProductDevelopment"
                    className={location.pathname === "/Services/ProductDevelopment" ? "active-sublink" : ""}
                    onClick={closeMenu}
                  >
                    Product Development
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/CaseStudies"
                className={`nav-link ${isCaseStudiesOpen ? "active" : ""} ${activeSection === "casestudies" ? "active-page" : ""}`}
                onClick={(e) => handleDropdownToggle(e, setIsCaseStudiesOpen, isCaseStudiesOpen, "casestudies")}
              >
                CASE STUDIES <span className="dropdown-arrow">▼</span>
              </Link>
              <ul className={`dropdown-menu ${isCaseStudiesOpen ? "show" : ""}`}>
                <li>
                  <Link
                    to="/CaseStudies/CaseStudy1"
                    className={location.pathname === "/CaseStudies/CaseStudy1" ? "active-sublink" : ""}
                    onClick={closeMenu}
                  >
                    Building 7-figure brand
                  </Link>
                </li>
                <li>
                  <Link
                    to="/CaseStudies/CaseStudy2"
                    className={location.pathname === "/CaseStudies/CaseStudy2" ? "active-sublink" : ""}
                    onClick={closeMenu}
                  >
                    Double Sales with Half-Ad spend
                  </Link>
                </li>
                <li>
                  <Link
                    to="/CaseStudies/CaseStudy3"
                    className={location.pathname === "/CaseStudies/CaseStudy3" ? "active-sublink" : ""}
                    onClick={closeMenu}
                  >
                    Textile Niche Product
                  </Link>
                </li>
                <li>
                  <Link
                    to="/CaseStudies/CaseStudy4"
                    className={location.pathname === "/CaseStudies/CaseStudy4" ? "active-sublink" : ""}
                    onClick={closeMenu}
                  >
                    Baby Product
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/AboutUs"
                className={`nav-link ${isAboutUsOpen ? "active" : ""} ${activeSection === "about" ? "active-page" : ""}`}
                onClick={(e) => handleDropdownToggle(e, setIsAboutUsOpen, isAboutUsOpen, "about")}
              >
                ABOUT <span className="dropdown-arrow">▼</span>
              </Link>
              <ul className={`dropdown-menu ${isAboutUsOpen ? "show" : ""}`}>
                <li>
                  <Link
                    to="/AboutUs"
                    className={location.pathname === "/AboutUs" ? "active-sublink" : ""}
                    onClick={closeMenu}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Team"
                    className={location.pathname === "/Team" ? "active-sublink" : ""}
                    onClick={closeMenu}
                  >
                    Team
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                to="/pricing"
                className={`nav-link ${activeSection === "pricing" ? "active-page" : ""}`}
                onClick={closeMenu}
              >
                PRICING
              </Link>
            </li>
          </ul>

          <div className="contact-button-container">
            <Link
              to="/contact"
              className={`contact-button ${activeSection === "contact" ? "active-contact" : ""}`}
              onClick={closeMenu}
            >
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
