import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, Server, Lock, ArrowUpRight, CheckCircle2, Database } from 'lucide-react';

const cases = [
  {
    id: "OP-LOG-042",
    client: "FinTech Unicorn (Series C)",
    industry: "Financial Services",
    type: "Red Teaming",
    icon: Lock,
    title: "Payment Gateway Bypass Simulation",
    summary: "Client approached us to stress-test their new UPI integration before public rollout.",
    challenge: "The architecture relied heavily on 3rd party APIs. We needed to bypass WAF rules to manipulate transaction payloads without triggering their SOC alerts.",
    solution: "Deployed a custom C2 (Command & Control) framework. Identified a zero-day in the API logic that allowed 'Negative Value' transactions.",
    results: [
      "Prevented estimated ₹5Cr loss",
      "Fixed 3 Critical Vulnerabilities",
      "Hardened API Gateway"
    ]
  },
  {
    id: "OP-LOG-089",
    client: "Healthcare SaaS",
    industry: "Healthcare / HIPAA",
    type: "Cloud Security",
    icon: Server,
    title: "AWS Infrastructure Hardening",
    summary: "A telemedicine app needed HIPAA compliance to expand into the US market.",
    challenge: "Legacy infrastructure had over-permissive IAM roles and unencrypted S3 buckets exposing patient PII to the public internet.",
    solution: "Conducted a full Cloud Config Audit. Implemented Least Privilege Access and automated encryption for all data-at-rest.",
    results: [
      "100% HIPAA Compliant",
      "Reduced Attack Surface by 60%",
      "Secured 50k+ Patient Records"
    ]
  },
  {
    id: "OP-LOG-112",
    client: "E-Commerce Giant",
    industry: "Retail",
    type: "VAPT (Web/Mobile)",
    icon: Shield,
    title: "Black Friday Pre-Check",
    summary: "Ensuring the platform could withstand targeted DDoS and injection attacks during peak sale traffic.",
    challenge: "The app had complex business logic for coupons. Hackers could stack coupons indefinitely to get products for free.",
    solution: "Performed rigorous Business Logic testing. Found a race condition in the checkout flow.",
    results: [
      "Patched Logic Flaw",
      "Zero Downtime during Sale",
      "Secured Coupon Engine"
    ]
  }
];

const CaseStudies = () => {
  return (
    <div className="pt-24 min-h-screen bg-darkBg text-lightGray relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#0f192b] opacity-50 pointer-events-none skew-x-12"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,159,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,159,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-sm bg-accent/10 border border-accent/40 text-accent text-xs font-mono mb-6"
          >
            <Database size={14} /> ARCHIVES: DECLASSIFIED
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Mission <span className="text-accent text-glow">Logs</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Real-world engagements where CyberDefend neutralized threats and secured critical infrastructure.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-12 mb-24">
          {cases.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0A192F] border border-white/10 rounded-sm overflow-hidden hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="grid md:grid-cols-12 gap-0">
                
                {/* Left: Meta Data */}
                <div className="md:col-span-4 bg-black/20 p-8 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono text-accent mb-4">{study.id}</div>
                    <div className="w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center text-accent mb-6">
                      <study.icon size={24} />
                    </div>
                    <div className="text-white font-bold text-xl mb-1">{study.client}</div>
                    <div className="text-sm text-gray-500">{study.industry}</div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <span className="text-xs text-gray-600 font-mono block mb-2">OPERATION TYPE</span>
                    <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-xs font-bold rounded-sm">
                      {study.type}
                    </span>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="md:col-span-8 p-8 relative">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent/20 group-hover:border-accent transition-colors"></div>

                  <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    {study.summary}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-sm font-bold text-white mb-2 uppercase tracking-wide border-l-2 border-red-500 pl-3">The Challenge</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-2 uppercase tracking-wide border-l-2 border-accent pl-3">The Solution</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results Stats */}
                  <div className="bg-white/5 rounded-sm p-6 border border-white/5">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {study.results.map((res, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-accent shrink-0 mt-1" />
                          <span className="text-sm text-gray-300 font-medium">{res}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center py-16 bg-gradient-to-r from-transparent via-accent/5 to-transparent border-y border-white/5">
          <h3 className="text-2xl font-bold text-white mb-4">Have a similar challenge?</h3>
          <a 
            href="mailto:support@cyberdefend.in" 
            className="inline-flex items-center gap-2 bg-accent text-darkBg px-8 py-3 font-bold rounded-sm hover:bg-white transition-colors"
          >
            Request Case Study PDF <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </div>
  );
};

export default CaseStudies;