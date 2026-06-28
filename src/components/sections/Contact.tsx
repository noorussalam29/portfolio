"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Mail, MapPin, Send, Check, Phone } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: "", email: "", message: "" });

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#6366f1", "#8b5cf6", "#10b981"],
    });

    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-lg bg-white dark:bg-neutral-950 border text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 transition-colors ${
      hasError
        ? "border-red-400 focus:ring-red-300/30"
        : "border-neutral-200 dark:border-neutral-800 focus:border-indigo-500 focus:ring-indigo-500/20"
    }`;

  return (
    <section
      id="contact"
      className="relative py-24 bg-white dark:bg-dark-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white"
          >
            Let&apos;s work together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-3 text-sm text-neutral-500 dark:text-neutral-400"
          >
            Have a project in mind or a position to fill? Drop me a message and I&apos;ll get back to you within 24 hours.
          </motion.p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left Column: Contact details */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-4 space-y-4"
          >
            {/* Mail */}
            <div className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                <Mail size={17} />
              </div>
              <div>
                <span className="block text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">Email</span>
                <a href="mailto:noorussalam.dev@example.com" className="text-sm font-medium text-neutral-800 dark:text-white hover:underline">
                  noorussalam.dev@example.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                <Phone size={17} />
              </div>
              <div>
                <span className="block text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">Phone</span>
                <a href="tel:+919999999999" className="text-sm font-medium text-neutral-800 dark:text-white hover:underline">
                  +91 99999 99999
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <div className="w-9 h-9 rounded-lg bg-violet-50 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 shrink-0">
                <MapPin size={17} />
              </div>
              <div>
                <span className="block text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">Location</span>
                <span className="text-sm font-medium text-neutral-800 dark:text-white">
                  Ramanathapuram, Tamil Nadu, India
                </span>
              </div>
            </div>

            {/* Social */}
            <div className="pt-2">
              <p className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-3">Social</p>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/mohamed-noorus-salam-mock"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors text-sm font-medium text-neutral-600 dark:text-neutral-300"
                >
                  <Linkedin size={15} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/noorussalam29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors text-sm font-medium text-neutral-600 dark:text-neutral-300"
                >
                  <Github size={15} />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact form */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-8 w-full"
          >
            <div className="p-7 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <AnimatePresence mode="wait">
                {submitSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-500 mb-4 border border-emerald-200 dark:border-emerald-800">
                      <Check size={28} />
                    </div>
                    <h4 className="text-xl font-semibold text-neutral-900 dark:text-white mb-1">
                      Message sent!
                    </h4>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xs">
                      Thanks for reaching out. I&apos;ll be in touch shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass(!!errors.name)}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass(!!errors.email)}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500">{errors.email}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="block text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={inputClass(!!errors.message)}
                        placeholder="Hi Noorus, I'd love to work with you on..."
                      />
                      {errors.message && (
                        <p className="text-xs text-red-500">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold text-sm hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-neutral-400 border-t-white dark:border-t-neutral-900 rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
