"use client";

import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { Github, Linkedin, Twitter } from "@/components/ui/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative z-10 border-t border-neutral-200 dark:border-neutral-900 bg-white dark:bg-dark-bg py-12 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand/Copyright */}
          <div className="text-center md:text-left">
            <span className="font-bold text-base bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Noorus.dev
            </span>
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
              &copy; {new Date().getFullYear()} Mohamed Noorus Salam. All rights reserved. Designed for recruiters & clients.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/noorussalam29"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/mohamed-noorus-salam-mock"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:noorussalam.dev@example.com"
              className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center p-3 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 border border-neutral-200 dark:border-neutral-800 transition-all duration-200 hover:scale-110 shadow-sm"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
