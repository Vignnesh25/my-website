import React, { useState } from 'react';
import { X, Copy, Check, Cpu, Radio, Wrench, Play, ShieldAlert } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [simDistance, setSimDistance] = useState(35); // cm
  const [simActive, setSimActive] = useState(false);

  if (!project) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(project.schematics.sampleCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const isBrakingTriggered = simDistance < 20;

  return (
    <div className="fixed inset-0 z-50 bg-[#1c1b1b]/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-white border-2 border-[#1c1b1b] w-full max-w-2xl brutal-shadow-lg flex flex-col max-h-[90vh] my-auto">
        {/* Modal Top Bar */}
        <div className="bg-[#eae8e3] px-4 py-3 border-b-2 border-[#1c1b1b] flex items-center justify-between font-mono text-xs select-none shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#1c1b1b]">{project.code}</span>
            <span className="text-[#747878]">• SPEC & SCHEMATICS</span>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 border border-[#1c1b1b] bg-white hover:bg-[#1c1b1b] hover:text-white flex items-center justify-center font-bold"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5">
          {/* Title & Category */}
          <div>
            <div className="font-mono text-xs text-[#a73918] font-bold uppercase">
              {project.subtitle}
            </div>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#1c1b1b]">
              {project.title}
            </h2>
            <p className="font-body text-sm text-[#444748] mt-1 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Microcontroller & Bus Architecture */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-[#f6f3ee] border-2 border-[#1c1b1b]">
            <div>
              <span className="font-mono text-[10px] text-[#747878] uppercase font-bold">
                MCU Architecture
              </span>
              <div className="font-mono text-xs font-bold text-[#1c1b1b] mt-0.5">
                {project.schematics.microcontroller}
              </div>
            </div>

            <div>
              <span className="font-mono text-[10px] text-[#747878] uppercase font-bold">
                Firmware Toolchain
              </span>
              <div className="font-mono text-xs font-bold text-[#1c1b1b] mt-0.5">
                {project.schematics.firmwareLang}
              </div>
            </div>

            <div>
              <span className="font-mono text-[10px] text-[#747878] uppercase font-bold">
                Sensors & Peripherals
              </span>
              <div className="font-mono text-[11px] text-[#1c1b1b] mt-0.5">
                {project.schematics.sensors.join(', ')}
              </div>
            </div>

            <div>
              <span className="font-mono text-[10px] text-[#747878] uppercase font-bold">
                Hardware Protocols
              </span>
              <div className="font-mono text-[11px] text-[#1c1b1b] mt-0.5">
                {project.schematics.protocols.join(' • ')}
              </div>
            </div>
          </div>

          {/* Hardware Pinout Table */}
          <div>
            <div className="font-mono text-xs font-bold text-[#1c1b1b] uppercase mb-2 flex items-center justify-between">
              <span>HARDWARE PINOUT CONFIGURATION</span>
              <span className="text-[10px] text-[#747878]">TEST BENCH VERIFIED</span>
            </div>
            <div className="border-2 border-[#1c1b1b] overflow-x-auto">
              <table className="w-full text-left font-mono text-xs border-collapse">
                <thead>
                  <tr className="bg-[#eae8e3] border-b-2 border-[#1c1b1b]">
                    <th className="p-2 border-r border-[#1c1b1b]">PIN / GPIO</th>
                    <th className="p-2 border-r border-[#1c1b1b]">FUNCTION</th>
                    <th className="p-2">SPECIFICATION NOTE</th>
                  </tr>
                </thead>
                <tbody>
                  {project.schematics.pinoutTable.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-[#1c1b1b]/20 ${
                        i % 2 === 0 ? 'bg-white' : 'bg-[#fbf9f4]'
                      }`}
                    >
                      <td className="p-2 font-bold text-[#1c1b1b] border-r border-[#1c1b1b]/20 whitespace-nowrap">
                        {row.pin}
                      </td>
                      <td className="p-2 text-[#a73918] font-bold border-r border-[#1c1b1b]/20 whitespace-nowrap">
                        {row.function}
                      </td>
                      <td className="p-2 text-[#444748] text-[11px]">
                        {row.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Interactive Hardware Telemetry Tester */}
          <div className="p-3.5 bg-[#f0eee9] border-2 border-[#1c1b1b] space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-[#1c1b1b] uppercase flex items-center gap-1.5">
                <Radio className="w-4 h-4 text-[#d95d39]" />
                <span>INTERACTIVE SENSOR BENCH SIMULATOR</span>
              </span>
              <span
                className={`font-mono text-[10px] px-2 py-0.5 border border-[#1c1b1b] font-bold ${
                  isBrakingTriggered
                    ? 'bg-[#a73918] text-white animate-pulse'
                    : 'bg-white text-[#1c1b1b]'
                }`}
              >
                {isBrakingTriggered ? 'TRIGGER: CRITICAL STOP' : 'NOMINAL RANGE'}
              </span>
            </div>

            <div className="flex flex-col space-y-1 font-mono text-xs">
              <div className="flex justify-between text-[11px]">
                <span>Distance Rangefinder:</span>
                <span className="font-bold text-[#1c1b1b]">{simDistance} cm</span>
              </div>
              <input
                type="range"
                min="5"
                max="80"
                value={simDistance}
                onChange={(e) => setSimDistance(Number(e.target.value))}
                className="w-full accent-[#a73918] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#747878]">
                <span>5 cm (Proximity limit)</span>
                <span>Threshold: 20 cm</span>
                <span>80 cm (Far field)</span>
              </div>
            </div>

            <div className="p-2 bg-white border border-[#1c1b1b] font-mono text-[11px] flex justify-between items-center">
              <span>ISR Status: {isBrakingTriggered ? 'STOP VECTOR ENGAGED (0.08s)' : 'PWM MOTOR 100%'}</span>
              <span className="text-[#a73918] font-bold">
                {isBrakingTriggered ? 'PULSE LOW' : 'PULSE NOMINAL'}
              </span>
            </div>
          </div>

          {/* Code Viewer */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <span className="font-mono text-xs font-bold text-[#1c1b1b] uppercase">
                EMBEDDED FIRMWARE SOURCE
              </span>
              <button
                onClick={handleCopyCode}
                className="px-2 py-0.5 bg-[#1c1b1b] text-white font-mono text-[10px] uppercase font-bold flex items-center gap-1 hover:bg-[#333]"
              >
                {copiedCode ? (
                  <>
                    <Check className="w-3 h-3 text-green-400" />
                    <span>COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>COPY CODE</span>
                  </>
                )}
              </button>
            </div>
            <pre className="bg-[#1c1b1b] text-green-300 p-3.5 border-2 border-[#1c1b1b] font-mono text-xs overflow-x-auto leading-relaxed">
              <code>{project.schematics.sampleCode}</code>
            </pre>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-[#eae8e3] border-t-2 border-[#1c1b1b] flex justify-between items-center shrink-0 font-mono text-xs">
          <span className="text-[#747878] text-[11px]">
            DOCUMENT REF: REVA-HW-ENG-2025
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#1c1b1b] text-white font-mono text-xs uppercase font-bold hover:bg-[#333]"
          >
            CLOSE SCHEMATICS
          </button>
        </div>
      </div>
    </div>
  );
};
