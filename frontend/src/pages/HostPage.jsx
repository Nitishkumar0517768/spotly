import React from 'react';
import Navbar from '../components/layout/Navbar';
import HostHeroSection from '../components/host/HostHeroSection';
import HostBenefitsSection from '../components/host/HostBenefitsSection';
import TestimonialsSection from '../components/host/TestimonialsSection';

const HostPage = () => {
  return (
    <div className="min-h-screen font-sans bg-white">
      <Navbar />
      <main>
        <HostHeroSection />
        <HostBenefitsSection />
        <TestimonialsSection />
      </main>
    </div>
  );
};

export default HostPage;
