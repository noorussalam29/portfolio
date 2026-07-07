"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Github } from "@/components/ui/Icons";

const project = {
  title: "ADCS — Active Dynamic Cleaning Services",
  period: "2026",
  hero: "/project-corp.png",
  description: "Designed and deployed a live website for a Dubai-based cleaning services company, enabling customers to submit service bookings through a secure online system.",
  details: [
    "Developed a responsive frontend using Next.js, React, TypeScript, and Tailwind CSS.",
    "Built secure server-side booking APIs with input validation and XSS protection.",
    "Integrated the Resend API to automate booking confirmation emails.",
    "Configured deployment, DNS, SSL, and caching using Cloudflare.",
    "Implemented SEO metadata and optimized the application for performance.",
  ],
  stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Resend API", "Cloudflare"],
  liveUrl: "https://www.activedynamicdubai.com",
  githubUrl: "https://github.com/noorussalam29/active-dynamic-cleaning",
};

export default function Projects() {
  return (
    /* Consistent section padding across all sections */
    <section id="projects" className="bg-white pt-8 pb-8 text-slate-950 sm:pt-12 sm:pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-left">
        
        {/* FIXED: Updated title and description to match copy instructions */}
        <SectionHeading
          eyebrow="Projects"
          align="left"
          title="Featured Client Project."
          description="A production-ready corporate website successfully delivered for a Dubai-based client."
        />

        {/* Spacing: mt-8 for heading-to-content gap */}
        <div className="mt-8 grid grid-cols-1 gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Left Column: Mobile-First Image Container */}
          <div className="w-full lg:col-span-5 lg:sticky lg:top-24">
            <div className="w-full overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-2 shadow-sm transition-colors duration-200 hover:border-slate-200">
              <div className="relative w-full max-w-full overflow-hidden rounded-xl bg-slate-100 aspect-[4/3] sm:aspect-[16/10]">
                <Image 
                  src={project.hero} 
                  alt="ADCS corporate infrastructure layout overview" 
                  fill 
                  className="object-cover transition-transform duration-500 ease-out hover:scale-[1.02]" 
                  sizes="(max-width: 1024px) 100vw, 40vw" 
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column: Deep Technical Narrative */}
          <div className="space-y-8 lg:col-span-7 lg:pl-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-600 font-mono">
                Production Client Case
              </p>
              
              <div className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
                  {project.title}
                </h3>
                <span className="font-mono text-xs tracking-wider text-slate-400">
                  [{project.period}]
                </span>
              </div>
              
              <p className="mt-4 text-base sm:text-lg leading-8 text-slate-600">
                {project.description}
              </p>
            </div>

            {/* Implementation Details */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
                Core Contributions
              </h4>
              <ul className="space-y-3.5 text-slate-600 text-sm sm:text-base leading-8">
                {project.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" aria-hidden="true" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Applied */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
                Technologies Applied
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span 
                    key={tech} 
                    className="inline-flex items-center rounded-lg border border-slate-200/60 bg-white px-2.5 py-1 text-xs font-medium text-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Connections */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-xs font-semibold text-white transition-colors duration-150 hover:bg-slate-800 shadow-sm"
              >
                <span>Visit Live Site</span>
                <ExternalLink size={14} className="opacity-80" />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-800 transition-colors duration-150 hover:border-slate-300 hover:text-slate-950"
              >
                <Github />
                <span>Source Repository</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}