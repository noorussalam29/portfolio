"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, delay },
});

export default function Hero() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* ── DESKTOP layout ─────────────────────────────────── */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-14 items-center">

          {/* Desktop LEFT */}
          <div className="lg:col-span-7 text-left">
            <motion.span
              {...fadeIn(0)}
              className="inline-block text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-5"
            >
              Available for opportunities
            </motion.span>

            <motion.h1
              {...fadeIn(0.1)}
              className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-white"
            >
              Hi, I&apos;m Noorus —{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                I build fast, clean websites
              </span>
            </motion.h1>

            <motion.p
              {...fadeIn(0.2)}
              className="mt-6 max-w-xl text-neutral-500 dark:text-neutral-400 leading-relaxed text-lg"
            >
              Frontend Developer specializing in React.js, Next.js, TypeScript,
              and Tailwind CSS. I care about performance, clean code, and
              interfaces that feel great to use.
            </motion.p>

            <motion.div
              {...fadeIn(0.35)}
              className="flex flex-row gap-3 mt-10"
            >
              <button
                onClick={() => handleScroll("projects")}
                className="group px-6 py-3 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold flex items-center gap-2 text-sm hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors"
              >
                View Projects
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <a
                href="/mohamed_noorus_salam_frontend_developer.pdf"
                download
                className="px-6 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-semibold flex items-center gap-2 text-sm hover:border-neutral-500 dark:hover:border-neutral-500 transition-colors"
              >
                <Download size={15} />
                Resume
              </a>
              <button
                onClick={() => handleScroll("contact")}
                className="px-6 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-semibold text-sm hover:border-neutral-500 dark:hover:border-neutral-500 transition-colors"
              >
                Contact
              </button>
            </motion.div>

            <motion.div {...fadeIn(0.45)} className="flex items-center gap-4 mt-8">
              <a
                href="https://github.com/noorussalam29"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/noorus"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </motion.div>
          </div>

          {/* Desktop RIGHT – photo */}
          <motion.div
            {...fadeIn(0.2)}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-72 h-72 xl:w-80 xl:h-80">
              <div className="w-full h-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-lg">
                <Image
                  src="/profile.jpeg"
                  alt="Mohamed Noorus Salam"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── MOBILE layout ──────────────────────────────────── */}
        <div className="flex flex-col gap-6 lg:hidden">

          {/* Row 1: Name (left) + Photo (right) */}
          <div className="flex items-start justify-between gap-4">
            {/* Name & title */}
            <div className="flex-1 min-w-0">
              <motion.span
                {...fadeIn(0)}
                className="inline-block text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-3"
              >
                Available for opportunities
              </motion.span>

              <motion.h1
                {...fadeIn(0.1)}
                className="text-2xl sm:text-3xl font-bold leading-snug tracking-tight text-neutral-900 dark:text-white"
              >
                Hi, I&apos;m Noorus —{" "}
                <span className="text-indigo-600 dark:text-indigo-400">
                  I build fast, clean websites
                </span>
              </motion.h1>
            </div>

            {/* Photo */}
            <motion.div
              {...fadeIn(0.15)}
              className="shrink-0 w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-md"
            >
              <Image
                src="/profile.jpeg"
                alt="Mohamed Noorus Salam"
                width={128}
                height={128}
                priority
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>

          {/* Row 2: Description */}
          <motion.p
            {...fadeIn(0.2)}
            className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed"
          >
            Frontend Developer specializing in React.js, Next.js, TypeScript,
            and Tailwind CSS. I care about performance, clean code, and
            interfaces that feel great to use.
          </motion.p>

          {/* Row 3: Buttons */}
          <motion.div
            {...fadeIn(0.3)}
            className="flex flex-col sm:flex-row gap-3"
          >
            <button
              onClick={() => handleScroll("projects")}
              className="group px-5 py-2.5 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold flex items-center justify-center gap-2 text-sm hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors"
            >
              View Projects
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            <a
              href="/mohamed_noorus_salam_frontend_developer.pdf"
              download
              className="px-5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-semibold flex items-center justify-center gap-2 text-sm hover:border-neutral-500 transition-colors"
            >
              <Download size={14} />
              Resume
            </a>
            <button
              onClick={() => handleScroll("contact")}
              className="px-5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-semibold text-sm hover:border-neutral-500 transition-colors"
            >
              Contact
            </button>
          </motion.div>

          {/* Row 4: Social */}
          <motion.div {...fadeIn(0.35)} className="flex items-center gap-4">
            <a
              href="https://github.com/noorussalam29"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/noorus"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
