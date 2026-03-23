"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { TRADE_MISSIONS } from "@/lib/cv-data";
import { ChevronDown, Globe } from "lucide-react";

function MissionCard({ mission, delay }: { mission: typeof TRADE_MISSIONS[0]; delay: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      className="bg-[#FAFAF8] border border-[#1C1C1E]/10 hover:border-[#C9A84C] transition-all duration-300 group"
    >
      <div className="p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <span className="text-4xl mb-3 block">{mission.flag}</span>
            <h3 className="font-serif text-2xl text-[#1C1C1E] mb-1">{mission.name}</h3>
            <p className="text-sm font-sans text-[#C9A84C] tracking-wide">{mission.route}</p>
            <p className="text-xs font-sans text-[#8A9E85] mt-1">{mission.year}</p>
          </div>
          <div className="text-right">
            <span className="text-xs font-sans text-[#6B6B6E] tracking-widest uppercase bg-[#F0EFE9] px-3 py-1">
              {mission.tagline}
            </span>
          </div>
        </div>

        {/* Achievements */}
        <ul className="space-y-3 mb-6">
          {mission.achievements.map((a, i) => (
            <li key={i} className="flex items-start gap-3 text-sm font-sans text-[#6B6B6E]">
              <span className="text-[#C9A84C] font-serif text-lg leading-none mt-0.5">·</span>
              {a}
            </li>
          ))}
        </ul>

        {/* Expand button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-xs font-sans text-[#C9A84C] hover:text-[#9E7B35] tracking-widest uppercase transition-colors duration-300"
          aria-expanded={expanded}
        >
          {expanded ? "Show Less" : "Learn More"}
          <ChevronDown
            size={14}
            className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          />
        </button>

        {/* Expanded details */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <div className="pt-5 mt-5 border-t border-[#1C1C1E]/8">
                <p className="text-sm font-sans text-[#6B6B6E] leading-relaxed">
                  {mission.details}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function TradeMissions() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="missions" className="py-24 px-6 bg-[#1C1C1E]">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-sans text-[#8A9E85] tracking-[0.25em] uppercase mb-4"
        >
          Global Reach
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-[#FAFAF8] leading-tight"
          >
            Trade Mission<br />
            <span className="italic text-[#C9A84C]">Leadership</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif italic text-[#8A9E85] text-lg md:text-xl"
          >
            "Bridging markets across 3 continents"
          </motion.p>
        </div>

        {/* World map route visual */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mb-12 border border-[#C9A84C]/20 bg-[#1C1C1E] overflow-hidden"
        >
          <svg viewBox="0 0 900 200" className="w-full" aria-hidden="true">
            <g fill="none" stroke="#C9A84C" strokeWidth="0.6" strokeOpacity="0.15">
              <path d="M80 50 L70 70 L65 90 L75 110 L95 115 L110 100 L108 80 L92 60 Z" />
              <path d="M95 115 L88 140 L92 165 L108 170 L118 155 L115 130 Z" />
              <path d="M370 35 L360 55 L365 75 L385 80 L398 65 L392 45 Z" />
              <path d="M385 80 L378 105 L390 115 L402 108 L405 90 Z" />
              <path d="M430 100 L418 125 L420 165 L432 190 L448 185 L455 160 L448 125 L440 100 Z" />
              <path d="M185 130 L172 155 L174 190 L186 198 L200 192 L205 168 L196 140 Z" />
              <line x1="0" y1="100" x2="900" y2="100" strokeDasharray="3,7" />
              <line x1="225" y1="0" x2="225" y2="200" strokeDasharray="3,7" />
              <line x1="450" y1="0" x2="450" y2="200" strokeDasharray="3,7" />
              <line x1="675" y1="0" x2="675" y2="200" strokeDasharray="3,7" />
            </g>
            {/* Mission routes */}
            {/* Montreal to Mexico City */}
            <path
              d="M 108 98 C 130 140 160 170 185 165"
              stroke="#C9A84C"
              strokeWidth="1.5"
              strokeDasharray="5,4"
              fill="none"
              opacity="0.7"
            />
            {/* Montreal to Brussels */}
            <path
              d="M 108 98 C 200 40 300 42 375 58"
              stroke="#8A9E85"
              strokeWidth="1.5"
              strokeDasharray="5,4"
              fill="none"
              opacity="0.7"
            />
            {/* City dots */}
            <circle cx="108" cy="98" r="4" fill="#C9A84C" />
            <circle cx="185" cy="165" r="4" fill="#C9A84C" />
            <circle cx="375" cy="58" r="4" fill="#8A9E85" />
            <circle cx="390" cy="65" r="3" fill="#8A9E85" />
            <circle cx="400" cy="60" r="3" fill="#8A9E85" />
            {/* Labels */}
            <text x="114" y="94" fill="#FAFAF8" fontSize="8" fontFamily="serif" opacity="0.8">Montreal</text>
            <text x="188" y="161" fill="#C9A84C" fontSize="8" fontFamily="serif" opacity="0.9">Mexico City</text>
            <text x="378" y="52" fill="#8A9E85" fontSize="8" fontFamily="serif" opacity="0.9">Brussels · Amsterdam · Luxembourg</text>
          </svg>
          <div className="absolute bottom-3 right-4 flex items-center gap-2">
            <Globe size={14} className="text-[#C9A84C]/50" />
            <span className="text-xs font-sans text-[#6B6B6E]">Mission routes</span>
          </div>
        </motion.div>

        {/* Mission cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {TRADE_MISSIONS.map((mission, i) => (
            <MissionCard key={mission.id} mission={mission} delay={0.4 + i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}
