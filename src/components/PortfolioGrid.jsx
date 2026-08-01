import React, { useState } from 'react';
import { Layers, Sparkles, Film, Eye, ArrowUpRight, Check, X, Shield, Zap, Flame } from 'lucide-react';

export default function PortfolioGrid() {
  const [activeTab, setActiveTab] = useState('static');
  const [selectedItem, setSelectedItem] = useState(null);

  const portfolioItems = [
    // Static Split-Grids
    {
      id: 1,
      category: 'static',
      title: 'High-Contrast Dual Angle Split-Grid',
      client: 'B2B SaaS / Ad Tech',
      metric: '+46% CTR Boost',
      hookText: 'Old Way vs. The StackCuts 48H Engine',
      description: 'Split-screen layout leveraging direct-response contrast psychology. Left side triggers pain point recognition; right side delivers high-converting visual solution.',
      specs: '1080x1080 (1:1 Meta Feed PNG)',
      badge: 'Static Split-Grid',
      color: '#00E599',
      imageMock: (
        <div className="w-full h-full bg-[#0B0F17] flex flex-col justify-between p-4 border border-[#2A3447] rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00E599]/20 text-[#00E599] border border-[#00E599]/30">DIRECT-RESPONSE PAIN-SPLIT</span>
            <span className="text-xs font-mono text-[#94A3B8]">1:1 Meta Spec</span>
          </div>
          <div className="grid grid-cols-2 gap-2 my-4">
            <div className="bg-[#161C27] border border-red-500/30 p-3 rounded flex flex-col justify-between">
              <span className="text-[9px] font-mono text-red-400 font-bold">❌ TRADITIONAL AGENCY</span>
              <p className="text-xs text-slate-300 font-bold mt-2">2-Week Delivery & Endless Calls</p>
            </div>
            <div className="bg-gradient-to-br from-[#161C27] to-[#00E599]/20 border border-[#00E599] p-3 rounded flex flex-col justify-between">
              <span className="text-[9px] font-mono text-[#00E599] font-bold">⚡ STACKCUTS SYSTEM</span>
              <p className="text-xs text-white font-extrabold mt-2">48-Hour Async Production</p>
            </div>
          </div>
          <div className="w-full bg-[#00E599] text-[#0B0F17] text-center font-extrabold text-xs py-2 rounded uppercase tracking-wider">
            Fix Ad Fatigue Now ➔
          </div>
        </div>
      )
    },
    {
      id: 2,
      category: 'static',
      title: 'Problem / Solution Feature Matrix Grid',
      client: 'Direct-to-Consumer / MedSpa',
      metric: '-38% Cost Per Lead',
      hookText: 'Why 92% of Meta Ads Get Ignored',
      description: 'Ultra-clean grid layout highlighting immediate visual value props with high contrast typography and clear direct-response visual markers.',
      specs: '1080x1080 (1:1 Meta Feed PNG)',
      badge: 'Static Split-Grid',
      color: '#00E599',
      imageMock: (
        <div className="w-full h-full bg-[#0B0F17] flex flex-col justify-between p-4 border border-[#2A3447] rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#3B82F6]/20 text-[#3B82F6] border border-[#3B82F6]/30">CONVERSION MATRIX</span>
            <span className="text-xs font-mono text-[#94A3B8]">CPL -38%</span>
          </div>
          <div className="space-y-2 my-2">
            <div className="bg-[#161C27] p-2 rounded border border-[#2A3447] flex justify-between items-center text-xs">
              <span className="text-slate-300">Turnaround Speed</span>
              <span className="text-[#00E599] font-bold">48 Hours Fixed</span>
            </div>
            <div className="bg-[#161C27] p-2 rounded border border-[#2A3447] flex justify-between items-center text-xs">
              <span className="text-slate-300">Zoom Friction</span>
              <span className="text-[#00E599] font-bold">Zero Meetings</span>
            </div>
          </div>
          <div className="w-full bg-[#3B82F6] text-white text-center font-bold text-xs py-2 rounded">
            Scale Creative Output
          </div>
        </div>
      )
    },

    // Multi-Frame Carousels
    {
      id: 3,
      category: 'carousel',
      title: '3-Frame Seamless Storytelling Carousel',
      client: 'B2B Agency & Media Buyers',
      metric: '3.8x Swipe Rate',
      hookText: 'Swipe ➔ See The 48H Production Framework',
      description: 'Continuous multi-frame layout where visual elements cross frame boundaries, driving curiosity and maximum swipe-through engagement.',
      specs: '1080x1080 x 3 Frames (Carousel PNG Set)',
      badge: 'Multi-Frame Carousel',
      color: '#3B82F6',
      imageMock: (
        <div className="w-full h-full bg-[#0B0F17] p-3 border border-[#2A3447] rounded-lg flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8]">
            <span className="text-[#3B82F6] font-bold">FRAME 1 of 3</span>
            <span>SWIPE ➔</span>
          </div>
          <div className="flex gap-1.5 my-3">
            <div className="flex-1 bg-[#161C27] border border-[#00E599] p-2 rounded text-[10px]">
              <span className="text-[#00E599] font-bold block mb-1">01. THE HOOK</span>
              <div className="h-1 bg-[#00E599] w-3/4 rounded mb-1"></div>
              <div className="h-1 bg-slate-600 w-1/2 rounded"></div>
            </div>
            <div className="flex-1 bg-[#161C27] border border-[#2A3447] p-2 rounded text-[10px]">
              <span className="text-[#3B82F6] font-bold block mb-1">02. PROOF</span>
              <div className="h-1 bg-[#3B82F6] w-full rounded mb-1"></div>
              <div className="h-1 bg-slate-600 w-2/3 rounded"></div>
            </div>
            <div className="flex-1 bg-[#161C27] border border-[#2A3447] p-2 rounded text-[10px]">
              <span className="text-white font-bold block mb-1">03. OFFER</span>
              <div className="h-1 bg-white w-4/5 rounded mb-1"></div>
            </div>
          </div>
          <div className="text-[10px] text-center text-[#94A3B8] font-mono">
            Optimized for Meta Mobile Swipe Patterns
          </div>
        </div>
      )
    },
    {
      id: 4,
      category: 'carousel',
      title: 'Value Stack Multi-Slide Framework',
      client: 'High-Ticket B2B Service',
      metric: '+54% Lead Intent',
      hookText: 'What Happens When You Eliminate Meeting Fatigue',
      description: 'Educational carousel framework engineered to build authority and warm cold traffic before landing page click.',
      specs: '1080x1080 x 4 Frames (Carousel Set)',
      badge: 'Multi-Frame Carousel',
      color: '#3B82F6',
      imageMock: (
        <div className="w-full h-full bg-[#0B0F17] p-3 border border-[#2A3447] rounded-lg flex flex-col justify-between">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-white font-bold">FRAME STACK</span>
            <span className="text-[#00E599] font-mono">4-Slide Loop</span>
          </div>
          <div className="bg-[#161C27] border border-[#3B82F6]/40 p-3 rounded my-2">
            <div className="text-xs font-bold text-white mb-1">Step-by-Step Direct-Response Loop</div>
            <p className="text-[10px] text-[#94A3B8]">High contrast visual callouts designed for quick scanning in feed.</p>
          </div>
          <div className="flex justify-between text-[10px] text-[#94A3B8] font-mono">
            <span>Slide 1/4</span>
            <span className="text-[#3B82F6]">Swipe for Offer ➔</span>
          </div>
        </div>
      )
    },

    // Motion / Video Assets
    {
      id: 5,
      category: 'video',
      title: 'Thumb-Stopping Motion Kinetic Video Ad',
      client: 'SaaS & E-Commerce',
      metric: '82% 3-Sec Hook Rate',
      hookText: 'Stop Scrolling: The 48-Hour Creative Engine is Live',
      description: 'Fast-paced kinetic typography and high-contrast motion transitions built to grab feed attention in the first 1.5 seconds.',
      specs: '1080x1920 (9:16 Vertical Reel/Story MP4)',
      badge: 'Motion / Video Asset',
      color: '#00E599',
      imageMock: (
        <div className="w-full h-full bg-[#0B0F17] p-3 border border-[#2A3447] rounded-lg flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
              9:16 REEL MOTION
            </span>
            <span className="text-[#00E599] font-bold">HOOK RATE 82%</span>
          </div>
          <div className="my-auto text-center space-y-2 py-4 bg-[#161C27]/80 rounded border border-[#00E599]/40 backdrop-blur">
            <div className="w-10 h-10 rounded-full bg-[#00E599] text-[#0B0F17] flex items-center justify-center mx-auto shadow-mint-glow">
              <Film className="w-5 h-5" />
            </div>
            <div className="text-xs font-extrabold text-white tracking-wide uppercase px-2">
              "STOP SCROLLING: FIX AD FATIGUE IN 48H"
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-[#94A3B8]">
            <span>1080x1920 MP4</span>
            <span className="text-[#00E599]">Meta Reel Ready</span>
          </div>
        </div>
      )
    },
    {
      id: 6,
      category: 'video',
      title: 'Dynamic Product Cut & Split Motion Video',
      client: 'B2B Agency Growth',
      metric: '+65% Conversion Rate',
      hookText: 'How We Deliver Ads 10x Faster Without Meetings',
      description: 'Clean screen recording breakdowns paired with high-impact kinetic subtitle overlays and urgency motion graphics.',
      specs: '1080x1080 & 1080x1920 MP4 Set',
      badge: 'Motion / Video Asset',
      color: '#00E599',
      imageMock: (
        <div className="w-full h-full bg-[#0B0F17] p-3 border border-[#2A3447] rounded-lg flex flex-col justify-between">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-[#3B82F6] font-bold">KINETIC TEXT OVERLAY</span>
            <span className="text-white">48H Production</span>
          </div>
          <div className="bg-gradient-to-r from-[#161C27] to-[#0B0F17] p-4 rounded border border-[#2A3447] my-3 text-center">
            <span className="text-xs font-mono text-[#00E599] block mb-1">⚡ NO ZOOM CALLS</span>
            <div className="text-sm font-black text-white">SUBMIT BRIEF ➔ LAUNCH IN 48H</div>
          </div>
          <div className="text-[10px] text-center text-[#94A3B8] font-mono">
            Includes Audio Sync & Meta Subtitles
          </div>
        </div>
      )
    }
  ];

  const filteredItems = portfolioItems.filter(item => item.category === activeTab);

  return (
    <section id="portfolio" className="py-24 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161C27] border border-[#2A3447] text-xs font-mono text-[#00E599]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DIRECT-RESPONSE CREATIVE SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Engineered for Conversion & <br className="hidden sm:block" />
            <span className="text-[#00E599]">Visual Impact</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            High-contrast visual hierarchy designed to stop thumbs, cut through feed noise, and drive measurable CTR improvements.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex p-1.5 rounded-full bg-[#161C27] border border-[#2A3447] backdrop-blur-md">
            <button
              onClick={() => setActiveTab('static')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'static'
                  ? 'bg-[#00E599] text-[#0B0F17] shadow-mint-glow font-bold'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Static Split-Grids</span>
            </button>

            <button
              onClick={() => setActiveTab('carousel')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'carousel'
                  ? 'bg-[#00E599] text-[#0B0F17] shadow-mint-glow font-bold'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Multi-Frame Carousels</span>
            </button>

            <button
              onClick={() => setActiveTab('video')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'video'
                  ? 'bg-[#00E599] text-[#0B0F17] shadow-mint-glow font-bold'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              <Film className="w-4 h-4" />
              <span>Motion / Video Assets</span>
            </button>
          </div>
        </div>

        {/* Portfolio Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="glass-panel glass-panel-hover rounded-2xl p-6 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Header Tag & Metric */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#2A3447]">
                  <span className="text-xs font-mono text-[#94A3B8] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></span>
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#00E599]/10 text-[#00E599] border border-[#00E599]/30">
                    {item.metric}
                  </span>
                </div>

                {/* Mock Visual Frame */}
                <div className="h-60 rounded-xl overflow-hidden mb-5 transition-transform duration-300 group-hover:scale-[1.02] shadow-inner relative">
                  {item.imageMock}
                  <div className="absolute inset-0 bg-[#0B0F17]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-4 py-2 rounded-full bg-[#00E599] text-[#0B0F17] font-bold text-xs flex items-center gap-2 shadow-lg">
                      <Eye className="w-4 h-4" /> Inspect Creative Breakdown
                    </span>
                  </div>
                </div>

                {/* Item Details */}
                <h3 className="text-xl font-display font-bold text-white group-hover:text-[#00E599] transition-colors flex items-center justify-between">
                  <span>{item.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#94A3B8] group-hover:text-[#00E599] transition-colors" />
                </h3>
                <p className="text-sm text-[#94A3B8] mt-2 line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Specs & Client Category */}
              <div className="mt-6 pt-4 border-t border-[#2A3447]/60 flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                <span>Niche: {item.client}</span>
                <span className="text-slate-400">{item.specs}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Micro-Copy Footer */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm font-mono text-[#94A3B8] bg-[#161C27]/80 border border-[#2A3447] px-6 py-3 rounded-full inline-block">
            ⚡ Built using strict graphic design principles, direct-response psychology, and visual hierarchy.
          </p>
        </div>

      </div>

      {/* Lightbox Preview Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0F17]/90 backdrop-blur-md">
          <div className="bg-[#161C27] border border-[#2A3447] rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#0B0F17] border border-[#2A3447] text-[#94A3B8] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-3 py-1 rounded bg-[#00E599]/10 text-[#00E599] border border-[#00E599]/30">
                {selectedItem.badge}
              </span>
              <span className="text-xs font-mono text-[#94A3B8]">Spec: {selectedItem.specs}</span>
            </div>

            <h3 className="text-2xl font-display font-bold text-white">
              {selectedItem.title}
            </h3>

            <div className="h-64 rounded-xl overflow-hidden border border-[#2A3447]">
              {selectedItem.imageMock}
            </div>

            <div className="space-y-3 text-sm text-[#94A3B8]">
              <div className="bg-[#0B0F17] p-4 rounded-xl border border-[#2A3447]">
                <div className="text-xs font-mono text-[#00E599] mb-1 uppercase tracking-wider">Direct-Response Strategy</div>
                <p className="text-white font-medium">{selectedItem.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="bg-[#0B0F17] p-3 rounded-lg border border-[#2A3447]">
                  <span className="text-[#94A3B8]">Primary Hook:</span>
                  <div className="text-white font-bold mt-1">{selectedItem.hookText}</div>
                </div>
                <div className="bg-[#0B0F17] p-3 rounded-lg border border-[#2A3447]">
                  <span className="text-[#94A3B8]">Measured Result:</span>
                  <div className="text-[#00E599] font-extrabold mt-1">{selectedItem.metric}</div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedItem(null)}
              className="w-full py-3 rounded-full bg-[#00E599] text-[#0B0F17] font-bold text-sm hover:bg-[#00E599]/90 transition-all shadow-mint-glow"
            >
              Close Preview & Request Creative Pack
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
