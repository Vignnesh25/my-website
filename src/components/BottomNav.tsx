import React, { useState, useEffect } from 'react';
import { LayoutGrid, Cpu, Terminal, AtSign } from 'lucide-react';

export const BottomNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'hero' | 'projects' | 'matrix' | 'contact'>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const contactEl = document.getElementById('contact');
      const matrixEl = document.getElementById('matrix');
      const projectsEl = document.getElementById('projects');

      if (contactEl && scrollPos >= contactEl.offsetTop) {
        setActiveSection('contact');
      } else if (matrixEl && scrollPos >= matrixEl.offsetTop) {
        setActiveSection('matrix');
      } else if (projectsEl && scrollPos >= projectsEl.offsetTop) {
        setActiveSection('projects');
      } else {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string, section: 'hero' | 'projects' | 'matrix' | 'contact') => {
    setActiveSection(section);
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const offset = 85;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="fixed bottom-0 w-full z-40 bg-[#eae8e3]/95 backdrop-blur-md border-t-2 border-[#1c1b1b] shadow-lg no-print">
      <div className="max-w-md mx-auto flex justify-around items-center h-14 sm:h-16 px-3">
        {/* 01 INDEX */}
        <button
          onClick={() => scrollTo('hero', 'hero')}
          className={`flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full transition-all text-xs font-mono font-bold ${
            activeSection === 'hero'
              ? 'bg-[#1c1b1b] text-white'
              : 'text-[#444748] hover:text-[#1c1b1b]'
          }`}
        >
          <LayoutGrid className="w-4 h-4" />
          <span>01 INDEX</span>
        </button>

        {/* 02 WORKS */}
        <button
          onClick={() => scrollTo('projects', 'projects')}
          className={`flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full transition-all text-xs font-mono font-bold ${
            activeSection === 'projects'
              ? 'bg-[#1c1b1b] text-white'
              : 'text-[#444748] hover:text-[#1c1b1b]'
          }`}
        >
          <Cpu className="w-4 h-4" />
          <span>02 WORKS</span>
        </button>

        {/* 03 MATRIX */}
        <button
          onClick={() => scrollTo('matrix', 'matrix')}
          className={`flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full transition-all text-xs font-mono font-bold ${
            activeSection === 'matrix'
              ? 'bg-[#1c1b1b] text-white'
              : 'text-[#444748] hover:text-[#1c1b1b]'
          }`}
        >
          <Terminal className="w-4 h-4" />
          <span>03 MATRIX</span>
        </button>

        {/* 05 CONTACT */}
        <button
          onClick={() => scrollTo('contact', 'contact')}
          className={`flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full transition-all text-xs font-mono font-bold ${
            activeSection === 'contact'
              ? 'bg-[#1c1b1b] text-white'
              : 'text-[#444748] hover:text-[#1c1b1b]'
          }`}
        >
          <AtSign className="w-4 h-4" />
          <span>05 CONTACT</span>
        </button>
      </div>
    </nav>
  );
};
