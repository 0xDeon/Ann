"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

const subscribe = () => () => {};
const useIsClient = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "https://twitter.com/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ann-anidumaka/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isClient = useIsClient();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const overlay = (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-100 flex flex-col bg-[#0A0A0A] text-[#F9F0F7]"
        >
          <div className="flex items-center justify-between px-6 py-6 sm:px-12 sm:py-8">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-lg font-bold uppercase tracking-[0.08em] text-[#F9F0F7] sm:text-3xl leading-none"
              style={{ fontFamily: '"Moonwalk", sans-serif' }}
            >
              Ann Anidumaka
            </Link>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="group relative grid h-14 w-14 place-items-center rounded-full border border-[#F9F0F7] text-[#F9F0F7] transition-all hover:bg-[#F9F0F7] hover:text-[#0A0A0A]"
            >
              <span className="absolute block h-px w-6 rotate-45 bg-current" />
              <span className="absolute block h-px w-6 -rotate-45 bg-current" />
            </button>
          </div>

          <ul className="flex flex-1 flex-col items-center justify-center gap-6 sm:gap-8">
            {navLinks.map((link, i) => {
              const active = pathname === link.href;
              return (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block font-heading text-5xl font-light tracking-tight transition-colors hover:text-[#B19EEF] sm:text-7xl lg:text-8xl ${
                      active ? "text-[#B19EEF]" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              );
            })}
          </ul>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-between px-6 pb-8 text-sm text-[#F9F0F7]/60 sm:px-12 sm:pb-10"
          >
            <p className="font-mono text-xs">&copy; Ann Anidumaka, 2026.</p>
            <div className="flex items-center gap-6">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="transition-colors hover:text-[#B19EEF]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <nav className="relative z-50 flex w-full items-center justify-between px-6 py-6 sm:px-12 sm:py-8">
        <Link
          href="/"
          className="text-lg font-bold uppercase tracking-[0.08em] text-[#171717] sm:text-3xl leading-none"
          style={{ fontFamily: '"Moonwalk", sans-serif' }}
        >
          Ann Anidumaka
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="group relative grid h-14 w-14 place-items-center rounded-full border border-[#171717] text-[#171717] transition-all hover:bg-[#171717] hover:text-white"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: -4 }}
            transition={{ duration: 0.3 }}
            className="absolute block h-px w-6 bg-current"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 4 }}
            transition={{ duration: 0.3 }}
            className="absolute block h-px w-6 bg-current"
          />
        </button>
      </nav>

      {isClient && createPortal(overlay, document.body)}
    </>
  );
}
