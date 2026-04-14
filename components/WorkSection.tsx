"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


type Category = "All" | "Systems Build" | "Email Campaigns" | "Operations" | "Content" | "Volunteer" | "Videos";

interface Project {
  title: string;
  year: string;
  description: string;
  categories: Category[];
  aspect: string;
  image: string;
  tags?: string[];
  link?: string;
  liveSite?: string;
}

const projects: Project[] = [
  {
    title: "Heritage Custom Cakes — Dubsado Build",
    year: "2026",
    description:
      "Full Dubsado workspace build for a custom cake studio. Job workflows, canned emails, proposal forms, and contracts — Clara doesn't touch a single thing between inquiry and booking confirmed.",
    categories: ["Systems Build"],
    aspect: "aspect-square",
    image: "/Heritage workflow .png",
    tags: ["Dubsado", "CRM", "Automation"],
    link: "#",
  },
  {
    title: "Siren Studios — Workshop Email Campaign",
    year: "2026",
    description:
      "Two-email sequence for a photography studio launching a lighting workshop. Wrote the copy, coded the HTML, and pushed it live in the studio's voice — the workshop finally launched.",
    categories: ["Email Campaigns"],
    aspect: "aspect-[4/3]",
    image: "/Safari (Catalina) - Light.png",
    tags: ["Email Copy", "HTML", "AWeber"],
    link: "#",
  },
  {
    title: "The Ops Desk — Welcome Sequence",
    year: "2026",
    description:
      "Three-email welcome sequence built on HubSpot for a new lead magnet. Subject line, preview, body copy and automation — all in the founder's voice, ready to send.",
    categories: ["Email Campaigns"],
    aspect: "aspect-[10/13]",
    image: "/Safari (Catalina) - Light (1).png",
    tags: ["HubSpot", "Email Sequence", "Copy"],
    link: "#",
  },
  {
    title: "Heritage Dubsado — Flow Template",
    year: "2026",
    description:
      "The full Enquiry-to-Completion flow template inside Dubsado — six steps, automated proposals, invoicing triggers, and confirmation emails. Built once, runs every inquiry.",
    categories: ["Systems Build"],
    aspect: "aspect-[16/10]",
    image: "/Screenshot 2026-03-04 at 12.53.34 am.png",
    tags: ["Dubsado", "Workflows"],
    link: "#",
  },
  {
    title: "Heritage Proposal System",
    year: "2026",
    description:
      "Auto-generated custom cake proposals inside Dubsado — branded forms, smart fields, and package selectors that trigger contracts and invoices on acceptance.",
    categories: ["Systems Build"],
    aspect: "aspect-[4/3]",
    image: "/Screenshot 2026-03-03 at 11.03.33 pm.png",
    tags: ["Dubsado", "Forms", "Proposals"],
    link: "#",
  },
  {
    title: "Ops Desk — HubSpot Email Build",
    year: "2026",
    description:
      "Designed and shipped the first of a three-email welcome series inside HubSpot — showing range across ESPs and comfort with enterprise tools.",
    categories: ["Email Campaigns"],
    aspect: "aspect-[4/3]",
    image: "/Screenshot 2026-03-03 at 9.27.02 pm.png",
    tags: ["HubSpot", "Email Marketing"],
    link: "#",
  },
  {
    title: "Siren Studios — Video Production Ops",
    year: "2026",
    description:
      "Trello-based video production pipeline for a photography studio — Shot, 1st Draft, 2nd Draft, Posted. Nothing falls through, every reel ships.",
    categories: ["Operations"],
    aspect: "aspect-[16/10]",
    image: "/Screenshot 2026-03-16 at 1.58.31 am.png",
    tags: ["Trello", "Production Ops"],
    link: "#",
  },
  {
    title: "Siren Studios — Operations Board",
    year: "2026",
    description:
      "Multi-board Trello system running studio operations — priority tracking, campaign launches, VA task delegation, and weekly Gemini meeting notes.",
    categories: ["Operations"],
    aspect: "aspect-[16/10]",
    image: "/Screenshot 2026-03-16 at 2.00.44 am.png",
    tags: ["Trello", "Project Mgmt"],
    link: "#",
  },
  {
    title: "Your Open Rate Is Lying To You",
    year: "2026",
    description:
      "LinkedIn editorial on why open rates are broken — Apple Mail pre-fetches, corporate scanners, proxy servers — and the metrics that actually tell the story.",
    categories: ["Content"],
    aspect: "aspect-square",
    image: "/Open rates.png",
    tags: ["LinkedIn", "Email Marketing"],
    link: "#",
  },
  {
    title: "One Workflow Became Three",
    year: "2026",
    description:
      "LinkedIn breakdown of building a full coaching CRM — what actually happens when you stop assuming and start testing. Onboarding, offboarding, and per-session flows.",
    categories: ["Content"],
    aspect: "aspect-square",
    image: "/three workflows.png",
    tags: ["Dubsado", "LinkedIn"],
    link: "#",
  },
  {
    title: "7:12am. Couldn't Sleep.",
    year: "2026",
    description:
      "Short-form LinkedIn content on why people stop opening your emails — value first, promotions later. Part of an ongoing editorial series on email marketing.",
    categories: ["Content"],
    aspect: "aspect-square",
    image: "/7-12am post.png",
    tags: ["LinkedIn", "Editorial"],
    link: "#",
  },
  {
    title: "Feed a Child",
    year: "2024",
    description:
      "An NGO initiative created to feed children in under-resourced communities. Coordinated logistics, volunteers, and outreach.",
    categories: ["Volunteer"],
    aspect: "aspect-[3/2]",
    image: "",
    tags: ["Community", "Outreach"],
    link: "#",
  },
  {
    title: "Project Breakdown",
    year: "2024",
    description:
      "A detailed walkthrough of my operational design process and system architecture for high-growth teams.",
    categories: ["Videos"],
    aspect: "aspect-video",
    image: "https://img.youtube.com/vi/lXcdeRIbA18/maxresdefault.jpg",
    tags: ["Operations", "Tutorial"],
    link: "https://youtu.be/lXcdeRIbA18?si=ZmZa1rvfeSTfn3kH",
  },
  {
    title: "System Thinking",
    year: "2024",
    description:
      "Exploring the fundamentals of building scalable systems for creative businesses and founders.",
    categories: ["Videos"],
    aspect: "aspect-video",
    image: "https://img.youtube.com/vi/QoMcUnWa_Co/maxresdefault.jpg",
    tags: ["Systems", "Strategy"],
    link: "https://youtu.be/QoMcUnWa_Co?si=pnjfoISTxhybitOb",
  },
  {
    title: "The Ann Method",
    year: "2024",
    description:
      "My personal approach to managing complex community operational pipelines without friction.",
    categories: ["Videos"],
    aspect: "aspect-video",
    image: "https://img.youtube.com/vi/PiBYujKfv_Q/maxresdefault.jpg",
    tags: ["Community", "Ops"],
    link: "https://youtu.be/PiBYujKfv_Q?si=PnxexeYQzY_Ykrkd",
  },
];

const categories: { label: Category; count: number }[] = [
  { label: "All", count: projects.length },
  {
    label: "Systems Build",
    count: projects.filter((p) => p.categories.includes("Systems Build")).length,
  },
  {
    label: "Email Campaigns",
    count: projects.filter((p) => p.categories.includes("Email Campaigns")).length,
  },
  {
    label: "Operations",
    count: projects.filter((p) => p.categories.includes("Operations")).length,
  },
  {
    label: "Content",
    count: projects.filter((p) => p.categories.includes("Content")).length,
  },
  {
    label: "Volunteer",
    count: projects.filter((p) => p.categories.includes("Volunteer")).length,
  },
  {
    label: "Videos",
    count: projects.filter((p) => p.categories.includes("Videos")).length,
  },
];

const INITIAL_ALL_COUNT = 6;

export default function WorkSection() {
  const [active, setActive] = useState<Category>("All");
  const [showAll, setShowAll] = useState(false);

  const baseFiltered =
    active === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(active));

  const isAllCollapsed = active === "All" && !showAll && baseFiltered.length > INITIAL_ALL_COUNT;
  const filtered = isAllCollapsed ? baseFiltered.slice(0, INITIAL_ALL_COUNT) : baseFiltered;

  const col1 = filtered.filter((_, i) => i % 3 === 0);
  const col2 = filtered.filter((_, i) => i % 3 === 1);
  const col3 = filtered.filter((_, i) => i % 3 === 2);

  const columnData = [col1, col2, col3];

  const handleTabClick = (label: Category) => {
    setActive(label);
    setShowAll(false);
  };

  return (
    <section className="w-full px-6 py-24 sm:px-12 md:px-16 lg:px-24">
      <div className="w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-5xl font-heading font-medium tracking-tight text-[#171717] sm:text-7xl lg:text-5xl">
            Selected Work
          </h2>
          <p className="mt-6 max-w-2xl text-xl font-light text-[#666]">
            Systems builds, email campaigns, and the operational backbones that turn
            founders&apos; plans into things that actually happen.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="mb-16 flex flex-wrap items-center gap-x-8 gap-y-4 border-b border-zinc-100 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => handleTabClick(cat.label)}
              className={`relative flex items-baseline gap-2 text-base font-medium tracking-tight transition-all ${
                active === cat.label
                  ? "text-[#171717]"
                  : "text-zinc-400 hover:text-[#171717]"
              }`}
            >
              {cat.label}
              <span
                className={`text-xs tabular-nums ${
                  active === cat.label ? "text-[#4A1942]" : "text-zinc-300"
                }`}
              >
                {cat.count}
              </span>
              {active === cat.label && (
                <motion.div
                  layoutId="activeTabWork"
                  className="absolute -bottom-6 left-0 right-0 h-[3px] bg-[#4A1942]"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Project Grid - Aja Nwachuku Style 3-Column Flex */}
        <div className="flex flex-col gap-8 md:flex-row">
          {columnData.map((col, colIndex) => (
            <div key={colIndex} className="flex flex-1 flex-col gap-12">
              <AnimatePresence mode="popLayout">
                {col.map((project) => (
                  <motion.article
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
                    className="group flex flex-col"
                  >
                    <div
                      className={`relative mb-6 ${project.aspect} w-full overflow-hidden rounded-2xl bg-[#F8F8F8] shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:bg-zinc-200`}
                    />

                    <div className="flex flex-col gap-3">
                      <div className="flex items-baseline justify-between transition-transform duration-500 group-hover:translate-x-1">
                        <h3 className="text-2xl font-heading font-semibold tracking-tight text-[#171717]">
                          {project.title}
                        </h3>
                        <span className="text-sm font-medium tabular-nums text-zinc-400">
                          {project.year}
                        </span>
                      </div>

                      <p className="text-lg leading-relaxed text-[#555] opacity-80 transition-opacity duration-500 group-hover:opacity-100">
                        {project.description}
                      </p>

                      {/* Tags */}
                      {project.tags && (
                        <div className="flex flex-wrap gap-2 pt-1">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-zinc-50 border border-zinc-100 px-3 py-1 text-xs font-medium text-[#171717] opacity-60"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Links */}
                      <div className="mt-4 flex items-center gap-6">
                        <a
                          href="#"
                          className="group/link flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#171717]"
                        >
                          Case Study
                          <svg
                            className="transition-transform duration-300 group-hover/link:translate-x-1"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {active === "All" && baseFiltered.length > INITIAL_ALL_COUNT && (
          <div className="mt-20 flex justify-center">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="group flex items-center gap-3 rounded-full border border-[#4A1942]/20 bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#171717] transition-all hover:bg-[#4A1942] hover:text-white"
            >
              {showAll ? "Show less" : `View more (${baseFiltered.length - INITIAL_ALL_COUNT})`}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>

  );
}
