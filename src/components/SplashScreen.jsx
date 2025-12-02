import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NavbarLogo from './NavbarLogo';

// UPDATED: Now focuses on your specific services
const bootText = [
  "INITIALIZING_CYBERDEFEND_CORE_V2.1...",
  "LOADING_VAPT_MODULES (WEB & MOBILE)...",
  "CALIBRATING_RED_TEAM_PROTOCOLS...",
  "CHECKING_CLOUD_SECURITY_CONFIGS...",
  "SYNCING_COMPLIANCE_DATABASES (ISO/SOC2)...",
  "ESTABLISHING_SECURE_UPLINK...",
  "ACCESS_GRANTED."
];

const SplashScreen = ({ onComplete }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Text Cycling Logic - Slightly slower (550ms) so users can read the services
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev < bootText.length - 1 ? prev + 1 : prev));
    }, 550);

    // 2. Progress Bar Logic
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(textInterval);
          clearInterval(progressInterval);
          setTimeout(onComplete, 500); 
          return 100;
        }
        // Random jump between 1 and 10 to make it feel like "processing"
        return Math.min(prev + Math.floor(Math.random() * 10), 100);
      });
    }, 150);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020617] text-accent overflow-hidden"
      exit={{ y: "-100%", transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,159,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,159,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-md px-6">
        
        {/* Pulsing Logo */}
        <div className="mb-12 relative">
          <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full animate-pulse"></div>
          <NavbarLogo className="w-24 h-24 relative z-10" />
        </div>

        {/* The Text Terminal */}
        <div className="w-full font-mono text-xs sm:text-sm mb-4 h-6 flex justify-between items-center text-gray-400">
          <span className="truncate mr-4">&gt; {bootText[textIndex]}</span>
          <span className="text-accent font-bold">{progress}%</span>
        </div>

        {/* The Progress Bar */}
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative">
          <motion.div 
            className="h-full bg-accent shadow-[0_0_15px_#00FF9F]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

        {/* Decorative ID */}
        <div className="mt-4 text-[10px] font-mono text-gray-600 tracking-[0.3em]">
          SESSION_ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
        </div>

      </div>
    </motion.div>
  );
};

export default SplashScreen;