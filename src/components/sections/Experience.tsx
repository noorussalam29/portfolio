"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Layers3, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const experience = [
  {
    title: "ADCS – Active Dynamic Cleaning Services",
    company: "Corporate Website",
    period: "2026",
    summary: "Delivered a real client-facing website with strong frontend execution, security, and performance.",
    achievements: [
      "Designed and developed a production-ready corporate website for a Dubai-based cleaning services company.",
      "Built a secure server-side contact and booking API with strict input validation and HTML escaping.",
      "Implemented automated dual-email notifications using Resend API for customer and admin workflows.",
      "Managed version control, deployment, and DNS configuration on Cloudflare.",
    ],
    stack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Resend API", "Cloudflare"],
    icon: <Briefcase size={15} />,
  },
];

const education = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    organization: "Syed Ammal Arts and Science College",
    period: "2021 — 2024",
    meta: "Ramanathapuram, Tamil Nadu",
    icon: <GraduationCap size={15} />,
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    organization: "Raja Matriculation Higher Secondary School",
    period: "2019 — 2021",
    meta: "Ramanathapuram",
    icon: <Layers3 size={15} />,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#FAFAFA] py-24 dark:bg-[#030712]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience & Education"
          title="Real project delivery and a formal academic foundation."
          description="The site now reflects the exact career story from your resume: a client project, a BCA degree, and technical work aligned with the CV."
        />

        <div className="space-y-8">
          {experience.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.04 * index, ease: "easeOut" }}
              className="rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-sm dark:border-[#1F2937] dark:bg-[#0F172A] md:p-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex gap-3">
                  <div className="mt-1 rounded-2xl bg-[#111827] p-2.5 text-white dark:bg-white dark:text-[#111827]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-[#111827] dark:text-[#F9FAFB]">{item.title}</p>
                    <p className="mt-2 text-sm leading-7 text-[#6B7280]">{item.summary}</p>
                  </div>
                </div>
                <div className="rounded-full border border-[#E5E7EB] px-3 py-1.5 text-sm font-medium text-[#6B7280] dark:border-[#1F2937]">
                  {item.period}
                </div>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_0.75fr]">
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#111827] dark:text-[#F9FAFB]">
                    <Sparkles size={13} className="text-[#2563EB]" />
                    Project details
                  </div>
                  <ul className="mt-3 space-y-2">
                    {item.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-2 text-sm leading-7 text-[#6B7280]">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[1.5rem] border border-[#E5E7EB] bg-[#FAFAFA] p-4 dark:border-[#1F2937] dark:bg-[#030712]">
                  <p className="text-sm font-semibold text-[#111827] dark:text-[#F9FAFB]">Technologies used</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-[#E5E7EB] bg-white px-3 py-1.5 text-sm font-medium text-[#111827] dark:border-[#1F2937] dark:bg-[#0F172A] dark:text-[#F9FAFB]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}

          <div className="grid gap-5 lg:grid-cols-2">
            {education.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: 0.04 * index, ease: "easeOut" }}
                className="rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-sm dark:border-[#1F2937] dark:bg-[#0F172A]"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-[#111827] p-2.5 text-white dark:bg-white dark:text-[#111827]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-[#111827] dark:text-[#F9FAFB]">{item.title}</p>
                    <p className="mt-1 text-sm text-[#6B7280]">{item.organization}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between rounded-full border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-2 text-sm font-medium text-[#6B7280] dark:border-[#1F2937] dark:bg-[#030712]">
                  <span>{item.period}</span>
                  <span>{item.meta}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
