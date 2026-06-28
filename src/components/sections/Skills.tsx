"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SkillItem {
  name: string;
  category: "frontend" | "tools";
  description: string;
  icon: string;
}

const skillsData: SkillItem[] = [
  // Frontend
  { name: "HTML5",              category: "frontend", description: "Semantic markup, accessibility, forms & structure",    icon: "🌐" },
  { name: "CSS3",               category: "frontend", description: "Flexbox, Grid, animations & responsive design",        icon: "🎨" },
  { name: "JavaScript (ES6+)",  category: "frontend", description: "DOM manipulation, async/await, modern syntax",         icon: "⚡" },
  { name: "React.js",           category: "frontend", description: "Hooks, component lifecycle, state management",         icon: "⚛️" },
  { name: "Next.js",            category: "frontend", description: "App Router, SSR basics, file-based routing",           icon: "▲" },
  { name: "TypeScript",         category: "frontend", description: "Type annotations, interfaces, basic generics",         icon: "🔷" },
  { name: "Tailwind CSS",       category: "frontend", description: "Utility-first styling, responsive variants",           icon: "💨" },
  // Tools
  { name: "Git",                category: "tools",    description: "Commits, branching, merging & pull requests",          icon: "🌿" },
  { name: "GitHub",             category: "tools",    description: "Repositories, collaboration & project tracking",       icon: "🐙" },
  { name: "VS Code",            category: "tools",    description: "Extensions, debugging & daily workflow",               icon: "💻" },
];

const tabs: { key: "all" | "frontend" | "tools"; label: string }[] = [
  { key: "all",      label: "All Skills" },
  { key: "frontend", label: "Frontend"   },
  { key: "tools",    label: "Tools"      },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<"all" | "frontend" | "tools">("all");

  const filteredSkills = skillsData.filter((skill) =>
    activeTab === "all" ? true : skill.category === activeTab
  );

  return (
    <section
      id="skills"
      className="relative py-24 bg-neutral-50 dark:bg-dark-bg/40 border-y border-neutral-200/50 dark:border-neutral-900/60 transition-all duration-300 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-glow-emerald rounded-full pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3"
          >
            Technical Stack
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white"
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-sm text-neutral-500 dark:text-neutral-400"
          >
            Tools and technologies I have worked with and am actively learning.
          </motion.p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full shadow-sm">
            {tabs.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`relative px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${
                  activeTab === key
                    ? "text-white"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                {label}
                {activeTab === key && (
                  <motion.div
                    layoutId="skillsActiveTab"
                    className="absolute inset-0 bg-neutral-900 dark:bg-indigo-600 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl glass-card flex flex-col gap-4 hover:shadow-lg hover:shadow-indigo-500/5 hover:border-indigo-500/20 dark:hover:border-indigo-500/20 transition-all duration-300"
              >
                {/* Top row: icon + name + category tag */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl leading-none">{skill.icon}</span>
                    <span className="text-base font-bold text-neutral-800 dark:text-neutral-100">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 dark:bg-indigo-400/10 px-2 py-0.5 rounded-full whitespace-nowrap">
                    {skill.category === "frontend" ? "Frontend" : "Tools"}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
