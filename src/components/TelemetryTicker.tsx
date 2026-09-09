import React, { useState, useEffect } from 'react';
import { Terminal, Activity } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface TelemetryTickerProps {
  onOpenTerminal: () => void;
}

export const TelemetryTicker: React.FC<TelemetryTickerProps> = ({ onOpenTerminal }) => {
  const [packetCount, setPacketCount] = useState(1048);
  const [rxRate, setRxRate] = useState(48.2);

  useEffect(() => {
    const interval = setInterval(() => {
      setPacketCount((prev) => prev + 1);
      setRxRate(+(47 + Math.random() * 3).toFixed(1));
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      onClick={onOpenTerminal}
      role="button"
      tabIndex={0}
      title="Click to open interactive ESP32 serial monitor"
      className="w-full bg-[#e4e2dd] border-y-2 border-[#1c1b1b] py-1.5 px-3 sm:px-4 flex items-center justify-between text-[#444748] font-mono text-[11px] sm:text-xs overflow-x-auto cursor-pointer hover:bg-[#dcdad5] transition-colors select-none group"
    >
      <div className="flex items-center gap-2 shrink-0">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d95d39] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d95d39]"></span>
        </span>
        <span className="font-bold text-[#1c1b1b] tracking-wider">SYS: ACTIVE</span>
      </div>

      <div className="flex items-center gap-2.5 sm:gap-4 shrink-0 uppercase tracking-widest text-[10px] sm:text-[11px]">
        <span>{PERSONAL_INFO.systemInfo.board}</span>
        <span className="text-[#747878]">•</span>
        <span className="hidden xs:inline">{PERSONAL_INFO.systemInfo.lab}</span>
        <span className="text-[#747878] hidden xs:inline">•</span>
        <span>BAUD: {PERSONAL_INFO.systemInfo.baud}</span>
        <span className="text-[#747878]">•</span>
        <span className="text-[#a73918] font-bold">
          {PERSONAL_INFO.systemInfo.link}
        </span>
        <span className="text-[#747878] hidden sm:inline">•</span>
        <span className="hidden sm:inline text-[#1c1b1b]">
          PKT: #{packetCount} ({rxRate} KB/s)
        </span>
      </div>

      <div className="hidden md:flex items-center gap-1 text-[10px] text-[#1c1b1b] font-bold group-hover:text-[#a73918] transition-colors shrink-0">
        <Terminal className="w-3 h-3" />
        <span>LAUNCH CLI →</span>
      </div>
    </div>
  );
};
