import React from 'react';
import { Zap, Clock, Shield, Play, Layers, TrendingUp, CheckCircle, Eye, Sparkles, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenModal }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-[#00E599]/10 via-[#3B82F6]/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#00E599]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#161C27] border border-[#00E599]/30 text-xs sm:text-sm font-mono text-[#00E599] shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E599] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E599]"></span>
              </span>
              <span>⚡ 48-Hour Asynchronous Delivery | Meta Ad Creative Studio</span>
            </div>

            {/* Main H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
              Fix Meta Ad Fatigue & <br />
              <span className="bg-gradient-to-r from-white via-[#F8FAFC] to-[#00E599] bg-clip-text text-transparent">
                Boost CTR with Direct-Response
              </span> Creatives.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-[#94A3B8] leading-relaxed max-w-2xl font-normal">
              We engineer high-contrast static split-grids, multi-frame carousels, and thumb-stopping motion video assets designed to lower CPL and scale Meta campaigns—delivered in 48 hours without scheduling friction.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenModal('Growth Pack ($495 Trial)')}
                className="btn-shimmer px-8 py-4 rounded-full bg-[#00E599] text-[#0B0F17] font-extrabold text-base hover:bg-[#00E599]/90 transition-all shadow-mint-glow hover:shadow-xl flex items-center justify-center gap-3 group"
              >
                <span>Claim a $495 Trial Pack</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#portfolio"
                className="px-8 py-4 rounded-full bg-[#161C27] border border-[#2A3447] text-white font-semibold text-base hover:border-[#00E599]/50 hover:bg-[#161C27]/80 transition-all flex items-center justify-center gap-2 group"
              >
                <Eye className="w-5 h-5 text-[#3B82F6] group-hover:text-[#00E599] transition-colors" />
                <span>Inspect Live Visuals ↓</span>
              </a>
            </div>

            {/* Value Highlights Under CTAs */}
            <div className="pt-6 border-t border-[#2A3447]/60 grid grid-cols-3 gap-4 text-xs sm:text-sm text-[#94A3B8] font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#00E599]" />
                <span>100% Asynchronous</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#3B82F6]" />
                <span>48H Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#00E599]" />
                <span>Zero Zoom Calls</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Floating 3D Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Card Wrapper */}
              <div className="relative rounded-2xl bg-gradient-to-b from-[#161C27] to-[#0B0F17] p-4 sm:p-6 border border-[#2A3447] shadow-2xl backdrop-blur-xl">
                
                {/* Header tag */}
                <div className="flex items-center justify-between pb-4 border-b border-[#2A3447]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    <span className="text-xs text-[#94A3B8] font-mono ml-2">Meta Ads Manager Ready</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-[#00E599]/10 text-[#00E599] font-mono border border-[#00E599]/30">
                    Live Concept Mockup
                  </span>
                </div>

                {/* Main Visual: 3D Layered Ad Formats Showcase */}
                <div className="relative py-6 space-y-4">
                  
                  {/* Item 1: High-Contrast Static Split-Grid Mockup */}
                  <div className="rounded-xl bg-[#0B0F17] p-3 border border-[#2A3447] shadow-lg group hover:border-[#00E599]/50 transition-all cursor-pointer">
                    <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8] mb-2">
                      <span className="flex items-center gap-1.5 text-white font-semibold">
                        <Layers className="w-3.5 h-3.5 text-[#00E599]" />
                        Static Split-Grid (1:1 Spec)
                      </span>
                      <span className="text-[#00E599] font-bold">+42% CTR</span>
                    </div>
                    {/* Simulated High-Contrast Split Grid Graphics */}
                    <div className="grid grid-cols-2 gap-2 h-28 rounded-lg overflow-hidden border border-[#2A3447]">
                      <div className="bg-gradient-to-br from-slate-900 to-[#161C27] p-3 flex flex-col justify-between border-r border-[#2A3447]">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#00E599] bg-[#00E599]/10 px-1.5 py-0.5 rounded w-fit">
                          PROBLEM
                        </span>
                        <div className="text-xs font-bold text-slate-300 leading-tight">
                          Ad Fatigue Killing Margins?
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-[#161C27] to-[#00E599]/20 p-3 flex flex-col justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-white bg-[#3B82F6] px-1.5 py-0.5 rounded w-fit">
                          SOLUTION
                        </span>
                        <div className="text-xs font-extrabold text-white leading-tight">
                          48H Direct-Response Split-Grids.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item 2: Multi-Frame Carousel Mockup */}
                  <div className="rounded-xl bg-[#0B0F17] p-3 border border-[#2A3447] shadow-lg group hover:border-[#3B82F6]/50 transition-all cursor-pointer">
                    <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8] mb-2">
                      <span className="flex items-center gap-1.5 text-white font-semibold">
                        <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
                        Multi-Frame Carousel
                      </span>
                      <span className="text-[#3B82F6] font-bold">High Swipe-Through</span>
                    </div>
                    <div className="flex gap-2 h-20 overflow-hidden">
                      <div className="flex-1 bg-[#161C27] border border-[#2A3447] rounded-lg p-2 flex flex-col justify-between">
                        <span className="text-[9px] font-mono text-[#00E599]">Frame #1 Hook</span>
                        <div className="h-2 bg-[#2A3447] rounded w-3/4"></div>
                        <div className="h-2 bg-[#00E599]/40 rounded w-1/2"></div>
                      </div>
                      <div className="flex-1 bg-[#161C27] border border-[#2A3447] rounded-lg p-2 flex flex-col justify-between">
                        <span className="text-[9px] font-mono text-[#3B82F6]">Frame #2 Proof</span>
                        <div className="h-2 bg-[#2A3447] rounded w-full"></div>
                        <div className="h-2 bg-[#3B82F6]/40 rounded w-2/3"></div>
                      </div>
                      <div className="flex-1 bg-[#161C27] border border-[#2A3447] rounded-lg p-2 flex flex-col justify-between opacity-60">
                        <span className="text-[9px] font-mono text-slate-400">Frame #3 CTA</span>
                        <div className="h-2 bg-[#2A3447] rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Floating Metric Badges */}
                <div className="absolute -top-4 -left-4 bg-[#161C27] border border-[#00E599] rounded-xl px-3 py-2 shadow-mint-glow flex items-center gap-2 text-xs font-mono text-white animate-float-slow">
                  <TrendingUp className="w-4 h-4 text-[#00E599]" />
                  <div>
                    <div className="text-[10px] text-[#94A3B8]">AVERAGE CTR BOOST</div>
                    <div className="font-bold text-[#00E599]">+42% 1st Week</div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-[#161C27] border border-[#3B82F6] rounded-xl px-3 py-2 shadow-blue-glow flex items-center gap-2 text-xs font-mono text-white animate-float-delayed">
                  <Clock className="w-4 h-4 text-[#3B82F6]" />
                  <div>
                    <div className="text-[10px] text-[#94A3B8]">PRODUCTION SPEED</div>
                    <div className="font-bold text-[#3B82F6]">48 Hours Fixed</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
