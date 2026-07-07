"use client";

import { motion, Variants } from "framer-motion";

export default function About() {
  const principles = [
    "Clean Architecture",
    "Performance First",
    "Accessibility",
    "Responsive Design",
    "Continuous Learning"
  ];

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    }
  };

  return (
    /* Consistent section padding across all sections */
    <section id="about" className="bg-white pt-8 pb-8 text-slate-950 sm:pt-12 sm:pb-12">
      {/* Outer wrapper keeping alignment completely consistent across your portfolio */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-left">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={fadeUpVariants}
          className="space-y-4 max-w-7xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-600 font-mono">
            ABOUT
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-semibold tracking-[-0.03em] leading-tight text-slate-900 max-w-7xl">
            I build frontend experiences that are clean, intuitive, and reliable.
          </h2>
        </motion.div>

        {/* Spacing: mt-8 for heading-to-content gap, space-y-6 for paragraph spacing */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          transition={{ staggerChildren: 0.08 }}
          className="mt-8 max-w-7xl space-y-6 text-base sm:text-lg leading-8 text-slate-600"
        >
          <motion.p variants={fadeUpVariants}>
            I&apos;m a BCA graduate passionate about building web applications with a strong focus on usability, performance, and maintainable code. I enjoy turning ideas into polished digital experiences that solve real-world problems.
          </motion.p>
          
          <motion.p variants={fadeUpVariants}>
            Recently, I delivered a live corporate website for a Dubai-based client, gaining hands-on experience across the full development lifecycle—from user interface implementation and secure API integration to deployment and post-launch support.
          </motion.p>
          
          <motion.p variants={fadeUpVariants}>
            I&apos;m currently seeking an opportunity where I can contribute to meaningful products, learn from experienced engineers, and continue growing as a Frontend Developer.
          </motion.p>

          {/* Minimalist Divider Line spanning across the layout width */}
          <motion.div variants={fadeUpVariants} className="pt-4">
            <div className="h-px bg-slate-100 w-full" />
          </motion.div>

          {/* Engineering Principles Cluster */}
          <motion.div variants={fadeUpVariants} className="pt-4 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
              Engineering Principles
            </h3>
            
            <div className="flex flex-wrap gap-2 pt-1">
              {principles.map((principle) => (
                <span
                  key={principle}
                  className="inline-flex items-center rounded-lg border border-slate-200/80 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 transition-colors duration-150 hover:border-slate-300"
                >
                  {principle}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}