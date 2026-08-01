import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Sparkles, CheckCircle2, Zap, CreditCard, Layers, ArrowUpRight } from 'lucide-react';

export default function FeaturedCaseStudy() {
  const slides = [
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

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleSlideClick = () => {
    window.open('https://www.mathify.tech', '_blank');
  };

  return (
    <section className="py-24 bg-[#0B0F17] relative border-t border-[#2A3447]/50 overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[300px] bg-amber-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00E599]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Section Card Wrapper */}
        <div className="rounded-3xl bg-[#161C27]/80 backdrop-blur-xl border border-amber-500/25 p-6 sm:p-10 lg:p-12 shadow-2xl space-y-10">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>🚀 FEATURED LIVE DIRECT-RESPONSE CAMPAIGN</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              From Meta Carousel Ad To <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                Live Functional E-Commerce Funnel
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Case Study: <span className="text-amber-400 font-bold">Mathify.tech</span> — How we engineered a 6-frame story carousel connected directly to a live digital product checkout engine.
            </p>
          </div>

          {/* Two-Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* LEFT COLUMN: Interactive Carousel Swiper */}
            <div className="lg:col-span-6 flex flex-col items-center">
              
              <div className="w-full max-w-md bg-[#0B0F17] border border-amber-500/30 rounded-2xl p-4 sm:p-5 shadow-2xl relative space-y-4">
                
                {/* Carousel Frame Header */}
                <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-[#2A3447]">
                  <span className="text-amber-400 font-bold flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    Mathify Carousel (Frame {currentIndex + 1}/6)
                  </span>
                  <span className="text-[#94A3B8]">4:5 Aspect Spec</span>
                </div>

                {/* Main Carousel Image Container */}
                <div 
                  className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#161C27] border border-[#2A3447] cursor-pointer shadow-inner"
                  onClick={handleSlideClick}
                >
                  <img
                    src={slides[currentIndex].src}
                    alt={slides[currentIndex].alt}
                    className="w-full h-full object-cover"
                  />

                  {/* Left Arrow Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevSlide();
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
                      nextSlide();
                    }}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#0B0F17]/80 hover:bg-[#0B0F17] border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-lg hover:scale-110"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-5 h-5 text-amber-400" />
                  </button>
                </div>

                {/* Dot Pagination Controls */}
                <div className="flex items-center justify-center gap-2 pt-1">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        currentIndex === idx ? 'w-6 bg-amber-400' : 'w-2 bg-[#2A3447] hover:bg-slate-400'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Click-to-Redirect Interactive Overlay Banner */}
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

              {/* 3 Key Deliverables Cards */}
              <div className="space-y-3">
                
                {/* Deliverable 1 */}
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

                {/* Deliverable 2 */}
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

                {/* Deliverable 3 */}
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

              {/* Live Conversion Proof Badge */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#0B0F17] border border-[#00E599]/30 text-xs font-mono">
                <span className="flex items-center gap-2 text-white font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#00E599] animate-pulse"></span>
                  Live Campaign Status:
                </span>
                <span className="text-[#00E599] font-bold">100% Active & Accepting Orders</span>
              </div>

              {/* Call To Action Button */}
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

      </div>
    </section>
  );
}
