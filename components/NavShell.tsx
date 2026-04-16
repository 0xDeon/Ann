"use client";

import dynamic from "next/dynamic";
import Navbar from "./Navbar";

const LiquidEther = dynamic(() => import("./LiquidEther"), { ssr: false });

export default function NavShell({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative isolate w-full overflow-hidden ${className}`}>
      <div className="pointer-events-none absolute inset-0 z-0">
        <LiquidEther
          colors={["#4A1942", "#B19EEF", "#FF9FFC"]}
          mouseForce={18}
          cursorSize={100}
          iterationsPoisson={12}
          iterationsViscous={0}
          resolution={0.35}
          autoDemo
          autoSpeed={0.4}
          autoIntensity={2}
          takeoverDuration={0.25}
          autoResumeDelay={2500}
          autoRampDuration={0.6}
        />
      </div>
      <div className="relative z-10">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
