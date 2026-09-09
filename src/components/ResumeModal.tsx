import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILLS_MATRIX, CREDENTIALS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1c1b1b]/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-white border-2 border-[#1c1b1b] w-full max-w-3xl brutal-shadow-lg flex flex-col max-h-[92vh] my-auto">
        {/* Top Control Bar */}
        <div className="bg-[#eae8e3] px-4 py-2.5 border-b-2 border-[#1c1b1b] flex items-center justify-between font-mono text-xs select-none shrink-0 no-print">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#1c1b1b]">CURRICULUM VITAE // JS VIGNNESH</span>
            <span className="text-[#747878] hidden sm:inline">• 2025/2026 EDITION</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1 bg-[#1c1b1b] text-white hover:bg-[#333] flex items-center gap-1.5 font-bold uppercase"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-7 h-7 border border-[#1c1b1b] bg-white hover:bg-[#1c1b1b] hover:text-white flex items-center justify-center font-bold"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-body text-[#1c1b1b]">
          {/* Header Block */}
          <div className="border-b-2 border-[#1c1b1b] pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
            <div>
              <h1 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="font-mono text-xs text-[#a73918] font-bold uppercase tracking-wider mt-0.5">
                {PERSONAL_INFO.role}
              </p>
              <p className="text-xs text-[#444748] mt-1">
                {PERSONAL_INFO.institution} (Bengaluru, India)
              </p>
            </div>

            <div className="font-mono text-xs space-y-1 text-left sm:text-right shrink-0">
              <div>Phone: <span className="font-bold">{PERSONAL_INFO.phone}</span></div>
              <div>Email: <span className="font-bold">{PERSONAL_INFO.email}</span></div>
              <div className="flex gap-2 sm:justify-end text-[11px] text-[#a73918]">
                <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noreferrer" className="underline">
                  GitHub
                </a>
                <span>•</span>
                <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noreferrer" className="underline">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-[#a73918] border-b border-[#1c1b1b]/20 pb-1 mb-2">
              01 // Professional Summary
            </h2>
            <p className="text-sm leading-relaxed text-[#1c1b1b]">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-[#a73918] border-b border-[#1c1b1b]/20 pb-1 mb-2">
              02 // Education & Academic Background
            </h2>
            <div className="flex justify-between items-start">
              <div>
                <div className="font-heading font-bold text-sm">
                  Bachelor of Technology (B.Tech) - Artificial Intelligence & Data Science
                </div>
                <div className="text-xs text-[#444748]">REVA University, Bengaluru, Karnataka</div>
                <div className="font-mono text-[11px] text-[#747878] mt-0.5">
                  Relevant Coursework: Microcontrollers & Embedded Systems, Data Structures, Machine Learning, Robotics
                </div>
              </div>
              <span className="font-mono text-xs font-bold bg-[#eae8e3] px-2 py-0.5 border border-[#1c1b1b] shrink-0">
                2025 - 2029
              </span>
            </div>
          </div>

          {/* Featured Engineering Projects */}
          <div>
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-[#a73918] border-b border-[#1c1b1b]/20 pb-1 mb-2">
              03 // Featured Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((p) => (
                <div key={p.id} className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <div className="font-heading font-bold text-sm">
                      {p.title} <span className="font-mono text-xs text-[#747878] font-normal">({p.subtitle})</span>
                    </div>
                    <span className="font-mono text-[11px] text-[#a73918] font-bold uppercase">
                      {p.compatibility}
                    </span>
                  </div>
                  <p className="text-xs text-[#444748] leading-relaxed">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-0.5">
                    {p.tags.map((t, idx) => (
                      <span key={idx} className="font-mono text-[10px] bg-[#f0eee9] px-1.5 py-0.5 border border-[#1c1b1b]/30">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Disciplines */}
          <div>
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-[#a73918] border-b border-[#1c1b1b]/20 pb-1 mb-2">
              04 // Technical Disciplines
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {SKILLS_MATRIX.map((s) => (
                <div key={s.id} className="p-2 bg-[#f6f3ee] border border-[#1c1b1b]">
                  <span className="font-mono font-bold">{s.name}: </span>
                  <span className="text-[#444748]">{s.tools.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-[#a73918] border-b border-[#1c1b1b]/20 pb-1 mb-2">
              05 // Certifications
            </h2>
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between">
                <span><strong>IBM Official Certification:</strong> Data & AI Fundamentals</span>
                <span className="font-mono text-[10px] bg-[#ffdbd1] px-1.5 py-0.5 border border-[#1c1b1b] font-bold">VERIFIED</span>
              </div>
              <div className="flex justify-between">
                <span><strong>Wadhwani Foundation:</strong> Business & Entrepreneurship</span>
                <span className="font-mono text-[10px] bg-[#ffdbd1] px-1.5 py-0.5 border border-[#1c1b1b] font-bold">COMPLETED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
