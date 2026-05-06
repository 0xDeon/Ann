"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Category = "All" | "Systems Build" | "Email Campaigns" | "Operations" | "Content" | "Volunteer" | "Videos";

interface Project {
  title: string;
  year: string;
  description: string;
  categories: Category[];
  image: string;
  tags?: string[];
  link?: string;
  bg: string;
}

const projects: Project[] = [
  {
    title: "Siren Studios — Workshop Email Campaign",
    year: "2026",
    description:
      "Two-email sequence for a photography studio launching a lighting workshop. Wrote the copy, coded the HTML, and pushed it live in the studio's voice — the workshop finally launched.",
    categories: ["Email Campaigns"],
    image: "/feed-a-child.jpg",
    tags: ["Email Copy", "HTML", "AWeber"],
    link: "#",
    bg: "linear-gradient(135deg, #f5f0f4 0%, #ffffff 50%, #f8f4f7 100%)",
  },
  {
    title: "Heritage Proposal System",
    year: "2026",
    description:
      "Auto-generated custom cake proposals inside Dubsado — branded forms, smart fields, and package selectors that trigger contracts and invoices on acceptance.",
    categories: ["Systems Build"],
    image: "/heritage-proposal-system.jpg",
    tags: ["Dubsado", "Forms", "Proposals"],
    link: "#",
    bg: "linear-gradient(150deg, #0a0a0a 0%, #141014 50%, #0d0d0d 100%)",
  },
  {
    title: "Your Open Rate Is Lying To You",
    year: "2026",
    description:
      "LinkedIn editorial on why open rates are broken — Apple Mail pre-fetches, corporate scanners, proxy servers — and the metrics that actually tell the story.",
    categories: ["Content"],
    image: "/Open rates.png",
    tags: ["LinkedIn", "Email Marketing"],
    link: "#",
    bg: "linear-gradient(145deg, #0d0d0d 0%, #141014 100%)",
  },
  {
    title: "Ops Desk — HubSpot Email Build",
    year: "2026",
    description:
      "Designed and shipped the first of a three-email welcome series inside HubSpot — showing range across ESPs and comfort with enterprise tools.",
    categories: ["Email Campaigns"],
    image: "/ops-desk-hubspot.jpg",
    tags: ["HubSpot", "Email Marketing"],
    link: "#",
    bg: "linear-gradient(140deg, #f8f4f7 0%, #ffffff 50%, #f5f0f4 100%)",
  },
  {
    title: "Siren Studios — Operations Board",
    year: "2026",
    description:
      "Multi-board Trello system running studio operations — priority tracking, campaign launches, VA task delegation, and weekly Gemini meeting notes.",
    categories: ["Operations"],
    image: "/siren-video-production.jpg",
    tags: ["Trello", "Project Mgmt"],
    link: "#",
    bg: "linear-gradient(155deg, #f5f0f4 0%, #ffffff 50%, #f8f4f7 100%)",
  },
  {
    title: "7:12am. Couldn't Sleep.",
    year: "2026",
    description:
      "Short-form LinkedIn content on why people stop opening your emails — value first, promotions later. Part of an ongoing editorial series on email marketing.",
    categories: ["Content"],
    image: "/7-12am post.png",
    tags: ["LinkedIn", "Editorial"],
    link: "#",
    bg: "linear-gradient(160deg, #111111 0%, #1a1018 60%, #0d0d0d 100%)",
  },
  {
    title: "Heritage Custom Cakes — Dubsado Build",
    year: "2026",
    description:
      "Full Dubsado workspace build for a custom cake studio. Job workflows, canned emails, proposal forms, and contracts — Clara doesn't touch a single thing between inquiry and booking confirmed.",
    categories: ["Systems Build"],
    image: "/heritage-dubsado-build.jpg",
    tags: ["Dubsado", "CRM", "Automation"],
    link: "#",
    bg: "linear-gradient(145deg, #0d0d0d 0%, #1a1018 50%, #111111 100%)",
  },
  {
    title: "The Ops Desk — Welcome Sequence",
    year: "2026",
    description:
      "Three-email welcome sequence built on HubSpot for a new lead magnet. Subject line, preview, body copy and automation — all in the founder's voice, ready to send.",
    categories: ["Email Campaigns"],
    image: "/ops-desk-welcome.jpg",
    tags: ["HubSpot", "Email Sequence", "Copy"],
    link: "#",
    bg: "linear-gradient(160deg, #111111 0%, #1a1018 40%, #0d0d0d 100%)",
  },
  {
    title: "One Workflow Became Three",
    year: "2026",
    description:
      "LinkedIn breakdown of building a full coaching CRM — what actually happens when you stop assuming and start testing. Onboarding, offboarding, and per-session flows.",
    categories: ["Content"],
    image: "/three workflows.png",
    tags: ["Dubsado", "LinkedIn"],
    link: "#",
    bg: "linear-gradient(135deg, #ffffff 0%, #f5f0f4 50%, #efe8ed 100%)",
  },
  {
    title: "Heritage Dubsado — Flow Template",
    year: "2026",
    description:
      "The full Enquiry-to-Completion flow template inside Dubsado — six steps, automated proposals, invoicing triggers, and confirmation emails. Built once, runs every inquiry.",
    categories: ["Systems Build"],
    image: "/heritage-flow-template.jpg",
    tags: ["Dubsado", "Workflows"],
    link: "#",
    bg: "linear-gradient(135deg, #ffffff 0%, #f5f0f4 50%, #efe8ed 100%)",
  },
  {
    title: "Siren Studios — Video Production Ops",
    year: "2026",
    description:
      "Trello-based video production pipeline for a photography studio — Shot, 1st Draft, 2nd Draft, Posted. Nothing falls through, every reel ships.",
    categories: ["Operations"],
    image: "/siren-operations-board.jpg",
    tags: ["Trello", "Production Ops"],
    link: "#",
    bg: "linear-gradient(135deg, #111111 0%, #0d0d0d 40%, #1a1018 100%)",
  },
  {
    title: "Project Breakdown",
    year: "2024",
    description:
      "A detailed walkthrough of my operational design process and system architecture for high-growth teams.",
    categories: ["Videos"],
    image: "https://img.youtube.com/vi/lXcdeRIbA18/maxresdefault.jpg",
    tags: ["Operations", "Tutorial"],
    link: "https://youtu.be/lXcdeRIbA18?si=ZmZa1rvfeSTfn3kH",
    bg: "linear-gradient(135deg, #0d0d0d 0%, #141014 100%)",
  },
  {
    title: "Feed a Child",
    year: "2024",
    description:
      "An NGO initiative created to feed children in under-resourced communities. Coordinated logistics, volunteers, and outreach.",
    categories: ["Volunteer"],
    image: "/siren-workshop-email.jpg",
    tags: ["Community", "Outreach"],
    link: "#",
    bg: "linear-gradient(145deg, #f8f4f7 0%, #f0e8ef 30%, #f5f0f4 100%)",
  },
  {
    title: "System Thinking",
    year: "2024",
    description:
      "Exploring the fundamentals of building scalable systems for creative businesses and founders.",
    categories: ["Videos"],
    image: "https://img.youtube.com/vi/QoMcUnWa_Co/maxresdefault.jpg",
    tags: ["Systems", "Strategy"],
    link: "https://youtu.be/QoMcUnWa_Co?si=pnjfoISTxhybitOb",
    bg: "linear-gradient(150deg, #ffffff 0%, #f5f0f4 100%)",
  },
  {
    title: "The Ann Method",
    year: "2024",
    description:
      "My personal approach to managing complex community operational pipelines without friction.",
    categories: ["Videos"],
    image: "https://img.youtube.com/vi/PiBYujKfv_Q/maxresdefault.jpg",
    tags: ["Community", "Ops"],
    link: "https://youtu.be/PiBYujKfv_Q?si=PnxexeYQzY_Ykrkd",
    bg: "linear-gradient(140deg, #0d0d0d 0%, #1a1018 50%, #111111 100%)",
  },
];

const categories: { label: Category; count: number }[] = [
  { label: "All", count: projects.length },
  { label: "Systems Build", count: projects.filter((p) => p.categories.includes("Systems Build")).length },
  { label: "Email Campaigns", count: projects.filter((p) => p.categories.includes("Email Campaigns")).length },
  { label: "Operations", count: projects.filter((p) => p.categories.includes("Operations")).length },
  { label: "Content", count: projects.filter((p) => p.categories.includes("Content")).length },
  { label: "Volunteer", count: projects.filter((p) => p.categories.includes("Volunteer")).length },
  { label: "Videos", count: projects.filter((p) => p.categories.includes("Videos")).length },
];

const INITIAL_COUNT = 6;

export default function WorkSection() {
  const [active, setActive] = useState<Category>("All");
  const [showAll, setShowAll] = useState(false);

  const baseFiltered =
    active === "All" ? projects : projects.filter((p) => p.categories.includes(active));

  const collapsed = active === "All" && !showAll && baseFiltered.length > INITIAL_COUNT;
  const filtered = collapsed ? baseFiltered.slice(0, INITIAL_COUNT) : baseFiltered;

  const handleTabClick = (label: Category) => {
    setActive(label);
    setShowAll(false);
  };

  return (
    <section className="w-full px-6 py-24 sm:px-12 md:px-16 lg:px-24">
      <div className="w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-5xl font-heading font-medium tracking-tight text-[#171717] sm:text-7xl lg:text-5xl">
            Selected <span className="">Work</span>
          </h2>
          <p className="mt-6 max-w-2xl text-xl font-light text-[#666]">
            Systems builds, email campaigns, and the operational backbones that turn
            founders&apos; plans into things that actually happen.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 sm:hidden">
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => handleTabClick(cat.label)}
                className={`flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium tracking-tight transition-all ${
                  active === cat.label
                    ? "border-[#4A1942] bg-[#4A1942] text-white"
                    : "border-zinc-200 bg-white text-zinc-500"
                }`}
              >
                {cat.label}
                <span className={`text-[11px] tabular-nums ${active === cat.label ? "text-white/70" : "text-zinc-300"}`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          <div className="hidden sm:flex flex-wrap items-center gap-x-8 gap-y-4 border-b border-zinc-100 pb-6">
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => handleTabClick(cat.label)}
                className={`relative flex items-baseline gap-2 text-base font-medium tracking-tight transition-all ${
                  active === cat.label ? "text-[#171717]" : "text-zinc-400 hover:text-[#171717]"
                }`}
              >
                {cat.label}
                <span className={`text-xs tabular-nums ${active === cat.label ? "text-[#4A1942]" : "text-zinc-300"}`}>
                  {cat.count}
                </span>
                {active === cat.label && (
                  <motion.div
                    layoutId="activeTabWork"
                    className="absolute -bottom-6 left-0 right-0 h-0.75 bg-[#4A1942]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
            className="grid w-full grid-cols-1 gap-x-20 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 max-w-500"
          >
            {filtered.map((project) => (
              <motion.article
                key={project.title}
                layout
                className="group flex flex-col"
              >
                {/* Image — square container, full image visible */}
                <div className="relative w-full aspect-square overflow-hidden">
                  {project.image && (
                    <>
                      <Image
                        src={project.image}
                        alt=""
                        fill
                        aria-hidden
                        className="object-cover scale-110 blur-xl opacity-60"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="mt-5 flex flex-1 flex-col">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-heading text-xl font-medium tracking-tight text-[#171717]">
                      {project.title}
                    </h3>
                    <span className="shrink-0 text-sm tabular-nums text-zinc-400">
                      {project.year}
                    </span>
                  </div>

                  <p className="mt-3 text-base leading-relaxed text-[#666]">
                    {project.description}
                  </p>

                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target={project.link.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group/link mt-4 inline-flex w-fit items-center gap-2 text-sm font-medium text-[#171717] transition-colors hover:text-[#4A1942]"
                    >
                      View Project
                      <svg
                        width="13" height="13" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5"
                        className="transition-transform duration-300 group-hover/link:translate-x-0.5"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View more */}
        {active === "All" && baseFiltered.length > INITIAL_COUNT && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="group flex items-center gap-3 rounded-full border border-[#4A1942]/20 bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#171717] transition-all hover:bg-[#4A1942] hover:text-white"
            >
              {showAll ? "Show less" : `View more (${baseFiltered.length - INITIAL_COUNT})`}
              <svg
                width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="3"
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
