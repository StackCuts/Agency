import React from 'react';
import { Play, Sparkles, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-10 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Main 2-Column Hero Grid (Centered Stack on Mobile, Side-by-Side on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ========================================================================= */}
          {/* LEFT: Circular Portrait Badge with Playful Geometry Accents              */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-1">
            <div className="relative w-64 h-64 sm:w-76 sm:h-76 md:w-84 md:h-84">
              
              {/* Playful Orange Arc Accent (Upper Left - exactly matching reference style) */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-28 h-28 sm:w-36 sm:h-36 rounded-full border-[3px] border-[#EAA779] border-r-transparent border-b-transparent -rotate-12 pointer-events-none" />

              {/* Playful Soft Blue Pill Accent (Bottom Right - matching reference style) */}
              <div className="absolute -bottom-1 -right-1 sm:bottom-2 sm:right-0 w-8 sm:w-10 h-2.5 sm:h-3 rounded-full bg-[#BAE6FD] rotate-[-30deg] pointer-events-none shadow-xs" />

              {/* Main Circular Frame with Soft Multitone Background */}
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#93C5FD]/35 via-[#C7D2FE]/40 to-[#E2E8F0]/40 border-4 border-white shadow-[0_15px_35px_rgba(15,23,42,0.08)] overflow-hidden relative flex items-end justify-center">
                
                {/* Background Geometric Color Planes (Reference illustration depth) */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#818CF8]/20 via-[#60A5FA]/20 to-[#3B82F6]/30 pointer-events-none" />
                
                {/* Mayur Portrait Cutout */}
                <img
                  src="/mayur_portrait.png"
                  alt="Mayur // StackCuts Lead Creative Strategist"
                  className="w-full h-full object-cover object-top scale-105 transform translate-y-2 filter drop-shadow-md select-none pointer-events-none"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to laptop pose if portrait fails
                    e.currentTarget.src = '/mayur_laptop.png';
                  }}
                />
              </div>

              {/* Verified Upwork Top Rated Plus Badge Pill */}
              <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 text-[11px] font-mono font-bold text-slate-800 shadow-sm flex items-center gap-1.5 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>Available for Q4/Q1</span>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT: Editorial Headline, Subhead, Pill Buttons, and Hand-Drawn Nuances */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-7 order-2 lg:order-2">
            
            {/* 1. Main Greeting with Hand-Drawn Brush Underline */}
            <div className="relative inline-block">
              <h1 className="font-['Fraunces'] text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-[#0F172A] tracking-tight leading-[1.08]">
                Hey, I'm <span className="relative inline-block">
                  Mayur
                  {/* Organic hand-drawn brush stroke underline (Berry/Magenta accent) */}
                  <svg
                    className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4 text-[#BE185D] overflow-visible"
                    viewBox="0 0 160 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 11C45 4 115 5 156 12C120 15 65 14 20 14"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </h1>
            </div>

            {/* 2. Direct-Response Bio / Value Proposition */}
            <p className="text-lg sm:text-xl md:text-2xl font-sans font-normal text-slate-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
              I build high-converting{' '}
              <span className="relative inline-block font-semibold text-[#0F172A]">
                Meta ad creatives
                {/* Subtle blue brush underline under core capability */}
                <svg
                  className="absolute -bottom-1 left-0 w-full h-2 text-[#3B82F6] opacity-80"
                  viewBox="0 0 100 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5.5C30 2.5 70 2.5 98 5.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              , AI UGC video ads, and Shopify PDPs that scale DTC brands past 7 figures.
            </p>

            {/* 3. Action Buttons (Clean Pill Styling directly matching reference) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 pt-1">
              
              {/* Primary Pill Button: Deep Indigo/Navy */}
              <a
                href="#vault"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#1E293B] hover:bg-[#0F172A] text-white font-sans font-bold text-sm tracking-tight shadow-md hover:shadow-lg transition-all hover:scale-102 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Browse The Vault</span>
              </a>

              {/* Secondary Pill Button: Clean Light Ghost/Bordered Pill */}
              <a
                href="#briefing"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 border border-slate-300 font-sans font-bold text-sm tracking-tight shadow-2xs hover:shadow-sm transition-all hover:scale-102 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-slate-700 text-slate-700" />
                <span>The Strategy Briefing</span>
              </a>

            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* Playful Hand-Drawn Doodle Arrow pointing to upcoming Section               */}
        {/* ========================================================================= */}
        <div className="hidden lg:flex justify-end pr-16 -mt-3 pointer-events-none">
          <div className="flex flex-col items-center">
            {/* Curly Hand-drawn Arrow SVG in warm peach/coral tone */}
            <svg
              className="w-16 h-16 text-[#EAA779] transform rotate-12"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 12C32 8 46 16 42 28C38 40 24 38 28 50M28 50L20 44M28 50L34 44"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[11px] font-mono font-bold text-[#EAA779] -mt-1 tracking-tight">
              116-Sec Audio
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
