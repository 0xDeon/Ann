"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const interests = [
  {
    label: "Crocheting",
    src: "/crocheting.jpg",
    rotate: -4,
  },
  {
    label: "Diie hard Chelsea Fan",
    src: "/chelsea.avif",
    rotate: 2,
  },
  {
    label: "Rihanna Fan Girl",
    src: "/rihanna.jpg",
    rotate: -2,
  },
];

export default function InterestsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => Math.max(0, i - 1));
  const next = () => setActive((i) => Math.min(interests.length - 1, i + 1));

  return (
    <section className="relative px-6 py-32 sm:px-12 md:px-24 bg-white overflow-hidden" style={{ zIndex: 50 }}>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
        className="text-[2.5rem] sm:text-[4rem] lg:text-[5.5rem] leading-[1] font-heading font-light tracking-tighter text-[#171717] mb-10 sm:mb-14 max-w-7xl"
      >
        Contrary to very unpopular opinions, I actually have other interests asides working all day.
      </motion.p>

      {/* Polaroid carousel */}
      <div className="relative flex items-center justify-center min-h-[500px] sm:min-h-[650px] lg:min-h-[750px]">
        {/* Left arrow */}
        <button
          onClick={prev}
          className="absolute left-0 sm:left-8 z-40 w-12 h-12 flex items-center justify-center text-[#171717] opacity-40 hover:opacity-100 transition-opacity"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Cards */}
        <div className="relative w-full max-w-7xl h-[480px] sm:h-[620px] lg:h-[500px] flex items-center justify-center">
          {interests.map((item, i) => {
            const isActive = i === active;
            // Fixed position: left (-1), center (0), right (1)
            const position = i - 1;

            return (
              <motion.div
                key={item.label}
                animate={{
                  x: position * 520,
                  scale: isActive ? 1 : 0.75,
                  rotate: isActive ? 0 : item.rotate,
                  opacity: isActive ? 1 : 0.45,
                  filter: isActive ? "blur(0px)" : "blur(3px)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 22,
                  mass: 1.2,
                }}
                className="absolute cursor-pointer"
                onClick={() => setActive(i)}
                style={{ zIndex: isActive ? 20 : 10 }}
              >
                {/* Polaroid frame */}
                <div
                  className="bg-white rounded-sm"
                  style={{
                    padding: "16px 16px 70px 16px",
                    width: 480,
                    boxShadow: "0 12px 60px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06)",
                  }}
                >
                  {/* Image area */}
                  <div className="relative w-full aspect-square bg-[#F5F5F5] rounded-sm overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.label}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Handwritten label */}
                  <p className="mt-5 text-center text-4xl font-handwriting text-[#171717]">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          className="absolute right-0 sm:right-8 z-40 w-12 h-12 flex items-center justify-center text-[#171717] opacity-40 hover:opacity-100 transition-opacity"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
