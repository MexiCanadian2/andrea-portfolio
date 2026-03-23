"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { PERSONAL } from "@/lib/cv-data";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-sans text-[#8A9E85] tracking-[0.25em] uppercase mb-4"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl text-[#1C1C1E] mb-16"
        >
          Let&apos;s Connect
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[#6B6B6E] font-sans leading-relaxed mb-10 text-base">
              Whether you&apos;re looking for an international business strategist, a digital marketing specialist, or want to explore how AI can transform your organization — I&apos;d love to hear from you.
            </p>

            <div className="space-y-5">
              <a
                href={`mailto:${PERSONAL.email}`}
                className="flex items-center gap-4 group"
                aria-label="Send email"
              >
                <div className="w-10 h-10 border border-[#1C1C1E]/12 flex items-center justify-center group-hover:border-[#C9A84C] transition-colors duration-300">
                  <Mail size={16} className="text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-xs font-sans text-[#8A9E85] uppercase tracking-widest mb-0.5">Email</p>
                  <p className="text-sm font-sans text-[#3A3A3C] group-hover:text-[#C9A84C] transition-colors duration-300">
                    {PERSONAL.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${PERSONAL.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 group"
                aria-label="Call phone number"
              >
                <div className="w-10 h-10 border border-[#1C1C1E]/12 flex items-center justify-center group-hover:border-[#C9A84C] transition-colors duration-300">
                  <Phone size={16} className="text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-xs font-sans text-[#8A9E85] uppercase tracking-widest mb-0.5">Phone</p>
                  <p className="text-sm font-sans text-[#3A3A3C] group-hover:text-[#C9A84C] transition-colors duration-300">
                    {PERSONAL.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-[#1C1C1E]/12 flex items-center justify-center">
                  <MapPin size={16} className="text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-xs font-sans text-[#8A9E85] uppercase tracking-widest mb-0.5">Location</p>
                  <p className="text-sm font-sans text-[#3A3A3C]">{PERSONAL.location}</p>
                </div>
              </div>

              <a
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                aria-label="LinkedIn profile"
              >
                <div className="w-10 h-10 border border-[#1C1C1E]/12 flex items-center justify-center group-hover:border-[#C9A84C] transition-colors duration-300">
                  <Linkedin size={16} className="text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-xs font-sans text-[#8A9E85] uppercase tracking-widest mb-0.5">LinkedIn</p>
                  <p className="text-sm font-sans text-[#3A3A3C] group-hover:text-[#C9A84C] transition-colors duration-300">
                    View Profile →
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label htmlFor="contact-name" className="block text-xs font-sans text-[#8A9E85] tracking-widest uppercase mb-2">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-[#1C1C1E]/12 bg-[#FAFAF8] text-sm font-sans text-[#1C1C1E] placeholder-[#AEAEB2] focus:outline-none focus:border-[#C9A84C] transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-sans text-[#8A9E85] tracking-widest uppercase mb-2">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-[#1C1C1E]/12 bg-[#FAFAF8] text-sm font-sans text-[#1C1C1E] placeholder-[#AEAEB2] focus:outline-none focus:border-[#C9A84C] transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-sans text-[#8A9E85] tracking-widest uppercase mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-[#1C1C1E]/12 bg-[#FAFAF8] text-sm font-sans text-[#1C1C1E] placeholder-[#AEAEB2] focus:outline-none focus:border-[#C9A84C] transition-colors duration-300 resize-none"
                  placeholder="Tell me about your opportunity or project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center gap-2 px-8 py-3.5 bg-[#1C1C1E] text-[#FAFAF8] text-sm font-sans tracking-wide hover:bg-[#3A3A3C] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <Send size={14} />
              </button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm font-sans text-[#8A9E85]"
                >
                  ✓ Message sent! I'll be in touch soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm font-sans text-red-500"
                >
                  Something went wrong. Please email me directly.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
