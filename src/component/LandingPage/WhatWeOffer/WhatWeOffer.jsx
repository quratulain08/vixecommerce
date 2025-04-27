"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import "./WhatWeOffer.css"

const WhatWeOffer = () => {
  const [activeCard, setActiveCard] = useState(null)

  const services = [
    {
      id: 1,
      title: "Amazon Brand Launch",
      description:
        "We'll guide you through the entire process of launching your brand on Amazon from the ground up. This includes everything from product research and sourcing to setting up your Seller Central account and creating optimized listings",
      gradient: "green-gradient",
    },
    {
      id: 2,
      title: "Amazon FBA Coaching",
      description:
        "Feeling lost in the Amazon maze? Our FBA coaching program provides the knowledge and tools you need to navigate the platform confidently. Learn strategies for product selection, listing optimization, inventory management, PPC sales growth and more.",
      gradient: "blue-gradient",
    },
    {
      id: 3,
      title: "Amazon FBA Management",
      description:
        "Don't have the time or resources to manage your Amazon account day-to-day? We take care of everything for you, ensuring smooth operations with a focus on increased sales and more profits.",
      gradient: "green-gradient",
    },
    {
      id: 4,
      title: "Amazon Listing Audit",
      description:
        "Already selling on Amazon but not seeing the results you want? We offer in-depth listing audits to identify areas for improvement. Our team will provide actionable recommendations to optimize your listings and boost conversions.",
      gradient: "blue-gradient",
    },
    {
      id: 5,
      title: "Amazon Listing Optimization",
      description:
        "Take your listings to the next level. We offer a range of optimization services, from rewriting product descriptions and titles to sourcing high-quality images and videos. Let us help you in creating listings that grab attention and drive sales.",
      gradient: "green-gradient",
    },
    {
      id: 6,
      title: "Amazon PPC Management",
      description:
        "We specialize in managing Pay-Per-Click (PPC) advertising campaigns on Amazon. We have a client history of clients that started from scratch and are now the best sellers of their entire niche just through PPC. Our goal is to achieve top organic rankings while minimizing your Total Advertising Cost of Sale (TACOS) in the long run.",
      gradient: "blue-gradient",
    },
    {
      id: 7,
      title: "Amazon Product Launch",
      description:
        "Struggling to find the right products to sell? Our team has a knack for identifying innovative and profitable products with high market potential through data-backed and low-risk strategies.",
      gradient: "green-gradient",
    },
    {
      id: 8,
      title: "Listing Graphic Design Optimization",
      description:
        "We don't just optimize the content within your listings - we can also help with the visual presentation. We'll ensure your listings are visually appealing and showcase your products in the best possible light.",
      gradient: "blue-gradient",
    },
    {
      id: 9,
      title: "Product Procurement",
      description:
        "Sourcing the right products at the right price is crucial for success. Our team will connect you with reliable suppliers and ensure your products arrive at the Amazon warehouse on time and within budget.",
      gradient: "green-gradient",
    },
    {
      id: 10,
      title: "Search Engine Optimization (SEO)",
      description:
        "We understand the importance of organic ranking on Amazon. Our SEO services will help your listings climb the search rankings, get more organic traffic, and generate more revenue without any additional ad spend.",
      gradient: "blue-gradient",
    },
  ]

  const handleCardClick = (id) => {
    setActiveCard(id === activeCard ? null : id)
  }

  return (
    <section className="what-we-offer-section">
      <div className="what-we-offer-container">
        <div className="what-we-offer-header">
          <h2>What We Offer</h2>
          <p>Tailored solution for your each need</p>
        </div>

        <div className="service-cards-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className={`service-card ${service.gradient} ${activeCard === service.id ? "active" : ""}`}

              onClick={() => handleCardClick(service.id)}
            >
              <div className="card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className="card-arrow">
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
