"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/ui/Icons";

interface ProjectItem {
  name: string;
  description: string;
  techStack: string[];
  image: string;
  liveUrl: string;
  gitUrl: string;
}

const projectsData: ProjectItem[] = [
  {
    name: "ADCS Corporate Website",
    description:
      "A responsive corporate website built for Active Dynamic Cleaning Services. Features a secure contact/booking API with strict input validation, HTML-escaping, and automated dual-email notifications (company & customer) via Resend API.",
    techStack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Resend API", "Cloudflare"],
    image: "/project-corporate.png",
    liveUrl: "https://www.activedynamicdubai.com",
    gitUrl: "https://github.com/noorussalam29/adcs-corporate-website",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 bg-white dark:bg-dark-bg"
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
            My Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white"
          >
            Projects
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group rounded-xl overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors duration-200"
            >
              {/* Project Image */}
              <div className="relative h-52 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-950">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Info and links */}
              <div className="p-6 flex flex-col flex-1 gap-4">
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                    {project.name}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-medium text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-5 pt-2 border-t border-neutral-100 dark:border-neutral-800 mt-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <ExternalLink size={13} />
                    Live Site
                  </a>
                  <a
                    href={project.gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <Github size={13} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
