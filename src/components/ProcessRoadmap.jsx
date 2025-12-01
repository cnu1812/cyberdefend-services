import React from 'react';
import { motion } from 'framer-motion';
import { Scan, Crosshair, FileWarning, ShieldCheck, ChevronRight, CornerRightDown } from 'lucide-react';

const steps = [
  {
    id: "01",
    icon: Scan,
    title: "Reconnaissance",
    desc: "We map your attack surface using OSINT and active scanning to identify weaknesses."
  },
  {
    id: "02",
    icon: Crosshair,
    title: "Attack Simulation",
    desc: "Our ethical hackers launch controlled exploits to breach your defenses safely."
  },
  {
    id: "03",
    icon: FileWarning,
    title: "Reporting & PoC",
    desc: "Receive a detailed breakdown with Proof of Concept and prioritized remediation steps."
  },
  {
    id: "04",
    icon: ShieldCheck,
    title: "Verify & Certify",
    desc: "We re-test patched vulnerabilities to ensure closure and issue compliancy certification."
  }
];

const ProcessRoadmap = () => {
  return (
    <section id="process" className="py-24 bg-darkBg relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-sm bg-accent/5 border border-accent/20 text-accent text-xs font-mono tracking-widest"
          >
            <CornerRightDown size={14} /> OPERATIONAL_PROTOCOL_V2.1
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The <span className="text-accent text-glow">Kill Chain</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Our rigorous, military-grade methodology for securing high-value infrastructure.
          </p>
        </div>

        <div className="relative">
          
          {/* --- THE ANIMATED BEAM (Background Connector) --- */}
          <div className="hidden md:block absolute top-[110px] left-0 w-full h-[2px] bg-white/10 overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-accent/70 to-transparent animate-beam-flow blur-[2px]"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 lg:gap-8 relative z-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6, type: "spring", bounce: 0.3 }}
                className="relative group h-full"
              >
                {/* Mobile Connector Arrow */}
                <div className="md:hidden flex justify-center text-accent/30 mb-6">
                  {index !== 0 && <ChevronRight className="rotate-90 w-8 h-8" />}
                </div>

                {/* --- THE CYBER PLATE CARD --- */}
                {/* We use two layers: a background glow layer, and the foreground content layer */}
                <div className="relative h-full">
                    
                    {/* Layer 1: The Hover Glow Effect (behind) */}
                    <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-transparent cyber-clip-path blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 z-0"></div>

                    {/* Layer 2: The Main Card Content */}
                    <div className="bg-gradient-to-b from-[#0f192b] to-[#0A192F] p-1 cyber-clip-path h-full relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
                      
                      {/* Inner Container for Content */}
                      <div className="bg-darkBg/80 backdrop-blur-sm p-6 cyber-clip-path-inner h-full flex flex-col relative overflow-hidden">
                        
                        {/* Tech Grid Pattern Overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,159,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,159,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>

                        {/* Header: Number & Icon */}
                        <div className="flex flex-col items-center mb-6 relative z-20">
                            {/* Integrated Glowing Number */}
                            <div className="font-mono text-3xl font-bold text-white/20 group-hover:text-accent transition-colors duration-300 mb-4 relative">
                                <span className="absolute inset-0 blur-sm text-accent opacity-0 group-hover:opacity-70">{step.id}</span>
                                {step.id}
                            </div>
                            
                            {/* Icon with Radar Ping */}
                            <div className="relative w-16 h-16 flex items-center justify-center">
                                <div className="absolute inset-0 bg-accent/20 rounded-sm rotate-45 animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative bg-darkBg border border-accent/30 rounded-sm rotate-45 w-14 h-14 flex items-center justify-center text-accent z-20 group-hover:bg-accent group-hover:text-darkBg transition-all duration-300 group-hover:rotate-0 group-hover:scale-110 shadow-[0_0_15px_rgba(0,255,159,0.2)]">
                                    {/* Counter-rotate icon so it looks straight */}
                                    <step.icon size={24} className="-rotate-45 group-hover:rotate-0 transition-all duration-300" />
                                </div>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="text-center relative z-20 flex-grow flex flex-col justify-end">
                            <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wider group-hover:text-accent transition-colors">
                            {step.title}
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                            {step.desc}
                            </p>
                        </div>
                      </div>
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for angled shapes and animation */}
      <style>{`
        /* The outer shape (border area) */
        .cyber-clip-path {
          clip-path: polygon(
            0 10%, 10% 0, /* Top-left cut */
            90% 0, 100% 10%, /* Top-right cut */
            100% 90%, 90% 100%, /* Bottom-right cut */
            10% 100%, 0 90% /* Bottom-left cut */
          );
        }
        /* The inner content shape (slightly smaller to create border effect) */
        .cyber-clip-path-inner {
             clip-path: polygon(
            0 10%, 10% 0,
            90% 0, 100% 10%,
            100% 90%, 90% 100%,
            10% 100%, 0 90%
          );
        }

        @keyframes beam-flow {
          0% { transform: translateX(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(300%); opacity: 0; }
        }
        .animate-beam-flow {
          animation: beam-flow 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default ProcessRoadmap;