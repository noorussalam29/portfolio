"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Languages,
  Heart,
  CheckCircle2,
  Briefcase,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.4, delay },
});

export default function About() {
  const interests = [
    "Modern Web Technologies",
    "Frontend Application Development",
    "Building Responsive Web Applications",
    "Learning New Technologies",
    "Exploring New Frameworks & Tools",
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-white dark:bg-dark-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <motion.span {...fadeUp(0)} className="inline-block text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">
            About Me
          </motion.span>
          <motion.h2
            {...fadeUp(0.05)}
            className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white"
          >
            Frontend Developer focused on clean, fast interfaces
          </motion.h2>
          <motion.p
            {...fadeUp(0.1)}
            className="mt-4 text-neutral-500 dark:text-neutral-400 leading-relaxed"
          >
            I completed my BCA in 2024 and have built production-ready web
            applications using React.js, Next.js, TypeScript, and Tailwind CSS.
            I care about writing clean code and shipping work that performs well.
          </motion.p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-12">
          {/* Left */}
          <motion.div {...fadeUp(0.1)} className="space-y-5">

            {/* Education */}
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900">
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap size={20} className="text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                  Education & Background
                </h3>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Bachelor of Computer Applications (BCA), 2024. Specialized in
                web programming and frontend technology stacks. Gained hands-on
                experience building professional applications with modern tools.
              </p>
            </div>

            {/* Career Objective */}
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900">
              <div className="flex items-center gap-3 mb-3">
                <Briefcase size={20} className="text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                  Career Objective
                </h3>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Seeking a Frontend Developer role where I can contribute my
                React.js, Next.js, and TypeScript skills while continuing to grow
                and deliver impactful user experiences.
              </p>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div {...fadeUp(0.15)} className="space-y-5">

            {/* Languages */}
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900">
              <div className="flex items-center gap-3 mb-4">
                <Languages size={20} className="text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                  Languages
                </h3>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <span>
                  <span className="font-medium text-neutral-800 dark:text-neutral-200">Tamil</span>{" "}
                  — Native
                </span>
                <span className="text-neutral-300 dark:text-neutral-700 select-none">|</span>
                <span>
                  <span className="font-medium text-neutral-800 dark:text-neutral-200">English</span>{" "}
                  — Conversational
                </span>
              </div>
            </div>

            {/* Interests */}
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900">
              <div className="flex items-center gap-3 mb-4">
                <Heart size={20} className="text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                  Interests
                </h3>
              </div>
              <div className="space-y-2.5">
                {interests.map((interest) => (
                  <div
                    key={interest}
                    className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                  >
                    <CheckCircle2 size={15} className="text-indigo-500 mt-0.5 shrink-0" />
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
