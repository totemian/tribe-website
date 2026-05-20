"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Share,
  Home,
  Play,
  Search,
  Download,
  Shield,
  Sparkles,
  Apple,
  Smartphone,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

const ease = [0.25, 0.4, 0.25, 1] as const;

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

// Removed scale — opacity + translateY only
const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

// Steps slide in from left — translateX only
const stepVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease, delay: i * 0.1 },
  }),
};

// Connector line — scaleY (transform, GPU composited)
const lineVariants = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 0.5, ease, delay: 0.3 } },
};

interface GuideStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  inView: boolean;
  prefersReduced: boolean;
}

function GuideStep({
  number,
  title,
  description,
  icon,
  inView,
  prefersReduced,
}: GuideStepProps) {
  return (
    <motion.div
      className="flex items-start gap-4"
      custom={number - 1}
      variants={prefersReduced ? undefined : stepVariants}
      initial={prefersReduced ? false : "hidden"}
      animate={prefersReduced ? false : inView ? "visible" : "hidden"}
      style={{ willChange: "transform, opacity" }}
    >
      <div className="relative">
        <motion.div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#CFFF5E] text-sm font-bold text-[#141713] shadow-md shadow-[#CFFF5E]/30"
          whileHover={prefersReduced ? undefined : { scale: 1.15 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
        >
          {number}
        </motion.div>
        {number < 3 && (
          <motion.div
            className="absolute left-1/2 top-full h-6 w-px -translate-x-1/2 bg-linear-to-b from-[#CFFF5E] to-transparent origin-top"
            variants={prefersReduced ? undefined : lineVariants}
            initial={prefersReduced ? false : "hidden"}
            animate={prefersReduced ? false : inView ? "visible" : "hidden"}
            style={{ willChange: "transform" }}
          />
        )}
      </div>
      <div className="pt-1">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#CFFF5E]/20">
            {icon}
          </div>
          <h4 className="font-semibold text-[#141713]">{title}</h4>
        </div>
        <p className="mt-1.5 text-sm text-[#5A6257] leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

interface InstallGuideCardProps {
  title: string;
  icon: React.ReactNode;
  iconBg: string;
  steps: { title: string; description: string; icon: React.ReactNode }[];
}

function InstallGuideCard({
  title,
  icon,
  iconBg,
  steps,
}: InstallGuideCardProps) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      variants={prefersReduced ? undefined : cardVariants}
      whileHover={
        prefersReduced
          ? undefined
          : {
              y: -6,
              transition: { type: "spring", stiffness: 280, damping: 20 },
            }
      }
      style={{ willChange: "transform, opacity" }}
      className="group rounded-3xl bg-white p-6 lg:p-8 shadow-sm border border-[#E8EBE4] transition-shadow duration-300 hover:shadow-lg hover:border-[#CFFF5E]/50"
    >
      <div className="flex items-center gap-4 mb-8">
        <motion.div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${iconBg} shadow-lg`}
          whileHover={prefersReduced ? undefined : { scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-bold text-[#141713]">{title}</h3>
      </div>
      <div className="space-y-6">
        {steps.map((step, index) => (
          <GuideStep
            key={step.title}
            number={index + 1}
            title={step.title}
            description={step.description}
            icon={step.icon}
            inView={inView}
            prefersReduced={!!prefersReduced}
          />
        ))}
      </div>
    </motion.div>
  );
}

export function ApplicationsGuide() {
  const prefersReduced = useReducedMotion();
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const helpRef = useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const cardsInView = useInView(cardsRef, { once: true, margin: "-60px" });
  const helpInView = useInView(helpRef, { once: true, margin: "-40px" });

  const guides: InstallGuideCardProps[] = [
    {
      title: "Install PWA",
      icon: <Sparkles className="h-7 w-7 text-[#141713]" />,
      iconBg: "bg-[#CFFF5E]",
      steps: [
        {
          title: "Tap Share",
          description: "Open TRIBE26 in your browser.",
          icon: <Share className="h-3.5 w-3.5 text-[#9ED600]" />,
        },
        {
          title: "Add to Home",
          description: "Choose Add to Home Screen.",
          icon: <Home className="h-3.5 w-3.5 text-[#9ED600]" />,
        },
        {
          title: "Open TRIBE26",
          description: "Launch it from your device.",
          icon: <Play className="h-3.5 w-3.5 text-[#9ED600]" />,
        },
      ],
    },
    {
      title: "Install iPhone / iPad",
      icon: <Apple className="h-7 w-7 text-white" />,
      iconBg: "bg-[#141713]",
      steps: [
        {
          title: "Open App Store",
          description: "Search for TRIBE26.",
          icon: <Search className="h-3.5 w-3.5 text-[#9ED600]" />,
        },
        {
          title: "Download",
          description: "Tap Get and install.",
          icon: <Download className="h-3.5 w-3.5 text-[#9ED600]" />,
        },
        {
          title: "Open & Enjoy",
          description: "Launch from your home screen.",
          icon: <Play className="h-3.5 w-3.5 text-[#9ED600]" />,
        },
      ],
    },
    {
      title: "Install Android APK",
      icon: <Smartphone className="h-7 w-7 text-[#141713]" />,
      iconBg: "bg-[#3DDC84]",
      steps: [
        {
          title: "Download APK",
          description: "Tap the download button.",
          icon: <Download className="h-3.5 w-3.5 text-[#9ED600]" />,
        },
        {
          title: "Allow Install",
          description: "Approve installation if asked.",
          icon: <Shield className="h-3.5 w-3.5 text-[#9ED600]" />,
        },
        {
          title: "Install & Open",
          description: "Start exploring TRIBE26.",
          icon: <Play className="h-3.5 w-3.5 text-[#9ED600]" />,
        },
      ],
    },
  ];

  return (
    <section className="relative bg-linear-to-b from-[#FDFEFB] via-[#F8FAF4] to-[#FDFEFB] py-20 lg:py-28 overflow-hidden">
      {/* Static decorative lines — no animation */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <svg
          className="absolute top-0 left-0 w-full h-32"
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-100 60C200 20 500 100 800 60C1100 20 1300 80 1540 50"
            stroke="#CFFF5E"
            strokeWidth="2"
            strokeDasharray="12 12"
            opacity="0.3"
          />
        </svg>
        <svg
          className="absolute bottom-0 right-0 w-full h-32"
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-100 70C300 30 600 90 900 60C1200 30 1350 70 1540 50"
            stroke="#CFFF5E"
            strokeWidth="1.5"
            opacity="0.2"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          variants={prefersReduced ? undefined : headerVariants}
          initial={prefersReduced ? false : "hidden"}
          animate={prefersReduced ? false : headerInView ? "visible" : "hidden"}
          style={{ willChange: "transform, opacity" }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="mt-6 text-3xl font-bold text-[#141713] sm:text-4xl lg:text-5xl text-balance">
            Simple Installation Guide
          </h2>
          <p className="mt-5 text-lg text-[#5A6257] leading-relaxed">
            Get TRIBE26 on your device in just a few steps.
          </p>
        </motion.div>

        {/* Guide Cards */}
        <motion.div
          ref={cardsRef}
          variants={prefersReduced ? undefined : containerVariants}
          initial={prefersReduced ? false : "hidden"}
          animate={prefersReduced ? false : cardsInView ? "visible" : "hidden"}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {guides.map((guide) => (
            <InstallGuideCard key={guide.title} {...guide} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
