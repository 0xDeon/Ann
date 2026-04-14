"use client";

import { motion } from "framer-motion";
import { useRef, useState, MouseEvent } from "react";

type Variant = "dark" | "light";

export default function MagneticButton({
  label,
  href = "#",
  variant = "dark",
}: {
  label: string;
  href?: string;
  variant?: Variant;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: x * 0.35, y: y * 0.35 });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const base =
    variant === "dark"
      ? "bg-[#4A1942] text-[#F9F0F7]"
      : "bg-[#F9F0F7] text-[#4A1942] border border-[#4A1942]/20";
  const chip =
    variant === "dark"
      ? "bg-[#F9F0F7] text-[#4A1942]"
      : "bg-[#4A1942] text-[#F9F0F7]";
  const overlay =
    variant === "dark" ? "bg-[#2C0D28]" : "bg-[#F0E1EC]";

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 180, damping: 15, mass: 0.4 }}
      className={`group relative inline-flex items-center gap-4 rounded-full px-8 py-5 text-lg font-medium shadow-[0_8px_32px_-8px_rgba(74,25,66,0.55)] ${base}`}
    >
      <span className="relative z-10">{label}</span>
      <motion.span
        animate={{ x: pos.x * 0.4 }}
        className={`relative z-10 grid h-10 w-10 place-items-center rounded-full ${chip}`}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </motion.span>
      <span
        className={`pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${overlay}`}
      />
    </motion.a>
  );
}
