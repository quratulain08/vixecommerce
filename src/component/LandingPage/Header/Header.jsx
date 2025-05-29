"use client"

import { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import LOGO from "../../../assets/LOGO.png"
import "./Header.css"

// Import icons (you can replace these with your preferred icon library)
import {
  Rocket,
  Settings,
  Search,
  TrendingUp,
  Target,
  Package,
  FileText,
  Baby,
  Zap,
  Home,
  Users,
  UserCheck,
} from "lucide-react"

const Header = () => {
  const location = useLocation()
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false)
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const dropdownRef = useRef(null)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <div className="logo-wrapper">
              <img src={LOGO || "/placeholder.svg"} alt="Logo" className="logo-image" />
            </div>
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
            <li className="nav-item nav-item-home">
              <Link to="/" className={`nav-link ${activeSection === "home" ? "active-page" : ""}`} onClick={closeMenu}>
                HOME
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/Offers"
                className={`nav-link ${isServicesOpen ? "active" : ""} ${activeSection === "services" ? "active-page" : ""}`}
                onClick={(e) => handleDropdownToggle(e, setIsServicesOpen, isServicesOpen, "services")}
              >
                SERVICES <span className="dropdown-arrow">▼</span>
              </Link>
              <div className={`dropdown-menu modern-dropdown ${isServicesOpen ? "show" : ""}`}>
                <div className="dropdown-header">
                  <h3>Services</h3>
                </div>
                <div className="dropdown-grid">
                  <Link
                    to="/Offers/BrandLaunch"
                    className={`dropdown-item ${location.pathname === "/Offers/BrandLaunch" ? "active-sublink" : ""}`}
                    onClick={closeMenu}
                  >
                    <div className="item-icon">
                      <Rocket size={20} />
                    </div>
                    <div className="item-content">
                      <span className="item-description">Amazon Product and Brand Launch</span>
                    </div>
                  </Link>

                  <Link
                    to="/Offers/FBAManagement"
                    className={`dropdown-item ${location.pathname === "/Offers/FBAManagement" ? "active-sublink" : ""}`}
                    onClick={closeMenu}
                  >
                    <div className="item-icon">
                      <Settings size={20} />
                    </div>
                    <div className="item-content">
                      <span className="item-description">Amazon FBA Management</span>
                    </div>
                  </Link>

                  <Link
                    to="/Offers/ListingAudit"
                    className={`dropdown-item ${location.pathname === "/Offers/ListingAudit" ? "active-sublink" : ""}`}
                    onClick={closeMenu}
                  >
                    <div className="item-icon">
                      <Search size={20} />
                    </div>
                    <div className="item-content">
                      <span className="item-description">Amazon Listing Audit</span>
                    </div>
                  </Link>

                  <Link
                    to="/Offers/ListingOptimization"
                    className={`dropdown-item ${location.pathname === "/Offers/ListingOptimization" ? "active-sublink" : ""}`}
                    onClick={closeMenu}
                  >
                    <div className="item-icon">
                      <TrendingUp size={20} />
                    </div>
                    <div className="item-content">
                      <span className="item-description">Amazon Listing Optimization & SEO</span>
                    </div>
                  </Link>

                  <Link
                    to="/Offers/PPCManagement"
                    className={`dropdown-item ${location.pathname === "/Offers/PPCManagement" ? "active-sublink" : ""}`}
                    onClick={closeMenu}
                  >
                    <div className="item-icon">
                      <Target size={20} />
                    </div>
                    <div className="item-content">
                      <span className="item-description">Amazon PPC Management</span>
                    </div>
                  </Link>

                  <Link
                    to="/Offers/Sourcing"
                    className={`dropdown-item ${location.pathname === "/Offers/Sourcing" ? "active-sublink" : ""}`}
                    onClick={closeMenu}
                  >
                    <div className="item-icon">
                      <Package size={20} />
                    </div>
                    <div className="item-content">
                      <span className="item-description">Product Sourcing Solutions</span>
                    </div>
                  </Link>
                </div>
                {/* <div className="dropdown-footer">
                  <Link to="/Offers" className="view-all-link" onClick={closeMenu}>
                    View All Services
                  </Link>
                </div> */}
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/CaseStudies"
                className={`nav-link ${isCaseStudiesOpen ? "active" : ""} ${activeSection === "casestudies" ? "active-page" : ""}`}
                onClick={(e) => handleDropdownToggle(e, setIsCaseStudiesOpen, isCaseStudiesOpen, "casestudies")}
              >
                CASE STUDIES <span className="dropdown-arrow">▼</span>
              </Link>
              <div className={`dropdown-menu modern-dropdown ${isCaseStudiesOpen ? "show" : ""}`}>
                <div className="dropdown-header">
                  <h3>Case Studies</h3>
                </div>
                <div className="dropdown-grid">
                  {/* <Link
                    to="/CaseStudies/CaseStudy3"
                    className={`dropdown-item ${location.pathname === "/CaseStudies/CaseStudy3" ? "active-sublink" : ""}`}
                    onClick={closeMenu}
                  >
                    <div className="item-icon">
                      <FileText size={20} />
                    </div>
                    <div className="item-content">
                      <span className="item-description">Textile Niche Product</span>
                    </div>
                  </Link> */}

                  {/* <Link
                    to="/CaseStudies/CaseStudy4"
                    className={`dropdown-item ${location.pathname === "/CaseStudies/CaseStudy4" ? "active-sublink" : ""}`}
                    onClick={closeMenu}
                  >
                    <div className="item-icon">
                      <Baby size={20} />
                    </div>
                    <div className="item-content">
                      <span className="item-description">Baby Product Case Study</span>
                    </div>
                  </Link> */}

                  <Link
                    to="/CaseStudies/CaseStudy2"
                    className={`dropdown-item ${location.pathname === "/CaseStudies/CaseStudy2" ? "active-sublink" : ""}`}
                    onClick={closeMenu}
                  >
                    <div className="item-icon">
                      <Zap size={20} />
                    </div>
                    <div className="item-content">
                      <span className="item-description">Electronic Niche</span>
                    </div>
                  </Link>

                  <Link
                    to="/CaseStudies/CaseStudy1"
                    className={`dropdown-item ${location.pathname === "/CaseStudies/CaseStudy1" ? "active-sublink" : ""}`}
                    onClick={closeMenu}
                  >
                    <div className="item-icon">
                      <Home size={20} />
                    </div>
                    <div className="item-content">
                      
                      <span className="item-description">Household Niche</span>
                    </div>
                  </Link>
                </div>
                {/* <div className="dropdown-footer">
                  <Link to="/CaseStudies" className="view-all-link" onClick={closeMenu}>
                    View All Case Studies
                  </Link>
                </div> */}
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/AboutUs"
                className={`nav-link ${isAboutUsOpen ? "active" : ""} ${activeSection === "about" ? "active-page" : ""}`}
                onClick={(e) => handleDropdownToggle(e, setIsAboutUsOpen, isAboutUsOpen, "about")}
              >
                ABOUT <span className="dropdown-arrow">▼</span>
              </Link>
              <div className={`dropdown-menu modern-dropdown ${isAboutUsOpen ? "show" : ""}`}>
                <div className="dropdown-header">
                  <h3>About</h3>
                </div>
                <div className="dropdown-grid">
                  <Link
                    to="/AboutUs"
                    className={`dropdown-item ${location.pathname === "/AboutUs" ? "active-sublink" : ""}`}
                    onClick={closeMenu}
                  >
                    <div className="item-icon">
                      <Users size={20} />
                    </div>
                    <div className="item-content">
                      <span className="item-title">About Us</span>
                      <span className="item-description">Learn about our company</span>
                    </div>
                  </Link>

                  <Link
                    to="/Team"
                    className={`dropdown-item ${location.pathname === "/Team" ? "active-sublink" : ""}`}
                    onClick={closeMenu}
                  >
                    <div className="item-icon">
                      <UserCheck size={20} />
                    </div>
                    <div className="item-content">
                      <span className="item-title">Team</span>
                      <span className="item-description">Meet our team members</span>
                    </div>
                  </Link>
                </div>
          
              </div>
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
