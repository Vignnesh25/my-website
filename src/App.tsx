/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { TelemetryTicker } from './components/TelemetryTicker';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TechnicalMatrix } from './components/TechnicalMatrix';
import { CredentialsSection } from './components/CredentialsSection';
import { ContactSection } from './components/ContactSection';
import { BottomNav } from './components/BottomNav';
import { TelemetryConsoleModal } from './components/TelemetryConsoleModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './types';
import { PERSONAL_INFO } from './data/portfolioData';

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenConnect = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#eae8e3] text-[#1c1b1b] flex flex-col font-body selection:bg-[#d95d39] selection:text-white pb-20 sm:pb-24">
      {/* Fixed Sticky Header */}
      <Header
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Container */}
      <main className="w-full max-w-4xl mx-auto px-3 sm:px-4 pt-20 sm:pt-24 space-y-4 sm:space-y-6 flex-1">
        {/* Live ESP32 Hardware Telemetry Ticker */}
        <TelemetryTicker onOpenTerminal={() => setIsTerminalOpen(true)} />

        {/* Section 01: Hero Header & Bio */}
        <HeroSection
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenConnect={handleOpenConnect}
        />

        {/* Section 02: Featured Engineering Projects */}
        <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />

        {/* Section 03: Technical Matrix */}
        <TechnicalMatrix />

        {/* Section 04: Verified Academic Credentials */}
        <CredentialsSection />

        {/* Section 05: Contact & Transmission Uplink */}
        <ContactSection />

        {/* Footer Signature */}
        <footer className="pt-6 pb-4 border-t-2 border-[#1c1b1b] flex flex-col sm:flex-row justify-between items-center text-[#747878] font-mono text-[10px] sm:text-[11px] gap-2 select-none">
          <span>ENGINEERED WITH BRUTALIST PRECISION // 2025</span>
          <span className="uppercase font-semibold text-[#1c1b1b]">
            {PERSONAL_INFO.name} • {PERSONAL_INFO.location}
          </span>
        </footer>
      </main>

      {/* Bottom Sticky Floating Navigation Dock */}
      <BottomNav />

      {/* Modals */}
      <TelemetryConsoleModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
