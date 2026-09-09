import React from 'react';
import { MapPin, GraduationCap, Send, FileText, ExternalLink, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenConnect: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume, onOpenConnect }) => {
  return (
    <section id="hero" className="flex flex-col space-y-3.5">
      {/* Bio Card */}
      <div className="bg-white border-2 border-[#1c1b1b] p-4 sm:p-6 brutal-shadow relative overflow-hidden">
        {/* Card Header Row */}
        <div className="flex justify-between items-center pb-3 mb-4 border-b border-[#1c1b1b]/15">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d95d39] animate-pulse"></span>
            <span className="font-mono text-[11px] font-bold tracking-wider text-[#a73918] uppercase">
              Available for 2025/2026 Roles
            </span>
          </div>
          <span className="font-mono text-[11px] sm:text-[12px] text-[#747878] uppercase tracking-wider font-semibold">
            BENGALURU, INDIA
          </span>
        </div>

        {/* Hero Identity Content */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-[#1c1b1b] p-1 bg-[#eae8e3] brutal-shadow-md overflow-hidden">
              <img
                src={PERSONAL_INFO.photoUrl}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Details & Titles */}
          <div className="flex flex-col text-center sm:text-left flex-1 min-w-0">
            <div className="inline-flex items-center justify-center sm:justify-start mb-1">
              <span className="font-mono text-[11px] text-[#a73918] tracking-widest uppercase bg-[#ffdbd1]/80 px-2 py-0.5 border border-[#a73918]/40 font-bold">
                {PERSONAL_INFO.role}
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl text-[#1c1b1b] font-bold tracking-tight uppercase">
              {PERSONAL_INFO.name}
            </h1>

            <p className="font-mono text-[12px] sm:text-[13px] text-[#444748] mt-1 font-medium leading-tight">
              {PERSONAL_INFO.institution}
            </p>

            <div className="mt-3 flex flex-wrap gap-2 justify-center sm:justify-start">
              <div className="inline-flex items-center gap-1.5 text-[#1c1b1b] font-mono text-[11px] sm:text-[12px] bg-[#f0eee9] px-2.5 py-1 border border-[#1c1b1b]/40">
                <MapPin className="w-3.5 h-3.5 text-[#d95d39]" />
                <span>Bengaluru, Karnataka</span>
              </div>
              <div className="inline-flex items-center gap-1.5 text-[#1c1b1b] font-mono text-[11px] sm:text-[12px] bg-[#f0eee9] px-2.5 py-1 border border-[#1c1b1b]/40">
                <GraduationCap className="w-3.5 h-3.5 text-[#1c1b1b]" />
                <span>{PERSONAL_INFO.gradClass}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bio statement */}
        <div className="mt-5 pt-4 border-t-2 border-[#1c1b1b]/10">
          <p className="font-body text-[14px] sm:text-[15px] text-[#1c1b1b] leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>
        </div>
      </div>

      {/* Floating Action Buttons / Quick Specs Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
        {/* GitHub */}
        <a
          id="hero-github-link"
          href={PERSONAL_INFO.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-white border-2 border-[#1c1b1b] text-[#1c1b1b] font-mono font-bold text-[11px] sm:text-[12px] brutal-shadow-sm brutal-btn-active hover:bg-[#f0eee9] transition-all"
        >
          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span>GITHUB</span>
        </a>

        {/* LinkedIn */}
        <a
          id="hero-linkedin-link"
          href={PERSONAL_INFO.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-white border-2 border-[#1c1b1b] text-[#1c1b1b] font-mono font-bold text-[11px] sm:text-[12px] brutal-shadow-sm brutal-btn-active hover:bg-[#f0eee9] transition-all"
        >
          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          <span>LINKEDIN</span>
        </a>

        {/* Connect */}
        <button
          id="hero-connect-btn"
          onClick={onOpenConnect}
          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#a73918] text-white border-2 border-[#1c1b1b] font-mono font-bold text-[11px] sm:text-[12px] brutal-shadow-sm brutal-btn-active hover:bg-[#862201] transition-all"
        >
          <Send className="w-3.5 h-3.5" />
          <span>CONNECT</span>
        </button>

        {/* Resume */}
        <button
          id="hero-resume-btn"
          onClick={onOpenResume}
          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#eae8e3] border-2 border-[#1c1b1b] text-[#1c1b1b] font-mono font-bold text-[11px] sm:text-[12px] brutal-shadow-sm brutal-btn-active hover:bg-[#e4e2dd] transition-all"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>RESUME</span>
        </button>
      </div>
    </section>
  );
};
