"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function AboutMissionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const stats = [
    { value: "100+", label: "Anchor Nodes" },
    { value: "500+", label: "Local Businesses" },
    { value: "3", label: "Roles in the Ecosystem" },
    { value: "2026", label: "FIFA World Cup Ready" },
  ]

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#CFFF5E]/5 to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="space-y-6"
          >
            <motion.span
              className="font-mono text-[#121212]/50 text-[10px] tracking-[0.3em] uppercase"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.1 }}
            >
              Our Mission
            </motion.span>

            <div className="overflow-hidden mt-3">
              <motion.h2
                className="text-4xl md:text-5xl font-black text-[#121212] tracking-tighter leading-[0.9]"
                initial={{ y: 80 }}
                animate={isInView ? { y: 0 } : { y: 80 }}
                transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.15 }}
              >
                One App to
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                className="text-4xl md:text-5xl font-black text-[#CFFF5E] tracking-tighter leading-[0.9]"
                style={{ WebkitTextStroke: "2px #121212", color: "transparent" }}
                initial={{ y: 80 }}
                animate={isInView ? { y: 0 } : { y: 80 }}
                transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.25 }}
              >
                Unlock Your City.
              </motion.h2>
            </div>

            <motion.p
              className="text-[#121212]/70 font-mono text-sm leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4 }}
            >
              Tribe26 was built to solve a real problem: local businesses in Vancouver were invisible online, 
              and residents had no easy way to discover and support them. We created a physical-to-digital 
              ecosystem that bridges that gap — rewarding loyalty, boosting visibility, and building the 
              kind of community that makes a city feel like home.
            </motion.p>

            <motion.p
              className="text-[#121212]/70 font-mono text-sm leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5 }}
            >
              Members earn points by visiting local spots. Businesses gain verified Google reviews and 
              loyal customers. Contributors offer their skills within a trusted network. Everyone wins 
              when the community grows together.
            </motion.p>

            <motion.div
              className="flex items-center gap-3 pt-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="h-px flex-1 bg-[#121212]/10" />
              <span className="text-[#121212]/20 font-mono text-xs tracking-widest">ـــــــــ</span>
              <div className="h-px flex-1 bg-[#121212]/10" />
            </motion.div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="bg-[#121212] rounded-2xl p-6 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 17 } }}
              >
                <motion.div
                  className="absolute inset-0 bg-[#CFFF5E]/0 group-hover:bg-[#CFFF5E]/5 transition-colors duration-500 rounded-2xl"
                />
                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl font-black text-[#CFFF5E] tracking-tighter mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/60 font-mono text-xs tracking-wide">{stat.label}</div>
                </div>
                <motion.div
                  className="absolute bottom-0 right-0 w-16 h-16 bg-[#CFFF5E]/5 rounded-full blur-xl"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
