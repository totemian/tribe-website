"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  HelpCircle,
  Globe,
  Sparkles,
  Smartphone,
  ArrowRight,
} from "lucide-react";

const ease = [0.25, 0.4, 0.25, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

// Removed scale — opacity + translateY only (GPU composited)
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const infoCardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};

export function ApplicationsHelper() {
  const prefersReduced = useReducedMotion();
  const gridRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  const inView = useInView(gridRef, { once: true, margin: "-60px" });
  const dividerInView = useInView(dividerRef, { once: true, margin: "-40px" });

  const helpers = [
    {
      title: "Use Web App",
      description:
        "Best if you want the fastest start and do not want to install anything.",
      icon: <Globe className="h-5 w-5 text-[#141713]" />,
      isRecommended: false,
    },
    {
      title: "Use PWA",
      description:
        "Recommended. Best for most users. It feels like an app and is the smoothest all-around option.",
      icon: <Sparkles className="h-5 w-5 text-[#141713]" />,
      isRecommended: true,
    },
    {
      title: "Use iOS or Android",
      description:
        "Best if you want a device-specific install path for Apple or Android.",
      icon: <Smartphone className="h-5 w-5 text-[#141713]" />,
      isRecommended: false,
    },
  ];

  return (
    <section className="relative bg-[#FDFEFB] py-16 lg:py-20 overflow-hidden">
      {/* Static orbital — purely decorative, no animation */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none opacity-20"
        aria-hidden="true"
      >
        <svg viewBox="0 0 600 600" fill="none" className="w-full h-full">
          <circle
            cx="300"
            cy="300"
            r="200"
            stroke="#CFFF5E"
            strokeWidth="1"
            strokeDasharray="8 8"
          />
          <circle
            cx="300"
            cy="300"
            r="280"
            stroke="#CFFF5E"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Divider dots */}
        <motion.div
          ref={dividerRef}
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={
            prefersReduced
              ? false
              : dividerInView
                ? { opacity: 1 }
                : { opacity: 0 }
          }
          transition={{ duration: 0.7, ease }}
          className="flex justify-center items-center gap-3 mb-12"
        >
          <div className="h-px w-16 bg-linear-to-r from-transparent to-[#CFFF5E]/50" />
          {!prefersReduced ? (
            <motion.div
              className="h-2 w-2 rounded-full bg-[#CFFF5E]"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ willChange: "transform" }}
            />
          ) : (
            <div className="h-2 w-2 rounded-full bg-[#CFFF5E]" />
          )}
          <div className="h-px w-32 bg-[#E8EBE4]" />
          {!prefersReduced ? (
            <motion.div
              className="h-2 w-2 rounded-full bg-[#CFFF5E]/50"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              style={{ willChange: "transform" }}
            />
          ) : (
            <div className="h-2 w-2 rounded-full bg-[#CFFF5E]/50" />
          )}
          <div className="h-px w-16 bg-linear-to-l from-transparent to-[#CFFF5E]/50" />
        </motion.div>

        <motion.div
          ref={gridRef}
          variants={prefersReduced ? undefined : containerVariants}
          initial={prefersReduced ? false : "hidden"}
          animate={prefersReduced ? false : inView ? "visible" : "hidden"}
          className="grid gap-6 lg:grid-cols-4 lg:items-stretch"
        >
          {/* Left info card */}
          <motion.div
            variants={prefersReduced ? undefined : infoCardVariants}
            style={{ willChange: "transform, opacity" }}
            className="rounded-3xl bg-linear-to-br from-[#CFFF5E]/20 to-[#CFFF5E]/5 p-6 lg:p-8 border border-[#CFFF5E]/20"
          >
            <motion.div
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#CFFF5E] shadow-md shadow-[#CFFF5E]/30"
              whileHover={
                prefersReduced ? undefined : { scale: 1.1, rotate: 8 }
              }
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              <HelpCircle className="h-6 w-6 text-[#141713]" />
            </motion.div>
            <span className="mt-5 inline-block text-sm font-semibold text-[#5A6257]">
              Need help choosing?
            </span>
            <h3 className="mt-2 text-2xl font-bold text-[#141713]">
              {"Here's the easiest guide."}
            </h3>
            <p className="mt-3 text-sm text-[#5A6257] leading-relaxed">
              If you&apos;re not sure what to download, this quick guide helps
              you decide in seconds.
            </p>
            <motion.div
              className="mt-6 flex items-center gap-2 text-sm font-medium text-[#141713] cursor-default"
              whileHover={prefersReduced ? undefined : { x: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span>See all options</span>
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </motion.div>

          {/* Helper cards */}
          {helpers.map((helper, i) => (
            <motion.div
              key={helper.title}
              variants={prefersReduced ? undefined : itemVariants}
              whileHover={
                prefersReduced
                  ? undefined
                  : {
                      y: -6,
                      transition: {
                        type: "spring",
                        stiffness: 280,
                        damping: 20,
                      },
                    }
              }
              style={{ willChange: "transform, opacity" }}
              className={`group rounded-3xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg ${
                helper.isRecommended
                  ? "ring-2 ring-[#CFFF5E] shadow-md shadow-[#CFFF5E]/10"
                  : "border border-[#E8EBE4] hover:border-[#CFFF5E]/50"
              }`}
            >
              <div className="flex items-center justify-between">
                <motion.div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${
                    helper.isRecommended
                      ? "bg-[#CFFF5E] shadow-md shadow-[#CFFF5E]/30"
                      : "bg-[#F8FAF4] group-hover:bg-[#CFFF5E]/20"
                  }`}
                  whileHover={
                    prefersReduced ? undefined : { scale: 1.1, rotate: 6 }
                  }
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  {helper.icon}
                </motion.div>
                {helper.isRecommended && (
                  <span className="rounded-full bg-[#CFFF5E] px-3 py-1 text-[10px] font-bold text-[#141713] uppercase tracking-wide">
                    Recommended
                  </span>
                )}
              </div>
              <h4 className="mt-5 text-lg font-bold text-[#141713]">
                {helper.title}
              </h4>
              <p className="mt-2 text-sm text-[#5A6257] leading-relaxed">
                {helper.description}
              </p>

              {/*
                Progress bar — uses scaleX instead of width animation.
                scaleX is GPU composited; width triggers layout recalculation on every frame.
                transform-origin is set to left so it expands left-to-right.
              */}
              <div className="mt-5 h-1 w-full rounded-full bg-[#E8EBE4] overflow-hidden">
                <motion.div
                  className={`h-full w-full rounded-full origin-left ${
                    helper.isRecommended ? "bg-[#CFFF5E]" : "bg-[#CFFF5E]/50"
                  }`}
                  initial={prefersReduced ? false : { scaleX: 0 }}
                  whileInView={
                    prefersReduced
                      ? undefined
                      : {
                          scaleX: helper.isRecommended ? 1 : 0.66,
                        }
                  }
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease, delay: 0.2 + i * 0.1 }}
                  style={{ willChange: "transform" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
