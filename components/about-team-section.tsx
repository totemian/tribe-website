"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const roles = [
  {
    title: "Members",
    tag: "For Everyone",
    description:
      "Download the app, scan QR codes at local businesses, earn points, and discover new spots across Greater Vancouver. Your city, unlocked.",
    cta: "Download App",
    href: "https://my.tribe26.app",
    external: true,
    accent: false,
  },
  {
    title: "Contributors",
    tag: "Offer Your Skills",
    description:
      "Chefs, tutors, trainers, designers, photographers, translators — list your services on Tribe26 and reach a trusted local audience with no heavy commission model.",
    cta: "Apply as Contributor",
    href: "/contact",
    external: false,
    accent: false,
  },
  {
    title: "Anchor Nodes",
    tag: "Physical Locations",
    description:
      "If your business has a storefront, you qualify as a Tribe26 Anchor Node. Get discovered, boost loyalty, rank higher on Google, and join the FIFA 2026 Fan Playground network.",
    cta: "Register Your Location",
    href: "/contact",
    external: false,
    accent: true,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
}

export function AboutTeamSection() {
  const ref = useRef(null)
  const gridRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" })

  return (
    <section className="relative py-20 bg-[#121212] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CFFF5E]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-14"
        >
          <motion.span
            className="font-mono text-[#CFFF5E] text-[10px] tracking-[0.3em] uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.1 }}
          >
            Three Ways to Belong
          </motion.span>

          <div className="overflow-hidden mt-3">
            <motion.h2
              className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.9]"
              initial={{ y: 80 }}
              animate={isInView ? { y: 0 } : { y: 80 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.15 }}
            >
              Find Your
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="text-4xl md:text-6xl font-black text-[#CFFF5E] tracking-tighter leading-[0.9]"
              initial={{ y: 80 }}
              animate={isInView ? { y: 0 } : { y: 80 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.25 }}
            >
              Role in the Tribe.
            </motion.h2>
          </div>

          <motion.p
            className="text-white/60 font-mono text-sm leading-relaxed mt-5 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            Whether you&apos;re a resident, a service provider, or a local business owner — there&apos;s a place for
            you in the Tribe26 ecosystem.
          </motion.p>
        </motion.div>

        {/* Role cards */}
        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6"
        >
          {roles.map((role) => (
            <motion.div
              key={role.title}
              variants={itemVariants}
              className={`group relative rounded-2xl p-8 overflow-hidden border transition-colors duration-300 ${
                role.accent
                  ? "bg-[#CFFF5E]/5 border-[#CFFF5E]/20 hover:border-[#CFFF5E]/60"
                  : "bg-white/5 border-white/10 hover:border-[#CFFF5E]/40"
              }`}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 400, damping: 17 } }}
            >
              <motion.div
                className="absolute inset-0 bg-[#CFFF5E]/0 group-hover:bg-[#CFFF5E]/5 transition-colors duration-500 rounded-2xl pointer-events-none"
              />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-[#CFFF5E]/10 border border-[#CFFF5E]/20 rounded-full px-3 py-1 mb-5">
                  <span className="text-[#CFFF5E] font-mono text-[10px] tracking-widest uppercase">{role.tag}</span>
                </div>

                <h3 className="text-2xl font-black text-white tracking-tight mb-4">{role.title}</h3>

                <p className="text-white/60 font-mono text-xs leading-relaxed mb-8">{role.description}</p>

                {role.external ? (
                  <motion.a
                    href={role.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs tracking-wide transition-all duration-300 ${
                      role.accent
                        ? "bg-[#CFFF5E] text-[#121212]"
                        : "bg-white/10 hover:bg-[#CFFF5E] text-white hover:text-[#121212]"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {role.cta}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.a>
                ) : (
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href={role.href}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs tracking-wide transition-all duration-300 ${
                        role.accent
                          ? "bg-[#CFFF5E] text-[#121212]"
                          : "bg-white/10 hover:bg-[#CFFF5E] text-white hover:text-[#121212]"
                      }`}
                    >
                      {role.cta}
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
