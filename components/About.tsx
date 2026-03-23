"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PERSONAL, STATS, SKILL_GROUPS } from "@/lib/cv-data";

function StatCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="font-serif text-4xl text-[#C9A84C] mb-1"
      >
        {value}
      </motion.div>
      <div className="text-xs font-sans text-[#6B6B6E] tracking-widest uppercase">
        {label}
      </div>
    </div>
  );
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-sans text-[#8A9E85] tracking-[0.25em] uppercase mb-12"
        >
          About
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="aspect-[4/5] border border-[#C9A84C] bg-[#F0EFE9] flex items-center justify-center relative overflow-hidden max-w-[380px]">
              <div className="absolute inset-4 border border-[#C9A84C]/30" />
              <div className="text-center">
                <div className="font-serif text-6xl text-[#C9A84C] mb-3">A</div>
                <p className="text-xs font-sans text-[#6B6B6E] tracking-widest uppercase">
                  Andrea M. Bravo Ojeda
                </p>
              </div>
              {/* Decorative corner */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[#C9A84C]" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[#C9A84C]" />
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-serif text-4xl md:text-5xl text-[#1C1C1E] leading-tight mb-6"
            >
              Bridging Business,<br />
              <span className="italic text-[#C9A84C]">Technology & Culture</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-[#6B6B6E] font-sans leading-relaxed mb-10 text-base"
            >
              {PERSONAL.bio}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="grid grid-cols-4 gap-6 pb-10 mb-10 border-b border-[#1C1C1E]/10"
            >
              {STATS.map((stat) => (
                <StatCounter key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </motion.div>

            {/* Skill pills */}
            <div className="space-y-5">
              {SKILL_GROUPS.map((group, gi) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + gi * 0.1 }}
                >
                  <p className="text-xs font-sans text-[#8A9E85] tracking-widest uppercase mb-2">
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-sans border border-[#1C1C1E]/15 text-[#3A3A3C] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
