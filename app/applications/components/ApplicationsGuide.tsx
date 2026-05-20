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

interface GuideStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

function GuideStep({ number, title, description, icon }: GuideStepProps) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="relative">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#CFFF5E] text-sm font-bold text-[#141713] shadow-md shadow-[#CFFF5E]/30 transition-transform group-hover:scale-110">
          {number}
        </div>
        {number < 3 && (
          <div className="absolute left-1/2 top-full h-6 w-px -translate-x-1/2 bg-linear-to-b from-[#CFFF5E] to-transparent" />
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
    </div>
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
  return (
    <div className="group rounded-3xl bg-white p-6 lg:p-8 shadow-sm border border-[#E8EBE4] transition-all duration-300 hover:shadow-lg hover:border-[#CFFF5E]/50">
      <div className="flex items-center gap-4 mb-8">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${iconBg} shadow-lg transition-transform group-hover:scale-105`}
        >
          {icon}
        </div>
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
          />
        ))}
      </div>
    </div>
  );
}

export function ApplicationsGuide() {
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
      {/* Decorative curved lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#141713] border border-[#E8EBE4] shadow-sm">
            <Download className="h-3.5 w-3.5 text-[#9ED600]" />
            How to install
          </span>
          <h2 className="mt-6 text-3xl font-bold text-[#141713] sm:text-4xl lg:text-5xl text-balance">
            Simple Installation Guide
          </h2>
          <p className="mt-5 text-lg text-[#5A6257] leading-relaxed">
            Get TRIBE26 on your device in just a few steps.
          </p>
        </div>

        {/* Guide Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {guides.map((guide) => (
            <InstallGuideCard key={guide.title} {...guide} />
          ))}
        </div>

        {/* Help text */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-4 rounded-2xl bg-white px-6 py-4 shadow-sm border border-[#E8EBE4]">
            <p className="text-sm text-[#5A6257]">Need help?</p>
            <div className="h-4 w-px bg-[#E8EBE4]" />
            <Link
              href="#"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#141713] hover:text-[#9ED600] transition-colors"
            >
              Visit our FAQ
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
            <div className="h-4 w-px bg-[#E8EBE4]" />
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#141713] hover:text-[#9ED600] transition-colors"
            >
              Contact support
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
