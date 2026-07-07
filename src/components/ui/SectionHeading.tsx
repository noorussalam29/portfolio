"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  singleLineOnDesktop?: boolean; // Added an explicit prop to control text wrapping safely
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  singleLineOnDesktop = false, // Defaults to false so your other pages wrap normally
}: SectionHeadingProps) {
  const alignmentClass =
    align === "center"
      ? "items-center text-center mx-auto max-w-3xl md:max-w-2xl"
      : "items-start text-left ml-0 max-w-5xl"; 

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`flex flex-col ${alignmentClass}`}
    >
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] text-sky-600 mb-4 font-mono">
        {eyebrow}
      </span>
      
      <h2 className={`text-4xl sm:text-5xl font-semibold leading-tight tracking-[-0.03em] text-slate-900 ${
        singleLineOnDesktop ? "lg:whitespace-nowrap" : ""
      }`}>
        {title}
      </h2>
      
      {description ? (
        <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg max-w-4xl">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}