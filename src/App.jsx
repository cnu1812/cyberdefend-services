import React from 'react';
import ServiceNavbar from './components/ServiceNavbar';
import ServiceHero from './components/ServiceHero';
import ComplianceTicker from './components/ComplianceTicker';
import ProcessRoadmap from './components/ProcessRoadmap';
import ServiceArsenal from './components/ServiceArsenal';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer'; // <--- Import the new Footer

function App() {
  return (
    <div className="bg-darkBg text-lightGray font-sans min-h-screen selection:bg-accent selection:text-darkBg">
      <ServiceNavbar />
      <main>
        <ServiceHero />
        <ComplianceTicker />
        <ProcessRoadmap />
        <ServiceArsenal />
        <FinalCTA />
        
        {/* Use the component here */}
        <Footer />
        
      </main>
    </div>
  );
}

export default App;