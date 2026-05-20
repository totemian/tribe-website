import {
  HelpCircle,
  Globe,
  Sparkles,
  Smartphone,
  ArrowRight,
} from "lucide-react";

export function ApplicationsHelper() {
  const helpers = [
    {
      title: "Use Web App",
      description:
        "Best if you want the fastest start and do not want to install anything.",
      icon: <Globe className="h-5 w-5 text-[#141713]" />,
      color: "bg-[#F8FAF4]",
    },
    {
      title: "Use PWA",
      description:
        "Recommended. Best for most users. It feels like an app and is the smoothest all-around option.",
      icon: <Sparkles className="h-5 w-5 text-[#141713]" />,
      isRecommended: true,
      color: "bg-[#CFFF5E]/10",
    },
    {
      title: "Use iOS or Android",
      description:
        "Best if you want a device-specific install path for Apple or Android.",
      icon: <Smartphone className="h-5 w-5 text-[#141713]" />,
      color: "bg-[#F8FAF4]",
    },
  ];

  return (
    <section className="relative bg-[#FDFEFB] py-16 lg:py-20 overflow-hidden">
      {/* Orbital decorative element */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none opacity-20">
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
        {/* Subtle top divider line */}
        <div className="flex justify-center items-center gap-3 mb-12">
          <div className="h-px w-16 bg-linear-to-r from-transparent to-[#CFFF5E]/50" />
          <div className="h-2 w-2 rounded-full bg-[#CFFF5E]" />
          <div className="h-px w-32 bg-[#E8EBE4]" />
          <div className="h-2 w-2 rounded-full bg-[#CFFF5E]/50" />
          <div className="h-px w-16 bg-linear-to-l from-transparent to-[#CFFF5E]/50" />
        </div>

        <div className="grid gap-6 lg:grid-cols-4 lg:items-stretch">
          {/* Left info card */}
          <div className="rounded-3xl bg-linear-to-br from-[#CFFF5E]/20 to-[#CFFF5E]/5 p-6 lg:p-8 border border-[#CFFF5E]/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#CFFF5E] shadow-md shadow-[#CFFF5E]/30">
              <HelpCircle className="h-6 w-6 text-[#141713]" />
            </div>
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
            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#141713]">
              <span>See all options</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>

          {/* Helper cards */}
          {helpers.map((helper) => (
            <div
              key={helper.title}
              className={`group rounded-3xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg ${
                helper.isRecommended
                  ? "ring-2 ring-[#CFFF5E] shadow-md shadow-[#CFFF5E]/10"
                  : "border border-[#E8EBE4] hover:border-[#CFFF5E]/50"
              }`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all ${
                    helper.isRecommended
                      ? "bg-[#CFFF5E] shadow-md shadow-[#CFFF5E]/30"
                      : "bg-[#F8FAF4] group-hover:bg-[#CFFF5E]/20"
                  }`}
                >
                  {helper.icon}
                </div>
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

              {/* Visual indicator */}
              <div className="mt-5 h-1 w-full rounded-full bg-[#E8EBE4] overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    helper.isRecommended
                      ? "w-full bg-[#CFFF5E]"
                      : "w-2/3 bg-[#CFFF5E]/50 group-hover:bg-[#CFFF5E]"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
