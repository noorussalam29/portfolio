"use client";

import React from "react";
import { motion } from "framer-motion";
import {
GraduationCap,
Sparkles,
Languages,
Heart,
CheckCircle2,
Code2,
Briefcase,
} from "lucide-react";

export default function About() {
const languages = [
{
name: "Tamil",
level: "Native / Bilingual",
percentage: 100,
},
{
name: "English",
level: "Professional Working Proficiency",
percentage: 85,
},
];

const interests = [
"Modern Web Technologies",
"Frontend Application Development",
"Building Responsive Web Applications",
"Learning New Technologies",
"Exploring New Frameworks & Tools",
];

return ( <section
   id="about"
   className="relative py-24 bg-white dark:bg-dark-bg overflow-hidden"
 > <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
{/* Header */} <div className="max-w-3xl mx-auto text-center mb-16">
<motion.span
initial={{ opacity: 0, y: 15 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
className="inline-block text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.25em] text-xs font-bold mb-4"
>
About Me
</motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white"
      >
        Frontend Developer Passionate About Creating Modern Web Experiences
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-neutral-600 dark:text-neutral-400 leading-relaxed"
      >
        Frontend Developer with hands-on experience building modern,
        responsive, and production-ready web applications using React.js,
        Next.js, TypeScript, and Tailwind CSS. Passionate about creating
        high-performance user interfaces and continuously learning new
        technologies.
      </motion.p>
    </div>

    {/* Main Grid */}
    <div className="grid lg:grid-cols-2 gap-10 xl:gap-14">
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        {/* Education */}
        <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 p-7 bg-white dark:bg-neutral-900">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap
              size={24}
              className="text-indigo-600 dark:text-indigo-400"
            />
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
              Education & Background
            </h3>
          </div>

          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            I completed my Bachelor of Computer Applications (BCA) in 2024
            and have gained practical experience developing professional web
            applications using modern frontend technologies.
          </p>

          <p className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
            My primary focus is creating responsive, scalable, and
            user-friendly web applications using React.js, Next.js,
            TypeScript, JavaScript, Tailwind CSS, and Material UI.
          </p>
        </div>

        {/* Career Objective */}
        <div className="rounded-3xl bg-gradient-to-r from-indigo-500 to-violet-500 p-[1px]">
          <div className="rounded-3xl bg-white dark:bg-neutral-900 p-7">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase
                size={22}
                className="text-indigo-600 dark:text-indigo-400"
              />
              <h3 className="font-bold text-lg text-neutral-900 dark:text-white">
                Career Objective
              </h3>
            </div>

            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Seeking a Frontend Developer opportunity where I can
              contribute my React.js, Next.js, TypeScript, and UI
              development skills while continuing to grow as a software
              engineer and deliver impactful user experiences.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Right */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        {/* Languages */}
        <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 p-7 bg-white dark:bg-neutral-900">
          <div className="flex items-center gap-3 mb-6">
            <Languages
              size={22}
              className="text-indigo-600 dark:text-indigo-400"
            />
            <h3 className="font-bold text-lg text-neutral-900 dark:text-white">
              Languages
            </h3>
          </div>

          <div className="space-y-5">
            {languages.map((lang) => (
              <div key={lang.name}>
                <div className="flex justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-neutral-800 dark:text-neutral-200">
                      {lang.name}
                    </h4>
                    <p className="text-xs text-neutral-500">
                      {lang.level}
                    </p>
                  </div>

                  <span className="text-sm font-semibold text-indigo-600">
                    {lang.percentage}%
                  </span>
                </div>

                <div className="h-2 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-500 rounded-full"
                    style={{ width: `${lang.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 p-7 bg-white dark:bg-neutral-900">
          <div className="flex items-center gap-3 mb-5">
            <Heart
              size={22}
              className="text-violet-600 dark:text-violet-400"
            />
            <h3 className="font-bold text-lg text-neutral-900 dark:text-white">
              Interests
            </h3>
          </div>

          <div className="space-y-3">
            {interests.map((interest) => (
              <div
                key={interest}
                className="flex items-start gap-2 text-neutral-600 dark:text-neutral-400"
              >
                <CheckCircle2
                  size={16}
                  className="text-violet-500 mt-0.5 shrink-0"
                />
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
