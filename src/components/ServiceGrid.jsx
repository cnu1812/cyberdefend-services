import React from 'react';
import { motion } from 'framer-motion';
import { Search, Server, FileCheck, Globe, Code, Users } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: "VAPT (Web & Mobile)",
    desc: "Comprehensive penetration testing for your applications. We find the holes before hackers do.",
    tags: ["OWASP Top 10", "Business Logic"]
  },
  {
    icon: Server,
    title: "Network Security",
    desc: "Hardening your internal and external infrastructure against APTs and ransomware.",
    tags: ["Firewall Audit", "Architecture Review"]
  },
  {
    icon: FileCheck,
    title: "Compliance Readiness",
    desc: "Get ready for ISO 27001, SOC 2, and GDPR audits with our gap analysis and consulting.",
    tags: ["ISO 27001", "SOC 2 Type II"]
  },
  {
    icon: Code,
    title: "Secure Code Review",
    desc: "Integrating security into your CI/CD pipeline. Fix vulnerabilities at the source code level.",
    tags: ["DevSecOps", "SAST/DAST"]
  },
  {
    icon: Users,
    title: "Red Teaming",
    desc: "Full-scope adversarial simulation. We attack your people, process, and technology.",
    tags: ["Phishing", "Social Engineering"]
  },
  {
    icon: Globe,
    title: "Cloud Security",
    desc: "AWS/Azure/GCP configuration review to prevent data leaks and misconfigurations.",
    tags: ["Cloud Config", "IAM Audit"]
  }
];

const ServiceGrid = () => {
  return (
    <section id="services" className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our <span className="text-brand-primary">Expertise</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">End-to-end security services tailored for modern technology stacks.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl hover:bg-white/10 transition-colors group cursor-pointer border border-white/5 hover:border-brand-primary/50"
            >
              <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all">
                <service.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">{service.desc}</p>
              
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-white/5 text-slate-300 border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceGrid;