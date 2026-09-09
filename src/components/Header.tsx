import React from 'react';
import { Terminal, Radio } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTerminal, onOpenResume }) => {
  return (
    <header className="fixed top-0 w-full z-40 bg-[#eae8e3]/90 backdrop-blur-md border-b border-[#1c1b1b]/15 transition-all">
      <div className="max-w-4xl mx-auto h-16 sm:h-20 px-4 flex items-center justify-between gap-3">
        {/* Left Branding & Status */}
        <div className="flex flex-col justify-center min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-[11px] sm:text-[12px] font-bold uppercase tracking-wider text-[#1c1b1b] truncate">
              {PERSONAL_INFO.name} // 2025 PORTFOLIO
            </span>
          </div>

          <div className="flex items-center gap-2 mt-0.5">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white border border-[#1c1b1b]/30 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d95d39] animate-pulse"></span>
              <span className="font-mono text-[9px] sm:text-[10px] font-bold text-[#1c1b1b] uppercase tracking-wider">
                AVAILABLE FOR ROLES
              </span>
            </div>
            <span className="font-mono text-[11px] text-[#5f5e5e] hidden sm:inline truncate">
              Overview
            </span>
          </div>
        </div>

        {/* Right Tools & Avatar */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Telemetry Console Toggle Button */}
          <button
            id="header-terminal-btn"
            onClick={onOpenTerminal}
            title="Open ESP32 Live Telemetry Terminal"
            className="h-9 px-2.5 sm:px-3 flex items-center gap-1.5 bg-white border-2 border-[#1c1b1b] brutal-shadow-sm brutal-btn-active text-[#1c1b1b] text-xs font-mono font-bold hover:bg-[#f6f3ee] transition-all"
          >
            <Terminal className="w-4 h-4 text-[#d95d39]" />
            <span className="hidden xs:inline">CLI MON</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-ping" />
          </button>

          {/* Resume Quick Trigger */}
          <button
            id="header-resume-btn"
            onClick={onOpenResume}
            className="h-9 px-2.5 bg-[#1c1b1b] text-white border-2 border-[#1c1b1b] text-xs font-mono font-bold brutal-shadow-sm brutal-btn-active hover:bg-[#333] transition-all hidden sm:flex items-center gap-1"
          >
            RESUME
          </button>

          {/* Profile Avatar Thumbnail */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#1c1b1b] p-0.5 bg-white overflow-hidden shadow-xs shrink-0">
            <img
              src={PERSONAL_INFO.photoUrl}
              alt="JS Vignnesh"
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
