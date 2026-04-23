"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const milestones = [
  {
    year: "2023",
    title: "The Idea",
    description:
      "Tribe26 was conceived in Vancouver's Iranian-Canadian community — a response to the disconnect between local businesses and the residents who wanted to support them.",
  },
  {
    year: "2024",
    title: "Building the Network",
    description:
      "The first anchor nodes came online across North Vancouver and West Vancouver. The platform launched as a web app, connecting Members with local businesses for the first time.",
  },
  {
    year: "Early 2025",
    title: "100+ Nodes",
    description:
      "The network expanded to 100+ anchor node locations across Greater Vancouver — from Marine Drive to Tri-Cities — spanning restaurants, retailers, and service providers.",
  },
  {
    year: "2025–2026",
    title: "FIFA World Cup Edition",
    description:
      "Tribe26 partnered with the Totemian Brandboard network to prepare for FIFA World Cup 2026. Businesses registering before May 25, 2026 receive a complimentary digital display and join the Vancouver Fan Playground map.",
  },
  {
    year: "2026",
    title: "iOS & Android Launch",
    description:
      "Native mobile apps launch on iOS and Android ahead of the World Cup, bringing the full Tribe26 experience — maps, rewards, contributor profiles, and real-time node discovery — to every pocket.",
  },
]

export function AboutTimelineSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#CFFF5E]/3 to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-14"
        >
          <motion.span
            className="font-mono text-[#121212]/50 text-[10px] tracking-[0.3em] uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.1 }}
          >
            Our Journey
          </motion.span>

          <div className="overflow-hidden mt-3">
            <motion.h2
              className="text-4xl md:text-6xl font-black text-[#121212] tracking-tighter leading-[0.9]"
              initial={{ y: 80 }}
              animate={isInView ? { y: 0 } : { y: 80 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.15 }}
            >
              How We Got
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="text-4xl md:text-6xl font-black text-[#CFFF5E] tracking-tighter leading-[0.9]"
              style={{ WebkitTextStroke: "2px #121212", color: "transparent" }}
              initial={{ y: 80 }}
              animate={isInView ? { y: 0 } : { y: 80 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.25 }}
            >
              Here.
            </motion.h2>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#121212]/10 md:-translate-x-1/2"
            initial={{ scaleY: 0, originY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 }}
          />

          <div className="space-y-10">
            {milestones.map((milestone, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={milestone.year}
                  className={`relative flex items-start gap-8 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: i * 0.1 }}
                >
                  {/* Content */}
                  <div className={`pl-12 md:pl-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div
                      className={`inline-flex items-center gap-2 bg-[#121212] rounded-full px-3 py-1 mb-3 ${
                        isLeft ? "md:ml-auto" : ""
                      }`}
                    >
                      <span className="text-[#CFFF5E] font-mono text-[10px] tracking-widest font-bold">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-[#121212] tracking-tight mb-2">{milestone.title}</h3>
                    <p className="text-[#121212]/60 font-mono text-xs leading-relaxed">{milestone.description}</p>
                  </div>

                  {/* Dot — mobile: left edge, desktop: center */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-1 flex-shrink-0">
                    <motion.div
                      className="w-3 h-3 rounded-full bg-[#CFFF5E] border-2 border-[#121212] relative z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 + i * 0.1 }}
                    />
                  </div>

                  {/* Empty spacer for desktop alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
