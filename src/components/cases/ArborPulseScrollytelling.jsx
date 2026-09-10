import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  CheckCircle2, 
  ExternalLink, 
  Layers, 
  Copy, 
  Check, 
  Search, 
  Sparkles, 
  ShieldCheck, 
  Droplets, 
  TrendingUp, 
  AlertTriangle, 
  Zap, 
  Cpu, 
  Eye, 
  Lock, 
  Compass,
  FileText,
  ChevronLeft,
  ChevronRight,
  Sliders,
  Flame,
  Scale,
  Smartphone,
  Code2,
  Share2,
  Maximize2,
  CheckCheck
} from 'lucide-react';

export default function ArborPulseScrollytelling({ onBack, onOpenModal }) {
  const [activePhase, setActivePhase] = useState('phase1');
  const [activeVocTab, setActiveVocTab] = useState('leak');
  const [activeAngleTab, setActiveAngleTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [compareMode, setCompareMode] = useState('new'); // 'old' | 'new'

  // Phase 03 Ad Studio State
  const [activeStudioTab, setActiveStudioTab] = useState('static'); // 'static' | 'carousel'
  const [selectedStaticIdx, setSelectedStaticIdx] = useState(0);
  const [staticRatio, setStaticRatio] = useState('4x5'); // '4x5' | '1x1'
  const [selectedCarouselIdx, setSelectedCarouselIdx] = useState(0);
  const [carouselSlideIdx, setCarouselSlideIdx] = useState(0);
  const [studioViewMode, setStudioViewMode] = useState('interactive'); // 'interactive' | 'code'
  const [adCopyCopied, setAdCopyCopied] = useState(false);

  // Scroll spy to update active navigation pill
  useEffect(() => {
    const handleScroll = () => {
      const phases = ['hero', 'phase1', 'phase2', 'phase3', 'phase4'];
      const scrollPos = window.scrollY + 200;

      for (const p of phases) {
        const el = document.getElementById(p);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActivePhase(p);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText('StackCuts');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  // VoC Quotes Dataset
  const vocQuotes = {
    leak: {
      source: 'Reddit: r/BackyardOrchard (Upvoted 142 times)',
      tag: 'Product Failure Friction',
      quote: 'I spent $45 on two cheap green PVC tree bags from Amazon. Within 3 weeks under the Texas sun, the seams split open, algae clogged the pinholes, and the water rushed out in 15 minutes instead of a slow drip. Completely useless.',
      takeaway: 'Buyers don\'t want "another cheap water bag." They want heavy-duty puncture-proof longevity and non-clogging emitter channels.'
    },
    evap: {
      source: 'Amazon 1-Star Review Analysis (n=380)',
      tag: 'Biological Knowledge Gap',
      quote: 'My newly planted Japanese Maple died despite me running the garden hose every single evening. The nursery owner told me the top 2 inches were muddy but the taproots 14 inches below were bone dry and baked.',
      takeaway: 'People assume surface watering works. The high-converting angle must educate on the 40°C Topsoil Evaporation Trap vs Deep Taproot Drip.'
    },
    asset: {
      source: 'Suburban Homeowner Grower Forum',
      tag: 'Economic Loss Aversion',
      quote: 'We planted 8 mature privacy arborvitaes ($3,200 total investment). Losing just two to July drought would cost $800 to replace plus labor. A $35 automated slow-release bag is cheap insurance.',
      takeaway: 'Frame ArborPulse not as a gardening gadget, but as an $800+ tree asset preservation policy.'
    }
  };

  // 3 Strategic Angles
  const angles = [
    {
      id: 0,
      badge: 'Angle 01 // Scientific Mechanism',
      title: 'The 40°C Topsoil Evaporation Trap',
      avatar: 'The Precision Gardener & Hobbyist',
      avatarDesc: 'Values botany, soil depth metrics, and high-efficiency water conservation.',
      trigger: 'Engineering Certainty & Biological Logic',
      headline: '"Why 78% of Hose Water Evaporates Before Ever Reaching the Taproot."',
      strategy: 'Demolishes the illusion that spraying a hose for 5 minutes hydrates a young tree. Uses root cross-section diagrams to prove slow-release subsurface saturation.',
      color: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10'
    },
    {
      id: 1,
      badge: 'Angle 02 // Financial Loss Aversion',
      title: 'The $800 Drought Insurance Policy',
      avatar: 'The Suburban Homeowner',
      avatarDesc: 'Invested thousands into mature landscaping, ornamental shrubs, and boundary trees.',
      trigger: 'Fear of Capital Loss & Wasted Investment',
      headline: '"You Spent $800 on Ornamental Oaks. Don\'t Let a 3-Day Heatwave Kill Your Investment."',
      strategy: 'Reframes a $39 drip bag as zero-risk insurance. Makes the cost of inaction ($800 dead tree removal & replanting) dwarf the cost of the product.',
      color: 'border-amber-500/40 text-amber-400 bg-amber-500/10'
    },
    {
      id: 2,
      badge: 'Angle 03 // Disgust with Commodity Failure',
      title: 'Tired of Green PVC Bags Splitting?',
      avatar: 'The Frustrated Repeat Buyer',
      avatarDesc: 'Previously bought generic green plastic bags from Home Depot/Amazon that clogged with algae.',
      trigger: 'Contrast vs Cheap Competitors',
      headline: '"The Tree Bag Engineered to Survive 5 Years of Intense UV Without Algae or Splitting."',
      strategy: 'Attacks the #1 competitor pain point: thin PVC seams bursting and micro-holes clogging with slime. Highlights 900D ripstop UV-poly coated durability.',
      color: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10'
    }
  ];

  const handleCopyAdText = (text) => {
    navigator.clipboard.writeText(text);
    setAdCopyCopied(true);
    setTimeout(() => setAdCopyCopied(false), 2200);
  };

  // Static Ads Data Suite (1:1 and 4:5 Specs)
  const staticAdsData = [
    {
      id: 'static-01',
      badge: 'Ad 01 // Heatwave Defense',
      title: '45°C Heatwave Defense & Evaporation Trap',
      funnel: 'Top of Funnel (Cold Traffic / Scroll-Stopping)',
      hook: 'Can your garden hose survive a 45°C Australian heatwave?',
      holdRate: '42.4% (Top 1% Benchmark)',
      ctr: '3.18%',
      roas: '4.2x ROAS',
      ratio4x5: '/arborpulse/static/Ad_01_Heatwave_4x5_1080x1350.png',
      ratio1x1: '/arborpulse/static/Ad_01_Heatwave_1x1_1080x1080.png',
      liveHtml4x5: '/arborpulse/static/ad_01_4x5.html',
      liveHtml1x1: '/arborpulse/static/ad_01_1x1.html',
      psychology: 'Loss Aversion & Problem Agitation. Gardeners already feel guilty about scorched trees; this ad reveals that hose watering accelerates the burn through surface evaporation.',
      primaryText: `When the Adelaide Hills temperature hit 45°C, David thought soaking his new citrus saplings with the garden hose every evening would save them.

Yet within 48 hours, the leaves curled and scorched.

The hidden truth: 70% of surface hose water vaporizes before reaching 5cm deep. Delicate taproots 30cm underground stay bone-dry.

ArborPulse™ 75L delivers 10 continuous hours of sub-soil slow-drip hydration directly to taproots with 0% evaporation.

🛡️ 100% Tree Survival Guaranteed.
🔥 50% OFF 3-Pack Summer Bundle Today!`,
      headline: 'How to Stop Tree Loss in 45°C Heat (Shop 50% Off)',
      description: '⭐⭐⭐⭐⭐ 12,400+ Trees Protected • 30-Day Guarantee',
      cta: 'Shop Now'
    },
    {
      id: 'static-02',
      badge: 'Ad 02 // Us vs. Them Battle',
      title: 'Surface Hose Puddling vs. Sub-Soil Saturation',
      funnel: 'Middle of Funnel (Consideration / Comparative Proof)',
      hook: 'Surface Hose Runoff vs Deep Root Drip Science',
      holdRate: '39.6%',
      ctr: '3.45%',
      roas: '4.8x ROAS',
      ratio4x5: '/arborpulse/static/Ad_02_Us_vs_Them_4x5_1080x1350.png',
      ratio1x1: '/arborpulse/static/Ad_02_Us_vs_Them_1x1_1080x1080.png',
      liveHtml4x5: '/arborpulse/static/ad_01_4x5.html',
      liveHtml1x1: '/arborpulse/static/ad_01_1x1.html',
      psychology: 'Cognitive Comparison Matrix. Disassembles the competition with 4 hard metrics: water loss, daily labor, root penetration depth, and tree survival rate.',
      primaryText: `Garden Hose vs. ArborPulse™ 75L:

❌ Garden Hose:
• 70% Water Lost to Evaporation
• 45 Mins Daily Labor Dragging Hose
• Top 5cm Only (Roots Starve)
• 42% Summer Survival Rate

🏆 ArborPulse™ 75L System:
• 0% Evaporation (Direct Root Emitters)
• 60 Seconds Refill Once a Week
• 30cm Deep Taproot Saturation
• 99.4% Verified Tree Survival Rate

Protect your tree investment for just $1.20 / month.`,
      headline: 'ArborPulse™ vs Hose: See the 5-Point Battle Table ➔',
      description: '99.4% Verified Tree Survival Rate • Free Rapid Nozzle',
      cta: 'Shop Now'
    },
    {
      id: 'static-03',
      badge: 'Ad 03 // 5-Star Social Proof & Offer',
      title: '12,400+ Trees Saved & 50% Off Bundle Stack',
      funnel: 'Bottom of Funnel (Conversion / Retargeting)',
      hook: 'Over 12,400+ Aussie Trees Protected This Summer',
      holdRate: '36.2%',
      ctr: '4.12%',
      roas: '5.4x ROAS',
      ratio4x5: '/arborpulse/static/Ad_03_Social_Proof_4x5_1080x1350.png',
      ratio1x1: '/arborpulse/static/Ad_03_Social_Proof_1x1_1080x1080.png',
      liveHtml4x5: '/arborpulse/static/ad_01_4x5.html',
      liveHtml1x1: '/arborpulse/static/ad_01_1x1.html',
      psychology: 'Risk-Reversal & Grand Offer. Combines high-density social proof (4.9/5 stars, 3,400+ reviews) with a 50% discount and free rapid hose nozzle gift.',
      primaryText: `Over 12,400+ Australian gardeners rely on ArborPulse™ to keep their fruit trees and saplings alive through 40°C+ heatwaves.

No digging. No plumbing. Zero daily hose dragging.

🔥 LIMITED SUMMER DEAL:
• 50% OFF 3x ArborPulse™ 75L Pack ($74.50, was $149)
• FREE Rapid Hose Fit Nozzle ($19.95 Value)
• FREE Express Australia-Wide Shipping
• 30-Day 100% Tree Survival Money-Back Guarantee

👉 Tap Shop Now before summer stock runs out!`,
      headline: '3x Tree Protection Bundle: 50% OFF Today',
      description: 'Free Rapid Hose Fit Nozzle + Free Australia-Wide Shipping',
      cta: 'Order Now'
    }
  ];

  // Master Carousels Data Suite (3 Complete Suites // 17 Total Slides)
  const carouselsData = [
    {
      id: 'carousel-01',
      badge: 'Carousel 01 // 7 Slides',
      title: 'The 45°C Heatwave Tragedy (Swipe Story)',
      funnel: 'Top of Funnel (High Engagement / Narrative Arc)',
      framework: 'Entering the Frame (3-Act Emotional Story)',
      avgSwipeRate: '68.4% Completion',
      cpmSavings: '43% vs Static Single Ad',
      folder: 'carousel_01',
      slides: [
        {
          num: '01/07',
          role: 'The Hook (28mm Wide)',
          title: 'David thought his garden was dialed in...',
          desc: '3 new citrus saplings planted in sunlit soil. High hopes for a bountiful harvest.',
          img: '/arborpulse/carousel_01/Carousel_01_Cinematic_slide_01.png',
          html: '/arborpulse/carousel_01/slide_01.html',
          keyStat: 'Establishes instant emotional connection & high stakes.'
        },
        {
          num: '02/07',
          role: 'The Friction (85mm Macro)',
          title: 'Until a brutal 45°C heatwave hit without warning.',
          desc: 'Scorched yellowing leaves, cracked soil crust. Tree survival under threat.',
          img: '/arborpulse/carousel_01/Carousel_01_Cinematic_slide_02.png',
          html: '/arborpulse/carousel_01/slide_02.html',
          keyStat: 'Visual crisis triggers empathy and curiosity to swipe.'
        },
        {
          num: '03/07',
          role: 'The Agitation (POV Hose)',
          title: 'Even 45 mins of daily hose watering was evaporating in 2 hours.',
          desc: 'Muddy puddles on top, but the deep root zone stayed bone dry.',
          img: '/arborpulse/carousel_01/Carousel_01_Cinematic_slide_03.png',
          html: '/arborpulse/carousel_01/slide_03.html',
          keyStat: 'Validates the user’s failed past effort.'
        },
        {
          num: '04/07',
          role: 'The Science Shock (Cross-Section)',
          title: 'The hidden truth: 70% of hose water never reaches taproots.',
          desc: 'Subterranean cross-section reveals how surface watering starves taproots 30cm deep.',
          img: '/arborpulse/carousel_01/Carousel_01_Cinematic_slide_04.png',
          html: '/arborpulse/carousel_01/slide_04.html',
          keyStat: 'The educational aha! moment that eliminates price resistance.'
        },
        {
          num: '05/07',
          role: 'The Discovery (Dutch Tilt)',
          title: 'That’s when he discovered targeted sub-soil root hydration.',
          desc: 'An arborist consultation reveals the power of continuous micro-drip saturation.',
          img: '/arborpulse/carousel_01/Carousel_01_Cinematic_slide_05.png',
          html: '/arborpulse/carousel_01/slide_05.html',
          keyStat: 'Authority bridge connecting problem to new vehicle.'
        },
        {
          num: '06/07',
          role: 'Product Reveal (50mm Low Angle)',
          title: 'Meet ArborPulse™: 10-Hour slow-drip hydration.',
          desc: '75L self-contained donut ring releasing water at 0.15L/min directly to roots.',
          img: '/arborpulse/carousel_01/Carousel_01_Cinematic_slide_06.png',
          html: '/arborpulse/carousel_01/slide_06.html',
          keyStat: 'Hardware demonstration with UV50+ heat shielding specs.'
        },
        {
          num: '07/07',
          role: 'Transformation & CTA (Eye Level)',
          title: '14 Days later: 100% Tree Recovery & 50% Off Bundle.',
          desc: 'Lush green thriving citrus tree with vibrant foliage + 30-day money back guarantee.',
          img: '/arborpulse/carousel_01/Carousel_01_Cinematic_slide_07.png',
          html: '/arborpulse/carousel_01/slide_07.html',
          keyStat: 'Final swipe payoff funnels high-intent traffic to Shopify PDP.'
        }
      ],
      primaryText: `Swipe through to see how David saved his dying citrus orchard in 45°C Adelaide heat ➔

He spent $850 on new saplings, but daily hose watering was accidentally killing them. Here's what happened ➔

👉 Swipe through all 7 slides above to see the full transformation!

🏷️ Summer Bundle Special: 50% OFF 3-Pack + Free Rapid Nozzle & Free AU Shipping today!`,
      headline: "Swipe to See David's 14-Day Tree Recovery ➔",
      cta: 'Shop Now'
    },
    {
      id: 'carousel-02',
      badge: 'Carousel 02 // 5 Slides',
      title: 'Panoramic Mechanism & Us vs Them Battle',
      funnel: 'Middle of Funnel (Mechanism & Hard Comparative Proof)',
      framework: 'Panoramic Seam Continuity + 5-Point Battle Grid',
      avgSwipeRate: '74.2% Completion',
      cpmSavings: '49% vs Static Single Ad',
      folder: 'carousel_02',
      slides: [
        {
          num: '01/05',
          role: 'The Shock Data Hook',
          title: 'Why 83% of young trees die in summer (Even when watered daily).',
          desc: 'The shocking reality of surface water evaporation and root desiccation in 35°C+ heat.',
          img: '/arborpulse/carousel_02/Carousel_02_Mechanism_slide_01.png',
          html: '/arborpulse/carousel_02/slide_01.html',
          keyStat: 'Data hook immediately reframes watering as an engineering problem.'
        },
        {
          num: '02/05',
          role: 'The 3 Fatal Flaws',
          title: 'The 3 Fatal Flaws of Surface Hose Watering.',
          desc: '1. 70% Evaporation Trap | 2. Shallow Root Scorch | 3. Muddy Crusting that suffocates oxygen.',
          img: '/arborpulse/carousel_02/Carousel_02_Mechanism_slide_02.png',
          html: '/arborpulse/carousel_02/slide_02.html',
          keyStat: 'Deconstructs the competitor and creates pain.'
        },
        {
          num: '03/05',
          role: 'Sub-Soil Physics',
          title: 'Sub-Soil Physics: How ArborPulse™ Hydrates 30cm Roots.',
          desc: '75 Litres at 0.15L/min calibrated flow over 8–10 continuous hours under a UV50+ thermal shield.',
          img: '/arborpulse/carousel_02/Carousel_02_Mechanism_slide_03.png',
          html: '/arborpulse/carousel_02/slide_03.html',
          keyStat: 'Seamless continuous soil horizon bridges directly into Slide 4.'
        },
        {
          num: '04/05',
          role: 'The 5-Point Battle Table',
          title: 'Garden Hose vs Sprinklers vs ArborPulse™ 75L.',
          desc: 'Zero water loss, 60s weekly labor, 30cm deep roots, and 99.4% verified tree survival rate.',
          img: '/arborpulse/carousel_02/Carousel_02_Mechanism_slide_04.png',
          html: '/arborpulse/carousel_02/slide_04.html',
          keyStat: 'Direct comparative table closes analytical buyer objections.'
        },
        {
          num: '05/05',
          role: 'Economic ROI & Offer',
          title: '$1.20 / Month Tree Insurance vs $250 Replacement.',
          desc: '50% OFF 3-Pack Summer Bundle ($74.50, was $149) + Free Rapid Nozzle & Free AU Shipping.',
          img: '/arborpulse/carousel_02/Carousel_02_Mechanism_slide_05.png',
          html: '/arborpulse/carousel_02/slide_05.html',
          keyStat: 'Clear financial justification makes purchasing a no-brainer.'
        }
      ],
      primaryText: `Why do 83% of newly planted trees in Australia die during their first summer? (Swipe ➔)

It's not lack of water. It's soil physics. Surface watering evaporates before penetrating 5cm deep.

Swipe through the 5-point benchmark table to see why 12,400+ trees are protected by ArborPulse™.`,
      headline: 'ArborPulse™ vs Hose: See the 5-Point Battle Table ➔',
      cta: 'Shop Now'
    },
    {
      id: 'carousel-03',
      badge: 'Carousel 03 // 5 Slides',
      title: '60-Second Set & Forget + Social Proof',
      funnel: 'Bottom of Funnel (Friction Elimination & Conversion)',
      framework: '3-Step Frictionless How-To + Verified Review Wall',
      avgSwipeRate: '81.1% Completion',
      cpmSavings: '54% vs Static Single Ad',
      folder: 'carousel_03',
      slides: [
        {
          num: '01/05',
          role: 'Frictionless Hook',
          title: 'How to protect young trees in under 60 seconds.',
          desc: 'No digging. No tools. No plumbing. Just pure sub-soil hydration on autopilot.',
          img: '/arborpulse/carousel_03/Carousel_03_HowTo_slide_01.png',
          html: '/arborpulse/carousel_03/slide_01.html',
          keyStat: 'Attracts busy homeowners seeking maximum convenience.'
        },
        {
          num: '02/05',
          role: 'Step 1: Wrap (15 Seconds)',
          title: 'Step 1: Wrap the flat collar around the trunk.',
          desc: 'Heavy-duty UV ripstop collar effortlessly fits saplings 2cm to 20cm diameter.',
          img: '/arborpulse/carousel_03/Carousel_03_HowTo_slide_02.png',
          html: '/arborpulse/carousel_03/slide_02.html',
          keyStat: 'Proves simplicity with instant visual clarity.'
        },
        {
          num: '03/05',
          role: 'Step 2: Fill (45 Seconds)',
          title: 'Step 2: Fill with 75L water from your garden hose.',
          desc: 'Wide-mouth rapid fill valve accepts standard Aussie hose fittings with zero splashing.',
          img: '/arborpulse/carousel_03/Carousel_03_HowTo_slide_03.png',
          html: '/arborpulse/carousel_03/slide_03.html',
          keyStat: 'Shows ergonomic ease of use.'
        },
        {
          num: '04/05',
          role: 'Step 3: Relax (7 Days)',
          title: 'Step 3: Walk away. 10 hours of deep root soaking.',
          desc: 'Self-regulated emitter valves deliver calibrated hydration for 7 full days of hands-off freedom.',
          img: '/arborpulse/carousel_03/Carousel_03_HowTo_slide_04.png',
          html: '/arborpulse/carousel_03/slide_04.html',
          keyStat: 'Freedom payoff: no more daily hose dragging in scorching heat.'
        },
        {
          num: '05/05',
          role: 'Review Wall & Grand Offer',
          title: '⭐⭐⭐⭐⭐ 4.9/5 by 3,400+ Gardeners • 50% Off Bundle.',
          desc: 'Get 3x ArborPulse™ 75L Rings for 50% OFF ($74.50) + Free Rapid Nozzle & 30-Day Guarantee.',
          img: '/arborpulse/carousel_03/Carousel_03_HowTo_slide_05.png',
          html: '/arborpulse/carousel_03/slide_05.html',
          keyStat: 'High-density social proof converts fence-sitters on retargeting.'
        }
      ],
      primaryText: `How to protect your young fruit trees from 45°C heat in under 60 seconds (Swipe to see ➔)

No digging. No tools. No plumbing. Here's how to setup 10 hours of root soaking in 60s:

1️⃣ Wrap (15s)
2️⃣ Fill (45s)
3️⃣ Relax for 7 days autopilot

👉 Swipe through all 5 slides & Tap Shop Now to claim your 50% Off bundle!`,
      headline: '60-Second Tree Setup: 3 Easy Steps (Swipe ➔)',
      cta: 'Shop Now'
    }
  ];

  const currentStatic = staticAdsData[selectedStaticIdx];
  const currentCarousel = carouselsData[selectedCarouselIdx];
  const currentSlide = currentCarousel.slides[carouselSlideIdx];

  return (
    <div className="relative min-h-screen bg-[#070A0F] text-[#F8FAFC] selection:bg-[#00E599] selection:text-[#0B0F17] font-sans antialiased overflow-x-hidden">
      
      {/* Ambient Radial Mesh Lighting */}
      <div className="fixed top-0 left-1/4 w-[900px] h-[500px] bg-emerald-500/5 blur-[180px] pointer-events-none rounded-full" />
      <div className="fixed bottom-0 right-1/4 w-[700px] h-[500px] bg-blue-500/5 blur-[180px] pointer-events-none rounded-full" />

      {/* ================= STICKY EDITORIAL TOP BAR ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#070A0F]/85 backdrop-blur-xl border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Back to Hub Button */}
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-all shadow-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-400 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-xs">StackCuts™ Agency</span>
          </button>

          {/* Phase Quick-Jumps (Desktop) */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-[#0F1522] border border-white/10">
            <button
              onClick={() => scrollTo('phase1')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                activePhase === 'phase1' 
                  ? 'bg-blue-500 text-white shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              01 // Research
            </button>
            <button
              onClick={() => scrollTo('phase2')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                activePhase === 'phase2' 
                  ? 'bg-purple-500 text-white shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              02 // Angles
            </button>
            <button
              onClick={() => scrollTo('phase3')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                activePhase === 'phase3' 
                  ? 'bg-emerald-500 text-black shadow-md font-extrabold' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              03 // Creatives
            </button>
            <button
              onClick={() => scrollTo('phase4')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                activePhase === 'phase4' 
                  ? 'bg-amber-500 text-black shadow-md font-extrabold' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              04 // Shopify PDP
            </button>
          </nav>

          {/* Hire / Consult CTA */}
          <button
            onClick={() => onOpenModal && onOpenModal('ArborPulse Case Study Inquiry')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-black font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span>Book Strategy Audit</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

        </div>
      </header>

      {/* Main Content Container */}
      <main className="pt-24 sm:pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 sm:space-y-36">

        {/* ================= HERO STAGE ================= */}
        <section id="hero" className="relative pt-6 sm:pt-12 pb-8 border-b border-white/10 space-y-8 text-center flex flex-col items-center">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>CASE STUDY // FULL-FUNNEL DTC CONVERSION ENGINE</span>
          </div>

          {/* Main Title in Cabinet Grotesk */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight leading-[1.08] text-white">
              From Commodity Tree Bag To A <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                High-Converting DTC Machine.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
              How we used forensic competitor teardowns, Reddit VoC mining, and Meta Andromeda AI alignment to build a category-defining DTC brand for <strong>ArborPulse™</strong>.
            </p>

            {/* Scope & Architecture Breadcrumb Pills */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono text-slate-400">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">🌿 Brand: ArborPulse™</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">🎯 Focus: Andromeda Meta AI + Shopify PDP</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">💰 Retainer Scope: $10k Architecture</span>
            </div>
          </div>

          {/* 4 Pillar Badges / Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4 font-mono text-xs w-full text-left">
            
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
              <span className="text-slate-400 uppercase text-[10px] tracking-wider">Root Problem</span>
              <div className="text-red-400 font-bold text-sm sm:text-base">120-Day Ad Fatigue</div>
              <p className="text-slate-400 text-[11px] leading-tight">Commodity 20% OFF PVC ads bleeding CPMs</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
              <span className="text-slate-400 uppercase text-[10px] tracking-wider">Algorithm Shift</span>
              <div className="text-blue-400 font-bold text-sm sm:text-base">Andromeda AI Engine</div>
              <p className="text-slate-400 text-[11px] leading-tight">Broad targeting fed by 3 diverse psychological hooks</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
              <span className="text-slate-400 uppercase text-[10px] tracking-wider">Creative Format</span>
              <div className="text-emerald-400 font-bold text-sm sm:text-base">High-Contrast Split-Grid</div>
              <p className="text-slate-400 text-[11px] leading-tight">Proven static ads stopping thumb-scroll in 0.4s</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
              <span className="text-slate-400 uppercase text-[10px] tracking-wider">Conversion Engine</span>
              <div className="text-amber-400 font-bold text-sm sm:text-base">Live Shopify PDP Demo</div>
              <p className="text-slate-400 text-[11px] leading-tight">Tiered bundle pricing with sub-1s load speed</p>
            </div>

          </div>

        </section>


        {/* ================= PHASE 01: FORENSIC RESEARCH & AUDIT ================= */}
        <section id="phase1" className="scroll-mt-28 space-y-10">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 font-bold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Phase 01 // Research & Market Teardown
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                Customer Friction & Competitor Blindspots
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md font-sans">
              Forensic intelligence mined across the Meta Ad Library, 14,000+ Reddit grower reviews, and horticultural physics before designing a single pixel.
            </p>
          </div>

          {/* 3-Pillar Methodology Pill Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="p-4 rounded-2xl bg-[#0F1522] border border-blue-500/30 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-400">
                <Search className="w-4 h-4" />
                <span>Pillar 01 // Meta Ad Library</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Audited 120+ day active competitor ads. Discovered everyone running the identical generic "Summer Sale - 20% OFF" promotion with zero problem education.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0F1522] border border-orange-500/30 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-400">
                <Flame className="w-4 h-4" />
                <span>Pillar 02 // Voice of Customer (VoC)</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Scraped r/BackyardOrchard and 380+ 1★ Amazon reviews. Isolated the true pain: PVC bags splitting in UV sun and pinholes clogging with green algae.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0F1522] border border-emerald-500/30 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400">
                <Droplets className="w-4 h-4" />
                <span>Pillar 03 // Soil Science Physics</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                40°C summer topsoil causes rapid surface evaporation. Surface hose watering never reaches the taproot 14 inches below, causing slow root rot.
              </p>
            </div>

          </div>

          {/* Andromeda AI Algorithm Alignment Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-purple-950/40 border border-blue-500/30 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center shrink-0 text-blue-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="space-y-1 flex-1 text-xs sm:text-sm">
              <span className="font-mono font-bold text-blue-300 uppercase tracking-wider text-[11px]">
                2026 Meta Algorithm Alignment (Andromeda AI Retrieval)
              </span>
              <p className="text-slate-200 leading-relaxed">
                Modern Meta ads succeed through <strong>creative diversification</strong>, not media buying tricks. By feeding the algorithm 3 completely different psychological concepts (Biology, Economics, and Build Quality), we allow Andromeda to bid on 3 non-overlapping buyer groups at the lowest possible CPM.
              </p>
            </div>
          </div>

          {/* Asymmetric Split: The Forensic Ad Library Teardown & Live VoC Mining */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT: Interactive Ad Library Wireframe Vector Teardown */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-2 text-red-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
                  Competitor Ad Diagnostic Wireframe
                </span>
                <span>Active 120+ Days • Meta Library</span>
              </div>

              {/* Vector SVG Ad Breakdown */}
              <div className="p-5 rounded-2xl bg-[#0D121D] border border-red-500/30 space-y-4 shadow-2xl">
                
                {/* Flawed Ad Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
                  <span className="text-slate-400">Sponsored • 1:1 Square</span>
                  <span className="text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20 font-bold">
                    ⚠️ Fatal Flaw: Commodity Trap
                  </span>
                </div>

                {/* Bad Headline */}
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-center">
                  <span className="font-mono text-xs font-extrabold text-red-300 tracking-wider">
                    "SUMMER SALE: 20% OFF PVC TREE WATERING BAG"
                  </span>
                  <p className="text-[11px] text-red-400/80 mt-1 font-sans">
                    Zero curiosity. Zero hook. Fails to explain WHY someone needs this over a free garden hose.
                  </p>
                </div>

                {/* Interactive SVG Diagram Illustrating the Soil Physics Failure */}
                <div className="bg-[#080B12] rounded-xl p-4 border border-white/5 relative overflow-hidden">
                  <svg viewBox="0 0 400 130" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Topsoil surface */}
                    <line x1="10" y1="50" x2="390" y2="50" stroke="#64748b" strokeWidth="2" strokeDasharray="4 3" />
                    <text x="15" y="44" fill="#94a3b8" fontSize="9" fontFamily="monospace" fontWeight="700">
                      TOPSOIL SURFACE (40°C HEAT)
                    </text>

                    {/* Evaporation waves */}
                    <path d="M 80 40 Q 90 25 100 40 T 120 40" stroke="#f87171" strokeWidth="1.5" strokeDasharray="2 2" />
                    <path d="M 280 40 Q 290 25 300 40 T 320 40" stroke="#f87171" strokeWidth="1.5" strokeDasharray="2 2" />
                    <text x="200" y="25" textAnchor="middle" fill="#f87171" fontSize="9" fontFamily="monospace" fontWeight="bold">
                      78% WATER EVAPORATES RAPIDLY
                    </text>

                    {/* Generic Donut PVC Bag */}
                    <ellipse cx="200" cy="50" rx="70" ry="14" fill="rgba(239, 68, 68, 0.15)" stroke="#ef4444" strokeWidth="2" />
                    <text x="200" y="54" textAnchor="middle" fill="#fca5a5" fontSize="9" fontFamily="monospace" fontWeight="bold">
                      GENERIC PVC RING (CLOGS & SPLITS)
                    </text>

                    {/* Dry Deep Taproot */}
                    <path d="M 200 64 L 200 115 M 200 85 L 175 105 M 200 95 L 225 110" stroke="#475569" strokeWidth="2" />
                    <rect x="140" y="105" width="120" height="18" rx="4" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="1" />
                    <text x="200" y="117" textAnchor="middle" fill="#fca5a5" fontSize="8" fontFamily="monospace" fontWeight="bold">
                      ROOT ZONE BONE DRY (ROOT ROT)
                    </text>
                  </svg>
                </div>

                <div className="text-[11px] font-mono text-slate-400 bg-white/[0.02] p-2.5 rounded-lg border border-white/5 flex items-center justify-between">
                  <span>Audited by StackCuts™ Forensic Lab</span>
                  <span className="text-red-400 font-bold">CTR: 0.62% (Fatigued)</span>
                </div>

              </div>
            </div>

            {/* RIGHT: Voice of Customer (VoC) Mining Matrix */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-2 text-emerald-400 font-bold">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  Real Customer Verbatim (VoC Intelligence)
                </span>
                <span>Tap Tabs to Inspect</span>
              </div>

              {/* VoC Selector Tabs */}
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveVocTab('leak')}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    activeVocTab === 'leak'
                      ? 'bg-orange-500 text-black shadow-lg font-extrabold'
                      : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                  }`}
                >
                  01. PVC Bag Leaks
                </button>
                <button
                  onClick={() => setActiveVocTab('evap')}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    activeVocTab === 'evap'
                      ? 'bg-blue-500 text-white shadow-lg font-extrabold'
                      : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                  }`}
                >
                  02. Evaporation Trap
                </button>
                <button
                  onClick={() => setActiveVocTab('asset')}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    activeVocTab === 'asset'
                      ? 'bg-emerald-500 text-black shadow-lg font-extrabold'
                      : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                  }`}
                >
                  03. Tree Asset Loss
                </button>
              </div>

              {/* Active VoC Card */}
              <div className="p-6 rounded-2xl bg-[#0D121D] border border-white/10 space-y-4 shadow-xl">
                
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">{vocQuotes[activeVocTab].source}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20">
                    {vocQuotes[activeVocTab].tag}
                  </span>
                </div>

                <blockquote className="text-base text-slate-100 font-sans italic leading-relaxed border-l-2 border-emerald-400 pl-4">
                  "{vocQuotes[activeVocTab].quote}"
                </blockquote>

                <div className="pt-3 border-t border-white/10 space-y-1">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    Strategic Creative Translation:
                  </span>
                  <p className="text-xs text-slate-300 font-sans font-medium">
                    {vocQuotes[activeVocTab].takeaway}
                  </p>
                </div>

              </div>

              {/* Strategic Shift Toggle Matrix */}
              <div className="p-5 rounded-2xl bg-[#0F1522] border border-cyan-500/20 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 font-bold">
                    THE STRATEGIC REFRAME
                  </span>
                  <div className="flex gap-1.5 p-1 bg-black/40 rounded-lg text-[11px] font-mono">
                    <button
                      onClick={() => setCompareMode('old')}
                      className={`px-2 py-0.5 rounded cursor-pointer ${compareMode === 'old' ? 'bg-red-500/30 text-red-300 font-bold' : 'text-slate-400'}`}
                    >
                      Commodity Way
                    </button>
                    <button
                      onClick={() => setCompareMode('new')}
                      className={`px-2 py-0.5 rounded cursor-pointer ${compareMode === 'new' ? 'bg-emerald-500/30 text-emerald-300 font-bold' : 'text-slate-400'}`}
                    >
                      ArborPulse Way
                    </button>
                  </div>
                </div>

                {compareMode === 'old' ? (
                  <div className="text-xs space-y-2 text-slate-300 font-sans">
                    <div className="text-red-400 font-mono font-bold">❌ Old Commodity Strategy:</div>
                    <p>• "Buy our green bag for 20% off."</p>
                    <p>• Narrow interest targeting: "Gardening (Interests)"</p>
                    <p>• Price competition against $12 Amazon cheap knockoffs.</p>
                  </div>
                ) : (
                  <div className="text-xs space-y-2 text-slate-300 font-sans">
                    <div className="text-emerald-400 font-mono font-bold">✅ ArborPulse™ Conversion Strategy:</div>
                    <p>• "Protect your $800 tree investment from summer heat."</p>
                    <p>• Broad targeting fed by 3 high-contrast psychological angles.</p>
                    <p>• Premium $39 single / $99 3-pack tier positioning with 5-year warranty.</p>
                  </div>
                )}
              </div>

            </div>

          </div>

        </section>


        {/* ================= PHASE 02: THE 3 BREAKTHROUGH ANGLES ================= */}
        <section id="phase2" className="scroll-mt-28 space-y-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 font-bold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Phase 02 // Strategic Angles & Angles Engine
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                3 Distinct Buyer Cohorts. Zero Creative Cannibalization.
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md font-sans">
              Instead of running 5 slight variations of the same ad, we built 3 diametrically opposed conceptual angles to capture diverse demographics.
            </p>
          </div>

          {/* Angle Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {angles.map((angle) => (
              <div
                key={angle.id}
                onClick={() => setActiveAngleTab(angle.id)}
                className={`p-6 rounded-3xl bg-[#0D121D] border transition-all cursor-pointer flex flex-col justify-between space-y-6 ${
                  activeAngleTab === angle.id
                    ? `${angle.color} shadow-2xl scale-[1.02]`
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold">{angle.badge}</span>
                    <span className="w-2 h-2 rounded-full bg-current" />
                  </div>

                  <h3 className="text-xl font-display font-extrabold text-white leading-tight">
                    {angle.title}
                  </h3>

                  {/* Avatar info */}
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1 text-xs">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Target Persona:</span>
                    <div className="font-bold text-slate-200">{angle.avatar}</div>
                    <p className="text-slate-400 text-[11px] leading-snug">{angle.avatarDesc}</p>
                  </div>

                  {/* Psychological Hook Headline */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Winning Ad Hook:</span>
                    <p className="text-sm font-sans font-bold text-white italic">
                      {angle.headline}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs text-slate-300 font-sans leading-relaxed">
                  {angle.strategy}
                </div>
              </div>
            ))}
          </div>

        </section>


        {/* ================= PHASE 03: META CREATIVE ENGINE & FULL-FUNNEL AD STUDIO ================= */}
        <section id="phase3" className="scroll-mt-28 space-y-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Phase 03 // Meta Creative Architecture & Interactive Ad Studio
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                Thumbstop-to-Conversion Creative Engine
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md font-sans">
              Engineered static split-grids (1:1 & 4:5) and multi-slide narrative carousels (17 total slides) with zero-gutter panoramic continuity to arrest eye velocity in Meta feeds.
            </p>
          </div>

          {/* Master Creative Studio Container */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0B0F17] border border-emerald-500/30 space-y-8 shadow-2xl relative overflow-hidden">
            
            {/* Top Format Selector Switcher */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex items-center gap-2 bg-black/50 p-1.5 rounded-2xl border border-white/10 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setActiveStudioTab('static');
                    setStudioViewMode('interactive');
                  }}
                  className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    activeStudioTab === 'static'
                      ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 font-extrabold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Layers className="w-4 h-4" />
                  <span>Static Meta Ads (1:1 & 4:5 Specs)</span>
                </button>
                <button
                  onClick={() => {
                    setActiveStudioTab('carousel');
                    setCarouselSlideIdx(0);
                    setStudioViewMode('interactive');
                  }}
                  className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    activeStudioTab === 'carousel'
                      ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 font-extrabold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Multi-Slide Carousels (3 Suites // 17 Slides)</span>
                </button>
              </div>

              {/* View Mode Toggle: Interactive Stage vs Live Code / DOM */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider hidden md:inline">Renderer:</span>
                <div className="flex items-center bg-black/40 p-1 rounded-xl border border-white/5 text-xs font-mono">
                  <button
                    onClick={() => setStudioViewMode('interactive')}
                    className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                      studioViewMode === 'interactive'
                        ? 'bg-white/15 text-white font-bold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Visual Stage</span>
                  </button>
                  <button
                    onClick={() => setStudioViewMode('code')}
                    className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                      studioViewMode === 'code'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Live Code / DOM</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Main Studio 2-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* LEFT COLUMN: THE INTERACTIVE AD STAGE (7 Cols) */}
              <div className="lg:col-span-7 space-y-4">
                
                {/* Viewport Sub-Header Controls */}
                <div className="flex items-center justify-between text-xs font-mono p-3 bg-black/40 rounded-2xl border border-white/5">
                  {activeStudioTab === 'static' ? (
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">Aspect Ratio:</span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => setStaticRatio('4x5')}
                          className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                            staticRatio === '4x5'
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          4:5 Portrait (1080×1350)
                        </button>
                        <button
                          onClick={() => setStaticRatio('1x1')}
                          className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                            staticRatio === '1x1'
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          1:1 Square (1080×1080)
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20">
                        {currentCarousel.badge}
                      </span>
                      <span className="text-slate-300 font-bold hidden sm:inline">
                        {currentSlide.role}
                      </span>
                    </div>
                  )}

                  <div className="text-slate-400">
                    {activeStudioTab === 'static' ? currentStatic.funnel.split(' ')[0] : `Slide ${carouselSlideIdx + 1} of ${currentCarousel.slides.length}`}
                  </div>
                </div>

                {/* The Stage Screen Frame (100% Original Sharp Square Corners, Zero Added Borders) */}
                <div className={`w-full bg-[#020B06] shadow-2xl relative flex items-center justify-center transition-all ${
                  activeStudioTab === 'static' && staticRatio === '1x1'
                    ? 'aspect-square max-w-[500px] mx-auto'
                    : 'aspect-[4/5] max-w-[500px] mx-auto'
                }`}>

                  {/* Visual Renderer or Live Code Frame */}
                  {studioViewMode === 'interactive' ? (
                    <div className="w-full h-full relative flex items-center justify-center bg-[#020B06]">
                      <img
                        src={
                          activeStudioTab === 'static'
                            ? (staticRatio === '4x5' ? currentStatic.ratio4x5 : currentStatic.ratio1x1)
                            : currentSlide.img
                        }
                        alt={activeStudioTab === 'static' ? currentStatic.title : currentSlide.title}
                        className="w-full h-full object-contain rounded-none border-0 select-none block"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full relative overflow-hidden bg-[#03140C] flex items-center justify-center">
                      <iframe
                        src={
                          activeStudioTab === 'static'
                            ? (staticRatio === '4x5' ? currentStatic.liveHtml4x5 : currentStatic.liveHtml1x1)
                            : currentSlide.html
                        }
                        title="Live Ad Render Viewport"
                        className="border-none rounded-none pointer-events-auto origin-top-left"
                        style={{
                          width: '1080px',
                          height: activeStudioTab === 'static' && staticRatio === '1x1' ? '1080px' : '1350px',
                          transform: activeStudioTab === 'static' && staticRatio === '1x1' ? 'scale(0.462963)' : 'scale(0.37)'
                        }}
                      />
                    </div>
                  )}

                </div>

                {/* Carousel Swipe Controls (Only displayed in Carousel Mode) */}
                {activeStudioTab === 'carousel' && (
                  <div className="flex items-center justify-between p-3 bg-black/40 rounded-2xl border border-white/5">
                    <button
                      onClick={() => setCarouselSlideIdx((prev) => (prev > 0 ? prev - 1 : currentCarousel.slides.length - 1))}
                      className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Prev Slide</span>
                    </button>

                    {/* Interactive Slide Dots */}
                    <div className="flex items-center gap-2">
                      {currentCarousel.slides.map((slide, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCarouselSlideIdx(idx)}
                          className={`transition-all rounded-full cursor-pointer ${
                            carouselSlideIdx === idx
                              ? 'w-8 h-2 bg-emerald-400'
                              : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                          }`}
                          title={`Slide ${idx + 1}: ${slide.role}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() => setCarouselSlideIdx((prev) => (prev < currentCarousel.slides.length - 1 ? prev + 1 : 0))}
                      className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer shadow-lg shadow-emerald-500/20"
                    >
                      <span>Next Slide</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* Quick-Switch Thumbnails Ribbon */}
                <div className="pt-2">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span>{activeStudioTab === 'static' ? 'Switch Master Static Angle:' : 'Switch Master Carousel Suite:'}</span>
                    <span className="text-emerald-400">{activeStudioTab === 'static' ? '3 Creative Angles' : '3 Full Suites'}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {activeStudioTab === 'static'
                      ? staticAdsData.map((ad, idx) => (
                          <button
                            key={ad.id}
                            onClick={() => setSelectedStaticIdx(idx)}
                            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                              selectedStaticIdx === idx
                                ? 'bg-[#131D2E] border-emerald-400/50 shadow-lg'
                                : 'bg-black/30 border-white/5 hover:border-white/20'
                            }`}
                          >
                            <div className="text-[10px] font-mono text-emerald-400 font-bold mb-1">
                              {ad.badge.split(' // ')[0]}
                            </div>
                            <div className="text-xs font-bold text-white truncate font-display">
                              {ad.title.split(' & ')[0]}
                            </div>
                            <div className="text-[10px] font-mono text-slate-400 mt-1">
                              Hold: {ad.holdRate.split(' ')[0]}
                            </div>
                          </button>
                        ))
                      : carouselsData.map((car, idx) => (
                          <button
                            key={car.id}
                            onClick={() => {
                              setSelectedCarouselIdx(idx);
                              setCarouselSlideIdx(0);
                            }}
                            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                              selectedCarouselIdx === idx
                                ? 'bg-[#131D2E] border-emerald-400/50 shadow-lg'
                                : 'bg-black/30 border-white/5 hover:border-white/20'
                            }`}
                          >
                            <div className="text-[10px] font-mono text-emerald-400 font-bold mb-1">
                              {car.badge}
                            </div>
                            <div className="text-xs font-bold text-white truncate font-display">
                              {car.title.split(' (')[0]}
                            </div>
                            <div className="text-[10px] font-mono text-slate-400 mt-1">
                              Swipe: {car.avgSwipeRate}
                            </div>
                          </button>
                        ))}
                  </div>
                </div>

              </div>


              {/* RIGHT COLUMN: CREATIVE DIRECTOR TEARDOWN & COPY DECK (5 Cols) */}
              <div className="lg:col-span-5 space-y-5">
                
                {/* Active Ad Metadata Box */}
                <div className="p-5 rounded-3xl bg-[#0D121D] border border-white/10 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20">
                      {activeStudioTab === 'static' ? currentStatic.funnel : currentCarousel.funnel}
                    </span>
                    <span className="text-slate-400">
                      {activeStudioTab === 'static' ? 'Single Split-Grid' : `${currentCarousel.slides.length}-Slide Story`}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-display font-black text-white leading-snug">
                      {activeStudioTab === 'static' ? currentStatic.title : currentCarousel.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-sans">
                      {activeStudioTab === 'static' ? currentStatic.hook : currentCarousel.framework}
                    </p>
                  </div>

                  {/* Forensic Performance Metrics Grid */}
                  <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-white/10">
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-center">
                      <div className="text-[10px] font-mono text-slate-400 uppercase">3s Hold Rate</div>
                      <div className="text-base font-bold text-emerald-400 font-mono mt-0.5">
                        {activeStudioTab === 'static' ? currentStatic.holdRate.split(' ')[0] : currentCarousel.avgSwipeRate}
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-center">
                      <div className="text-[10px] font-mono text-slate-400 uppercase">Est. CTR</div>
                      <div className="text-base font-bold text-blue-400 font-mono mt-0.5">
                        {activeStudioTab === 'static' ? currentStatic.ctr : '3.85%'}
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-center">
                      <div className="text-[10px] font-mono text-slate-400 uppercase">Efficiency</div>
                      <div className="text-base font-bold text-purple-400 font-mono mt-0.5">
                        {activeStudioTab === 'static' ? currentStatic.roas : currentCarousel.cpmSavings}
                      </div>
                    </div>
                  </div>

                  {/* Strategic Psychology Teardown */}
                  <div className="pt-2 border-t border-white/10 space-y-1">
                    <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-bold">
                      Psychological Hook & Scientific Mechanism:
                    </div>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed">
                      {activeStudioTab === 'static' ? currentStatic.psychology : currentSlide.desc}
                    </p>
                  </div>

                  {/* If Carousel: Active Slide Role Teardown */}
                  {activeStudioTab === 'carousel' && (
                    <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-1 text-xs">
                      <div className="flex items-center justify-between font-mono text-[10px]">
                        <span className="text-emerald-400 font-bold">Active Slide {carouselSlideIdx + 1}: {currentSlide.role}</span>
                        <span className="text-slate-400">{currentSlide.num}</span>
                      </div>
                      <p className="text-slate-200 font-medium">{currentSlide.keyStat}</p>
                    </div>
                  )}
                </div>

                {/* Meta Copy & Captions Compendium Box */}
                <div className="p-5 rounded-3xl bg-[#0F1522] border border-cyan-500/20 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold">
                      <FileText className="w-4 h-4" />
                      <span>Live Meta Copy Deck</span>
                    </div>
                    <button
                      onClick={() => handleCopyAdText(activeStudioTab === 'static' ? currentStatic.primaryText : currentCarousel.primaryText)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-mono text-slate-300 hover:text-white transition-all cursor-pointer"
                    >
                      {adCopyCopied ? (
                        <>
                          <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-bold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Ad Text</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Primary Text Preview Box */}
                  <div className="p-3.5 rounded-xl bg-black/60 border border-white/5 max-h-48 overflow-y-auto font-mono text-xs text-slate-300 leading-relaxed space-y-2 select-text">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider pb-1 border-b border-white/5 font-sans font-bold">
                      Meta Primary Text (Feed & Stories):
                    </div>
                    <div className="whitespace-pre-line">
                      {activeStudioTab === 'static' ? currentStatic.primaryText : currentCarousel.primaryText}
                    </div>
                  </div>

                  {/* Headline & Link Bar */}
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-xs font-mono">
                    <div className="space-y-0.5 truncate pr-2">
                      <div className="text-[10px] text-slate-400 uppercase">Headline:</div>
                      <div className="text-slate-100 font-bold truncate">
                        {activeStudioTab === 'static' ? currentStatic.headline : currentCarousel.headline}
                      </div>
                    </div>
                    <div className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold shrink-0">
                      {activeStudioTab === 'static' ? currentStatic.cta : currentCarousel.cta}
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* 3 Creative Director Architectural Rules */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            
            <div className="p-6 rounded-3xl bg-[#0D121D] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400">
                <Eye className="w-4 h-4" />
                <span>Rule 01 // The 0.4-Second Contrast Halt</span>
              </div>
              <h4 className="text-base font-display font-bold text-white">Visual Polar Contrast over Lifestyle Fluff</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Most gardening ads blend into social feeds with pleasant green lawns. We engineered an aggressive contrast: scorched terracotta soil vs bright cyan/emerald drip hydration, arresting eye velocity instantly.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#0D121D] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-400">
                <Scale className="w-4 h-4" />
                <span>Rule 02 // Direct Problem Agitation</span>
              </div>
              <h4 className="text-base font-display font-bold text-white">Call Out What They Already Failed At</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                The ad doesn’t introduce ArborPulse until it has validated the user’s frustration: "You ran the hose every day, and your leaves still browned." This triggers instant self-identification and removes skepticism.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#0D121D] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Rule 03 // Zero-Gutter Panoramic Continuity</span>
              </div>
              <h4 className="text-base font-display font-bold text-white">Eliminate Swiping Friction on Meta Feeds</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                By extending soil horizons and product cutaways across 0px slide gutters, the brain perceives the carousel as one continuous panorama, lifting slide-completion rates by 42% over disjointed cards.
              </p>
            </div>

          </div>

        </section>


        {/* ================= PHASE 04: HIGH-CONVERTING SHOPIFY PDP & LIVE DEMO ================= */}
        <section id="phase4" className="scroll-mt-28 space-y-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 font-bold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Phase 04 // Shopify PDP & Conversion Funnel
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                The Live Shopify Conversion Engine
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md font-sans">
              An ad is only as good as the landing page it hits. We architected a complete Shopify PDP with tiered bundles, sticky add-to-cart, and instant checkout.
            </p>
          </div>

          {/* Interactive Live Store Launcher Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#121826] via-[#0F1522] to-[#0A0E17] border border-amber-500/40 space-y-6 shadow-2xl relative overflow-hidden">
            
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[130px] pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>LIVE DEMO STOREFRONT ONLINE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
                  arborpulse-store.myshopify.com
                </h3>
              </div>

              {/* Action Button to Open */}
              <a
                href="https://arborpulse-store.myshopify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-sm uppercase tracking-wide shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer"
              >
                <span>Launch Live Shopify Store</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>

            {/* Credentials & Access Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-2xl bg-black/50 border border-white/10 space-y-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Store URL</span>
                <div className="text-sm font-mono font-bold text-white flex items-center justify-between">
                  <span>https://arborpulse-store.myshopify.com</span>
                  <ExternalLink className="w-4 h-4 text-slate-500" />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black/50 border border-amber-500/30 space-y-1">
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block">Demo Storefront Password</span>
                <div className="flex items-center justify-between">
                  <span className="text-base font-mono font-extrabold text-white">StackCuts</span>
                  <button
                    onClick={handleCopyPassword}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold transition-all cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Password</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>

            {/* PDP Wireframe Breakdown (Tiered Bundles + Sticky Bar) */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="text-amber-400 font-bold">1. Tiered Bundles (AOV +34%)</div>
                <p className="text-slate-400 text-[11px] font-sans">1-Pack ($39), 3-Pack ($99 Most Popular), 5-Pack ($149 Estate). Incentivizes multi-tree purchases.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="text-amber-400 font-bold">2. Sticky Mobile Add-To-Cart</div>
                <p className="text-slate-400 text-[11px] font-sans">Persistent purchase anchor appears once user scrolls past product gallery. Zero friction.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="text-amber-400 font-bold">3. Scientific Comparison Matrix</div>
                <p className="text-slate-400 text-[11px] font-sans">Side-by-side spec grid proving superior flow rate, material grade, and warranty against Amazon rings.</p>
              </div>

            </div>

          </div>

        </section>


        {/* ================= FINAL CTA / RETRIEVAL ================= */}
        <section className="pt-12 border-t border-white/10 text-center max-w-3xl mx-auto space-y-8">
          
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
              Ready to Build Your DTC Conversion Engine?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg font-sans leading-relaxed">
              Whether you are scaling Meta ad spend past $50k/month or need a high-converting Shopify PDP built from scratch, we bring forensic strategy to every pixel.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenModal && onOpenModal('Hire on Upwork - Full Funnel Engine')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-black font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Work With Mayur on Upwork</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>

            <button
              onClick={onBack}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#0F1522] hover:bg-white/10 border border-white/10 text-white font-bold text-sm transition-all cursor-pointer"
            >
              ← Back to Agency Portfolio
            </button>
          </div>

        </section>

      </main>

    </div>
  );
}
