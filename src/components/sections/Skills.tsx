"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

interface SkillGroup {
  category: string;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    category: "Frameworks",
    items: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Cloudflare", "Vercel", "Resend API"],
  },
  {
    category: "Concepts",
    items: ["Responsive Design", "REST API Integration", "Input Validation", "Email Automation", "CI/CD Deployment"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#FAFAFA] py-24 dark:bg-[#030712]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technical Skills"
          title="A practical frontend stack that matches your resume layout."
          description="The skill set is organized to reflect the exact categories from your CV, with technologies and concepts recruiters want to see at a glance."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.04 * index, ease: "easeOut" }}
              className="rounded-[2rem] border border-[#E5E7EB] bg-white p-7 shadow-sm dark:border-[#1F2937] dark:bg-[#0F172A]"
            >
              <p className="text-sm font-semibold text-[#111827] dark:text-[#F9FAFB]">{group.category}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-[#E5E7EB] bg-[#FAFAFA] px-3 py-1.5 text-sm font-medium text-[#111827] dark:border-[#1F2937] dark:bg-[#030712] dark:text-[#F9FAFB]">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
