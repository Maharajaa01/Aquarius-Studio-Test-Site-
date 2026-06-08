'use client'

import { motion } from 'framer-motion'

interface ProcessStep {
  title: string
  description: string
}

interface ServiceProcessProps {
  title?: string
  steps: ProcessStep[]
}

export function ServiceProcess({ title = "Our Process", steps }: ServiceProcessProps) {
  return (
    <section className="py-24 bg-[#0f0f0f] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 uppercase">{title}</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          
          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center justify-between ${isEven ? 'md:flex-row-reverse' : ''} md:mb-24 last:mb-0`}
                >
                  <div className="w-full md:w-5/12 mb-6 md:mb-0" />
                  
                  {/* Timeline Dot */}
                  <div className="hidden md:flex w-12 h-12 absolute left-1/2 -translate-x-1/2 bg-[#0f0f0f] border-2 border-accent rounded-full items-center justify-center z-10">
                    <span className="text-accent font-bold">{index + 1}</span>
                  </div>

                  <div className="w-full md:w-5/12 text-center md:text-left">
                    <div className="bg-white/5 border border-white/10 p-8 hover:border-accent/50 transition-colors duration-300 rounded-sm">
                      <div className="md:hidden w-10 h-10 bg-accent text-black font-bold flex items-center justify-center rounded-full mx-auto mb-4">
                        {index + 1}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
