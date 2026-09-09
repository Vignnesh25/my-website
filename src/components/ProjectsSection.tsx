import React from 'react';
import { Cpu, Radio, Wrench, ArrowRight, ExternalLink, Code2, Sparkles } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="flex flex-col space-y-4">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b-2 border-[#1c1b1b] pb-2">
        <div className="flex items-center gap-2">
          <Cpu className="w-5 h-5 text-[#a73918]" />
          <h2 className="font-heading text-lg sm:text-xl text-[#1c1b1b] uppercase font-bold tracking-tight">
            02 // Featured Projects
          </h2>
        </div>
        <span className="font-mono text-xs text-[#444748] font-bold">
          [2 VERIFIED]
        </span>
      </div>

      {/* Project Cards */}
      <div className="flex flex-col space-y-4">
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            id={`card-${project.id}`}
            className="bg-white border-2 border-[#1c1b1b] brutal-shadow flex flex-col transition-all hover:-translate-y-0.5"
          >
            {/* Project Header Bar */}
            <div className="border-b-2 border-[#1c1b1b] px-3.5 sm:px-4 py-2 bg-[#eae8e3] flex justify-between items-center font-mono text-xs">
              <div className="flex items-center gap-2 truncate">
                <span className="font-bold text-[#1c1b1b]">{project.code}</span>
                <span className="text-[#747878] text-[10px] sm:text-[11px] truncate">
                  {project.category}
                </span>
              </div>
              {project.statusType === 'orange' ? (
                <span className="bg-[#ffdbd1] text-[#3b0900] font-mono text-[10px] px-2 py-0.5 border border-[#1c1b1b] uppercase font-bold shrink-0">
                  {project.statusBadge}
                </span>
              ) : (
                <span className="bg-[#1c1b1b] text-white font-mono text-[10px] px-2 py-0.5 uppercase font-bold shrink-0">
                  {project.statusBadge}
                </span>
              )}
            </div>

            {/* Project Body */}
            <div className="p-4 sm:p-5 flex flex-col space-y-3.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="font-heading text-lg sm:text-xl text-[#1c1b1b] font-bold">
                    {project.title}
                  </h3>
                  <p className="font-mono text-[11px] sm:text-[12px] text-[#a73918] font-bold uppercase mt-0.5">
                    {project.subtitle}
                  </p>
                </div>
                <span className="font-mono text-[11px] text-[#747878] font-semibold uppercase">
                  {project.compatibility}
                </span>
              </div>

              <p className="font-body text-[14px] sm:text-[15px] text-[#1c1b1b] leading-relaxed">
                {project.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-2 py-2 border-y border-[#1c1b1b]/15 bg-[#f6f3ee] p-2">
                {project.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className={`text-center ${
                      idx === 1 ? 'border-x border-[#1c1b1b]/20' : ''
                    }`}
                  >
                    <div
                      className={`font-mono text-[13px] sm:text-[14px] font-bold ${
                        metric.highlight ? 'text-[#a73918]' : 'text-[#1c1b1b]'
                      }`}
                    >
                      {metric.value}
                    </div>
                    <div className="font-mono text-[9px] sm:text-[10px] text-[#747878] uppercase truncate px-0.5">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 sm:py-1 bg-[#f0eee9] border border-[#1c1b1b] font-mono text-[10px] uppercase font-semibold text-[#1c1b1b]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer Indicator & Action */}
              <div className="pt-2 flex justify-between items-center border-t border-[#1c1b1b]/15">
                <span className="font-mono text-xs text-[#747878] flex items-center gap-1.5 truncate">
                  {project.footerIndicator.icon === 'sensors' ? (
                    <Radio className="w-3.5 h-3.5 text-[#d95d39] shrink-0" />
                  ) : (
                    <Wrench className="w-3.5 h-3.5 text-[#d95d39] shrink-0" />
                  )}
                  <span className="truncate">{project.footerIndicator.text}</span>
                </span>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1 font-mono text-xs font-bold text-[#1c1b1b] hover:text-[#a73918] underline underline-offset-4 cursor-pointer transition-colors"
                  >
                    <span>{project.actionText}</span>
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
