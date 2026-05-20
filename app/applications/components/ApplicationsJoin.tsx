"use client";

import { useState } from "react";
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

export function ApplicationsJoin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", { name, email });
  };

  return (
    <section id="contact" className="bg-[#FDFEFB] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-[#141713]/10 border border-[#E8EBE4]">
          <div className="grid lg:grid-cols-2">
            {/* Left Column - Visual */}
            <div className="relative bg-linear-to-br from-[#F8FAF4] via-[#FDFEFB] to-[#CFFF5E]/10 p-8 lg:p-12 overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute inset-0 pointer-events-none">
                <svg
                  className="absolute top-0 right-0 w-64 h-64 opacity-20"
                  viewBox="0 0 256 256"
                  fill="none"
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
                </svg>
                <div className="absolute bottom-10 left-10 h-20 w-20 rounded-2xl bg-[#CFFF5E]/10 rotate-12" />
              </div>

              {/* Community illustration */}
              <div className="relative rounded-3xl bg-linear-to-br from-[#CFFF5E]/30 to-[#CFFF5E]/10 p-6 mb-8 border border-[#CFFF5E]/20">
                <div className="grid grid-cols-2 gap-4">
                  {/* Community visual - left side */}
                  <div className="space-y-4">
                    {/* Avatar stack */}
                    <div className="flex -space-x-3">
                      <div className="h-12 w-12 rounded-full bg-linear-to-br from-[#CFFF5E] to-[#9ED600] border-3 border-white flex items-center justify-center shadow-md">
                        <Coffee className="h-5 w-5 text-[#141713]" />
                      </div>
                      <div className="h-12 w-12 rounded-full bg-[#141713] border-3 border-white flex items-center justify-center shadow-md">
                        <ShoppingBag className="h-5 w-5 text-white" />
                      </div>
                      <div className="h-12 w-12 rounded-full bg-linear-to-br from-[#9ED600] to-[#CFFF5E] border-3 border-white flex items-center justify-center shadow-md">
                        <Heart className="h-5 w-5 text-[#141713]" />
                      </div>
                    </div>

                    {/* Local discovery card */}
                    <div className="rounded-xl bg-white p-4 shadow-lg border border-[#E8EBE4]">
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
                    </div>
                  </div>

                  {/* Phone mockup - right side */}
                  <div className="flex items-center justify-center">
                    <div className="w-28 rounded-2xl bg-[#141713] p-2 shadow-xl transform rotate-3">
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
                    </div>
                  </div>
                </div>

                {/* Floating points badge */}
                <div className="absolute -right-3 top-6 rounded-xl bg-linear-to-r from-[#CFFF5E] to-[#9ED600] px-4 py-2 shadow-lg shadow-[#CFFF5E]/30">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-[#141713]" />
                    <span className="text-sm font-bold text-[#141713]">
                      +150 pts
                    </span>
                  </div>
                </div>

                {/* Floating reward badge */}
                <div className="absolute -left-2 bottom-6 rounded-xl bg-white px-3 py-2 shadow-lg border border-[#E8EBE4]">
                  <div className="flex items-center gap-2">
                    <Gift className="h-4 w-4 text-[#9ED600]" />
                    <span className="text-xs font-medium text-[#141713]">
                      Reward ready!
                    </span>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-[#141713] lg:text-4xl">
                Join the
                <br />
                <span className="text-[#9ED600]">TRIBE26 Ecosystem</span>
              </h2>
              <p className="mt-4 text-[#5A6257] leading-relaxed">
                TRIBE26 connects locals with locals. Be part of something
                bigger.
              </p>

              {/* Social proof */}
              <div className="mt-8 flex items-center gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#E8EBE4]">
                <div className="flex -space-x-2">
                  <div className="h-10 w-10 rounded-full bg-linear-to-br from-[#CFFF5E] to-[#9ED600] border-2 border-white shadow-sm" />
                  <div className="h-10 w-10 rounded-full bg-[#141713] border-2 border-white shadow-sm" />
                  <div className="h-10 w-10 rounded-full bg-linear-to-br from-[#9ED600] to-[#CFFF5E] border-2 border-white shadow-sm" />
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
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="p-8 lg:p-12 flex items-center">
              <div className="mx-auto w-full max-w-md">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#CFFF5E]/20 px-4 py-2 text-xs font-semibold text-[#141713] border border-[#CFFF5E]/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#9ED600] animate-pulse" />
                  Start here
                </span>
                <h3 className="mt-6 text-2xl font-bold text-[#141713] lg:text-3xl">
                  Get updates first
                </h3>
                <p className="mt-3 text-[#5A6257] leading-relaxed">
                  Join the list for launch updates, new features, and local
                  reward drops.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
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
                  </div>
                  <div>
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
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-12 bg-[#CFFF5E] text-[#141713] hover:bg-[#bef046] font-semibold text-base shadow-lg shadow-[#CFFF5E]/30 transition-all hover:shadow-xl hover:shadow-[#CFFF5E]/40 hover:-translate-y-0.5 rounded-xl"
                  >
                    Get Started
                  </Button>
                </form>

                <p className="mt-6 text-center text-sm text-[#5A6257]">
                  No spam, ever. Just updates that matter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
