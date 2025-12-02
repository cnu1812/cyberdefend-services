import React from 'react';

const tools = [
  "Burp Suite Pro", "Cobalt Strike", "Metasploit", "Nmap", "Wireshark", 
  "Nessus", "AWS GuardDuty", "Splunk", "CrowdStrike", "SentinelOne",
  "Hashcat", "Ghidra", "OWASP ZAP", "Snort"
];

const TechStack = () => {
  return (
    <section className="py-12 border-y border-accent/10 bg-[#050c18] overflow-hidden relative">
      
      <div className="flex items-center gap-4 px-6 mb-8 max-w-7xl mx-auto">
        <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
        <h3 className="text-sm font-mono text-gray-500 tracking-[0.2em] uppercase">Authorized_Toolchain</h3>
      </div>

      {/* Infinite Scroll Container */}
      <div className="flex animate-scroll-slow w-[200%] hover:pause-animation">
        {[...tools, ...tools, ...tools].map((tool, i) => (
          <div key={i} className="mx-4">
            <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-sm min-w-max flex items-center justify-center text-gray-400 font-mono text-sm hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all cursor-crosshair">
              {tool}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TechStack;