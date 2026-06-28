"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Award, GraduationCap, BookOpen } from "lucide-react";

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
    icon: <Briefcase size={15} />,
  },
  {
    role: "Bachelor of Computer Applications (B.C.A.)",
    company: "Syed Ammal Arts And Science College",
    duration: "2021 – 2024",
    description: [
      "Completed degree program focusing on software concepts, databases, and programming fundamentals.",
      "Specialized in web programming and frontend technology stacks (React, JavaScript, CSS).",
      "Created functional client-side mock projects demonstrating strong coding and design system principles.",
    ],
    icon: <GraduationCap size={15} />,
  },
  {
    role: "Higher Secondary Course (H.S.C.)",
    company: "Raja Matriculation Higher Secondary School",
    duration: "2019 – 2021",
    description: [
      "Focused on advanced secondary coursework including computer science concepts, mathematics, and science.",
      "Developed logic-building and algorithms foundations through school-level programming modules.",
    ],
    icon: <BookOpen size={15} />,
  },
  {
    role: "Secondary School Leaving Certificate (S.S.L.C.)",
    company: "Raja Matriculation Higher Secondary School",
    duration: "2017 – 2019",
    description: [
      "Completed standard secondary education coursework with high proficiency in mathematics and science.",
    ],
    icon: <Award size={15} />,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 bg-neutral-50 dark:bg-dark-bg/40 border-y border-neutral-200/50 dark:border-neutral-900/60"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3"
          >
            My Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white"
          >
            Experience & Education
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-neutral-200 dark:border-neutral-800 ml-4 sm:ml-5 space-y-10">
          {experienceData.map((item, index) => (
            <div key={item.role} className="relative pl-8 sm:pl-10">

              {/* Timeline dot */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.07 }}
                className="absolute -left-[17px] top-2 w-7 h-7 rounded-full bg-white dark:bg-neutral-900 border-2 border-indigo-500 dark:border-indigo-500 flex items-center justify-center text-indigo-600 dark:text-indigo-400"
              >
                {item.icon}
              </motion.div>

              {/* Card */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-5 sm:p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
              >
                {/* Meta */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
                      {item.role}
                    </h3>
                    <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                      {item.company}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500 bg-neutral-100 dark:bg-neutral-800 px-2.5 py-0.5 rounded-full w-fit shrink-0">
                    {item.duration}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2">
                  {item.description.map((bullet, i) => (
                    <li
                      key={i}
                      className="text-xs text-neutral-500 dark:text-neutral-400 flex items-start gap-2 leading-relaxed"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-400 shrink-0" />
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
