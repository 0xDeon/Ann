"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects, type Category } from "@/lib/projects";

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
    <section id="work" className="w-full px-6 py-24 sm:px-12 md:px-16 lg:px-24">
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
                <Link href={`/work/${project.slug}`} className="block">
                  {/* Image */}
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
                </Link>

                {/* Content */}
                <div className="mt-5 flex flex-1 flex-col">
                  <div className="flex items-baseline justify-between gap-4">
                    <Link href={`/work/${project.slug}`}>
                      <h3 className="font-heading text-xl font-medium tracking-tight text-[#171717] hover:text-[#4A1942] transition-colors">
                        {project.title}
                      </h3>
                    </Link>
                    <span className="shrink-0 text-sm tabular-nums text-zinc-400">
                      {project.year}
                    </span>
                  </div>

                  <p className="mt-3 text-base leading-relaxed text-[#666]">
                    {project.description}
                  </p>

                  <Link
                    href={`/work/${project.slug}`}
                    className="group/link mt-4 inline-flex w-fit items-center gap-2 text-sm font-medium text-[#171717] transition-colors hover:text-[#4A1942]"
                  >
                    View project
                    <svg
                      width="13" height="13" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5"
                      className="transition-transform duration-300 group-hover/link:translate-x-0.5"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
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
