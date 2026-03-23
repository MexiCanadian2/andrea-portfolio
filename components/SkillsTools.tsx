"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SOFT_SKILLS, HARD_TOOLS, LANGUAGES } from "@/lib/cv-data";

function AnimatedBar({ label, value, delay }: { label: string; value: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-sans text-[#3A3A3C]">{label}</span>
        <span className="text-xs font-sans text-[#8A9E85]">{value}%</span>
      </div>
      <div className="h-px bg-[#1C1C1E]/8 relative overflow-visible">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
          style={{ originX: 0, width: `${value}%` }}
          className="absolute top-0 left-0 h-px bg-[#C9A84C]"
        />
        <motion.div
          initial={{ left: "0%" }}
          animate={inView ? { left: `${value}%` } : {}}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#C9A84C]"
          style={{ top: "50%" }}
        />
      </div>
    </div>
  );
}

function LanguageBar({ lang, level, value, delay }: { lang: string; level: string; value: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-sans text-[#3A3A3C]">{lang}</span>
        <span className="text-xs font-sans text-[#C9A84C] tracking-widest uppercase">{level}</span>
      </div>
      <div className="h-px bg-[#1C1C1E]/8 relative">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          style={{ originX: 0, width: `${value}%` }}
          className="absolute top-0 left-0 h-px bg-[#8A9E85]"
        />
      </div>
    </div>
  );
}

export default function SkillsTools() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="py-24 px-6 bg-[#F0EFE9]">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-sans text-[#8A9E85] tracking-[0.25em] uppercase mb-4"
        >
          Skills & Tools
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl text-[#1C1C1E] mb-16"
        >
          Capabilities
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: Soft skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-serif text-xl text-[#1C1C1E] mb-8">
              Core Competencies
            </h3>
            <div>
              {SOFT_SKILLS.map((s, i) => (
                <AnimatedBar key={s.label} label={s.label} value={s.value} delay={0.3 + i * 0.1} />
              ))}
            </div>

            <div className="mt-12">
              <h3 className="font-serif text-xl text-[#1C1C1E] mb-8">Languages</h3>
              {LANGUAGES.map((l, i) => (
                <LanguageBar
                  key={l.lang}
                  lang={l.lang}
                  level={l.level}
                  value={l.value}
                  delay={0.6 + i * 0.15}
                />
              ))}
            </div>
          </motion.div>

          {/* Right: Hard tools */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-serif text-xl text-[#1C1C1E] mb-8">Tools & Platforms</h3>
            <div className="grid grid-cols-2 gap-3">
              {HARD_TOOLS.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.06 }}
                  className="flex items-center gap-3 px-4 py-3 bg-[#FAFAF8] border border-[#1C1C1E]/8 hover:border-[#C9A84C] transition-colors duration-300 group"
                >
                  <span className="text-xl" role="img" aria-hidden="true">{tool.icon}</span>
                  <span className="text-sm font-sans text-[#3A3A3C] group-hover:text-[#C9A84C] transition-colors duration-300">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
