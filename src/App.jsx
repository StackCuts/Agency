import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemVsSolution from './components/ProblemVsSolution';
import PortfolioGrid from './components/PortfolioGrid';
import CarouselShowcase from './components/CarouselShowcase';
import FeaturedCaseStudy from './components/FeaturedCaseStudy';
import WorkflowSection from './components/WorkflowSection';
import WhiteLabelSection from './components/WhiteLabelSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import BriefModal from './components/BriefModal';
import ArborPulseScrollytelling from './components/cases/ArborPulseScrollytelling';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState('Growth Pack ($495 Trial)');
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();
      if (hash === '#arborpulse' || hash.includes('arborpulse') || path.includes('arborpulse')) {
        return 'arborpulse';
      }
    }
    return 'home';
  });

  // Listen to hash and popstate for smooth back/forward navigation
  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();
      if (hash === '#arborpulse' || hash.includes('arborpulse') || path.includes('arborpulse')) {
        setCurrentView('arborpulse');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const navigateTo = (view) => {
    if (view === 'arborpulse') {
      window.location.hash = '#arborpulse';
      setCurrentView('arborpulse');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      window.history.pushState(null, '', window.location.pathname);
      window.location.hash = '';
      setCurrentView('home');
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  // Mouse spotlight position listener
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.body.style.setProperty('--mouse-[#00E599]', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleOpenModal = (pkgName) => {
    window.open('https://www.upwork.com/freelancers/mayurstackcuts?mp_source=share', '_blank');
  };

  if (currentView === 'arborpulse') {
    return (
      <div className="relative min-h-screen bg-[#070A0F] text-[#F8FAFC] font-sans selection:bg-[#00E599] selection:text-[#0B0F17]">
        <div className="mouse-spotlight" />
        <ArborPulseScrollytelling
          onBack={() => navigateTo('home')}
          onOpenModal={handleOpenModal}
        />
        <BriefModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          selectedPackageName={selectedPkg}
        />
      </div>
    );
  }

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

      {/* 5. Carousel Showcase (3 Multi-Frame Meta Carousels - Positioned Directly After Static Portfolio) */}
      <CarouselShowcase onOpenModal={handleOpenModal} />

      {/* 6. Featured Live Case Study (ArborPulse, CellMatrix.tech & Mathify.tech) */}
      <FeaturedCaseStudy
        onOpenModal={handleOpenModal}
        onNavigateCaseStudy={navigateTo}
      />

      {/* 7. 100% Asynchronous Workflow */}
      <WorkflowSection onOpenModal={handleOpenModal} />

      {/* 8. White-Label Agency Partnership */}
      <WhiteLabelSection onOpenModal={handleOpenModal} />

      {/* 9. Core Offer & Pricing Packages */}
      <PricingSection onOpenModal={handleOpenModal} />

      {/* 10. Frequently Asked Questions */}
      <FAQSection onOpenModal={handleOpenModal} />

      {/* 11. Final CTA */}
      <FinalCTA onOpenModal={handleOpenModal} />

      {/* 12. Footer */}
      <Footer />

      {/* 13. Upwork Direct Action Modal */}
      <BriefModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedPackageName={selectedPkg}
      />
    </div>
  );
}
