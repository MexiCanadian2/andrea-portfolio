"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EXPERIENCE } from "@/lib/cv-data";

export default function ExperienceTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="experience" className="py-24 px-6 bg-[#F0EFE9]">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-sans text-[#8A9E85] tracking-[0.25em] uppercase mb-4"
        >
          Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl text-[#1C1C1E] mb-16"
        >
          Professional Journey
        </motion.h2>

        <div className="relative">
          {/* Center line — desktop only */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#C9A84C]/20 -translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-12 md:space-y-0">
            {EXPERIENCE.map((entry, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
                  className={`md:grid md:grid-cols-2 md:gap-12 ${
                    isLeft ? "" : "md:direction-rtl"
                  } md:mb-16`}
                >
                  {/* Content */}
                  <div
                    className={`${
                      isLeft
                        ? "md:col-start-1 md:text-right md:pr-10"
                        : "md:col-start-2 md:text-left md:pl-10"
                    }`}
                  >
                    <div
                      className={`bg-[#FAFAF8] border border-[#1C1C1E]/8 p-6 hover:border-[#C9A84C]/40 transition-colors duration-300`}
                    >
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          isLeft ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        {/* Initial circle */}
                        <div
                          className="w-9 h-9 flex items-center justify-center text-sm font-serif text-[#FAFAF8] flex-shrink-0"
                          style={{ backgroundColor: entry.color }}
                        >
                          {entry.initial}
                        </div>
                        <div>
                          <p className="text-xs font-sans text-[#8A9E85] tracking-wider">
                            {entry.period}
                          </p>
                        </div>
                      </div>

                      <h3 className="font-serif text-lg text-[#1C1C1E] mb-1">
                        {entry.role}
                      </h3>
                      <p className="text-sm font-sans text-[#C9A84C] mb-4">
                        {entry.company}
                      </p>

                      <ul
                        className={`space-y-2 ${
                          isLeft ? "md:text-right" : ""
                        }`}
                      >
                        {entry.bullets.map((bullet, bi) => (
                          <li key={bi} className="flex items-start gap-2 text-sm font-sans text-[#6B6B6E] leading-relaxed">
                            <span className="text-[#C9A84C] mt-1 flex-shrink-0">·</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  {isLeft && <div className="hidden md:block md:col-start-2" />}
                  {!isLeft && <div className="hidden md:block md:col-start-1 md:row-start-1" />}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
