"use client";

import React from "react";

const HEADER_HEIGHT = 64; // Slightly larger for breatheability

const items = [
  {
    stat: "02",
    label: "Countries",
    content: (
      <div className="space-y-8">
        <div className="flex gap-4 mb-4">
          <span className="text-4xl">🇳🇬</span>
          <span className="text-4xl">🇬🇧</span>
        </div>
        <p className="text-[28px] leading-[1.4] text-black font-medium font-heading tracking-tight">
          Born and raised in Lagos, Nigeria, I&apos;ve spent the last few years
          establishing my life and career in the UK. Currently, I work as an
          independent consultant helping startups scale their operations and
          communities.
        </p>
        <p className="text-[28px] leading-[1.4] text-black font-medium font-heading tracking-tight">
          When I&apos;m not building systems for work, you&apos;ll find me
          documenting new workflows for fun, or designing aesthetic templates
          for the community.
        </p>
      </div>
    ),
  },
  {
    stat: "5+",
    label: "Years in the industry",
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-[20px] font-heading font-medium">
        <div className="space-y-4 text-[#999] font-light tabular-nums">
          <p>2020 - 2022</p>
          <p>2022 - 2023</p>
          <p>2023 - 2024</p>
          <p>2024 - 2025</p>
          <p>2025 - Present</p>
        </div>
        <div className="space-y-4 text-black">
          <p>Startup Lab</p>
          <p>Growth Circle</p>
          <p>DevDAO Africa</p>
          <p>ApeX Ventures</p>
          <p>Freelance</p>
        </div>
        <div className="space-y-4 text-[#999] font-light">
          <p>Ops Associate</p>
          <p>Community Manager</p>
          <p>Head of Community</p>
          <p>Operations Lead</p>
          <p>Operations Partner</p>
        </div>
      </div>
    ),
  },
  {
    stat: "50+",
    label: "Collaborations",
    content: (
      <div className="space-y-8">
        <p className="text-[28px] leading-[1.4] text-black font-medium font-heading tracking-tight">
          I team up with companies, big and small, spanning all sorts of
          industries, each redefining how we live, work, and interact with the
          world.
        </p>
        <p className="text-[28px] leading-[1.4] text-black font-medium font-heading tracking-tight">
          Whether it&apos;s helping startups find their voice or keeping
          established brands relevant, my role is to{" "}
          <span className="italic">
            align every aspect of their presence with who they are
          </span>
          —through strategy, design, and storytelling.
        </p>
      </div>
    ),
  },
  {
    stat: "10K+",
    label: "Hours invested",
    content: (
      <div className="flex flex-wrap gap-x-8 gap-y-4 text-[22px] text-[#888] font-medium font-heading uppercase tracking-widest">
        <span>Systems</span>
        <span>Automation</span>
        <span>Design</span>
        <span>Technical</span>
        <span>Community</span>
        <span>Workflow</span>
        <span>Strategy</span>
      </div>
    ),
  },
];

export default function BackgroundSection() {
  return (
    <section className="relative bg-[#FAFAFA]">
      {/* Intro section */}
      <div className="px-6 sm:px-12 md:px-24 pt-32 pb-20">
        <h2 className="text-[2.5rem] leading-[1.1] font-heading font-light tracking-tighter text-[#171717] sm:text-6xl lg:text-7xl">
          If you&apos;re still scrolling, here&apos;s{" "}
          <br className="hidden md:block" /> my background
        </h2>
      </div>

      <div className="relative">
        {items.map((item, i) => {
          return (
            <div
              key={item.label}
              className="sticky top-0 w-full min-h-screen pointer-events-none"
              style={{
                zIndex: (i + 1) * 10,
              }}
            >
              {/* The transparent spacer allows stacked headers from previous items to show through */}
              <div
                className="w-full bg-transparent"
                style={{ height: i * HEADER_HEIGHT }}
              />

              {/* The opaque card layer */}
              <div className="pointer-events-auto bg-[#FAFAFA] border-t border-zinc-200 shadow-[0_-20px_50px_rgba(0,0,0,0.02)] min-h-screen">
                {/* Header Bar */}
                <div className="h-[64px] flex items-center px-6 sm:px-12 md:px-24 border-b border-zinc-100">
                  <div className="flex items-center gap-4">
                    <span className="bg-[#171717] text-white text-[12px] font-bold px-3 py-1 rounded-full tabular-nums">
                      {item.stat}
                    </span>
                    <span className="text-[17px] font-semibold tracking-tight text-[#171717] uppercase">
                      {item.label}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="px-6 sm:px-12 md:px-24 pt-24 pb-32">
                  <div className="max-w-4xl">
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Spacer so last sticky item has scroll room and everything exits together */}
        <div className="h-screen" />
      </div>
    </section>
  );
}
