import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CapabilitiesRibbon from './components/CapabilitiesRibbon';
import ExecutiveAudioBriefing from './components/ExecutiveAudioBriefing';
import CreativeVault from './components/CreativeVault';
import TheMechanism from './components/TheMechanism';
import PricingFAQ from './components/PricingFAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F9FC] text-[#0F172A] flex flex-col font-sans selection:bg-[#EAA779]/30 selection:text-[#0F172A]">
      
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Main Content Flow */}
      <main className="flex-grow">
        
        {/* Section 01: Hero Section (Nafay 3D Clean Aesthetic) */}
        <Hero />

        {/* Dynamic Infinite Capabilities & Ecosystem Ribbon */}
        <CapabilitiesRibbon />

        {/* Section 02: The Briefing (Executive Audio Master) */}
        <ExecutiveAudioBriefing />

        {/* Section 03: The Vault (Full Live Creative Arsenal) */}
        <CreativeVault />

        {/* Section 04: The Mechanism (Conversion Architecture & System) */}
        <TheMechanism />

        {/* Section 05: Scope, Engagements & Objection-Killing FAQ */}
        <PricingFAQ />

      </main>

      {/* Editorial Luxury Footer */}
      <Footer />

    </div>
  );
}
