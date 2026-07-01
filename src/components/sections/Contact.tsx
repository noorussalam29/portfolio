"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Github, Linkedin } from "@/components/ui/Icons";

const contactMethods = [
  { label: "Email", value: "mdnoorussalam3@gmail.com", href: "mailto:mdnoorussalam3@gmail.com", icon: <Mail size={16} /> },
  { label: "Phone", value: "+91 75981 08153", href: "tel:+917598108153", icon: <Phone size={16} /> },
  { label: "LinkedIn", value: "linkedin.com/in/noorus", href: "https://linkedin.com/in/noorus", icon: <Linkedin size={16} /> },
  { label: "GitHub", value: "github.com/noorussalam29", href: "https://github.com/noorussalam29", icon: <Github size={16} /> },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24 dark:bg-[#030712]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Ready to join a collaborative engineering team."
          description="Reach out if you want a frontend developer who can contribute with strong implementation, clean UI, and practical production experience."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="rounded-[2rem] border border-[#E5E7EB] bg-[#FAFAFA] p-7 dark:border-[#1F2937] dark:bg-[#0F172A]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2563EB]">Availability</p>
            <p className="mt-4 text-2xl font-semibold text-[#111827] dark:text-[#F9FAFB]">Available full-time and ready to contribute from day one.</p>
            <p className="mt-4 text-base leading-8 text-[#6B7280]">Open to frontend roles, remote opportunities, and collaborative product teams that value quality delivery.</p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-[#6B7280]">
                <MapPin size={16} className="text-[#2563EB]" />
                Ramanathapuram, Tamil Nadu · Open to remote and Chennai roles
              </div>
              <div className="flex items-center gap-3 text-sm text-[#6B7280]">
                <Mail size={16} className="text-[#2563EB]" />
                mdnoorussalam3@gmail.com
              </div>
              <div className="flex items-center gap-3 text-sm text-[#6B7280]">
                <Phone size={16} className="text-[#2563EB]" />
                +91 75981 08153
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.06, ease: "easeOut" }}
            className="rounded-[2rem] border border-[#E5E7EB] bg-white p-7 shadow-sm dark:border-[#1F2937] dark:bg-[#0F172A]"
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium text-[#111827] dark:text-[#F9FAFB]">
                  Name
                  <input className="mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#2563EB] dark:border-[#1F2937] dark:bg-[#030712] dark:text-[#F9FAFB]" placeholder="Your name" />
                </label>
                <label className="text-sm font-medium text-[#111827] dark:text-[#F9FAFB]">
                  Email
                  <input className="mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#2563EB] dark:border-[#1F2937] dark:bg-[#030712] dark:text-[#F9FAFB]" placeholder="you@example.com" />
                </label>
              </div>

              <label className="block text-sm font-medium text-[#111827] dark:text-[#F9FAFB]">
                Message
                <textarea className="mt-2 min-h-32 w-full rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#2563EB] dark:border-[#1F2937] dark:bg-[#030712] dark:text-[#F9FAFB]" placeholder="Tell me about the role, project, or idea you have in mind." />
              </label>

              <button className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2563EB]" type="submit">
                Send message
                <ArrowRight size={15} />
              </button>
            </form>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {contactMethods.map((item) => (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA] p-4 transition-colors hover:border-[#2563EB] dark:border-[#1F2937] dark:bg-[#030712]">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#111827] dark:text-[#F9FAFB]">
                    {item.icon}
                    {item.label}
                  </div>
                  <p className="mt-2 text-sm text-[#6B7280]">{item.value}</p>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
