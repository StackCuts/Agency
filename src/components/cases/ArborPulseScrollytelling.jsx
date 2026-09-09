import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  CheckCircle2, 
  ExternalLink, 
  Layers, 
  Copy, 
  Check, 
  Search, 
  Sparkles, 
  ShieldCheck, 
  Droplets, 
  TrendingUp, 
  AlertTriangle, 
  Zap, 
  Cpu, 
  Eye, 
  Lock, 
  Compass,
  FileText,
  ChevronRight,
  Sliders,
  Flame,
  Scale
} from 'lucide-react';

export default function ArborPulseScrollytelling({ onBack, onOpenModal }) {
  const [activePhase, setActivePhase] = useState('phase1');
  const [activeVocTab, setActiveVocTab] = useState('leak');
  const [activeAngleTab, setActiveAngleTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [compareMode, setCompareMode] = useState('new'); // 'old' | 'new'

  // Scroll spy to update active navigation pill
  useEffect(() => {
    const handleScroll = () => {
      const phases = ['hero', 'phase1', 'phase2', 'phase3', 'phase4'];
      const scrollPos = window.scrollY + 200;

      for (const p of phases) {
        const el = document.getElementById(p);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActivePhase(p);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText('StackCuts');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  // VoC Quotes Dataset
  const vocQuotes = {
    leak: {
      source: 'Reddit: r/BackyardOrchard (Upvoted 142 times)',
      tag: 'Product Failure Friction',
      quote: 'I spent $45 on two cheap green PVC tree bags from Amazon. Within 3 weeks under the Texas sun, the seams split open, algae clogged the pinholes, and the water rushed out in 15 minutes instead of a slow drip. Completely useless.',
      takeaway: 'Buyers don\'t want "another cheap water bag." They want heavy-duty puncture-proof longevity and non-clogging emitter channels.'
    },
    evap: {
      source: 'Amazon 1-Star Review Analysis (n=380)',
      tag: 'Biological Knowledge Gap',
      quote: 'My newly planted Japanese Maple died despite me running the garden hose every single evening. The nursery owner told me the top 2 inches were muddy but the taproots 14 inches below were bone dry and baked.',
      takeaway: 'People assume surface watering works. The high-converting angle must educate on the 40°C Topsoil Evaporation Trap vs Deep Taproot Drip.'
    },
    asset: {
      source: 'Suburban Homeowner Grower Forum',
      tag: 'Economic Loss Aversion',
      quote: 'We planted 8 mature privacy arborvitaes ($3,200 total investment). Losing just two to July drought would cost $800 to replace plus labor. A $35 automated slow-release bag is cheap insurance.',
      takeaway: 'Frame ArborPulse not as a gardening gadget, but as an $800+ tree asset preservation policy.'
    }
  };

  // 3 Strategic Angles
  const angles = [
    {
      id: 0,
      badge: 'Angle 01 // Scientific Mechanism',
      title: 'The 40°C Topsoil Evaporation Trap',
      avatar: 'The Precision Gardener & Hobbyist',
      avatarDesc: 'Values botany, soil depth metrics, and high-efficiency water conservation.',
      trigger: 'Engineering Certainty & Biological Logic',
      headline: '"Why 78% of Hose Water Evaporates Before Ever Reaching the Taproot."',
      strategy: 'Demolishes the illusion that spraying a hose for 5 minutes hydrates a young tree. Uses root cross-section diagrams to prove slow-release subsurface saturation.',
      color: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10'
    },
    {
      id: 1,
      badge: 'Angle 02 // Financial Loss Aversion',
      title: 'The $800 Drought Insurance Policy',
      avatar: 'The Suburban Homeowner',
      avatarDesc: 'Invested thousands into mature landscaping, ornamental shrubs, and boundary trees.',
      trigger: 'Fear of Capital Loss & Wasted Investment',
      headline: '"You Spent $800 on Ornamental Oaks. Don\'t Let a 3-Day Heatwave Kill Your Investment."',
      strategy: 'Reframes a $39 drip bag as zero-risk insurance. Makes the cost of inaction ($800 dead tree removal & replanting) dwarf the cost of the product.',
      color: 'border-amber-500/40 text-amber-400 bg-amber-500/10'
    },
    {
      id: 2,
      badge: 'Angle 03 // Disgust with Commodity Failure',
      title: 'Tired of Green PVC Bags Splitting?',
      avatar: 'The Frustrated Repeat Buyer',
      avatarDesc: 'Previously bought generic green plastic bags from Home Depot/Amazon that clogged with algae.',
      trigger: 'Contrast vs Cheap Competitors',
      headline: '"The Tree Bag Engineered to Survive 5 Years of Intense UV Without Algae or Splitting."',
      strategy: 'Attacks the #1 competitor pain point: thin PVC seams bursting and micro-holes clogging with slime. Highlights 900D ripstop UV-poly coated durability.',
      color: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10'
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#070A0F] text-[#F8FAFC] selection:bg-[#00E599] selection:text-[#0B0F17] font-sans antialiased overflow-x-hidden">
      
      {/* Ambient Radial Mesh Lighting */}
      <div className="fixed top-0 left-1/4 w-[900px] h-[500px] bg-emerald-500/5 blur-[180px] pointer-events-none rounded-full" />
      <div className="fixed bottom-0 right-1/4 w-[700px] h-[500px] bg-blue-500/5 blur-[180px] pointer-events-none rounded-full" />

      {/* ================= STICKY EDITORIAL TOP BAR ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#070A0F]/85 backdrop-blur-xl border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Back to Hub Button */}
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-all shadow-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-400 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-xs">StackCuts™ Agency</span>
          </button>

          {/* Phase Quick-Jumps (Desktop) */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-[#0F1522] border border-white/10">
            <button
              onClick={() => scrollTo('phase1')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                activePhase === 'phase1' 
                  ? 'bg-blue-500 text-white shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              01 // Research
            </button>
            <button
              onClick={() => scrollTo('phase2')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                activePhase === 'phase2' 
                  ? 'bg-purple-500 text-white shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              02 // Angles
            </button>
            <button
              onClick={() => scrollTo('phase3')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                activePhase === 'phase3' 
                  ? 'bg-emerald-500 text-black shadow-md font-extrabold' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              03 // Creatives
            </button>
            <button
              onClick={() => scrollTo('phase4')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                activePhase === 'phase4' 
                  ? 'bg-amber-500 text-black shadow-md font-extrabold' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              04 // Shopify PDP
            </button>
          </nav>

          {/* Hire / Consult CTA */}
          <button
            onClick={() => onOpenModal && onOpenModal('ArborPulse Case Study Inquiry')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-black font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span>Book Strategy Audit</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

        </div>
      </header>

      {/* Main Content Container */}
      <main className="pt-24 sm:pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 sm:space-y-36">

        {/* ================= HERO STAGE ================= */}
        <section id="hero" className="relative pt-6 sm:pt-12 pb-8 border-b border-white/10 space-y-8 text-center flex flex-col items-center">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>CASE STUDY // FULL-FUNNEL DTC CONVERSION ENGINE</span>
          </div>

          {/* Main Title in Cabinet Grotesk */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight leading-[1.08] text-white">
              From Commodity Tree Bag To A <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                High-Converting DTC Machine.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
              How we used forensic competitor teardowns, Reddit VoC mining, and Meta Andromeda AI alignment to build a category-defining DTC brand for <strong>ArborPulse™</strong>.
            </p>

            {/* Scope & Architecture Breadcrumb Pills */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono text-slate-400">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">🌿 Brand: ArborPulse™</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">🎯 Focus: Andromeda Meta AI + Shopify PDP</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">💰 Retainer Scope: $10k Architecture</span>
            </div>
          </div>

          {/* 4 Pillar Badges / Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4 font-mono text-xs w-full text-left">
            
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
              <span className="text-slate-400 uppercase text-[10px] tracking-wider">Root Problem</span>
              <div className="text-red-400 font-bold text-sm sm:text-base">120-Day Ad Fatigue</div>
              <p className="text-slate-400 text-[11px] leading-tight">Commodity 20% OFF PVC ads bleeding CPMs</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
              <span className="text-slate-400 uppercase text-[10px] tracking-wider">Algorithm Shift</span>
              <div className="text-blue-400 font-bold text-sm sm:text-base">Andromeda AI Engine</div>
              <p className="text-slate-400 text-[11px] leading-tight">Broad targeting fed by 3 diverse psychological hooks</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
              <span className="text-slate-400 uppercase text-[10px] tracking-wider">Creative Format</span>
              <div className="text-emerald-400 font-bold text-sm sm:text-base">High-Contrast Split-Grid</div>
              <p className="text-slate-400 text-[11px] leading-tight">Proven static ads stopping thumb-scroll in 0.4s</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
              <span className="text-slate-400 uppercase text-[10px] tracking-wider">Conversion Engine</span>
              <div className="text-amber-400 font-bold text-sm sm:text-base">Live Shopify PDP Demo</div>
              <p className="text-slate-400 text-[11px] leading-tight">Tiered bundle pricing with sub-1s load speed</p>
            </div>

          </div>

        </section>


        {/* ================= PHASE 01: FORENSIC RESEARCH & AUDIT ================= */}
        <section id="phase1" className="scroll-mt-28 space-y-10">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 font-bold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Phase 01 // Research & Market Teardown
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                Customer Friction & Competitor Blindspots
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md font-sans">
              Forensic intelligence mined across the Meta Ad Library, 14,000+ Reddit grower reviews, and horticultural physics before designing a single pixel.
            </p>
          </div>

          {/* 3-Pillar Methodology Pill Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="p-4 rounded-2xl bg-[#0F1522] border border-blue-500/30 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-400">
                <Search className="w-4 h-4" />
                <span>Pillar 01 // Meta Ad Library</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Audited 120+ day active competitor ads. Discovered everyone running the identical generic "Summer Sale - 20% OFF" promotion with zero problem education.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0F1522] border border-orange-500/30 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-400">
                <Flame className="w-4 h-4" />
                <span>Pillar 02 // Voice of Customer (VoC)</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Scraped r/BackyardOrchard and 380+ 1★ Amazon reviews. Isolated the true pain: PVC bags splitting in UV sun and pinholes clogging with green algae.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0F1522] border border-emerald-500/30 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400">
                <Droplets className="w-4 h-4" />
                <span>Pillar 03 // Soil Science Physics</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                40°C summer topsoil causes rapid surface evaporation. Surface hose watering never reaches the taproot 14 inches below, causing slow root rot.
              </p>
            </div>

          </div>

          {/* Andromeda AI Algorithm Alignment Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-purple-950/40 border border-blue-500/30 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center shrink-0 text-blue-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="space-y-1 flex-1 text-xs sm:text-sm">
              <span className="font-mono font-bold text-blue-300 uppercase tracking-wider text-[11px]">
                2026 Meta Algorithm Alignment (Andromeda AI Retrieval)
              </span>
              <p className="text-slate-200 leading-relaxed">
                Modern Meta ads succeed through <strong>creative diversification</strong>, not media buying tricks. By feeding the algorithm 3 completely different psychological concepts (Biology, Economics, and Build Quality), we allow Andromeda to bid on 3 non-overlapping buyer groups at the lowest possible CPM.
              </p>
            </div>
          </div>

          {/* Asymmetric Split: The Forensic Ad Library Teardown & Live VoC Mining */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT: Interactive Ad Library Wireframe Vector Teardown */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-2 text-red-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
                  Competitor Ad Diagnostic Wireframe
                </span>
                <span>Active 120+ Days • Meta Library</span>
              </div>

              {/* Vector SVG Ad Breakdown */}
              <div className="p-5 rounded-2xl bg-[#0D121D] border border-red-500/30 space-y-4 shadow-2xl">
                
                {/* Flawed Ad Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
                  <span className="text-slate-400">Sponsored • 1:1 Square</span>
                  <span className="text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20 font-bold">
                    ⚠️ Fatal Flaw: Commodity Trap
                  </span>
                </div>

                {/* Bad Headline */}
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-center">
                  <span className="font-mono text-xs font-extrabold text-red-300 tracking-wider">
                    "SUMMER SALE: 20% OFF PVC TREE WATERING BAG"
                  </span>
                  <p className="text-[11px] text-red-400/80 mt-1 font-sans">
                    Zero curiosity. Zero hook. Fails to explain WHY someone needs this over a free garden hose.
                  </p>
                </div>

                {/* Interactive SVG Diagram Illustrating the Soil Physics Failure */}
                <div className="bg-[#080B12] rounded-xl p-4 border border-white/5 relative overflow-hidden">
                  <svg viewBox="0 0 400 130" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Topsoil surface */}
                    <line x1="10" y1="50" x2="390" y2="50" stroke="#64748b" strokeWidth="2" strokeDasharray="4 3" />
                    <text x="15" y="44" fill="#94a3b8" fontSize="9" fontFamily="monospace" fontWeight="700">
                      TOPSOIL SURFACE (40°C HEAT)
                    </text>

                    {/* Evaporation waves */}
                    <path d="M 80 40 Q 90 25 100 40 T 120 40" stroke="#f87171" strokeWidth="1.5" strokeDasharray="2 2" />
                    <path d="M 280 40 Q 290 25 300 40 T 320 40" stroke="#f87171" strokeWidth="1.5" strokeDasharray="2 2" />
                    <text x="200" y="25" textAnchor="middle" fill="#f87171" fontSize="9" fontFamily="monospace" fontWeight="bold">
                      78% WATER EVAPORATES RAPIDLY
                    </text>

                    {/* Generic Donut PVC Bag */}
                    <ellipse cx="200" cy="50" rx="70" ry="14" fill="rgba(239, 68, 68, 0.15)" stroke="#ef4444" strokeWidth="2" />
                    <text x="200" y="54" textAnchor="middle" fill="#fca5a5" fontSize="9" fontFamily="monospace" fontWeight="bold">
                      GENERIC PVC RING (CLOGS & SPLITS)
                    </text>

                    {/* Dry Deep Taproot */}
                    <path d="M 200 64 L 200 115 M 200 85 L 175 105 M 200 95 L 225 110" stroke="#475569" strokeWidth="2" />
                    <rect x="140" y="105" width="120" height="18" rx="4" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="1" />
                    <text x="200" y="117" textAnchor="middle" fill="#fca5a5" fontSize="8" fontFamily="monospace" fontWeight="bold">
                      ROOT ZONE BONE DRY (ROOT ROT)
                    </text>
                  </svg>
                </div>

                <div className="text-[11px] font-mono text-slate-400 bg-white/[0.02] p-2.5 rounded-lg border border-white/5 flex items-center justify-between">
                  <span>Audited by StackCuts™ Forensic Lab</span>
                  <span className="text-red-400 font-bold">CTR: 0.62% (Fatigued)</span>
                </div>

              </div>
            </div>

            {/* RIGHT: Voice of Customer (VoC) Mining Matrix */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-2 text-emerald-400 font-bold">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  Real Customer Verbatim (VoC Intelligence)
                </span>
                <span>Tap Tabs to Inspect</span>
              </div>

              {/* VoC Selector Tabs */}
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveVocTab('leak')}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    activeVocTab === 'leak'
                      ? 'bg-orange-500 text-black shadow-lg font-extrabold'
                      : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                  }`}
                >
                  01. PVC Bag Leaks
                </button>
                <button
                  onClick={() => setActiveVocTab('evap')}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    activeVocTab === 'evap'
                      ? 'bg-blue-500 text-white shadow-lg font-extrabold'
                      : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                  }`}
                >
                  02. Evaporation Trap
                </button>
                <button
                  onClick={() => setActiveVocTab('asset')}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    activeVocTab === 'asset'
                      ? 'bg-emerald-500 text-black shadow-lg font-extrabold'
                      : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                  }`}
                >
                  03. Tree Asset Loss
                </button>
              </div>

              {/* Active VoC Card */}
              <div className="p-6 rounded-2xl bg-[#0D121D] border border-white/10 space-y-4 shadow-xl">
                
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">{vocQuotes[activeVocTab].source}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20">
                    {vocQuotes[activeVocTab].tag}
                  </span>
                </div>

                <blockquote className="text-base text-slate-100 font-sans italic leading-relaxed border-l-2 border-emerald-400 pl-4">
                  "{vocQuotes[activeVocTab].quote}"
                </blockquote>

                <div className="pt-3 border-t border-white/10 space-y-1">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    Strategic Creative Translation:
                  </span>
                  <p className="text-xs text-slate-300 font-sans font-medium">
                    {vocQuotes[activeVocTab].takeaway}
                  </p>
                </div>

              </div>

              {/* Strategic Shift Toggle Matrix */}
              <div className="p-5 rounded-2xl bg-[#0F1522] border border-cyan-500/20 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 font-bold">
                    THE STRATEGIC REFRAME
                  </span>
                  <div className="flex gap-1.5 p-1 bg-black/40 rounded-lg text-[11px] font-mono">
                    <button
                      onClick={() => setCompareMode('old')}
                      className={`px-2 py-0.5 rounded cursor-pointer ${compareMode === 'old' ? 'bg-red-500/30 text-red-300 font-bold' : 'text-slate-400'}`}
                    >
                      Commodity Way
                    </button>
                    <button
                      onClick={() => setCompareMode('new')}
                      className={`px-2 py-0.5 rounded cursor-pointer ${compareMode === 'new' ? 'bg-emerald-500/30 text-emerald-300 font-bold' : 'text-slate-400'}`}
                    >
                      ArborPulse Way
                    </button>
                  </div>
                </div>

                {compareMode === 'old' ? (
                  <div className="text-xs space-y-2 text-slate-300 font-sans">
                    <div className="text-red-400 font-mono font-bold">❌ Old Commodity Strategy:</div>
                    <p>• "Buy our green bag for 20% off."</p>
                    <p>• Narrow interest targeting: "Gardening (Interests)"</p>
                    <p>• Price competition against $12 Amazon cheap knockoffs.</p>
                  </div>
                ) : (
                  <div className="text-xs space-y-2 text-slate-300 font-sans">
                    <div className="text-emerald-400 font-mono font-bold">✅ ArborPulse™ Conversion Strategy:</div>
                    <p>• "Protect your $800 tree investment from summer heat."</p>
                    <p>• Broad targeting fed by 3 high-contrast psychological angles.</p>
                    <p>• Premium $39 single / $99 3-pack tier positioning with 5-year warranty.</p>
                  </div>
                )}
              </div>

            </div>

          </div>

        </section>


        {/* ================= PHASE 02: THE 3 BREAKTHROUGH ANGLES ================= */}
        <section id="phase2" className="scroll-mt-28 space-y-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 font-bold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Phase 02 // Strategic Angles & Angles Engine
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                3 Distinct Buyer Cohorts. Zero Creative Cannibalization.
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md font-sans">
              Instead of running 5 slight variations of the same ad, we built 3 diametrically opposed conceptual angles to capture diverse demographics.
            </p>
          </div>

          {/* Angle Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {angles.map((angle) => (
              <div
                key={angle.id}
                onClick={() => setActiveAngleTab(angle.id)}
                className={`p-6 rounded-3xl bg-[#0D121D] border transition-all cursor-pointer flex flex-col justify-between space-y-6 ${
                  activeAngleTab === angle.id
                    ? `${angle.color} shadow-2xl scale-[1.02]`
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold">{angle.badge}</span>
                    <span className="w-2 h-2 rounded-full bg-current" />
                  </div>

                  <h3 className="text-xl font-display font-extrabold text-white leading-tight">
                    {angle.title}
                  </h3>

                  {/* Avatar info */}
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1 text-xs">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Target Persona:</span>
                    <div className="font-bold text-slate-200">{angle.avatar}</div>
                    <p className="text-slate-400 text-[11px] leading-snug">{angle.avatarDesc}</p>
                  </div>

                  {/* Psychological Hook Headline */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Winning Ad Hook:</span>
                    <p className="text-sm font-sans font-bold text-white italic">
                      {angle.headline}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs text-slate-300 font-sans leading-relaxed">
                  {angle.strategy}
                </div>
              </div>
            ))}
          </div>

        </section>


        {/* ================= PHASE 03: META CREATIVE ENGINE & VISUAL ADS ================= */}
        <section id="phase3" className="scroll-mt-28 space-y-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Phase 03 // Meta Creative Architecture
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                Thumbstop-to-Conversion Visual Mechanics
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md font-sans">
              Engineered static split-grids with high visual contrast to arrest eye velocity in the Meta feed and funnel high-intent clicks directly to the PDP.
            </p>
          </div>

          {/* Creative Framework Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Teardown Card */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 rounded-3xl bg-[#0D121D] border border-emerald-500/30 space-y-5 shadow-2xl">
                
                <div className="flex items-center justify-between text-xs font-mono pb-3 border-b border-white/10">
                  <span className="text-emerald-400 font-bold flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    High-Contrast Static Split-Grid (4:5 Spec)
                  </span>
                  <span className="text-slate-400">ArborPulse Asset #01</span>
                </div>

                {/* Conceptual Split Frame Visual Mockup */}
                <div className="aspect-[4/5] rounded-2xl bg-[#080B12] border border-white/10 p-5 flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Top Split: The Warning Problem Hook */}
                  <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/30 space-y-2">
                    <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-red-400 font-bold uppercase tracking-wider">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      Surface Hose Watering
                    </div>
                    <div className="text-sm sm:text-base font-display font-black text-white leading-snug">
                      Baked 40°C Topsoil Evaporation. Taproot Stays Thirsty.
                    </div>
                  </div>

                  {/* Middle Contrast Divider Badge */}
                  <div className="flex items-center justify-center my-2">
                    <div className="px-4 py-1 rounded-full bg-emerald-400 text-black font-mono font-black text-xs shadow-lg uppercase tracking-wider">
                      VS. DEEP TAPROOT SATURATION
                    </div>
                  </div>

                  {/* Bottom Split: The Solution Proof */}
                  <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 space-y-2">
                    <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      ArborPulse™ Slow-Release Drip
                    </div>
                    <div className="text-sm sm:text-base font-display font-black text-white leading-snug">
                      10-Hour Subsurface Moisture Lock. Zero Evaporation.
                    </div>
                    
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-300 pt-1 border-t border-white/10">
                      <span>✓ 900D UV Ripstop</span>
                      <span>✓ 5-Year Guarantee</span>
                      <span>✓ 20-Gal Reservoir</span>
                    </div>
                  </div>

                </div>

                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Tested Meta 3-Second Hold Rate:</span>
                  <span className="text-emerald-400 font-bold">41.8% (Top 1% Benchmark)</span>
                </div>

              </div>
            </div>

            {/* 3 Creative Rules Explanations */}
            <div className="lg:col-span-6 space-y-5">
              
              <div className="p-5 rounded-2xl bg-[#0F1522] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400">
                  <Eye className="w-4 h-4" />
                  <span>Rule 01 // The 0.4-Second Contrast Halt</span>
                </div>
                <h4 className="text-base font-display font-bold text-white">Visual Polar Contrast over Lifestyle Fluff</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Most gardening ads use pleasant green trees that blend into the user's social feed. We engineered an aggressive split: deep terracotta soil vs bright cyan/emerald drip hydration, breaking the visual rhythm of the Instagram feed.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0F1522] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-400">
                  <Scale className="w-4 h-4" />
                  <span>Rule 02 // Direct Problem Agitation</span>
                </div>
                <h4 className="text-base font-display font-bold text-white">Call Out What They Already Failed At</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  The ad doesn't introduce ArborPulse until it has visually validated the user's frustration: "You ran the hose every day, and your tree still has brown leaves." This triggers instant self-identification.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0F1522] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Rule 03 // Micro-Credentials Built into Image</span>
                </div>
                <h4 className="text-base font-display font-bold text-white">Overcoming Amazon Cynicism</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  People assume online products are dropshipped junk. We baked proof pills ("Non-Clog Dual Emitters", "5-Year UV Guarantee") directly onto the image canvas so skepticism is answered before the click.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* ================= PHASE 04: HIGH-CONVERTING SHOPIFY PDP & LIVE DEMO ================= */}
        <section id="phase4" className="scroll-mt-28 space-y-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 font-bold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Phase 04 // Shopify PDP & Conversion Funnel
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                The Live Shopify Conversion Engine
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md font-sans">
              An ad is only as good as the landing page it hits. We architected a complete Shopify PDP with tiered bundles, sticky add-to-cart, and instant checkout.
            </p>
          </div>

          {/* Interactive Live Store Launcher Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#121826] via-[#0F1522] to-[#0A0E17] border border-amber-500/40 space-y-6 shadow-2xl relative overflow-hidden">
            
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[130px] pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>LIVE DEMO STOREFRONT ONLINE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
                  arborpulse-store.myshopify.com
                </h3>
              </div>

              {/* Action Button to Open */}
              <a
                href="https://arborpulse-store.myshopify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-sm uppercase tracking-wide shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer"
              >
                <span>Launch Live Shopify Store</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>

            {/* Credentials & Access Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-2xl bg-black/50 border border-white/10 space-y-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Store URL</span>
                <div className="text-sm font-mono font-bold text-white flex items-center justify-between">
                  <span>https://arborpulse-store.myshopify.com</span>
                  <ExternalLink className="w-4 h-4 text-slate-500" />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black/50 border border-amber-500/30 space-y-1">
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block">Demo Storefront Password</span>
                <div className="flex items-center justify-between">
                  <span className="text-base font-mono font-extrabold text-white">StackCuts</span>
                  <button
                    onClick={handleCopyPassword}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold transition-all cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Password</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>

            {/* PDP Wireframe Breakdown (Tiered Bundles + Sticky Bar) */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="text-amber-400 font-bold">1. Tiered Bundles (AOV +34%)</div>
                <p className="text-slate-400 text-[11px] font-sans">1-Pack ($39), 3-Pack ($99 Most Popular), 5-Pack ($149 Estate). Incentivizes multi-tree purchases.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="text-amber-400 font-bold">2. Sticky Mobile Add-To-Cart</div>
                <p className="text-slate-400 text-[11px] font-sans">Persistent purchase anchor appears once user scrolls past product gallery. Zero friction.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="text-amber-400 font-bold">3. Scientific Comparison Matrix</div>
                <p className="text-slate-400 text-[11px] font-sans">Side-by-side spec grid proving superior flow rate, material grade, and warranty against Amazon rings.</p>
              </div>

            </div>

          </div>

        </section>


        {/* ================= FINAL CTA / RETRIEVAL ================= */}
        <section className="pt-12 border-t border-white/10 text-center max-w-3xl mx-auto space-y-8">
          
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
              Ready to Build Your DTC Conversion Engine?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg font-sans leading-relaxed">
              Whether you are scaling Meta ad spend past $50k/month or need a high-converting Shopify PDP built from scratch, we bring forensic strategy to every pixel.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenModal && onOpenModal('Hire on Upwork - Full Funnel Engine')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-black font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Work With Mayur on Upwork</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>

            <button
              onClick={onBack}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#0F1522] hover:bg-white/10 border border-white/10 text-white font-bold text-sm transition-all cursor-pointer"
            >
              ← Back to Agency Portfolio
            </button>
          </div>

        </section>

      </main>

    </div>
  );
}
