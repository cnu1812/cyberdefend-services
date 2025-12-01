import React from 'react';
import { ShieldCheck, FileCheck, Globe, Lock } from 'lucide-react';

const badges = [
  { icon: ShieldCheck, text: "ISO 27001 Certified" },
  { icon: FileCheck, text: "SOC 2 Type II Ready" },
  { icon: Globe, text: "GDPR Compliant" },
  { icon: Lock, text: "HIPAA Compliant" },
  { icon: ShieldCheck, text: "OWASP Top 10" },
  { icon: FileCheck, text: "CERT-In Empanelled" },
  { icon: Globe, text: "PCI-DSS" },
];

const ComplianceTicker = () => {
  return (
    <div className="bg-primary border-y border-accent/20 py-6 overflow-hidden relative">
      <div className="flex animate-scroll w-[200%]">
        {/* We duplicate the list to make it seamless */}
        {[...badges, ...badges, ...badges].map((badge, index) => (
          <div key={index} className="flex items-center gap-3 px-12 min-w-max opacity-70 hover:opacity-100 transition-opacity">
            <badge.icon className="text-accent" size={24} />
            <span className="text-lg font-bold text-white tracking-wide">{badge.text}</span>
          </div>
        ))}
      </div>
      
      {/* Gradient Fades on Sides */}
      <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-primary to-transparent z-10"></div>
      <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-primary to-transparent z-10"></div>
    </div>
  );
};

export default ComplianceTicker;