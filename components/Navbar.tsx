"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "/home", href: "/" },
  { name: "/about", href: "/about" },
  { name: "/portfolio", href: "/portfolio" },
  { name: "/contact", href: "/contact" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
    ),
  },
  {
    name: "X",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
    ),
  },
  {
    name: "Behance",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5h8a4 4 0 1 1 0 8H3V5zm0 14h8a4 4 0 1 1 0-8H3v8zM3 12h8"/><path d="M14 12h7"/><path d="M17 12v3a3 3 0 0 0 3 3h1"/></svg>
    ),
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-6 sm:px-12 sm:py-8">
      {/* Menu / Left Links */}
      <div className="flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`text-sm tracking-tight transition-opacity hover:opacity-100 ${
              pathname === link.href ? "font-bold opacity-100" : "font-medium opacity-40"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Social Links / Right Icons */}
      <div className="flex items-center gap-5">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-60 transition-all hover:scale-110 hover:opacity-100"
            title={link.name}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </nav>
  );
}
