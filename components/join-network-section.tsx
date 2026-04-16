"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useRouter } from "next/navigation"
import { Check, ArrowRight } from "lucide-react"

const contributorBenefits = [
  "Your own contributor profile in the TRIBE26 app",
  "Reach Members across 100+ node locations",
  "Earn recognition scores that grow your visibility",
  "Be part of FIFA World Cup 2026 community activations",
  "Web3-ready — your contribution history belongs to you",
]

const nodeBenefits = [
  "Free Totemian Brandboard installed at your location",
  "Listed on the TRIBE26 World Cup Vancouver Playground map",
  "Exposure to FIFA 2026 fan traffic across Greater Vancouver",
  "Revenue share from advertising on your Brandboard",
  "Permanent AAA/AA/A node status in the Totemian ad network",
  "Priority listing in app for Members near your location",
]

export function JoinNetworkSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const router = useRouter()

  return (
    <section id="join" className="relative py-20 bg-[#121212] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CFFF5E]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-14"
        >
          <motion.span
            className="font-mono text-[#CFFF5E] text-[10px] tracking-[0.3em] uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.1 }}
          >
            Join the network
          </motion.span>

          <div className="overflow-hidden mt-3">
            <motion.h2
              className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.9]"
              initial={{ y: 80 }}
              animate={isInView ? { y: 0 } : { y: 80 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.15 }}
            >
              Grow With
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="text-4xl md:text-6xl font-black text-[#CFFF5E] tracking-tighter leading-[0.9]"
              initial={{ y: 80 }}
              animate={isInView ? { y: 0 } : { y: 80 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.25 }}
            >
              TRIBE26.
            </motion.h2>
          </div>

          <motion.p
            className="text-white/60 font-mono text-sm leading-relaxed mt-5 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            Whether you offer skills or host a physical location, TRIBE26 has a role for you. Join before the World Cup
            and become part of Vancouver&apos;s most connected community ecosystem.
          </motion.p>
        </motion.div>

        {/* Two cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Contributor Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.1 }}
            className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 overflow-hidden hover:border-[#CFFF5E]/40 transition-colors duration-300"
          >
            {/* Hover glow */}
            <motion.div
              className="absolute inset-0 bg-[#CFFF5E]/0 group-hover:bg-[#CFFF5E]/5 transition-colors duration-500 rounded-2xl pointer-events-none"
            />

            <div className="relative z-10">
              {/* Tag */}
              <div className="inline-flex items-center gap-2 bg-[#CFFF5E]/10 border border-[#CFFF5E]/20 rounded-full px-3 py-1 mb-5">
                <span className="text-[#CFFF5E] font-mono text-[10px] tracking-widest uppercase">Become a Contributor</span>
              </div>

              <h3 className="text-2xl font-black text-white tracking-tight mb-1">
                Offer your skills
              </h3>
              <p className="text-[#CFFF5E] font-mono text-xs mb-4">Earn within the ecosystem</p>

              <p className="text-white/60 font-mono text-xs leading-relaxed mb-6">
                Are you a chef, tutor, trainer, designer, photographer, translator, or any kind of service provider?
                List your services on TRIBE26 and reach an engaged, trusted local audience — with no heavy commission
                model eating into your work.
              </p>

              <ul className="space-y-2.5 mb-8">
                {contributorBenefits.map((benefit, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-2.5"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.07 }}
                  >
                    <div className="w-4 h-4 rounded-full bg-[#CFFF5E]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-[#CFFF5E]" />
                    </div>
                    <span className="text-white/70 font-mono text-xs leading-relaxed">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                className="flex items-center gap-2 bg-white/10 hover:bg-[#CFFF5E] text-white hover:text-[#121212] px-5 py-2.5 rounded-full font-bold text-xs tracking-wide transition-all duration-300 group/btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push("/contact")}
              >
                Apply as Contributor
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </div>
          </motion.div>

          {/* Anchor Node Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
            className="group relative bg-[#CFFF5E]/5 border border-[#CFFF5E]/20 rounded-2xl p-8 overflow-hidden hover:border-[#CFFF5E]/60 transition-colors duration-300"
          >
            {/* Hover glow */}
            <motion.div
              className="absolute inset-0 bg-[#CFFF5E]/0 group-hover:bg-[#CFFF5E]/8 transition-colors duration-500 rounded-2xl pointer-events-none"
            />

            <div className="relative z-10">
              {/* Deadline badge */}
              <div className="inline-flex items-center gap-2 bg-[#CFFF5E]/10 border border-[#CFFF5E]/30 rounded-full px-3 py-1 mb-5">
                <span className="text-[#CFFF5E] font-mono text-[10px] tracking-widest uppercase">Physical Location</span>
              </div>

              <h3 className="text-2xl font-black text-white tracking-tight mb-1">
                Become an Anchor Node
              </h3>
              <p className="text-[#CFFF5E] font-mono text-xs mb-4">
                Physical location · Digital infrastructure · Community hub
              </p>

              <div className="inline-flex items-center gap-2 bg-[#CFFF5E]/10 rounded-lg px-3 py-1.5 mb-4">
                <span className="text-[#CFFF5E] font-mono text-[10px] font-bold tracking-wide">
                  Register by May 25, 2026 for World Cup inclusion
                </span>
              </div>

              <p className="text-white/60 font-mono text-xs leading-relaxed mb-6">
                If your business has a physical storefront, you qualify as a TRIBE26 Anchor Node. Locations registering
                before May 25, 2026 receive a complimentary Totemian Brandboard — a digital display screen installed at
                no cost — and join the Vancouver World Cup Fan Playground network.
              </p>

              <ul className="space-y-2.5 mb-8">
                {nodeBenefits.map((benefit, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-2.5"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.07 }}
                  >
                    <div className="w-4 h-4 rounded-full bg-[#CFFF5E]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-[#CFFF5E]" />
                    </div>
                    <span className="text-white/70 font-mono text-xs leading-relaxed">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                className="flex items-center gap-2 bg-[#CFFF5E] text-[#121212] px-5 py-2.5 rounded-full font-bold text-xs tracking-wide relative overflow-hidden group/btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push("/contact")}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10">Register Your Location</span>
                <ArrowRight className="w-3.5 h-3.5 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
