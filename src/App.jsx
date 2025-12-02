import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Router
import { AnimatePresence } from 'framer-motion';

// Components
import ServiceNavbar from './components/ServiceNavbar';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import ScrollToTop from './components/ScrollToTop';
import SmoothScroll from './components/SmoothScroll';
import CyberScrollbar from './components/CyberScrollbar';
import Careers from './pages/Careers';
import CaseStudies from './pages/CaseStudies';
import ServiceTerminal from './components/ServiceTerminal';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    // 1. The Router MUST wrap everything
    <BrowserRouter>
      
      <SmoothScroll />
      <ScrollToTop />
      
      {/* 2. Splash Screen Logic */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <SplashScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* 3. Main Website (Only renders after loading) */}
      {!isLoading && (
        <div className="bg-darkBg text-lightGray font-sans min-h-screen selection:bg-accent selection:text-darkBg animate-opacity-in flex flex-col">
          
          <CyberScrollbar />
          <ServiceNavbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/casestudies" element={<CaseStudies />} />
              <Route path="/careers" element={<Careers />} />
            </Routes>
          </main>

          <Footer />
        </div>
      )}
<ServiceTerminal />
    </BrowserRouter>
  );
}

export default App;