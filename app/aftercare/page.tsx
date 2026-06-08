'use client'

import Link from 'next/link'
import { ArrowLeft, AlertCircle, Check } from 'lucide-react'
import Navigation from '@/components/navigation'

export default function AftercarePage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navigation isScrolled={true} />

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-6xl sm:text-7xl font-black tracking-tight mb-4 text-white">
              TATTOO AFTERCARE
            </h1>
            <p className="text-xl text-gray-300">
              Proper aftercare is essential for a beautiful, long-lasting tattoo. Follow these guidelines carefully.
            </p>
          </div>

          {/* Warning Alert */}
          <div className="mb-8 p-6 bg-red-900/20 border border-red-700/50 flex gap-4">
            <AlertCircle size={24} className="text-red-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-red-400 mb-2">IMPORTANT</h3>
              <p className="text-sm text-red-300">
                Improper aftercare can lead to infection, fading, or scarring. If you notice signs of infection (excessive redness, swelling, pus, fever), contact a medical professional immediately.
              </p>
            </div>
          </div>

          {/* First Week */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">FIRST WEEK</h2>
            
            <div className="space-y-4 mb-8">
              <div className="border border-border p-6 hover:border-accent transition-colors">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <Check size={20} className="text-accent" />
                  Cleaning
                </h3>
                <ul className="text-muted-foreground space-y-2 ml-8 text-sm">
                  <li>• Wash with unscented antibacterial soap 2-3 times daily</li>
                  <li>• Use lukewarm water and gentle hands (no cloth)</li>
                  <li>• Pat dry with a clean paper towel (not fabric)</li>
                  <li>• Let air dry completely before moisturizing</li>
                </ul>
              </div>

              <div className="border border-border p-6 hover:border-accent transition-colors">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <Check size={20} className="text-accent" />
                  Moisturizing
                </h3>
                <ul className="text-muted-foreground space-y-2 ml-8 text-sm">
                  <li>• Apply fragrance-free moisturizer or aftercare lotion 3-5 times daily</li>
                  <li>• Use recommended brands: Aquaphor, Lubriderm, or studio-provided cream</li>
                  <li>• Apply thin, even layers (not too much)</li>
                  <li>• Never use petroleum jelly or heavy oils</li>
                </ul>
              </div>

              <div className="border border-border p-6 hover:border-accent transition-colors">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <AlertCircle size={20} className="text-red-400" />
                  Things to Avoid
                </h3>
                <ul className="text-muted-foreground space-y-2 ml-8 text-sm">
                  <li>• No swimming, bathing, or soaking (showers only)</li>
                  <li>• No direct sunlight or tanning</li>
                  <li>• Avoid tight clothing over the tattoo</li>
                  <li>• Don't scratch, pick, or peel the tattoo</li>
                  <li>• No strenuous exercise or heavy sweating</li>
                  <li>• Keep away from pets and dirty surfaces</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Weeks 2-4 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">WEEKS 2-4</h2>
            
            <div className="space-y-4 mb-8">
              <div className="border border-border p-6 hover:border-accent transition-colors">
                <h3 className="font-bold text-lg mb-2">Healing Phase</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  During weeks 2-4, your tattoo will start peeling. This is normal! The peeling layer is just dry skin.
                </p>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• Continue washing gently 2-3 times daily</li>
                  <li>• Continue moisturizing 2-3 times daily</li>
                  <li>• Resist the urge to pick or peel</li>
                  <li>• Keep applying sunscreen (SPF 30+) if exposed to sun</li>
                  <li>• Can resume normal showers</li>
                  <li>• Light exercise and activity is okay</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Piercing Aftercare */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">PIERCING AFTERCARE</h2>
            
            <div className="space-y-4 mb-8">
              <div className="border border-border p-6 hover:border-accent transition-colors">
                <h3 className="font-bold text-lg mb-2">Healing Timeline</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="p-3 bg-secondary border border-border">
                    <p className="font-bold text-accent mb-1">Ear Lobe</p>
                    <p className="text-muted-foreground">4-6 weeks</p>
                  </div>
                  <div className="p-3 bg-secondary border border-border">
                    <p className="font-bold text-accent mb-1">Cartilage</p>
                    <p className="text-muted-foreground">8-12 weeks</p>
                  </div>
                  <div className="p-3 bg-secondary border border-border">
                    <p className="font-bold text-accent mb-1">Nose</p>
                    <p className="text-muted-foreground">4-6 weeks</p>
                  </div>
                  <div className="p-3 bg-secondary border border-border">
                    <p className="font-bold text-accent mb-1">Navel</p>
                    <p className="text-muted-foreground">3-6 months</p>
                  </div>
                </div>
              </div>

              <div className="border border-border p-6 hover:border-accent transition-colors">
                <h3 className="font-bold text-lg mb-2">Daily Care</h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• Clean with sterile saline solution 2-3 times daily</li>
                  <li>• Use cotton pads or spray applicator</li>
                  <li>• Never use alcohol or hydrogen peroxide</li>
                  <li>• Leave jewelry in during healing (don't remove)</li>
                  <li>• Avoid touching except during cleaning</li>
                  <li>• Sleep on opposite side if facial piercing</li>
                </ul>
              </div>

              <div className="border border-border p-6 hover:border-accent transition-colors">
                <h3 className="font-bold text-lg mb-2">Things to Avoid</h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• No swimming or soaking until healed</li>
                  <li>• Avoid harsh cosmetics near piercing</li>
                  <li>• No sleeping on the piercing</li>
                  <li>• Don't rotate or play with jewelry</li>
                  <li>• Avoid changing jewelry too early</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Long-term Care */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">LONG-TERM CARE</h2>
            
            <div className="space-y-4 mb-8">
              <div className="border border-border p-6">
                <h3 className="font-bold text-lg mb-4">Keep Your Tattoo Looking Fresh</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-bold text-accent mb-3">Sun Protection</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Use SPF 30+ sunscreen always</li>
                      <li>• Wear protective clothing</li>
                      <li>• Avoid excessive sun exposure</li>
                      <li>• Reapply sunscreen frequently</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-accent mb-3">Moisturizing</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Keep skin moisturized daily</li>
                      <li>• Use fragrance-free lotions</li>
                      <li>• Drink plenty of water</li>
                      <li>• Keep skin healthy and hydrated</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-accent mb-3">Lifestyle</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Maintain healthy diet</li>
                      <li>• Exercise regularly</li>
                      <li>• Get adequate sleep</li>
                      <li>• Manage stress levels</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-accent mb-3">Maintenance</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Consider touch-ups after 5-10 years</li>
                      <li>• Consult artist for color refresh</li>
                      <li>• Keep communication with artist</li>
                      <li>• Monitor for any changes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">COMMON QUESTIONS</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Can I shower with a new tattoo?',
                  a: 'Yes, but avoid soaking and use lukewarm water. Pat dry with clean paper towels after 5 minutes.',
                },
                {
                  q: 'When can I swim?',
                  a: 'Wait at least 2-3 weeks for tattoos and piercings to avoid infection risk from pool/ocean water.',
                },
                {
                  q: 'Is peeling normal?',
                  a: 'Yes, peeling is a normal part of healing. Do NOT pick or peel—let it fall off naturally.',
                },
                {
                  q: 'When can I change my piercing?',
                  a: 'Never change jewelry during healing. Wait for the complete healing period (4-12 weeks depending on type).',
                },
              ].map((item, idx) => (
                <details key={idx} className="border border-border p-6 hover:border-accent transition-colors group">
                  <summary className="font-bold cursor-pointer flex justify-between items-center">
                    <span>{item.q}</span>
                    <span className="text-accent group-open:rotate-180 transition-transform">→</span>
                  </summary>
                  <p className="text-muted-foreground text-sm mt-4">{item.a}</p>
                </details>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="p-8 bg-gradient-to-r from-black to-secondary border border-accent">
            <h3 className="text-2xl font-bold mb-2">Questions About Your Aftercare?</h3>
            <p className="text-muted-foreground mb-6">
              Contact us anytime during your healing process. Our experts are here to help.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-accent text-black font-bold tracking-widest hover:shadow-2xl hover:shadow-accent/50 transition-all"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
