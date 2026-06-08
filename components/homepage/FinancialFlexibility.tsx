'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CreditCard, Wallet, Percent } from 'lucide-react'

export default function FinancialFlexibility() {
  return (
    <section className="py-20 bg-accent relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute -right-20 -top-20 opacity-10 pointer-events-none transform rotate-12">
        <CreditCard className="w-[400px] h-[400px] text-black" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-black mb-6 uppercase tracking-tighter"
            >
              Tattoo Now, <br/>Pay Later.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-black/80 text-lg md:text-xl font-medium mb-8 max-w-lg"
            >
              Don't compromise on the quality of art that stays on you forever. 
              We offer flexible EMI options so you can get your dream tattoo today 
              and pay in easy installments.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/calculator"
                className="px-8 py-4 bg-black text-white font-bold tracking-widest uppercase hover:bg-black/80 transition-colors shadow-xl"
              >
                Check Pricing
              </Link>
              <Link
                href="#contact"
                className="px-8 py-4 bg-transparent border-2 border-black text-black font-bold tracking-widest uppercase hover:bg-black/5 transition-colors"
              >
                Learn About EMI
              </Link>
            </motion.div>
          </div>

          <div className="lg:w-5/12 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div className="bg-black/5 p-6 border border-black/10 rounded-sm">
              <Wallet className="w-8 h-8 text-black mb-4" />
              <h3 className="font-bold text-black text-lg mb-2">0% Interest EMI</h3>
              <p className="text-black/70 text-sm">Available on select credit cards for tenures up to 6 months.</p>
            </div>
            <div className="bg-black/5 p-6 border border-black/10 rounded-sm">
              <Percent className="w-8 h-8 text-black mb-4" />
              <h3 className="font-bold text-black text-lg mb-2">Exclusive Offers</h3>
              <p className="text-black/70 text-sm">Special rewards and discounts for HDFC and Axis Bank cardholders.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
