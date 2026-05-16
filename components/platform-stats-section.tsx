"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

interface Stats {
  users: number
  nodes: number
  activeMissions: number
}

function AnimatedNumber({ value, isLoaded }: { value: number; isLoaded: boolean }) {
  const [displayed, setDisplayed] = useState(0)

  useEffect(() => {
    if (!isLoaded) return
    let start = 0
    const duration = 1400
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayed(Math.round(eased * value))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [value, isLoaded])

  return <>{displayed.toLocaleString()}</>
}

const STATS_CONFIG = [
  {
    key: "users" as keyof Stats,
    label: "Members",
    suffix: "+",
    description: "Active members on platform",
  },
  {
    key: "nodes" as keyof Stats,
    label: "Nodes",
    suffix: "",
    description: "Local business locations",
  },
  {
    key: "activeMissions" as keyof Stats,
    label: "Active Missions",
    suffix: "",
    description: "Live missions running now",
  },
]

export function PlatformStatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const [stats, setStats] = useState<Stats | null>(null)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    fetch("https://tribe.api.totemian.com/v1/stats")
      .then((r) => r.json())
      .then((data: Stats) => setStats(data))
      .catch(() => {})
  }, [])

  useEffect(() => {
    if (isInView && stats) setAnimating(true)
  }, [isInView, stats])

  return (
    <section ref={ref} className="relative py-16 bg-[#121212] overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#CFFF5E 1px, transparent 1px), linear-gradient(90deg, #CFFF5E 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow blobs */}
      <motion.div
        className="absolute -top-20 left-1/4 w-72 h-72 bg-[#CFFF5E]/10 rounded-full blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 right-1/4 w-56 h-56 bg-[#CFFF5E]/8 rounded-full blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Label */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-[#CFFF5E]"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
          <span className="font-mono text-[#CFFF5E]/60 text-[10px] tracking-[0.35em] uppercase">
            Live Platform Stats
          </span>
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-[#CFFF5E]"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, delay: 0.8 }}
          />
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {STATS_CONFIG.map((item, i) => (
            <motion.div
              key={item.key}
              className="bg-[#121212] px-8 py-10 flex flex-col items-center text-center relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.4, 0.25, 1] }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-[#CFFF5E]/0 group-hover:bg-[#CFFF5E]/[0.03] transition-colors duration-500 rounded-2xl" />

              {/* Number */}
              <div className="flex items-end gap-0.5 relative z-10">
                <span className="text-5xl md:text-6xl font-black text-white tracking-tighter tabular-nums leading-none">
                  {stats ? (
                    <AnimatedNumber value={stats[item.key]} isLoaded={animating} />
                  ) : (
                    <span className="text-white/20">—</span>
                  )}
                </span>
                {stats && item.suffix && (
                  <span className="text-3xl font-black text-[#CFFF5E] leading-none mb-1">{item.suffix}</span>
                )}
              </div>

              {/* Label */}
              <span className="mt-2 text-sm font-black text-white/80 tracking-wide uppercase relative z-10">
                {item.label}
              </span>

              {/* Description */}
              <span className="mt-1 font-mono text-[10px] text-white/30 tracking-wider relative z-10">
                {item.description}
              </span>

              {/* Accent line */}
              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#CFFF5E] rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: "40%" } : {}}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.12, ease: [0.25, 0.4, 0.25, 1] }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
