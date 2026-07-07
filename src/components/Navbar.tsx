"use client";

import { useEffect, useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection(navItems.map((item) => item.id));

  const handleScroll = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 88;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const offsetPosition = elementRect - bodyRect - offset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <button
            onClick={() => handleScroll("home")}
            className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-900 transition hover:text-slate-700 whitespace-nowrap"
          >
            PORTFOLIO
          </button>

          <nav aria-label="Primary navigation" className="hidden items-center gap-3 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                    isActive ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-slate-300 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-x-0 top-16 z-40 border-t border-slate-200/80 bg-white/95 p-5 shadow-lg md:hidden">
          <div className="mx-auto max-w-md">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className={`w-full rounded-2xl px-4 py-3 text-left text-base font-medium transition ${
                    activeSection === item.id ? "bg-slate-900 text-white" : "text-slate-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}