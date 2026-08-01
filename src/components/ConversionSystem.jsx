import React, { useState } from 'react';
import { Layers, ArrowRight, MousePointerClick, UserCheck, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export default function ConversionSystem() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      tag: 'STEP 1',
      title: 'Thumb-Stopping Meta Ad',
      description: 'High-contrast split-grid or kinetic motion video stops feed scrolling and triggers immediate visual curiosity.',
      badge: 'High CTR Trigger',
      metric: '3.8%+ CTR',
      details: 'Strict visual hierarchy and direct-response contrast framing prevent ad fatigue.'
    },
    {
      id: 2,
      tag: 'STEP 2',
      title: 'Offer-Matched High-Speed Page',
      description: 'User clicks directly into a lightning-fast sub-1s Next.js page where headline & offer visually match the ad creative.',
      badge: 'Zero Bounce Match',
      metric: '< 1s Latency',
      details: 'Message congruence eliminates buying friction and rebuilds instant trust.'
    },
    {
      id: 3,
      tag: 'STEP 3',
      title: 'High-Intent Booked Lead',
      description: 'Streamlined intake form & embedded calendar captures qualified leads with zero scheduling delay.',
      badge: 'Closed-Loop ROI',
      metric: '+45% Conv Rate',
      details: 'Seamless transition turns impression into paid client without leak.'
    }
  ];

  return (
    <section id="system" className="py-24 bg-[#0B0F17] relative border-t border-[#2A3447]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161C27] border border-[#3B82F6]/30 text-xs font-mono text-[#3B82F6]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FULL FUNNEL ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            The Closed-Loop <br className="hidden sm:block" />
            <span className="text-[#3B82F6]">Conversion Architecture</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            "Ad clicks are wasted if your landing page doesn't match the ad's exact promise. We bridge the gap between initial thumb-stop and final conversion."
          </p>
        </div>

        {/* Interactive Flow Diagram Visual */}
        <div className="mt-16 bg-[#161C27] border border-[#2A3447] rounded-2xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative">
          
          {/* Connector Line on Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-[#00E599] via-[#3B82F6] to-[#00E599] -translate-y-6 z-0 opacity-40"></div>

          {/* 3 Step Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
            {steps.map((step) => {
              const isActive = activeStep === step.id;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`rounded-xl p-6 border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#0B0F17] border-[#00E599] shadow-mint-glow scale-105'
                      : 'bg-[#0B0F17]/70 border-[#2A3447] hover:border-[#3B82F6]/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#161C27] text-[#00E599] border border-[#2A3447]">
                      {step.tag}
                    </span>
                    <span className="text-xs font-mono text-[#3B82F6] font-bold">
                      {step.metric}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <div className="pt-4 border-t border-[#2A3447] text-xs font-mono text-slate-300 flex items-center justify-between">
                    <span>{step.details}</span>
                    {step.id < 3 && (
                      <ArrowRight className="w-4 h-4 text-[#00E599] hidden lg:block" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Architecture Guarantee Banner */}
          <div className="mt-8 pt-6 border-t border-[#2A3447] text-center text-xs font-mono text-[#94A3B8] flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 text-[#00E599]" />
            <span>Eliminate offer disconnects & lower CPL across all Meta campaigns.</span>
          </div>

        </div>

      </div>
    </section>
  );
}
