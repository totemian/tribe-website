"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"

const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }

const fadeUp = (i: number) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
  },
})

export function ApplicationsHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const rawOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const opacity = useSpring(rawOpacity, springConfig)

  return (
    <section
      ref={ref}
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#121212]"
    >
      {/* Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#CFFF5E]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#CFFF5E]/5 rounded-full blur-[100px] pointer-events-none" />
      <motion.div
        className="absolute top-24 left-12 w-20 h-20 rounded-full bg-[#CFFF5E]/10 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-16 text-center">
        <motion.div style={{ opacity }} className="space-y-5">
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1.5 rounded-full text-xs font-mono tracking-wider"
          >
            TRIBE26 APPS
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              variants={fadeUp(1)}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9]"
            >
              YOUR TRIBE.
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              variants={fadeUp(2)}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-7xl font-black tracking-tighter text-[#CFFF5E] leading-[0.9]"
            >
              ANY DEVICE.
            </motion.h1>
          </div>

          <motion.p
            variants={fadeUp(3)}
            initial="hidden"
            animate="visible"
            className="text-lg font-mono text-white/60 tracking-tight pt-2 max-w-xl mx-auto"
          >
            Tribe26 is live now as a web app and installable PWA. Native iOS and Android apps are
            launching before FIFA World Cup 2026.
          </motion.p>

          <motion.div
            variants={fadeUp(4)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-4 pt-2"
          >
            {["Web App · Live Now", "PWA · Install Today", "iOS · Coming Soon", "Android · Coming Soon"].map(
              (tag, i) => (
                <motion.div
                  key={tag}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-mono text-white/60"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${i < 2 ? "bg-[#CFFF5E]" : "bg-white/30"}`}
                  />
                  {tag}
                </motion.div>
              )
            )}
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
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5">
            <motion.div
              className="w-1 h-2 bg-white/30 rounded-full"
              animate={{ y: [0, 6, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
