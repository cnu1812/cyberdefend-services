import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Shield, Mail, Lock, Wifi, Activity } from 'lucide-react';

// --- SUB-COMPONENT 1: DECRYPTING TEXT EFFECT ---
const DecryptedText = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";
  
  // Use Intersection Observer to trigger animation when visible
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3; // Controls speed (higher denominator = slower)
    }, 30);

    return () => clearInterval(interval);
  }, [isInView, text]);

  return <span ref={ref} className={`font-mono ${className}`}>{displayText}</span>;
};

// --- SUB-COMPONENT 2: REAL-TIME CLOCK ---
const LiveClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);
  return <span>{time}</span>;
};

// --- SUB-COMPONENT 3: FLUCTUATING PING ---
const LivePing = () => {
  const [ping, setPing] = useState(24);
  useEffect(() => {
    const timer = setInterval(() => {
      setPing(Math.floor(Math.random() * (45 - 15 + 1) + 15));
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  return <span>{ping}ms</span>;
};

const FinalCTA = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-primary border-t border-accent/20">
      
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Scrolling Matrix Background */}
      <div className="absolute inset-0 opacity-[0.04] text-[10px] font-mono leading-3 pointer-events-none overflow-hidden whitespace-pre select-none animate-scroll-slow">
        {Array(60).fill("01011001 SYSTEM_READY ENCRYPTION_KEY_ROTATING 00110101 TARGET_LOCKED ").join("\n")}
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        
        {/* Floating Icon */}
        <motion.div 
          initial={{ y: 0 }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-accent/30 shadow-[0_0_30px_rgba(0,255,159,0.3)] backdrop-blur-md"
        >
          <Shield size={40} className="text-accent" />
        </motion.div>

        {/* --- DYNAMIC HEADLINES --- */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Secure Your <span className="text-accent text-glow"><DecryptedText text="PERIMETER" /></span>
        </h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-mono"
        >
          <span className="text-accent mr-2">&gt;</span>
          The threat landscape is evolving. Deploy Cyberdefend offensive security assets immediately.
          <span className="animate-pulse ml-1">_</span>
        </motion.p>

        {/* --- THE COMMAND CARD --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-block relative group"
        >
          {/* Animated Border Gradient */}
          <div className="absolute -inset-1 bg-gradient-to-r from-accent via-blue-500 to-accent rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          
          <div className="relative bg-[#0A192F] border border-accent/30 rounded-lg p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-8">
            
            {/* Live Status Panel (Left) */}
            <div className="text-left space-y-3 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-10 w-full md:w-auto min-w-[200px]">
              
              <div className="flex items-center justify-between text-xs font-mono text-gray-500">
                <span className="flex items-center gap-2"><Wifi size={12} className="text-green-500" /> UPLINK</span>
                <span className="text-green-500 font-bold"><LivePing /></span>
              </div>
              
              <div className="flex items-center justify-between text-xs font-mono text-gray-500">
                <span className="flex items-center gap-2"><Lock size={12} className="text-accent" /> CHANNEL</span>
                <span className="text-accent">ENCRYPTED</span>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-gray-500">
                <span className="flex items-center gap-2"><Activity size={12} className="text-blue-500" /> SERVER</span>
                <LiveClock />
              </div>

              <div className="mt-4 pt-2 border-t border-white/5">
                <div className="text-[10px] text-accent tracking-widest animate-pulse">
                  AWAITING_INPUT...
                </div>
              </div>
            </div>

            {/* Action Buttons (Right) */}
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <a 
                href="mailto:contact@cyberdefend.in" 
                className="flex items-center justify-center gap-3 bg-accent text-darkBg px-8 py-4 text-lg font-bold rounded hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,255,159,0.4)] group/btn"
              >
                <Mail size={20} /> 
                <span>INITIATE CONTACT</span>
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
              
              <div className="flex items-center justify-between text-xs text-gray-500 font-mono px-1">
                 <span>RESPONSE_TIME: &lt; 24 HRS</span>
                 <span className="flex items-center gap-1 text-green-500">
                   ONLINE <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                 </span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FinalCTA;