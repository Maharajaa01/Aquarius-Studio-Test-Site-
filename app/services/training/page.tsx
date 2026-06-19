'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BookOpen, Award, ShieldCheck, Clock, ArrowRight, UserCheck, Sparkles, GraduationCap, ChevronRight } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import CustomCursor from '@/components/custom-cursor'
import AmbientParticles from '@/components/ambient-particles'

interface ModuleStep {
  num: string
  title: string
  duration: string
  description: string
  skills: string[]
}

const courseModules: ModuleStep[] = [
  {
    num: "01",
    title: "Artistic Foundations & Sketching",
    duration: "Month 1",
    description: "Master skin curvature drawing, line weights, shading perspectives, and translating visual concepts into tattoo-ready stencils.",
    skills: ["Stencil Transfer Techniques", "Anatomy Matching & Flow", "Contrast & Value Mapping"]
  },
  {
    num: "02",
    title: "Machine Mechanics & Setup",
    duration: "Month 2",
    description: "Understand the structural differences between rotary and coil machines, needle groupings, voltage configurations, and skin depth control.",
    skills: ["Voltage Control Calibration", "Needle Group Configurations", "Station Setups & Safety"]
  },
  {
    num: "03",
    title: "Sanitization & Skin Anatomy",
    duration: "Month 3",
    description: "Deep dive into cross-contamination protocols, bloodborne pathogens, skin layer properties, and sterilization procedures.",
    skills: ["Pathogen Control Certs", "Aseptic Technique Focus", "Skin Sensitivity Analysis"]
  },
  {
    num: "04",
    title: "Advanced Shading & Packing",
    duration: "Month 4",
    description: "Step-by-step masterclasses in smooth black & grey washes, whip shading, dotwork gradients, and solid color packing.",
    skills: ["Whip Shading Dynamics", "Dotwork & Stippling Grids", "Vibrant Ink Saturation"]
  },
  {
    num: "05",
    title: "Synthetic Skin Simulation",
    duration: "Month 5",
    description: "Apply designs to high-fidelity synthetic skins. Focus on correct hand speeds, stretching skins, and needle angle consistency.",
    skills: ["Machine Vibration Control", "Speed Consistency Drills", "3D Artificial Skin Practice"]
  },
  {
    num: "06",
    title: "Supervised Live Model Graduation",
    duration: "Month 6",
    description: "Complete your first resident client tattoos under the direct supervision of founding masters Aravind and Aswin.",
    skills: ["Client Consultation Practice", "Live Execution Protocol", "Professional Portfolio Launch"]
  }
]

export default function TrainingPage() {
  const [activeModule, setActiveModule] = useState(0)

  return (
    <div className="bg-[#050505] text-[#F5F5F5] min-h-screen relative overflow-hidden select-none">
      <CustomCursor />
      <AmbientParticles />
      <Navigation isScrolled={true} />

      {/* Repeating film grain overlay */}
      <div className="absolute inset-0 luxury-grain pointer-events-none z-[12]" />

      {/* Glowing background spotlights */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-r from-[#D4AF37]/5 to-transparent blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-[60%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-r from-[#8B0000]/5 to-transparent blur-[140px] rounded-full pointer-events-none" />

      {/* ── ACADEMY HERO SECTION ── */}
      <section className="relative pt-32 pb-20 md:py-36 px-6 lg:px-10 max-w-7xl mx-auto z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-5 h-px bg-[#D4AF37]" />
              <span className="text-[0.62rem] tracking-[0.25em] text-[#D4AF37] uppercase font-bold">
                Tattoo Academy
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase leading-none mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Master The <br />
              <span className="text-[#D4AF37]">Art of Ink</span>
            </h1>
            
            <p className="text-[#9A9A9A] text-sm md:text-base font-light leading-relaxed max-w-lg mb-8">
              Turn your passion for illustration into a highly respected, licensed career. Learn machine physics, safety science, and premium styles directly from founding master artists.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <Link
                href="#enroll"
                className="px-8 py-4 bg-[#D4AF37] text-black text-[0.68rem] tracking-[0.25em] uppercase font-bold text-center hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-[1.02] transition-all duration-300 rounded-sm"
              >
                Enroll in Next Batch
              </Link>
              <Link
                href="#curriculum"
                className="px-8 py-4 border border-[#D4AF37]/20 hover:border-[#D4AF37] text-[#9A9A9A] hover:text-white text-[0.68rem] tracking-[0.25em] uppercase font-bold text-center transition-all duration-500 rounded-sm"
              >
                View Curriculum
              </Link>
            </div>
          </motion.div>

          {/* Hero Right Visual Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 w-full flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[550px] aspect-[16/10] bg-[#0c0c0c] border border-white/5 p-2 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:border-[#D4AF37]/40 transition-colors duration-500 group">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/Images/training_desk.jpg"
                  alt="Tattoo Academy learning workspace setup"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
              
              {/* Corner markings */}
              <div className="absolute top-1.5 left-1.5 w-4 h-4 border-t border-l border-white/10 group-hover:border-[#D4AF37]/40 transition-colors duration-300 pointer-events-none" />
              <div className="absolute bottom-1.5 right-1.5 w-4 h-4 border-b border-r border-white/10 group-hover:border-[#D4AF37]/40 transition-colors duration-300 pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── ACADEMY OVERVIEW (Mentorship focus) ── */}
      <section className="py-20 md:py-24 bg-black border-y border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Overview Left Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative w-full aspect-square bg-[#0c0c0c] border border-white/5 p-2 rounded-sm overflow-hidden group hover:border-[#D4AF37]/30 transition-colors duration-500">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/Images/training_practice.jpg"
                  alt="Student practicing tattoo linework under guidance"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3.5 py-1.5 border border-white/10 rounded-sm flex items-center gap-1.5">
                <UserCheck size={13} className="text-[#D4AF37]" />
                <span className="text-[0.55rem] tracking-[0.18em] uppercase font-bold text-white">
                  Supervised Practice
                </span>
              </div>
            </div>
          </motion.div>

          {/* Overview Right Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-5 h-px bg-[#D4AF37]" />
              <span className="text-[0.62rem] tracking-[0.25em] text-[#D4AF37] uppercase font-bold">
                Learn From The Masters
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase mb-6 font-display">
              Hands-On Mentorship
            </h2>
            
            <p className="text-[#9A9A9A] text-sm md:text-base font-light leading-relaxed mb-6">
              Our training program is designed to guide you step-by-step from sketching on paper to tattooing human skin safely and confidently. We operate a highly structured 1-on-1 model: you will sit alongside our founders, observe live bookings, and have each of your line strokes critiqued.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="flex gap-3 items-start">
                <ShieldCheck size={18} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white tracking-wide block mb-1">Elite Safety Standards</h4>
                  <p className="text-xs text-[#9A9A9A] font-light leading-relaxed">
                    Learn core aseptic methods and sterilization sciences aligned with hospital-grade regulations.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <GraduationCap size={18} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white tracking-wide block mb-1">Guaranteed Career Route</h4>
                  <p className="text-xs text-[#9A9A9A] font-light leading-relaxed">
                    Graduating students receive residency portfolios and immediate studio placement guidance.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── COURSE KEY HIGHLIGHTS (Bento) ── */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-6 lg:px-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-10 bg-[#0c0c0c] border border-white/5 hover:border-[#D4AF37]/35 transition-all duration-300 rounded-sm text-center flex flex-col items-center gap-4"
          >
            <Clock size={28} className="text-[#D4AF37]" />
            <h3 className="text-2xl font-bold text-white font-display">6 Months</h3>
            <p className="text-[#9A9A9A] text-xs font-light leading-relaxed">
              Intensive, comprehensive layout covering stencil mapping, shading physics, cross-contamination, and live model work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-8 md:p-10 bg-[#0c0c0c] border border-white/5 hover:border-[#D4AF37]/35 transition-all duration-300 rounded-sm text-center flex flex-col items-center gap-4"
          >
            <UserCheck size={28} className="text-[#D4AF37]" />
            <h3 className="text-2xl font-bold text-white font-display">Live Models</h3>
            <p className="text-[#9A9A9A] text-xs font-light leading-relaxed">
              Step-by-step practical practice. Graduate from synthetics to executing client sessions under master supervision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 md:p-10 bg-[#0c0c0c] border border-white/5 hover:border-[#D4AF37]/35 transition-all duration-300 rounded-sm text-center flex flex-col items-center gap-4"
          >
            <Award size={28} className="text-[#D4AF37]" />
            <h3 className="text-2xl font-bold text-white font-display">Certifications</h3>
            <p className="text-[#9A9A9A] text-xs font-light leading-relaxed">
              Graduate with bloodborne pathogen licensing and a verified portfolio to open doors anywhere globally.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ── COURSE CURRICULUM SYLLABUS SECTION ── */}
      <section id="curriculum" className="py-20 md:py-24 bg-black border-y border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          
          <div className="flex flex-col mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-5 h-px bg-[#D4AF37]" />
              <span className="text-[0.62rem] tracking-[0.25em] text-[#D4AF37] uppercase font-bold">
                Detailed Syllabus
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase font-display">
              Course Modules
            </h2>
          </div>

          {/* Interactive Split Curriculum */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Left Module Buttons */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {courseModules.map((mod, idx) => {
                const isActive = activeModule === idx
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveModule(idx)}
                    className={`p-6 border text-left rounded-sm relative transition-all duration-300 flex items-center justify-between ${
                      isActive 
                        ? 'bg-[#0c0c0c] border-[#D4AF37]/30 text-white' 
                        : 'border-white/5 bg-transparent text-[#9A9A9A] hover:border-white/10 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-sm font-bold font-mono ${isActive ? 'text-[#D4AF37]' : 'text-[#9A9A9A]'}`}>
                        {mod.num}
                      </span>
                      <span className="text-sm font-bold tracking-wide font-display">
                        {mod.title}
                      </span>
                    </div>
                    <span className={`transition-transform duration-300 ${isActive ? 'text-[#D4AF37] translate-x-1' : 'text-[#9A9A9A] group-hover:translate-x-1'}`}>
                      <ChevronRight size={16} />
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Right Active Module Details */}
            <div className="lg:col-span-7 bg-[#0c0c0c] border border-white/5 p-8 md:p-10 rounded-sm min-h-[380px] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                  <span className="text-xs font-bold font-mono text-[#D4AF37] uppercase tracking-widest bg-[#D4AF37]/5 px-3 py-1 border border-[#D4AF37]/20 rounded-sm">
                    {courseModules[activeModule].duration}
                  </span>
                  <span className="text-xs text-[#9A9A9A] font-light">
                    Module {courseModules[activeModule].num} of 06
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-wide mb-4 font-display">
                  {courseModules[activeModule].title}
                </h3>
                <p className="text-sm text-[#9A9A9A] font-light leading-relaxed mb-8">
                  {courseModules[activeModule].description}
                </p>
              </div>

              <div>
                <span className="text-[0.55rem] tracking-[0.18em] text-[#D4AF37] uppercase font-bold block mb-3">
                  Syllabus Highlights
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {courseModules[activeModule].skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2.5 text-xs text-[#9A9A9A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B0000] flex-shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── ENROLLMENT URGENCY CTA (Enroll) ── */}
      <section id="enroll" className="py-20 md:py-28 max-w-4xl mx-auto px-6 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-[#D4AF37]/20 p-8 md:p-14 bg-gradient-to-b from-[#0c0c0c] to-[#050505] rounded-sm relative group hover:border-[#D4AF37]/45 transition-colors duration-500 shadow-[0_30px_70px_rgba(0,0,0,0.8)]"
        >
          {/* Top spark icon */}
          <div className="flex justify-center mb-6">
            <div className="w-10 h-10 bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/30 rounded-sm">
              <Sparkles size={18} className="text-[#D4AF37]" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase mb-6 leading-tight font-display">
            Start Your Tattoo <br /> Career Today
          </h2>

          {/* Subtext and Urgency */}
          <p className="text-[#9A9A9A] text-sm md:text-base font-light max-w-lg mx-auto leading-relaxed mb-10">
            Admissions are open for our exclusive cohort. We limit batches to 6 students to maintain strict 1-on-1 mentorship standards.
            <span className="text-[#D4AF37] font-semibold mt-3.5 block flex items-center justify-center gap-1.5 text-xs tracking-wider uppercase">
              <GraduationCap size={14} />
              Only 2 seats remaining for the upcoming batch
            </span>
          </p>

          {/* CTA Link */}
          <div className="flex justify-center">
            <Link
              href="#contact"
              className="group relative inline-flex items-center gap-3.5 px-10 py-5 bg-[#D4AF37] text-[#050505] text-xs tracking-[0.25em] uppercase font-bold hover:shadow-[0_0_35px_rgba(212,175,55,0.45)] hover:scale-[1.03] transition-all duration-300"
            >
              <span>Apply For Enrollment</span>
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1.5 transition-transform duration-300 flex-shrink-0 stroke-[2.5px]"
              />
            </Link>
          </div>

          {/* Decorative frames */}
          <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#D4AF37]/20 pointer-events-none group-hover:border-[#D4AF37]/50 transition-colors duration-300" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#D4AF37]/20 pointer-events-none group-hover:border-[#D4AF37]/50 transition-colors duration-300" />
        </motion.div>
      </section>

      {/* ── ENROLLMENT CONTACT FORM BLOCK ── */}
      <section id="contact" className="py-16 md:py-24 bg-black border-t border-white/5 relative z-20">
        <div className="max-w-xl mx-auto px-6">
          <div className="border border-white/5 p-8 md:p-10 bg-[#0c0c0c] rounded-sm">
            <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-wide uppercase text-white font-display text-center">
              Academy Inquiry Form
            </h3>
            <p className="text-xs text-[#9A9A9A] text-center mb-8 font-light">
              Send us your details to schedule a call with the admissions team.
            </p>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-[#050505] border border-white/10 text-foreground placeholder-[#9A9A9A] focus:outline-none focus:border-[#D4AF37] transition-colors rounded-sm text-sm"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-[#050505] border border-white/10 text-foreground placeholder-[#9A9A9A] focus:outline-none focus:border-[#D4AF37] transition-colors rounded-sm text-sm"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-[#050505] border border-white/10 text-foreground placeholder-[#9A9A9A] focus:outline-none focus:border-[#D4AF37] transition-colors rounded-sm text-sm"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Tell us about your drawing background (if any)"
                  rows={4}
                  className="w-full px-4 py-3 bg-[#050505] border border-white/10 text-foreground placeholder-[#9A9A9A] focus:outline-none focus:border-[#D4AF37] transition-colors rounded-sm text-sm resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3.5 bg-[#D4AF37] text-[#050505] font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors text-xs rounded-sm"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
