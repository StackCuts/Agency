import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'Do we need to schedule a Zoom call to start?',
      a: 'No. We operate 100% asynchronously via Upwork, Drive, and Email to save you time. Simply submit your brief using our streamlined 2-minute intake form, and production begins immediately.'
    },
    {
      q: 'Can we test with 1 Ad Pack before scaling?',
      a: 'Yes! Our $495 Ad Pack is designed as a zero-friction trial with no lock-in contract. You get 2x high-contrast static split-grids and 1x multi-frame carousel ad framework to validate performance on your ad account.'
    },
    {
      q: 'How are revisions handled?',
      a: 'Revisions are handled directly via 1-click visual comments on Drive/Frame.io preview links within 48 hours. You get 2 free rounds of revisions included with every pack to ensure perfection.'
    },
    {
      q: 'What formats do we receive?',
      a: 'You receive Meta-ready 1:1 (Feed/Square) and 9:16 (Reels/Stories/Vertical) high-resolution PNGs, MP4s, and formatted doc files with recommended ad captions, hooks, and direct-response copy angles.'
    },
    {
      q: 'How do you guarantee 48-hour turnarounds?',
      a: 'Because we eliminate meeting overhead, our studio focuses purely on graphic design execution, visual hierarchy, and direct-response structure. Production starts within 1 hour of brief intake.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#0B0F17] relative border-t border-[#2A3447]/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161C27] border border-[#3B82F6]/30 text-xs font-mono text-[#3B82F6]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Got Questions? <span className="text-[#3B82F6]">We Have Answers.</span>
          </h2>
          <p className="text-base text-[#94A3B8]">
            Everything you need to know about our 48-hour asynchronous creative studio workflow.
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
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-white"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#00E599] bg-[#00E599]/10 px-2 py-1 rounded border border-[#00E599]/20">
                      0{idx + 1}
                    </span>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#94A3B8] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#00E599]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#2A3447]/60 text-sm text-[#94A3B8] leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Email Support Box */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#161C27]/40 border border-[#2A3447] font-mono text-xs text-[#94A3B8]">
          Have a unique requirement or custom agency volume need? <br />
          Contact our lead strategist directly: <a href="mailto:team@stackcuts.agency" className="text-[#00E599] font-bold underline hover:text-white ml-1">team@stackcuts.agency</a>
        </div>

      </div>
    </section>
  );
}
