'use client'

import { Star } from 'lucide-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Client',
      content:
        'The attention to detail and professionalism was incredible. My tattoo turned out even better than I imagined. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Client',
      content:
        'First-time getting a tattoo and I was nervous, but the team made me feel comfortable. The hygiene standards are impeccable.',
      rating: 5,
    },
    {
      name: 'Arjun Singh',
      role: 'Client',
      content:
        'Been to several studios across India. This is by far the best. The artists here truly understand the craft.',
      rating: 5,
    },
    {
      name: 'Neha Patel',
      role: 'Client',
      content:
        'Aftercare guidance was perfect. My tattoo healed beautifully without any issues. Will definitely come back.',
      rating: 5,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust us with their stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-secondary border border-border group hover:border-accent transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-sm leading-relaxed mb-6 italic text-muted-foreground">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
