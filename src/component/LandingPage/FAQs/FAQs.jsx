"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import "./FAQs.css"

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null)

  // Simple toggle function
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "What services do you offer for Amazon sellers?",
      answer:
        "We offer a comprehensive range of services for Amazon sellers including product research and development, listing optimization, PPC management, brand management, account maintenance, SEO optimization, and influencer marketing. Our goal is to help you maximize your sales and profitability on Amazon through strategic approaches tailored to your specific needs.",
    },
    {
      question: "How long does it take to see results from your services?",
      answer:
        "The timeline for seeing results varies depending on the service and your specific situation. For PPC campaigns, you might see improvements within 2-4 weeks. For listing optimizations, results typically appear within 30-60 days as Amazon's algorithm adjusts. For new product launches, establishing a solid presence usually takes 3-6 months. We provide regular updates and reports so you can track progress throughout our partnership.",
    },
    {
      question: "Do you work with new Amazon sellers or only established brands?",
      answer:
        "We work with both new sellers and established brands. For new sellers, we provide guidance on product selection, account setup, and launch strategies to help you start strong. For established brands, we focus on optimization, scaling, and expanding your Amazon presence. Our team has experience working with businesses at all stages of their Amazon journey.",
    },
    {
      question: "How do you charge for your services?",
      answer:
        "Our pricing structure depends on the services you need and the scope of your business. We offer monthly retainer packages for ongoing services like account management and PPC, as well as project-based pricing for specific tasks like listing optimization or product launches. We provide transparent pricing with no hidden fees, and we're happy to create a custom package that fits your budget and goals.",
    },
    {
      question: "Can you help with international Amazon marketplace expansion?",
      answer:
        "Yes, we specialize in helping sellers expand to international Amazon marketplaces. We have experience with marketplaces in Europe, North America, and Asia. Our team can assist with translation and localization, international compliance, tax considerations, and marketplace-specific strategies to ensure your international expansion is successful.",
    },
    {
      question: "What makes your agency different from other Amazon service providers?",
      answer:
        "What sets us apart is our comprehensive approach and proven track record. We don't just focus on one aspect of Amazon selling—we provide end-to-end solutions with specialized experts in each area. Our team includes former Amazon employees and industry veterans with deep platform knowledge. We're results-driven, with numerous case studies showing significant growth for our clients, and we prioritize transparent communication throughout our partnership.",
    },
  ]

  return (
    <section className="faqs-section">
      <div className="faqs-container">
        <div className="faqs-header">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about our Amazon services and how we can help grow your business.</p>
        </div>

        <div className="faqs-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{faq.question}</h3>
                <button className="faq-toggle">{openIndex === index ? <Minus size={20} /> : <Plus size={20} />}</button>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faqs-cta">
          <p>Still have questions?</p>
          <button className="contact-us-button">Contact Us</button>
        </div>
      </div>
    </section>
  )
}

export default FAQs
