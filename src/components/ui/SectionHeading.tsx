"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignmentClass = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`mx-auto flex max-w-3xl flex-col ${alignmentClass} md:max-w-2xl`}
    >
      <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#2563EB] mb-3">
        {eyebrow}
      </span>
      <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#111827] dark:text-[#F9FAFB] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[#6B7280] dark:text-[#94A3B8] sm:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
