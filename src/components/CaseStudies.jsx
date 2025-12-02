import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // <--- 1. Import Link
import { FileText, ArrowUpRight, Lock, Server, Shield } from 'lucide-react';

const cases = [
  {
    client: "FinTech Unicorn",
    type: "Red Teaming",
    icon: Lock,
    result: "Critical Breach Prevented",
    desc: "Simulated a ransomware attack on their payment gateway. Identified a zero-day in their 3rd party API integration before launch.",
    stat: "Saved ₹2Cr+"
  },
  {
    client: "SaaS Enterprise",
    type: "Cloud Security",
    icon: Server,
    result: "AWS Hardening",
    desc: "Audited 500+ S3 buckets and IAM roles. Remedied 45 critical misconfigurations that exposed user PII to the public web.",
    stat: "100% Compliant"
  },
  {
    client: "Healthcare Provider",
    type: "VAPT & Compliance",
    icon: Shield,
    result: "HIPAA Certification",
    desc: "Conducted full-scope penetration testing for their patient portal. Guided the dev team to patch SQLi vulnerabilities.",
    stat: "Audit Passed"
  }
];

const CaseStudies = () => {
  return (
    <section className="py-24 px-6 bg-darkBg relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">Mission <span className="text-accent">Logs</span></h2>
            <p className="text-gray-400">Declassified operational reports from our recent engagements.</p>
          </div>
          
          {/* 2. Replaced <button> with <Link> */}
          <Link 
            to="/casestudies" 
            className="text-accent flex items-center gap-2 hover:text-white transition-colors font-mono text-sm"
          >
            VIEW_ARCHIVES <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-primary/40 border border-white/5 p-8 rounded-sm hover:border-accent/40 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 rounded-sm text-accent group-hover:bg-accent group-hover:text-darkBg transition-colors">
                  <study.icon size={24} />
                </div>
                <span className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded">
                  {study.type}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{study.client}</h3>
              <div className="text-accent text-sm font-bold mb-4 flex items-center gap-2">
                <FileText size={14} /> {study.result}
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                {study.desc}
              </p>

              <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                <span className="text-xs text-gray-500 font-mono">IMPACT</span>
                <span className="text-lg font-bold text-white">{study.stat}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;