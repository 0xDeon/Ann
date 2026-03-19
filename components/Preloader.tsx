"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import opentype from "opentype.js";

const images = [
  "/ann1.jpg",
  "/ann3.jpg",
  "/ann5.jpg",
  "/ann7.jpg",
  "/ann10.jpg",
];

const words = [
  "Turning",
  "plans",
  "into",
  "real",
  "working",
];

const PIXEL_GRID_SIZE = 36;
const PIXEL_COLOR = "#4A1942";

interface PhotoConfig {
  id: string;
  src: string;
  word: string;
  initialRotate: number;
  targetRotate: number;
  initialX: number;
  offsetX: number;
  offsetY: number;
}

interface GlyphInfo {
  char: string;
  pathData: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

interface SignatureData {
  glyphPaths: string[];
  maskPath: string;
  viewBox: string;
  // Dynamic stroke width so the mask always covers the full text height
  maskStrokeWidth: number;
}

// ─── Catmull-Rom → cubic-bezier SVG path ────────────────────────────────────
// Unchanged from original — this part is correct.
function catmullRomToBezier(points: { x: number; y: number }[]): string {
  if (points.length < 2) return "";
  let d = `M ${points[0].x.toFixed(1)},${points[0].y.toFixed(1)}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(0, i - 1)];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[Math.min(points.length - 1, i + 2)];
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`;
  }
  return d;
}

// ─── FIX: Single continuous writing path ────────────────────────────────────
//
// The old approach returned different point counts per character, which caused
// Catmull-Rom to pull the path toward wrong anchors between characters — making
// it "jump". This version uses exactly 3 waypoints per character:
//   1. Entry  → left edge, slightly above baseline (where a pen starts a letter)
//   2. Apex   → horizontal midpoint, near the cap/x-height peak
//   3. Exit   → right edge, back near baseline (where the pen lifts to the next)
//
// Because every character contributes the same pattern, the path flows smoothly
// across the entire text with no discontinuities. The stroke is then sized
// dynamically (see maskStrokeWidth below) so it covers the full glyph height
// at every point along the path.
//
function buildWritingPath(glyphInfos: GlyphInfo[]): string {
  if (glyphInfos.length === 0) return "";

  const points: { x: number; y: number }[] = [];

  // Lead-in: start slightly to the left of the first glyph so the stroke
  // already covers it when the animation begins.
  const first = glyphInfos[0];
  points.push({ x: first.x1 - 30, y: (first.y1 + first.y2) * 0.6 });

  for (const g of glyphInfos) {
    const w  = g.x2 - g.x1;
    const h  = g.y2 - g.y1;

    // 1. Entry — pen arrives at the left side near the baseline
    points.push({
      x: g.x1 + w * 0.05,
      y: g.y2 - h * 0.18,
    });

    // 2. Apex — pen arcs up through the body/cap of the letter
    points.push({
      x: (g.x1 + g.x2) / 2,
      y: g.y1 + h * 0.28,
    });

    // 3. Exit — pen descends back toward the baseline before lifting
    points.push({
      x: g.x2 - w * 0.05,
      y: g.y2 - h * 0.18,
    });
  }

  // Lead-out: extend past the last glyph so the final stroke isn't clipped.
  const last = glyphInfos[glyphInfos.length - 1];
  points.push({ x: last.x2 + 30, y: (last.y1 + last.y2) * 0.6 });

  return catmullRomToBezier(points);
}

export default function Preloader() {
  const [complete, setComplete]       = useState(false);
  const containerRef                  = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [configs] = useState<PhotoConfig[]>(() => images.map((src, index) => ({
    id: src + index,
    src,
    word: words[index],
    initialRotate: Math.random() * 120 - 60,
    targetRotate:  Math.random() * 40  - 20,
    initialX:      Math.random() * 600 - 300,
    offsetX:       Math.random() * 60  - 30,
    offsetY:       Math.random() * 60  - 30,
  })));
  const [isExiting, setIsExiting]     = useState(false);
  const [contentHidden, setContentHidden] = useState(false);
  const [showSignature, setShowSignature] = useState(false);
  const [sigData, setSigData]         = useState<SignatureData | null>(null);
  const maskPathRef                   = useRef<SVGPathElement>(null);
  const pixelGridRef                  = useRef<HTMLDivElement>(null);

  // ── Load font → glyph paths + unified writing-direction mask ──────────────
  useEffect(() => {
    opentype.load("/fonts/PlayfairDisplay-Italic.ttf").then((font) => {
      const fontSize = 140;
      const text     = "Ann Anidumaka";

      const fullPath = font.getPath(text, 0, fontSize, fontSize);
      const bbox     = fullPath.getBoundingBox();
      const padding  = 30;
      const viewBox  = `${bbox.x1 - padding} ${bbox.y1 - padding} ${
        bbox.x2 - bbox.x1 + padding * 2
      } ${bbox.y2 - bbox.y1 + padding * 2}`;

      const glyphs     = font.stringToGlyphs(text);
      const glyphInfos: GlyphInfo[] = [];
      let x = 0;

      for (let i = 0; i < glyphs.length; i++) {
        const glyph   = glyphs[i];
        const advW    = (glyph.advanceWidth || 0) * (fontSize / (font.unitsPerEm || 1000));
        const glyphPath = glyph.getPath(x, fontSize, fontSize);
        const d       = glyphPath.toPathData(2);
        const gBbox   = glyphPath.getBoundingBox();

        if (d && d.length > 0) {
          glyphInfos.push({
            char: text[i],
            pathData: d,
            x1: gBbox.x1,
            y1: gBbox.y1,
            x2: gBbox.x2,
            y2: gBbox.y2,
          });
        }

        x += advW;
        if (i < glyphs.length - 1) {
          const kerning = font.getKerningValue(glyphs[i], glyphs[i + 1]);
          x += kerning * (fontSize / (font.unitsPerEm || 1000));
        }
      }

      // ── Key fix #2: dynamic strokeWidth ───────────────────────────────────
      // The mask stroke must be at least as tall as the text's full bounding
      // box so it covers ascenders AND descenders everywhere along the path.
      // Multiply by 1.6 for a comfortable margin.
      const textHeight      = bbox.y2 - bbox.y1;
      const maskStrokeWidth = textHeight * 1.6;

      const maskPath = buildWritingPath(glyphInfos);

      setSigData({
        glyphPaths: glyphInfos.map((g) => g.pathData),
        maskPath,
        viewBox,
        maskStrokeWidth,
      });
    });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    images.forEach((_, index) => {
      tl.to({}, {
        duration: 0.8,
        onStart: () => setVisibleCount(index + 1),
      });
    });

    tl.to({}, { duration: 0.5 });
    tl.call(() => setShowSignature(true));

    // Writing animation duration (6 s) + 1 s hold = 7 s total
    tl.to({}, { duration: 7.0 });
    tl.call(() => setIsExiting(true));

    return () => { tl.kill(); };
  }, []);

  // ── Animate the mask stroke (strokeDashoffset = DrawSVG equivalent) ────────
  useEffect(() => {
    if (!showSignature || !sigData || !maskPathRef.current) return;

    const path   = maskPathRef.current;
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray:  length,
      strokeDashoffset: length,
    });

    const tl = gsap.timeline();
    tl.to(path, {
      strokeDashoffset: 0,
      duration: 6,
      ease: "sine.inOut",
    });

    return () => { tl.kill(); };
  }, [showSignature, sigData]);

  // ── Pixel grid exit transition ──────────────────────────────────────────────
  useEffect(() => {
    if (!isExiting || !pixelGridRef.current) return;

    const grid = pixelGridRef.current;
    grid.innerHTML = "";

    // Calculate grid so pixels are square based on viewport dimensions
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const pixelSize = Math.ceil(Math.max(vw, vh) / PIXEL_GRID_SIZE);
    const cols = Math.ceil(vw / pixelSize);
    const rows = Math.ceil(vh / pixelSize);

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const pixel = document.createElement("div");
        pixel.style.position = "absolute";
        pixel.style.backgroundColor = PIXEL_COLOR;
        pixel.style.display = "none";
        pixel.style.width = `${pixelSize + 1}px`;
        pixel.style.height = `${pixelSize + 1}px`;
        pixel.style.left = `${col * pixelSize}px`;
        pixel.style.top = `${row * pixelSize}px`;
        grid.appendChild(pixel);
      }
    }

    const pixels = grid.querySelectorAll<HTMLDivElement>("div");
    const totalPixels = pixels.length;
    const stepDuration = 0.5;
    const staggerDuration = stepDuration / totalPixels;

    const tl = gsap.timeline();

    // Phase 1: pixels appear randomly, covering the preloader content
    tl.to(pixels, {
      display: "block",
      duration: 0,
      stagger: { each: staggerDuration, from: "random" },
    });

    // Phase 2: once fully covered, hide all preloader content + background
    // so that when pixels disappear, they reveal the main page underneath
    tl.call(() => setContentHidden(true));
    tl.to({}, { duration: 0.15 });

    // Phase 3: pixels disappear randomly, revealing the main page
    tl.to(pixels, {
      display: "none",
      duration: 0,
      stagger: { each: staggerDuration, from: "random" },
      onComplete: () => setComplete(true),
    });

    return () => { tl.kill(); };
  }, [isExiting]);

  if (complete) return null;

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden ${
        contentHidden ? "bg-transparent" : "bg-[#F9F0F7]"
      }`}
    >
      {/* Preloader content — hidden once pixels fully cover the screen */}
      {!contentHidden && (
        <>
          <div className="relative w-full h-full flex items-center justify-center">
            {configs.map((config, index) => (
              <motion.div
                key={config.id}
                initial={{
                  y:       1000,
                  x:       config.initialX,
                  rotate:  config.initialRotate,
                  opacity: 0,
                }}
                animate={
                  index < visibleCount
                    ? { y: config.offsetY, x: config.offsetX, rotate: config.targetRotate, opacity: 1 }
                    : {}
                }
                transition={{ type: "spring", damping: 22, stiffness: 55, mass: 2 }}
                className="absolute p-3 pb-12 bg-white border border-zinc-100 shadow-[0_10px_40px_rgba(0,0,0,0.12)]"
                style={{
                  zIndex: index,
                  transformOrigin: "center center",
                }}
              >
                <div className="relative w-48 h-52 sm:w-60 sm:h-64 overflow-hidden bg-zinc-100/50">
                  <Image
                    src={config.src}
                    alt={`Ann Photo ${index}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="mt-4 flex flex-col items-center justify-center">
                  <span className="text-black text-4xl sm:text-5xl font-handwriting -rotate-2">
                    {config.word}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {showSignature && sigData && (
            <div className="absolute bottom-12 sm:bottom-16 md:bottom-20 pointer-events-none px-4">
              <svg
                className="w-[340px] sm:w-[520px] md:w-[700px] h-auto"
                viewBox={sigData.viewBox}
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <mask id="writing-mask" maskUnits="userSpaceOnUse">
                    <path
                      ref={maskPathRef}
                      d={sigData.maskPath}
                      fill="none"
                      stroke="white"
                      strokeWidth={sigData.maskStrokeWidth}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </mask>
                </defs>

                <g mask="url(#writing-mask)">
                  {sigData.glyphPaths.map((d, i) => (
                    <path key={i} d={d} fill="#4A1942" />
                  ))}
                </g>
              </svg>
            </div>
          )}
        </>
      )}

      {/* Pixel grid overlay for exit transition */}
      <div
        ref={pixelGridRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[10]"
      />
    </div>
  );
}