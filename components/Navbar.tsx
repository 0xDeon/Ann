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
  { name: "Instagram", href: "https://instagram.com/" },
  { name: "Twitter", href: "https://twitter.com/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ann-anidumaka/" },
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
              className="text-3xl font-bold uppercase tracking-[0.08em] text-[#F9F0F7] sm:text-4xl leading-none"
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
                  className="flex items-center gap-1 transition-colors hover:text-[#B19EEF]"
                >
                  {s.name}
                  <span aria-hidden className="text-[0.6em]">↗</span>
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
          className="text-3xl font-bold uppercase tracking-[0.08em] text-[#171717] sm:text-4xl leading-none"
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
