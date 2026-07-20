'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, Phone, User, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import CustomCursor from '@/components/custom-cursor'
import AmbientParticles from '@/components/ambient-particles'

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name1: '',
    mobile_number: '',
    appointment_date: '',
    appointment_time: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('https://admin.dreamtechsolution.com/api/method/create_tattoo_lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      // Frappe API typically wraps the response in a 'message' object
      if (data.message && data.message.status === 'success') {
        setStatus('success')
      } else if (data.status === 'success') {
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMessage(data.message?.message || data.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Booking Error:', error)
      setStatus('error')
      setErrorMessage('Failed to connect to the server. Please try again.')
    }
  }

  return (
    <div className="bg-[#020202] min-h-screen text-foreground flex flex-col esoteric-crack-bg relative overflow-x-hidden">
      <CustomCursor />
      <AmbientParticles />
      <Navigation isScrolled={true} />
      
      <main className="flex-grow pt-32 pb-20 px-6 flex items-center justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-xl"
        >
          <div className="mb-6 flex justify-center">
             <div className="h-px w-6 bg-[var(--brand-gold)] mt-2 mr-3 opacity-50" />
             <span className="text-[0.62rem] tracking-[0.35em] font-bold text-[var(--brand-gold)] uppercase">
               Request Appointment
             </span>
             <div className="h-px w-6 bg-[var(--brand-gold)] mt-2 ml-3 opacity-50" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-center mb-4 uppercase tracking-tight text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Book Your Session
          </h1>
          
          <p className="text-center text-[#9A9A9A] text-sm md:text-base font-light mb-10 max-w-md mx-auto">
            Fill out the form below to secure your consultation or tattoo session. We'll get back to you shortly to confirm the details.
          </p>

          <div className="p-8 md:p-10 bg-[#080808] border border-[var(--brand-gold)]/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-sm relative glowing-occult-border">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[var(--brand-gold)]/40 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[var(--brand-gold)]/40 pointer-events-none" />

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[var(--brand-gold)]/10 flex items-center justify-center mb-6 border border-[var(--brand-gold)]/30">
                    <CheckCircle2 className="w-8 h-8 text-[var(--brand-gold)]" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">Booking Requested!</h2>
                  <p className="text-[#9A9A9A] text-sm leading-relaxed mb-8">
                    Thank you for reaching out, {formData.name1}. We have received your booking request and our artist will contact you shortly to confirm your appointment.
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 hover:bg-white/10 text-white text-xs uppercase tracking-widest transition-colors border border-white/10"
                  >
                    <ArrowLeft size={14} />
                    Back to Home
                  </Link>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {status === 'error' && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 flex items-start gap-3 rounded-sm mb-6">
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="text-red-300 text-sm">{errorMessage}</p>
                    </div>
                  )}

                  <div className="space-y-5">
                    {/* Name */}
                    <div>
                      <label className="block text-[0.65rem] uppercase tracking-widest text-white/70 mb-2 font-semibold">Full Name *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <User className="w-4 h-4 text-white/30" />
                        </div>
                        <input
                          type="text"
                          name="name1"
                          required
                          value={formData.name1}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full bg-[#121212] border border-white/10 text-white pl-11 pr-4 py-3 focus:outline-none focus:border-[var(--brand-gold)]/50 transition-colors placeholder:text-white/20 text-sm"
                        />
                      </div>
                    </div>

                    {/* Mobile */}
                    <div>
                      <label className="block text-[0.65rem] uppercase tracking-widest text-white/70 mb-2 font-semibold">Mobile Number *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Phone className="w-4 h-4 text-white/30" />
                        </div>
                        <input
                          type="tel"
                          name="mobile_number"
                          required
                          value={formData.mobile_number}
                          onChange={handleChange}
                          placeholder="Your mobile number"
                          className="w-full bg-[#121212] border border-white/10 text-white pl-11 pr-4 py-3 focus:outline-none focus:border-[var(--brand-gold)]/50 transition-colors placeholder:text-white/20 text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Date */}
                      <div>
                        <label className="block text-[0.65rem] uppercase tracking-widest text-white/70 mb-2 font-semibold">Preferred Date (Optional)</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Calendar className="w-4 h-4 text-white/30" />
                          </div>
                          <input
                            type="date"
                            name="appointment_date"
                            value={formData.appointment_date}
                            onChange={handleChange}
                            className="w-full bg-[#121212] border border-white/10 text-white pl-11 pr-4 py-3 focus:outline-none focus:border-[var(--brand-gold)]/50 transition-colors text-sm [&::-webkit-calendar-picker-indicator]:invert-[0.8] [&::-webkit-calendar-picker-indicator]:opacity-50"
                          />
                        </div>
                      </div>

                      {/* Time */}
                      <div>
                        <label className="block text-[0.65rem] uppercase tracking-widest text-white/70 mb-2 font-semibold">Preferred Time (Optional)</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Clock className="w-4 h-4 text-white/30" />
                          </div>
                          <input
                            type="time"
                            name="appointment_time"
                            value={formData.appointment_time}
                            onChange={handleChange}
                            className="w-full bg-[#121212] border border-white/10 text-white pl-11 pr-4 py-3 focus:outline-none focus:border-[var(--brand-gold)]/50 transition-colors text-sm [&::-webkit-calendar-picker-indicator]:invert-[0.8] [&::-webkit-calendar-picker-indicator]:opacity-50"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full mt-4 flex items-center justify-center px-6 py-4 bg-[var(--brand-gold)] text-black font-bold uppercase tracking-[0.2em] text-xs hover:shadow-[0_0_30px_rgba(197,168,92,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:pointer-events-none"
                  >
                    {status === 'loading' ? (
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </div>
                    ) : (
                      'Confirm Booking Request'
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  )
}
