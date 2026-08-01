import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Layers, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

export default function CarouselShowcase({ onOpenModal }) {
  const carouselFrameworks = [
    {
      id: 1,
      title: '1. Educational / Storytelling Carousel',
      angle: 'Problem ➔ Mechanism ➔ Result ➔ Offer',
      metric: '3.8x Swipe-Through Rate',
      specs: '1080x1080 Meta Carousel Set (PNG)',
      description: 'Continuous multi-frame layout where visual elements cross slide boundaries, building curiosity and driving high swipe engagement.',
      slides: [
        {
          id: 1,
          src: '/images/showcase/Showcase_Carousel_Hair_Slide1_Hook_3.png',
          alt: 'Hair Storytelling Carousel Slide 1 - Hook',
          tag: 'SLIDE 1: PATTERN INTERRUPT HOOK'
        },
        {
          id: 2,
          src: '/images/showcase/Showcase_Carousel_Hair_Slide2_Mechanism.png',
          alt: 'Hair Storytelling Carousel Slide 2 - Mechanism',
          tag: 'SLIDE 2: BIOLOGICAL MECHANISM'
        },
        {
          id: 3,
          src: '/images/showcase/Showcase_Carousel_Hair_Slide3_Result.png',
          alt: 'Hair Storytelling Carousel Slide 3 - Result',
          tag: 'SLIDE 3: VISUAL RESULT PROOF'
        },
        {
          id: 4,
          src: '/images/showcase/Showcase_Carousel_Hair_Slide4_OfferCTA.png',
          alt: 'Hair Storytelling Carousel Slide 4 - Offer CTA',
          tag: 'SLIDE 4: DIRECT OFFER CALL TO ACTION'
        }
      ]
    },
    {
      id: 2,
      title: '2. Social Proof / Case Study Carousel',
      angle: 'Transformation ➔ Clinical Protocol ➔ Verified Review ➔ Offer',
      metric: '+54% Lead Intent',
      specs: '1080x1080 Meta Carousel Set (PNG)',
      description: 'Patient transformation case study framework leveraging authentic review badges and protocol breakdowns to warm cold traffic.',
      slides: [
        {
          id: 1,
          src: '/images/showcase/Showcase_Carousel_CaseStudy_Slide1_Hook.png',
          alt: 'Case Study Carousel Slide 1 - Transformation Hook',
          tag: 'SLIDE 1: REAL PATIENT TRANSFORMATION'
        },
        {
          id: 2,
          src: '/images/showcase/Showcase_Carousel_CaseStudy_Slide2_Breakdown_2.png',
          alt: 'Case Study Carousel Slide 2 - Clinical Protocol',
          tag: 'SLIDE 2: CLINICAL PROTOCOL BREAKDOWN'
        },
        {
          id: 3,
          src: '/images/showcase/Showcase_Carousel_CaseStudy_Slide3_Testimonial_2.png',
          alt: 'Case Study Carousel Slide 3 - Verified Review',
          tag: 'SLIDE 3: VERIFIED 5-STAR TESTIMONIAL'
        },
        {
          id: 4,
          src: '/images/showcase/Showcase_Carousel_CaseStudy_Slide4_OfferCTA.png',
          alt: 'Case Study Carousel Slide 4 - Offer CTA',
          tag: 'SLIDE 4: LIMITED INTRO OFFER CTA'
        }
      ]
    },
    {
      id: 3,
      title: '3. Product / Feature Breakdown Carousel',
      angle: 'Hero Offer ➔ Bio-Availability ➔ Formulation ➔ Offer',
      metric: '-38% Cost Per Acquisition',
      specs: '1080x1080 Meta Carousel Set (PNG)',
      description: 'E-commerce and MedSpa offer breakdown highlighting ingredient bioavailability and formulation advantages.',
      slides: [
        {
          id: 1,
          src: '/images/showcase/Showcase_Carousel_IVDrip_Slide1_Hero.png',
          alt: 'IV Drip Carousel Slide 1 - Hero Offer',
          tag: 'SLIDE 1: HERO OFFER & INTRO'
        },
        {
          id: 2,
          src: '/images/showcase/Showcase_Carousel_IVDrip_Slide2_Absorption.png',
          alt: 'IV Drip Carousel Slide 2 - Bio-Availability',
          tag: 'SLIDE 2: BIOAVAILABILITY MATRIX'
        },
        {
          id: 3,
          src: '/images/showcase/Showcase_Carousel_IVDrip_Slide3_Formulation.png',
          alt: 'IV Drip Carousel Slide 3 - Formulation Breakdown',
          tag: 'SLIDE 3: FORMULATION INGREDIENTS'
        },
        {
          id: 4,
          src: '/images/showcase/Showcase_Carousel_IVDrip_Slide4_OfferCTA.png',
          alt: 'IV Drip Carousel Slide 4 - Offer CTA',
          tag: 'SLIDE 4: DIRECT CLAIM OFFER CTA'
        }
      ]
    }
  ];

  // State to track current slide index for each carousel
  const [slideIndices, setSlideIndices] = useState({
    1: 0,
    2: 0,
    3: 0
  });

  const prevSlide = (carouselId, slideLength) => {
    setSlideIndices((prev) => ({
      ...prev,
      [carouselId]: prev[carouselId] === 0 ? slideLength - 1 : prev[carouselId] - 1
    }));
  };

  const nextSlide = (carouselId, slideLength) => {
    setSlideIndices((prev) => ({
      ...prev,
      [carouselId]: prev[carouselId] === slideLength - 1 ? 0 : prev[carouselId] + 1
    }));
  };

  return (
    <section className="py-24 bg-[#0B0F17] relative border-t border-[#2A3447]/50 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[300px] bg-[#3B82F6]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-xs font-mono text-[#3B82F6]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>🎠 MULTI-FRAME ENGAGEMENT CAROUSELS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            3 High-Converting Meta <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-[#3B82F6] bg-clip-text text-transparent">
              Carousel Frameworks
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Multi-slide storytelling carousels engineered to drive high intent, increase swipe engagement, and scale retargeting pools.
          </p>
        </div>

        {/* 3 Interactive Swipable Carousel Cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {carouselFrameworks.map((framework) => {
            const currentSlideIdx = slideIndices[framework.id] || 0;
            const currentSlide = framework.slides[currentSlideIdx];

            return (
              <div
                key={framework.id}
                className="bg-[#161C27] border border-[#2A3447] rounded-3xl p-6 flex flex-col justify-between hover:border-[#3B82F6]/50 transition-all duration-300 shadow-2xl relative"
              >
                <div className="space-y-4">
                  {/* Card Header Info */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#2A3447]">
                    <span className="text-xs font-mono text-[#3B82F6] font-bold bg-[#3B82F6]/10 px-2.5 py-1 rounded border border-[#3B82F6]/30">
                      {framework.metric}
                    </span>
                    <span className="text-xs font-mono text-[#94A3B8]">
                      {framework.specs}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-display font-bold text-white">
                      {framework.title}
                    </h3>
                    <p className="text-xs font-mono text-amber-400 mt-1">
                      Angle: {framework.angle}
                    </p>
                  </div>

                  {/* Interactive Swipable Slide Container - NO HOVER BLUR */}
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#0B0F17] border border-[#2A3447] shadow-inner group">
                    <img
                      src={currentSlide.src}
                      alt={currentSlide.alt}
                      className="w-full h-full object-cover"
                    />

                    {/* Left Arrow Button */}
                    <button
                      onClick={() => prevSlide(framework.id, framework.slides.length)}
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#0B0F17]/85 hover:bg-[#0B0F17] border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-lg hover:scale-110"
                      aria-label="Previous Slide"
                    >
                      <ChevronLeft className="w-5 h-5 text-[#3B82F6]" />
                    </button>

                    {/* Right Arrow Button */}
                    <button
                      onClick={() => nextSlide(framework.id, framework.slides.length)}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#0B0F17]/85 hover:bg-[#0B0F17] border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-lg hover:scale-110"
                      aria-label="Next Slide"
                    >
                      <ChevronRight className="w-5 h-5 text-[#3B82F6]" />
                    </button>

                    {/* Slide Tag Overlay at top */}
                    <div className="absolute top-3 left-3 bg-[#0B0F17]/90 backdrop-blur-md border border-[#2A3447] px-2.5 py-1 rounded text-[10px] font-mono text-[#00E599]">
                      {currentSlide.tag}
                    </div>

                    {/* Frame Counter Badge */}
                    <div className="absolute bottom-3 right-3 bg-[#0B0F17]/90 backdrop-blur-md border border-[#2A3447] px-2.5 py-1 rounded text-[10px] font-mono text-white">
                      Frame {currentSlideIdx + 1}/4
                    </div>
                  </div>

                  {/* Dot Indicators */}
                  <div className="flex items-center justify-center gap-1.5 pt-1">
                    {framework.slides.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() =>
                          setSlideIndices((prev) => ({
                            ...prev,
                            [framework.id]: dotIdx
                          }))
                        }
                        className={`h-1.5 rounded-full transition-all ${
                          currentSlideIdx === dotIdx
                            ? 'w-5 bg-[#3B82F6]'
                            : 'w-1.5 bg-[#2A3447] hover:bg-slate-400'
                        }`}
                        aria-label={`Go to slide ${dotIdx + 1}`}
                      />
                    ))}
                  </div>

                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {framework.description}
                  </p>
                </div>

                {/* Card CTA Action */}
                <div className="pt-6 border-t border-[#2A3447] mt-6">
                  <button
                    onClick={() => {
                      if (onOpenModal) {
                        onOpenModal('Growth Pack ($495 Trial)');
                      } else {
                        const el = document.getElementById('packages');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full py-3 rounded-full bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white font-bold text-xs btn-shimmer transition-all shadow-blue-glow flex items-center justify-center gap-2"
                  >
                    <span>Request Carousel Framework ($495)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
