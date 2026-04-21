"use client";

import { useState } from "react";
import NavShell from "@/components/NavShell";
import ContactFormSection from "@/components/ContactFormSection";
import MagneticButton from "@/components/MagneticButton";
import { motion, AnimatePresence } from "framer-motion";

const experience = [
  {
    year: "2025 — now",
    role: "Operations Partner",
    company: "Siren Studios",
    tags: ["Retainer", "Ops", "Email", "Trello"],
    body: "Came in with a workshop that had been planned for months and never happened. Got it launched — copy, emails, promotions, bookings. Then stayed on to run the backend: Trello video production pipeline, multi-board operations system, inbox triage, calendar, and founder follow-through on the plans that kept getting postponed.",
  },
  {
    year: "2026",
    role: "Dubsado Specialist",
    company: "Heritage Custom Cakes",
    tags: ["Dubsado", "CRM", "Forms", "Contracts"],
    body: "Full Dubsado workspace build for a custom cake studio. Enquiry-to-Completion flow covering email, proposal, contract and invoice. Branded forms with smart fields. A canned email library in the founder's voice. Delivered with documentation and a walkthrough so Clara doesn't touch a single thing between inquiry and confirmed booking.",
  },
  {
    year: "2026",
    role: "Email Campaign Build",
    company: "The Ops Desk",
    tags: ["HubSpot", "Copy", "Sequence"],
    body: "Conceived, wrote and shipped a three-email welcome sequence for a lead-magnet launch. Strategy, copy, subject lines, preview text. Full HubSpot build — automation triggers, list segmentation, send logic. Post-send metric review on click-to-send, form submissions and revenue per email.",
  },
  {
    year: "2026",
    role: "Dubsado Systems Build",
    company: "Persona Coaching",
    tags: ["Dubsado", "Coaching CRM", "Workflows"],
    body: "Built a full coaching CRM inside Dubsado. What was scoped as one workflow became three after testing — onboarding, offboarding, and per-session. Scheduler integration, paid-session triggers, prep emails, feedback capture, project close.",
  },
];

type Tool = { name: string; slug?: string; color?: string };

const tools: Tool[] = [
  { name: "HubSpot", slug: "hubspot", color: "FF7A59" },
  { name: "Zapier", slug: "zapier", color: "FF4F00" },
  { name: "Make", slug: "make", color: "6D00CC" },
  { name: "Google Workspace", slug: "google", color: "4285F4" },
  { name: "Google Drive", slug: "googledrive", color: "1FA463" },
  { name: "Google Docs", slug: "googledocs", color: "4285F4" },
  { name: "Trello", slug: "trello", color: "0052CC" },
  { name: "Notion", slug: "notion", color: "000000" },
  { name: "Airtable", slug: "airtable", color: "18BFFF" },
  { name: "ClickUp", slug: "clickup", color: "7B68EE" },
  { name: "Asana", slug: "asana", color: "F06A6A" },
  { name: "Slack", slug: "slack", color: "4A154B" },
  { name: "Gmail", slug: "gmail", color: "EA4335" },
  { name: "Google Calendar", slug: "googlecalendar", color: "4285F4" },
  { name: "Calendly", slug: "calendly", color: "006BFF" },
  { name: "Mailchimp", slug: "mailchimp", color: "FFE01B" },
  { name: "Stripe", slug: "stripe", color: "635BFF" },
  { name: "AWeber", slug: "aweber", color: "2262AC" },
  { name: "Canva", slug: "canva", color: "00C4CC" },
  { name: "Omnisend", slug: "omnisend", color: "3333FF" },
  { name: "Shopify", slug: "shopify", color: "7AB55C" },
  { name: "Eventbrite", slug: "eventbrite", color: "F05537" },
  { name: "Intercom", slug: "intercom", color: "1F8DED" },
  { name: "StreamYard", slug: "streamyard", color: "EB3C00" },
  { name: "YouTube Studio", slug: "youtubestudio", color: "FF0000" },
  { name: "YouTube", slug: "youtube", color: "FF0000" },
  { name: "Dubsado" },
  { name: "GoHighLevel" },
  { name: "Acuity" },
  { name: "Flodesk" },
];

const skillRowTwo = [
  "Strategy & copy",
  "Sequence automation",
  "HTML email",
  "Inbox & calendar",
  "Meeting prep",
  "SOP writing",
  "Funnel setup",
  "Basic ads manager",
  "Zoom & webinars",
  "Scope management",
  "Multi-tool workflows",
];

const principles = [
  {
    n: "01",
    t: "I keep things within scope.",
    b: "If something falls outside what we agreed, I'll tell you. You won't find your retainer buried in scope creep you never approved.",
  },
  {
    n: "02",
    t: "I read between the lines.",
    b: "You often don't need to name the operational gap. I see it before you do. That's part of the job.",
  },
  {
    n: "03",
    t: "I stay until the thing is done.",
    b: "Done means the workshop launched, the email sent, the client booked, the calendar invite accepted. I don't clock out before the thing that was supposed to happen has actually happened.",
  },
  {
    n: "04",
    t: "I bring my own tool knowledge.",
    b: "You won't be teaching me how your CRM works. I've already used it, or I'll learn it on my own time — not yours.",
  },
];

function SectionTag({
  label,
  variant = "light",
}: {
  index: string;
  label: string;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-[0.7rem] tracking-[0.18em] ${
        isDark
          ? "bg-[#F9F0F7]/10 text-[#F9F0F7] ring-1 ring-[#F9F0F7]/20"
          : "bg-[#4A1942] text-[#F9F0F7]"
      }`}
    >
      <span
        className={
          isDark
            ? "h-2 w-2 rounded-full bg-[#F9F0F7]/40"
            : "h-1.5 w-1.5 rounded-full bg-[#F9F0F7]/50"
        }
      />
      <span>{label}</span>
    </span>
  );
}

function ExperienceItem({
  job,
  index,
  open,
  onToggle,
}: {
  job: (typeof experience)[number];
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="relative"
    >
      <motion.div
        animate={{
          backgroundColor: open
            ? "rgba(74, 25, 66, 0.04)"
            : "rgba(74, 25, 66, 0)",
        }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl"
      >
        <motion.span
          aria-hidden
          initial={false}
          animate={{ scaleY: open ? 1 : 0 }}
          transition={{
            duration: 0.5,
            ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
          }}
          className="absolute left-0 top-0 h-full w-0.75 origin-top bg-[#4A1942]"
        />

        <button
          onClick={onToggle}
          className="group relative flex w-full items-center justify-between gap-6 px-6 py-8 text-left sm:px-10 sm:py-10"
        >
          <div className="flex items-baseline gap-6 sm:gap-10">
            <span className="font-mono text-xs text-[#4A1942]/50 sm:text-sm">
              0{index + 1}
            </span>
            <motion.div
              animate={{ x: open ? 8 : 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <h3 className="text-2xl font-heading font-medium tracking-tight text-[#171717] transition-colors group-hover:text-[#4A1942] sm:text-4xl">
                {job.role}
              </h3>
              <p className="mt-1 text-sm text-[#4A1942] sm:text-base">
                {job.company}
              </p>
            </motion.div>
          </div>

          <div className="flex items-center gap-5">
            <span className="hidden rounded-full bg-[#4A1942]/10 px-3 py-1 font-mono text-[0.7rem] text-[#4A1942] sm:inline">
              {job.year}
            </span>
            <motion.span
              animate={{
                rotate: open ? 45 : 0,
                backgroundColor: open ? "#4A1942" : "rgba(255,255,255,0)",
                color: open ? "#F9F0F7" : "#4A1942",
                borderColor: open ? "#4A1942" : "rgb(212 212 216)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full border group-hover:border-[#4A1942]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </motion.span>
          </div>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.215, 0.61, 0.355, 1] as [
                  number,
                  number,
                  number,
                  number,
                ],
              }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ y: 12 }}
                animate={{ y: 0 }}
                exit={{ y: 12 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-6 px-6 pb-12 sm:px-10 sm:pl-26"
              >
                <p className="max-w-2xl text-lg font-light leading-relaxed text-[#555]">
                  {job.body}
                </p>
                <div className="flex flex-row flex-wrap items-center gap-2">
                  {job.tags.map((t) => (
                    <span
                      key={t}
                      className="whitespace-nowrap rounded-full bg-[#4A1942] px-3 py-1 text-xs font-medium text-[#F9F0F7]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="mx-6 h-px bg-zinc-200 sm:mx-10" />
    </motion.div>
  );
}

function ToolBadge({ tool }: { tool: Tool }) {
  const [errored, setErrored] = useState(false);
  const showLetter = !tool.slug || errored;
  return (
    <div className="flex h-24 flex-shrink-0 items-center gap-5 rounded-2xl border border-zinc-200 bg-white px-7 shadow-sm transition-all duration-500 hover:border-[#4A1942]/40 hover:shadow-md sm:h-28 sm:px-9">
      {showLetter ? (
        <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-[#4A1942] font-mono text-base font-semibold text-[#F9F0F7] sm:h-12 sm:w-12 sm:text-lg">
          {tool.name.charAt(0)}
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://cdn.simpleicons.org/${tool.slug}/${tool.color ?? "171717"}`}
          alt={tool.name}
          width={48}
          height={48}
          onError={() => setErrored(true)}
          className="h-10 w-10 flex-shrink-0 object-contain sm:h-12 sm:w-12"
        />
      )}
      <span className="whitespace-nowrap text-xl font-heading font-light text-[#171717] sm:text-2xl">
        {tool.name}
      </span>
    </div>
  );
}

function ToolsMarquee() {
  return (
    <div className="group relative overflow-hidden py-4">
      <div className="flex w-max gap-8 animate-marquee-slow group-hover:[animation-duration:180s]">
        {[...tools, ...tools].map((tool, i) => (
          <ToolBadge key={`${tool.name}-${i}`} tool={tool} />
        ))}
      </div>
    </div>
  );
}

function SkillMarqueeRow({ items }: { items: string[] }) {
  return (
    <div className="group relative overflow-hidden py-4">
      <div className="flex w-max gap-16 animate-marquee-reverse group-hover:[animation-duration:200s]">
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex flex-shrink-0 items-center gap-16 text-4xl font-heading font-light text-[#171717] sm:text-6xl"
          >
            <span className="whitespace-nowrap transition-colors duration-500 hover:text-[#4A1942]">
              {item}
            </span>
            <span className="h-2 w-2 flex-shrink-0 rounded-full bg-[#4A1942]/40" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ResumePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="relative min-h-screen w-full bg-white selection:bg-[#4A1942] selection:text-white">
      <NavShell>
        {/* Hero */}
        <section className="relative flex min-h-[calc(100vh-8rem)] items-center justify-center px-6 pb-20 sm:px-12">
          <div className="relative z-10 w-full max-w-400 text-center">
            <h1 className="font-heading font-medium tracking-tight text-[#171717] text-[3.75rem] leading-[0.9] sm:text-[7rem] lg:text-[6rem] xl:text-[8rem]">
              {[
                "I'm Ann.",
                "I handle operations that keep your business moving.",
              ].map((line, i) => (
                <motion.span
                  key={line}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.2 + i * 0.12,
                    ease: [0.215, 0.61, 0.355, 1] as [
                      number,
                      number,
                      number,
                      number,
                    ],
                  }}
                  className="block"
                >
                  {i === 1 ? (
                    <>
                      I handle{" "}
                      <span className="text-[#4A1942]">operations</span> that
                      keep your business moving.
                    </>
                  ) : (
                    line
                  )}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.8 }}
              className="mx-auto mt-12 max-w-4xl text-lg font-light leading-relaxed text-[#555] sm:text-xl"
            >
              From systems and workflows to launches and day-to-day operations,
              I support founders by managing the moving parts so launches happen
              on time, systems stay organized, and your business runs without
              constant oversight.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1 }}
              className="mt-14 flex flex-col items-center gap-6"
            >
              <MagneticButton label="Download the résumé" />
            </motion.div>
          </div>
        </section>
      </NavShell>

      {/* Experience — accordion */}
      <section
        id="experience"
        className="px-6 py-28 sm:px-12 md:px-16 lg:px-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <SectionTag index="01" label="experience" />
          <h2 className="mt-5 max-w-xl text-4xl font-heading font-medium tracking-tight text-[#171717] sm:text-5xl">
            Where the plans actually landed.
          </h2>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          {experience.map((job, i) => (
            <ExperienceItem
              key={job.company + i}
              job={job}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </section>

      {/* Skills — marquee */}
      <section className="relative overflow-hidden py-28 bg-[#FAFAFA]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 px-6 sm:px-12 md:px-24"
        >
          <SectionTag index="02" label="tools" />
          <h2 className="mt-5 max-w-2xl text-4xl font-heading font-medium tracking-tight text-[#171717] sm:text-5xl">
            The tools I don&apos;t need explained.
          </h2>
          <p className="mt-6 max-w-xl text-base font-light text-[#666]">
            Hover to slow things down.
          </p>
        </motion.div>

        <ToolsMarquee />
        <SkillMarqueeRow items={skillRowTwo} />
      </section>

      {/* Principles */}
      <section className="px-6 py-28 sm:px-12 md:px-16 lg:px-24 bg-[#4A1942] text-[#F9F0F7]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-3xl"
        >
          <SectionTag index="03" label="how i work" variant="dark" />
          <h2 className="mt-5 text-4xl font-heading font-medium tracking-tight sm:text-5xl">
            Four things that stay true on every project.
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          {principles.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-[#F9F0F7]/10 bg-[#2C0D28]/40 p-10 transition-colors hover:bg-[#2C0D28]/70"
            >
              <div className="relative z-10">
                <p className="mb-8 font-mono text-xs text-[#F9F0F7]/40">
                  {p.n}
                </p>
                <h3 className="mb-4 text-2xl font-heading font-medium sm:text-3xl">
                  {p.t}
                </h3>
                <p className="max-w-md text-base font-light leading-relaxed text-[#F9F0F7]/70">
                  {p.b}
                </p>
              </div>
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-[#F9F0F7]/5 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA with magnetic button */}
      <section className="px-6 py-32 sm:px-12 md:px-24">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-heading font-medium tracking-tight text-[#171717] sm:text-6xl"
          >
            Want the PDF?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mx-auto mt-6 max-w-xl text-lg font-light text-[#666]"
          >
            A print-friendly version with everything you just read, plus the
            boring stuff I left off the page.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 flex justify-center"
          >
            <MagneticButton label="Download the résumé" />
          </motion.div>
        </div>
      </section>

      <ContactFormSection />
    </main>
  );
}
