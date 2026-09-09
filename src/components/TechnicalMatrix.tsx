import React, { useState } from 'react';
import { Terminal, Code2, Bot, Cpu, Globe, GitFork, ChevronDown, ChevronUp } from 'lucide-react';
import { SKILLS_MATRIX } from '../data/portfolioData';

export const TechnicalMatrix: React.FC = () => {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code2 className="w-5 h-5 text-[#1c1b1b]" />;
      case 'smart_toy':
        return <Bot className="w-5 h-5 text-[#1c1b1b]" />;
      case 'developer_board':
        return <Cpu className="w-5 h-5 text-[#1c1b1b]" />;
      case 'data_object':
        return <Globe className="w-5 h-5 text-[#1c1b1b]" />;
      case 'fork_right':
      default:
        return <GitFork className="w-5 h-5 text-[#1c1b1b]" />;
    }
  };

  const toggleSkill = (id: string) => {
    setExpandedSkill((prev) => (prev === id ? null : id));
  };

  return (
    <section id="matrix" className="flex flex-col space-y-3">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b-2 border-[#1c1b1b] pb-2">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-[#a73918]" />
          <h2 className="font-heading text-lg sm:text-xl text-[#1c1b1b] uppercase font-bold tracking-tight">
            03 // Technical Matrix
          </h2>
        </div>
        <span className="font-mono text-xs text-[#747878] font-semibold">
          CORE SPEC
        </span>
      </div>

      {/* Grid of Technical Disciplines */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {SKILLS_MATRIX.map((skill) => {
          const isExpanded = expandedSkill === skill.id;
          return (
            <div
              key={skill.id}
              onClick={() => toggleSkill(skill.id)}
              className={`p-3 bg-white border-2 border-[#1c1b1b] flex flex-col justify-between cursor-pointer transition-all brutal-shadow-sm hover:bg-[#f6f3ee] ${
                skill.colSpan ? 'sm:col-span-2' : ''
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 border-2 border-[#1c1b1b] bg-[#f0eee9] flex items-center justify-center shrink-0">
                    {getIcon(skill.iconName)}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-heading text-[15px] sm:text-[16px] text-[#1c1b1b] font-bold uppercase tracking-tight truncate">
                      {skill.name}
                    </span>
                    <span className="font-mono text-[11px] sm:text-xs text-[#444748] truncate">
                      {skill.subtitle}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="font-mono text-[10px] text-[#a73918] bg-[#ffdbd1]/60 px-1.5 py-0.5 border border-[#1c1b1b]/30 hidden xs:inline uppercase font-bold">
                    {skill.level}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-[#747878]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#747878]" />
                  )}
                </div>
              </div>

              {/* Expandable Tools & Competencies */}
              {isExpanded && (
                <div className="mt-3 pt-2.5 border-t border-[#1c1b1b]/15 flex flex-wrap gap-1.5 animate-fadeIn">
                  {skill.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-[#eae8e3] border border-[#1c1b1b] font-mono text-[10px] uppercase font-semibold text-[#1c1b1b]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
