"use client";

import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import TradeMissions from "@/components/TradeMissions";
import Education from "@/components/Education";
import SkillsTools from "@/components/SkillsTools";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

export default function HomePage() {
  const workRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<{ open: () => void } | null>(null);

  const scrollToWork = () => {
    workRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const openChat = () => {
    chatRef.current?.open();
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero onViewWork={scrollToWork} onLetsTalk={openChat} />
        <About />
        <div ref={workRef}>
          <ExperienceTimeline />
        </div>
        <TradeMissions />
        <Education />
        <SkillsTools />
        <Contact />
      </main>
      <Footer />
      <ChatBot ref={chatRef} />
    </>
  );
}
