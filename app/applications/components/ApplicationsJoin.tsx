"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Users,
  MapPin,
  Star,
  Gift,
  Coffee,
  ShoppingBag,
  Heart,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ease = [0.25, 0.4, 0.25, 1] as const;

// Slide columns in from sides — translateX only
const leftColVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
};

const rightColVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease, delay: 0.1 },
  },
};

// Form fields stagger — translateY only
const formFieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease, delay: 0.3 + i * 0.1 },
  }),
};

// Floating badges — scale + opacity (no layout properties)
const floatingBadgeVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 120, damping: 16, delay },
  }),
};

export function ApplicationsJoin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const prefersReduced = useReducedMotion();

  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, margin: "-80px" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email });
  };

  return (
    <section id="contact" className="bg-[#FDFEFB] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={cardRef}
          initial={prefersReduced ? false : { opacity: 0, y: 40 }}
          animate={
            prefersReduced
              ? false
              : inView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.8, ease }}
          style={{ willChange: "transform, opacity" }}
          className="overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-[#141713]/10 border border-[#E8EBE4]"
        >
          <div className="grid lg:grid-cols-2">
            {/* ── Left Column — Visual ── */}
            <motion.div
              variants={prefersReduced ? undefined : leftColVariants}
              initial={prefersReduced ? false : "hidden"}
              animate={prefersReduced ? false : inView ? "visible" : "hidden"}
              style={{ willChange: "transform, opacity" }}
              className="relative bg-linear-to-br from-[#F8FAF4] via-[#FDFEFB] to-[#CFFF5E]/10 p-8 lg:p-12 overflow-hidden"
            >
              {/* Background decorative elements */}
              <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
              >
                {/* Rotating SVG — transform only */}
                {!prefersReduced && (
                  <motion.svg
                    className="absolute top-0 right-0 w-64 h-64 opacity-20"
                    viewBox="0 0 256 256"
                    fill="none"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 60,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{ willChange: "transform" }}
                  >
                    <circle
                      cx="128"
                      cy="128"
                      r="100"
                      stroke="#CFFF5E"
                      strokeWidth="1"
                      strokeDasharray="6 6"
                    />
                    <circle
                      cx="128"
                      cy="128"
                      r="120"
                      stroke="#CFFF5E"
                      strokeWidth="0.5"
                    />
                  </motion.svg>
                )}
                {/* Floating tile — y-only, static CSS rotate */}
                {!prefersReduced && (
                  <motion.div
                    className="absolute bottom-10 left-10 h-20 w-20 rounded-2xl bg-[#CFFF5E]/10 rotate-12"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{ willChange: "transform" }}
                  />
                )}
              </div>

              {/* Community illustration */}
              <div className="relative rounded-3xl bg-linear-to-br from-[#CFFF5E]/30 to-[#CFFF5E]/10 p-6 mb-8 border border-[#CFFF5E]/20">
                <div className="grid grid-cols-2 gap-4">
                  {/* Left side */}
                  <div className="space-y-4">
                    {/* Avatar stack — scale + opacity spring entrance */}
                    <div className="flex -space-x-3">
                      {[
                        {
                          bg: "bg-linear-to-br from-[#CFFF5E] to-[#9ED600]",
                          icon: <Coffee className="h-5 w-5 text-[#141713]" />,
                        },
                        {
                          bg: "bg-[#141713]",
                          icon: <ShoppingBag className="h-5 w-5 text-white" />,
                        },
                        {
                          bg: "bg-linear-to-br from-[#9ED600] to-[#CFFF5E]",
                          icon: <Heart className="h-5 w-5 text-[#141713]" />,
                        },
                      ].map((avatar, i) => (
                        <motion.div
                          key={i}
                          className={`h-12 w-12 rounded-full ${avatar.bg} border-[3px] border-white flex items-center justify-center shadow-md`}
                          initial={
                            prefersReduced ? false : { opacity: 0, scale: 0 }
                          }
                          animate={
                            prefersReduced
                              ? false
                              : inView
                                ? { opacity: 1, scale: 1 }
                                : {}
                          }
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 16,
                            delay: 0.5 + i * 0.1,
                          }}
                          style={{ willChange: "transform, opacity" }}
                        >
                          {avatar.icon}
                        </motion.div>
                      ))}
                    </div>

                    {/* Local discovery card */}
                    <motion.div
                      className="rounded-xl bg-white p-4 shadow-lg border border-[#E8EBE4]"
                      initial={prefersReduced ? false : { opacity: 0, y: 16 }}
                      animate={
                        prefersReduced
                          ? false
                          : inView
                            ? { opacity: 1, y: 0 }
                            : {}
                      }
                      transition={{ duration: 0.5, ease, delay: 0.7 }}
                      style={{ willChange: "transform, opacity" }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-[#CFFF5E] flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-[#141713]" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-[#141713] block">
                            Local Discovery
                          </span>
                          <span className="text-[10px] text-[#5A6257]">
                            12 new spots nearby
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Phone mockup — y-only float */}
                  <div className="flex items-center justify-center">
                    <motion.div
                      className="w-28 rounded-2xl bg-[#141713] p-2 shadow-xl transform rotate-3"
                      animate={prefersReduced ? {} : { y: [0, -6, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                      style={{ willChange: "transform" }}
                    >
                      <div className="rounded-xl bg-[#1a1d1a] p-2.5 overflow-hidden">
                        <div className="h-2 w-10 mx-auto rounded-full bg-[#5A6257] mb-3" />
                        <div className="space-y-2">
                          <div className="h-8 rounded-lg bg-linear-to-r from-[#CFFF5E] to-[#9ED600] flex items-center justify-center">
                            <span className="text-[8px] font-bold text-[#141713]">
                              TRIBE26
                            </span>
                          </div>
                          <div className="flex gap-1.5">
                            <div className="h-10 flex-1 rounded-lg bg-[#2a2d2a] flex items-center justify-center">
                              <Star className="h-4 w-4 text-[#CFFF5E]" />
                            </div>
                            <div className="h-10 flex-1 rounded-lg bg-[#2a2d2a] flex items-center justify-center">
                              <Gift className="h-4 w-4 text-[#CFFF5E]" />
                            </div>
                          </div>
                          <div className="h-6 rounded-lg bg-[#CFFF5E]/20 flex items-center justify-center">
                            <span className="text-[7px] font-medium text-[#CFFF5E]">
                              +250 points
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Floating points badge */}
                <motion.div
                  className="absolute -right-3 top-6 rounded-xl bg-linear-to-r from-[#CFFF5E] to-[#9ED600] px-4 py-2 shadow-lg shadow-[#CFFF5E]/30"
                  custom={0.8}
                  variants={prefersReduced ? undefined : floatingBadgeVariants}
                  initial={prefersReduced ? false : "hidden"}
                  animate={
                    prefersReduced ? false : inView ? "visible" : "hidden"
                  }
                  style={{ willChange: "transform, opacity" }}
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-[#141713]" />
                    <span className="text-sm font-bold text-[#141713]">
                      +150 pts
                    </span>
                  </div>
                </motion.div>

                {/* Floating reward badge */}
                <motion.div
                  className="absolute -left-2 bottom-6 rounded-xl bg-white px-3 py-2 shadow-lg border border-[#E8EBE4]"
                  custom={1.0}
                  variants={prefersReduced ? undefined : floatingBadgeVariants}
                  initial={prefersReduced ? false : "hidden"}
                  animate={
                    prefersReduced ? false : inView ? "visible" : "hidden"
                  }
                  style={{ willChange: "transform, opacity" }}
                >
                  <div className="flex items-center gap-2">
                    <Gift className="h-4 w-4 text-[#9ED600]" />
                    <span className="text-xs font-medium text-[#141713]">
                      Reward ready!
                    </span>
                  </div>
                </motion.div>
              </div>

              <motion.h2
                className="text-3xl font-bold text-[#141713] lg:text-4xl"
                initial={prefersReduced ? false : { opacity: 0, y: 20 }}
                animate={
                  prefersReduced ? false : inView ? { opacity: 1, y: 0 } : {}
                }
                transition={{ duration: 0.7, ease, delay: 0.4 }}
                style={{ willChange: "transform, opacity" }}
              >
                Join the
                <br />
                <span className="text-[#9ED600]">TRIBE26 Ecosystem</span>
              </motion.h2>

              <motion.p
                className="mt-4 text-[#5A6257] leading-relaxed"
                initial={prefersReduced ? false : { opacity: 0, y: 16 }}
                animate={
                  prefersReduced ? false : inView ? { opacity: 1, y: 0 } : {}
                }
                transition={{ duration: 0.6, ease, delay: 0.5 }}
                style={{ willChange: "transform, opacity" }}
              >
                TRIBE26 connects locals with locals. Be part of something
                bigger.
              </motion.p>

              {/* Social proof */}
              <motion.div
                className="mt-8 flex items-center gap-4 p-4 rounded-2xl bg-white/80 border border-[#E8EBE4]"
                initial={prefersReduced ? false : { opacity: 0, y: 16 }}
                animate={
                  prefersReduced ? false : inView ? { opacity: 1, y: 0 } : {}
                }
                transition={{ duration: 0.6, ease, delay: 0.6 }}
                style={{ willChange: "transform, opacity" }}
              >
                <div className="flex -space-x-2">
                  {[
                    "bg-linear-to-br from-[#CFFF5E] to-[#9ED600]",
                    "bg-[#141713]",
                    "bg-linear-to-br from-[#9ED600] to-[#CFFF5E]",
                  ].map((bg, i) => (
                    <div
                      key={i}
                      className={`h-10 w-10 rounded-full ${bg} border-2 border-white shadow-sm`}
                    />
                  ))}
                  <div className="h-10 w-10 rounded-full bg-[#E8EBE4] border-2 border-white shadow-sm flex items-center justify-center">
                    <span className="text-xs font-bold text-[#5A6257]">+</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#9ED600]" />
                  <span className="text-sm font-medium text-[#141713]">
                    Join 500+ locals already connected.
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* ── Right Column — Form ── */}
            <motion.div
              variants={prefersReduced ? undefined : rightColVariants}
              initial={prefersReduced ? false : "hidden"}
              animate={prefersReduced ? false : inView ? "visible" : "hidden"}
              style={{ willChange: "transform, opacity" }}
              className="p-8 lg:p-12 flex items-center"
            >
              <div className="mx-auto w-full max-w-md">
                <motion.h3
                  className="mt-6 text-2xl font-bold text-[#141713] lg:text-3xl"
                  custom={0}
                  variants={prefersReduced ? undefined : formFieldVariants}
                  initial={prefersReduced ? false : "hidden"}
                  animate={
                    prefersReduced ? false : inView ? "visible" : "hidden"
                  }
                  style={{ willChange: "transform, opacity" }}
                >
                  Get updates first
                </motion.h3>

                <motion.p
                  className="mt-3 text-[#5A6257] leading-relaxed"
                  custom={1}
                  variants={prefersReduced ? undefined : formFieldVariants}
                  initial={prefersReduced ? false : "hidden"}
                  animate={
                    prefersReduced ? false : inView ? "visible" : "hidden"
                  }
                  style={{ willChange: "transform, opacity" }}
                >
                  Join the list for launch updates, new features, and local
                  reward drops.
                </motion.p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <motion.div
                    custom={2}
                    variants={prefersReduced ? undefined : formFieldVariants}
                    initial={prefersReduced ? false : "hidden"}
                    animate={
                      prefersReduced ? false : inView ? "visible" : "hidden"
                    }
                    style={{ willChange: "transform, opacity" }}
                  >
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#141713] mb-2"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-12 border-[#E8EBE4] bg-[#F8FAF4] focus:border-[#CFFF5E] focus:ring-[#CFFF5E] rounded-xl"
                      required
                    />
                  </motion.div>

                  <motion.div
                    custom={3}
                    variants={prefersReduced ? undefined : formFieldVariants}
                    initial={prefersReduced ? false : "hidden"}
                    animate={
                      prefersReduced ? false : inView ? "visible" : "hidden"
                    }
                    style={{ willChange: "transform, opacity" }}
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#141713] mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 border-[#E8EBE4] bg-[#F8FAF4] focus:border-[#CFFF5E] focus:ring-[#CFFF5E] rounded-xl"
                      required
                    />
                  </motion.div>

                  <motion.div
                    custom={4}
                    variants={prefersReduced ? undefined : formFieldVariants}
                    initial={prefersReduced ? false : "hidden"}
                    animate={
                      prefersReduced ? false : inView ? "visible" : "hidden"
                    }
                    style={{ willChange: "transform, opacity" }}
                  >
                    <Button
                      type="submit"
                      className="w-full h-12 bg-[#CFFF5E] text-[#141713] hover:bg-[#bef046] font-semibold text-base shadow-lg shadow-[#CFFF5E]/30 transition-all hover:shadow-xl hover:shadow-[#CFFF5E]/40 hover:-translate-y-0.5 rounded-xl"
                    >
                      Get Started
                    </Button>
                  </motion.div>
                </form>

                <motion.p
                  className="mt-6 text-center text-sm text-[#5A6257]"
                  custom={5}
                  variants={prefersReduced ? undefined : formFieldVariants}
                  initial={prefersReduced ? false : "hidden"}
                  animate={
                    prefersReduced ? false : inView ? "visible" : "hidden"
                  }
                  style={{ willChange: "transform, opacity" }}
                >
                  No spam, ever. Just updates that matter.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
