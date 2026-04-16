"use client"

import { motion, useInView } from "framer-motion"
import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
}

const API_URL = "https://tribe.api.totemian.com/v1/web/requests"
const AUTH_KEY = "tribe26jdswjnf"

export function Footer() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [isHovering, setIsHovering] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, margin: "-100px" })

  const handleSubmit = async () => {
    if (!name || !email || !phone) return
    setSubmitStatus("submitting")
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${AUTH_KEY}`,
        },
        body: JSON.stringify({ name, email, phone, source: "join_ecosystem" }),
      })
      if (!res.ok) throw new Error()
      setSubmitStatus("success")
      setName("")
      setEmail("")
      setPhone("")
    } catch {
      setSubmitStatus("error")
    }
  }

  const footerLinks = [
    {
      title: "For Members",
      links: [
        { label: "Download App", href: "#hero" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "Rewards", href: "#ecosystem" },
        { label: "Directory", href: "#creators" },
      ],
    },
    {
      title: "For Businesses",
      links: [
        { label: "Become a Node", href: "/contact" },
        { label: "Partner Benefits", href: "/contact" },
        { label: "Pricing", href: "/contact" },
        { label: "Resources", href: "#how-it-works" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Tribe26", href: "#about" },
        { label: "Blog", href: "#about" },
        { label: "Press", href: "#about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/legal/privacy-policy" },
        { label: "Terms of Service", href: "/legal/terms-of-service" },
        { label: "Cookie Policy", href: "/legal/cookie-policy" },
      ],
    },
  ]

  return (
    <footer ref={footerRef} id="about" className="relative bg-[#121212] pt-16 pb-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.9] overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            >
              JOIN
            </motion.span>
            <motion.span
              className="block text-[#CFFF5E]"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.1 }}
            >
              ECOSYSTEM
            </motion.span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          {submitStatus === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6"
            >
              <p className="text-[#CFFF5E] font-mono text-sm font-bold">You&apos;re in! We&apos;ll be in touch soon.</p>
            </motion.div>
          ) : (
            <>
              <div className="grid sm:grid-cols-3 gap-3">
                <motion.div className="relative">
                  <motion.input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full bg-white/5 border-2 border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 font-mono text-sm focus:outline-none focus:border-[#CFFF5E] transition-all duration-300"
                    whileFocus={{ borderColor: "#CFFF5E" }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    animate={name.length > 0 ? { boxShadow: "0 0 20px rgba(207,255,94,0.2)" } : { boxShadow: "none" }}
                  />
                </motion.div>
                <motion.div className="relative">
                  <motion.input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="business@email.com"
                    className="w-full bg-white/5 border-2 border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 font-mono text-sm focus:outline-none focus:border-[#CFFF5E] transition-all duration-300"
                    whileFocus={{ borderColor: "#CFFF5E" }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    animate={email.length > 0 ? { boxShadow: "0 0 20px rgba(207,255,94,0.2)" } : { boxShadow: "none" }}
                  />
                </motion.div>
                <motion.div className="relative">
                  <motion.input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (604) 000-0000"
                    className="w-full bg-white/5 border-2 border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 font-mono text-sm focus:outline-none focus:border-[#CFFF5E] transition-all duration-300"
                    whileFocus={{ borderColor: "#CFFF5E" }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    animate={phone.length > 0 ? { boxShadow: "0 0 20px rgba(207,255,94,0.2)" } : { boxShadow: "none" }}
                  />
                </motion.div>
              </div>
              <motion.button
                className="w-full sm:w-auto bg-[#CFFF5E] text-[#121212] px-6 py-3 rounded-xl font-bold text-sm tracking-wide relative overflow-hidden mt-3 disabled:opacity-60"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={handleSubmit}
                disabled={submitStatus === "submitting"}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10">
                  {submitStatus === "submitting" ? "Submitting..." : "Get Started"}
                </span>
              </motion.button>
              {submitStatus === "error" && (
                <p className="text-red-400 font-mono text-xs mt-2">Something went wrong. Please try again.</p>
              )}
              <motion.p
                className="text-white/40 font-mono text-xs mt-3 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Join 500+ local businesses. Free consultation with our team.
              </motion.p>
            </>
          )}
        </motion.div>

        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-white/60 font-mono text-xs max-w-xl mx-auto leading-relaxed">
            Tribe26 connects Vancouver&apos;s residents with local businesses through a physical-to-digital ecosystem. 
            Download the app or partner with us to unlock your city&apos;s potential.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-white/10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {footerLinks.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h4 className="font-bold text-white text-sm mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((item) => (
                  <li key={item.label}>
                    <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                      <Link
                        href={item.href}
                        className="text-white/60 hover:text-[#CFFF5E] font-mono text-xs transition-colors inline-block"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/10 gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Image
              src="/logo.png"
              alt="Tribe26"
              width={80}
              height={28}
              className="h-7 w-auto object-contain brightness-0 invert"
            />
          </motion.div>

          <p className="text-white/40 font-mono text-xs">© 2026 Tribe26. All rights reserved.</p>

          <motion.p
            className="text-white/30 font-mono text-xs cursor-pointer"
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            animate={
              isHovering
                ? {
                    rotate: [0, -5, 5, -5, 5, 0],
                    scale: [1, 1.1, 1],
                    color: "#CFFF5E",
                  }
                : {
                    rotate: 0,
                    scale: 1,
                    color: "rgba(255,255,255,0.3)",
                  }
            }
            transition={{ duration: 0.5 }}
          >
            unlocking community
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[15rem] md:text-[30rem] font-black text-white/[0.02] pointer-events-none select-none leading-none"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        TRIBE26
      </motion.div>
    </footer>
  )
}
