"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";

function InteractiveContactLink({ 
  href, 
  label, 
  note, 
  isCopy = false 
}: { 
  href: string; 
  label: string; 
  note: string; 
  isCopy?: boolean 
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    if (isCopy) {
      e.preventDefault();
      navigator.clipboard.writeText(href.replace("mailto:", ""));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div 
      className="relative flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a 
        href={href}
        onClick={handleCopy}
        target={isCopy ? undefined : "_blank"}
        rel="noopener noreferrer"
        className="text-xl font-light hover:text-[#4A1942] transition-colors underline-offset-8 hover:underline decoration-1"
      >
        {label}
      </a>
      
      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ opacity: 0, x: -10, rotate: -8 }}
            animate={{ opacity: 1, x: 0, rotate: -3 }}
            exit={{ opacity: 0, x: 5, rotate: 2 }}
            className="absolute left-[95%] -top-4 whitespace-nowrap font-handwriting text-4xl text-[#4A1942] pointer-events-none select-none z-20"
          >
            {copied ? "Copied!" : note}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <main className="min-h-screen bg-white text-[#171717] font-sans">
      <Navbar />

      <section className="px-6 py-20 sm:px-12 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="text-[4rem] sm:text-[6rem] lg:text-[8rem] font-heading font-light tracking-tighter leading-[0.9] text-[#171717]"
          >
            Let&apos;s build <br />
            <span className="relative">
              something
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 1.2, ease: "easeInOut" }}
                className="absolute -bottom-2 left-0 h-2 bg-[#4A1942]/10 -z-10"
              />
            </span>{" "} 
            together.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-8 text-xl font-light text-[#666] max-w-xl"
          >
            Have a project in mind or just want to say hi? Reach out using the form below, and I&apos;ll get back to you faster than you can say &ldquo;Operations.&rdquo;
          </motion.p>
        </div>

        {/* Form Container */}
        <div className="flex flex-col lg:flex-row gap-20">
          <form onSubmit={handleSubmit} className="flex-1 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="group relative"
            >
              <label 
                htmlFor="name" 
                className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 group-focus-within:text-[#4A1942] transition-colors"
              >
                01. What&apos;s your name?
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ann Anidumaka *"
                className="w-full bg-transparent border-b border-zinc-200 py-4 text-2xl sm:text-3xl font-heading font-medium placeholder:text-zinc-200 focus:outline-none focus:border-[#4A1942] transition-all"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="group relative"
            >
              <label 
                htmlFor="email" 
                className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 group-focus-within:text-[#4A1942] transition-colors"
              >
                02. Your email address?
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="hello@ann.com *"
                className="w-full bg-transparent border-b border-zinc-200 py-4 text-2xl sm:text-3xl font-heading font-medium placeholder:text-zinc-200 focus:outline-none focus:border-[#4A1942] transition-all"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="group relative"
            >
              <label 
                htmlFor="message" 
                className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 group-focus-within:text-[#4A1942] transition-colors"
              >
                03. Tell me about your project?
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Hey Ann, let's talk about..."
                className="w-full bg-transparent border-b border-zinc-200 py-4 text-2xl sm:text-3xl font-heading font-medium placeholder:text-zinc-200 focus:outline-none focus:border-[#4A1942] transition-all resize-none"
                required
              />
            </motion.div>

            {/* VERY LARGE BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8, type: "spring", stiffness: 100 }}
              className="pt-10 flex"
            >
              <button
                type="submit"
                className="group relative flex items-center justify-center bg-[#171717] text-white rounded-full transition-all duration-700 hover:bg-[#4A1942] active:scale-95 shadow-[0_20px_60px_rgba(0,0,0,0.1)] overflow-hidden cursor-pointer"
                style={{
                  width: "16em",
                  height: "7.5em",
                  fontSize: "min(4vw, 1.15rem)"
                }}
              >
                  <div className="absolute inset-0 z-0 flex items-center justify-center">
                    <div className="w-0 h-0 bg-white/5 rounded-full group-hover:w-[150%] group-hover:h-[150%] transition-all duration-1000 ease-out" />
                  </div>

                 <span className="relative z-10 font-heading font-medium text-4xl sm:text-5xl tracking-tighter transition-transform duration-500 group-hover:-translate-x-4">
                  Send away
                </span>
                
                <div className="absolute right-[12%] translate-x-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17l10-10M7 7h10v10" />
                  </svg>
                </div>
              </button>
            </motion.div>
          </form>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="lg:w-[450px] space-y-16"
          >
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#4A1942] mb-8">Contact Info</h3>
              <div className="space-y-6">
                <InteractiveContactLink 
                  href="mailto:hello@ann.com" 
                  label="hello@ann.com" 
                  note="Let's build!" 
                  isCopy 
                />
                <InteractiveContactLink 
                  href="tel:+2349000000000" 
                  label="+234 (0) 90 000 0000" 
                  note="Text only please" 
                />
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#4A1942] mb-8">Social</h3>
              <div className="space-y-6">
                <InteractiveContactLink 
                  href="#" 
                  label="LinkedIn" 
                  note="Usually active here" 
                />
                <InteractiveContactLink 
                  href="#" 
                  label="Twitter" 
                  note="I yap about Ops" 
                />
                <InteractiveContactLink 
                  href="#" 
                  label="Instagram" 
                  note="Sneak peak into my life" 
                />
              </div>
            </div>

            <div className="pt-10">
              <motion.span 
                initial={{ rotate: -6 }}
                whileHover={{ rotate: -2, scale: 1.05 }}
                className="font-handwriting text-5xl text-[#4A1942] block cursor-default origin-left transition-transform"
              >
                Stay working!
              </motion.span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

