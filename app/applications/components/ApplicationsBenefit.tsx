"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { MapPin, Star, Gift, Sparkles } from "lucide-react";

const ease = [0.25, 0.4, 0.25, 1] as const;

// Entrance variants — opacity + translateY only (GPU composited)
const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

// Removed scale from card entrance — scale causes paint on every frame
const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

export function ApplicationBenefits() {
  const prefersReduced = useReducedMotion();
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const cardsInView = useInView(cardsRef, { once: true, margin: "-60px" });

  const benefits = [
    {
      title: "Discover Local Places",
      description:
        "Find hidden gems, new spots, and trusted local businesses around you.",
      icon: <MapPin className="h-7 w-7 text-[#141713]" />,
      accent: "from-[#CFFF5E] to-[#9ED600]",
    },
    {
      title: "Earn Points",
      description:
        "Check in, engage, and support locals to earn points and climb the leaderboard.",
      icon: <Star className="h-7 w-7 text-[#141713]" />,
      accent: "from-[#9ED600] to-[#CFFF5E]",
    },
    {
      title: "Unlock Rewards",
      description:
        "Redeem points for real rewards from local businesses and exclusive offers.",
      icon: <Gift className="h-7 w-7 text-[#141713]" />,
      accent: "from-[#CFFF5E] to-[#bef046]",
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Lime gradient band */}
      <div
        className="absolute inset-0 bg-linear-to-br from-[#CFFF5E]/15 via-[#CFFF5E]/10 to-[#F8FAF4]"
        aria-hidden="true"
      />

      {/* Decorative elements — y-only animation, static CSS rotate */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {!prefersReduced && (
          <>
            <motion.div
              className="absolute top-10 left-[5%] h-20 w-20 rounded-3xl bg-[#CFFF5E]/10 rotate-12"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              style={{ willChange: "transform" }}
            />
            <motion.div
              className="absolute top-1/3 right-[8%] h-16 w-16 rounded-2xl bg-[#CFFF5E]/15 -rotate-6"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
              style={{ willChange: "transform" }}
            />
            <motion.div
              className="absolute bottom-20 left-[15%] h-12 w-12 rounded-xl bg-[#CFFF5E]/10 rotate-45"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
              style={{ willChange: "transform" }}
            />
            <motion.div
              className="absolute bottom-1/4 right-[20%] h-8 w-8 rounded-lg bg-[#CFFF5E]/20 -rotate-12"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              style={{ willChange: "transform" }}
            />
          </>
        )}

        <svg
          className="absolute top-0 right-0 w-[500px] h-[500px] opacity-20"
          viewBox="0 0 500 500"
          fill="none"
        >
          <circle
            cx="250"
            cy="250"
            r="200"
            stroke="#CFFF5E"
            strokeWidth="1"
            strokeDasharray="8 8"
          />
          <circle
            cx="250"
            cy="250"
            r="230"
            stroke="#9ED600"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Top wave separator */}
      <div className="relative" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto">
          <path
            d="M0 60V30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0Z"
            fill="#FDFEFB"
          />
        </svg>
      </div>

      <div className="relative py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            ref={headerRef}
            variants={prefersReduced ? undefined : headerVariants}
            initial={prefersReduced ? false : "hidden"}
            animate={
              prefersReduced ? false : headerInView ? "visible" : "hidden"
            }
            style={{ willChange: "transform, opacity" }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="mt-6 text-3xl font-bold text-[#141713] sm:text-4xl lg:text-5xl text-balance">
              More Than an App.{" "}
              <span className="text-[#9ED600]">
                It&apos;s Your Local Advantage.
              </span>
            </h2>
          </motion.div>

          {/* Benefit Cards */}
          <motion.div
            ref={cardsRef}
            variants={prefersReduced ? undefined : containerVariants}
            initial={prefersReduced ? false : "hidden"}
            animate={
              prefersReduced ? false : cardsInView ? "visible" : "hidden"
            }
            className="mt-14 grid gap-6 md:grid-cols-3"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={prefersReduced ? undefined : cardVariants}
                whileHover={
                  prefersReduced
                    ? undefined
                    : {
                        y: -6,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        },
                      }
                }
                style={{ willChange: "transform, opacity" }}
                className="group relative rounded-3xl bg-white p-8 shadow-lg border border-[#E8EBE4] transition-shadow duration-300 hover:shadow-xl"
              >
                {/* Gradient accent line */}
                <div
                  className={`absolute top-0 left-8 right-8 h-1 rounded-full bg-linear-to-r ${benefit.accent}`}
                  aria-hidden="true"
                />

                {/* Icon — scale+rotate on hover only, not on mount */}
                <motion.div
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-[#CFFF5E] to-[#9ED600] shadow-lg shadow-[#CFFF5E]/30"
                  whileHover={
                    prefersReduced ? undefined : { scale: 1.12, rotate: 5 }
                  }
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  {benefit.icon}
                </motion.div>

                <h3 className="mt-6 text-xl font-bold text-[#141713]">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-[#5A6257] leading-relaxed">
                  {benefit.description}
                </p>

                {/* Step indicator dot — scale pulse, opacity+transform only */}
                <div className="mt-6 flex items-center gap-2">
                  {!prefersReduced ? (
                    <motion.div
                      className="h-2 w-2 rounded-full bg-[#CFFF5E]"
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.4,
                      }}
                      style={{ willChange: "transform" }}
                    />
                  ) : (
                    <div className="h-2 w-2 rounded-full bg-[#CFFF5E]" />
                  )}
                  <span className="text-xs font-medium text-[#5A6257]">
                    Step {index + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="relative" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          className="w-full h-auto rotate-180"
        >
          <path
            d="M0 60V30C360 50 720 10 1080 30C1260 40 1380 25 1440 20V60H0Z"
            fill="#FDFEFB"
          />
        </svg>
      </div>
    </section>
  );
}
