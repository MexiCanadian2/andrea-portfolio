import { PERSONAL } from "@/lib/cv-data";
import { Mail, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#1C1C1E]/8 py-8 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs font-sans text-[#6B6B6E] text-center md:text-left">
          © 2025 Andrea M. Bravo Ojeda · Built with Next.js · Deployed on Vercel
        </p>
        <div className="flex items-center gap-5">
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B6B6E] hover:text-[#C9A84C] transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${PERSONAL.email}`}
            className="text-[#6B6B6E] hover:text-[#C9A84C] transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
