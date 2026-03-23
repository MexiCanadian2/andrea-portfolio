"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PERSONAL } from "@/lib/cv-data";
import { ArrowDown, MessageCircle } from "lucide-react";

interface HeroProps {
  onViewWork: () => void;
  onLetsTalk: () => void;
}

function WorldMapSVG() {
  return (
    <motion.svg
      viewBox="0 0 1000 500"
      className="absolute inset-0 w-full h-full object-cover opacity-[0.06]"
      aria-hidden="true"
      animate={{ x: [0, 12, 0], y: [0, -8, 0] }}
      transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Simplified world map wireframe as connected path lines */}
      <g fill="none" stroke="#C9A84C" strokeWidth="0.8">
        {/* North America */}
        <path d="M 100 80 L 80 100 L 70 130 L 90 150 L 120 160 L 140 140 L 160 120 L 155 100 L 130 80 Z" />
        <path d="M 130 160 L 120 200 L 110 230 L 130 250 L 160 240 L 170 210 L 155 190 Z" />
        {/* Europe */}
        <path d="M 440 70 L 420 90 L 430 110 L 460 115 L 480 100 L 470 80 Z" />
        <path d="M 460 115 L 450 140 L 470 155 L 490 145 L 495 120 Z" />
        {/* Africa */}
        <path d="M 460 180 L 440 210 L 445 260 L 460 300 L 490 310 L 510 290 L 515 250 L 500 200 L 480 175 Z" />
        {/* South America */}
        <path d="M 230 260 L 210 290 L 215 340 L 235 380 L 260 385 L 275 360 L 265 310 L 250 270 Z" />
        {/* Asia */}
        <path d="M 540 60 L 580 50 L 650 70 L 700 80 L 720 100 L 690 130 L 640 135 L 600 120 L 550 100 Z" />
        <path d="M 640 135 L 660 170 L 700 185 L 720 160 L 710 130 Z" />
        {/* Australia */}
        <path d="M 750 300 L 730 320 L 740 360 L 770 375 L 810 365 L 820 335 L 800 310 Z" />
        {/* Grid lines */}
        <line x1="0" y1="200" x2="1000" y2="200" strokeDasharray="4,8" strokeOpacity="0.5" />
        <line x1="0" y1="300" x2="1000" y2="300" strokeDasharray="4,8" strokeOpacity="0.5" />
        <line x1="250" y1="0" x2="250" y2="500" strokeDasharray="4,8" strokeOpacity="0.5" />
        <line x1="500" y1="0" x2="500" y2="500" strokeDasharray="4,8" strokeOpacity="0.5" />
        <line x1="750" y1="0" x2="750" y2="500" strokeDasharray="4,8" strokeOpacity="0.5" />
        {/* Dots for cities */}
        <circle cx="142" cy="173" r="3" fill="#C9A84C" />
        <circle cx="463" cy="104" r="3" fill="#C9A84C" />
        <circle cx="455" cy="225" r="3" fill="#C9A84C" />
        <circle cx="462" cy="108" r="3" fill="#C9A84C" />
        {/* Connection lines */}
        <path d="M 142 173 C 300 80 350 120 463 108" strokeDasharray="6,6" strokeOpacity="0.6" />
        <path d="M 463 108 C 500 150 480 200 455 225" strokeDasharray="6,6" strokeOpacity="0.4" />
      </g>
    </motion.svg>
  );
}

function Typewriter({ texts }: { texts: string[] }) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    const delay = deleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!deleting) {
        if (charIndex < current.length) {
          setDisplayText(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        } else {
          setTimeout(() => setDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        } else {
          setDeleting(false);
          setTextIndex((i) => (i + 1) % texts.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, textIndex, texts]);

  return (
    <span className="text-[#C9A84C]">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Hero({ onViewWork, onLetsTalk }: HeroProps) {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      aria-label="Hero"
    >
      <WorldMapSVG />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm font-sans text-[#8A9E85] tracking-[0.25em] uppercase mb-6"
        >
          Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl text-[#1C1C1E] leading-[1.1] mb-6"
        >
          Andrea M.<br />
          <span className="italic">Bravo Ojeda</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl font-sans text-[#6B6B6E] min-h-[2rem] mb-10"
        >
          <Typewriter texts={PERSONAL.taglines} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={onViewWork}
            className="group flex items-center gap-2 px-8 py-3.5 bg-[#1C1C1E] text-[#FAFAF8] text-sm font-sans tracking-wide hover:bg-[#3A3A3C] transition-colors duration-300"
            aria-label="View my work"
          >
            View My Work
            <ArrowDown
              size={15}
              className="group-hover:translate-y-1 transition-transform duration-300"
            />
          </button>
          <button
            onClick={onLetsTalk}
            className="flex items-center gap-2 px-8 py-3.5 border border-[#C9A84C] text-[#C9A84C] text-sm font-sans tracking-wide hover:bg-[#C9A84C] hover:text-[#FAFAF8] transition-all duration-300"
            aria-label="Open chat assistant"
          >
            <MessageCircle size={15} />
            Let&apos;s Talk
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div className="w-px h-12 bg-gradient-to-b from-[#C9A84C] to-transparent" />
      </motion.div>
    </section>
  );
}
