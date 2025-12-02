import React from 'react';
import ServiceHero from '../components/ServiceHero';
import ComplianceTicker from '../components/ComplianceTicker';
import ProcessRoadmap from '../components/ProcessRoadmap';
import ServiceArsenal from '../components/ServiceArsenal';
import FinalCTA from '../components/FinalCTA';

const Home = () => {
  return (
    <>
      <ServiceHero />
      <ComplianceTicker />
      <ProcessRoadmap />
      <ServiceArsenal />
      <FinalCTA />
    </>
  );
};

export default Home;