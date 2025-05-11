"use client"
import { ArrowRight } from "lucide-react"
import "./WhatWeOffer.css"

const WhatWeOffer = () => {
  // Since we're using client-side navigation, we would normally use useRouter
  // But for demonstration, we'll use a function to simulate navigation
  const handleNavigation = (path) => {
    console.log(`Navigating to: ${path}`)
    // In a real Next.js app, you would use:
    // router.push(path)

    // For demonstration, we'll just redirect using window.location
    // window.location.href = path
  }

  const services = [
    {
      id: 1,
      title: "Amazon Brand & Product Launch",
      description:
        "Whether you're starting a new business or scaling a startup, we guide you through product sourcing, account setup, and optimized listings—ensuring a profitable and smooth launch on Amazon.",
      gradient: "offer-blue-gradient",
      path: "/services/brand-launch",
    },
    {
      id: 2,
      title: "Amazon FBA Management",
      description:
        "Don't have the time or resources to manage your Amazon account day-to-day? We take care of everything for you, ensuring smooth operations with a focus on increased sales and more profits.",
      gradient: "offer-green-gradient",
      path: "/services/fba-management",
    },
    {
      id: 3,
      title: "Amazon Listing Audit",
      description:
        "Already selling on Amazon but not seeing the results you want? We offer in-depth listing audits to identify areas for improvement. Our team will provide actionable recommendations to optimize your listings and boost conversions.",
      gradient: "offer-blue-gradient",
      path: "/services/listing-audit",
    },
    {
      id: 4,
      title: "Amazon Listing Optimization",
      description:
        "We enhance your listings end-to-end — from rewriting titles, bullet points, and descriptions to designing high-quality images, infographics, and videos that capture attention and boost conversions.",
      gradient: "offer-green-gradient",
      path: "/services/listing-optimization",
    },
    {
      id: 5,
      title: "Amazon PPC Management",
      description:
        "We specialize in managing Pay-Per-Click (PPC) advertising campaigns on Amazon. We have a client history of clients that started from scratch and are now the best sellers of their entire niche just through PPC. Our goal is to achieve top organic rankings while minimizing your Total Advertising Cost of Sale (TACOS) in the long run.",
      gradient: "offer-blue-gradient",
      path: "/services/ppc-management",
    },
    {
      id: 6,
      title: "Efficient Sourcing & SEO",
      description:
        "Sourcing the right products at the right price is crucial for success. Our team will connect you with reliable suppliers and ensure your products arrive on time. We also implement SEO strategies to help your listings climb the search rankings, get more organic traffic, and generate more revenue without additional ad spend.",
      gradient: "offer-green-gradient",
      path: "/services/sourcing-seo",
    },
  ]

  return (
    <section className="offer-section">
      <div className="offer-container">
        <div className="offer-header">
          <h2>What We Offer</h2>
          <p>Tailored solution for your each need</p>
        </div>

        <div className="offer-cards-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className={`offer-card ${service.gradient}`}
              onClick={() => handleNavigation(service.path)}
            >
              <div className="offer-card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className="offer-card-arrow">
                <ArrowRight size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeOffer
