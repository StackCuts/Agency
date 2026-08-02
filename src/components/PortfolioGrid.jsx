import React, { useState } from 'react';
import { Brain, Sparkles, ArrowUpRight, X, Zap, LayoutGrid, Target, ChevronDown } from 'lucide-react';

export default function PortfolioGrid({ onOpenModal }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedCreative, setSelectedCreative] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const staticCreatives = [
    // ⚡ SPLIT-GRID COMPARISONS (6 Items)
    {
      id: 1,
      category: 'split-grid',
      psychologyTag: 'Psychology: Visual Proof & Immediate Pain Interrupt',
      title: 'Before/After Hair Regeneration Split-Grid',
      image: '/images/showcase/Showcase_Creative_1_HairRegen_4.png',
      niche: 'MedSpa / Hair Restoration',
      metric: '+48% CTR Boost',
      specs: '1:1 Meta Feed Spec • High-Res Source File Included',
      framework: 'Visual Contrast Pain-Split',
      hookText: 'Skeptical About Hair Regeneration? See 90-Day Proof',
      description: 'Side-by-side high-contrast visual comparison triggering immediate pattern interrupt in Meta feeds while tackling consumer skepticism.'
    },
    {
      id: 2,
      category: 'split-grid',
      psychologyTag: 'Psychology: Visual Proof & Immediate Pain Interrupt',
      title: 'Oral Supplements vs. Regen-Cell IV Solution',
      image: '/images/showcase/Showcase_Creative_2_ProblemSolution_3.png',
      niche: 'Wellness / IV Therapy',
      metric: '-34% Cost Per Lead',
      specs: '1:1 Meta Feed Spec • High-Res Source File Included',
      framework: 'Mechanism Absorption Matrix',
      hookText: 'Why Oral Pills Fail: 100% Bioavailability Difference',
      description: 'Direct mechanism contrast highlighting absorption superiority over traditional oral pills with high visual hierarchy callouts.'
    },
    {
      id: 3,
      category: 'split-grid',
      psychologyTag: 'Psychology: Authority Anchor & Social Proof',
      title: '5-Star Verified Review Hair Restoration Split',
      image: '/images/showcase/Showcase_Creative_3_SocialProof_Hair_2.png',
      niche: 'Aesthetic Clinic / MedSpa',
      metric: '4.9/5 Star CTR Magnet',
      specs: '1:1 Meta Feed Spec • High-Res Source File Included',
      framework: 'Social Proof Trust Stack',
      hookText: 'Over 1,200+ Verified Patient Transformation Reviews',
      description: 'Combines real customer rating badges with high-contrast before/after visual proof to establish instant authority.'
    },
    {
      id: 4,
      category: 'split-grid',
      psychologyTag: 'Psychology: Authority Anchor & Social Proof',
      title: '3-USP Breakdown Cellular IV Drip Protocol',
      image: '/images/showcase/Showcase_Creative_4_IVDrip_USP_2.png',
      niche: 'Clinical Health / IV Drip',
      metric: '+52% Offer Engagement',
      specs: '1:1 Meta Feed Spec • High-Res Source File Included',
      framework: '3-Tier Value Stack',
      hookText: '3 Science-Backed Reasons Cellular Drips Scale Recovery',
      description: 'Breaks down 3 distinct clinical benefits into digestible, highly scannable visual callouts.'
    },
    {
      id: 5,
      category: 'split-grid',
      psychologyTag: 'Psychology: Overcoming Skepticism (Us vs. Them)',
      title: 'Us vs. Them Surgical Hair Transplants',
      image: '/images/showcase/Showcase_Creative_5_UsVsThem_Hair_2.png',
      niche: 'MedSpa / Non-Invasive Tech',
      metric: '3.9x Conversion Intent',
      specs: '1:1 Meta Feed Spec • High-Res Source File Included',
      framework: 'Direct Competitor Contrast',
      hookText: 'Surgical Transplants ($12k) vs. Non-Invasive Cellular ($495)',
      description: 'Exposes traditional high-cost surgical pain points vs. non-invasive cellular protocol in an un-ignorable comparison matrix.'
    },
    {
      id: 6,
      category: 'split-grid',
      psychologyTag: 'Psychology: Overcoming Skepticism (Us vs. Them)',
      title: 'Coffee & Caffeine Crash vs. Cellular IV Energy',
      image: '/images/showcase/Showcase_Creative_6_OldWayVsNewWay_IV_2.png',
      niche: 'Performance / IV Clinic',
      metric: '-41% CPL Reduction',
      specs: '1:1 Meta Feed Spec • High-Res Source File Included',
      framework: 'Paradigm Shift Grid',
      hookText: 'Stop Crashing On Energy Drinks: The Direct Cellular Way',
      description: 'Contrasts temporary caffeine energy crashes with 100% cellular absorption for high-intent lead conversion.'
    },

    // 💎 EDITORIAL & HIGH-TECH (3 Items)
    {
      id: 7,
      category: 'editorial',
      psychologyTag: 'Psychology: Clinical Authority & Bio-Rebuild',
      title: 'Collagen Rebuild Editorial Magazine Frame',
      image: '/images/showcase/Static_Post_1.png',
      niche: 'Aesthetic Skincare / Collagen',
      metric: '2.4x Engagement Rate',
      specs: '1:1 Meta Feed Spec • High-Res Source File Included',
      framework: 'Editorial Prestige Typography',
      hookText: 'Clinical Bio-Peptide Rejuvenation Protocol',
      description: 'High-fashion magazine aesthetic layout paired with clinical proof callouts to build premium brand authority.'
    },
    {
      id: 8,
      category: 'editorial',
      psychologyTag: 'Psychology: High-Tech Diagnostic Precision',
      title: 'Laser Diagnostic Precision Frame',
      image: '/images/showcase/Static_Post_2.png',
      niche: 'Dermatology / Laser Clinic',
      metric: '+62% Qualified Leads',
      specs: '1:1 Meta Feed Spec • High-Res Source File Included',
      framework: 'Dermatological Science Overlay',
      hookText: 'Sub-Dermal Laser Scan & Collagen Synthesis',
      description: 'Scientific medical-grade graphic overlays showcasing precision diagnostic technology to justify high-ticket pricing.'
    },
    {
      id: 9,
      category: 'editorial',
      psychologyTag: 'Psychology: Asymmetric Window & Offer Contrast',
      title: 'HydraFacial $189 Asymmetric Window',
      image: '/images/showcase/Asset_Variant_B_HydraFacial.png',
      niche: 'MedSpa / Facial Therapy',
      metric: '3.2x Campaign ROI',
      specs: '1:1 Meta Feed Spec • High-Res Source File Included',
      framework: 'Multi-Layer Floating Badge',
      hookText: 'Deep Pore Glow Treatment Special $189',
      description: 'Layered card architecture creating depth and visual contrast to highlight treatment results & limited offer.'
    },

    // 🎯 FLOATING OFFER CARDS (1 Item ONLY)
    {
      id: 10,
      category: 'floating-offer',
      psychologyTag: 'Psychology: Floating Price Anchor & Urgency',
      title: 'IV Drip Floating $99 Intro Card',
      image: '/images/showcase/Asset_Variant_A_IVDrip.png',
      niche: 'IV Drip Bar / Wellness',
      metric: '-50% Acquisition Cost',
      specs: '1:1 Meta Feed Spec • High-Res Source File Included',
      framework: 'Asymmetric Glass Floating Pill',
      hookText: 'First Hydration Session Only $99 (Limited Slots)',
      description: 'High-contrast glassmorphic floating price badge designed to draw eyes straight to the introductory offer.'
    }
  ];

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setShowAll(false);
  };

  const filteredCreatives = selectedFilter === 'all'
    ? staticCreatives
    : staticCreatives.filter(c => c.category === selectedFilter);

  const visibleCreatives = showAll ? filteredCreatives : filteredCreatives.slice(0, 3);

  return (
    <section id="portfolio" className="py-20 sm:py-24 bg-[#0B0F17] relative border-t border-[#2A3447]/50">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 right-1/4 w-[700px] h-[350px] bg-amber-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#00E599]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400">
            <Brain className="w-3.5 h-3.5" />
            <span>🧠 DIRECT-RESPONSE DESIGN DIVERSITY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Direct-Response Creatives <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              Engineered With Sales Psychology
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            We don't just design visuals—we apply consumer psychology, high-contrast pattern interrupts, and objection-handling frameworks to scale Meta ad campaigns.
          </p>
        </div>

        {/* 4 Category Filter Tabs (Single-Line Horizontal Scroll on Mobile) */}
        <div className="mt-8 sm:mt-10 flex justify-center w-full">
          <div className="flex flex-nowrap md:flex-wrap overflow-x-auto no-scrollbar py-2 px-2 gap-2 rounded-2xl bg-[#161C27] border border-[#2A3447] backdrop-blur-md max-w-full">
            <button
              onClick={() => handleFilterChange('all')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 whitespace-nowrap flex items-center gap-1.5 ${
                selectedFilter === 'all'
                  ? 'bg-amber-500 text-black shadow-lg font-extrabold'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>ALL CREATIVES (10)</span>
            </button>

            <button
              onClick={() => handleFilterChange('split-grid')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 whitespace-nowrap flex items-center gap-1.5 ${
                selectedFilter === 'split-grid'
                  ? 'bg-amber-500 text-black shadow-lg font-extrabold'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>⚡ SPLIT-GRID COMPARISONS (6)</span>
            </button>

            <button
              onClick={() => handleFilterChange('editorial')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 whitespace-nowrap flex items-center gap-1.5 ${
                selectedFilter === 'editorial'
                  ? 'bg-amber-500 text-black shadow-lg font-extrabold'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>💎 EDITORIAL & HIGH-TECH (3)</span>
            </button>

            <button
              onClick={() => handleFilterChange('floating-offer')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 whitespace-nowrap flex items-center gap-1.5 ${
                selectedFilter === 'floating-offer'
                  ? 'bg-amber-500 text-black shadow-lg font-extrabold'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              <Target className="w-3.5 h-3.5" />
              <span>🎯 FLOATING OFFER CARDS (1)</span>
            </button>
          </div>
        </div>

        {/* Responsive Grid Layout (Strict 3-Card Initial Limit Across Desktop & Mobile) */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch transition-all duration-500">
          {visibleCreatives.map((creative) => (
            <div
              key={creative.id}
              onClick={() => setSelectedCreative(creative)}
              className="bg-[#121824] border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 shadow-xl cursor-pointer h-full flex flex-col justify-between"
            >
              <div className="flex flex-col flex-grow justify-between">
                <div>
                  {/* Header Tag Bar */}
                  <div className="p-4 pb-3 border-b border-slate-800 flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] font-mono text-amber-400 font-bold bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20 truncate max-w-[70%]">
                      {creative.psychologyTag}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#00E599] shrink-0 ml-2">
                      {creative.metric}
                    </span>
                  </div>

                  {/* Clean Image Container */}
                  <div className="relative h-64 sm:h-80 overflow-hidden bg-[#0B0F17]">
                    <img
                      src={creative.image}
                      alt={creative.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Content Info */}
                  <div className="p-4 sm:p-5 space-y-2">
                    <h3 className="text-sm sm:text-base font-display font-bold text-white hover:text-amber-400 transition-colors flex items-center justify-between">
                      <span>{creative.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                    </h3>
                    <p className="text-xs text-[#94A3B8] line-clamp-2">
                      {creative.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer Micro Badges (Pinned to Bottom) */}
              <div className="p-4 pt-3 border-t border-slate-800/80 bg-[#0B0F17]/60 flex items-center justify-between text-[11px] font-mono text-[#94A3B8] mt-auto">
                <span>1:1 Meta Feed Spec</span>
                <span className="text-slate-300 font-semibold">{creative.framework}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Expand / Collapse Button (Shown when filtered items > 3) */}
        {filteredCreatives.length > 3 && (
          <div className="mt-8 sm:mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="py-3.5 px-8 rounded-full bg-[#161C27] border border-amber-500/50 text-amber-400 font-extrabold text-xs sm:text-sm inline-flex items-center gap-2 shadow-mint-glow hover:bg-amber-500 hover:text-black transition-all active:scale-[0.98] group"
            >
              <span>
                {showAll ? 'Show Less ↑' : `⚡ Show All ${filteredCreatives.length} Creatives`}
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : 'animate-bounce'}`} />
            </button>
          </div>
        )}

        {/* CTA Box At Bottom of Grid */}
        <div className="mt-14 sm:mt-16 rounded-3xl bg-gradient-to-r from-[#161C27] via-[#161C27] to-[#0B0F17] border border-amber-500/40 p-6 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
              ⚡ READY TO FIX AD FATIGUE?
            </span>
            <h3 className="text-lg sm:text-2xl font-display font-extrabold text-white">
              Need these high-converting split-grids customized for your ad account?
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] max-w-2xl">
              Get 2x high-contrast static split-grids + 1x multi-frame carousel engineered for your offer in 48 hours.
            </p>
          </div>

          <button
            onClick={() => {
              if (onOpenModal) {
                onOpenModal('Discuss Project on Upwork');
              } else {
                const el = document.getElementById('packages');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-shimmer bg-amber-500 hover:bg-amber-400 text-black font-extrabold py-4 px-8 rounded-full text-xs sm:text-sm tracking-wide uppercase shadow-lg transition-all shrink-0 flex items-center gap-2 group w-full md:w-auto justify-center"
          >
            <span>DISCUSS PROJECT ON UPWORK</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

      {/* Lightbox Modal View - 2-Column Horizontal Split Layout for Desktop */}
      {selectedCreative && (
        <div 
          onClick={(e) => { if (e.target === e.currentTarget) setSelectedCreative(null); }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md"
        >
          {/* Close Button (✕) Positioned Outside Container */}
          <button
            onClick={() => setSelectedCreative(null)}
            className="fixed top-4 right-4 z-50 p-2.5 rounded-full bg-[#161C27] border border-[#2A3447] text-white hover:text-amber-400 hover:border-amber-400 transition-colors shadow-2xl"
            aria-label="Close preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Container: Max-w-5xl, 2-Column Grid on Laptop */}
          <div className="bg-[#161C27] border border-amber-500/50 rounded-3xl max-w-5xl w-full p-4 sm:p-6 lg:p-8 relative shadow-2xl max-h-[92vh] overflow-y-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* LEFT COLUMN: Large High-Res Ad Post Creative (~7 cols on desktop) */}
              <div className="lg:col-span-7 bg-[#0B0F17] rounded-2xl border border-[#2A3447] p-3 flex items-center justify-center min-h-[350px] lg:min-h-[500px] shadow-inner">
                <img
                  src={selectedCreative.image}
                  alt={selectedCreative.title}
                  className="max-h-[80vh] w-auto object-contain mx-auto rounded-xl shadow-2xl"
                />
              </div>

              {/* RIGHT COLUMN: Information, Psychology & Conversion CTA (~5 cols on desktop) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
                
                <div className="space-y-4">
                  {/* Category Tag & Performance Metric */}
                  <div className="flex items-center justify-between gap-2 border-b border-[#2A3447] pb-3">
                    <span className="text-xs font-mono px-3 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 font-bold">
                      {selectedCreative.psychologyTag}
                    </span>
                    <span className="text-xs font-mono text-[#00E599] font-extrabold bg-[#00E599]/10 px-2.5 py-1 rounded border border-[#00E599]/30">
                      {selectedCreative.metric}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white leading-tight">
                    {selectedCreative.title}
                  </h3>

                  {/* Direct-Response Strategy Box */}
                  <div className="bg-[#0B0F17] p-4 rounded-xl border border-[#2A3447] space-y-2">
                    <div className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                      Direct-Response Creative Strategy
                    </div>
                    <p className="text-white text-xs font-medium leading-relaxed">
                      {selectedCreative.description}
                    </p>
                  </div>

                  {/* Hook & Format Specs */}
                  <div className="space-y-2 text-xs font-mono">
                    <div className="bg-[#0B0F17] p-3 rounded-lg border border-[#2A3447]">
                      <span className="text-[#94A3B8]">Primary Hook Angle:</span>
                      <div className="text-white font-bold mt-1">{selectedCreative.hookText}</div>
                    </div>
                    <div className="bg-[#0B0F17] p-3 rounded-lg border border-[#2A3447]">
                      <span className="text-[#94A3B8]">Format Specs & Delivery:</span>
                      <div className="text-slate-200 font-bold mt-1">{selectedCreative.specs} • {selectedCreative.framework}</div>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Action Buttons */}
                <div className="pt-4 border-t border-[#2A3447] space-y-2.5">
                  <button
                    onClick={() => {
                      setSelectedCreative(null);
                      if (onOpenModal) onOpenModal('Discuss Project on Upwork');
                    }}
                    className="btn-shimmer w-full py-3.5 px-6 rounded-full bg-amber-500 text-black font-extrabold text-xs uppercase tracking-wide hover:bg-amber-400 transition-all text-center shadow-lg"
                  >
                    Discuss Project on Upwork →
                  </button>
                  <button
                    onClick={() => setSelectedCreative(null)}
                    className="w-full py-3 rounded-full bg-[#0B0F17] border border-[#2A3447] text-white font-bold text-xs hover:border-amber-500/50 transition-colors"
                  >
                    Close Preview
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
