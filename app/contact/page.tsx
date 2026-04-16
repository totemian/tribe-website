"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Send, CheckCircle2 } from "lucide-react"

const API_URL = "https://tribe.api.totemian.com/v1/web/requests"
const AUTH_KEY = "tribe26jdswjnf"

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" })
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")
    setErrorMsg("")

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${AUTH_KEY}`,
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          source: "contact_page",
        }),
      })

      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      setStatus("success")
      setForm({ name: "", email: "", phone: "" })
    } catch (err) {
      setStatus("error")
      setErrorMsg("Something went wrong. Please try again.")
    }
  }

  return (
    <main className="min-h-screen bg-[#121212] flex flex-col">
      {/* Nav bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              <Image src="/logo-green.png" alt="Tribe26" width={120} height={40} className="h-10 w-auto object-contain" priority />
            </motion.div>
          </Link>
          <Link href="/">
            <motion.span
              className="flex items-center gap-2 text-white/60 hover:text-[#CFFF5E] font-mono text-sm transition-colors"
              whileHover={{ x: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </motion.span>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6 pt-28 pb-16">
        <div className="w-full max-w-lg">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="mb-10 text-center"
          >
            <span className="font-mono text-[#CFFF5E] text-[10px] tracking-[0.3em] uppercase">Get in touch</span>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-[0.95] mt-3">
              Contact <span className="text-[#CFFF5E]">Us</span>
            </h1>
            <p className="text-white/50 font-mono text-sm leading-relaxed mt-4 max-w-sm mx-auto">
              Whether you&apos;re a local business or just curious about TRIBE26, we&apos;d love to hear from you.
            </p>
          </motion.div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center text-center py-8 gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#CFFF5E]/20 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-[#CFFF5E]" />
                </div>
                <h2 className="text-2xl font-black text-white tracking-tight">Message Sent!</h2>
                <p className="text-white/60 font-mono text-sm max-w-xs">
                  Thanks for reaching out. Our team will get back to you shortly.
                </p>
                <motion.button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-[#CFFF5E] font-mono text-xs underline underline-offset-4 hover:opacity-70 transition-opacity"
                >
                  Send another message
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="font-mono text-white/60 text-xs tracking-wide uppercase">Name</label>
                  <motion.input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full bg-white/5 border-2 border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 font-mono text-sm focus:outline-none focus:border-[#CFFF5E] transition-all duration-300"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="font-mono text-white/60 text-xs tracking-wide uppercase">Email</label>
                  <motion.input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full bg-white/5 border-2 border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 font-mono text-sm focus:outline-none focus:border-[#CFFF5E] transition-all duration-300"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="font-mono text-white/60 text-xs tracking-wide uppercase">Phone</label>
                  <motion.input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (604) 000-0000"
                    required
                    className="w-full bg-white/5 border-2 border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 font-mono text-sm focus:outline-none focus:border-[#CFFF5E] transition-all duration-300"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 font-mono text-xs"
                  >
                    {errorMsg}
                  </motion.p>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full flex items-center justify-center gap-2 bg-[#CFFF5E] text-[#121212] px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide relative overflow-hidden mt-2 disabled:opacity-60"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </span>
                  {status !== "submitting" && <Send className="w-4 h-4 relative z-10" />}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  )
}
