"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
}

export function AboutHeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const rawY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y = useSpring(rawY, springConfig)

  const rawTextX1 = useTransform(scrollYProgress, [0, 1], [0, -80])
  const textX1 = useSpring(rawTextX1, springConfig)

  const rawTextX2 = useTransform(scrollYProgress, [0, 1], [0, 80])
  const textX2 = useSpring(rawTextX2, springConfig)

  const rawOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const opacity = useSpring(rawOpacity, springConfig)

  return (
    <section
      ref={ref}
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#121212] noise-overlay"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#CFFF5E]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#CFFF5E]/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        className="absolute top-20 left-10 w-24 h-24 rounded-full bg-[#CFFF5E]/10 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-[#CFFF5E]/5 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16">
        <motion.div style={{ opacity }} className="space-y-5 text-center">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1.5 rounded-full text-xs font-mono tracking-wider"
          >
            OUR STORY
          </motion.div>

          <div className="space-y-1 overflow-hidden">
            <motion.h1
              style={{ x: textX1 }}
              className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9]"
            >
              <motion.span
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                custom={1}
                className="inline-block"
              >
                BUILT FOR
              </motion.span>
            </motion.h1>
            <motion.h1
              style={{ x: textX2 }}
              className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]"
            >
              <motion.span
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                custom={2}
                className="inline-block text-[#CFFF5E]"
              >
                COMMUNITY.
              </motion.span>
            </motion.h1>
            <motion.h1
              className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9]"
            >
              <motion.span
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                custom={3}
                className="inline-block"
              >
                OPEN TO ALL.
              </motion.span>
            </motion.h1>
          </div>

          <motion.p
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            custom={4}
            className="text-lg md:text-xl font-mono text-white/60 tracking-tight pt-2 max-w-2xl mx-auto"
          >
            Tribe26 is Vancouver&apos;s local ecosystem — connecting residents, businesses, and contributors
            through a platform rooted in trust, solidarity, and shared growth.
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            custom={5}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            {["Founded in Vancouver", "Persian Roots", "Open to All", "FIFA 2026 Ready"].map((tag, i) => (
              <motion.div
                key={tag}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-mono text-white/60"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#CFFF5E]" />
                {tag}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5">
            <motion.div
              className="w-1 h-2 bg-white/30 rounded-full"
              animate={{ y: [0, 6, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
