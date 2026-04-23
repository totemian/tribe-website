"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Globe, Apple, Play, Download, Wifi, Zap, Bell, Shield } from "lucide-react"

const pwaFeatures = [
  { icon: Download, label: "Install to home screen" },
  { icon: Wifi, label: "Works offline" },
  { icon: Zap, label: "Fast & lightweight" },
  { icon: Bell, label: "Push notifications" },
]

const platforms = [
  {
    id: "web",
    status: "live",
    icon: Globe,
    title: "Web App",
    subtitle: "my.tribe26.app",
    description:
      "The full Tribe26 experience in your browser. Discover local businesses, earn points, manage your profile, and explore the map — no install required.",
    cta: "Open Web App",
    href: "https://my.tribe26.app",
    features: ["Works on any browser", "No download needed", "Always up to date", "Full feature access"],
    badge: "Live Now",
    accent: true,
  },
  {
    id: "pwa",
    status: "live",
    icon: Download,
    title: "Progressive Web App",
    subtitle: "Install from your browser",
    description:
      "Add Tribe26 to your home screen for an app-like experience. Tap the share icon in Safari or the install prompt in Chrome — it takes seconds.",
    cta: "Install PWA",
    href: "https://my.tribe26.app",
    features: pwaFeatures.map((f) => f.label),
    badge: "Live Now",
    accent: true,
  },
  {
    id: "ios",
    status: "soon",
    icon: Apple,
    title: "iOS App",
    subtitle: "App Store",
    description:
      "A native iPhone and iPad experience built for speed and polish. Launching on the App Store ahead of FIFA World Cup 2026.",
    cta: "Notify Me",
    href: "/contact",
    features: ["Native iOS performance", "Face ID support", "Apple Pay ready", "Widgets & shortcuts"],
    badge: "Coming Soon",
    accent: false,
  },
  {
    id: "android",
    status: "soon",
    icon: Play,
    title: "Android App",
    subtitle: "Google Play",
    description:
      "Full-featured Android app with deep system integration. Launching on Google Play before the World Cup kicks off in Vancouver.",
    cta: "Notify Me",
    href: "/contact",
    features: ["Native Android performance", "Google Pay ready", "Home screen widgets", "Background sync"],
    badge: "Coming Soon",
    accent: false,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
}

export function ApplicationsPlatforms() {
  const ref = useRef(null)
  const headerRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" })

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#CFFF5E]/5 to-white pointer-events-none" />
      <motion.div
        className="absolute top-10 right-10 w-64 h-64 bg-[#CFFF5E]/15 rounded-full blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-14"
        >
          <motion.span
            className="font-mono text-[#121212]/50 text-[10px] tracking-[0.3em] uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.1 }}
          >
            All Platforms
          </motion.span>

          <div className="overflow-hidden mt-3">
            <motion.h2
              className="text-4xl md:text-6xl font-black text-[#121212] tracking-tighter leading-[0.9]"
              initial={{ y: 80 }}
              animate={headerInView ? { y: 0 } : { y: 80 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.15 }}
            >
              Choose How You
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="text-4xl md:text-6xl font-black text-[#CFFF5E] tracking-tighter leading-[0.9]"
              style={{ WebkitTextStroke: "2px #121212", color: "transparent" }}
              initial={{ y: 80 }}
              animate={headerInView ? { y: 0 } : { y: 80 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.25 }}
            >
              Connect.
            </motion.h2>
          </div>
        </motion.div>

        {/* Platform cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {platforms.map((platform) => {
            const Icon = platform.icon
            const isLive = platform.status === "live"

            return (
              <motion.div
                key={platform.id}
                variants={itemVariants}
                className={`group relative rounded-2xl p-8 border overflow-hidden transition-colors duration-300 ${
                  isLive
                    ? "bg-[#121212] border-[#121212] hover:border-[#CFFF5E]/60"
                    : "bg-[#121212]/5 border-[#121212]/10 hover:border-[#121212]/30"
                }`}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 400, damping: 17 } }}
              >
                {/* Hover glow for live cards */}
                {isLive && (
                  <motion.div className="absolute inset-0 bg-[#CFFF5E]/0 group-hover:bg-[#CFFF5E]/5 transition-colors duration-500 rounded-2xl pointer-events-none" />
                )}

                <div className="relative z-10">
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isLive ? "bg-[#CFFF5E]" : "bg-[#121212]/10"
                      }`}
                    >
                      <Icon className={`w-6 h-6 ${isLive ? "text-[#121212]" : "text-[#121212]/40"}`} />
                    </div>

                    <span
                      className={`font-mono text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full ${
                        isLive
                          ? "bg-[#CFFF5E] text-[#121212]"
                          : "bg-[#121212]/10 text-[#121212]/40"
                      }`}
                    >
                      {platform.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-2xl font-black tracking-tight mb-1 ${
                      isLive ? "text-white" : "text-[#121212]"
                    }`}
                  >
                    {platform.title}
                  </h3>
                  <p
                    className={`font-mono text-xs mb-4 ${
                      isLive ? "text-[#CFFF5E]/80" : "text-[#121212]/40"
                    }`}
                  >
                    {platform.subtitle}
                  </p>

                  {/* Description */}
                  <p
                    className={`font-mono text-xs leading-relaxed mb-6 ${
                      isLive ? "text-white/60" : "text-[#121212]/50"
                    }`}
                  >
                    {platform.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {platform.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-2.5"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + i * 0.06 }}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                            isLive ? "bg-[#CFFF5E]" : "bg-[#121212]/20"
                          }`}
                        />
                        <span
                          className={`font-mono text-xs ${
                            isLive ? "text-white/70" : "text-[#121212]/50"
                          }`}
                        >
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  {isLive ? (
                    <motion.a
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#CFFF5E] text-[#121212] px-5 py-2.5 rounded-full font-bold text-xs tracking-wide relative overflow-hidden group/btn"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                        whileHover={{ x: "200%" }}
                        transition={{ duration: 0.5 }}
                      />
                      <span className="relative z-10">{platform.cta}</span>
                      <Icon className="w-3.5 h-3.5 relative z-10 group-hover/btn:translate-x-0.5 transition-transform" />
                    </motion.a>
                  ) : (
                    <motion.a
                      href={platform.href}
                      className="inline-flex items-center gap-2 bg-[#121212]/10 hover:bg-[#121212] text-[#121212] hover:text-white px-5 py-2.5 rounded-full font-bold text-xs tracking-wide transition-all duration-300 group/btn"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Bell className="w-3.5 h-3.5" />
                      {platform.cta}
                    </motion.a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* PWA install hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 bg-[#121212]/5 border border-[#121212]/10 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <div className="w-10 h-10 rounded-xl bg-[#CFFF5E] flex items-center justify-center flex-shrink-0">
            <Shield className="w-5 h-5 text-[#121212]" />
          </div>
          <div>
            <p className="text-[#121212] font-bold text-sm tracking-tight mb-0.5">How to install the PWA</p>
            <p className="text-[#121212]/60 font-mono text-xs leading-relaxed">
              <span className="font-bold text-[#121212]/80">iPhone/iPad:</span> Open my.tribe26.app in Safari → tap the Share icon → &quot;Add to Home Screen&quot;.&nbsp;&nbsp;
              <span className="font-bold text-[#121212]/80">Android/Chrome:</span> Open the site → tap the three-dot menu → &quot;Add to Home Screen&quot; or look for the install prompt in the address bar.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
