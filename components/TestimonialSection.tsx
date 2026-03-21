"use client";

import { useRef, useCallback, useState } from "react";
import { gsap } from "gsap";

const PIXEL_SIZE = 48;

interface Testimonial {
  brand: string;
  logo?: string;
  quote?: string;
  author?: string;
  role?: string;
  isImage?: boolean;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    brand: "Startup Lab",
    quote:
      "Ann doesn't just manage operations — she architects them. She turned our scattered processes into a system that actually worked.",
    author: "David O.",
    role: "Founder, Startup Lab",
  },
  {
    brand: "Ann Photo 1",
    isImage: true,
    image: "/ann1.jpg",
  },
  {
    brand: "Growth Circle",
    quote:
      "We handed her chaos and she handed us back a running machine. Genuinely one of the most dependable people I've worked with.",
    author: "Temi A.",
    role: "CEO, Growth Circle",
  },
  {
    brand: "DevDAO Africa",
    quote:
      "She scaled our community ops from 200 to 5,000 members without anything falling through. Still not sure how she did it.",
    author: "Chidi E.",
    role: "Lead, DevDAO Africa",
  },
  {
    brand: "Ann Photo 2",
    isImage: true,
    image: "/ann7.jpg",
  },
  {
    brand: "MAZERANCE",
    quote:
      "Ann has this rare ability to see the full picture and zoom into the details at the same time. Our workflow has never been tighter.",
    author: "Kola M.",
    role: "Creative Director, Mazerance",
  },
  {
    brand: "ApeX Ventures",
    quote:
      "She built our entire CRM from scratch and automated half our pipeline. The ROI was immediate and honestly kind of scary.",
    author: "Nneka F.",
    role: "Operations, ApeX Ventures",
  },
  {
    brand: "iorad",
    quote:
      "Precise, proactive, and somehow always three steps ahead. Ann is the operations partner every founder needs but rarely finds.",
    author: "Mark S.",
    role: "Co-founder, iorad",
  },
  {
    brand: "Ann Photo 3",
    isImage: true,
    image: "/ann10.jpg",
  },
];

function PixelCard({ testimonial }: { testimonial: Testimonial }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const pixelGridRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const [showBack, setShowBack] = useState(false);

  const buildPixels = useCallback((grid: HTMLDivElement) => {
    if (grid.children.length > 0) return;

    const rect = grid.getBoundingClientRect();
    const cols = Math.ceil(rect.width / PIXEL_SIZE);
    const rows = Math.ceil(rect.height / PIXEL_SIZE);

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const pixel = document.createElement("div");
        pixel.style.position = "absolute";
        pixel.style.width = `${PIXEL_SIZE + 3}px`;
        pixel.style.height = `${PIXEL_SIZE + 3}px`;
        pixel.style.left = `${col * PIXEL_SIZE}px`;
        pixel.style.top = `${row * PIXEL_SIZE}px`;
        pixel.style.backgroundColor = "#dfe0ddff";
        pixel.style.display = "none";
        pixel.style.pointerEvents = "none";
        grid.appendChild(pixel);
      }
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    const grid = pixelGridRef.current;
    if (!grid) return;

    buildPixels(grid);
    const pixels = grid.querySelectorAll<HTMLDivElement>("div");
    if (pixels.length === 0) return;

    if (tlRef.current) tlRef.current.kill();

    const totalPixels = pixels.length;
    const stagger = 0.8 / totalPixels;

    const tl = gsap.timeline();
    tlRef.current = tl;

    tl.to(pixels, {
      display: "block",
      duration: 0,
      stagger: { each: stagger, from: "random" },
    });

    tl.call(() => setShowBack(true));

    tl.to(pixels, {
      display: "none",
      duration: 0,
      stagger: { each: stagger, from: "random" },
    });
  }, [buildPixels]);

  const handleMouseLeave = useCallback(() => {
    if (tlRef.current) {
      tlRef.current.kill();
      tlRef.current = null;
    }

    const grid = pixelGridRef.current;
    if (grid) {
      const pixels = grid.querySelectorAll<HTMLDivElement>("div");
      pixels.forEach((p) => (p.style.display = "none"));
    }

    setShowBack(false);
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative isolate aspect-[4/3] cursor-pointer overflow-hidden group"
      style={{ backgroundColor: "#F5F5F5" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Front face — brand/logo or blank for images */}
      <div
        className="absolute inset-0 flex items-center justify-center p-8 bg-[#F5F5F5]"
        style={{ visibility: showBack ? "hidden" : "visible", zIndex: 1 }}
      >
        {!testimonial.isImage && (
          <span className="text-[28px] sm:text-[36px] font-heading font-bold text-[#171717] tracking-tight">
            {testimonial.brand}
          </span>
        )}
      </div>

      {/* Back face — testimonial text OR the image */}
      <div
        className="absolute inset-0 flex flex-col justify-between bg-[#F5F5F5] overflow-hidden"
        style={{ visibility: showBack ? "visible" : "hidden", zIndex: 2 }}
      >
        {testimonial.isImage ? (
          <img 
            src={testimonial.image} 
            alt="Ann" 
            className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110" 
          />
        ) : (
          <div className="flex flex-col justify-between h-full p-6 sm:p-8">
            {testimonial.quote && (
              <p className="text-[15px] sm:text-[17px] leading-[1.5] font-heading font-light tracking-tight text-[#171717]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            )}
            <div className="mt-4">
              <p className="text-[14px] sm:text-[16px] font-heading font-medium text-[#171717]">
                {testimonial.author}
              </p>
              <p className="text-[12px] sm:text-[13px] font-heading text-[#999]">
                {testimonial.role}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Pixel grid overlay */}
      <div
        ref={pixelGridRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 10 }}
      />
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <section className="px-6 sm:px-12 md:px-24 py-24 sm:py-32 bg-white">
      <div className="mb-12 sm:mb-16">
        <h2 className="text-[2.2rem] leading-[1.1] font-heading font-light tracking-tighter text-[#171717] sm:text-5xl lg:text-6xl">
          Trusted by amazing people
          <br />
          and teams across the globe.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-zinc-200">
        {testimonials.map((t) => (
          <PixelCard key={t.brand} testimonial={t} />
        ))}
      </div>
    </section>
  );
}
