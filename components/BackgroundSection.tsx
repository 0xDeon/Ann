"use client";

import { useState, useEffect } from "react";

function useHeaderHeight() {
  const [height, setHeight] = useState(150);
  useEffect(() => {
    const update = () => setHeight(window.innerWidth < 640 ? 60 : 150);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return height;
}

const items = [
  {
    stat: "01",
    label: "A bit about me",
    content: (
      <div className="space-y-8">
        <div className="flex gap-4 mb-4">
          <span className="text-4xl">🇳🇬</span>
          <span className="text-4xl">🇬🇧</span>
        </div>
        <p className="text-[28px] leading-[1.4] text-black font-medium font-heading tracking-tight">
          An Executive Operations Partner with a growing portfolio spanning CRM
          builds, workflow automation, and business systems — who crochets, bakes
          on a Tuesday with no occasion and no apology, has read all 14 Brandon
          Sanderson books, and will absolutely argue with you about the Trojan
          War.
        </p>
        <p className="text-[28px] leading-[1.4] text-black font-medium font-heading tracking-tight">
          Zeus handed a golden apple situation to a mortal man and walked away.
          The goddess of discord did exactly what her name said. Nobody should
          have been surprised. My younger sister is obsessed with me and I have
          done nothing to discourage this.
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
    label: "Projects & counting",
    content: (
      <div className="space-y-8">
        <p className="text-[28px] leading-[1.4] text-black font-medium font-heading tracking-tight">
          My journey to this point has been defined by one thing — a refusal to
          be boxed in. Every time someone handed me a label that felt too small,
          I kept moving. Constantly learning. Constantly adapting. Finding the
          edges of what I know and pushing past them.
        </p>
        <p className="text-[28px] leading-[1.4] text-black font-medium font-heading tracking-tight">
          I will complain that I do not want to be the chairperson. I will say
          this with full conviction. And then I will turn around and naturally
          end up leading the room, coordinating the project, making sure every
          piece lands exactly where it should.{" "}
        </p>
      </div>
    ),
  },
  {
    stat: "10K+",
    label: "What I'm here for",
    content: (
      <div className="space-y-8">
        <p className="text-[28px] leading-[1.4] text-black font-medium font-heading tracking-tight">
          I build for founders who deserve to have the back end of their business
          match the vision they are building toward. Nothing falling through.
          Everything running. Someone watching it so they do not have to.
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4 text-[22px] tracking-wide">
          <span>CRM Builds</span>
          <span>Workflow Automation</span>
          <span>Business Systems</span>
          <span>Community Ops</span>
          <span>Founder Support</span>
          <span>Design Systems</span>
        </div>
      </div>
    ),
  },
];

export default function BackgroundSection() {
  const HEADER_HEIGHT = useHeaderHeight();
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
              className="sticky top-0 w-full pointer-events-none"
              style={{
                zIndex: (i + 1) * 10,
                minHeight: `calc(100vh + ${(items.length - 1) * HEADER_HEIGHT}px)`,
              }}
            >
              {/* The transparent spacer allows stacked headers from previous items to show through */}
              <div
                className="w-full bg-transparent"
                style={{ height: i * HEADER_HEIGHT }}
              />

              {/* The opaque card layer */}
              <div className="pointer-events-auto bg-[#FAFAFA] border-t border-zinc-200 min-h-screen">
                {/* Header Bar */}
                <div className="h-[52px] sm:h-[88px] flex items-center px-6 sm:px-12 md:px-24 border-zinc-100">
                  <div className="flex items-center gap-2 sm:gap-4">
                    <span className="bg-[#4A1942] text-white text-[13px] sm:text-[20px] font-bold font-heading px-3 sm:px-4 py-1 rounded-full tabular-nums">
                      {item.stat}
                    </span>
                    <span className="text-[18px] sm:text-[30px] tracking-tight text-[#171717] font-heading">
                      {item.label}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="px-6 sm:px-12 md:px-24 pt-10 pb-16 sm:pt-24 sm:pb-32">
                  <div className="max-w-3xl ml-auto">
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}
