"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EDUCATION } from "@/lib/cv-data";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-sans text-[#8A9E85] tracking-[0.25em] uppercase mb-4"
        >
          Education
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl text-[#1C1C1E] mb-16"
        >
          Academic Foundation
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              className="border border-[#1C1C1E]/10 bg-[#FAFAF8] p-7 hover:border-[#C9A84C]/60 hover:bg-[#FFFEF9] transition-all duration-300 group flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 border border-[#C9A84C]/40 flex items-center justify-center group-hover:border-[#C9A84C] transition-colors duration-300">
                  <GraduationCap size={18} className="text-[#C9A84C]" />
                </div>
                <p className="text-xs font-sans text-[#8A9E85] tracking-widest uppercase">
                  {edu.period}
                </p>
              </div>

              <h3 className="font-serif text-xl text-[#1C1C1E] leading-snug mb-2">
                {edu.degree}
              </h3>
              <p className="text-sm font-sans text-[#C9A84C] mb-5">{edu.institution}</p>

              <ul className="space-y-2 mt-auto">
                {edu.highlights.map((h, hi) => (
                  <li key={hi} className="flex items-start gap-2 text-sm font-sans text-[#6B6B6E]">
                    <span className="text-[#C9A84C] mt-1">·</span>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
