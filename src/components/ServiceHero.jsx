import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Activity, Target } from 'lucide-react';

// The script data to simulate
const terminalData = [
  { text: "root@cyberdefend:~# ./active_scan -t client_infra", color: "text-accent" },
  { text: "[+] Target Acquired: Client_Infrastructure", color: "text-green-500" },
  { text: "[*] Initiating Port Scan (TCP/SYN)...", color: "text-blue-400" },
  { text: "    - Port 22 (SSH): OPEN", color: "text-gray-400" },
  { text: "    - Port 80 (HTTP): OPEN", color: "text-gray-400" },
  { text: "    - Port 443 (HTTPS): OPEN", color: "text-gray-400" },
  { text: "[*] Fingerprinting OS...", color: "text-blue-400" },
  { text: "    -> Linux Kernel 5.4.0-generic", color: "text-gray-500" },
  { text: "[!] VULNERABILITY DETECTED: CVE-2023-3824", color: "text-yellow-500 font-bold" },
  { text: "[*] Attempting Exploitation...", color: "text-accent" },
  { text: "    -> Injecting Payload...", color: "text-gray-500" },
  { text: "    -> Bypassing Firewall...", color: "text-gray-500" },
  { text: "[+] SUCCESS: Root Access Granted", color: "text-white bg-green-600/20 inline-block px-1" },
  { text: "[*] Generating Executive Report...", color: "text-blue-400" },
  { text: "[+] Patch Verified. System Secured.", color: "text-green-500 font-bold" },
  { text: "root@cyberdefend:~# ", color: "text-accent" }, // Idle state
];

const ServiceHero = () => {
  const [logs, setLogs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  // Dynamic Typing Logic
  useEffect(() => {
    if (currentIndex < terminalData.length) {
      const timeout = setTimeout(() => {
        setLogs((prev) => [...prev, terminalData[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, Math.random() * 600 + 200); // Random delay between 200ms and 800ms for realism

      return () => clearTimeout(timeout);
    } else {
      // Reset after a pause to loop the animation
      const resetTimeout = setTimeout(() => {
        setLogs([]);
        setCurrentIndex(0);
      }, 5000); // Wait 5 seconds before restarting
      return () => clearTimeout(resetTimeout);
    }
  }, [currentIndex]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-darkBg">
      
      {/* --- 1. THE RADAR BACKGROUND --- */}
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center pointer-events-none">
        <div className="relative w-[800px] h-[800px] opacity-30">
           {/* Concentric Circles */}
           <div className="absolute inset-0 border border-accent/20 rounded-full"></div>
           <div className="absolute inset-[150px] border border-accent/20 rounded-full"></div>
           <div className="absolute inset-[300px] border border-accent/20 rounded-full"></div>
           {/* Crosshairs */}
           <div className="absolute top-1/2 left-0 w-full h-[1px] bg-accent/10"></div>
           <div className="absolute left-1/2 top-0 h-full w-[1px] bg-accent/10"></div>
           {/* THE SCANNER SWEEP */}
           <div className="absolute inset-0 rounded-full animate-spin-slow">
             <div className="w-full h-full bg-[conic-gradient(transparent_270deg,rgba(0,255,159,0.2)_360deg)] rounded-full blur-xl"></div>
           </div>
           {/* Blips */}
           <div className="absolute top-32 left-48 w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_10px_#00FF9F]"></div>
           <div className="absolute bottom-40 right-52 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
        </div>
      </div>

      {/* --- 2. MAIN CONTENT --- */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side: Text */}
        <motion.div className="animate-slide-right">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-accent/10 border border-accent/40 text-accent text-xs font-mono mb-6">
            <Target size={14} className="animate-spin-slow" />
            TARGET_ACQUIRED: SECURE_INFRASTRUCTURE
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
            Offensive Security.<br />
            <span className="text-accent text-glow">Defensive Growth.</span>
          </h1>
          
          <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
            We don't just find bugs; we secure your revenue. Enterprise-grade VAPT, Red Teaming, and Compliance readiness for high-growth startups.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-accent text-darkBg font-bold text-lg rounded-sm hover:bg-white transition-all shadow-[0_0_20px_rgba(0,255,159,0.4)] flex items-center justify-center gap-2">
              Book Penetration Test <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 bg-transparent border border-accent/50 text-accent font-bold text-lg rounded-sm hover:bg-accent/10 transition-all flex items-center justify-center gap-2">
              View Sample Report
            </button>
          </div>
        </motion.div>

        {/* Right Side: The Dynamic Visualizer Card */}
        <motion.div className="relative hidden lg:block animate-slide-left">
          <div className="cyber-card p-6 rounded-sm relative overflow-hidden group border border-accent/30 bg-[#0A192F]/80 backdrop-blur-md">
            
            {/* Header */}
            <div className="flex justify-between items-center border-b border-accent/20 pb-4 mb-4">
              <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex items-center gap-2">
                <Activity size={12} className="text-accent animate-pulse" />
                <div className="font-mono text-xs text-accent">LIVE_SESSION_ID: 0x9A4F</div>
              </div>
            </div>

            {/* Dynamic Terminal Output */}
            <div 
              ref={scrollRef}
              className="font-mono text-sm space-y-2 h-72 overflow-y-auto scrollbar-hide relative"
            >
              {logs.map((log, index) => (
                <div key={index} className={`${log.color} break-words`}>
                  {log.text}
                </div>
              ))}
              
              {/* Typing Cursor at the end */}
              {currentIndex < terminalData.length && (
                 <div className="animate-pulse w-2 h-4 bg-accent inline-block ml-1"></div>
              )}
            </div>

            {/* Scanline Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20 pointer-events-none"></div>

            {/* Floating Shield Badge */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 blur-2xl rounded-full"></div>
            <ShieldCheck className="absolute bottom-4 right-4 text-accent drop-shadow-[0_0_10px_rgba(0,255,159,0.8)] opacity-50" size={48} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;