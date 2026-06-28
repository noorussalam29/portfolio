"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

function TypingAnimation() {
  const phrases = ["Frontend Developer"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1800);
      return () => clearTimeout(timeout);
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  return (
    <span className="font-semibold text-indigo-600 dark:text-indigo-400 border-r-2 border-indigo-500 pr-1">
      {phrases[index].substring(0, subIndex)}
    </span>
  );
}

export default function Hero() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-grid-pattern pt-20 pb-10"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-[450px] h-[450px] rounded-full bg-radial-glow-indigo opacity-60 pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[450px] h-[450px] rounded-full bg-radial-glow-violet opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* ── DESKTOP layout ─────────────────────────────────── */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-14 items-center">

          {/* Desktop LEFT */}
          <div className="lg:col-span-7 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-indigo-500/20 text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-6"
            >
              <Sparkles size={14} />
              Open to Frontend Developer Opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-6xl font-bold leading-tight text-neutral-900 dark:text-white"
            >
              Building Modern<br />
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-600 bg-clip-text text-transparent">
                Web Experiences
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-xl font-semibold text-neutral-700 dark:text-neutral-300"
            >
              Mohamed Noorus Salam
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-xl text-neutral-600 dark:text-neutral-300 h-8"
            >
              I am a <TypingAnimation />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 max-w-xl text-neutral-500 dark:text-neutral-400 leading-relaxed text-lg"
            >
              Frontend Developer specializing in React.js, Next.js, TypeScript,
              JavaScript, and Tailwind CSS. Passionate about building fast,
              scalable, and responsive web applications with modern UI/UX.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-row gap-4 mt-10"
            >
              <button
                onClick={() => handleScroll("projects")}
                className="group px-7 py-3.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold flex items-center gap-2"
              >
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="/mohamed_noorus_salam_frontend_developer.pdf"
                download
                className="px-7 py-3.5 rounded-xl border border-indigo-500 text-indigo-600 font-semibold flex items-center gap-2"
              >
                <Download size={16} />
                Download Resume
              </a>
              <button
                onClick={() => handleScroll("contact")}
                className="px-7 py-3.5 rounded-xl border border-neutral-300 dark:border-neutral-800 font-semibold"
              >
                Contact Me
              </button>
            </motion.div>

            <div className="flex items-center gap-5 mt-10">
              <a href="https://github.com/noorussalam29" target="_blank" rel="noreferrer">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/noorus" target="_blank" rel="noreferrer">
                <Linkedin size={22} />
              </a>
            </div>
          </div>

          {/* Desktop RIGHT – photo */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-[450px] h-[450px]"
            >
              <div className="absolute -top-4 -left-4 glass-card rounded-full px-4 py-2 text-xs font-semibold z-20">React.js</div>
              <div className="absolute top-10 -right-8 glass-card rounded-full px-4 py-2 text-xs font-semibold z-20">Next.js</div>
              <div className="absolute bottom-12 -left-8 glass-card rounded-full px-4 py-2 text-xs font-semibold z-20">TypeScript</div>
              <div className="absolute -bottom-4 right-0 glass-card rounded-full px-4 py-2 text-xs font-semibold z-20">Tailwind CSS</div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 opacity-20 blur-2xl" />
              <div className="absolute inset-2 border-2 border-dashed border-indigo-500/20 rounded-full animate-spin-slow" />
              <div className="absolute inset-6 glass-card rounded-full overflow-hidden p-3">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image src="/profile.jpeg" alt="Mohamed Noorus Salam" fill priority className="object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── MOBILE layout ──────────────────────────────────── */}
        <div className="flex flex-col gap-6 lg:hidden">

          {/* Row 1: Name (left) + Photo (right) */}
          <div className="flex items-center justify-between gap-4">

            {/* Name & title */}
            <div className="flex-1 min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card border border-indigo-500/20 text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 mb-3"
              >
                <Sparkles size={11} />
                Open to Opportunities
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-2xl sm:text-3xl font-bold leading-snug text-neutral-900 dark:text-white"
              >
                Building Modern<br />
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-600 bg-clip-text text-transparent">
                  Web Experiences
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-2 text-base font-semibold text-neutral-700 dark:text-neutral-300"
              >
                Mohamed Noorus Salam
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-1 text-sm text-neutral-600 dark:text-neutral-300"
              >
                I am a <TypingAnimation />
              </motion.div>
            </div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative shrink-0 w-[130px] h-[130px] sm:w-[160px] sm:h-[160px]"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 opacity-20 blur-xl" />
              <div className="absolute inset-1 border-2 border-dashed border-indigo-500/20 rounded-full animate-spin-slow" />
              <div className="absolute inset-3 glass-card rounded-full overflow-hidden p-1.5">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image src="/profile.jpeg" alt="Mohamed Noorus Salam" fill priority className="object-cover" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Row 2: Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed"
          >
            Frontend Developer specializing in React.js, Next.js, TypeScript, JavaScript, and Tailwind CSS.
            Passionate about building fast, scalable, and responsive web applications.
          </motion.p>

          {/* Row 3: Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <button
              onClick={() => handleScroll("projects")}
              className="group px-6 py-3 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold flex items-center justify-center gap-2 text-sm"
            >
              View Projects
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="/mohamed_noorus_salam_frontend_developer.pdf"
              download
              className="px-6 py-3 rounded-xl border border-indigo-500 text-indigo-600 font-semibold flex items-center justify-center gap-2 text-sm"
            >
              <Download size={15} />
              Download Resume
            </a>
            <button
              onClick={() => handleScroll("contact")}
              className="px-6 py-3 rounded-xl border border-neutral-300 dark:border-neutral-800 font-semibold text-sm"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Row 4: Social */}
          <div className="flex items-center gap-5">
            <a href="https://github.com/noorussalam29" target="_blank" rel="noreferrer">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/noorus" target="_blank" rel="noreferrer">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
