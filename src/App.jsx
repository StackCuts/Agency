import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import ProblemVsSolution from './components/ProblemVsSolution';
import PricingSection from './components/PricingSection';
import ConversionSystem from './components/ConversionSystem';
import WhiteLabelSection from './components/WhiteLabelSection';
import WorkflowSection from './components/WorkflowSection';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import BriefModal from './components/BriefModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState('Growth Pack ($495 Trial)');

  // Mouse spotlight position listener
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleOpenModal = (pkgName) => {
    setSelectedPkg(pkgName || 'Growth Pack ($495 Trial)');
    setModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#0B0F17] text-[#F8FAFC] font-sans selection:bg-[#00E599] selection:text-[#0B0F17]">
      {/* Ambient Mouse Radial Spotlight */}
      <div className="mouse-spotlight" />

      {/* Navigation Header */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Hero Section */}
      <Hero onOpenModal={handleOpenModal} />

      {/* Visual Portfolio Grid (Show, Don't Tell) */}
      <PortfolioGrid />

      {/* Problem vs Solution Comparison */}
      <ProblemVsSolution />

      {/* Core Offer & Pricing Packages */}
      <PricingSection onOpenModal={handleOpenModal} />

      {/* Closed-Loop Conversion Architecture */}
      <ConversionSystem />

      {/* White-Label Agency Partnership */}
      <WhiteLabelSection onOpenModal={handleOpenModal} />

      {/* 100% Asynchronous Workflow */}
      <WorkflowSection onOpenModal={handleOpenModal} />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* Final CTA */}
      <FinalCTA onOpenModal={handleOpenModal} />

      {/* Footer */}
      <Footer />

      {/* 2-Min Asynchronous Order Brief Modal */}
      <BriefModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedPackageName={selectedPkg}
      />
    </div>
  );
}
