import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Lock } from 'lucide-react';
import { useFormSubmit } from '../hooks/useFormSubmit';

// PASTE YOUR GOOGLE SCRIPT URL HERE
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyzrJjQEWWoCQBo0rqWdrKx9MozLM1q4qXl60oKFIARD8gVkZ6pN3qulIrbo1PrZkJr/exec";

const Contact = () => {
  const { status, submit } = useFormSubmit(SCRIPT_URL);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Combine names and prepare payload
    const payload = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      service: "General Inquiry (Contact Page)",
      message: formData.message
    };
    submit(payload);
  };

  return (
    <section className="pt-32 pb-20 px-6 min-h-screen bg-darkBg relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 relative z-10">
        
        {/* Contact Info (Same as before) */}
        <div>
          <h1 className="text-5xl font-bold text-white mb-6">Secure <span className="text-accent">Comms</span></h1>
          <p className="text-gray-400 text-lg mb-12">
            Ready to secure your infrastructure? Our team responds to all high-priority inquiries within 2 hours.
          </p>
          {/* ... (Keep your icons/info from previous code) ... */}
           <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary border border-accent/20 rounded-sm flex items-center justify-center text-accent">
                <Mail />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Email Protocol</h3>
                <p className="text-gray-400">support@cyberdefend.in</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary border border-accent/20 rounded-sm flex items-center justify-center text-accent">
                <MapPin />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">HQ Location</h3>
                <p className="text-gray-400">Bangalore, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* The Functional Form */}
        <div className="bg-primary/50 border border-accent/20 p-8 rounded-sm backdrop-blur-md relative overflow-hidden">
          
          <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-2">
            <Lock size={20} className="text-accent"/> Transmission Form
          </h3>

          {status === 'success' ? (
            <div className="h-64 flex flex-col items-center justify-center text-center animate-slide-up">
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mb-4 text-accent">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Transmission Received</h3>
              <p className="text-gray-400">Our agents will analyze your request and respond via secure channel.</p>
              <button onClick={() => window.location.reload()} className="mt-6 text-sm text-accent underline">Send another</button>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-accent">FIRST_NAME</label>
                  <input 
                    name="firstName" 
                    required 
                    onChange={handleChange} 
                    type="text" 
                    className="w-full bg-darkBg border border-white/10 p-3 text-white focus:border-accent outline-none focus:ring-1 focus:ring-accent" 
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-accent">LAST_NAME</label>
                  <input 
                    name="lastName" 
                    required 
                    onChange={handleChange} 
                    type="text" 
                    className="w-full bg-darkBg border border-white/10 p-3 text-white focus:border-accent outline-none focus:ring-1 focus:ring-accent" 
                  />
                </div>
              </div>
              
              <div>
                <label className="text-xs font-mono text-accent">CORPORATE_EMAIL</label>
                <input 
                  name="email" 
                  required 
                  onChange={handleChange} 
                  type="email" 
                  className="w-full bg-darkBg border border-white/10 p-3 text-white focus:border-accent outline-none focus:ring-1 focus:ring-accent" 
                />
              </div>

              <div>
                <label className="text-xs font-mono text-accent">MESSAGE_PAYLOAD</label>
                <textarea 
                  name="message" 
                  required 
                  onChange={handleChange} 
                  className="w-full bg-darkBg border border-white/10 p-3 text-white focus:border-accent outline-none h-32 focus:ring-1 focus:ring-accent"
                ></textarea>
              </div>

              <button 
                disabled={status === 'loading'}
                className="w-full bg-accent text-darkBg font-bold py-4 hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>ENCRYPTING & SENDING <span className="animate-pulse">...</span></>
                ) : (
                  <>SEND ENCRYPTED MESSAGE <Send size={18}/></>
                )}
              </button>
              
              {status === 'error' && (
                <p className="text-red-500 text-sm flex items-center gap-1"><AlertCircle size={14}/> Transmission failed. Please email us directly.</p>
              )}
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default Contact;