import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemVsSolution from './components/ProblemVsSolution';
import PortfolioGrid from './components/PortfolioGrid';
import FeaturedCaseStudy from './components/FeaturedCaseStudy';
import CarouselShowcase from './components/CarouselShowcase';
import WorkflowSection from './components/WorkflowSection';
import WhiteLabelSection from './components/WhiteLabelSection';
import PricingSection from './components/PricingSection';
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

      {/* 1. Navigation Header */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* 2. Hero Section */}
      <Hero onOpenModal={handleOpenModal} />

      {/* 3. Problem vs Solution Comparison */}
      <ProblemVsSolution />

      {/* 4. Portfolio Grid (Static Ad Creatives with 4 Category Filter Tabs) */}
      <PortfolioGrid onOpenModal={handleOpenModal} />

      {/* 5. Featured Live Case Study (Mathify.tech) */}
      <FeaturedCaseStudy />

      {/* 6. Carousel Showcase (3 Multi-Frame Meta Carousels) */}
      <CarouselShowcase onOpenModal={handleOpenModal} />

      {/* 7. 100% Asynchronous Workflow */}
      <WorkflowSection onOpenModal={handleOpenModal} />

      {/* 8. White-Label Agency Partnership */}
      <WhiteLabelSection onOpenModal={handleOpenModal} />

      {/* 9. Core Offer & Pricing Packages */}
      <PricingSection onOpenModal={handleOpenModal} />

      {/* 10. Frequently Asked Questions */}
      <FAQSection />

      {/* 11. Final CTA */}
      <FinalCTA onOpenModal={handleOpenModal} />

      {/* 12. Footer */}
      <Footer />

      {/* 13. 2-Min Asynchronous Order Brief Modal */}
      <BriefModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedPackageName={selectedPkg}
      />
    </div>
  );
}
