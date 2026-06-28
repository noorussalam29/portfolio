"use client";

import React from "react";
import { motion } from "framer-motion";

interface SkillItem {
  name: string;
  category: "frontend" | "tools";
  description: string;
  icon: string;
}

const skillsData: SkillItem[] = [
  // Frontend
  { name: "HTML5",             category: "frontend", description: "Semantic markup, accessibility, forms & structure",   icon: "🌐" },
  { name: "CSS3",              category: "frontend", description: "Flexbox, Grid, animations & responsive design",       icon: "🎨" },
  { name: "JavaScript (ES6+)", category: "frontend", description: "DOM manipulation, async/await, modern syntax",        icon: "⚡" },
  { name: "React.js",          category: "frontend", description: "Hooks, component lifecycle, state management",        icon: "⚛️" },
  { name: "Next.js",           category: "frontend", description: "App Router, SSR basics, file-based routing",          icon: "▲" },
  { name: "TypeScript",        category: "frontend", description: "Type annotations, interfaces, basic generics",        icon: "🔷" },
  { name: "Tailwind CSS",      category: "frontend", description: "Utility-first styling, responsive variants",          icon: "💨" },
  // Tools
  { name: "Git",               category: "tools",    description: "Commits, branching, merging & pull requests",        icon: "🌿" },
  { name: "GitHub",            category: "tools",    description: "Repositories, collaboration & project tracking",      icon: "🐙" },
  { name: "VS Code",           category: "tools",    description: "Extensions, debugging & daily workflow",              icon: "💻" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 bg-neutral-50 dark:bg-dark-bg/40 border-y border-neutral-200/50 dark:border-neutral-900/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3"
          >
            Technical Stack
          </motion.span>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white"
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-3 text-sm text-neutral-500 dark:text-neutral-400"
          >
            Tools and technologies I work with and am actively learning.
          </motion.p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillsData.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="p-5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col gap-3 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors duration-200"
            >
              {/* Top row: icon + name + category tag */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-xl leading-none">{skill.icon}</span>
                  <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">
                    {skill.name}
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-0.5 rounded-full whitespace-nowrap border border-indigo-100 dark:border-indigo-800/50">
                  {skill.category === "frontend" ? "Frontend" : "Tools"}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
