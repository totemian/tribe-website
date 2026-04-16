"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const values = [
  { label: "Tribe", description: "The community you belong to" },
  { label: "Solidarity", description: "Strength through connection" },
  { label: "Participation", description: "Everyone's role matters" },
  { label: "Trust", description: "Foundation of every trade" },
  { label: "Growth", description: "Shared and compound" },
  { label: "Together We Are", description: "The whole is greater than parts" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  },
}

export function CommunityRootsSection() {
  const ref = useRef(null)
  const valuesRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const valuesInView = useInView(valuesRef, { once: true, margin: "-80px" })

  return (
    <section id="community" className="relative py-20 bg-[#121212] overflow-hidden">
      {/* Background accents */}
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
            Community Roots
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
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-white/70 font-mono text-sm leading-relaxed">
              TRIBE26 grew from deep roots in the Iranian-Canadian community across Greater Vancouver — one of the most
              entrepreneurial, educated, and tightly connected communities on the North Shore and beyond.
            </p>
            <p className="text-white/70 font-mono text-sm leading-relaxed">
              That origin gives the platform its values: collective trust, family-level accountability, and commerce
              that respects the human relationship first. But the door is open to every community, language, and
              background. The network is richer when it is wider.
            </p>

            {/* Decorative divider */}
            <motion.div
              className="flex items-center gap-3 pt-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-white/20 font-mono text-xs tracking-widest">ـــــــــ</span>
              <div className="h-px flex-1 bg-white/10" />
            </motion.div>
          </motion.div>

          {/* Right: Values */}
          <motion.div
            ref={valuesRef}
            variants={containerVariants}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            className="space-y-1"
          >
            <p className="text-[#CFFF5E] font-mono text-[10px] tracking-[0.3em] uppercase mb-4">Our values</p>
            {values.map((value, index) => (
              <motion.div
                key={value.label}
                variants={itemVariants}
                className="group flex items-center justify-between py-3 border-b border-white/10 last:border-0 cursor-default"
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="flex items-center gap-3">
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-[#CFFF5E] flex-shrink-0"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                  <span className="text-white font-black text-sm tracking-tight group-hover:text-[#CFFF5E] transition-colors duration-200">
                    {value.label}
                  </span>
                </div>
                <span className="text-white/40 font-mono text-xs text-right max-w-[180px]">
                  {value.description}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
