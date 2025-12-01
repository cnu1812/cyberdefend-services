import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import NavbarLogo from './NavbarLogo'; // <--- Import the new logo

const ServiceNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/90 backdrop-blur-md py-3 border-b border-accent/20' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Brand Section */}
        <a href="#" className="flex items-center gap-3 group">
          {/* Replaced ShieldCheck with NavbarLogo */}
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <NavbarLogo className="w-12 h-12" />
          </div>
          
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-wide text-white leading-none">
              CYBER<span className="text-accent">DEFEND</span>
            </span>
            <span className="text-[10px] text-gray-400 tracking-[0.2em] group-hover:text-accent transition-colors">
              SERVICES
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-lightGray">
          <a href="#services" className="hover:text-accent transition">Services</a>
          <a href="#process" className="hover:text-accent transition">Methodology</a>
          <a 
            href="mailto:contact@cyberdefend.in" 
            className="px-5 py-2.5 bg-accent text-darkBg font-bold rounded-sm hover:bg-white transition-all shadow-[0_0_10px_rgba(0,255,159,0.3)]"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white hover:text-accent">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-darkBg border-b border-accent/20 p-6 flex flex-col gap-4 shadow-2xl">
          <a href="#services" className="text-gray-300 hover:text-accent py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#process" className="text-gray-300 hover:text-accent py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Methodology</a>
          <a href="mailto:contact@cyberdefend.in" className="text-accent font-bold py-2" onClick={() => setIsOpen(false)}>Get Quote</a>
        </div>
      )}
    </nav>
  );
};

export default ServiceNavbar;