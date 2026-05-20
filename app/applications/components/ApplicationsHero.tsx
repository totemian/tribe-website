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

export function ApplicationsHero() {
  return (
    <section className="relative overflow-hidden bg-[#FDFEFB] pt-8 pb-16 lg:pt-12 lg:pb-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orbital lines */}
        <svg
          className="absolute top-0 right-0 w-[800px] h-[800px] -translate-y-1/4 translate-x-1/3 opacity-20"
          viewBox="0 0 800 800"
          fill="none"
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
        </svg>

        {/* Floating decorative tiles */}
        <div className="absolute top-20 left-[10%] h-16 w-16 rounded-2xl bg-[#CFFF5E]/10 rotate-12" />
        <div className="absolute top-40 right-[15%] h-12 w-12 rounded-xl bg-[#CFFF5E]/15 -rotate-6" />
        <div className="absolute bottom-32 left-[20%] h-8 w-8 rounded-lg bg-[#CFFF5E]/10 rotate-45" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#CFFF5E]/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#141713] border border-[#CFFF5E]/30">
              <span className="h-1.5 w-1.5 rounded-full bg-[#9ED600] animate-pulse" />
              TRIBE26 Apps
            </span>
            <h1 className="mt-8 text-4xl font-bold tracking-tight text-[#141713] sm:text-5xl lg:text-6xl">
              <span className="block text-balance">Get TRIBE26</span>
              <span className="block text-[#9ED600] relative">
                On Your Device.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3"
                  viewBox="0 0 300 12"
                  fill="none"
                >
                  <path
                    d="M2 8C50 4 100 6 150 8C200 10 250 6 298 4"
                    stroke="#CFFF5E"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-[#5A6257]">
              TRIBE26 connects you with local businesses, rewards your activity,
              and helps you discover more in your community.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                className="bg-[#CFFF5E] text-[#141713] hover:bg-[#bef046] font-semibold px-8 py-6 text-base shadow-lg shadow-[#CFFF5E]/30 transition-all hover:shadow-xl hover:shadow-[#CFFF5E]/40 hover:-translate-y-0.5"
                asChild
              >
                <a href="#download" className="inline-flex items-center gap-2">
                  Choose Your Download
                  <ChevronDown className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2.5 text-sm text-[#5A6257]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#CFFF5E]/20">
                  <Shield className="h-4 w-4 text-[#9ED600]" />
                </div>
                <span>Safe & secure</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#5A6257]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#CFFF5E]/20">
                  <DollarSign className="h-4 w-4 text-[#9ED600]" />
                </div>
                <span>100% free</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#5A6257]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#CFFF5E]/20">
                  <UserX className="h-4 w-4 text-[#9ED600]" />
                </div>
                <span>No signup required</span>
              </div>
            </div>
          </div>

          {/* Right Visual - Enhanced Product Mockup */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Background glow */}
              <div className="absolute inset-0 -z-10 rounded-[40px] bg-linear-to-br from-[#CFFF5E]/30 via-[#CFFF5E]/10 to-transparent blur-3xl" />

              {/* Main card container */}
              <div className="relative rounded-3xl bg-white/80 backdrop-blur-sm p-6 shadow-2xl shadow-[#141713]/10 border border-[#E8EBE4]">
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
                    {/* Header bar */}
                    <div className="flex items-center justify-between">
                      <div className="h-5 w-20 rounded bg-[#CFFF5E]" />
                      <div className="flex gap-2">
                        <div className="h-5 w-5 rounded bg-[#E8EBE4]" />
                        <div className="h-5 w-5 rounded bg-[#E8EBE4]" />
                      </div>
                    </div>

                    {/* Map area with pins */}
                    <div className="relative h-24 rounded-xl bg-linear-to-br from-[#F8FAF4] to-[#E8EBE4] overflow-hidden">
                      <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-4 left-6 h-8 w-12 rounded bg-[#E8EBE4]" />
                        <div className="absolute top-8 right-8 h-6 w-16 rounded bg-[#E8EBE4]" />
                        <div className="absolute bottom-4 left-1/3 h-4 w-20 rounded bg-[#E8EBE4]" />
                      </div>
                      {/* Map pins */}
                      <div className="absolute top-5 left-8 flex flex-col items-center">
                        <div className="h-5 w-5 rounded-full bg-[#CFFF5E] flex items-center justify-center shadow-md">
                          <MapPin className="h-3 w-3 text-[#141713]" />
                        </div>
                        <div className="h-1.5 w-0.5 bg-[#CFFF5E]" />
                      </div>
                      <div className="absolute top-10 right-12 flex flex-col items-center">
                        <div className="h-4 w-4 rounded-full bg-[#9ED600] flex items-center justify-center shadow-md">
                          <MapPin className="h-2.5 w-2.5 text-[#141713]" />
                        </div>
                      </div>
                      <div className="absolute bottom-6 left-1/2 flex flex-col items-center">
                        <div className="h-5 w-5 rounded-full bg-[#CFFF5E] flex items-center justify-center shadow-md">
                          <Star className="h-3 w-3 text-[#141713]" />
                        </div>
                      </div>
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

                {/* Phone mockup - floating */}
                <div className="absolute -right-4 -bottom-4 w-28 rounded-2xl bg-[#141713] p-2 shadow-xl shadow-[#141713]/20 border-4 border-[#141713]">
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
                </div>

                {/* Floating badge - Points */}
                <div className="absolute -left-3 top-1/4 rounded-xl bg-white p-3 shadow-lg shadow-[#141713]/10 border border-[#E8EBE4]">
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
                </div>

                {/* Floating badge - Local spot */}
                <div className="absolute -right-2 top-8 rounded-xl bg-[#CFFF5E] px-3 py-2 shadow-lg shadow-[#CFFF5E]/30">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3 w-3 text-[#141713]" />
                    <span className="text-[10px] font-bold text-[#141713]">
                      New Local Spot!
                    </span>
                  </div>
                </div>

                {/* Floating reward badge */}
                <div className="absolute left-1/4 -bottom-2 rounded-lg bg-white px-3 py-2 shadow-md border border-[#E8EBE4]">
                  <div className="flex items-center gap-1.5">
                    <Gift className="h-3 w-3 text-[#9ED600]" />
                    <span className="text-[9px] font-medium text-[#141713]">
                      Reward unlocked
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
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
