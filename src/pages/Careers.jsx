import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, Cpu, ChevronRight, Briefcase, Upload, CheckCircle } from 'lucide-react';
import { useFormSubmit } from '../hooks/useFormSubmit';

// --- CONFIGURATION ---
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyzrJjQEWWoCQBo0rqWdrKx9MozLM1q4qXl60oKFIARD8gVkZ6pN3qulIrbo1PrZkJr/exec"; 

const jobs = [
  {
    id: "OP-RED-01",
    title: "Senior Penetration Tester",
    dept: "Red Team",
    location: "Remote / Hybrid",
    type: "Full-Time",
    desc: "Execute complex attack simulations against high-value targets. Requires mastery of Burp Suite, Cobalt Strike, and manual exploitation."
  },
  {
    id: "OP-BLUE-04",
    title: "SOC Analyst (L2)",
    dept: "Blue Team",
    location: "Hyderabad (HQ)",
    type: "Rotational Shift",
    desc: "Monitor SIEM alerts, hunt threats, and contain active breaches in real-time. You are the first line of defense."
  },
  {
    id: "OP-GRC-02",
    title: "Security Architect",
    dept: "Engineering",
    location: "Remote",
    type: "Contract",
    desc: "Design zero-trust architectures for cloud-native startups. Experience with AWS/Azure security & ISO 27001 required."
  }
];

const Careers = () => {
  const { status, submit } = useFormSubmit(SCRIPT_URL);
  const [selectedJob, setSelectedJob] = useState(jobs[0].title);
  const [formData, setFormData] = useState({ name: '', email: '', linkedin: '', portfolio: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    submit({
      name: formData.name,
      email: formData.email,
      service: `CAREER_APP: ${selectedJob}`, // Tag it as a Job Application
      message: `LinkedIn: ${formData.linkedin} | Portfolio: ${formData.portfolio}`
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-24 min-h-screen bg-darkBg text-lightGray relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,159,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,159,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- HERO SECTION --- */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-sm bg-accent/10 border border-accent/40 text-accent text-xs font-mono mb-6"
          >
            <Target size={14} className="animate-pulse" /> RECRUITMENT_PHASE: ACTIVE
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Join the <span className="text-accent text-glow">Elite</span>.
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We don't hire employees. We recruit Operators. If you live in the terminal and dream in binary, you belong here.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* --- LEFT: MISSION BOARD (JOB LIST) --- */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Briefcase className="text-accent" /> Active Operations
            </h3>
            
            {jobs.map((job, index) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedJob(job.title)}
                className={`group cursor-pointer border p-6 rounded-sm transition-all duration-300 relative overflow-hidden ${
                  selectedJob === job.title 
                    ? 'bg-accent/10 border-accent' 
                    : 'bg-primary/30 border-white/10 hover:border-accent/50'
                }`}
              >
                {/* Selection Marker */}
                {selectedJob === job.title && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent"></div>
                )}

                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-mono text-accent opacity-70">{job.id}</span>
                  <span className="text-xs font-bold bg-darkBg border border-white/10 px-2 py-1 rounded text-gray-400">
                    {job.type}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">{job.title}</h4>
                <div className="text-sm text-gray-500 mb-4">{job.dept} • {job.location}</div>
                
                <p className="text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                  {job.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* --- RIGHT: SUBMIT DOSSIER (FORM) --- */}
          <div className="bg-[#0f192b] border border-accent/20 p-8 rounded-sm relative sticky top-32">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent"></div>

            <h3 className="text-2xl font-bold text-white mb-2">Submit Credentials</h3>
            <p className="text-sm text-gray-400 mb-8 font-mono">
              APPLYING FOR: <span className="text-accent">{selectedJob}</span>
            </p>

            {status === 'success' ? (
              <div className="text-center py-12 animate-slide-up">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                  <CheckCircle size={32} />
                </div>
                <h4 className="text-xl font-bold text-white">Dossier Received</h4>
                <p className="text-gray-400 mt-2 text-sm">HR Command will review your profile.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono text-gray-500 mb-1">OPERATOR_NAME</label>
                  <input required name="name" onChange={handleChange} type="text" className="w-full bg-darkBg border border-white/10 p-3 text-white focus:border-accent focus:outline-none transition-colors" />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-500 mb-1">SECURE_EMAIL</label>
                  <input required name="email" onChange={handleChange} type="email" className="w-full bg-darkBg border border-white/10 p-3 text-white focus:border-accent focus:outline-none transition-colors" />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-500 mb-1">LINKEDIN_PROFILE</label>
                  <input required name="linkedin" onChange={handleChange} type="url" className="w-full bg-darkBg border border-white/10 p-3 text-white focus:border-accent focus:outline-none transition-colors" placeholder="https://linkedin.com/in/..." />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-500 mb-1">PORTFOLIO / GITHUB (OPTIONAL)</label>
                  <input name="portfolio" onChange={handleChange} type="url" className="w-full bg-darkBg border border-white/10 p-3 text-white focus:border-accent focus:outline-none transition-colors" />
                </div>

                <div className="pt-4">
                  <button 
                    disabled={status === 'loading'}
                    className="w-full bg-accent text-darkBg font-bold py-4 hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <span className="animate-pulse">UPLOADING...</span>
                    ) : (
                      <>UPLOAD DOSSIER <Upload size={18} /></>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Careers;