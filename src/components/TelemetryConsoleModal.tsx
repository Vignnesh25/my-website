import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, Play, Square, Trash2, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

interface TelemetryConsoleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  type: 'input' | 'output' | 'system' | 'error';
  text: string;
}

export const TelemetryConsoleModal: React.FC<TelemetryConsoleModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [logs, setLogs] = useState<CommandLog[]>([
    { type: 'system', text: 'REVA AI LAB // EMBEDDED TELEMETRY MONITOR V2.5' },
    { type: 'system', text: 'CONNECTING TO ESP32-WROOM-32 VIA UART @ 115200 BAUD...' },
    { type: 'system', text: 'STATUS: LINK STABLE [FreeRTOS v10.4.3 ACTIVE]' },
    { type: 'output', text: 'Type "help" to view available diagnostic commands.' },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs, isOpen]);

  // Simulated live sensor stream
  useEffect(() => {
    if (!isStreaming) return;

    const interval = setInterval(() => {
      const distance = (12 + Math.random() * 8).toFixed(2);
      const latency = (8 + Math.random() * 4).toFixed(1);
      const irState = Math.random() > 0.3 ? 'CLEAR' : 'OBSTACLE_DETECTED';
      const timestamp = new Date().toISOString().substring(11, 23);

      setLogs((prev) => [
        ...prev.slice(-30),
        {
          type: 'system',
          text: `[${timestamp}] US_DIST: ${distance}cm | IR_STATE: ${irState} | ISR_LATENCY: ${latency}ms`,
        },
      ]);
    }, 1200);

    return () => clearInterval(interval);
  }, [isStreaming]);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLogs: CommandLog[] = [...logs, { type: 'input', text: `$ ${cmd}` }];

    switch (trimmed) {
      case 'help':
        newLogs.push({
          type: 'output',
          text: `AVAILABLE COMMANDS:
- status      : Print ESP32 CPU, FreeRTOS heap & clock speed
- stream      : Toggle live sensor stream (Ultrasonic & IR)
- sensors     : Single read of attached sensor telemetry
- projects    : List active hardware prototypes
- matrix      : Display verified technical competencies
- contact     : Output direct communication channels
- clear       : Reset terminal buffer
- exit        : Close CLI monitor`,
        });
        break;

      case 'status':
        newLogs.push({
          type: 'output',
          text: `ESP32 DIAGNOSTIC TELEMETRY:
• Microcontroller : Dual Core Xtensa LX6 @ 240MHz
• FreeRTOS Heap   : 284,416 bytes free (Nominal)
• UART Baud Rate  : 115200 (8N1)
• Wi-Fi / BLE     : Station Mode Connected (REVA-LAB-5G)
• Battery Voltage : 4.18V (LiPo 1S Fully Charged)
• System Uptime   : 41 hours, 28 minutes`,
        });
        break;

      case 'stream':
        setIsStreaming((prev) => !prev);
        newLogs.push({
          type: 'system',
          text: isStreaming
            ? 'STREAM TERMINATED.'
            : 'LIVE SENSOR TELEMETRY STREAM STARTED (Microsecond Polling)...',
        });
        break;

      case 'sensors':
        newLogs.push({
          type: 'output',
          text: `CURRENT SENSOR TELEMETRY SNAPSHOT:
[HC-SR04] Distance : ${(14.5 + Math.random() * 2).toFixed(2)} cm
[IR ARRAY] Pins 18-21: [0, 0, 1, 0] (Central obstacle detected)
[L298N] PWM Duty  : Left: 85% | Right: 85% (Forward cruise)`,
        });
        break;

      case 'projects':
        newLogs.push({
          type: 'output',
          text: `ACTIVE VERIFIED PROJECTS:
1. ${PROJECTS[0].code}: ${PROJECTS[0].title} (<15ms latency, 99.2% accuracy)
2. ${PROJECTS[1].code}: ${PROJECTS[1].title} (360° sweep, 0.08s braking)`,
        });
        break;

      case 'matrix':
        newLogs.push({
          type: 'output',
          text: `TECHNICAL COMPETENCIES:
• C & C++            : Embedded firmware, FreeRTOS, memory registers
• Python & AI        : NumPy, Pandas, Scikit-learn, Edge AI
• IoT & Sensors      : Arduino, ESP32, HC-SR04, L298N, SPI/I2C
• Web / Telemetry    : React, TypeScript, Tailwind, WebSockets
• Git Architecture   : CI/CD, GitHub, clean modular architecture`,
        });
        break;

      case 'contact':
        newLogs.push({
          type: 'output',
          text: `DIRECT COMMUNICATION CHANNELS:
• Phone : ${PERSONAL_INFO.phone}
• Email : ${PERSONAL_INFO.email}
• GitHub: ${PERSONAL_INFO.githubUrl}
• LinkedIn: ${PERSONAL_INFO.linkedinUrl}`,
        });
        break;

      case 'clear':
        setLogs([]);
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        newLogs.push({
          type: 'error',
          text: `Command not recognized: "${cmd}". Type "help" for valid commands.`,
        });
    }

    setLogs(newLogs);
    setInputVal('');
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    handleCommand(inputVal);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1c1b1b]/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4">
      <div className="bg-[#1c1b1b] border-2 border-[#1c1b1b] w-full max-w-2xl text-[#fbf9f4] brutal-shadow-lg flex flex-col h-[520px] max-h-[90vh]">
        {/* Terminal Header */}
        <div className="bg-[#2a2928] px-3 py-2 border-b-2 border-[#1c1b1b] flex items-center justify-between font-mono text-xs select-none">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#d95d39]" />
            <span className="font-bold text-white tracking-wider">
              ESP32 SERIAL TELEMETRY MONITOR // 115200 BAUD
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsStreaming((prev) => !prev)}
              title={isStreaming ? 'Pause stream' : 'Stream telemetry'}
              className="px-2 py-0.5 bg-[#3a3938] hover:bg-[#4a4948] text-xs font-mono font-bold flex items-center gap-1"
            >
              {isStreaming ? (
                <>
                  <Square className="w-3 h-3 text-[#d95d39]" />
                  <span className="text-[10px]">PAUSE</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-green-400" />
                  <span className="text-[10px]">STREAM</span>
                </>
              )}
            </button>

            <button
              onClick={() => setLogs([])}
              title="Clear buffer"
              className="px-2 py-0.5 bg-[#3a3938] hover:bg-[#4a4948] text-xs font-mono font-bold flex items-center gap-1"
            >
              <Trash2 className="w-3 h-3 text-[#747878]" />
            </button>

            <button
              onClick={onClose}
              className="w-6 h-6 bg-[#3a3938] hover:bg-[#d95d39] text-white flex items-center justify-center font-bold"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Screen / Logs */}
        <div className="flex-1 p-3 overflow-y-auto font-mono text-xs space-y-1 bg-[#141414]">
          {logs.map((log, index) => (
            <div
              key={index}
              className={`leading-relaxed whitespace-pre-wrap ${
                log.type === 'input'
                  ? 'text-white font-bold'
                  : log.type === 'system'
                  ? 'text-[#d95d39]'
                  : log.type === 'error'
                  ? 'text-red-400'
                  : 'text-green-300'
              }`}
            >
              {log.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Shortcuts */}
        <div className="px-3 py-1.5 bg-[#1e1d1d] border-t border-[#333] flex flex-wrap gap-1.5 font-mono text-[10px]">
          <span className="text-[#747878] mr-1">QUICK CMDS:</span>
          {['status', 'stream', 'sensors', 'projects', 'matrix', 'contact'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-1.5 py-0.5 bg-[#2a2928] hover:bg-[#d95d39] hover:text-white text-[#dcdad5] border border-[#444]"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={onSubmit}
          className="p-2.5 bg-[#1c1b1b] border-t-2 border-[#2a2928] flex items-center gap-2"
        >
          <span className="font-mono text-xs text-green-400 font-bold">$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type command ('help', 'status', 'stream')..."
            className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none placeholder:text-[#555]"
            autoFocus
          />
          <button
            type="submit"
            className="px-3 py-1 bg-[#d95d39] hover:bg-[#a73918] text-white font-mono text-xs font-bold uppercase"
          >
            EXECUTE
          </button>
        </form>
      </div>
    </div>
  );
};
