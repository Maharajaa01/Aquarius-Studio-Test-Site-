'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Do you offer discounts on bulk tattoo sessions?',
      answer:
        'We offer competitive pricing for multiple sessions and can discuss package deals. Contact us for personalized quotes on custom projects.',
    },
    {
      question: 'Is tattooing safe? What are the hygiene standards?',
      answer:
        'Absolutely. We follow strict ISO-certified sterilization protocols. All needles and equipment are single-use and autoclaved. Our studio is regularly inspected and maintains the highest hygiene standards.',
    },
    {
      question: 'What are the aftercare instructions?',
      answer:
        'We provide detailed aftercare guidelines with every tattoo. Generally: keep it clean and dry for 24 hours, apply recommended lotion, avoid sun exposure for 2 weeks, and no swimming for 2-3 weeks.',
    },
    {
      question: 'Can I book an appointment or do you accept walk-ins?',
      answer:
        'Both! We accept walk-ins during business hours, but appointments are recommended to ensure your preferred artist is available and minimize wait times.',
    },
    {
      question: 'What types of piercings do you offer?',
      answer:
        'We offer ear piercings (lobe, cartilage, daith, helix) and body piercings. All piercings are done with sterile equipment and premium quality jewelry.',
    },
    {
      question: 'Do you offer tattoo cover-ups?',
      answer:
        'Yes! Our experienced artists specialize in creative cover-ups. We assess your existing tattoo and suggest designs that work perfectly with the current ink.',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-secondary border-b border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-background transition-colors text-left group"
              >
                <h3 className="font-semibold text-sm md:text-base group-hover:text-accent transition-colors">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-accent transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-background border-t border-border text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
