'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, Phone, User, ArrowLeft, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import CustomCursor from '@/components/custom-cursor'
import AmbientParticles from '@/components/ambient-particles'
import { getRandomTattooImages } from '@/lib/images'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { format } from 'date-fns'

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name1: '',
    mobile_number: '',
    appointment_date: '',
    appointment_time: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [bgImage, setBgImage] = useState<string | null>(null)
  
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<Date | null>(null)

  useEffect(() => {
    getRandomTattooImages(1).then(images => {
      if (images && images.length > 0) setBgImage(images[0].src)
    }).catch(() => {})
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const payload = {
        ...formData,
        appointment_date: selectedDate ? format(selectedDate, 'yyyy-MM-dd') : '',
        appointment_time: selectedTime ? format(selectedTime, 'HH:mm') : ''
      }

      const response = await fetch('https://admin.dreamtechsolution.com/api/method/create_tattoo_lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      const data = await response.json()

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

  // Animation variants
  const formVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  }

  return (
    <div className="bg-[#020202] min-h-screen text-foreground flex flex-col esoteric-crack-bg relative overflow-x-hidden">
      <CustomCursor />
      <AmbientParticles />
      <Navigation isScrolled={true} />
      
      <style>{`
        .react-datepicker {
          background-color: #080808;
          border: 1px solid rgba(197, 168, 92, 0.2);
          font-family: inherit;
          color: white;
          border-radius: 4px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.8);
        }
        .react-datepicker__header {
          background-color: #121212;
          border-bottom: 1px solid rgba(197, 168, 92, 0.2);
        }
        .react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header {
          color: white;
          font-weight: bold;
        }
        .react-datepicker__day-name {
          color: rgba(255, 255, 255, 0.5);
        }
        .react-datepicker__day {
          color: rgba(255, 255, 255, 0.9);
        }
        .react-datepicker__day:hover {
          background-color: rgba(197, 168, 92, 0.15);
          border-radius: 4px;
        }
        .react-datepicker__day--selected, .react-datepicker__day--keyboard-selected {
          background-color: var(--brand-gold) !important;
          color: black !important;
          font-weight: bold;
          border-radius: 4px;
        }
        .react-datepicker__day--disabled {
          color: rgba(255,255,255,0.2);
        }
        .react-datepicker-wrapper {
          width: 100%;
        }
        .react-datepicker__time-container {
          border-left: 1px solid rgba(197, 168, 92, 0.2);
        }
        .react-datepicker__time-container .react-datepicker__time {
          background: #080808;
        }
        .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {
          color: rgba(255,255,255,0.8);
        }
        .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover {
          background-color: rgba(197, 168, 92, 0.15) !important;
        }
        .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {
          background-color: var(--brand-gold) !important;
          color: black !important;
          font-weight: bold !important;
        }
      `}</style>

      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--brand-gold)]/[0.03] rounded-full blur-[150px] pointer-events-none z-0" />
      
      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 flex items-center justify-center relative z-10 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row shadow-[0_30px_80px_rgba(0,0,0,0.8)] rounded-xl overflow-hidden border border-[var(--brand-gold)]/10 bg-black/40 backdrop-blur-2xl"
        >
          {/* Left Panel - Dynamic Image */}
          <div className="hidden lg:block lg:w-5/12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[var(--brand-gold)]/10 mix-blend-overlay z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60 z-10" />
            
            {bgImage ? (
              <Image 
                src={bgImage} 
                alt="Studio Inspiration" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 1024px) 0vw, 50vw"
                priority
              />
            ) : (
              <div className="absolute inset-0 bg-[#0a0a0a]" />
            )}
            
            {/* Overlay Content */}
            <div className="absolute inset-0 z-20 flex flex-col justify-between p-12">
              <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors w-fit">
                <ArrowLeft size={16} />
                <span className="text-xs tracking-widest uppercase font-bold">Return Home</span>
              </Link>
              
              <div>
                <div className="w-10 h-10 mb-6 border border-[var(--brand-gold)]/30 rounded-sm flex items-center justify-center rotate-45 backdrop-blur-md bg-black/20">
                  <Sparkles size={16} className="-rotate-45 text-[var(--brand-gold)]" />
                </div>
                <h2 className="text-4xl font-display text-white mb-4 leading-tight">
                  Your Vision.<br/>
                  <span className="text-[var(--brand-gold)] italic">Our Masterpiece.</span>
                </h2>
                <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                  Step into a realm of elite artistry. Every consultation is the first step towards a permanent legacy worn on your skin.
                </p>
              </div>
            </div>
            
            {/* Esoteric Corner Marks */}
            <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-[var(--brand-gold)]/30 z-20 pointer-events-none" />
            <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-[var(--brand-gold)]/30 z-20 pointer-events-none" />
          </div>

          {/* Right Panel - Form */}
          <div className="w-full lg:w-7/12 p-8 sm:p-12 md:p-16 relative">
            <Link href="/" className="lg:hidden inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-10 w-fit">
              <ArrowLeft size={16} />
              <span className="text-xs tracking-widest uppercase font-bold">Return Home</span>
            </Link>

            <div className="mb-10">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[var(--brand-gold)]" />
                <span className="text-[0.65rem] tracking-[0.35em] font-bold text-[var(--brand-gold)] uppercase">
                  Secure Your Spot
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                Book Session
              </h1>
              <p className="text-[#9A9A9A] text-sm md:text-base font-light max-w-md">
                Fill out the details below. Our booking manager will connect with you to confirm availability.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-start justify-center py-10"
                >
                  <div className="w-16 h-16 rounded-full bg-[var(--brand-gold)]/10 flex items-center justify-center mb-6 border border-[var(--brand-gold)]/30 shadow-[0_0_30px_rgba(197,168,92,0.2)]">
                    <CheckCircle2 className="w-8 h-8 text-[var(--brand-gold)]" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-white mb-4">Request Sent Successfully</h2>
                  <p className="text-[#9A9A9A] text-base leading-relaxed mb-10 max-w-md">
                    Thank you, <span className="text-white font-medium">{formData.name1}</span>. We've received your booking request. Our artist will contact you at <span className="text-white font-medium">{formData.mobile_number}</span> very soon.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle')
                      setFormData({ name1: '', mobile_number: '', appointment_date: '', appointment_time: '' })
                    }}
                    className="group relative inline-flex items-center justify-center px-8 py-3.5 bg-transparent border border-white/20 text-white text-xs tracking-widest uppercase font-bold hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  variants={formVariants}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  {status === 'error' && (
                    <motion.div variants={itemVariants} className="p-4 bg-red-900/20 border border-red-500/30 flex items-start gap-3 rounded-sm backdrop-blur-md">
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="text-red-200 text-sm">{errorMessage}</p>
                    </motion.div>
                  )}

                  <div className="space-y-7">
                    {/* Name */}
                    <motion.div variants={itemVariants} className="relative group flex flex-col gap-1.5">
                      <label className="text-[0.65rem] text-[var(--brand-gold)] uppercase tracking-widest font-semibold ml-8">
                        Full Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                          <User className="w-4 h-4 text-white/30 group-focus-within:text-[var(--brand-gold)] transition-colors" />
                        </div>
                        <input
                          type="text"
                          name="name1"
                          required
                          value={formData.name1}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-white/10 text-white pl-8 pr-4 py-2 focus:outline-none focus:border-[var(--brand-gold)] transition-all placeholder:text-white/20 text-base"
                          placeholder="e.g. John Doe"
                        />
                      </div>
                    </motion.div>

                    {/* Mobile */}
                    <motion.div variants={itemVariants} className="relative group flex flex-col gap-1.5">
                      <label className="text-[0.65rem] text-[var(--brand-gold)] uppercase tracking-widest font-semibold ml-8">
                        Mobile Number *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                          <Phone className="w-4 h-4 text-white/30 group-focus-within:text-[var(--brand-gold)] transition-colors" />
                        </div>
                        <input
                          type="tel"
                          name="mobile_number"
                          required
                          value={formData.mobile_number}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-white/10 text-white pl-8 pr-4 py-2 focus:outline-none focus:border-[var(--brand-gold)] transition-all placeholder:text-white/20 text-base"
                          placeholder="e.g. +91 98765 43210"
                        />
                      </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                      {/* Date */}
                      <motion.div variants={itemVariants} className="relative group flex flex-col gap-1.5">
                        <label className="text-[0.65rem] text-[var(--brand-gold)] uppercase tracking-widest font-semibold ml-8">
                          Preferred Date
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-10">
                            <Calendar className="w-4 h-4 text-white/30 group-focus-within:text-[var(--brand-gold)] transition-colors" />
                          </div>
                          <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            dateFormat="dd MMM yyyy"
                            minDate={new Date()}
                            placeholderText="Select Date"
                            className="w-full bg-transparent border-b border-white/10 text-white pl-8 pr-4 py-2 focus:outline-none focus:border-[var(--brand-gold)] transition-all text-sm placeholder:text-white/20"
                          />
                        </div>
                      </motion.div>

                      {/* Time */}
                      <motion.div variants={itemVariants} className="relative group flex flex-col gap-1.5">
                        <label className="text-[0.65rem] text-[var(--brand-gold)] uppercase tracking-widest font-semibold ml-8">
                          Preferred Time
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-10">
                            <Clock className="w-4 h-4 text-white/30 group-focus-within:text-[var(--brand-gold)] transition-colors" />
                          </div>
                          <DatePicker
                            selected={selectedTime}
                            onChange={(date) => setSelectedTime(date)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={30}
                            timeCaption="Time"
                            dateFormat="h:mm aa"
                            placeholderText="Select Time"
                            className="w-full bg-transparent border-b border-white/10 text-white pl-8 pr-4 py-2 focus:outline-none focus:border-[var(--brand-gold)] transition-all text-sm placeholder:text-white/20"
                          />
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  <motion.div variants={itemVariants} className="pt-4">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="group relative w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-[var(--brand-gold)] text-black font-bold uppercase tracking-[0.2em] text-xs hover:shadow-[0_0_40px_rgba(197,168,92,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:pointer-events-none overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 ease-out" />
                      <span className="relative z-10 flex items-center gap-3">
                        {status === 'loading' ? (
                          <>
                            <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                            <span>Processing...</span>
                          </>
                        ) : (
                          'Confirm Appointment'
                        )}
                      </span>
                    </button>
                  </motion.div>
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
