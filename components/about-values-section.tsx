"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const values = [
  {
    label: "Tribe",
    description: "The community you belong to",
    detail:
      "Every member, business, and contributor is part of something larger. The tribe is the foundation — a network of people who show up for each other.",
  },
  {
    label: "Solidarity",
    description: "Strength through connection",
    detail:
      "When local businesses thrive, the whole community benefits. We build systems that lift everyone, not just the loudest voices.",
  },
  {
    label: "Participation",
    description: "Everyone's role matters",
    detail:
      "Whether you scan a QR code, list a service, or open your doors as an anchor node — your participation shapes the network.",
  },
  {
    label: "Trust",
    description: "Foundation of every trade",
    detail:
      "Verified reviews, transparent rewards, and accountable relationships. Trust isn't assumed — it's earned and recorded.",
  },
  {
    label: "Growth",
    description: "Shared and compound",
    detail:
      "Growth in the Tribe26 ecosystem is collective. More members bring more businesses. More businesses attract more members. The loop compounds.",
  },
  {
    label: "Together We Are",
    description: "The whole is greater than parts",
    detail:
      "No single node, contributor, or member makes the network. Together, we create something no individual could build alone.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  },
}

export function AboutValuesSection() {
  const ref = useRef(null)
  const gridRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" })

  return (
    <section className="relative py-20 bg-[#121212] overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#CFFF5E]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#CFFF5E]/5 rounded-full blur-[100px] pointer-events-none" />

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
            className="font-mono text-[#CFFF5E] text-[10px] tracking-[0.3em] uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.1 }}
          >
            What We Stand For
          </motion.span>

          <div className="overflow-hidden mt-3">
            <motion.h2
              className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.9]"
              initial={{ y: 80 }}
              animate={isInView ? { y: 0 } : { y: 80 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.15 }}
            >
              Built With
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="text-4xl md:text-6xl font-black text-[#CFFF5E] tracking-tighter leading-[0.9]"
              initial={{ y: 80 }}
              animate={isInView ? { y: 0 } : { y: 80 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.25 }}
            >
              Persian Roots.
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.9]"
              initial={{ y: 80 }}
              animate={isInView ? { y: 0 } : { y: 80 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.35 }}
            >
              Open to All.
            </motion.h2>
          </div>

          <motion.p
            className="text-white/60 font-mono text-sm leading-relaxed mt-6 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
          >
            Tribe26 grew from deep roots in the Iranian-Canadian community across Greater Vancouver — one of the most
            entrepreneurial, educated, and tightly connected communities on the North Shore and beyond. That origin
            gives the platform its values: collective trust, family-level accountability, and commerce that respects
            the human relationship first. But the door is open to every community, language, and background.
          </motion.p>
        </motion.div>

        {/* Values grid */}
        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.label}
              variants={itemVariants}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#CFFF5E]/40 transition-colors duration-300 cursor-default"
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 17 } }}
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.span
                  className="w-2 h-2 rounded-full bg-[#CFFF5E] flex-shrink-0"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
                <h3 className="text-white font-black text-lg tracking-tight group-hover:text-[#CFFF5E] transition-colors duration-200">
                  {value.label}
                </h3>
              </div>
              <p className="text-[#CFFF5E]/70 font-mono text-[10px] tracking-widest uppercase mb-3">
                {value.description}
              </p>
              <p className="text-white/50 font-mono text-xs leading-relaxed">{value.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
