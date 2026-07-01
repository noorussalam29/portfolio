"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Github } from "@/components/ui/Icons";

const project = {
  title: "ADCS – Active Dynamic Cleaning Services",
  subtitle: "Corporate Website",
  year: "2026",
  description:
    "Designed and developed a fully responsive corporate website for a Dubai-based cleaning services client, delivering a polished business experience with secure booking workflows and strong frontend performance.",
  image: "/project-corporate.png",
  stack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Resend API", "Cloudflare"],
  points: [
    "Built a secure server-side contact and booking API with strict input validation and HTML escaping to prevent XSS and injection attacks.",
    "Engineered an automated dual-email notification system using Resend API, instantly confirming bookings to both customer and admin.",
    "Managed end-to-end project delivery using Git/GitHub, deployment, and DNS configuration on Cloudflare.",
    "Delivered a performant, mobile-first UI with optimized loading speed and clean component architecture.",
  ],
  liveUrl: "https://www.activedynamicdubai.com",
  githubUrl: "https://github.com/noorussalam29/active-dynamic",
};

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-24 dark:bg-[#030712]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Featured project from real client work."
          description="This project highlights the same production-level delivery and secure frontend implementation described in your resume."
        />

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="grid gap-6 overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-[#FAFAFA] p-5 shadow-sm md:p-7 dark:border-[#1F2937] dark:bg-[#0F172A] lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div className="overflow-hidden rounded-[1.5rem] border border-[#E5E7EB] bg-white dark:border-[#1F2937] dark:bg-[#030712]">
            <div className="relative aspect-[16/10]">
              <Image src={project.image} alt={project.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#2563EB]">
                <Code2 size={14} />
                {project.subtitle}
              </div>
              <div className="mt-3 flex items-center gap-3 text-sm text-[#6B7280]">
                <span className="rounded-full border border-[#E5E7EB] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#111827] dark:border-[#1F2937] dark:text-[#F9FAFB]">{project.year}</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-[#111827] dark:text-[#F9FAFB]">{project.title}</h3>
              <p className="mt-4 text-base leading-8 text-[#6B7280]">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-[#E5E7EB] bg-white px-3 py-1.5 text-sm font-medium text-[#111827] dark:border-[#1F2937] dark:bg-[#030712] dark:text-[#F9FAFB]">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                {project.points.map((point) => (
                  <p key={point} className="text-sm leading-7 text-[#6B7280]">• {point}</p>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#2563EB]">
                Live demo
                <ExternalLink size={14} />
              </a>
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm font-medium text-[#111827] transition-colors hover:border-[#2563EB] hover:text-[#2563EB] dark:border-[#1F2937] dark:bg-[#030712] dark:text-[#F9FAFB]">
                <Github size={14} />
                GitHub
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-transparent px-4 py-2.5 text-sm font-medium text-[#111827] transition-colors hover:border-[#2563EB] hover:text-[#2563EB] dark:border-[#1F2937] dark:text-[#F9FAFB]">
                Contact
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
