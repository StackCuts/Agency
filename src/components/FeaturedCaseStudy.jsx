import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Sparkles, CheckCircle2, Zap, CreditCard, Layers, ArrowUpRight, ShieldCheck, Activity, Globe, Lock, Cpu, Stethoscope, BookOpen } from 'lucide-react';

export default function FeaturedCaseStudy({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState('cellmatrix'); // 'cellmatrix' | 'mathify'

  // Mathify Carousel Slides
  const mathifySlides = [
    {
      id: 1,
      src: '/images/mathify/mathify_4_5_slide1.png',
      alt: 'Mathify Slide 1 - Hook & Problem Statement',
      title: 'Slide 1: Cognitive Hook'
    },
    {
      id: 2,
      src: '/images/mathify/mathify_4_5_slide2.png',
      alt: 'Mathify Slide 2 - Screen-Free Contrast',
      title: 'Slide 2: Screen-Free Value'
    },
    {
      id: 3,
      src: '/images/mathify/mathify_4_5_slide3.png',
      alt: 'Mathify Slide 3 - Visual Proof & Framework',
      title: 'Slide 3: Visual Math Framework'
    },
    {
      id: 4,
      src: '/images/mathify/mathify_4_5_slide4.png',
      alt: 'Mathify Slide 4 - Parent Benefits',
      title: 'Slide 4: Parent Ease'
    },
    {
      id: 5,
      src: '/images/mathify/mathify_4_5_slide5.png',
      alt: 'Mathify Slide 5 - Product Stack & Offer',
      title: 'Slide 5: Complete Kit Stack'
    },
    {
      id: 6,
      src: '/images/mathify/mathify_4_5_slide6.png',
      alt: 'Mathify Slide 6 - Direct CTA & Website Link',
      title: 'Slide 6: Direct Conversion Call to Action'
    }
  ];

  const [mathifyIndex, setMathifyIndex] = useState(0);

  const prevMathify = () => {
    setMathifyIndex((prev) => (prev === 0 ? mathifySlides.length - 1 : prev - 1));
  };

  const nextMathify = () => {
    setMathifyIndex((prev) => (prev === mathifySlides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="case-studies" className="py-24 bg-[#0B0F17] relative border-t border-[#2A3447]/50 overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[350px] bg-cyan-500/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>💎 LIVE CONVERSION ENGINES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Full-Funnel Web Systems <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-amber-400 bg-clip-text text-transparent">
              Engineered For Scale
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            We don't just build ad creatives—we engineer entire high-converting web ecosystems, digital storefronts, and lead acquisition engines.
          </p>
        </div>

        {/* Interactive Case Study Switcher (Tabs) */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-2 p-2 rounded-2xl bg-[#161C27] border border-[#2A3447] backdrop-blur-xl shadow-2xl">
            
            <button
              onClick={() => setActiveTab('cellmatrix')}
              className={`px-5 py-3 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'cellmatrix'
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-black shadow-lg shadow-cyan-500/20 font-extrabold'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              <Stethoscope className="w-4 h-4" />
              <span>💉 CellMatrix.tech — MedSpa & Bio-Regenerative Platform</span>
            </button>

            <button
              onClick={() => setActiveTab('mathify')}
              className={`px-5 py-3 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'mathify'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-lg shadow-amber-500/20 font-extrabold'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>🧮 Mathify.tech — EdTech Conversion Engine</span>
            </button>

          </div>
        </div>

        {/* Main Content Showcase Area */}
        <div className="mt-12">
          
          {/* ================= TAB 1: CELLMATRIX.TECH ================= */}
          {activeTab === 'cellmatrix' && (
            <div className="rounded-3xl bg-[#161C27]/90 backdrop-blur-xl border border-cyan-500/30 p-6 sm:p-10 lg:p-12 shadow-2xl space-y-8 animate-fadeIn">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                
                {/* LEFT COLUMN: Interactive Browser Window Mockup Frame */}
                <div className="lg:col-span-7 flex flex-col">
                  
                  {/* Browser Mockup Wrapper */}
                  <div className="w-full h-full min-h-[420px] lg:min-h-[500px] bg-[#0B0F17] rounded-2xl border border-cyan-500/30 overflow-hidden shadow-2xl flex flex-col relative group">
                    
                    {/* Browser Header Bar */}
                    <div className="bg-[#121824] px-4 py-3 border-b border-[#2A3447] flex items-center justify-between shrink-0">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                        <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                        <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                      </div>

                      {/* SSL URL Address Bar */}
                      <div className="flex-1 max-w-md mx-4 bg-[#0B0F17] border border-[#2A3447] rounded-full px-3.5 py-1 text-[11px] font-mono text-cyan-400 flex items-center justify-center gap-1.5 shadow-inner">
                        <Lock className="w-3 h-3 text-cyan-400" />
                        <span className="text-white font-medium">https://www.cellmatrix.tech</span>
                      </div>

                      <div className="text-[10px] font-mono text-cyan-400 font-bold bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                        LIVE
                      </div>
                    </div>

                    {/* Interactive Live Website iframe / Mockup View */}
                    <div className="relative flex-1 bg-[#0B0F17] overflow-hidden">
                      <iframe
                        src="https://www.cellmatrix.tech"
                        title="CellMatrix.tech Live Web Platform"
                        className="w-full h-full min-h-[400px] lg:min-h-[460px] border-0 pointer-events-auto"
                        loading="lazy"
                      />

                      {/* Floating Badge overlay */}
                      <div className="absolute bottom-4 left-4 z-20 bg-[#0B0F17]/90 backdrop-blur-md border border-cyan-500/40 px-3 py-1.5 rounded-full text-xs font-mono text-cyan-400 font-bold shadow-xl flex items-center gap-2 pointer-events-none">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                        <span>⚡ Live Patient Acquisition System</span>
                      </div>
                    </div>

                  </div>

                </div>

                {/* RIGHT COLUMN: Case Study Strategy Breakdown */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-5">
                    
                    {/* Title & Niche Tag */}
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono font-bold">
                        <span>Aesthetic Science • Exosome Therapy • High-Ticket MedSpa</span>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white leading-tight">
                        CellMatrix Labs — Exosome & Bio-Regenerative Clinical Platform
                      </h3>
                    </div>

                    {/* Strategy Highlight */}
                    <div className="bg-[#0B0F17] p-4 rounded-2xl border border-cyan-500/30 space-y-1.5">
                      <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                        Full-Funnel Architecture
                      </span>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                        "A high-converting, luxury clinical platform built to educate cold traffic on cellular exosome therapy, sell digital protocols ($9 Molecular Matrix), and capture high-intent patient consults."
                      </p>
                    </div>

                    {/* 4 Specs Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                      
                      <div className="bg-[#0B0F17] p-3 rounded-xl border border-[#2A3447] hover:border-cyan-500/30 transition-colors">
                        <div className="text-cyan-400 font-bold mb-1">🧪 3-Step Invisible Consult</div>
                        <p className="text-[#94A3B8] text-[11px]">Interactive cellular mapping & neo-synthesis framework.</p>
                      </div>

                      <div className="bg-[#0B0F17] p-3 rounded-xl border border-[#2A3447] hover:border-cyan-500/30 transition-colors">
                        <div className="text-cyan-400 font-bold mb-1">💳 Dual Revenue System</div>
                        <p className="text-[#94A3B8] text-[11px]">Lead assessment form + Lemon Squeezy digital store.</p>
                      </div>

                      <div className="bg-[#0B0F17] p-3 rounded-xl border border-[#2A3447] hover:border-cyan-500/30 transition-colors">
                        <div className="text-cyan-400 font-bold mb-1">🏦 Patient Financing Integrated</div>
                        <p className="text-[#94A3B8] text-[11px]">CareCredit & Cherry financing options built-in.</p>
                      </div>

                      <div className="bg-[#0B0F17] p-3 rounded-xl border border-[#2A3447] hover:border-cyan-500/30 transition-colors">
                        <div className="text-cyan-400 font-bold mb-1">📊 Comparison Matrix</div>
                        <p className="text-[#94A3B8] text-[11px]">Direct mechanism contrast vs. traditional Botox & PRP.</p>
                      </div>

                    </div>

                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-[#2A3447] space-y-3">
                    <a
                      href="https://www.cellmatrix.tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-shimmer bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-black font-extrabold py-3.5 px-6 rounded-xl w-full text-center shadow-lg transition-all flex items-center justify-center gap-2 text-xs sm:text-sm uppercase tracking-wide"
                    >
                      <span>🌐 VISIT LIVE SITE (cellmatrix.tech)</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>

                    <button
                      onClick={() => {
                        if (onOpenModal) {
                          onOpenModal('Landing Page Infrastructure ($600)');
                        } else {
                          const el = document.getElementById('packages');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="w-full py-3 px-6 rounded-xl bg-[#0B0F17] border border-[#2A3447] text-white font-bold text-xs hover:border-cyan-500/50 transition-colors"
                    >
                      REQUEST SIMILAR MEDSPA FUNNEL ($600)
                    </button>
                  </div>

                </div>

              </div>

            </div>
          )}

          {/* ================= TAB 2: MATHIFY.TECH ================= */}
          {activeTab === 'mathify' && (
            <div className="rounded-3xl bg-[#161C27]/90 backdrop-blur-xl border border-amber-500/30 p-6 sm:p-10 lg:p-12 shadow-2xl space-y-8 animate-fadeIn">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* LEFT COLUMN: Interactive Carousel Swiper */}
                <div className="lg:col-span-6 flex flex-col items-center">
                  
                  <div className="w-full max-w-md bg-[#0B0F17] border border-amber-500/30 rounded-2xl p-4 sm:p-5 shadow-2xl relative space-y-4">
                    
                    {/* Carousel Header */}
                    <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-[#2A3447]">
                      <span className="text-amber-400 font-bold flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" />
                        Mathify Carousel (Frame {mathifyIndex + 1}/6)
                      </span>
                      <span className="text-[#94A3B8]">4:5 Feed Spec</span>
                    </div>

                    {/* Image Container */}
                    <div 
                      className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#161C27] border border-[#2A3447] cursor-pointer shadow-inner"
                      onClick={() => window.open('https://www.mathify.tech', '_blank')}
                    >
                      <img
                        src={mathifySlides[mathifyIndex].src}
                        alt={mathifySlides[mathifyIndex].alt}
                        className="w-full h-full object-cover"
                      />

                      {/* Left Arrow Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevMathify();
                        }}
                        className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#0B0F17]/80 hover:bg-[#0B0F17] border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-lg hover:scale-110"
                        aria-label="Previous Slide"
                      >
                        <ChevronLeft className="w-5 h-5 text-amber-400" />
                      </button>

                      {/* Right Arrow Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextMathify();
                        }}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#0B0F17]/80 hover:bg-[#0B0F17] border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-lg hover:scale-110"
                        aria-label="Next Slide"
                      >
                        <ChevronRight className="w-5 h-5 text-amber-400" />
                      </button>
                    </div>

                    {/* Dot Pagination Controls */}
                    <div className="flex items-center justify-center gap-2 pt-1">
                      {mathifySlides.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setMathifyIndex(idx)}
                          className={`h-2 rounded-full transition-all ${
                            mathifyIndex === idx ? 'w-6 bg-amber-400' : 'w-2 bg-[#2A3447] hover:bg-slate-400'
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>

                    {/* Live Banner */}
                    <a
                      href="https://www.mathify.tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-2.5 px-4 rounded-xl bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 transition-all text-center text-xs font-mono text-amber-300 font-bold flex items-center justify-center gap-2 group"
                    >
                      <span>👉 Swipe Carousel / Tap to Visit Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>

                  </div>

                </div>

                {/* RIGHT COLUMN: Campaign Architecture Breakdown */}
                <div className="lg:col-span-6 space-y-6">
                  
                  {/* Header Box */}
                  <div className="bg-[#0B0F17] p-5 rounded-2xl border border-amber-500/30 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#94A3B8]">BRAND CASE STUDY</span>
                      <span className="text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        EDTECH / E-COMMERCE
                      </span>
                    </div>
                    <h3 className="text-xl font-display font-extrabold text-white">
                      Mathify System (Screen-Free Early Math)
                    </h3>
                    <p className="text-xs text-[#94A3B8] font-mono">
                      Core Angle: <span className="text-slate-200">Screen-Free Early Math Induction for Parents</span>
                    </p>
                  </div>

                  {/* 3 Key Deliverables */}
                  <div className="space-y-3">
                    
                    <div className="bg-[#0B0F17]/80 p-4 rounded-xl border border-[#2A3447] hover:border-amber-500/40 transition-all flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
                        <Layers className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white flex items-center gap-2">
                          <span>🎨 6-Frame Storytelling Carousel Ad</span>
                        </h4>
                        <p className="text-xs text-[#94A3B8] mt-0.5 leading-relaxed">
                          Cognitive story-mapping angle designed to stop parents in-feed and guide them step-by-step toward digital product download.
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#0B0F17]/80 p-4 rounded-xl border border-[#2A3447] hover:border-[#00E599]/40 transition-all flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-[#00E599]/10 border border-[#00E599]/30 flex items-center justify-center shrink-0 text-[#00E599]">
                        <Zap className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white flex items-center gap-2">
                          <span>⚡ Sub-1s Fast Landing Page</span>
                        </h4>
                        <p className="text-xs text-[#94A3B8] mt-0.5 leading-relaxed">
                          High-speed conversion funnel matching the exact visual promise of the ad carousel with zero latency bounce.
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#0B0F17]/80 p-4 rounded-xl border border-[#2A3447] hover:border-[#3B82F6]/40 transition-all flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/30 flex items-center justify-center shrink-0 text-[#3B82F6]">
                        <CreditCard className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white flex items-center gap-2">
                          <span>💳 Live Checkout Engine</span>
                        </h4>
                        <p className="text-xs text-[#94A3B8] mt-0.5 leading-relaxed">
                          100% functional digital product delivery engine configured for instant PDF pack purchases ($14.99).
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Status Badge */}
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#0B0F17] border border-[#00E599]/30 text-xs font-mono">
                    <span className="flex items-center gap-2 text-white font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#00E599] animate-pulse"></span>
                      Live Campaign Status:
                    </span>
                    <span className="text-[#00E599] font-bold">100% Active & Accepting Orders</span>
                  </div>

                  {/* CTA */}
                  <div>
                    <a
                      href="https://www.mathify.tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-amber-500 hover:bg-amber-400 text-black font-extrabold py-4 px-6 rounded-xl w-full text-center shadow-lg transition-all flex items-center justify-center gap-2 group text-sm sm:text-base tracking-wide uppercase"
                    >
                      <span>EXPERIENCE LIVE CONVERSION ENGINE (MATHIFY.TECH)</span>
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>

                </div>

              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
