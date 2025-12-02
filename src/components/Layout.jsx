import React from 'react';
import { Outlet } from 'react-router-dom';
import ServiceNavbar from './ServiceNavbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="bg-darkBg text-lightGray font-sans min-h-screen selection:bg-accent selection:text-darkBg flex flex-col">
      <ServiceNavbar />
      
      {/* This is where the page content will change */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;