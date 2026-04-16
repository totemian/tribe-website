"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Globe, Apple, Play } from "lucide-react"

export function AccessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="access" className="relative py-20 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#CFFF5E]/5 to-white pointer-events-none" />
      <motion.div
        className="absolute top-10 right-10 w-64 h-64 bg-[#CFFF5E]/15 rounded-full blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-48 h-48 bg-[#CFFF5E]/10 rounded-full blur-[80px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <motion.span
              className="font-mono text-[#121212]/50 text-[10px] tracking-[0.3em] uppercase"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.1 }}
            >
              Access TRIBE26
            </motion.span>

            <div className="overflow-hidden mt-3">
              <motion.h2
                className="text-4xl md:text-6xl font-black text-[#121212] tracking-tighter leading-[0.9]"
                initial={{ y: 80 }}
                animate={isInView ? { y: 0 } : { y: 80 }}
                transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.15 }}
              >
                Your TRIBE.
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
                Anywhere.
              </motion.h2>
            </div>

            <motion.p
              className="text-[#121212]/60 font-mono text-sm leading-relaxed mt-5 max-w-md"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4 }}
            >
              The TRIBE26 platform is live now as a web app, and launching on iOS and Android before FIFA World Cup
              2026 — connecting Members, Contributors, and Nodes across Greater Vancouver in real time.
            </motion.p>

            {/* Access buttons */}
            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-3 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
            >
              {/* Web App - Live */}
              <motion.a
                href="https://my.tribe.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#121212] text-white px-5 py-3.5 rounded-xl font-bold text-sm tracking-wide relative overflow-hidden group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.5 }}
                />
                <Globe className="w-5 h-5 text-[#CFFF5E] relative z-10 flex-shrink-0" />
                <div className="relative z-10 text-left">
                  <div className="text-[10px] font-mono text-white/50 tracking-widest uppercase leading-none mb-0.5">
                     Access now on
                  </div>
                  <div className="font-black tracking-tight">my.tribe.app</div>
                </div>
                <div className="relative z-10 ml-auto">
                  <span className="bg-[#CFFF5E] text-[#121212] font-mono text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full">
                    Live
                  </span>
                </div>
              </motion.a>

              {/* App Store - Soon */}
              <motion.div
                className="flex items-center gap-3 bg-[#121212]/5 border-2 border-[#121212]/10 text-[#121212]/50 px-5 py-3.5 rounded-xl font-bold text-sm tracking-wide cursor-not-allowed select-none"
                whileHover={{ scale: 1.01 }}
              >
                <Apple className="w-5 h-5 flex-shrink-0" />
                <div className="text-left">
                  <div className="text-[10px] font-mono text-[#121212]/40 tracking-widest uppercase leading-none mb-0.5">
                    Download on the
                  </div>
                  <div className="font-black tracking-tight">App Store</div>
                </div>
                <div className="ml-auto">
                  <span className="bg-[#121212]/10 text-[#121212]/40 font-mono text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full">
                    Soon
                  </span>
                </div>
              </motion.div>

              {/* Google Play - Soon */}
              <motion.div
                className="flex items-center gap-3 bg-[#121212]/5 border-2 border-[#121212]/10 text-[#121212]/50 px-5 py-3.5 rounded-xl font-bold text-sm tracking-wide cursor-not-allowed select-none"
                whileHover={{ scale: 1.01 }}
              >
                <Play className="w-5 h-5 flex-shrink-0" />
                <div className="text-left">
                  <div className="text-[10px] font-mono text-[#121212]/40 tracking-widest uppercase leading-none mb-0.5">
                    ▶ Get it on
                  </div>
                  <div className="font-black tracking-tight">Google Play</div>
                </div>
                <div className="ml-auto">
                  <span className="bg-[#121212]/10 text-[#121212]/40 font-mono text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full">
                    Soon
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow */}
              <motion.div
                className="absolute inset-0 bg-[#CFFF5E]/20 blur-[60px] rounded-full scale-75"
                animate={{ scale: [0.75, 0.9, 0.75], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Phone mockup */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="w-56 h-[440px] bg-[#121212] rounded-[2.5rem] border-4 border-[#121212]/80 shadow-2xl overflow-hidden relative">
                  {/* Screen */}
                  <div className="absolute inset-1 bg-[#0a0a0a] rounded-[2rem] overflow-hidden flex flex-col">
                    {/* Status bar */}
                    <div className="flex justify-between items-center px-5 pt-3 pb-1">
                      <span className="text-white/40 font-mono text-[9px]">9:41</span>
                      <div className="w-16 h-4 bg-[#121212] rounded-full" />
                      <div className="flex gap-1">
                        <div className="w-3 h-2 bg-white/30 rounded-sm" />
                        <div className="w-1 h-2 bg-[#CFFF5E] rounded-sm" />
                      </div>
                    </div>

                    {/* App content */}
                    <div className="flex-1 px-4 py-3 space-y-3">
                      {/* Logo area */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-7 h-7 bg-[#CFFF5E] rounded-lg flex items-center justify-center">
                          <span className="text-[#121212] font-black text-[10px]">T26</span>
                        </div>
                        <span className="text-white font-black text-sm tracking-tight">TRIBE26</span>
                        <div className="ml-auto w-2 h-2 bg-[#CFFF5E] rounded-full animate-pulse" />
                      </div>

                      {/* Map placeholder */}
                      <div className="h-28 bg-white/5 rounded-xl border border-white/10 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="grid grid-cols-4 gap-1 opacity-30">
                            {Array.from({ length: 16 }).map((_, i) => (
                              <div key={i} className="w-4 h-4 bg-white/20 rounded-sm" />
                            ))}
                          </div>
                        </div>
                        {/* Node dots */}
                        {[
                          { top: "20%", left: "30%" },
                          { top: "50%", left: "60%" },
                          { top: "70%", left: "25%" },
                          { top: "35%", left: "75%" },
                        ].map((pos, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2.5 h-2.5 bg-[#CFFF5E] rounded-full"
                            style={{ top: pos.top, left: pos.left }}
                            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                          />
                        ))}
                      </div>

                      {/* Cards */}
                      {[
                        { name: "Gilaneh Grill", tag: "Restaurant · 0.3km", active: true },
                        { name: "Maple Jewellery", tag: "Retail · 0.8km", active: false },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className={`flex items-center gap-2.5 p-2.5 rounded-xl ${
                            item.active ? "bg-[#CFFF5E]/10 border border-[#CFFF5E]/20" : "bg-white/5"
                          }`}
                        >
                          <div
                            className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                              item.active ? "bg-[#CFFF5E]" : "bg-white/10"
                            }`}
                          >
                            <span className={`text-[9px] font-black ${item.active ? "text-[#121212]" : "text-white/40"}`}>
                              {item.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className={`font-bold text-[10px] ${item.active ? "text-white" : "text-white/50"}`}>
                              {item.name}
                            </div>
                            <div className="text-white/30 font-mono text-[8px]">{item.tag}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom nav */}
                    <div className="flex justify-around items-center px-4 py-3 border-t border-white/10">
                      {["⊞", "◎", "⊕", "◈"].map((icon, i) => (
                        <div
                          key={i}
                          className={`text-sm ${i === 1 ? "text-[#CFFF5E]" : "text-white/30"}`}
                        >
                          {icon}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* World Cup badge */}
              <motion.div
                className="absolute -top-6 -right-8 bg-[#CFFF5E] text-[#121212] rounded-2xl px-4 py-3 shadow-xl z-20"
                initial={{ scale: 0, rotate: 12, y: -20 }}
                animate={isInView ? { scale: 1, rotate: -6, y: 0 } : { scale: 0, rotate: 12, y: -20 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.6 }}
              >
                <div className="font-black text-[11px] tracking-tight leading-tight">
                  <div className="text-[9px] font-mono text-[#121212]/60 uppercase tracking-widest mb-0.5">⚽ FIFA</div>
                  <div>World Cup</div>
                  <div>Edition</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
