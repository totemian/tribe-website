"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Download,
  Check,
  Sparkles,
  Home,
  Apple,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

// Removed scale — opacity + translateY only
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

// Feature list items — x-only slide (translateX, GPU composited)
const featureVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease, delay: i * 0.07 },
  }),
};

interface DownloadCardProps {
  badge: string;
  badgeType?: "default" | "recommended" | "ios" | "android";
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  icon: React.ReactNode;
  isRecommended?: boolean;
  visualContent: React.ReactNode;
}

function DownloadCard({
  badge,
  badgeType = "default",
  title,
  subtitle,
  description,
  features,
  ctaText,
  ctaLink,
  isRecommended = false,
  visualContent,
}: DownloadCardProps) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const badgeColors = {
    default: "bg-[#E8EBE4] text-[#5A6257]",
    recommended: "bg-[#CFFF5E] text-[#141713]",
    ios: "bg-[#141713] text-white",
    android: "bg-[#3DDC84] text-[#141713]",
  };

  return (
    <motion.div
      ref={ref}
      variants={prefersReduced ? undefined : cardVariants}
      initial={prefersReduced ? false : "hidden"}
      animate={prefersReduced ? false : inView ? "visible" : "hidden"}
      whileHover={
        prefersReduced
          ? undefined
          : {
              y: -8,
              transition: { type: "spring", stiffness: 280, damping: 20 },
            }
      }
      style={{ willChange: "transform, opacity" }}
      className={`group relative flex flex-col rounded-3xl bg-white p-6 transition-shadow duration-300 hover:shadow-xl ${
        isRecommended
          ? "ring-2 ring-[#CFFF5E] shadow-lg shadow-[#CFFF5E]/20 hover:shadow-[#CFFF5E]/30"
          : "border border-[#E8EBE4] shadow-sm hover:border-[#CFFF5E]/50"
      }`}
    >
      {/* Recommended glow — static, no animation (blur is expensive) */}
      {isRecommended && (
        <div
          className="absolute -inset-0.5 rounded-3xl bg-linear-to-br from-[#CFFF5E]/20 to-transparent -z-10 blur-xl"
          aria-hidden="true"
        />
      )}

      <span
        className={`inline-block self-start rounded-full px-3 py-1 text-xs font-semibold ${badgeColors[badgeType]}`}
      >
        {badge}
      </span>

      <div
        className={`mt-5 flex h-40 items-center justify-center rounded-2xl overflow-hidden ${
          isRecommended
            ? "bg-linear-to-br from-[#CFFF5E]/20 to-[#CFFF5E]/5"
            : "bg-linear-to-br from-[#F8FAF4] to-[#FDFEFB]"
        }`}
      >
        {visualContent}
      </div>

      <div className="mt-5">
        <h3 className="text-xl font-bold text-[#141713]">{title}</h3>
        <p className="mt-1 text-sm text-[#5A6257]">{subtitle}</p>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-[#5A6257]">
        {description}
      </p>

      <ul className="mt-5 flex-1 space-y-2.5">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            custom={index}
            variants={prefersReduced ? undefined : featureVariants}
            initial={prefersReduced ? false : "hidden"}
            animate={prefersReduced ? false : inView ? "visible" : "hidden"}
            style={{ willChange: "transform, opacity" }}
            className="flex items-center gap-2.5 text-sm text-[#141713]"
          >
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#CFFF5E]/30">
              <Check className="h-3 w-3 text-[#9ED600]" />
            </div>
            {feature}
          </motion.li>
        ))}
      </ul>

      <Link href={ctaLink}>
        <Button
          className={`mt-6 w-full font-semibold py-5 transition-all ${
            badgeType === "ios"
              ? "bg-[#141713] text-white hover:bg-[#141713]/90"
              : "bg-[#CFFF5E] text-[#141713] hover:bg-[#bef046] shadow-sm hover:shadow-md"
          }`}
        >
          {ctaText}
        </Button>
      </Link>
    </motion.div>
  );
}

// ── Visual sub-components — static, no animation ──

function WebAppVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <div className="relative w-full max-w-[180px]">
        <div className="rounded-xl bg-white shadow-lg border border-[#E8EBE4] overflow-hidden">
          <div className="flex items-center gap-1.5 px-3 py-2 bg-[#F8FAF4] border-b border-[#E8EBE4]">
            <div className="h-2 w-2 rounded-full bg-[#FF6B6B]" />
            <div className="h-2 w-2 rounded-full bg-[#FFE66D]" />
            <div className="h-2 w-2 rounded-full bg-[#4ECB71]" />
            <div className="ml-2 flex-1 h-4 rounded bg-[#E8EBE4]" />
          </div>
          <div className="p-3 space-y-2">
            <div className="h-3 w-16 rounded bg-[#CFFF5E]" />
            <div className="grid grid-cols-2 gap-1.5">
              <div className="h-8 rounded bg-[#CFFF5E]/20" />
              <div className="h-8 rounded bg-[#E8EBE4]" />
            </div>
            <div className="h-6 rounded bg-[#F8FAF4]" />
          </div>
        </div>
        <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-[#CFFF5E] flex items-center justify-center shadow-md">
          <Globe className="h-4 w-4 text-[#141713]" />
        </div>
      </div>
    </div>
  );
}

function PWAVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <div className="relative">
        <div className="w-24 rounded-2xl bg-[#141713] p-1.5 shadow-xl">
          <div className="rounded-xl bg-[#1a1d1a] p-2 space-y-2">
            <div className="h-1.5 w-6 mx-auto rounded-full bg-[#5A6257]" />
            <div className="h-5 rounded bg-[#CFFF5E] flex items-center justify-center">
              <span className="text-[6px] font-bold text-[#141713]">
                TRIBE26
              </span>
            </div>
            <div className="h-8 rounded bg-[#2a2d2a] flex items-center justify-center">
              <Home className="h-3 w-3 text-[#CFFF5E]" />
            </div>
            <div className="flex gap-1">
              <div className="h-4 flex-1 rounded bg-[#2a2d2a]" />
              <div className="h-4 flex-1 rounded bg-[#2a2d2a]" />
            </div>
          </div>
        </div>
        <div className="absolute -top-3 -right-3 h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-lg border border-[#CFFF5E]">
          <Share2 className="h-5 w-5 text-[#9ED600]" />
        </div>
        <div className="absolute -bottom-2 -left-2 h-8 w-8 rounded-full bg-[#CFFF5E] flex items-center justify-center shadow-md">
          <Sparkles className="h-4 w-4 text-[#141713]" />
        </div>
      </div>
    </div>
  );
}

function IOSVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <div className="relative flex items-end gap-2">
        <div className="w-20 rounded-xl bg-[#E8EBE4] p-1 shadow-lg">
          <div className="rounded-lg bg-white p-2 space-y-1.5">
            <div className="h-2 w-8 rounded bg-[#CFFF5E]" />
            <div className="h-10 rounded bg-[#F8FAF4]" />
            <div className="flex gap-1">
              <div className="h-3 flex-1 rounded bg-[#E8EBE4]" />
              <div className="h-3 flex-1 rounded bg-[#E8EBE4]" />
            </div>
          </div>
        </div>
        <div className="w-12 rounded-xl bg-[#141713] p-1 shadow-xl">
          <div className="rounded-lg bg-[#1a1d1a] p-1.5 space-y-1">
            <div className="h-1 w-4 mx-auto rounded-full bg-[#5A6257]" />
            <div className="h-3 rounded bg-[#CFFF5E]" />
            <div className="h-6 rounded bg-[#2a2d2a]" />
          </div>
        </div>
        <div className="absolute -top-2 right-2 h-9 w-9 rounded-full bg-[#141713] flex items-center justify-center shadow-lg">
          <Apple className="h-5 w-5 text-white" />
        </div>
      </div>
    </div>
  );
}

function AndroidVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <div className="relative">
        <div className="w-24 rounded-2xl bg-[#1a1d1a] p-1.5 shadow-xl border-2 border-[#3DDC84]/30">
          <div className="rounded-xl bg-[#141713] p-2 space-y-2">
            <div className="h-1 w-8 mx-auto rounded-full bg-[#5A6257]" />
            <div className="h-6 rounded-lg bg-[#3DDC84]/20 flex items-center justify-center">
              <span className="text-[7px] font-bold text-[#3DDC84]">
                TRIBE26.apk
              </span>
            </div>
            <div className="h-10 rounded-lg bg-[#2a2d2a] flex items-center justify-center">
              <Download className="h-5 w-5 text-[#3DDC84]" />
            </div>
            <div className="flex gap-1 justify-center">
              <div className="h-1 w-1 rounded-full bg-[#5A6257]" />
              <div className="h-1 w-1 rounded-full bg-[#5A6257]" />
              <div className="h-1 w-1 rounded-full bg-[#5A6257]" />
            </div>
          </div>
        </div>
        <div className="absolute -top-3 -right-3 h-10 w-10 rounded-xl bg-[#3DDC84] flex items-center justify-center shadow-lg">
          <Smartphone className="h-5 w-5 text-[#141713]" />
        </div>
      </div>
    </div>
  );
}

export function ApplicationDownloadCard() {
  const prefersReduced = useReducedMotion();
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  const cards: DownloadCardProps[] = [
    {
      badge: "No Install",
      badgeType: "default",
      title: "Web App",
      subtitle: "Use it instantly in your browser",
      description:
        "Best for quick access. Open TRIBE26 on any device without downloading anything.",
      features: [
        "Works in any browser",
        "No download needed",
        "Always up to date",
        "Great for first-time users",
      ],
      ctaText: "Open Web App",
      ctaLink: "https://my.tribe26.app",
      icon: <Globe className="h-6 w-6 text-[#141713]" />,
      visualContent: <WebAppVisual />,
    },
    {
      badge: "Recommended",
      badgeType: "recommended",
      title: "PWA",
      subtitle: "Install from your browser",
      description:
        "Best overall experience for most users. Feels like an app, loads fast, and supports offline access.",
      features: [
        "App-like experience",
        "Works offline",
        "Add to home screen",
        "Fast and lightweight",
      ],
      ctaText: "Install PWA",
      ctaLink: "https://my.tribe26.app",
      icon: <Sparkles className="h-6 w-6 text-[#141713]" />,
      isRecommended: true,
      visualContent: <PWAVisual />,
    },
    {
      badge: "iOS",
      badgeType: "ios",
      title: "iPhone / iPad",
      subtitle: "Download from the App Store",
      description:
        "Best for Apple users who want the native iOS experience with familiar App Store installation.",
      features: [
        "Native iOS feel",
        "Secure and polished",
        "Smooth performance",
        "Easy App Store install",
      ],
      ctaText: "Download for iOS",
      ctaLink: "https://apps.apple.com/us/app/tribe26/id6764071272",
      icon: <Apple className="h-6 w-6 text-[#141713]" />,
      visualContent: <IOSVisual />,
    },
    {
      badge: "Android",
      badgeType: "android",
      title: "Android APK",
      subtitle: "Direct APK download",
      description:
        "Best for Android users who want to install TRIBE26 directly on their device.",
      features: [
        "Direct install",
        "Built for Android",
        "Lightweight setup",
        "Quick to access",
      ],
      ctaText: "Download APK",
      ctaLink:
        "https://davvaxsuso8l7nbu.public.blob.vercel-storage.com/Tribe26.apk",
      icon: <Smartphone className="h-6 w-6 text-[#141713]" />,
      visualContent: <AndroidVisual />,
    },
  ];

  return (
    <section id="download" className="relative bg-[#F8FAF4] py-20 lg:py-28">
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none opacity-30"
        aria-hidden="true"
      >
        <svg
          className="absolute top-0 left-1/4 w-96 h-96"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle
            cx="200"
            cy="200"
            r="150"
            stroke="#CFFF5E"
            strokeWidth="1"
            strokeDasharray="10 10"
          />
          <circle
            cx="200"
            cy="200"
            r="180"
            stroke="#CFFF5E"
            strokeWidth="0.5"
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
            Choose Your Download Option
          </h2>
          <p className="mt-5 text-lg text-[#5A6257] leading-relaxed">
            Pick the version that matches your device and how you want to use
            TRIBE26.
          </p>
        </motion.div>

        {/* Cards Grid — each card manages its own inView */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <DownloadCard key={card.title} {...card} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto">
          <path
            d="M0 60V40C360 10 720 50 1080 30C1260 20 1380 35 1440 40V60H0Z"
            fill="#FDFEFB"
          />
        </svg>
      </div>
    </section>
  );
}
