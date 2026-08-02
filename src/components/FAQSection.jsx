import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

export default function FAQSection({ onOpenModal }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'Do we need to schedule a Zoom call to start?',
      a: 'No. We operate asynchronously via Upwork messaging to save calendar friction, though quick milestone alignment chats are always available.'
    },
    {
      q: 'Can we test with 1 Ad Pack before scaling?',
      a: 'Yes! Our $495 Ad Pack is designed as a zero-friction trial with no lock-in contract. You get 2x high-contrast static split-grids and 1x multi-frame carousel ad framework to validate performance on your ad account.'
    },
    {
      q: 'How are revisions handled?',
      a: 'Revisions are handled directly via 1-click visual comments on Drive/Frame.io preview links or Upwork messaging. You get 2 free rounds of revisions included with every pack to ensure perfection.'
    },
    {
      q: 'What formats do we receive?',
      a: 'You receive Meta-ready 1:1 (Feed/Square) high-resolution PNGs, formatted copy docs with recommended ad captions & hooks, and clean Next.js/React code for custom funnels.'
    },
    {
      q: 'What are your delivery timelines?',
      a: 'Ad Creative Packs are delivered within 48 hours. Custom Landing Pages take 3–4 days, and Full Conversion Stacks are deployed within 4–5 business days via Upwork milestones.'
    }
  ];

  return (
    <section id="faq" className="py-20 sm:py-24 bg-[#0B0F17] relative border-t border-[#2A3447]/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161C27] border border-[#3B82F6]/30 text-xs font-mono text-[#3B82F6]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Got Questions? <span className="text-[#3B82F6]">We Have Answers.</span>
          </h2>
          <p className="text-base text-[#94A3B8]">
            Everything you need to know about our Upwork collaboration, deliverables, and timelines.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#161C27] border-[#00E599]/60 shadow-lg'
                    : 'bg-[#161C27]/50 border-[#2A3447] hover:border-[#2A3447]/90'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-white"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#00E599] bg-[#00E599]/10 px-2 py-1 rounded border border-[#00E599]/20 shrink-0">
                      0{idx + 1}
                    </span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#94A3B8] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#00E599]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[#2A3447]/60 text-sm text-[#94A3B8] leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Custom Requirement Box */}
        <div className="mt-12 text-center p-6 sm:p-8 rounded-2xl bg-[#161C27]/60 border border-[#2A3447] max-w-3xl mx-auto space-y-4 shadow-xl">
          <div className="space-y-1.5">
            <h3 className="text-base sm:text-lg font-display font-bold text-white">
              Have a unique requirement or custom agency volume need?
            </h3>
            <p className="text-xs text-[#94A3B8] font-mono">
              We build custom proposals and milestone scopes tailored for high-volume media buyers and brands.
            </p>
          </div>

          <div className="pt-1 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenModal && onOpenModal('Request Custom Upwork Proposal')}
              className="btn-shimmer px-6 py-3.5 rounded-full bg-[#00E599] text-[#0B0F17] font-extrabold text-xs uppercase tracking-wide hover:bg-[#00E599]/90 transition-all shadow-mint-glow flex items-center justify-center gap-2 group w-full sm:w-auto"
            >
              <span>Request Custom Upwork Proposal</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="text-xs text-[#94A3B8] font-mono pt-1">
            Or email us directly at: <a href="mailto:team@stackcuts.com" className="text-[#00E599] font-bold underline hover:text-white ml-1">team@stackcuts.com</a>
          </div>
        </div>

      </div>
    </section>
  );
}
