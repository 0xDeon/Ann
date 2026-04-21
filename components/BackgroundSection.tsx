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
    label: "Who I am",
    content: (
      <div className="space-y-8">
        <p className="text-[28px] leading-[1.4] text-black font-medium font-heading tracking-tight">
          I’m an Operations Partner with indepth experience. I work with founders, coaches, and
          creatives who know exactly what they want to build. The vision is
          clear. The clients are there. I build the structure to support it.
        </p>

        <p className="text-[28px] leading-[1.4] text-black font-medium font-heading tracking-tight">
          That’s where I come in. I take what’s already working and build the
          systems behind it. The operations, the admin, the backend that keeps
          everything running smoothly. So instead of everything living in your
          head, your business actually works in real life.
        </p>
      </div>
    ),
  },
  {
    stat: "02",
    label: "What I actually do",
    content: (
      <div className="space-y-10">
        <div className="space-y-4">
          <p className="text-[26px] leading-[1.4] text-black font-medium font-heading tracking-tight">
            I come into a business and build the infrastructure that makes it
            run without the founder having to be present for every step. Client
            onboarding flows, email campaigns, CRM setup, workflow automation,
            scheduler configuration — the operational backbone.
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-[26px] leading-[1.4] text-black font-medium font-heading tracking-tight">
            I stay in the business as an ongoing partner. Inbox management,
            calendar coordination, task tracking, keeping the founder on course
            with their own plans. The regular executive support that keeps
            things moving and nothing falling through.
          </p>
        </div>
      </div>
    ),
  },
  {
    stat: "03",
    label: "How I work",
    content: (
      <div className="space-y-8">
        <p className="text-[28px] leading-[1.4] text-black font-medium font-heading tracking-tight">
          James, a photography studio owner, had a workshop planned for months.
          It had not happened. I came in, kept things within scope, held him
          accountable to his own plan — and the workshop launched. The email
          sequence went out. The promotions posted. The thing that lived in his
          head became a thing that existed in the world.
        </p>
        <div className="space-y-5 pt-2">
          {[
            "I keep things within scope — I'll tell you when something is outside what we agreed",
            "I read between the lines — I see the operational gap before you name it",
            "I stay until the thing is done — not until the hour is up",
            "I bring my own tools knowledge — you don't have to explain what Dubsado is",
          ].map((line) => (
            <p
              key={line}
              className="text-[22px] leading-normal text-[#444] font-heading font-light border-l-2 border-[#4A1942] pl-6"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    ),
  },
  {
    stat: "04",
    label: "The tools",
    content: (
      <div className="space-y-8">
        <p className="text-[28px] leading-[1.4] text-black font-medium font-heading tracking-tight">
          I don&apos;t just set up individual platforms — I connect them.
          Make.com and Zapier let me build automated workflows that pass
          information between tools so nothing requires manual intervention
          between steps. You get a backend that runs itself.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-5 pt-4 text-[20px] font-heading">
          {[
            {
              category: "CRM & Onboarding",
              tools: "Dubsado · HubSpot · GoHighLevel",
            },
            { category: "Scheduling", tools: "Acuity Scheduling" },
            {
              category: "Project Management",
              tools: "ClickUp · Google Workspace",
            },
            {
              category: "Email Marketing",
              tools: "AWeber · HubSpot · GoHighLevel",
            },
            { category: "Workspace & Databases", tools: "Notion · Airtable" },
            { category: "Automation", tools: "Make.com · Zapier" },
          ].map(({ category, tools }) => (
            <div key={category} className="space-y-1">
              <p className="text-[11px] uppercase tracking-widest text-[#4A1942] font-medium">
                {category}
              </p>
              <p className="text-[18px] text-black font-light">{tools}</p>
            </div>
          ))}
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
                  <div className="max-w-3xl ml-auto">{item.content}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
