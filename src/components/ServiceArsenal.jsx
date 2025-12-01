import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Server, FileCheck, Globe, Code, Users, ArrowRight, Activity, Terminal, X, Send, Lock } from 'lucide-react';

const services = [
  {
    id: "OP-01",
    icon: Search,
    title: "VAPT (Web & Mobile)",
    subtitle: "Offensive Penetration Testing",
    desc: "We simulate a real-world cyberattack on your applications. Our red team exploits OWASP Top 10 vulnerabilities and business logic flaws before criminals do.",
    stats: [
      { label: "Coverage", value: "100%" },
      { label: "Method", value: "Blackbox" },
      { label: "Standards", value: "OWASP/SANS" }
    ]
  },
  {
    id: "OP-02",
    icon: Server,
    title: "Network Hardening",
    subtitle: "Infrastructure Defense",
    desc: "Your internal network is your castle. We audit firewalls, active directory, and segmentation to prevent lateral movement by ransomware groups.",
    stats: [
      { label: "Scope", value: "Int/Ext" },
      { label: "Audit", value: "Architecture" },
      { label: "Focus", value: "Zero Trust" }
    ]
  },
  {
    id: "OP-03",
    icon: FileCheck,
    title: "Compliance Readiness",
    desc: "Don't let audits slow you down. We provide gap analysis and implementation roadmaps for ISO 27001, SOC 2, GDPR, and HIPAA.",
    subtitle: "Regulatory Alignment",
    stats: [
      { label: "ISO 27001", value: "Ready" },
      { label: "SOC 2", value: "Type II" },
      { label: "GDPR", value: "Mapped" }
    ]
  },
  {
    id: "OP-04",
    icon: Code,
    title: "Secure Code Review",
    subtitle: "DevSecOps Integration",
    desc: "Security needs to shift left. We analyze your source code (SAST) to kill bugs during development, saving costs and preventing zero-days.",
    stats: [
      { label: "Languages", value: "All" },
      { label: "Pipeline", value: "CI/CD" },
      { label: "Speed", value: "Real-time" }
    ]
  },
  {
    id: "OP-05",
    icon: Users,
    title: "Red Teaming",
    subtitle: "Adversarial Simulation",
    desc: "A full-scope, no-holds-barred attack. We target your people (phishing), physical security, and technology to test your incident response.",
    stats: [
      { label: "Stealth", value: "High" },
      { label: "Tactics", value: "APT Sim" },
      { label: "Duration", value: "4 Weeks" }
    ]
  },
  {
    id: "OP-06",
    icon: Globe,
    title: "Cloud Security",
    subtitle: "AWS / Azure / GCP",
    desc: "Misconfigurations cause 90% of cloud breaches. We audit your IAM roles, S3 buckets, and security groups to ensure your cloud is airtight.",
    stats: [
      { label: "Multi-Cloud", value: "Yes" },
      { label: "Review", value: "Config" },
      { label: "Identity", value: "Audited" }
    ]
  }
];

const ServiceArsenal = () => {
  const [activeId, setActiveId] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInitialize = () => {
    setIsLoading(true);
    // Fake loading delay for "Cyber" feel
    setTimeout(() => {
      setIsLoading(false);
      setIsModalOpen(true);
    }, 800);
  };

  return (
    <section id="services" className="py-24 bg-darkBg relative overflow-hidden">
      
      {/* Background Tech Lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-white/5 bg-white/[0.02] pointer-events-none hidden lg:block"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-16">
           <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Service <span className="text-accent text-glow">Arsenal</span></h2>
           <p className="text-gray-400">Select an operation module to view tactical details.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 h-auto lg:h-[600px]">
          
          {/* --- LEFT COLUMN: THE MENU --- */}
          <div className="lg:w-1/3 flex flex-col gap-2 overflow-y-auto pr-2 custom-scrollbar">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveId(index)}
                className={`group relative text-left p-6 transition-all duration-300 border-l-2 ${
                  activeId === index 
                    ? 'bg-white/5 border-accent' 
                    : 'border-white/10 hover:bg-white/[0.02] hover:border-white/30'
                }`}
              >
                <div className="flex justify-between items-center relative z-10">
                  <div>
                    <div className={`text-xs font-mono mb-1 ${activeId === index ? 'text-accent' : 'text-gray-500'}`}>
                      {service.id}
                    </div>
                    <div className={`text-lg font-bold ${activeId === index ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                      {service.title}
                    </div>
                  </div>
                  {activeId === index && (
                    <motion.div layoutId="active-indicator">
                      <Terminal size={18} className="text-accent animate-pulse" />
                    </motion.div>
                  )}
                </div>
                
                {/* Hover Glitch Background */}
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-0 group-hover:w-full"></div>
              </button>
            ))}
          </div>

          {/* --- RIGHT COLUMN: HOLOGRAPHIC DETAIL CARD --- */}
          <div className="lg:w-2/3 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="h-full"
              >
                {/* THE HOLO CARD */}
                <div className="h-full bg-[#0f192b] border border-white/10 relative overflow-hidden p-8 md:p-12 flex flex-col justify-between group">
                  
                  {/* Glowing Corner Accents */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-accent/50 rounded-tl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-accent/50 rounded-br-lg"></div>
                  
                  {/* Scanline Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,159,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,159,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30 pointer-events-none"></div>

                  <div>
                    {/* Top Meta Data */}
                    <div className="flex items-center gap-4 mb-8 text-accent/60 font-mono text-sm border-b border-white/5 pb-4">
                      <div className="flex items-center gap-2">
                         <Activity size={14} /> STATUS: ACTIVE
                      </div>
                      <div className="w-1 h-1 bg-accent/50 rounded-full"></div>
                      <div>SEC_LEVEL: MAX</div>
                      <div className="w-1 h-1 bg-accent/50 rounded-full"></div>
                      <div>ENCRYPTION: AES-256</div>
                    </div>

                    {/* Title Section */}
                    <div className="flex items-start justify-between mb-8">
                       <div>
                         <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                           {services[activeId].title}
                         </h3>
                         <p className="text-accent text-lg font-mono">{services[activeId].subtitle}</p>
                       </div>
                       
                       {/* Big Icon */}
                       <div className="hidden md:flex w-20 h-20 bg-accent/10 rounded-full items-center justify-center text-accent shadow-[0_0_30px_rgba(0,255,159,0.2)]">
                          {React.createElement(services[activeId].icon, { size: 40 })}
                       </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-10 border-l-4 border-accent/20 pl-6">
                      {services[activeId].desc}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-6">
                      {services[activeId].stats.map((stat, i) => (
                        <div key={i} className="bg-white/5 p-4 border border-white/5">
                           <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">{stat.label}</div>
                           <div className="text-xl font-bold text-white font-mono">{stat.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Area */}
                  <div className="mt-12 flex items-center justify-between">
                     <div className="font-mono text-xs text-gray-600">
                        HASH: 8f9a2...b1c
                     </div>
                     <button 
                        onClick={handleInitialize}
                        disabled={isLoading}
                        className="flex items-center gap-2 bg-accent text-darkBg px-8 py-3 font-bold hover:bg-white transition-colors group/btn disabled:opacity-50 disabled:cursor-wait"
                     >
                        {isLoading ? (
                          <span className="flex items-center gap-2 animate-pulse">Establishing Connection...</span>
                        ) : (
                          <>Initialize Protocol <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" /></>
                        )}
                     </button>
                  </div>

                  {/* Animated Scan Line overlay */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-accent/30 shadow-[0_0_15px_#00FF9F] animate-scan-fast pointer-events-none"></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* --- THE CONTACT MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#0A192F] border border-accent/30 p-8 rounded-sm w-full max-w-lg relative shadow-[0_0_50px_rgba(0,255,159,0.1)]"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 text-accent text-sm font-mono mb-2 border border-accent/20 px-3 py-1 rounded-full bg-accent/5">
                  <Lock size={12} /> SECURE_CHANNEL_ESTABLISHED
                </div>
                <h3 className="text-2xl font-bold text-white">Request Mission: <span className="text-accent">{services[activeId].id}</span></h3>
                <p className="text-gray-400 mt-2 text-sm">Fill out the brief below to deploy Cyberdefend assets.</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-mono text-gray-500 mb-1">AGENT_NAME / COMPANY</label>
                  <input type="text" className="w-full bg-darkBg border border-white/10 p-3 text-white focus:border-accent focus:outline-none transition-colors" placeholder="e.g. CorpSecurity Inc." />
                </div>
                
                <div>
                  <label className="block text-xs font-mono text-gray-500 mb-1">COMMUNICATION_LINK (EMAIL)</label>
                  <input type="email" className="w-full bg-darkBg border border-white/10 p-3 text-white focus:border-accent focus:outline-none transition-colors" placeholder="security@company.com" />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-500 mb-1">MISSION_OBJECTIVES</label>
                  <textarea className="w-full bg-darkBg border border-white/10 p-3 text-white focus:border-accent focus:outline-none transition-colors h-24" placeholder="Briefly describe your requirements..." defaultValue={`Interested in ${services[activeId].title}...`}></textarea>
                </div>

                <button className="w-full bg-accent text-darkBg font-bold py-4 mt-4 hover:bg-white transition-colors flex justify-center items-center gap-2 group">
                   <Send size={18} className="group-hover:translate-x-1 transition-transform" /> 
                   TRANSMIT REQUEST
                </button>
                
                <p className="text-center text-[10px] text-gray-600 mt-4">
                  Transmission is encrypted end-to-end. We respond within 2400 cycles (24h).
                </p>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.1);
        }
        
        @keyframes scan-fast {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan-fast {
          animation: scan-fast 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default ServiceArsenal;