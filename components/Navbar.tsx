"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Missions", href: "#missions" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAFAF8]/95 backdrop-blur-sm border-b border-[#1C1C1E]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-serif text-lg text-[#1C1C1E] tracking-wide hover:text-[#C9A84C] transition-colors duration-300"
          aria-label="Back to top"
        >
          AMB<span className="text-[#C9A84C]">.</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-sm text-[#6B6B6E] hover:text-[#C9A84C] transition-colors duration-300 font-sans tracking-wide"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#1C1C1E] hover:text-[#C9A84C] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FAFAF8] border-b border-[#1C1C1E]/10 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left text-sm text-[#6B6B6E] hover:text-[#C9A84C] transition-colors duration-300 py-1"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
