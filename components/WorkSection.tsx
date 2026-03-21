"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


type Category = "All" | "Operations" | "Design" | "Technical Writing" | "Community Operations & Mgt" | "Volunteer" | "Videos";

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
    title: "Apex Ventures",
    year: "2025",
    description:
      "Built the entire operational backbone for a Web3 startup — from onboarding flows and CRM pipelines to team workflows that scaled with a 4x headcount increase.",
    categories: ["Operations"],
    aspect: "aspect-[10/12]",
    image: "",
    tags: ["Dubsado", "Notion", "Zapier"],
    link: "#",
  },
  {
    title: "Kora Finance",
    year: "2025",
    description:
      "Redesigned the internal knowledge base and created a design system for marketing assets, unifying brand voice across 12 touchpoints.",
    categories: ["Design"],
    aspect: "aspect-[10/14]",
    image: "",
    tags: ["Figma", "Brand Systems"],
    link: "#",
    liveSite: "#",
  },
  {
    title: "DevDAO Africa",
    year: "2024",
    description:
      "Managed a 2,000+ member developer community. Ran weekly Twitter Spaces, coordinated hackathon logistics, and grew engagement by 180%.",
    categories: ["Community Operations & Mgt"],
    aspect: "aspect-square",
    image: "",
    tags: ["Discord", "Twitter Spaces", "Notion"],
    link: "#",
  },
  {
    title: "Paystack Developer Docs",
    year: "2024",
    description:
      "Authored end-to-end API documentation for three new payment endpoints, reducing developer support tickets by 35%.",
    categories: ["Technical Writing"],
    aspect: "aspect-[16/10]",
    image: "",
    tags: ["Markdown", "Postman", "GitBook"],
    link: "#",
    liveSite: "#",
  },
  {
    title: "Project Alpha",
    year: "2024",
    description:
      "Streamlined project management workflows for a high-growth tech team using custom automation and reporting dashboards.",
    categories: ["Operations"],
    aspect: "aspect-[10/13]",
    image: "",
    tags: ["Asana", "Tableau", "Automation"],
    link: "#",
  },
  {
    title: "Community Growth",
    year: "2024",
    description:
      "Scaled a niche creative community from 0 to 5k members in 6 months through strategic engagement and event management.",
    categories: ["Community Operations & Mgt"],
    aspect: "aspect-[3/2]",
    image: "",
    tags: ["Strategic Growth", "Events"],
    link: "#",
  },
  {
    title: "Feed a Child",
    year: "2024",
    description:
      "An NGO created initiative created to feeding children in poor eenvironments",
    categories: ["Volunteer"],
    aspect: "aspect-[3/2]",
    image: "",
    tags: ["Strategic Growth", "Events"],
    link: "#",
  },
  {
    title: "Project Breakdown",
    year: "2024",
    description: "A detailed walkthrough of my operational design process and system architecture for high-growth teams.",
    categories: ["Videos"],
    aspect: "aspect-video",
    image: "https://img.youtube.com/vi/lXcdeRIbA18/maxresdefault.jpg",
    tags: ["Operations", "Tutorial"],
    link: "https://youtu.be/lXcdeRIbA18?si=ZmZa1rvfeSTfn3kH",
  },
  {
    title: "System Thinking",
    year: "2024",
    description: "Exploring the fundamentals of building scalable systems for creative businesses and founders.",
    categories: ["Videos"],
    aspect: "aspect-video",
    image: "https://img.youtube.com/vi/QoMcUnWa_Co/maxresdefault.jpg",
    tags: ["Systems", "Strategy"],
    link: "https://youtu.be/QoMcUnWa_Co?si=pnjfoISTxhybitOb",
  },
  {
    title: "The Ann Method",
    year: "2024",
    description: "My personal approach to managing complex community operational pipelines without friction.",
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
    label: "Operations",
    count: projects.filter((p) => p.categories.includes("Operations")).length,
  },
  {
    label: "Design",
    count: projects.filter((p) => p.categories.includes("Design")).length,
  },
  {
    label: "Technical Writing",
    count: projects.filter((p) => p.categories.includes("Technical Writing")).length,
  },
  {
    label: "Community Operations & Mgt",
    count: projects.filter((p) => p.categories.includes("Community Operations & Mgt")).length,
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

export default function WorkSection() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(active));

  // Distribute into 3 columns
  const col1 = filtered.filter((_, i) => i % 3 === 0);
  const col2 = filtered.filter((_, i) => i % 3 === 1);
  const col3 = filtered.filter((_, i) => i % 3 === 2);

  const columnData = [col1, col2, col3];

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
            A mix of operations systems, design projects, technical writing, and
            community work — all built to make things run better.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="mb-16 flex flex-wrap items-center gap-x-8 gap-y-4 border-b border-zinc-100 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActive(cat.label)}
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
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative mb-6 ${project.aspect} w-full overflow-hidden rounded-2xl bg-[#F8F8F8] shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:bg-zinc-200 block`}
                    >
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold uppercase tracking-widest text-zinc-300 opacity-0 transition-opacity group-hover:opacity-100">
                          Drop Image Here
                        </div>
                      )}
                    </a>

                    {/* Content Block */}
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
      </div>
    </section>

  );
}
