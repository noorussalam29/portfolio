"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

const quickStats = [
  { label: "Stack", value: "React · Next.js · TypeScript · Tailwind CSS" },
  { label: "Location", value: "Ramanathapuram, Tamil Nadu" },
  { label: "Contact", value: "+91 75981 08153" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#FAFAFA] py-24 pt-28 sm:py-28 lg:py-32 dark:bg-[#030712]">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#2563EB]">Frontend Developer</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-[#111827] sm:text-5xl lg:text-6xl dark:text-[#F9FAFB]">
            Mohamed Noorus Salam
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#6B7280]">
            Frontend Developer with a BCA degree (2024) and hands-on experience building and deploying production-ready frontend solutions. Proficient in React.js, Next.js, TypeScript, and Tailwind CSS.
          </p>

          <div className="mt-8 space-y-4 rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-sm dark:border-[#1F2937] dark:bg-[#0F172A]">
            <div className="flex items-center gap-3 text-sm text-[#6B7280] dark:text-[#94A3B8]">
              <Mail size={18} className="text-[#2563EB]" />
              <span>mdnoorussalam3@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#6B7280] dark:text-[#94A3B8]">
              <MapPin size={18} className="text-[#2563EB]" />
              <span>Ramanathapuram, Tamil Nadu</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <a href="https://github.com/noorussalam29" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3 text-sm font-medium text-[#111827] transition hover:border-[#2563EB] dark:border-[#1F2937] dark:bg-[#030712] dark:text-[#F9FAFB]">
                <Github size={16} />
                GitHub
              </a>
              <a href="https://linkedin.com/in/noorus" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3 text-sm font-medium text-[#111827] transition hover:border-[#2563EB] dark:border-[#1F2937] dark:bg-[#030712] dark:text-[#F9FAFB]">
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#projects" className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2563EB]">
              View projects
              <ArrowRight size={16} />
            </Link>
            <a href="/mohamed_noorus_salam_frontend_developer.pdf" download className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-5 py-3 text-sm font-medium text-[#111827] transition-colors hover:border-[#2563EB] hover:text-[#2563EB] dark:border-[#1F2937] dark:bg-[#0F172A] dark:text-[#F9FAFB]">
              <Download size={16} />
              Download resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
          className="flex flex-col gap-5"
        >
          <div className="overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-white p-3 shadow-[0_20px_60px_-25px_rgba(17,24,39,0.18)] dark:border-[#1F2937] dark:bg-[#0F172A]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
              <Image src="/profile.jpeg" alt="Mohamed Noorus Salam" fill priority sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {quickStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-[#E5E7EB] bg-white p-4 dark:border-[#1F2937] dark:bg-[#0F172A]">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6B7280]">{stat.label}</p>
                <p className="mt-1 text-sm font-semibold text-[#111827] dark:text-[#F9FAFB]">{stat.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
