"use client";

import { useRef, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { useLenis } from "lenis/react";
import {
  Shield,
  DollarSign,
  UserX,
  ChevronDown,
  MapPin,
  Star,
  Gift,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Matches the site-wide spring config
const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
const ease = [0.25, 0.4, 0.25, 1] as const;

export function ApplicationsHero() {
  const ref = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const lenis = useLenis();

  // Smooth-scroll to the download section via Lenis.
  // Falls back to native scrollIntoView if Lenis isn't ready yet.
  const scrollToDownload = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const target = document.getElementById("download");
      if (!target) return;

      if (lenis) {
        lenis.scrollTo(target, {
          offset: -80, // account for fixed navbar height
          duration: prefersReduced ? 0 : 1.4,
          easing: (t: number) => 1 - Math.pow(1 - t, 4), // ease-out-quart
        });
      } else {
        target.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth" });
      }
    },
    [lenis, prefersReduced],
  );

  // Parallax scroll — disabled when reduced motion is preferred
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const rawY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, prefersReduced ? 0 : 160],
  );
  const parallaxY = useSpring(rawY, springConfig);

  const rawOpacity = useTransform(
    scrollYProgress,
    [0, 0.7],
    [1, prefersReduced ? 1 : 0],
  );
  const contentOpacity = useSpring(rawOpacity, springConfig);

  const rawScale = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1, prefersReduced ? 1 : 0.95],
  );
  const contentScale = useSpring(rawScale, springConfig);

  // When reduced motion is on, skip all entrance animations
  const entranceProps = prefersReduced ? { initial: false as const } : {};

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#FDFEFB] pt-24 pb-16 lg:pt-32 lg:pb-24"
    >
      {/* ── Decorative background — pointer-events-none, purely visual ── */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {/* Rotating orbital SVG — transform only, GPU composited */}
        {!prefersReduced && (
          <motion.svg
            className="absolute top-0 right-0 w-[600px] h-[600px] -translate-y-1/4 translate-x-1/3 opacity-20"
            viewBox="0 0 800 800"
            fill="none"
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            style={{ willChange: "transform" }}
          >
            <circle
              cx="400"
              cy="400"
              r="200"
              stroke="#CFFF5E"
              strokeWidth="1"
              strokeDasharray="8 8"
            />
            <circle
              cx="400"
              cy="400"
              r="300"
              stroke="#CFFF5E"
              strokeWidth="1"
              strokeDasharray="12 12"
            />
            <circle
              cx="400"
              cy="400"
              r="380"
              stroke="#CFFF5E"
              strokeWidth="0.5"
            />
          </motion.svg>
        )}

        {/* Floating tiles — y-only (translateY is GPU composited), static CSS rotate */}
        {!prefersReduced && (
          <>
            <motion.div
              className="absolute top-20 left-[10%] h-16 w-16 rounded-2xl bg-[#CFFF5E]/10 rotate-12"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ willChange: "transform" }}
            />
            <motion.div
              className="absolute top-40 right-[15%] h-12 w-12 rounded-xl bg-[#CFFF5E]/15 -rotate-6"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              style={{ willChange: "transform" }}
            />
            <motion.div
              className="absolute bottom-32 left-[20%] h-8 w-8 rounded-lg bg-[#CFFF5E]/10 rotate-45"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              style={{ willChange: "transform" }}
            />
          </>
        )}
      </div>

      {/* ── Scroll-linked wrapper — opacity + scale only (compositor) ── */}
      <motion.div
        style={{
          opacity: contentOpacity,
          scale: contentScale,
          willChange: "transform, opacity",
        }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── Left Content ── */}
          <div className="max-w-xl">
            {/* Heading */}
            <motion.h1
              initial={prefersReduced ? false : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              style={{ willChange: "transform, opacity" }}
              className="mt-8 text-4xl font-bold tracking-tight text-[#141713] sm:text-5xl lg:text-6xl"
            >
              <span className="block text-balance">Get TRIBE26</span>
              <span className="block text-[#9ED600] relative">
                On Your Device.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3"
                  viewBox="0 0 300 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M2 8C50 4 100 6 150 8C200 10 250 6 298 4"
                    stroke="#CFFF5E"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={
                      prefersReduced ? false : { pathLength: 0, opacity: 0 }
                    }
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease, delay: 0.6 }}
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={prefersReduced ? false : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.3 }}
              style={{ willChange: "transform, opacity" }}
              className="mt-8 text-lg leading-relaxed text-[#5A6257]"
            >
              TRIBE26 connects you with local businesses, rewards your activity,
              and helps you discover more in your community.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.45 }}
              style={{ willChange: "transform, opacity" }}
              className="mt-8"
            >
              <Button
                size="lg"
                className="bg-[#CFFF5E] text-[#141713] hover:bg-[#bef046] font-semibold px-8 py-6 text-base shadow-lg shadow-[#CFFF5E]/30 transition-all hover:shadow-xl hover:shadow-[#CFFF5E]/40 hover:-translate-y-0.5"
                asChild
              >
                <a
                  href="#download"
                  onClick={scrollToDownload}
                  className="inline-flex items-center gap-2"
                >
                  Choose Your Download
                  {!prefersReduced && (
                    <motion.span
                      animate={{ y: [0, 4, 0] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{ willChange: "transform" }}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.span>
                  )}
                  {prefersReduced && <ChevronDown className="h-4 w-4" />}
                </a>
              </Button>
            </motion.div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              {[
                { icon: Shield, label: "Safe & secure" },
                { icon: DollarSign, label: "100% free" },
                { icon: UserX, label: "No signup required" },
              ].map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={prefersReduced ? false : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease, delay: 0.8 + i * 0.12 }}
                  style={{ willChange: "transform, opacity" }}
                  className="flex items-center gap-2.5 text-sm text-[#5A6257]"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#CFFF5E]/20">
                    <Icon className="h-4 w-4 text-[#9ED600]" />
                  </div>
                  <span>{label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Right Visual ── */}
          <motion.div
            className="relative flex items-center justify-center lg:justify-end"
            style={{ y: parallaxY, willChange: "transform" }}
            initial={prefersReduced ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
          >
            <div className="relative w-full max-w-lg">
              {/* Static glow — no animation, blur is expensive */}
              <div
                className="absolute inset-0 -z-10 rounded-[40px] bg-linear-to-br from-[#CFFF5E]/25 via-[#CFFF5E]/10 to-transparent blur-2xl"
                aria-hidden="true"
              />

              {/* Main card */}
              <motion.div
                className="relative rounded-3xl bg-white/80 backdrop-blur-sm p-6 shadow-2xl shadow-[#141713]/10 border border-[#E8EBE4]"
                initial={
                  prefersReduced ? false : { opacity: 0, scale: 0.92, y: 30 }
                }
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, ease, delay: 0.25 }}
                style={{ willChange: "transform, opacity" }}
              >
                {/* Laptop mockup */}
                <div className="rounded-2xl bg-linear-to-b from-[#F8FAF4] to-[#FDFEFB] p-5 border border-[#E8EBE4]">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#FF6B6B]" />
                      <div className="h-2.5 w-2.5 rounded-full bg-[#FFE66D]" />
                      <div className="h-2.5 w-2.5 rounded-full bg-[#4ECB71]" />
                    </div>
                    <div className="ml-3 flex-1 h-6 rounded-full bg-[#E8EBE4] flex items-center px-3">
                      <span className="text-[9px] text-[#5A6257]">
                        tribe26.app
                      </span>
                    </div>
                  </div>

                  {/* App interface */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-5 w-20 rounded bg-[#CFFF5E]" />
                      <div className="flex gap-2">
                        <div className="h-5 w-5 rounded bg-[#E8EBE4]" />
                        <div className="h-5 w-5 rounded bg-[#E8EBE4]" />
                      </div>
                    </div>

                    {/* Map area with animated pins */}
                    <div className="relative h-24 rounded-xl bg-linear-to-br from-[#F8FAF4] to-[#E8EBE4] overflow-hidden">
                      <div
                        className="absolute inset-0 opacity-30"
                        aria-hidden="true"
                      >
                        <div className="absolute top-4 left-6 h-8 w-12 rounded bg-[#E8EBE4]" />
                        <div className="absolute top-8 right-8 h-6 w-16 rounded bg-[#E8EBE4]" />
                        <div className="absolute bottom-4 left-1/3 h-4 w-20 rounded bg-[#E8EBE4]" />
                      </div>
                      {/* Pins — y-only animation, GPU composited */}
                      {[
                        {
                          className: "absolute top-5 left-8",
                          delay: 0,
                          icon: <MapPin className="h-3 w-3 text-[#141713]" />,
                          size: "h-5 w-5",
                          color: "bg-[#CFFF5E]",
                          tail: true,
                        },
                        {
                          className: "absolute top-10 right-12",
                          delay: 0.8,
                          icon: (
                            <MapPin className="h-2.5 w-2.5 text-[#141713]" />
                          ),
                          size: "h-4 w-4",
                          color: "bg-[#9ED600]",
                          tail: false,
                        },
                        {
                          className: "absolute bottom-6 left-1/2",
                          delay: 1.4,
                          icon: <Star className="h-3 w-3 text-[#141713]" />,
                          size: "h-5 w-5",
                          color: "bg-[#CFFF5E]",
                          tail: false,
                        },
                      ].map((pin, i) => (
                        <motion.div
                          key={i}
                          className={`${pin.className} flex flex-col items-center`}
                          animate={prefersReduced ? {} : { y: [0, -4, 0] }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: pin.delay,
                          }}
                          style={{ willChange: "transform" }}
                        >
                          <div
                            className={`${pin.size} ${pin.color} rounded-full flex items-center justify-center shadow-md`}
                          >
                            {pin.icon}
                          </div>
                          {pin.tail && (
                            <div className="h-1.5 w-0.5 bg-[#CFFF5E]" />
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* Category cards */}
                    <div className="grid grid-cols-3 gap-2">
                      <div className="rounded-xl bg-[#CFFF5E]/30 p-3 text-center border border-[#CFFF5E]/20">
                        <div className="mx-auto h-6 w-6 rounded-full bg-[#CFFF5E] flex items-center justify-center mb-1">
                          <MapPin className="h-3 w-3 text-[#141713]" />
                        </div>
                        <span className="text-[8px] font-medium text-[#141713]">
                          Discover
                        </span>
                      </div>
                      <div className="rounded-xl bg-[#F8FAF4] p-3 text-center border border-[#E8EBE4]">
                        <div className="mx-auto h-6 w-6 rounded-full bg-[#E8EBE4] flex items-center justify-center mb-1">
                          <Star className="h-3 w-3 text-[#5A6257]" />
                        </div>
                        <span className="text-[8px] font-medium text-[#5A6257]">
                          Points
                        </span>
                      </div>
                      <div className="rounded-xl bg-[#CFFF5E]/20 p-3 text-center border border-[#CFFF5E]/15">
                        <div className="mx-auto h-6 w-6 rounded-full bg-[#9ED600] flex items-center justify-center mb-1">
                          <Gift className="h-3 w-3 text-[#141713]" />
                        </div>
                        <span className="text-[8px] font-medium text-[#141713]">
                          Rewards
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone mockup — y-only float */}
                <motion.div
                  className="absolute -right-4 -bottom-4 w-28 rounded-2xl bg-[#141713] p-2 shadow-xl shadow-[#141713]/20 border-4 border-[#141713]"
                  animate={prefersReduced ? {} : { y: [0, -6, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  style={{ willChange: "transform" }}
                >
                  <div className="rounded-xl bg-[#1a1d1a] p-2 overflow-hidden">
                    <div className="h-1.5 w-8 mx-auto rounded-full bg-[#5A6257] mb-2" />
                    <div className="space-y-2">
                      <div className="h-7 rounded-lg bg-[#CFFF5E] flex items-center justify-center">
                        <span className="text-[7px] font-bold text-[#141713]">
                          TRIBE26
                        </span>
                      </div>
                      <div className="flex gap-1">
                        <div className="h-6 flex-1 rounded-lg bg-[#2a2d2a] flex items-center justify-center">
                          <MapPin className="h-3 w-3 text-[#CFFF5E]" />
                        </div>
                        <div className="h-6 flex-1 rounded-lg bg-[#2a2d2a] flex items-center justify-center">
                          <Star className="h-3 w-3 text-[#CFFF5E]" />
                        </div>
                      </div>
                      <div className="h-8 rounded-lg bg-[#2a2d2a] flex items-center px-2 gap-1">
                        <div className="h-4 w-4 rounded bg-[#CFFF5E]/30" />
                        <div className="flex-1 space-y-1">
                          <div className="h-1.5 w-full rounded bg-[#5A6257]/50" />
                          <div className="h-1 w-2/3 rounded bg-[#5A6257]/30" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating badge — Points */}
                <motion.div
                  className="absolute -left-3 top-1/4 rounded-xl bg-white p-3 shadow-lg shadow-[#141713]/10 border border-[#E8EBE4]"
                  initial={
                    prefersReduced ? false : { opacity: 0, scale: 0.7, x: -20 }
                  }
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 18,
                    delay: 0.6,
                  }}
                  style={{ willChange: "transform, opacity" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-linear-to-br from-[#CFFF5E] to-[#9ED600] flex items-center justify-center">
                      <span className="text-[10px] font-bold text-[#141713]">
                        +50
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold text-[#141713] block">
                        Points Earned
                      </span>
                      <span className="text-[8px] text-[#5A6257]">
                        Keep exploring!
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Floating badge — Local spot */}
                <motion.div
                  className="absolute -right-2 top-8 rounded-xl bg-[#CFFF5E] px-3 py-2 shadow-lg shadow-[#CFFF5E]/30"
                  initial={
                    prefersReduced ? false : { opacity: 0, scale: 0.7, x: 20 }
                  }
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 18,
                    delay: 0.75,
                  }}
                  style={{ willChange: "transform, opacity" }}
                >
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3 w-3 text-[#141713]" />
                    <span className="text-[10px] font-bold text-[#141713]">
                      New Local Spot!
                    </span>
                  </div>
                </motion.div>

                {/* Floating reward badge */}
                <motion.div
                  className="absolute left-1/4 -bottom-2 rounded-lg bg-white px-3 py-2 shadow-md border border-[#E8EBE4]"
                  initial={
                    prefersReduced ? false : { opacity: 0, scale: 0.7, y: 16 }
                  }
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 18,
                    delay: 0.9,
                  }}
                  style={{ willChange: "transform, opacity" }}
                >
                  <div className="flex items-center gap-1.5">
                    <Gift className="h-3 w-3 text-[#9ED600]" />
                    <span className="text-[9px] font-medium text-[#141713]">
                      Reward unlocked
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto">
          <path
            d="M0 60V30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0Z"
            fill="#F8FAF4"
          />
        </svg>
      </div>
    </section>
  );
}
