"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useActiveSection } from "../hooks/useActiveSection";
import { Menu, X, Sun, Moon } from "lucide-react";

interface NavItem {
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection(navItems.map((item) => item.id));

  const handleScroll = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 84;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const offsetPosition = elementRect - bodyRect - offset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#E5E7EB] bg-[#FAFAFA]/90 backdrop-blur-xl dark:border-[#1F2937] dark:bg-[#030712]/90">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => handleScroll("home")}
            className="text-sm font-semibold tracking-[0.2em] text-[#111827] transition-colors hover:text-[#2563EB] dark:text-[#F9FAFB]"
          >
            SALAM.DEV
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#111827] text-white dark:bg-white dark:text-[#111827]"
                      : "text-[#6B7280] hover:text-[#111827] dark:hover:text-[#F9FAFB]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="rounded-full border border-[#E5E7EB] p-2 text-[#6B7280] transition-colors hover:border-[#2563EB] hover:text-[#2563EB] dark:border-[#1F2937] dark:text-[#94A3B8]"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className="hidden rounded-full bg-[#111827] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#2563EB] sm:block"
            >
              Let&apos;s talk
            </button>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="rounded-full border border-[#E5E7EB] p-2 text-[#6B7280] md:hidden dark:border-[#1F2937]"
              aria-label="Open menu"
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-16 z-40 bg-[#FAFAFA]/90 backdrop-blur-md md:hidden dark:bg-[#030712]/90"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              className="border-b border-[#E5E7EB] bg-[#FFFFFF] p-5 shadow-sm dark:border-[#1F2937] dark:bg-[#0F172A]"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleScroll(item.id)}
                    className={`rounded-2xl px-3 py-2 text-left text-sm font-medium ${
                      activeSection === item.id
                        ? "bg-[#111827] text-white dark:bg-white dark:text-[#111827]"
                        : "text-[#6B7280]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
