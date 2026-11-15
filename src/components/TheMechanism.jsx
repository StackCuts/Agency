import React, { useState, useRef } from 'react';
import { 
  Search, 
  Target, 
  Layers, 
  ShoppingBag, 
  ArrowRight, 
  ArrowUpRight, 
  Repeat, 
  Zap, 
  CheckCircle2, 
  XCircle, 
  ShieldCheck,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function TheMechanism() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const mobileScrollRef = useRef(null);

  const steps = [
    {
      step: '01',
      shortLabel: '01 Mine',
      phase: 'PHASE 01 • UNFILTERED DATA',
      phaseColor: 'text-[#BE185D] bg-[#BE185D]/10 border-[#BE185D]/20',
      title: 'Forensic Mining & Customer Voice',
      headline: 'Extracting the Unspoken Consumer Pain',
      description: 'Scraping 14,000+ competitor reviews (Amazon, Trustpilot, Reddit) to unearth the hidden biological & emotional friction points cold prospects feel but never verbalize.',
      tactics: [
        'Latency Trap Identification',
        'Customer Voice Mining',
        'Competitor Objection Flips'
      ],
      proof: 'Discovered the 45-minute capsule dissolution delay & 2 PM post-meal unbuttoning jeans social anxiety.'
    },
    {
      step: '02',
      shortLabel: '02 Angles',
      phase: 'PHASE 02 • BIOPSYCHOLOGY',
      phaseColor: 'text-[#3B82F6] bg-[#3B82F6]/10 border-[#3B82F6]/20',
      title: '1-Body : 4-Hook Angle Matrix',
      headline: 'Eliminating Fatigue with Psychological Testing',
      description: 'Engineering 3 distinct psychological angles (Mechanism Speed for analytical skeptics, Social Dining for relatable scrollers, Probiotic Paradox for chronic sufferers). Isolating 4 distinct hooks per winning body to defeat fatigue.',
      tactics: [
        'Ca$hvertising LF8 Triggers',
        '1-Body : 4-Hook Matrix',
        'ABO Sandbox Testing'
      ],
      proof: 'Apple Notes confession vs. WhatsApp chat UI vs. Light & Dark anatomical vagus nerve body maps.'
    },
    {
      step: '03',
      shortLabel: '03 Produce',
      phase: 'PHASE 03 • VISUAL VELOCITY',
      phaseColor: 'text-[#EAA779] bg-[#EAA779]/15 border-[#EAA779]/30',
      title: 'Multi-Format Rapid Production',
      headline: 'Institutional Speed with 5-Point QA',
      description: 'High-velocity asset execution across 1:1 & 4:5 native statics, multi-card carousels, kinetic micro-motion loops, and 9:16 AI UGC broadcast masters. Strict adherence to the 1.2s cut rule, -12dB audio ducking, and safe zone boundaries.',
      tactics: [
        '1.2s Visual Cut Rule',
        'Tactile SFX & -12dB Ducking',
        '5-Point Pre-Launch QA Gate'
      ],
      proof: '35s AI UGC master with Maya (28) across 6 spoken beats + 2 looping micro-motion MP4s.'
    },
    {
      step: '04',
      shortLabel: '04 Match',
      phase: 'PHASE 04 • ZERO-BOUNCE CRO',
      phaseColor: 'text-[#10B981] bg-[#10B981]/10 border-[#10B981]/20',
      title: '1-to-1 Ad-to-PDP Message Match',
      headline: 'Converting Cold Clicks into $99 AOV Orders',
      description: 'Eliminating the post-click bounce cliff. Ad headline mirrors above-the-fold H1, followed by a custom 3-tier bundle selector ($44 / $78 / $99) that drives +$32 AOV lift, backed by smart sticky ATC and sub-1.8s mobile LCP.',
      tactics: [
        '100% Pre-to-Post Click Match',
        'Dynamic 3-Tier Bundle Buybox',
        'Smart Sticky ATC & Sub-1.8s LCP'
      ],
      proof: 'AuraFlora live storefront with TAS2R reflex science timeline + pre-selected 2-bottle routine.'
    }
  ];

  // Scroll to a specific card when pill is clicked
  const handlePillClick = (index) => {
    setActiveStepIndex(index);
    if (mobileScrollRef.current) {
      const container = mobileScrollRef.current;
      const card = container.children[index];
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  };

  // Sync pill state on horizontal thumb scroll
  const handleScrollMobile = () => {
    if (!mobileScrollRef.current) return;
    const container = mobileScrollRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.offsetWidth * 0.86;
    const index = Math.round(scrollLeft / cardWidth);
    if (index >= 0 && index < steps.length && index !== activeStepIndex) {
      setActiveStepIndex(index);
    }
  };

  const handlePrev = () => {
    if (activeStepIndex > 0) {
      handlePillClick(activeStepIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeStepIndex < steps.length - 1) {
      handlePillClick(activeStepIndex + 1);
    }
  };

  return (
    <section id="mechanism" className="py-20 sm:py-28 bg-[#F8F9FC] border-t border-slate-200/80 relative overflow-hidden">
      
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#EAA779]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#BE185D]/10 rounded-full blur-3xl pointer-events-none translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER                                                         */}
        {/* ========================================================================= */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[#0F172A] text-xs font-mono font-bold tracking-wider uppercase shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#EAA779] animate-pulse" />
            <span>04 // The Conversion Architecture</span>
          </div>

          {/* Headline */}
          <h2 className="font-['Fraunces'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            The 4-Step Creative Engine That Eliminates Cold Traffic Guesswork
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg font-sans text-slate-600 leading-relaxed">
            Most DTC brands bleed ROAS because their media buyer, designer, video editor, and web developer work in isolated silos. Here is the unified conversion architecture that fixes the leak.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. THE SILO PROBLEM VS. THE UNIFIED ENGINE (Micro-Comparison)             */}
        {/* ========================================================================= */}
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-[0_10px_35px_rgba(15,23,42,0.04)] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
            
            {/* Left: The Old Broken Silo Model */}
            <div className="p-6 sm:p-8 bg-slate-50/60 space-y-3.5">
              <div className="flex items-center gap-2">
                <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-rose-700">
                  The Broken 4-Silo Model
                </span>
              </div>
              <h3 className="font-['Fraunces'] text-lg sm:text-xl font-bold text-[#0F172A]">
                4 Disconnected Freelancers, Zero Message Match
              </h3>
              <p className="text-xs sm:text-[13px] font-sans text-slate-600 leading-relaxed">
                Strategist writes vague briefs ➔ Designer creates pretty graphics with no hook ➔ Video editor cuts slow cinematic clips ➔ Developer builds a generic Shopify page that ignores the ad hook.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-rose-700">
                <span className="px-2.5 py-1 rounded-md bg-rose-50 border border-rose-200/70">
                  ⚠️ 3-Week Turnarounds
                </span>
                <span className="px-2.5 py-1 rounded-md bg-rose-50 border border-rose-200/70">
                  ⚠️ 82% Ad Fatigue Traps
                </span>
                <span className="px-2.5 py-1 rounded-md bg-rose-50 border border-rose-200/70">
                  ⚠️ Cold Traffic Bounce Cliff
                </span>
              </div>
            </div>

            {/* Right: The StackCuts Unified System */}
            <div className="p-6 sm:p-8 bg-white space-y-3.5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#EAA779]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-700">
                  The StackCuts Unified Engine
                </span>
              </div>
              <h3 className="font-['Fraunces'] text-lg sm:text-xl font-bold text-[#0F172A]">
                1 Full-Stack Creative Partner, 100% Pre-to-Post Click Alignment
              </h3>
              <p className="text-xs sm:text-[13px] font-sans text-slate-600 leading-relaxed">
                Customer mining feeds hook angles ➔ Hooks dictate multi-format production (statics, AI UGC, motion) ➔ Winning ad hooks directly mirror the Shopify H1 and 3-tier bundle buybox.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-emerald-700">
                <span className="px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200/70">
                  ⚡ Agile Weekly Sprints
                </span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200/70">
                  ⚡ 1-Body : 4-Hook Matrix
                </span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200/70">
                  ⚡ Compounding AOV & ROAS
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. MOBILE STEP PILLS SWITCHER (Visible ONLY on Mobile < md)               */}
        {/* ========================================================================= */}
        <div className="block md:hidden">
          <div className="grid grid-cols-4 gap-1.5 p-1 rounded-2xl bg-slate-200/60 border border-slate-200">
            {steps.map((item, index) => {
              const isActive = activeStepIndex === index;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => handlePillClick(index)}
                  className={`py-2 px-1 text-[11px] font-mono font-bold rounded-xl text-center transition-all cursor-pointer truncate ${
                    isActive
                      ? 'bg-[#0F172A] text-white shadow-xs scale-101'
                      : 'bg-transparent text-slate-600 hover:text-slate-900'
                  }`}
                  aria-label={`Jump to ${item.title}`}
                >
                  {item.shortLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. THE 4-STEP MECHANISM CARDS (Horizontal Snap on Mobile, 2x2 on Desktop)  */}
        {/* ========================================================================= */}
        <div 
          ref={mobileScrollRef}
          onScroll={handleScrollMobile}
          className="flex md:grid items-stretch overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 px-1 pb-2 md:p-0 md:overflow-visible md:grid-cols-2 md:gap-7"
        >
          {steps.map((item) => (
            <div
              key={item.step}
              className="w-[88vw] max-w-[345px] flex-shrink-0 snap-center md:w-auto md:max-w-none md:flex-shrink group relative rounded-3xl bg-white border border-slate-200/90 shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_45px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 group-hover:from-[#EAA779] group-hover:via-[#BE185D] group-hover:to-[#3B82F6] transition-all duration-500" />

              <div className="space-y-4">
                
                {/* Step Number + Phase Badge Strip */}
                <div className="flex items-center justify-between gap-3 pt-1">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10.5px] font-mono font-bold border ${item.phaseColor}`}>
                    {item.phase}
                  </span>
                  <span className="font-['Fraunces'] text-3xl font-extrabold text-slate-300 group-hover:text-[#0F172A] transition-colors">
                    {item.step}
                  </span>
                </div>

                {/* Title & Headline */}
                <div className="space-y-1">
                  <h3 className="font-['Fraunces'] text-xl sm:text-2xl font-bold text-[#0F172A] leading-snug">
                    {item.title}
                  </h3>
                  <div className="text-xs sm:text-[13px] font-sans font-semibold text-[#BE185D]">
                    {item.headline}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-[13.5px] font-sans text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Tactics Pills */}
                <div className="pt-1 flex flex-wrap gap-1.5">
                  {item.tactics.map((tactic, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-mono font-medium"
                    >
                      • {tactic}
                    </span>
                  ))}
                </div>

              </div>

              {/* Tangible Real-World Proof Box */}
              <div className="mt-5 pt-3.5 border-t border-slate-100 rounded-xl bg-slate-50/80 p-3 space-y-1">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#EAA779] flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#EAA779]" />
                  <span>Real AuraFlora™ DTC Execution</span>
                </div>
                <p className="text-[11.5px] font-sans text-slate-600 italic leading-snug">
                  "{item.proof}"
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* 5. MOBILE BOTTOM CONTROLS (Prev / Next & Swipe Hint)                      */}
        {/* ========================================================================= */}
        <div className="flex md:hidden items-center justify-between pt-1 px-2 select-none">
          <button
            type="button"
            onClick={handlePrev}
            disabled={activeStepIndex === 0}
            className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-bold flex items-center gap-1 transition-all cursor-pointer ${
              activeStepIndex === 0
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed opacity-50'
                : 'bg-[#0F172A] text-white hover:bg-[#1E293B] shadow-xs active:scale-95'
            }`}
            aria-label="Previous step"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Prev</span>
          </button>

          <div className="flex flex-col items-center">
            <div className="text-xs font-mono font-bold text-[#0F172A]">
              Step {activeStepIndex + 1} of {steps.length}
            </div>
            <div className="text-[10px] font-sans text-slate-400">
              Swipe or tap pills above
            </div>
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={activeStepIndex === steps.length - 1}
            className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-bold flex items-center gap-1 transition-all cursor-pointer ${
              activeStepIndex === steps.length - 1
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed opacity-50'
                : 'bg-[#0F172A] text-white hover:bg-[#1E293B] shadow-xs active:scale-95'
            }`}
            aria-label="Next step"
          >
            <span>Next</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* ========================================================================= */}
        {/* 6. THE CLOSED-LOOP COMPOUNDING SCALING ENGINE (Bottom Banner)              */}
        {/* ========================================================================= */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white p-6 sm:p-9 shadow-xl relative overflow-hidden">
          
          {/* Subtle Decorative Glow Orbs */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#EAA779]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#BE185D]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="space-y-2 text-center md:text-left max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#EAA779] uppercase tracking-wider">
                <Repeat className="w-3.5 h-3.5" />
                <span>The Closed-Loop Feedback Engine</span>
              </div>
              <h3 className="font-['Fraunces'] text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug">
                Scale Doesn't Stop at Launch. It Compounds Weekly.
              </h3>
              <p className="text-xs sm:text-sm font-sans text-slate-300 leading-relaxed">
                Shopify conversion analytics and Meta hook hold-rates constantly feed back into Phase 01. We preventative-swap dying hooks on winning bodies before creative fatigue impacts your blended CAC.
              </p>
            </div>

            <div className="flex-shrink-0">
              <a
                href="https://buttery-decade-cf5.notion.site/AuraFlora-Full-Funnel-DTC-Creative-Conversion-Engine-3f4cc3bf9d1180dc8e12e96f06127ec4?source=copy_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#0F172A] font-sans font-bold text-xs sm:text-sm tracking-tight flex items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-103 cursor-pointer"
              >
                <span>Read Full Working Dossier</span>
                <ArrowUpRight className="w-4 h-4 text-[#BE185D]" />
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
