import React from 'react';
import { FileText, Clock, Rocket, ArrowRight, Zap } from 'lucide-react';

export default function WorkflowSection({ onOpenModal }) {
  const steps = [
    {
      num: '01',
      title: 'Define Scope on Upwork',
      desc: 'Review package options or request a custom proposal. Share brand guidelines and offer links via Upwork chat. No kickoff call needed.',
      icon: FileText,
      color: '#00E599'
    },
    {
      num: '02',
      title: 'Rapid Studio Production',
      desc: 'Our studio engineers your high-contrast split-grids, carousels, or landing page funnels. Delivered in 48H to 5 days based on milestone scope.',
      icon: Clock,
      color: '#3B82F6'
    },
    {
      num: '03',
      title: 'Launch & Scale',
      desc: 'Approve deliverables with 1-click on Upwork. Receive high-resolution Meta-ready PNGs, Next.js code, and direct-response copy docs.',
      icon: Rocket,
      color: '#00E599'
    }
  ];

  return (
    <section id="workflow" className="py-24 bg-[#0B0F17] relative border-t border-[#2A3447]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161C27] border border-[#00E599]/30 text-xs font-mono text-[#00E599]">
            <Zap className="w-3.5 h-3.5" />
            <span>100% ASYNCHRONOUS OPERATING MODEL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Zero Friction. <br className="hidden sm:block" />
            <span className="text-[#00E599]">Pure Execution.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            How we collaborate seamlessly via Upwork to deliver high-converting ad assets and funnels.
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-[#161C27] border border-[#2A3447] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#00E599]/50 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-display font-black text-[#94A3B8]/40 group-hover:text-[#00E599] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#0B0F17] border border-[#2A3447] flex items-center justify-center text-[#00E599] group-hover:border-[#00E599] transition-colors shadow-lg">
                      <Icon className="w-6 h-6" style={{ color: step.color }} />
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#2A3447]/60 flex items-center justify-between text-xs font-mono text-[#00E599]">
                  <span>Async Protocol Active</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenModal && onOpenModal('Discuss Project on Upwork')}
            className="btn-shimmer px-8 py-4 rounded-full bg-[#00E599] text-[#0B0F17] font-bold text-sm hover:bg-[#00E599]/90 transition-all shadow-mint-glow inline-flex items-center gap-2"
          >
            <span>Discuss Project on Upwork</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
