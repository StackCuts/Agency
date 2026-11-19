import React, { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle2, 
  ChevronDown, 
  Zap, 
  Sparkles, 
  ArrowUpRight, 
  ShieldCheck, 
  Clock, 
  MessageSquare, 
  Layers,
  Flame,
  Check
} from 'lucide-react';
import GetInTouchModal from './GetInTouchModal';

export default function PricingFAQ() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0); // First FAQ open by default
  const [activeModelIndex, setActiveModelIndex] = useState(1); // 02 Flagship active by default
  const [isUpworkSource, setIsUpworkSource] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const stageRef = useRef(null);

  const handleTabSelect = (idx) => {
    setActiveModelIndex(idx);
    if (typeof window !== 'undefined' && stageRef.current && window.innerWidth < 640) {
      const rect = stageRef.current.getBoundingClientRect();
      if (rect.top < 110) {
        const targetY = window.scrollY + rect.top - 120;
        window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const refParam = params.get('ref')?.toLowerCase();
      const sourceParam = params.get('source')?.toLowerCase();
      const utmParam = params.get('utm_source')?.toLowerCase();
      const referrer = typeof document !== 'undefined' ? (document.referrer?.toLowerCase() || '') : '';
      const isFromUpwork = referrer.includes('upwork.com');

      if (
        refParam === 'upwork' ||
        sourceParam === 'upwork' ||
        utmParam === 'upwork' ||
        isFromUpwork
      ) {
        setIsUpworkSource(true);
      } else {
        setIsUpworkSource(false);
      }
    } catch {
      // Graceful fallback
    }
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  const engagementModels = [
    {
      id: '01',
      title: 'The Modular Sprint',
      badge: 'Targeted Creative or Shopify PDP',
      badgeColor: 'text-[#3B82F6] bg-[#3B82F6]/10 border-[#3B82F6]/20',
      scopeTag: 'Custom Asset / CRO Scoping',
      focus: 'Direct, single-objective execution. Choose the exact deliverable you need — whether that is a batch of native statics, multi-card carousels, kinetic micro-motion loops, AI UGC ads, fresh hook variations, or a dedicated Shopify PDP build or redesign — scoped directly to your immediate campaign goal.',
      deliverables: [
        'Targeted Creative Formats of Choice (Statics, Carousels, Motion, or AI UGC)',
        'OR Dedicated High-Converting Shopify PDP Build / Redesign',
        'Custom Asset Scopes & Bespoke Deliverables Welcome',
        '1-Body : 3-Hook Angle Testing Variations',
        'Async Notion Workspace & Dedicated Revisions',
        'Turnaround: Agile Milestone Delivery (Agreed upon kickoff)'
      ],
      highlight: false
    },
    {
      id: '02',
      title: 'The Full-Funnel Flagship',
      badge: 'Complete Creative + CRO Engine',
      badgeColor: 'text-[#BE185D] bg-[#BE185D]/10 border-[#BE185D]/20',
      scopeTag: 'Milestone-Based Project',
      focus: 'Complete pre-to-post click alignment. Built for brands launching a new hero SKU or executing an existing funnel roadmap with institutional creative & CRO rigor.',
      deliverables: [
        'Deep Competitor & Customer Voice Mining (Reddit, Amazon, Trustpilot)',
        'Multi-Angle Psychological Matrix (3 Core Angles with Tailored Hooks)',
        'Multi-Format Production (Statics, Carousels, Motion, 9:16 AI UGC)',
        'Custom-Coded Shopify PDP Build or Redesign (Zero Bloat, High-Speed Mobile CRO)',
        '100% Pre-to-Post Click Message & Objection Match',
        'Async Notion Workspace & Agile Milestone Revisions'
      ],
      highlight: true
    },
    {
      id: '03',
      title: 'Dedicated Creative Partner',
      badge: 'Flexible Retainers & White-Label',
      badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      scopeTag: 'For DTC Brands & Growth Agencies',
      focus: 'Ongoing creative velocity tailored for direct DTC brands wanting a dedicated creative partner, or growth agencies needing reliable white-label production. High-speed weekly execution with zero rigid lock-ins.',
      deliverables: [
        'Dedicated Creative Retainer for DTC Brands & Agency Partners',
        'Predictable Weekly Creative Sprints & Fresh Angle Drops',
        'Preventative Hook Swapping (Defeating Creative Fatigue Before It Hits)',
        'Ongoing Shopify CRO & Message-Match Iterations',
        'White-Label Ready with Dedicated Notion Workspace',
        '100% Flexible Terms: Zero Long-Term Contracts (Pause or Scale Anytime)'
      ],
      highlight: false
    }
  ];

  const faqs = [
    {
      category: 'Async Cadence',
      q: 'How do we collaborate and communicate? Do we need to do endless Zoom calls?',
      a: isUpworkSource
        ? 'No. We operate on a strict 100% Async-First model. All collaboration happens via your Upwork Workroom, clear written sprint updates, and your dedicated Notion review workspace. You never have to sit through 45-minute sync meetings or status calls. You stay focused on running your brand; we ship the high-converting assets.'
        : 'No. We operate on a strict 100% Async-First model. All collaboration happens via Direct Email, dedicated project messaging, clear written sprint updates, and your dedicated Notion review workspace. You never have to sit through 45-minute sync meetings or status calls. You stay focused on running your brand; we ship the high-converting assets.'
    },
    {
      category: 'Scoping & Pricing',
      q: 'How does pricing work if my brand only needs a specific asset or test?',
      a: 'Every brand’s catalog and velocity are different. Whether you need a 5-ad test batch to revive fatigue, a dedicated Shopify PDP redesign, or an end-to-end full funnel, we scope milestones transparently before starting. There are zero surprise fees or rigid agency lock-ins — you approve the exact scope before a single dollar is committed.'
    },
    {
      category: 'Agency White-Label',
      q: 'Do you offer White-Label creative services for marketing agencies?',
      a: 'Yes, absolutely. Many performance marketing, media-buying, and growth agencies partner with us on a white-label basis. We provide a dedicated, branded Notion Client Portal and structured written sprint updates to handle your clients’ creative strategy, multi-format ad production, and Shopify PDP CRO behind the scenes with zero operational friction.'
    },
    {
      category: isUpworkSource ? 'Upwork Escrow & Milestones' : 'Contracts & Payment Options',
      q: isUpworkSource
        ? 'How do milestone contracts and escrow work on Upwork?'
        : 'What payment methods do you accept, and how are project funds protected?',
      a: isUpworkSource
        ? '100% Upwork Escrow & Contract Compliant. All engagements are structured cleanly through Upwork Fixed-Price Milestone contracts. Your funds remain 100% protected in Upwork Escrow before kickoff and are only released after you review and approve deliverables. Zero administrative delays, institutional transparency, and complete escrow safety.'
        : 'We offer two flexible payment pathways: 1) Upwork Escrow (Recommended for 100% Escrow Protection): Your funds are deposited securely before kickoff and only released after you review and approve deliverables. 2) Direct International Invoicing (Payoneer): For brands preferring direct vendor billing, we issue international milestone invoices payable via Credit Card, Debit Card, or local Bank Transfer (ACH / SEPA / Wire) with standard 50/50 sprint terms (50% kickoff deposit to reserve bandwidth, 50% upon final deliverable handover).'
    },
    {
      category: 'IP & Source Ownership',
      q: 'Who owns the final creative assets, raw project files, and code?',
      a: 'You own 100% of everything produced from day one. Upon milestone approval, you receive full commercial rights, editable master creative assets, high-res exported video and static masters, and clean, unminified custom Shopify Liquid code. There are zero licensing traps or proprietary lock-ins.'
    },
    {
      category: 'Shopify Liquid CRO',
      q: 'How do you build Shopify PDPs without slowing down our store?',
      a: 'We write 100% native Liquid, HTML, Tailwind/CSS, and vanilla JavaScript directly into your Shopify theme architecture. We do NOT rely on heavy third-party page builders (PageFly, Shogun, GemPages) that bloat script execution and crush mobile load speeds. Your store stays lightning-fast and 100% theme-compatible.'
    },
    {
      category: 'Onboarding & Inputs',
      q: 'What assets or inputs do you need from my brand to get started?',
      a: 'Very minimal. All we need is access to your raw product photos/videos, brand guidelines (fonts/colors), and your current Shopify store URL. You don’t need to write lengthy briefs or brainstorm hooks — we handle 100% of the customer voice mining, psychological angle development, copywriting, and asset production.'
    },
    {
      category: 'Velocity & Delivery',
      q: 'What are your typical turnaround times for sprint deliverables?',
      a: 'We work with agile startup speed. For creative testing sprints, your first batch of hooks and statics is typically ready for review within 48 to 72 hours of onboarding. Full-funnel flagship implementations are delivered across structured 5 to 7 day agile milestones.'
    },
    {
      category: 'Feedback & Revisions',
      q: 'How do revisions and feedback cycles work?',
      a: 'Every sprint includes dedicated revision cycles. You can leave precise notes directly inside your Notion review board or drop quick bullet points in chat. Revisions are executed rapidly — typically within 24 to 48 hours.'
    }
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#F8F9FC] border-t border-slate-200/80 relative">
      
      {/* Background Decorative Blur Accents (Clipped locally so section doesn't trap sticky elements) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#EAA779]/10 via-[#3B82F6]/5 to-[#BE185D]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10 space-y-16 sm:space-y-24">
        
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER                                                         */}
        {/* ========================================================================= */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[#0F172A] text-xs font-mono font-bold tracking-wider uppercase shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>05 // Scope, White-Label & FAQ</span>
          </div>

          {/* Headline */}
          <h2 className="font-['Fraunces'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Flexible Sprints Built for DTC Velocity. Scoped to Your Growth Stage.
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg font-sans text-slate-600 leading-relaxed">
            Whether you need a targeted single-format test, a specific hook variation, or an end-to-end creative + Shopify CRO engine — every sprint is modular, milestone-scoped, and tailored to your catalog's exact velocity.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. THE INTERACTIVE STUDIO STAGE (Segmented Selector + Wide Showcase Card) */}
        {/* ========================================================================= */}
        <div className="space-y-6 sm:space-y-8">
          
          {/* Segmented Switcher Tabs (Sticky on Mobile, Static on Desktop) */}
          <div className="sticky top-[58px] sm:static z-30 py-2 sm:py-0 bg-[#F8F9FC]/95 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none transition-all">
            <div className="max-w-2xl mx-auto p-1.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm grid grid-cols-3 gap-1.5 sm:gap-2 min-h-[52px] sm:h-14 items-stretch">
              {engagementModels.map((item, idx) => {
                const isActive = activeModelIndex === idx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      handleTabSelect(idx);
                    }}
                    className={`h-full min-h-[46px] py-1.5 sm:py-0 px-2 sm:px-4 rounded-xl text-center transition-colors cursor-pointer relative flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-2 ${
                      isActive
                        ? 'bg-[#0F172A] text-white shadow-sm'
                        : 'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                    aria-label={`Select ${item.title}`}
                  >
                    <span className={`text-[10px] sm:text-xs font-mono font-bold leading-none ${isActive ? 'text-[#EAA779]' : 'text-slate-400'}`}>
                      {item.id}
                    </span>
                    <span className="text-[11px] sm:text-[13px] font-sans font-bold tracking-tight text-center leading-tight sm:truncate">
                      {item.id === '01' ? 'Modular Sprint' : item.id === '02' ? 'Full-Funnel Flagship' : 'Dedicated Retainer'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Model Showcase Stage (Locked Height on Desktop: 100% Zero Layout Shift) */}
          {(() => {
            const current = engagementModels[activeModelIndex];
            return (
              <div
                ref={stageRef}
                className="max-w-5xl mx-auto rounded-3xl bg-white border border-slate-200/90 shadow-[0_16px_50px_rgba(15,23,42,0.06)] p-4 sm:p-9 md:p-10 relative overflow-hidden min-h-[620px] sm:min-h-[730px] lg:min-h-[460px] lg:h-[460px] flex flex-col justify-between"
              >
                {/* Top Accent Strip */}
                <div
                  className={`absolute top-0 inset-x-0 h-1.5 ${
                    current.id === '01'
                      ? 'bg-[#3B82F6]'
                      : current.id === '02'
                      ? 'bg-gradient-to-r from-[#BE185D] via-[#EAA779] to-[#3B82F6]'
                      : 'bg-[#10B981]'
                  }`}
                />

                {/* Popular Ribbon for Card 02 (Desktop Position) */}
                {current.highlight && (
                  <div className="hidden sm:block absolute top-6 right-8">
                    <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-[#BE185D] to-[#EAA779] text-white text-[10.5px] font-mono font-bold tracking-wider uppercase shadow-2xs flex items-center gap-1.5">
                      <Flame className="w-3 h-3" />
                      <span>Most Popular Engine</span>
                    </span>
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-10 items-start">
                  
                  {/* Left Column: Scope, Context & Details (5 cols) */}
                  <div className="lg:col-span-5 space-y-3.5 sm:space-y-5 lg:min-h-[350px] flex flex-col justify-between">
                    
                    <div className="space-y-3 sm:space-y-4">
                      {/* ID + Badge + Mobile Ribbon */}
                      <div className="space-y-2 pt-1">
                        {current.highlight && (
                          <div className="sm:hidden">
                            <span className="inline-flex px-3 py-1 rounded-full bg-gradient-to-r from-[#BE185D] to-[#EAA779] text-white text-[10.5px] font-mono font-bold tracking-wider uppercase shadow-2xs items-center gap-1.5">
                              <Flame className="w-3 h-3" />
                              <span>Most Popular Engine</span>
                            </span>
                          </div>
                        )}
                        <div className="flex items-center gap-2.5">
                          <span className="font-['Fraunces'] text-2xl sm:text-3xl font-extrabold text-slate-300">
                            {current.id}
                          </span>
                          <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-bold border ${current.badgeColor}`}>
                            {current.badge}
                          </span>
                        </div>
                      </div>

                      {/* Title & Scope Tag */}
                      <div className="space-y-1.5 sm:space-y-2">
                        <h3 className="font-['Fraunces'] text-xl sm:text-2xl md:text-3xl font-bold text-[#0F172A] leading-tight">
                          {current.title}
                        </h3>
                        <div className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-mono font-semibold">
                          {current.scopeTag}
                        </div>
                      </div>

                      {/* Sprint Focus Description */}
                      <p className="text-xs sm:text-sm font-sans text-slate-600 leading-relaxed pt-0.5 sm:pt-1">
                        {current.focus}
                      </p>
                    </div>

                    {/* Left Meta Specs */}
                    <div className="pt-3 sm:pt-4 border-t border-slate-100 space-y-1.5 sm:space-y-2 text-xs font-mono text-slate-500">
                      <div className="flex items-center justify-between">
                        <span>Operating Cadence:</span>
                        <strong className="text-slate-800 font-semibold">100% Async-First</strong>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Milestone Agreement:</span>
                        <strong className="text-slate-800 font-semibold">Scoped Before Kickoff</strong>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Workspace:</span>
                        <strong className="text-slate-800 font-semibold">Dedicated Notion Hub</strong>
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Deliverables in 2-Column Wide Grid (7 cols) */}
                  <div className="lg:col-span-7 bg-slate-50/70 rounded-2xl p-3.5 sm:p-7 border border-slate-100/90 space-y-3 sm:space-y-4 flex flex-col justify-between">
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                      <span>Core Deliverables Included</span>
                      <span className="text-slate-500 font-semibold">{current.deliverables.length} Deliverable Milestones</span>
                    </div>

                    {/* Deliverables Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 flex-grow">
                      {current.deliverables.map((deliverable, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200/60 shadow-2xs hover:border-slate-300 transition-colors sm:min-h-[64px]"
                        >
                          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-100">
                            <Check className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                          </div>
                          <span className="text-[11.5px] sm:text-[12.5px] font-sans text-slate-700 leading-snug font-medium">
                            {deliverable}
                          </span>
                        </div>
                      ))}
                    </div>

                  </div>

                </div>

              </div>
            );
          })()}

        </div>

        {/* ========================================================================= */}
        {/* 3. OBJECTION-KILLING FAQ: TWO-COLUMN EDITORIAL SPLIT                      */}
        {/* ========================================================================= */}
        <div className="pt-6 sm:pt-10 border-t border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column (5 cols): Sticky Editorial Anchor & Support Card */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#3B82F6] uppercase tracking-wider">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Transparent Clarity</span>
                </div>
                
                <h3 className="font-['Fraunces'] text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                  Straight Answers to Eliminate Campaign Friction.
                </h3>
                
                <p className="text-xs sm:text-sm font-sans text-slate-600 leading-relaxed">
                  Clear answers on how we structure sprints, communicate async-first, transfer 100% IP rights, and deliver custom Liquid code with zero fluff.
                </p>
              </div>

              {/* Edge Case Help Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#EAA779]" />
                  <span>Have an Edge-Case Question?</span>
                </div>
                <p className="text-xs font-sans text-slate-600 leading-relaxed">
                  Need a bespoke multi-brand retainer, unique file formats, or specific agency white-label NDA terms?
                </p>
                {isUpworkSource ? (
                  <div className="text-xs font-mono text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200/70">
                    Reply directly on Upwork for instant milestone scoping.
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setContactModalOpen(true)}
                    className="inline-flex items-center gap-1.5 text-xs font-sans font-bold text-[#0F172A] hover:text-[#3B82F6] transition-colors cursor-pointer group"
                  >
                    <span>Drop a quick note in chat</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                )}
              </div>

            </div>

            {/* Right Column (7 cols): Elevated Individual Interactive Cards */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-3.5">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className={`rounded-2xl transition-all duration-200 border ${
                      isOpen
                        ? 'bg-white border-slate-300 shadow-sm ring-1 ring-slate-900/5'
                        : 'bg-white/80 hover:bg-white border-slate-200/80 hover:border-slate-300 shadow-2xs'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full py-4 px-5 sm:px-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <div className="space-y-1.5 pr-2">
                        {/* Category Badge */}
                        <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase bg-slate-100 text-slate-600 border border-slate-200/60">
                          {faq.category}
                        </span>
                        <h4 className="font-sans font-bold text-sm sm:text-[15px] text-[#0F172A] leading-snug">
                          {faq.q}
                        </h4>
                      </div>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-1 transition-colors ${
                        isOpen ? 'bg-[#0F172A] text-white' : 'bg-slate-100 text-slate-500'
                      }`}>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isOpen ? 'transform rotate-180' : ''
                          }`}
                        />
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-[13px] font-sans text-slate-600 leading-relaxed border-t border-slate-100/80">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. FINAL CONVERSION TERMINAL (Dual-Mode Aware: Upwork vs. Direct)          */}
        {/* ========================================================================= */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white p-7 sm:p-10 shadow-xl relative overflow-hidden text-center md:text-left">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#EAA779]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#3B82F6]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-bold text-[#EAA779] tracking-wider uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>
                  {isUpworkSource ? '100% Upwork Escrow & Contract Compliant' : 'Async Briefing Open • DTC Brands & White-Label Agencies'}
                </span>
              </div>
              
              <h3 className="font-['Fraunces'] text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
                {isUpworkSource 
                  ? 'Ready to Eliminate Cold Traffic Guesswork on Upwork?' 
                  : 'Ready to Scale Your Creative Pipeline with High-Velocity Sprints?'}
              </h3>
              
              <p className="text-xs sm:text-sm font-sans text-slate-300 leading-relaxed">
                {isUpworkSource
                  ? 'Reply directly to our Upwork proposal or job discussion. We can scope your milestone within hours and kick off your first sprint without administrative delays.'
                  : 'Drop a brief note with your store URL or agency overflow needs. We’ll review your catalog and send an async strategic teardown within 6–12 hours.'}
              </p>

              {/* Trust Micro-Badges */}
              <div className="pt-2 flex flex-wrap justify-center md:justify-start gap-4 text-xs font-mono text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>100% Async-First</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Transparent Milestones</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Sub-72h First Drops</span>
                </span>
              </div>
            </div>

            {/* Action Trigger */}
            <div className="flex-shrink-0 w-full md:w-auto flex flex-col items-center gap-2">
              {isUpworkSource ? (
                <div className="px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-center space-y-1">
                  <div className="text-xs font-mono font-bold text-[#EAA779] uppercase tracking-wider">
                    Upwork Contract Room
                  </div>
                  <div className="text-xs font-sans text-slate-200">
                    Message Mayur on Upwork
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setContactModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#EAA779] hover:bg-[#E39864] text-[#2D1B0D] font-sans font-bold text-sm sm:text-base tracking-tight flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-103 cursor-pointer"
                >
                  <span>Start an Async Note</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              )}
              
              {!isUpworkSource && (
                <span className="text-[11px] font-mono text-slate-400">
                  Direct to mayur@stackcuts.com
                </span>
              )}
            </div>

          </div>

        </div>

      </div>

      {/* Direct Contact Modal (Rendered ONLY in LinkedIn / Direct Mode, never in Upwork Mode) */}
      {!isUpworkSource && (
        <GetInTouchModal
          isOpen={contactModalOpen}
          onClose={() => setContactModalOpen(false)}
        />
      )}

    </section>
  );
}