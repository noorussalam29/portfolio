"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/ui/Icons";

interface ProjectItem {
  name: string;
  category: "corporate";
  description: string;
  techStack: string[];
  image: string;
  liveUrl: string;
  gitUrl: string;
}

const projectsData: ProjectItem[] = [
  {
    name: "ADCS Corporate Website",
    category: "corporate",
    description: "A responsive corporate website built for Active Dynamic Cleaning Services. Features a secure contact/booking API with strict input validation, HTML-escaping, and automated dual-email notifications (company & customer) via Resend API.",
    techStack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Resend API", "Cloudflare"],
    image: "/project-corporate.png",
    liveUrl: "https://www.activedynamicdubai.com",
    gitUrl: "https://github.com/noorussalam29/adcs-corporate-website",
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<"all" | "corporate" | "ecommerce" | "saas" | "ai">("all");

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "all") return true;
    return project.category === activeFilter;
  });

  return (
    <section 
      id="projects" 
      className="relative py-24 bg-white dark:bg-dark-bg transition-all duration-300 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute bottom-1/4 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-radial-glow-violet rounded-full pointer-events-none opacity-45" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3"
          >
            My Projects
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white"
          >
            Showcasing High-Fidelity Web Projects
          </motion.h3>
        </div>

        {/* Projects Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl overflow-hidden glass-card flex flex-col h-full hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-300"
              >
                {/* Project Image Preview with hover overlay */}
                <div className="relative h-64 w-full bg-neutral-950/20 dark:bg-neutral-950/50 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />
                  
                  {/* Category tag */}
                  <span className="absolute top-4 left-4 text-[10px] font-bold text-white bg-indigo-500 px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {project.category}
                  </span>
                </div>

                {/* Info and links */}
                <div className="p-8 flex flex-col justify-between flex-1 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                      {project.name}
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-bold text-neutral-600 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/80 px-2 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions buttons */}
                  <div className="flex items-center gap-4 pt-2 border-t border-neutral-100 dark:border-neutral-900">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                    <a
                      href={project.gitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <Github size={14} />
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
