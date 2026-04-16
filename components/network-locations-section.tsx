"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { MapPin } from "lucide-react"

const locations = [
  "Gamex",
  "Gilaneh Grill",
  "Hatam Restaurant",
  "Jordan Supermarket",
  "Jozef's Pastry Boutique",
  "Maple Jewellery & Exchange",
  "Meet Market",
  "Mehman Restaurant",
  "Passargad Restaurant",
  "Zone 4 Physiotherapy",
]

// Deterministic positions so SSR and client match
const SLOT_POSITIONS = [
  { x: 8,  y: 12 },
  { x: 55, y: 6  },
  { x: 78, y: 20 },
  { x: 22, y: 38 },
  { x: 62, y: 42 },
  { x: 40, y: 60 },
  { x: 10, y: 68 },
  { x: 72, y: 72 },
  { x: 30, y: 82 },
  { x: 55, y: 85 },
]

const NUM_SLOTS = SLOT_POSITIONS.length

export function NetworkLocationsSection() {
  const ref = useRef(null)
  const cloudRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const cloudInView = useInView(cloudRef, { once: false, margin: "-60px" })

  // Each slot holds an index into `locations` and a visibility flag
  const [slots, setSlots] = useState<{ locIndex: number; visible: boolean }[]>(
    SLOT_POSITIONS.map((_, i) => ({ locIndex: i % locations.length, visible: false }))
  )

  // Stagger-reveal on enter, then cycle locations in/out
  useEffect(() => {
    if (!cloudInView) return

    // Initial staggered reveal
    const revealTimers = SLOT_POSITIONS.map((_, i) =>
      setTimeout(() => {
        setSlots((prev) =>
          prev.map((s, idx) => (idx === i ? { ...s, visible: true } : s))
        )
      }, i * 180)
    )

    // After reveal, start cycling: every 1.8s pick a random slot, swap its location
    let cycleTimer: ReturnType<typeof setInterval>
    const startCycle = setTimeout(() => {
      let counter = NUM_SLOTS // next location index to show
      cycleTimer = setInterval(() => {
        const slotIdx = Math.floor(Math.random() * NUM_SLOTS)
        const nextLoc = counter % locations.length
        counter++

        // Hide the slot
        setSlots((prev) =>
          prev.map((s, idx) => (idx === slotIdx ? { ...s, visible: false } : s))
        )

        // After exit animation, swap location and show again
        setTimeout(() => {
          setSlots((prev) =>
            prev.map((s, idx) =>
              idx === slotIdx ? { locIndex: nextLoc, visible: true } : s
            )
          )
        }, 500)
      }, 1800)
    }, NUM_SLOTS * 180 + 400)

    return () => {
      revealTimers.forEach(clearTimeout)
      clearTimeout(startCycle)
      clearInterval(cycleTimer)
    }
  }, [cloudInView])

  return (
    <section id="network" className="relative py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#CFFF5E]/3 to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-12"
        >
          <motion.span
            className="font-mono text-[#121212]/50 text-[10px] tracking-[0.3em] uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.1 }}
          >
            Network Locations
          </motion.span>

          <div className="overflow-hidden mt-3">
            <motion.h2
              className="text-4xl md:text-6xl font-black text-[#121212] tracking-tighter leading-[0.9]"
              initial={{ y: 80 }}
              animate={isInView ? { y: 0 } : { y: 80 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.15 }}
            >
              100+ Nodes.
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9]"
              style={{ WebkitTextStroke: "2px #121212", color: "transparent" }}
              initial={{ y: 80 }}
              animate={isInView ? { y: 0 } : { y: 80 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.25 }}
            >
              Greater Vancouver.
            </motion.h2>
          </div>

          <motion.p
            className="text-[#121212]/60 font-mono text-sm leading-relaxed mt-5 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            From West Vancouver Marine Drive to Tri-Cities, our anchor nodes span every major corridor — cafes,
            bakeries, restaurants, pharmacies, and specialty retailers woven into daily life.
          </motion.p>
        </motion.div>

        {/* Floating locations cloud */}
        <div
          ref={cloudRef}
          className="relative w-full rounded-2xl border border-[#121212]/8 bg-[#121212]/[0.015] overflow-hidden"
          style={{ height: 340 }}
        >
          {/* Subtle grid dots */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="#121212" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>

          <AnimatePresence>
            {slots.map((slot, i) =>
              slot.visible ? (
                <motion.div
                  key={`${i}-${slot.locIndex}`}
                  className="absolute flex items-center gap-1.5 bg-white border border-[#121212]/10 rounded-full px-3 py-1.5 shadow-sm cursor-default select-none"
                  style={{
                    left: `${SLOT_POSITIONS[i].x}%`,
                    top: `${SLOT_POSITIONS[i].y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  initial={{ opacity: 0, scale: 0.6, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.7, y: -10 }}
                  transition={{ duration: 0.45, ease: [0.34, 1.26, 0.64, 1] }}
                  whileHover={{ scale: 1.06, boxShadow: "0 4px 20px rgba(207,255,94,0.25)" }}
                >
                  <MapPin className="w-3 h-3 text-[#CFFF5E] flex-shrink-0" style={{ filter: "drop-shadow(0 0 3px #CFFF5E)" }} />
                  <span className="font-mono text-[11px] text-[#121212] whitespace-nowrap">
                    {locations[slot.locIndex]}
                  </span>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>

          {/* Bottom label */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <div className="flex items-center gap-2">
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-[#CFFF5E]"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-[#121212]/40 font-mono text-[10px] tracking-widest uppercase">
                And many more locations…
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
