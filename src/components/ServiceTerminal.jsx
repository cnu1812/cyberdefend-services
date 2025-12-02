import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal, Minus, Square, Activity, Command } from 'lucide-react'; // Added Command icon
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ServiceTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBooting, setIsBooting] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  const navigate = useNavigate();

  // --- KEYBOARD SHORTCUT (Ctrl+K) ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault(); // Prevent browser's default search bar
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // --- BOOT SEQUENCE ---
  const runBootSequence = () => {
    setIsBooting(true);
    setHistory([]);
    const bootLines = [
      { text: "INITIALIZING SECURITY CONSOLE v4.2...", delay: 100 },
      { text: "CONNECTING TO SECURE SOCKET LAYER...", delay: 300 },
      { text: "AUTHENTICATING GUEST CREDENTIALS...", delay: 600 },
      { text: "ESTABLISHING UPLINK TO SOC...", delay: 900 },
      { text: "CONNECTION SECURE. WELCOME, ADMIN.", delay: 1400 },
      { text: "Type 'help' to view available protocols.", delay: 1600, type: 'info' }
    ];

    let accumulatedDelay = 0;
    bootLines.forEach((line) => {
      accumulatedDelay += line.delay;
      setTimeout(() => {
        setHistory(prev => [...prev, { type: line.type || 'system', content: line.text }]);
      }, accumulatedDelay);
    });

    setTimeout(() => setIsBooting(false), accumulatedDelay + 200);
  };

  useEffect(() => {
    if (isOpen) runBootSequence();
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, isBooting]);

  useEffect(() => {
    if (isOpen && !isBooting) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isBooting]);

  // --- AUDIT SIMULATION ---
  const runAuditSimulation = () => {
    const logs = [
      "[INFO] Starting Quick Infrastructure Audit...",
      "[SCAN] Pinging external gateways...",
      "[CHECK] Verifying SSL/TLS Certificates... [OK]",
      "[CHECK] Inspecting HTTP Headers... [WARNING: Missing CSP]",
      "[SCAN] Port Scanning (Common Ports)...",
      "       - 80/tcp  OPEN",
      "       - 443/tcp OPEN",
      "[INFO] Analyzing Exposed Services...",
      "[ALERT] Potential Misconfiguration detected in simulation.",
      "[CONCLUSION] Full VAPT recommended for production assets."
    ];

    logs.forEach((log, index) => {
      setTimeout(() => {
        let type = 'system';
        if (log.includes('[CHECK]')) type = 'success';
        if (log.includes('[WARNING]')) type = 'warning';
        if (log.includes('[ALERT]')) type = 'error';
        
        setHistory(prev => [...prev, { type, content: log }]);
      }, index * 600);
    });

    setTimeout(() => {
      setHistory(prev => [
        ...prev, 
        { type: 'accent', content: "Click here to book a real audit ->", action: () => navigate('/contact') }
      ]);
    }, logs.length * 600 + 500);
  };

  const handleCommand = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < cmdHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(cmdHistory[cmdHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(cmdHistory[cmdHistory.length - 1 - newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const commands = ['help', 'status', 'audit', 'services', 'contact', 'clear', 'exit', 'home', 'academy'];
      const match = commands.find(c => c.startsWith(input));
      if (match) setInput(match);
    } else if (e.key === 'Enter') {
      if (!input.trim()) return;
      
      const cmd = input.trim().toLowerCase();
      setCmdHistory(prev => [...prev, cmd]);
      setHistoryIndex(-1);
      
      const newHistory = [...history, { type: 'user', content: `admin@cyberdefend:~$ ${input}` }];

      switch (cmd) {
        case 'help':
          newHistory.push({ type: 'success', content: 'AVAILABLE COMMANDS:' });
          newHistory.push({ type: 'system', content: '  audit    - Run quick security simulation' });
          newHistory.push({ type: 'system', content: '  services - List operational capabilities' });
          newHistory.push({ type: 'system', content: '  home     - Return to Main Hub' });
          newHistory.push({ type: 'system', content: '  academy  - Visit Training Portal' });
          newHistory.push({ type: 'system', content: '  contact  - Open secure communication' });
          newHistory.push({ type: 'system', content: '  clear    - Clear terminal buffer' });
          break;
        
        // --- NAVIGATION COMMANDS ---
        case 'home':
          newHistory.push({ type: 'success', content: 'Redirecting to Main Hub...' });
          setTimeout(() => window.location.href = 'https://cyberdefend.in', 1000);
          break;
        
        case 'academy':
          newHistory.push({ type: 'success', content: 'Redirecting to Education Portal...' });
          setTimeout(() => window.location.href = 'https://academy.cyberdefend.in', 1000);
          break;

        case 'status':
          newHistory.push({ type: 'info', content: 'CyberDefend SOC: OPERATIONAL' });
          newHistory.push({ type: 'info', content: 'Threat Level: LOW' });
          newHistory.push({ type: 'info', content: 'Active Agents: STANDBY' });
          break;

        case 'services':
          newHistory.push({ type: 'accent', content: '1. VAPT (Web/Mobile)' });
          newHistory.push({ type: 'accent', content: '2. Cloud Security Hardening' });
          newHistory.push({ type: 'accent', content: '3. Red Teaming Operations' });
          newHistory.push({ type: 'accent', content: '4. ISO/SOC2 Compliance' });
          break;

        case 'audit':
          setHistory(newHistory);
          setInput('');
          runAuditSimulation();
          return;

        case 'contact':
          newHistory.push({ type: 'success', content: 'Redirecting to Secure Channel...' });
          setTimeout(() => navigate('/contact'), 1000);
          break;

        case 'clear':
          setHistory([]);
          setInput('');
          return;
        case 'exit':
          setIsOpen(false);
          return;
        default:
          newHistory.push({ type: 'error', content: `Error: Command '${cmd}' not recognized.` });
      }

      setHistory(newHistory);
      setInput('');
    }
  };

  return (
    <>
      {/* TRIGGER BUTTON - Fixed Bottom Left */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 p-3 bg-primary/90 backdrop-blur border border-accent/30 rounded-sm text-accent hover:bg-accent/20 hover:border-accent hover:shadow-[0_0_20px_rgba(0,255,159,0.3)] transition-all group flex items-center gap-3"
        title="Open Admin Console (Ctrl+K)"
      >
        <Terminal size={24} />
        
        <div className="flex flex-col items-start">
          <span className="text-[10px] font-mono text-accent/70 tracking-widest uppercase group-hover:text-accent">
            System Console
          </span>
          {/* Keyboard Shortcut Hint */}
          <span className="text-[10px] font-bold text-white bg-white/10 px-1 rounded flex items-center gap-1">
            <Command size={8} /> K
          </span>
        </div>
      </button>

      {/* TERMINAL MODAL */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm font-mono">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="w-full max-w-3xl bg-[#050C16] border border-accent/30 rounded-sm shadow-2xl overflow-hidden flex flex-col h-[500px] relative"
            >
              {/* Window Bar */}
              <div className="bg-[#0A192F] px-4 py-2 flex justify-between items-center border-b border-accent/20 select-none">
                <div className="flex gap-2 items-center text-accent text-xs tracking-widest">
                  <Activity size={14} className="animate-pulse" />
                  <span>SECURE_SHELL :: ADMIN_ACCESS</span>
                </div>
                <div className="flex gap-3">
                   <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-red-500 transition-colors"><X size={16}/></button>
                </div>
              </div>

              {/* Console Output */}
              <div 
                className="flex-1 overflow-y-auto p-4 space-y-1 cursor-text bg-black/40"
                onClick={() => !isBooting && inputRef.current?.focus()}
                style={{ fontFamily: '"Fira Code", "Courier New", monospace' }}
              >
                {/* Scanlines Effect */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,255,159,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,159,0.03)_1px,transparent_1px)] bg-[size:4px_4px] opacity-20 z-0"></div>

                <div className="relative z-10">
                    {history.map((line, i) => (
                    <div 
                        key={i} 
                        onClick={line.action}
                        className={`text-sm tracking-wide ${line.action ? 'cursor-pointer hover:underline' : ''} ${
                            line.type === 'error' ? 'text-red-500' : 
                            line.type === 'success' ? 'text-green-400' : 
                            line.type === 'warning' ? 'text-yellow-400' : 
                            line.type === 'accent' ? 'text-accent' :
                            line.type === 'user' ? 'text-white mt-2' : 
                            'text-gray-400'
                        }`}
                    >
                        {line.content}
                    </div>
                    ))}
                    
                    {!isBooting && (
                    <div className="flex items-center gap-2 text-accent mt-2">
                        <span className="font-bold">admin@cyberdefend:~$</span>
                        <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleCommand}
                        className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0 text-sm caret-accent"
                        autoFocus
                        spellCheck="false"
                        autoComplete="off"
                        />
                    </div>
                    )}
                    <div ref={bottomRef} />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServiceTerminal;