"use client";

import { Mail, Phone } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Github, Linkedin } from "@/components/ui/Icons";

const contactItems = [
  { label: "Email", value: "mdnoorussalam3@gmail.com", href: "mailto:mdnoorussalam3@gmail.com", icon: <Mail size={16} /> },
  { label: "Phone", value: "+91 7598108153", href: "tel:+917598108153", icon: <Phone size={16} /> },
  { label: "GitHub", value: "github.com/noorussalam29", href: "https://github.com/noorussalam29", icon: <Github size={16} /> },
  { label: "LinkedIn", value: "linkedin.com/in/noorus", href: "https://linkedin.com/in/noorus", icon: <Linkedin size={16} /> },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white pt-8 pb-8 text-slate-950 sm:pt-12 sm:pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-left">
        
        <SectionHeading
          eyebrow="Contact"
          align="left"
          title="Open to Frontend Developer Opportunities."
          description="Let's connect. Reach out directly via email, phone, or find me on my professional profiles below."
          singleLineOnDesktop={true}
        />

        <div className="mt-8 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 max-w-4xl w-full">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 rounded-xl border border-slate-200/80 bg-white p-4 text-slate-900 transition-colors duration-150 hover:border-slate-400"
            >
              {/* Tightened icon alignment */}
              <div className="text-slate-400 transition-colors duration-150 group-hover:text-sky-600 shrink-0">
                {item.icon}
              </div>
              
              {/* Clean, low-profile row layout inside the card */}
              <div className="min-w-0">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 leading-tight">
                  {item.label}
                </p>
                <p className="mt-1.5 text-sm sm:text-base font-medium text-slate-800 transition-colors duration-150 group-hover:text-slate-950 truncate">
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}