"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax move for the image
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section 
      ref={sectionRef}
      className="relative flex min-h-screen w-full flex-col items-start justify-center px-6 pt-24 pb-12 sm:px-12 md:px-24"
    >
      <div className="max-w-7xl">
        {/* Greeting + Small Image Identifier */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex items-end gap-4"
        >
          <div className="flex gap-8 items-center" style={{ perspective: "1000px" }}>
            <motion.div 
              style={{ y }}
              whileHover={{ rotate: 0, scale: 1.02, y: -5 }}
              initial={{ rotate: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="relative h-28 w-24 overflow-hidden rounded-xl bg-zinc-100 sm:h-72 sm:w-56 shadow-[0_20px_50px_rgba(0,0,0,0.1)] cursor-pointer"
            >
              <Image
                src="/ann1.jpg"
                alt="Ann"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            <div className="flex flex-col font-heading font-light">
              <span className="text-4xl">
                Greeting,
              </span>
              <span className="text-4xl">
                I&apos;m Ann Anidumaka
              </span>
            </div>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-10 text-5xl  leading-[1.1] tracking-tight text-[#171717] sm:text-6xl md:text-7xl lg:text-8xl font-heading"
        >
          I help <span>founders</span> turn <span>plans</span> into things that actually <span>happen.</span>
        </motion.h1>

        {/* Sub-headline / Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col gap-8 md:flex-row md:items-end md:gap-16"
        >
          <p className="max-w-lg text-lg leading-relaxed text-[#444444] font-sans md:text-xl">
            Operations support and systems setup for founders who are growing faster than their backend. I build the machines that run your vision.
          </p>

          {/* <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">
              Core Expertise
            </span>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium text-[#4A1942]">
              <span>Dubsado Setup</span>
              <span className="opacity-20">/</span>
              <span>CRM Strategy</span>
              <span className="opacity-20">/</span>
              <span>Email Systems</span>
            </div>
          </div> */}
        </motion.div>
      </div>

      {/* Decorative background element inspired by Blush White */}
      <div className="absolute right-0 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#F9F0F7] blur-[120px] opacity-60" />
    </section>
  );
}
