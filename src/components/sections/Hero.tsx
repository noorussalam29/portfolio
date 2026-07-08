"use client";

import Link from "next/link";
import { Github, Linkedin } from "@/components/ui/Icons";

export default function Hero() {
  return (
    <section id="home" className="bg-white text-slate-950">
      {/* 
        Spacing Fix: Cleaned up vertical paddings. 
        Low mobile padding ensures the 'About' or 'Projects' section below peeks through perfectly.
      */}
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-4 lg:px-8 lg:pt-24 lg:pb-6">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:items-center">
          
          {/* 1. Header Block */}
          <div className="space-y-3">
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-medium text-emerald-700 w-fit">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Open to Frontend Developer Opportunities
            </div>
            
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.32em] text-sky-600 font-semibold">
                Frontend Developer
              </p>
              {/* 
                FIXED: Added whitespace-nowrap and dynamically scaled font sizes 
                (text-2xl on modern base screens up to text-5xl on desktop) to keep it perfectly inline.
              */}
              <h1 className="mt-2 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 whitespace-nowrap">
                Mohamed Noorus Salam
              </h1>
            </div>
          </div>

          {/* 
            2. DESKTOP-ONLY CORE TECHNOLOGIES 
            Using hidden lg:block ensures this is 100% removed from mobile, 
            but preserves the gorgeous, empty-space-filling layout on desktop.
          */}
          <div className="hidden lg:block lg:row-span-2 w-full max-w-sm mx-auto lg:max-w-none my-4 lg:my-0">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 sm:p-6 shadow-sm">
              <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-5">
                Core Technologies
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "React.js", level: "Frontend Core" },
                  { name: "Next.js", level: "SSR & Routing" },
                  { name: "TypeScript", level: "Type Safety" },
                  { name: "Tailwind CSS", level: "Utility Styling" },
                  { name: "JavaScript", level: "ES6+ Architecture" },
                  { name: "Git / GitHub", level: "Version Control" },
                ].map((tech) => (
                  <div 
                    key={tech.name} 
                    className="rounded-xl border border-slate-200/60 bg-white p-3.5 transition duration-150 hover:border-sky-300 hover:shadow-sm"
                  >
                    <p className="text-sm font-semibold text-slate-800 tracking-tight whitespace-nowrap">{tech.name}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-normal">{tech.level}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Description & Links Block */}
          <div className="space-y-8 lg:-mt-6">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-slate-600 sm:text-xl sm:leading-8">
                I build fast, user-focused web applications using React, Next.js, TypeScript, and Tailwind CSS. I enjoy transforming UI designs into clean, accessible, and polished web experiences.
              </p>
              
              {/* Info Tags */}
              <div className="flex flex-col gap-1.5 text-sm font-medium text-slate-500 sm:flex-row sm:items-center sm:gap-4">
                <p className="flex items-center gap-1.5">
                  <span>📍</span> Chennai, Tamil Nadu
                </p>
                <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
                <p className="flex items-center gap-1.5">
                  <span>🎓</span> BCA Graduate • Immediate Joiner
                </p>
              </div>
            </div>

            {/* Call To Actions & Socials (Follows immediately on mobile!) */}
            <div className="space-y-8">
              <div className="flex flex-wrap gap-3">
                <Link href="#projects" className="inline-flex items-center justify-center rounded-lg bg-slate-950 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-800 shadow-sm">
                  View Projects
                </Link>
                <a href="Mohamed_Noorus_Salam_Frontend_Developer.pdf" download className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-slate-800 transition hover:border-slate-300 hover:text-slate-950">
                  Download Resume
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-5 text-slate-400">
                <a href="https://github.com/noorussalam29" target="_blank" rel="noreferrer" className="transition-colors duration-150 hover:text-slate-950">
                  <span className="sr-only">GitHub</span>
                  <Github />
                </a>
                <a href="https://www.linkedin.com/in/mohamed-noorus-salam-0186632b0" target="_blank" rel="noreferrer" className="transition-colors duration-150 hover:text-slate-950">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}