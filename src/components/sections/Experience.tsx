"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Award, GraduationCap, BookOpen, Code } from "lucide-react";

interface TimelineItem {
  role: string;
  company: string;
  duration: string;
  description: string[];
  icon: React.ReactNode;
}

const experienceData: TimelineItem[] = [
  {
    role: "Frontend Developer (Project)",
    company: "Active Dynamic Cleaning Services (ADCS)",
    duration: "2026",
    description: [
      "Built a fully responsive corporate website using Next.js, React.js, TypeScript, and Tailwind CSS.",
      "Designed and integrated a secure contact/booking API with input validation and HTML-escaping to prevent scripting attacks.",
      "Automated dual-email notifications for both client and administration via Resend API integration.",
      "Hosted and deployed code using Cloudflare Pages, maintaining robust version control workflows via Git/GitHub.",
    ],
    icon: <Briefcase className="text-white" size={16} />
  },
  {
    role: "Bachelor of Computer Applications (B.C.A.)",
    company: "Syed Ammal Arts And Science College",
    duration: "2021 - 2024",
    description: [
      "Completed degree program focusing on software concepts, databases, and programming fundamentals.",
      "Specialized in web programming and frontend technology stacks (React, JavaScript, CSS).",
      "Created functional client-side mock projects demonstrating strong coding and design system principles.",
    ],
    icon: <GraduationCap className="text-white" size={16} />,
  },
  {
    role: "Higher Secondary Course (H.S.C.)",
    company: "Raja Matriculation Higher Secondary School",
    duration: "2019 - 2021",
    description: [
      "Focused on advanced secondary coursework including computer science concepts, mathematics, and science.",
      "Developed logic-building and algorithms foundations through school-level programming modules.",
    ],
    icon: <BookOpen className="text-white" size={16} />,
  },
  {
    role: "Secondary School Leaving Certificate (S.S.L.C.)",
    company: "Raja Matriculation Higher Secondary School",
    duration: "2017 - 2019",
    description: [
      "Completed standard secondary education coursework with high proficiency in mathematics and science.",
    ],
    icon: <Award className="text-white" size={16} />,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 bg-neutral-50 dark:bg-dark-bg/40 border-y border-neutral-200/50 dark:border-neutral-900/60 transition-all duration-300 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-[500px] h-[500px] bg-radial-glow-indigo rounded-full pointer-events-none opacity-40" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3"
          >
            My Journey
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white"
          >
            Career Timeline & Achievements
          </motion.h3>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l-2 border-neutral-200 dark:border-neutral-800 ml-4 sm:ml-6 space-y-12">
          {experienceData.map((item, index) => (
            <div key={item.role} className="relative pl-8 sm:pl-10">

              {/* Timeline marker node */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, delay: index * 0.1 }}
                className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-600 border-4 border-white dark:border-dark-bg flex items-center justify-center shadow-md shadow-indigo-500/20"
              >
                {item.icon}
              </motion.div>

              {/* Card content container */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl glass-card hover:border-indigo-500/10 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300"
              >
                {/* Meta details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-neutral-900 dark:text-white">
                      {item.role}
                    </h4>
                    <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      {item.company}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-neutral-500 dark:text-neutral-400 bg-neutral-200/50 dark:bg-neutral-850 px-3 py-1 rounded-full w-fit">
                    {item.duration}
                  </span>
                </div>

                {/* Bullets lists */}
                <ul className="space-y-2.5">
                  {item.description.map((bullet, i) => (
                    <li
                      key={i}
                      className="text-sm text-neutral-600 dark:text-neutral-400 flex items-start gap-2.5 leading-relaxed"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
