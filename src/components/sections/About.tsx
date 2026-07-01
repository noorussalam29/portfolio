"use client";

import { motion } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const facts = [
  { label: "Languages", value: "Tamil (Native) | English (Conversational)" },
  { label: "Education", value: "BCA (2024)" },
  { label: "Location", value: "Ramanathapuram, Tamil Nadu" },
];

const education = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    organization: "Syed Ammal Arts and Science College",
    period: "2021 — 2024",
    location: "Ramanathapuram, Tamil Nadu",
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    organization: "Raja Matriculation Higher Secondary School",
    period: "2019 — 2021",
    location: "Ramanathapuram",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24 dark:bg-[#030712]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Professional Summary"
          title="Frontend Developer with a BCA degree and production project delivery."
          description="Frontend Developer with a BCA degree (2024) and hands-on experience building and deploying production-ready frontend solutions. Proficient in React.js, Next.js, TypeScript, and Tailwind CSS. Successfully delivered a live corporate website for a Dubai-based client, implementing secure API integration and automated email workflows. Seeking to contribute to a collaborative engineering team while building modern, scalable, and user-focused frontend applications."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="rounded-[2rem] border border-[#E5E7EB] bg-[#FAFAFA] p-7 shadow-sm dark:border-[#1F2937] dark:bg-[#0F172A]"
          >
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#2563EB]">
              <Sparkles size={14} />
              Quick facts
            </div>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[#6B7280]">
              {facts.map((fact) => (
                <li key={fact.label} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#2563EB]" />
                  <div>
                    <p className="font-semibold text-[#111827] dark:text-[#F9FAFB]">{fact.label}</p>
                    <p>{fact.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.06, ease: "easeOut" }}
            className="space-y-4"
          >
            {education.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-5 dark:border-[#1F2937] dark:bg-[#0F172A]">
                <p className="text-sm font-semibold text-[#111827] dark:text-[#F9FAFB]">{item.title}</p>
                <p className="mt-2 text-sm leading-7 text-[#6B7280]">{item.organization}</p>
                <p className="mt-1 text-sm text-[#6B7280]">{item.period} · {item.location}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
