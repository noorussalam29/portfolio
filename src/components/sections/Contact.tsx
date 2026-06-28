"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Mail, MapPin, Send, MessageSquare, Check, Phone } from "lucide-react";
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

    // Simulate backend submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: "", email: "", message: "" });

    // Trigger canvas confetti celebration
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#6366f1", "#8b5cf6", "#10b981"],
    });

    // Reset success banner after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when editing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 bg-white dark:bg-dark-bg transition-all duration-300 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[550px] h-[550px] bg-radial-glow-violet rounded-full pointer-events-none opacity-45" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3"
          >
            Get In Touch
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white"
          >
            Let's Collaborate On Your Next Project
          </motion.h3>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-neutral-800 dark:text-white">
                Contact Information
              </h4>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Have an exciting project idea, a position to fill, or simply want to chat? Drop me a message, and I'll get back to you within 24 hours.
              </p>
            </div>

            {/* Info cards */}
            <div className="space-y-4">
              
              {/* Mail Card */}
              <div className="flex items-center gap-4 p-5 rounded-2xl glass-card border border-neutral-200/50 dark:border-neutral-800">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 dark:bg-indigo-400/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">Email Me</span>
                  <a href="mailto:noorussalam.dev@example.com" className="text-sm font-semibold text-neutral-800 dark:text-white hover:underline">
                    noorussalam.dev@example.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-center gap-4 p-5 rounded-2xl glass-card border border-neutral-200/50 dark:border-neutral-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-400/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">Call Me</span>
                  <a href="tel:+919999999999" className="text-sm font-semibold text-neutral-800 dark:text-white hover:underline">
                    +91 99999 99999
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-5 rounded-2xl glass-card border border-neutral-200/50 dark:border-neutral-800">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 dark:bg-violet-400/10 flex items-center justify-center text-violet-600 dark:text-violet-400 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">Location</span>
                  <span className="text-sm font-semibold text-neutral-800 dark:text-white">
                    Ramanathapuram, Tamil Nadu, India
                  </span>
                </div>
              </div>

            </div>

            {/* Social profiles connections */}
            <div className="space-y-4 pt-4">
              <h5 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Social Channels</h5>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/mohamed-noorus-salam-mock"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-850 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors text-sm font-semibold text-neutral-600 dark:text-neutral-300"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/noorussalam29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-850 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors text-sm font-semibold text-neutral-600 dark:text-neutral-300"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7 w-full">
            <div className="p-8 rounded-3xl glass-card relative overflow-hidden">
              <AnimatePresence mode="wait">
                {submitSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6 border border-emerald-500/20">
                      <Check size={32} />
                    </div>
                    <h5 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                      Message Sent Successfully!
                    </h5>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-sm">
                      Thank you for reaching out. I have received your email and will be in touch shortly!
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    noValidate
                  >
                    {/* Name Input */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-950 border text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 transition-all ${
                          errors.name
                            ? "border-red-500 focus:ring-red-500/20"
                            : "border-neutral-200 dark:border-neutral-800 focus:border-indigo-500 focus:ring-indigo-500/20"
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 font-semibold">{errors.name}</p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-950 border text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? "border-red-500 focus:ring-red-500/20"
                            : "border-neutral-200 dark:border-neutral-800 focus:border-indigo-500 focus:ring-indigo-500/20"
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 font-semibold">{errors.email}</p>
                      )}
                    </div>

                    {/* Message TextArea */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-950 border text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 transition-all ${
                          errors.message
                            ? "border-red-500 focus:ring-red-500/20"
                            : "border-neutral-200 dark:border-neutral-800 focus:border-indigo-500 focus:ring-indigo-500/20"
                        }`}
                        placeholder="Hi Mohamed, I'd love to work with you on..."
                      />
                      {errors.message && (
                        <p className="text-xs text-red-500 font-semibold">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold text-sm hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:pointer-events-none shadow-md shadow-indigo-500/5 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-neutral-400 border-t-indigo-600 rounded-full animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
