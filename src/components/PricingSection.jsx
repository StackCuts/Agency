import React from 'react';
import { Check, Zap, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

export default function PricingSection({ onOpenModal }) {
  const packages = [
    {
      id: 'growth-pack',
      title: 'Ad Creative Growth Pack',
      price: '$495',
      originalPrice: null,
      priceSuffix: 'Flat Rate',
      deliveryTime: '48H Delivery',
      badge: 'POPULAR TRIAL',
      isPopular: true,
      subtext: 'Ideal for fixing ad fatigue on active Meta ad campaigns.',
      bullets: [
        '2x High-Contrast Static Split-Grids',
        '1x Multi-Frame Carousel Ad Framework',
        'Formatted Ad Copies & Captions Included',
        '48-Hour Asynchronous Delivery',
        '2 Free Rounds of Revisions'
      ],
      ctaText: 'Hire on Upwork ($495) →',
      ctaStyle: 'bg-[#00E599] text-[#0B0F17] hover:bg-[#00E599]/90 shadow-mint-glow'
    },
    {
      id: 'full-stack',
      title: 'The Full Authority Stack',
      price: '$895',
      originalPrice: '$1,095',
      savingsBadge: '⚡ SAVE $200 WITH BUNDLE',
      priceSuffix: 'Flat Rate',
      deliveryTime: '4-5 Days Delivery',
      badge: 'BEST VALUE BUNDLE',
      isPopular: false,
      isBestValue: true,
      subtext: 'Complete Ad-to-Landing-Page conversion loop architecture.',
      bullets: [
        'Full Ad Creative Growth Pack (2x Split-Grid + 1x Carousel)',
        'High-Speed Custom Next.js Landing Page',
        'Offer-Matched Copywriting & Visual Layout',
        'Booking Software / Lead Form Integration',
        '4-5 Day Full Loop Delivery Protocol'
      ],
      ctaText: 'Build Stack on Upwork ($895) →',
      ctaStyle: 'bg-[#3B82F6] text-white hover:bg-[#3B82F6]/90 shadow-blue-glow'
    },
    {
      id: 'landing-page',
      title: 'Custom Landing Page Infrastructure',
      price: '$600',
      originalPrice: null,
      priceSuffix: 'Flat Rate',
      deliveryTime: '3-4 Days Delivery',
      badge: 'CONVERSION INFRASTRUCTURE',
      isPopular: false,
      subtext: 'Dedicated conversion infrastructure for high-traffic offers.',
      bullets: [
        'High-Converting Landing Page Design & Setup',
        'Sales Copy Structuring & Visual Asset Alignment',
        'Tracking Pixel & Form Integration',
        '3-4 Day Deployment Protocol',
        'Sub-1 Second Page Load Speed'
      ],
      ctaText: 'Get Funnel on Upwork ($600) →',
      ctaStyle: 'bg-[#161C27] border border-[#2A3447] text-white hover:border-[#00E599]'
    }
  ];

  return (
    <section id="packages" className="py-24 bg-[#0B0F17] relative border-t border-[#2A3447]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161C27] border border-[#00E599]/30 text-xs font-mono text-[#00E599]">
            <Zap className="w-3.5 h-3.5" />
            <span>TRANSPARENT FIXED PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Frictionless Pricing. <br className="hidden sm:block" />
            <span className="text-[#00E599]">Zero Long-Term Contracts.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Test with a single ad creative pack or build the complete closed-loop conversion infrastructure with bundle savings. Secure milestones on Upwork.
          </p>
        </div>

        {/* Pricing Cards Grid (Equal Heights Layout) */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 h-full ${
                pkg.isPopular
                  ? 'bg-[#161C27] border-2 border-[#00E599] shadow-mint-glow scale-105 z-10'
                  : pkg.isBestValue
                  ? 'bg-[#161C27] border-2 border-[#3B82F6] shadow-blue-glow'
                  : 'bg-[#161C27]/70 border border-[#2A3447] hover:border-[#2A3447]/90'
              }`}
            >
              {/* Card Badge */}
              <div className="flex justify-between items-center mb-6">
                <span className={`text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                  pkg.isPopular
                    ? 'bg-[#00E599] text-[#0B0F17]'
                    : pkg.isBestValue
                    ? 'bg-[#3B82F6] text-white'
                    : 'bg-[#2A3447] text-[#94A3B8]'
                }`}>
                  {pkg.badge}
                </span>
                <span className="text-xs font-mono text-[#94A3B8] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#00E599]" /> {pkg.deliveryTime}
                </span>
              </div>

              <div className="flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] mt-2 min-h-[32px]">
                    {pkg.subtext}
                  </p>

                  {/* Price Display */}
                  <div className="my-6 pb-6 border-b border-[#2A3447] flex flex-wrap items-baseline gap-2">
                    {pkg.originalPrice && (
                      <span className="text-lg font-mono text-slate-500 line-through font-bold">
                        {pkg.originalPrice}
                      </span>
                    )}
                    <span className="text-4xl sm:text-5xl font-display font-extrabold text-white">
                      {pkg.price}
                    </span>
                    {pkg.priceSuffix && (
                      <span className="text-xs font-mono text-[#94A3B8] uppercase">
                        / {pkg.priceSuffix}
                      </span>
                    )}

                    {pkg.savingsBadge ? (
                      <span className="w-full mt-2 text-xs text-[#00E599] font-mono bg-[#00E599]/10 px-3 py-1 rounded-full border border-[#00E599]/30 font-bold inline-block text-center">
                        {pkg.savingsBadge}
                      </span>
                    ) : (
                      <span className="text-xs text-[#00E599] font-mono ml-auto bg-[#00E599]/10 px-2 py-1 rounded border border-[#00E599]/20">
                        Fixed Flat Rate
                      </span>
                    )}
                  </div>

                  {/* Bullet Points */}
                  <div className="space-y-3 mb-8">
                    {pkg.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                        <div className="w-5 h-5 rounded-full bg-[#00E599]/10 border border-[#00E599]/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-[#00E599]" />
                        </div>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action CTA Button */}
              <button
                onClick={() => {
                  if (onOpenModal) {
                    onOpenModal(pkg.ctaText);
                  }
                }}
                className={`w-full py-4 rounded-full font-bold text-sm btn-shimmer transition-all flex items-center justify-center gap-2 group ${pkg.ctaStyle}`}
              >
                <span>{pkg.ctaText}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Guarantees bar */}
        <div className="mt-12 p-6 rounded-2xl bg-[#161C27]/60 border border-[#2A3447] flex flex-wrap items-center justify-around gap-6 text-xs sm:text-sm text-[#94A3B8] font-mono">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#00E599]" />
            <span>100% Satisfaction & 2 Revision Rounds</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#3B82F6]" />
            <span>Meta Ads Manager Native Specs</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#00E599]" />
            <span>Upwork Escrow Milestone Protection</span>
          </div>
        </div>

      </div>
    </section>
  );
}
