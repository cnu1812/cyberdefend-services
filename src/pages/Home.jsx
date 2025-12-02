import React from 'react';
import ServiceHero from '../components/ServiceHero';
import ComplianceTicker from '../components/ComplianceTicker';
import ProcessRoadmap from '../components/ProcessRoadmap';
import ServiceArsenal from '../components/ServiceArsenal';
import FinalCTA from '../components/FinalCTA';
import TechStack from '../components/TechStack'; // <--- Import
import CaseStudies from '../components/CaseStudies';

const Home = () => {
  return (
    <>
      <ServiceHero />
      <ComplianceTicker />
      <TechStack />
      <ProcessRoadmap />
      <ServiceArsenal />
      <CaseStudies />
      <FinalCTA />
    </>
  );
};

export default Home;