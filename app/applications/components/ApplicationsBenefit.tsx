import { MapPin, Star, Gift, Sparkles } from "lucide-react";

export function ApplicationBenefits() {
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
      <div className="absolute inset-0 bg-linear-to-br from-[#CFFF5E]/15 via-[#CFFF5E]/10 to-[#F8FAF4]" />

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating tiles */}
        <div className="absolute top-10 left-[5%] h-20 w-20 rounded-3xl bg-[#CFFF5E]/10 rotate-12" />
        <div className="absolute top-1/3 right-[8%] h-16 w-16 rounded-2xl bg-[#CFFF5E]/15 -rotate-6" />
        <div className="absolute bottom-20 left-[15%] h-12 w-12 rounded-xl bg-[#CFFF5E]/10 rotate-45" />
        <div className="absolute bottom-1/4 right-[20%] h-8 w-8 rounded-lg bg-[#CFFF5E]/20 -rotate-12" />

        {/* Orbital lines */}
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
      <div className="relative">
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
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#CFFF5E] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#141713] shadow-md shadow-[#CFFF5E]/30">
              <Sparkles className="h-3.5 w-3.5" />
              Why TRIBE26
            </span>
            <h2 className="mt-6 text-3xl font-bold text-[#141713] sm:text-4xl lg:text-5xl text-balance">
              More Than an App.{" "}
              <span className="text-[#9ED600]">
                It&apos;s Your Local Advantage.
              </span>
            </h2>
          </div>

          {/* Benefit Cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group relative rounded-3xl bg-white p-8 shadow-lg border border-[#E8EBE4] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Gradient accent line */}
                <div
                  className={`absolute top-0 left-8 right-8 h-1 rounded-full bg-linear-to-r ${benefit.accent}`}
                />

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-[#CFFF5E] to-[#9ED600] shadow-lg shadow-[#CFFF5E]/30 transition-transform group-hover:scale-110">
                  {benefit.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#141713]">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-[#5A6257] leading-relaxed">
                  {benefit.description}
                </p>

                {/* Step indicator */}
                <div className="mt-6 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#CFFF5E]" />
                  <span className="text-xs font-medium text-[#5A6257]">
                    Step {index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="relative">
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
