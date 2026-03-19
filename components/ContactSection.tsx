"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ContactSection() {
  const sectionRef = useRef<HTMLAnchorElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  // Subtle skew based on mouse position
  const rotateX = useTransform(springY, [0, 1], [3, -3]);
  const rotateY = useTransform(springX, [0, 1], [-3, 3]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <section className="relative bg-white">
      {/* Main CTA area — the entire block is the button */}
      <a
        href="mailto:hello@annanidumaka.com"
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group block px-6 sm:px-12 md:px-24 py-40 sm:py-52 cursor-pointer"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          style={{ rotateX, rotateY, perspective: 800 }}
          className="max-w-7xl"
        >
          <p className="text-sm font-heading text-[#999] mb-8 transition-colors duration-500 group-hover:text-[#4A1942]">
            Like what you see?
          </p>

          <h2 className="text-[3rem] sm:text-[5rem] lg:text-[7rem] font-heading font-light leading-[0.95] tracking-tighter text-[#171717] transition-colors duration-700 group-hover:text-[#4A1942]">
            Let&apos;s work
            <br />
            together
            <span className="inline-block ml-4 sm:ml-6 w-10 h-10 sm:w-16 sm:h-16 rounded-full border-2 border-current align-middle opacity-0 translate-x-[-20px] transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full p-2 sm:p-3 -rotate-45">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </h2>
        </motion.div>
      </a>

      {/* Footer */}
      <div className="px-6 sm:px-12 md:px-24 pb-12 pt-10 border-t border-zinc-200">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 max-w-7xl">
          <p className="text-sm text-[#999] font-heading">&copy; Ann Anidumaka, 2025.</p>

          <div className="flex items-center gap-8">
            {["LinkedIn", "X", "Behance"].map((name) => (
              <a
                key={name}
                href="#"
                className="text-sm font-heading text-[#999] transition-colors duration-300 hover:text-[#171717]"
              >
                {name}
              </a>
            ))}
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 text-sm font-heading text-[#999] hover:text-[#171717] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
            Top
          </button>
        </div>
      </div>
    </section>
  );
}
