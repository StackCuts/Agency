import React from 'react';
import { ExternalLink, Sparkles, ArrowUpRight, Lock, TreePine } from 'lucide-react';

export default function FeaturedCaseStudy({ onOpenModal, onNavigateCaseStudy }) {
  return (
    <section id="case-studies" className="py-20 sm:py-24 bg-[#0B0F17] relative border-t border-[#2A3447]/50 overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[350px] bg-emerald-500/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>💎 FLAGSHIP DTC CASE STUDY // LIVE CONVERSION ENGINE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Full-Funnel DTC E-Commerce <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Conversion Architecture
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            We don't just build ad creatives—we engineer entire high-converting DTC ecosystems, from forensic research and Andromeda AI creatives to custom Shopify PDPs.
          </p>
        </div>

        {/* Flagship Case Study Showcase Area (Full-Width Executive Architecture Card) */}
        <div className="mt-10 sm:mt-14">
          <div className="rounded-3xl bg-[#161C27]/90 backdrop-blur-xl border border-emerald-500/30 p-6 sm:p-10 lg:p-12 shadow-2xl space-y-8 sm:space-y-10 animate-fadeIn">
            
            {/* Top Bar: Case Study Identity & Live Store Access Strip */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-[#2A3447]">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[11px] font-mono font-bold">
                  <span>DTC E-COM • TREE BIOLOGY • ANDROMEDA META AI ARCHITECTURE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight">
                  ArborPulse™ — Full-Funnel DTC Conversion Engine
                </h3>
                <p className="text-sm sm:text-base text-[#94A3B8] max-w-3xl leading-relaxed">
                  Engineered to eliminate 120-day competitor ad fatigue by mining 14,000+ customer reviews, deploying 3 high-contrast Meta ad angles, and routing traffic to a live, custom-coded Shopify OS 2.0 storefront.
                </p>
              </div>

              {/* Live Storefront Credentials Pill */}
              <div className="shrink-0 w-full lg:w-auto p-4 rounded-2xl bg-[#0B0F17] border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center gap-3 shadow-inner">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-bold">Live Storefront Active:</span>
                </div>
                <div className="flex items-center gap-2 bg-[#161C27] px-3 py-1.5 rounded-xl border border-[#2A3447] text-xs font-mono">
                  <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="text-[#94A3B8]">Password:</span>
                  <span className="text-white font-bold bg-amber-500/20 px-1.5 py-0.5 rounded text-amber-300">StackCuts</span>
                </div>
              </div>
            </div>

            {/* The 4 Architectural Pillars Grid (Full-Width 4-Column Layout) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              
              {/* Pillar 01 */}
              <div className="bg-[#0B0F17] p-5 sm:p-6 rounded-2xl border border-[#2A3447] hover:border-emerald-500/40 transition-all space-y-3 group">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 font-bold">
                    01 // RESEARCH
                  </span>
                  <span className="text-[11px] font-mono text-[#94A3B8]">14k+ Comments</span>
                </div>
                <h4 className="text-base font-display font-bold text-white group-hover:text-emerald-300 transition-colors">
                  Forensic VoC & Science Mining
                </h4>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  Extracted real homeowner anxieties from Reddit & Amazon to pinpoint the $800 replacement cost of heat-killed trees.
                </p>
              </div>

              {/* Pillar 02 */}
              <div className="bg-[#0B0F17] p-5 sm:p-6 rounded-2xl border border-[#2A3447] hover:border-emerald-500/40 transition-all space-y-3 group">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 font-bold">
                    02 // ANGLES
                  </span>
                  <span className="text-[11px] font-mono text-[#94A3B8]">3 Meta Hooks</span>
                </div>
                <h4 className="text-base font-display font-bold text-white group-hover:text-emerald-300 transition-colors">
                  Andromeda Meta AI Retrieval
                </h4>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  Engineered 3 divergent creative angles (Heatwave Crisis, Sub-Soil Science, and Insurance Math) to capture cold buyer intent.
                </p>
              </div>

              {/* Pillar 03 */}
              <div className="bg-[#0B0F17] p-5 sm:p-6 rounded-2xl border border-[#2A3447] hover:border-emerald-500/40 transition-all space-y-3 group">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 font-bold">
                    03 // CREATIVES
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold">41.8% 3s Hold</span>
                </div>
                <h4 className="text-base font-display font-bold text-white group-hover:text-emerald-300 transition-colors">
                  High-Contrast Static & Carousels
                </h4>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  Split-grid static ads and 7-frame educational carousels formatted in 4:5 mobile aspect ratio with 1:1 matching copy decks.
                </p>
              </div>

              {/* Pillar 04 */}
              <div className="bg-[#0B0F17] p-5 sm:p-6 rounded-2xl border border-[#2A3447] hover:border-emerald-500/40 transition-all space-y-3 group">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 font-bold">
                    04 // SHOPIFY PDP
                  </span>
                  <span className="text-[11px] font-mono text-[#94A3B8]">OS 2.0 Theme</span>
                </div>
                <h4 className="text-base font-display font-bold text-white group-hover:text-emerald-300 transition-colors">
                  Custom Liquid Storefront
                </h4>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  Interactive diameter slider, multi-pack tiered savings, and thumb-friendly sticky Add-To-Cart engineered for mobile traffic.
                </p>
              </div>

            </div>

            {/* Bottom Actions Bar (Refined, High-Impact CTA Buttons) */}
            <div className="pt-6 border-t border-[#2A3447] flex flex-col sm:flex-row items-center justify-between gap-4">
              
              <div className="text-xs font-mono text-[#94A3B8] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                <span>Zero guesswork. Complete creative and code infrastructure ready to inspect.</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
                {/* Secondary Button: Test Live Storefront */}
                <a
                  href="https://arborpulse-store.myshopify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-[#0B0F17] border border-[#2A3447] text-white hover:text-emerald-400 font-bold text-xs sm:text-sm hover:border-emerald-500/50 transition-all flex items-center justify-center gap-2 shadow-sm order-2 sm:order-1"
                >
                  <span>Test Live Shopify Store (Pass: StackCuts)</span>
                  <ExternalLink className="w-4 h-4 text-emerald-400 shrink-0" />
                </a>

                {/* Primary Button: Explore Full Case Study */}
                <button
                  onClick={() => {
                    if (onNavigateCaseStudy) {
                      onNavigateCaseStudy('arborpulse');
                    } else {
                      window.location.hash = '#arborpulse';
                    }
                  }}
                  className="btn-shimmer bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-black font-extrabold py-3.5 px-7 rounded-xl w-full sm:w-auto text-center shadow-lg transition-all flex items-center justify-center gap-2 text-xs sm:text-sm uppercase tracking-wide cursor-pointer order-1 sm:order-2"
                >
                  <span>Explore Full ArborPulse Case Study →</span>
                  <ArrowUpRight className="w-4 h-4 text-black shrink-0" />
                </button>
              </div>

            </div>

          </div>
        </div>

        </div>

      </section>
  );
}
