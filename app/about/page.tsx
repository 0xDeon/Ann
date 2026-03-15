"use client";

import Navbar from "@/components/Navbar";
import BackgroundSection from "@/components/BackgroundSection";
import { motion } from "framer-motion";
import Image from "next/image";

const marqueeImages = [
  { src: "/ann1.jpg", width: 1000, height: 720 },  // wide
  { src: "/ann5.jpg", width: 900, height: 650 },   // balanced
  { src: "/ann2.jpg", width: 720, height: 1000 },  // tall
  { src: "/ann3.jpg", width: 1100, height: 700 },  // wide
  { src: "/ann8.jpg", width: 680, height: 960 },   // tall
  { src: "/ann7.jpg", width: 1050, height: 680 },  // wide
  { src: "/ann13.jpg", width: 880, height: 640 },  // balanced
  { src: "/ann4.jpg", width: 700, height: 900 },   // tall
  { src: "/ann6.jpg", width: 950, height: 700 },   // balanced
  { src: "/ann15.jpg", width: 1080, height: 500 }, // wide
  { src: "/ann11.jpg", width: 1150, height: 720 }, // wide
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full bg-white selection:bg-[#4A1942] selection:text-white">
      <Navbar />

      {/* Hero Headline Section */}
      <section className="px-6 pt-32 pb-16 sm:px-12 md:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          className="max-w-[90rem]"
        >
          <h1 className="text-[2.8rem] leading-[1.15] font-heading font-medium tracking-tight text-[#171717] sm:text-6xl lg:text-[4rem]">
            An operations partner who builds{" "}
            <span className="inline-flex items-center gap-1">
              <span className="inline-block w-9 h-9 rounded-lg bg-[#4A1942]/10 p-2 align-middle sm:w-10 sm:h-10">
                <svg viewBox="0 0 24 24" fill="none" stroke="#4A1942" strokeWidth="2" className="w-full h-full"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
              </span>
              {" "}systems that actually run,
            </span>{" "}
            crochets things nobody asked for, bakes on a Tuesday with no occasion, has read every{" "}
            <span className="inline-flex items-center gap-1">
              <span className="inline-block w-9 h-9 rounded-lg bg-[#4A1942]/10 p-2 align-middle sm:w-10 sm:h-10">
                <svg viewBox="0 0 24 24" fill="none" stroke="#4A1942" strokeWidth="2" className="w-full h-full"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg>
              </span>
              {" "}Brandon Sanderson book,
            </span>{" "}
            and has a younger sister who is obsessed with her — she has done nothing to discourage this.
          </h1>
        </motion.div>
      </section>

      {/* Infinite Scrolling Photo Strip */}
      <section className="relative w-full overflow-hidden py-12">
        <div className="flex w-max animate-marquee items-start gap-14">
          {[...marqueeImages, ...marqueeImages].map((img, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 overflow-hidden"
              style={{ width: img.width, height: img.height }}
            >
              <Image
                src={img.src}
                alt={`Ann ${(i % marqueeImages.length) + 1}`}
                fill
                className="object-cover object-top"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Background Section — Scroll-collapsing accordion */}
      <BackgroundSection />


      {/* Specialties remains but integrated or removed? I'll keep it as a secondary detail after the 'Background' block */}
      {/* <section className="px-6 py-28 sm:px-12 md:px-24">
        <div className="mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-4">
            .specialties
          </span>
          <h2 className="text-4xl font-heading font-medium text-[#171717]">The tools of my trade.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-4">
          {[
            "Operational Systems", "Process Automation", "Design Systems",
            "Technical Documentation", "Community Management", "UI/UX Design",
            "Crisis Management", "Workflow Optimization", "Founder Support"
          ].map((skill) => (
            <div key={skill} className="flex items-center gap-3 py-2 border-b border-zinc-100">
              <span className="text-[#4A1942] text-lg">•</span>
              <span className="text-lg font-light text-[#555]">{skill}</span>
            </div>
          ))}
        </div>
      </section> */}

      {/* Contact / CTA Section */}
      {/* <section className="px-6 py-32 sm:px-12 md:px-24 bg-[#FAFAFA]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8FFF0] text-[#00A843] text-xs font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00A843] animate-pulse" />
              Currently Available
            </span>
            <h2 className="text-5xl font-heading font-medium tracking-tight text-[#171717] mb-6 lg:text-6xl">
              Let&apos;s build something that actually happens.
            </h2>
            <p className="text-xl text-[#666] font-light max-w-md">
              Always searching for new problems to solve and big visions to organize.
            </p>
          </div>

          <form className="space-y-10">
            <div>
              <input
                type="text"
                placeholder="Name [or your startup's name]"
                className="w-full bg-transparent border-b border-zinc-200 py-4 text-lg outline-none transition-colors focus:border-[#4A1942] placeholder:text-zinc-300"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="E-mail address"
                className="w-full bg-transparent border-b border-zinc-200 py-4 text-lg outline-none transition-colors focus:border-[#4A1942] placeholder:text-zinc-300"
              />
            </div>
            <div>
              <textarea
                placeholder="What are we building?"
                rows={3}
                className="w-full bg-transparent border-b border-zinc-200 py-4 text-lg outline-none transition-colors focus:border-[#4A1942] resize-none placeholder:text-zinc-300"
              />
            </div>
            <button className="group flex items-center gap-3 text-lg font-medium text-[#171717]">
              Send message
              <span className="w-11 h-11 rounded-full border border-zinc-300 flex items-center justify-center group-hover:bg-[#4A1942] group-hover:border-[#4A1942] group-hover:text-white transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </span>
            </button>
          </form>
        </div>

        <div className="mt-32 pt-10 border-t border-zinc-200 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-zinc-400">&copy; Ann + Antigravity, 2025.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-[#171717] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
            Back to Top
          </button>
          <p className="text-sm text-zinc-400">All rights reserved, all wrongs denied.</p>
        </div>
      </section> */}
    </main>
  );
}
