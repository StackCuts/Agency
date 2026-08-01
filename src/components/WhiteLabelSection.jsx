import React from 'react';
import { ShieldCheck, Users, Lock, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function WhiteLabelSection({ onOpenModal }) {
  const highlights = [
    {
      title: '100% Strict NDA Protection',
      desc: 'We operate as your invisible backend production powerhouse. Your client never knows we exist.'
    },
    {
      title: 'Plug-and-Play Specs',
      desc: 'Delivery in Meta Ads Manager ready 1:1 Feed PNGs and 9:16 Reel/Story MP4 formats.'
    },
    {
      title: 'Batch Production SLA',
      desc: 'Scale from 5 to 50 ad packs per week with guaranteed 48-hour delivery SLA.'
    },
    {
      title: 'Agency Volume Pricing',
      desc: 'Wholesale agency rate tiers tailored for high-volume media buyers and growth agencies.'
    }
  ];

  return (
    <section className="py-20 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-gradient-to-r from-[#161C27] via-[#161C27] to-[#0B0F17] border border-[#3B82F6]/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B82F6]/10 blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-xs font-mono text-[#3B82F6]">
                <Users className="w-3.5 h-3.5" />
                <span>FOR B2B AGENCIES & MEDIA BUYERS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
                Need a Reliable <br />
                <span className="text-[#3B82F6]">White-Label Creative Partner?</span>
              </h2>

              <p className="text-base text-[#94A3B8] leading-relaxed max-w-xl">
                Outsource your agency's static split-grid, carousel, and video production to our silent 48-hour engine. Keep 100% client ownership with zero overhead.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {highlights.map((item, idx) => (
                  <div key={idx} className="bg-[#0B0F17]/80 border border-[#2A3447] p-4 rounded-xl space-y-1">
                    <div className="flex items-center gap-2 text-white font-bold text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#3B82F6]" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-[#94A3B8] pl-6">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenModal('White-Label Agency Partnership')}
                  className="btn-shimmer px-8 py-4 rounded-full bg-[#3B82F6] text-white font-bold text-sm hover:bg-[#3B82F6]/90 transition-all shadow-blue-glow flex items-center gap-2 group"
                >
                  <span>Partner as an Agency</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

            {/* Right Badge Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl bg-[#0B0F17] p-6 border border-[#2A3447] space-y-4 shadow-xl font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-[#2A3447]">
                  <span className="text-[#94A3B8] flex items-center gap-1.5">
                    <Lock className="w-4 h-4 text-[#00E599]" /> White-Label Guarantee
                  </span>
                  <span className="text-[#00E599] font-bold">100% NDA</span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between p-2.5 rounded bg-[#161C27] text-slate-300">
                    <span>Batch Capacity:</span>
                    <span className="text-white font-bold">50+ Packs / Wk</span>
                  </div>
                  <div className="flex justify-between p-2.5 rounded bg-[#161C27] text-slate-300">
                    <span>Delivery Protocol:</span>
                    <span className="text-[#00E599] font-bold">Drive / Frame.io</span>
                  </div>
                  <div className="flex justify-between p-2.5 rounded bg-[#161C27] text-slate-300">
                    <span>Revisions:</span>
                    <span className="text-[#3B82F6] font-bold">48H Turnaround</span>
                  </div>
                </div>

                <div className="pt-2 text-[10px] text-center text-[#94A3B8]">
                  🔒 Silent backend production handling high-volume media buyer campaigns.
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
