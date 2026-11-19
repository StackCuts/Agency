import React from 'react';
import { Sparkles } from 'lucide-react';

export default function CapabilitiesRibbon() {
  // 4 Core, Non-Redundant Strategic Pillars
  const capabilities = [
    'Meta Ads',
    'AI UGC & Cinematic Ads',
    'Shopify PDPs',
    'Notion Client Hub',
  ];

  // For mobile infinite marquee
  const mobileTickerItems = [...capabilities, ...capabilities, ...capabilities];

  return (
    <section 
      aria-label="Capabilities and Ecosystem Ribbon"
      className="relative w-full overflow-hidden bg-white/70 backdrop-blur-md border-y border-slate-200/70 py-3.5 sm:py-4 mb-12 sm:mb-16 shadow-2xs z-20"
    >
      {/* ========================================================================= */}
      {/* 1. DESKTOP VIEW: Completely Static, Centered, Zero Scroll, Pure Minimal  */}
      {/* ========================================================================= */}
      <div className="hidden md:flex items-center justify-center gap-6 lg:gap-10 max-w-6xl mx-auto px-6 select-none">
        {capabilities.map((item, idx) => (
          <React.Fragment key={`desk-${idx}`}>
            <span className="font-sans font-bold text-sm lg:text-[15px] text-slate-700 tracking-tight transition-colors duration-200 hover:text-slate-950 cursor-default">
              {item}
            </span>
            {idx < capabilities.length - 1 && (
              <span aria-hidden="true" className="text-[#EAA779] flex items-center">
                <Sparkles className="w-3.5 h-3.5 fill-[#EAA779]/20 text-[#EAA779]" />
              </span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* ========================================================================= */}
      {/* 2. MOBILE VIEW: Infinite Smooth Right-to-Left Auto-Scroll Marquee        */}
      {/* ========================================================================= */}
      <div className="md:hidden relative w-full overflow-hidden select-none">
        {/* Soft edge fade masks on mobile */}
        <div 
          aria-hidden="true" 
          className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-[#F8F9FB] via-[#F8F9FB]/80 to-transparent z-10 pointer-events-none" 
        />
        <div 
          aria-hidden="true" 
          className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-[#F8F9FB] via-[#F8F9FB]/80 to-transparent z-10 pointer-events-none" 
        />

        <div className="flex items-center overflow-hidden">
          <div className="animate-marquee flex items-center">
            {mobileTickerItems.map((item, idx) => (
              <div key={`mob-${idx}`} className="flex items-center">
                <span className="font-sans font-bold text-xs text-slate-800 tracking-tight whitespace-nowrap px-2">
                  {item}
                </span>
                <span aria-hidden="true" className="px-4 text-[#EAA779]">
                  <Sparkles className="w-3 h-3 fill-[#EAA779]/20 text-[#EAA779]" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
