import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
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
  Share2,
  Maximize2,
  X,
  CheckCheck,
  Video,
  Film,
  ArrowRight,
  FlaskConical,
  Target
} from 'lucide-react';

export default function ArborPulseScrollytelling({ onBack, onOpenModal }) {
  const [activePhase, setActivePhase] = useState('phase1');
  const [activeVocTab, setActiveVocTab] = useState('leak');
  const [activeAngleTab, setActiveAngleTab] = useState(0);
  const [activeStackIdx, setActiveStackIdx] = useState(0); // 0: Stage 02 (Angle 01), 1: Stage 03 (Angle 03), 2: Stage 05 (Angle 02)
  const [copied, setCopied] = useState(false);
  const [briefCopied, setBriefCopied] = useState(false);
  const [copiedBriefId, setCopiedBriefId] = useState(null);
  const [activeBriefModalAngle, setActiveBriefModalAngle] = useState(null);
  const [compareMode, setCompareMode] = useState('new'); // 'old' | 'new'

  // Phase 03 Ad Studio State
  const [activeStudioTab, setActiveStudioTab] = useState('static'); // 'static' | 'carousel'
  const [selectedStaticIdx, setSelectedStaticIdx] = useState(0);
  const [staticRatio, setStaticRatio] = useState('4x5'); // '4x5' | '1x1'
  const [selectedCarouselIdx, setSelectedCarouselIdx] = useState(0);
  const [carouselSlideIdx, setCarouselSlideIdx] = useState(0);
  const [adCopyCopied, setAdCopyCopied] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // GSAP ScrollTrigger Refs
  const pinnedSectionRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);

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

  // GSAP ScrollTrigger 2-Column Pinned Stacking Cards
  useEffect(() => {
    if (!pinnedSectionRef.current || cardsRef.current.length < 3) return;

    const ctx = gsap.context(() => {
      const [card1, card2, card3] = cardsRef.current;
      if (!card1 || !card2 || !card3) return;

      // Card 1 is visible at start; Card 2 and 3 start translated down 100%
      gsap.set(card1, { yPercent: 0 });
      gsap.set(card2, { yPercent: 100 });
      gsap.set(card3, { yPercent: 100 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinnedSectionRef.current,
          pin: true,
          start: 'top top',
          end: '+=2100',
          scrub: 1,
          pinSpacing: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;
            if (p < 0.28) {
              setActiveStackIdx(0);
              setActiveAngleTab(0);
            } else if (p < 0.72) {
              setActiveStackIdx(1);
              setActiveAngleTab(1);
            } else {
              setActiveStackIdx(2);
              setActiveAngleTab(2);
            }
          },
        }
      });

      // 1. Initial crisp buffer gap: Card 1 stays static briefly before Card 2 approaches
      tl.to({}, { duration: 0.35 })
      // 2. Card 2 smoothly animates up to cover Card 1
        .to(card2, {
          yPercent: 0,
          ease: 'power1.inOut',
          duration: 1.0,
        })
      // 3. Middle crisp buffer gap: Card 2 stays static briefly before Card 3 approaches
        .to({}, { duration: 0.35 })
      // 4. Card 3 smoothly animates up to cover Card 2
        .to(card3, {
          yPercent: 0,
          ease: 'power1.inOut',
          duration: 1.0,
        })
      // 5. Final crisp buffer gap: Card 3 stays static briefly before unpinning
        .to({}, { duration: 0.35 });

      tlRef.current = tl;
    }, pinnedSectionRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectStackStage = (targetIdx) => {
    setActiveStackIdx(targetIdx);
    setActiveAngleTab(targetIdx);

    if (tlRef.current && tlRef.current.scrollTrigger) {
      const st = tlRef.current.scrollTrigger;
      // Centers of each hold buffer: 0.05 for Card 1, 0.50 for Card 2, 0.94 for Card 3
      const progressRatio = targetIdx === 0 ? 0.05 : targetIdx === 1 ? 0.50 : 0.94;
      const targetScroll = Math.round(st.start + progressRatio * (st.end - st.start));
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText('StackCuts');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleCopyBrief = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedBriefId(id !== undefined ? id : true);
    setBriefCopied(true);
    setTimeout(() => {
      setBriefCopied(false);
      setCopiedBriefId(null);
    }, 2200);
  };

  const handleJumpToAd = (staticIdx) => {
    setActiveStudioTab('static');
    setSelectedStaticIdx(staticIdx);
    scrollTo('phase3');
  };

  const handleJumpToPdp = () => {
    scrollTo('phase4');
  };

  // VoC Quotes Dataset
  const vocQuotes = {
    leak: {
      source: 'Reddit: r/BackyardOrchard (Upvoted 142 times)',
      tag: 'Product Failure Friction',
      quote: 'I spent $45 on two cheap green PVC tree bags from Amazon. Within 3 weeks under the Texas sun, the seams split open, algae clogged the pinholes, and the water rushed out in 15 minutes instead of a slow drip. Completely useless.',
      takeaway: 'Buyers don\'t want "another cheap water bag." They want heavy-duty puncture-proof longevity and non-clogging emitter channels.',
      hookHeadline: 'Tired of Green PVC Tree Bags Splitting and Clogging with Algae in 3 Weeks?',
      targetAd: 'Ad 02 // Us vs. Them Battle & Carousel 02',
      awareness: 'Solution-Aware (Frustrated Repeat Buyer)'
    },
    evap: {
      source: 'Amazon 1-Star Review Analysis (n=380)',
      tag: 'Biological Knowledge Gap',
      quote: 'My newly planted Japanese Maple died despite me running the garden hose every single evening. The nursery owner told me the top 2 inches were muddy but the taproots 14 inches below were bone dry and baked.',
      takeaway: 'People assume surface watering works. The high-converting angle must educate on the 40°C Topsoil Evaporation Trap vs Deep Taproot Drip.',
      hookHeadline: 'Can your garden hose survive a 45°C heatwave? Why 78% of water evaporates before reaching taproots.',
      targetAd: 'Ad 01 // Heatwave Defense & Carousel 01',
      awareness: 'Problem-Aware (Unaware of Sub-Soil Evaporation Physics)'
    },
    asset: {
      source: 'Suburban Homeowner Grower Forum',
      tag: 'Economic Loss Aversion',
      quote: 'We planted 8 mature privacy arborvitaes ($3,200 total investment). Losing just two to July drought would cost $800 to replace plus labor. A $35 automated slow-release bag is cheap insurance.',
      takeaway: 'Frame ArborPulse not as a gardening gadget, but as an $800+ tree asset preservation policy.',
      hookHeadline: 'You spent $800+ on saplings. Don\'t let a 3-day summer heatwave kill your investment.',
      targetAd: 'Ad 03 // 50% Off Today Offer & Carousel 03',
      awareness: 'Most-Aware (Cost-Sensitive Tree Preserver)'
    }
  };

  // 3 Strategic Angles Mapped to Eugene Schwartz Awareness Levels
  const angles = [
    {
      id: 0,
      badge: 'Angle 01 // Soil Hydration Physics',
      title: 'The 40°C Topsoil Evaporation Trap',
      awarenessLevel: 'Problem-Aware',
      awarenessStageNum: 'Stage 02 of 05',
      awarenessDesc: 'Customer waters saplings daily with a garden hose, but cannot understand why trees still scorch and die in 40°C heat.',
      awarenessBadgeColor: 'border-cyan-500/30 text-cyan-300 bg-cyan-500/10',
      avatar: 'The Frustrated Tree Grower & Gardener',
      avatarDesc: 'Spends 45 minutes every evening hose-watering saplings, watching leaves curl because surface water evaporates before reaching taproots.',
      trigger: 'Sub-Soil Saturation vs Surface Evaporation',
      headline: '"Why 70% of Hose Water Evaporates in 40°C Heat Before Ever Reaching Taproots."',
      strategy: 'Demolishes the common myth that spraying a hose for 5 minutes hydrates young trees. Proves surface water vaporizes under hot sun, leaving deep roots baked dry.',
      color: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10',
      accent: 'cyan',
      brief: {
        conceptName: '40°C Scorched Topsoil vs 50cm Root Hydration Teardown',
        thumbstopHook: 'Macro split-screen: Left shows baked, cracked Australian topsoil in 42°C heat with hose water vaporizing in 40 minutes. Right cuts subterranean 50cm showing bone-dry taproots, then reveals ArborPulse delivering calibrated slow drip with 0% evaporation.',
        onScreenText: 'Hosing saplings daily in 40°C heat? 70% evaporates before touching roots.',
        cameraAction: 'Macro push-in on dry crusty mulch transitioning into a 3D subterranean root cutaway showing deep slow-drip hydration.',
        copyHook: 'If you are watering your young fruit trees or saplings with a garden hose in 40°C heat, you are not hydrating them—you are boiling the topsoil.',
        copyBody: 'In hot Australian summers, hose water pools in the top 5cm where fierce sunlight evaporates 70% of it in under an hour. Meanwhile, delicate taproots 30–50cm underground remain bone-dry. ArborPulse™ delivers 75L over 8–10 continuous hours directly to the root zone with zero surface evaporation.',
        copyCta: 'Save Your Trees This Summer • 50% OFF TODAY ($59.90 AUD)',
        targetStaticIdx: 0,
        targetAdTitle: 'Ad 01 // 45°C Heatwave Defense (Static 1:1 & 4:5)',
        targetCarouselTitle: 'Carousel 01 // The 45°C Heatwave Tragedy (7 Slides)',
        pdpTargetSection: 'PDP Section: The Subterranean Science • 50cm Deep-Root Hydration Engine',
        benchmarkHoldRate: '42.4% (Top 1% Meta Benchmark)',
        benchmarkCtr: '3.18% Cold Feed CTR',
        benchmarkGoal: 'Unaware -> Problem-Aware Educational Thumbstop'
      }
    },
    {
      id: 1,
      badge: 'Angle 02 // Asset Loss Aversion',
      title: 'The $800 Drought Insurance Policy',
      awarenessLevel: 'Most-Aware',
      awarenessStageNum: 'Stage 05 of 05',
      awarenessDesc: 'Customer understands tree bags exist; needs clear financial ROI justification to order 2+ rings with free express delivery today.',
      awarenessBadgeColor: 'border-amber-500/30 text-amber-300 bg-amber-500/10',
      avatar: 'The Suburban Property & Estate Owner',
      avatarDesc: 'Invested $2,000–$5,000+ into mature privacy hedges, citrus trees, and ornamental saplings; terrified a 3-day weekend heatwave will kill them.',
      trigger: 'Cost of Inaction vs $1.20/mo Protection',
      headline: '"You Spent $800+ on Trees. Don\'t Let a 3-Day Heatwave Kill Your Investment."',
      strategy: 'Reframes a $59.90 drip ring as zero-risk tree insurance. Anchors against an $800+ arborist removal fee and replanting cost, making the purchase an obvious financial no-brainer.',
      color: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
      accent: 'amber',
      brief: {
        conceptName: 'The Landscaper Replacement Invoice Teardown',
        thumbstopHook: 'High-contrast macro close-up of an official arborist receipt showing "$850.00 Dead Tree Removal & Replacement" stamped in red "PAID". Rapid whip pan to a single $59.90 ArborPulse ring keeping an ornamental oak thriving in drought.',
        onScreenText: 'Losing one privacy tree costs $800. Protecting it costs $1.20/month.',
        cameraAction: 'Extreme macro zoom on the invoice cost figures, followed by a wide tilt-up showing lush green privacy hedge.',
        copyHook: 'A single 3-day summer heatwave can kill an $800 mature privacy hedge or ornamental tree in under 72 hours.',
        copyBody: 'Replacing dead nursery saplings means paying arborist removal fees, excavation, and fresh nursery stock. A single ArborPulse™ slow-release reservoir costs just $59.90—less than 7% of one replacement tree. It is not a gardening gadget; it is drought insurance for your property value.',
        copyCta: 'Protect Your Trees Today • 50% OFF TODAY ($59.90 AUD, Was $119.80)',
        targetStaticIdx: 2,
        targetAdTitle: 'Ad 03 // 12,400+ Trees Saved & 50% Off Today Offer Stack',
        targetCarouselTitle: 'Carousel 03 // The $800 Asset Preservation ROI (6 Slides)',
        pdpTargetSection: 'PDP Hero Buybox: 37L/95L Live Variant Selector & 50% OFF TODAY',
        benchmarkHoldRate: '36.2% Hold Rate',
        benchmarkCtr: '4.12% Direct-Click CTR',
        benchmarkGoal: 'High-Intent -> Multi-Pack Conversion (Extra 10-15% Off)'
      }
    },
    {
      id: 2,
      badge: 'Angle 03 // Hardware Failure & Us vs. Them',
      title: 'Tired of Cheap Green PVC Bags Splitting?',
      awarenessLevel: 'Solution-Aware',
      awarenessStageNum: 'Stage 03 of 05',
      awarenessDesc: 'Customer previously bought cheap green PVC tree bags from Amazon or Bunnings that split open, tore at seams, or clogged with algae.',
      awarenessBadgeColor: 'border-emerald-500/30 text-emerald-300 bg-emerald-500/10',
      avatar: 'The Burned Repeat Buyer & Orchardist',
      avatarDesc: 'Disgusted with cheap green plastic bags that split after 3 weeks in the sun, dumping 50L of water in 10 minutes.',
      trigger: '900D Commercial Ripstop vs Cheap 200D PVC Trash',
      headline: '"The Tree Bag Engineered to Survive 5 Aussie Summers Without Algae or Burst Seams."',
      strategy: 'Directly attacks the #1 customer complaint with generic tree bags: thin PVC seams bursting and pinholes clogging. Highlights commercial 900D ripstop fabric, brass dual-valves, and 5-year UV guarantee.',
      color: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
      accent: 'emerald',
      brief: {
        conceptName: 'Seam Burst & Algae Clog Stress Test Teardown',
        thumbstopHook: 'High-speed 120fps stress test: Left side shows a generic green PVC bag seam tearing open, flooding 50L of water in 4 minutes with slimy green algae inside. Right side shows ArborPulse 900D ballistic nylon withstanding intense 48°C UV and 60kg load without a scratch.',
        onScreenText: 'Why do cheap green tree bags always split after 2 weeks?',
        cameraAction: 'Side-by-side split screen with dynamic tension meter graphics showing seam failure vs reinforced weld.',
        copyHook: 'If you bought cheap green PVC tree watering bags on Amazon or at the hardware store, you probably found them split open and clogged with algae in under a month.',
        copyBody: 'Generic bags use 200D recycled PVC that turns brittle under UV radiation. ArborPulse™ is manufactured with commercial-grade 900D ripstop poly-matrix with antimicrobial lining and dual brass non-clogging emitter valves. Tested for 5 seasons under 48°C direct sun.',
        copyCta: 'Upgrade to 900D Commercial Durability • 5-Year UV Warranty',
        targetStaticIdx: 1,
        targetAdTitle: 'Ad 02 // Us vs. Them Battle (Hose/Generic PVC vs ArborPulse™)',
        targetCarouselTitle: 'Carousel 02 // 900D Ripstop Hardware & Durability (6 Slides)',
        pdpTargetSection: 'PDP Section: 100% Coded Us vs Them Table (Hose vs Generic PVC vs ArborPulse)',
        benchmarkHoldRate: '39.6% Hold Rate',
        benchmarkCtr: '3.45% Click-Through Rate',
        benchmarkGoal: 'Solution-Aware -> Superior Brand Replacement Choice'
      }
    }
  ];

  // Sequential Physical Stacking Deck in exact Angle 1 -> Angle 2 -> Angle 3 order:
  // Card 0: Angle 01 // 40°C Topsoil Evaporation Trap (Problem-Aware, Cyan)
  // Card 1: Angle 02 // $800 Drought Insurance (Most-Aware, Amber) -> Swipes UP over Card 0!
  // Card 2: Angle 03 // Tired of Green PVC Bags Splitting (Solution-Aware, Emerald) -> Swipes UP over Card 1!
  const orderedAngles = [
    angles[0], // id: 0, Angle 01
    angles[1], // id: 1, Angle 02
    angles[2], // id: 2, Angle 03
  ];

  const currentStackAngle = orderedAngles[activeStackIdx] || angles[0];

  const handleCopyAdText = (text) => {
    navigator.clipboard.writeText(text);
    setAdCopyCopied(true);
    setTimeout(() => setAdCopyCopied(false), 2200);
  };

  // Static Ads Data Suite (1:1 and 4:5 Specs)
  const staticAdsData = [
    {
      id: 'static-01',
      badge: 'Ad 01 // Heatwave Crisis Ad',
      title: '45°C Heatwave Crisis Ad (Split-Screen Pain)',
      funnel: 'Top of Funnel (Cold Traffic / Scroll-Stopping)',
      awarenessLevel: 'Problem-Aware (Unaware of Soil Evaporation Physics)',
      angleType: 'Scientific Mechanism & Biological Agitation',
      hypothesis: 'Exposing the hidden 40°C evaporation trap stops thumb-scroll faster (42.4% Hold Rate) than showing healthy trees, by making gardeners realize their current daily effort is failing.',
      hook: 'Can your garden hose survive a 45°C Australian heatwave?',
      holdRate: '42.4%',
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
🔥 50% OFF TODAY ($59.90 AUD) + Free Delivery on 2+ Rings!`,
      headline: 'How to Stop Tree Loss in 45°C Heat (Shop 50% Off)',
      description: '⭐⭐⭐⭐⭐ 12,400+ Trees Protected • 30-Day Guarantee',
      cta: 'Shop Now'
    },
    {
      id: 'static-02',
      badge: 'Ad 02 // Us vs. Them Battle Ad',
      title: 'Hose & Cheap PVC Bags vs. ArborPulse™ Battle Ad',
      funnel: 'Middle of Funnel (Consideration / Comparative Proof)',
      awarenessLevel: 'Solution-Aware (Seeking High-Performance Alternative)',
      angleType: 'Cognitive Us vs. Them 3-Way Comparison Matrix',
      hypothesis: 'A side-by-side battle matrix (Hose vs Cheap Green PVC Bags vs ArborPulse) dismantles analytical objections across seam durability, water loss, and root depth, lifting CTR to 3.45%.',
      hook: 'Why Hoses & Cheap Green PVC Bags Fail in 3 Weeks',
      holdRate: '39.6%',
      ctr: '3.45%',
      roas: '4.8x ROAS',
      ratio4x5: '/arborpulse/static/Ad_02_Us_vs_Them_4x5_1080x1350.png',
      ratio1x1: '/arborpulse/static/Ad_02_Us_vs_Them_1x1_1080x1080.png',
      liveHtml4x5: '/arborpulse/static/ad_01_4x5.html',
      liveHtml1x1: '/arborpulse/static/ad_01_1x1.html',
      psychology: 'Cognitive Comparison Matrix. Disassembles cheap Amazon PVC knockoffs (bursting seams, algae clogs) and hoses with 4 hard metrics: water loss, durability, root depth, and tree survival.',
      primaryText: `Cheap PVC Tree Bags & Garden Hoses vs. ArborPulse™ 75L:

❌ Cheap Green PVC Bags (Amazon Knockoffs):
• Seams burst under intense UV in 3 weeks
• Pinholes clog with green algae slime
• 200D recycled plastic leaks 50L in 15 minutes

❌ Standard Garden Hose:
• 70% water lost to surface evaporation
• 45 mins daily backbreaking dragging
• Top 5cm only (taproots starve)

🏆 ArborPulse™ 75L Commercial System:
• 900D Ripstop Ballistic Poly (5-Year UV Guaranteed)
• Dual non-clogging self-pressurized brass emitters
• 10 hours continuous deep root saturation with 0% evaporation
• 99.4% Verified Tree Survival Rate

Protect your tree investment for just $1.20 / month.`,
      headline: 'ArborPulse™ vs Cheap Bags: See the 5-Point Battle Table ➔',
      description: '99.4% Verified Tree Survival Rate • 5-Year UV Guarantee',
      cta: 'Shop Now'
    },
    {
      id: 'static-03',
      badge: 'Ad 03 // 50% Off Insurance Offer Ad',
      title: '$800 Tree Insurance & 50% Off Offer Ad',
      funnel: 'Bottom of Funnel (Conversion / Retargeting)',
      awarenessLevel: 'Most-Aware (Ready to Purchase / Risk Sensitive)',
      angleType: 'Asset Loss Aversion & Direct-Response Offer Stack',
      hypothesis: 'Anchoring against an $800 arborist replacement invoice paired with high-density social proof (12,400+ trees saved) and 50% off pricing drops CAC to an all-time low (5.4x ROAS).',
      hook: 'You Spent $800+ on Trees. Don\'t Let a 3-Day Heatwave Kill Them.',
      holdRate: '36.2%',
      ctr: '4.12%',
      roas: '5.4x ROAS',
      ratio4x5: '/arborpulse/static/Ad_03_Social_Proof_4x5_1080x1350.png',
      ratio1x1: '/arborpulse/static/Ad_03_Social_Proof_1x1_1080x1080.png',
      liveHtml4x5: '/arborpulse/static/ad_01_4x5.html',
      liveHtml1x1: '/arborpulse/static/ad_01_1x1.html',
      psychology: 'Financial Loss Aversion & Risk-Reversal. Compares a $59.90 ArborPulse slow-drip system against an $800 arborist dead tree removal bill, eliminating price resistance with 50% off today.',
      primaryText: `You spent $800+ on mature privacy hedges, citrus trees, and ornamental saplings.

A single 3-day summer heatwave can kill that entire investment before the weekend is over.

Replacing dead trees means paying arborist removal fees, excavation, and new nursery stock.

Over 12,400+ Australian gardeners rely on ArborPulse™ 75L as affordable drought insurance:
• 10 continuous hours of sub-soil slow-drip hydration
• Refill in 60 seconds once a week
• 100% Tree Survival Guaranteed

🔥 50% OFF TODAY:
• $59.90 AUD Single Ring (Was $119.80)
• Save Extra 10% on 2 Rings / 15% on 4 Rings
• FREE Flow Valve & Drip Tube Included
• FREE Express Australia-Wide Delivery on 2+ Rings
• 30-Day 100% Tree Survival Money-Back Guarantee

👉 Tap Shop Now to protect your tree investment before heatwaves peak!`,
      headline: 'Protect Your $800 Tree Investment: 50% OFF Today',
      description: '12,400+ Trees Protected • 30-Day Guarantee • Free Express Delivery',
      cta: 'Order Now'
    }
  ];

  // Master Carousels Data Suite (3 Complete Multi-Slide Suites)
  const carouselsData = [
    {
      id: 'carousel-01',
      badge: 'Carousel 01 // 7-Slide Story',
      title: "David's 14-Day Tree Recovery Story (7 Slides)",
      funnel: 'Top of Funnel (High Engagement / Narrative Arc)',
      awarenessLevel: 'Problem-Aware (Cold Narrative Hook)',
      angleType: '3-Act Cinematic Problem-to-Transformation Swipe Story',
      hypothesis: "A serialized 7-slide emotional journey (David's dying orchard to 14-day recovery) drives 68.4% completion by validating user struggle before pitching the solution.",
      framework: 'Entering the Frame (3-Act Emotional Story)',
      avgSwipeRate: '68.4% Completion',
      swipeRate: '68.4%',
      ctr: '3.65%',
      roas: '4.6x ROAS',
      cpmSavings: '43% vs Static Single Ad',
      cpmSavingsLabel: '-43% CPM',
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
          title: '14 Days later: 100% Tree Recovery & 50% Off Offer.',
          desc: 'Lush green thriving citrus tree with vibrant foliage + 30-day money back guarantee.',
          img: '/arborpulse/carousel_01/Carousel_01_Cinematic_slide_07.png',
          html: '/arborpulse/carousel_01/slide_07.html',
          keyStat: 'Final swipe payoff funnels high-intent traffic to Shopify PDP.'
        }
      ],
      primaryText: `Swipe through to see how David saved his dying citrus orchard in 45°C Adelaide heat ➔

He spent $850 on new saplings, but daily hose watering was accidentally killing them. Here's what happened ➔

👉 Swipe through all 7 slides above to see the full transformation!

🏷️ 50% OFF TODAY: $59.90 AUD (Was $119.80) + Free Aus Delivery on 2+ Rings!`,
      headline: "Swipe to See David's 14-Day Tree Recovery ➔",
      cta: 'Shop Now'
    },
    {
      id: 'carousel-02',
      badge: 'Carousel 02 // 5-Slide Science',
      title: 'Sub-Soil Science & 5-Point Battle Table (5 Slides)',
      funnel: 'Middle of Funnel (Mechanism & Hard Comparative Proof)',
      awarenessLevel: 'Solution-Aware (Comparison & Mechanism)',
      angleType: 'Panoramic Seam Continuity + 5-Point Battle Grid',
      hypothesis: 'Zero-gutter subterranean horizon continuity across 5 slides pulls the thumb through root physics into the battle table, achieving 49% CPM savings.',
      framework: 'Panoramic Seam Continuity + 5-Point Battle Grid',
      avgSwipeRate: '74.2% Completion',
      swipeRate: '74.2%',
      ctr: '3.92%',
      roas: '5.1x ROAS',
      cpmSavings: '49% vs Static Single Ad',
      cpmSavingsLabel: '-49% CPM',
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
          title: 'Hoses vs Cheap PVC Bags vs ArborPulse™ 75L.',
          desc: 'Seams that burst vs 900D ripstop, 70% evaporation vs deep taproot saturation, and 99.4% tree survival.',
          img: '/arborpulse/carousel_02/Carousel_02_Mechanism_slide_04.png',
          html: '/arborpulse/carousel_02/slide_04.html',
          keyStat: 'Direct comparative 3-way table closes analytical buyer objections.'
        },
        {
          num: '05/05',
          role: 'Economic ROI & Offer',
          title: '$1.20 / Month Tree Insurance vs $250 Replacement.',
          desc: '50% OFF TODAY ($59.90 AUD, was $119.80) + Free Aus Delivery on 2+ Rings.',
          img: '/arborpulse/carousel_02/Carousel_02_Mechanism_slide_05.png',
          html: '/arborpulse/carousel_02/slide_05.html',
          keyStat: 'Clear financial justification makes purchasing a no-brainer.'
        }
      ],
      primaryText: `Why do 83% of newly planted trees in Australia die during their first summer? (Swipe ➔)

It's not lack of water. It's soil evaporation and cheap PVC bags splitting under the sun.

Swipe through the 5-point benchmark table to see why 12,400+ trees are protected by ArborPulse™.`,
      headline: 'ArborPulse™ vs Cheap Bags & Hoses: 5-Point Battle Table ➔',
      cta: 'Shop Now'
    },
    {
      id: 'carousel-03',
      badge: 'Carousel 03 // 5-Slide How-To',
      title: '60-Second Set & Forget Autopilot + Reviews (5 Slides)',
      funnel: 'Bottom of Funnel (Friction Elimination & Conversion)',
      awarenessLevel: 'Most-Aware (Conversion & Friction Removal)',
      angleType: '3-Step 60-Second Autopilot + Verified Review Wall',
      hypothesis: 'Visualizing extreme simplicity (15s Wrap ➔ 45s Fill ➔ 7 Days Relax) removes labor objections and drives an 81.1% swipe rate with retargeting efficiency.',
      framework: '3-Step Frictionless How-To + Verified Review Wall',
      avgSwipeRate: '81.1% Completion',
      swipeRate: '81.1%',
      ctr: '4.48%',
      roas: '5.8x ROAS',
      cpmSavings: '54% vs Static Single Ad',
      cpmSavingsLabel: '-54% CPM',
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
          title: '⭐⭐⭐⭐⭐ 4.9/5 by 5,280+ Gardeners • 50% OFF TODAY.',
          desc: 'Get ArborPulse™ 75L for 50% OFF ($59.90 AUD, was $119.80) + Free Aus Delivery on 2+ Rings.',
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

👉 Swipe through all 5 slides & Tap Shop Now to claim 50% OFF TODAY!`,
      headline: '60-Second Tree Setup: 3 Easy Steps (Swipe ➔)',
      cta: 'Shop Now'
    }
  ];

  const currentStatic = staticAdsData[selectedStaticIdx];
  const currentCarousel = carouselsData[selectedCarouselIdx];
  const currentSlide = currentCarousel.slides[carouselSlideIdx];

  // Keyboard navigation for carousel slides and lightbox modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isLightboxOpen) {
        setIsLightboxOpen(false);
      } else if (e.key === 'ArrowLeft' && activeStudioTab === 'carousel') {
        setCarouselSlideIdx((prev) => (prev > 0 ? prev - 1 : currentCarousel.slides.length - 1));
      } else if (e.key === 'ArrowRight' && activeStudioTab === 'carousel') {
        setCarouselSlideIdx((prev) => (prev < currentCarousel.slides.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, activeStudioTab, currentCarousel]);

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
            aria-label="Back to StackCuts"
            className="group inline-flex items-center gap-2 p-2 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-all shadow-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-400 group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline font-mono text-xs">StackCuts™ Agency</span>
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

          {/* Mobile Right Brand Tag */}
          <div className="md:hidden flex items-center gap-1.5 font-mono text-[11px] text-slate-400 font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>ArborPulse™</span>
          </div>

          {/* Hire / Consult CTA (Desktop Only) */}
          <button
            onClick={() => onOpenModal && onOpenModal('ArborPulse Case Study Inquiry')}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-black font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span>Book Strategy Audit</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

        </div>

        {/* Mobile 4-Stage Sub-Navigation Track (100% Fitted Grid - Zero Swiping Needed) */}
        <div className="md:hidden border-t border-white/10 px-2 py-1.5 bg-[#070A0F]/95 backdrop-blur-xl">
          <div className="grid grid-cols-4 gap-1 w-full max-w-md mx-auto font-mono text-[10.5px]">
            <button
              onClick={() => scrollTo('phase1')}
              className={`py-1 px-1 rounded-lg font-bold transition-all text-center truncate cursor-pointer ${
                activePhase === 'phase1' 
                  ? 'bg-blue-500 text-white shadow-sm' 
                  : 'bg-white/[0.04] text-slate-400 border border-white/5'
              }`}
            >
              01 Research
            </button>
            <button
              onClick={() => scrollTo('phase2')}
              className={`py-1 px-1 rounded-lg font-bold transition-all text-center truncate cursor-pointer ${
                activePhase === 'phase2' 
                  ? 'bg-purple-500 text-white shadow-sm' 
                  : 'bg-white/[0.04] text-slate-400 border border-white/5'
              }`}
            >
              02 Angles
            </button>
            <button
              onClick={() => scrollTo('phase3')}
              className={`py-1 px-1 rounded-lg font-bold transition-all text-center truncate cursor-pointer ${
                activePhase === 'phase3' 
                  ? 'bg-emerald-500 text-black shadow-sm font-extrabold' 
                  : 'bg-white/[0.04] text-slate-400 border border-white/5'
              }`}
            >
              03 Ads
            </button>
            <button
              onClick={() => scrollTo('phase4')}
              className={`py-1 px-1 rounded-lg font-bold transition-all text-center truncate cursor-pointer ${
                activePhase === 'phase4' 
                  ? 'bg-amber-500 text-black shadow-sm font-extrabold' 
                  : 'bg-white/[0.04] text-slate-400 border border-white/5'
              }`}
            >
              04 PDP
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="pt-28 sm:pt-28 md:pt-30 lg:pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">

        {/* ================= HERO STAGE ================= */}
        <section id="hero" className="relative pt-4 sm:pt-5 md:pt-6 pb-8 border-b border-white/10 space-y-4 sm:space-y-6 text-center flex flex-col items-center">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] sm:text-xs font-mono text-emerald-400 shadow-sm max-w-full">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="hidden sm:inline truncate">CASE STUDY // FULL-FUNNEL DTC CONVERSION ENGINE</span>
            <span className="sm:hidden truncate">CASE STUDY // ARBORPULSE™ DTC</span>
          </div>

          {/* Main Title in Cabinet Grotesk */}
          <div className="space-y-3 sm:space-y-4 max-w-5xl mx-auto px-2 sm:px-0">
            <h1 className="text-[28px] xs:text-3xl sm:text-4xl md:text-[50px] lg:text-[58px] xl:text-[64px] font-display font-black tracking-tight leading-[1.18] sm:leading-[1.1] text-white">
              <span className="block sm:inline">
                From Commoditized <br className="sm:hidden" />
                Tree Watering
              </span>
              <br className="hidden sm:inline" />{" "}
              <span className="block sm:inline bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                To A High-Converting <br className="sm:hidden" />
                DTC Machine.
              </span>
            </h1>

            <p className="hidden sm:block text-base md:text-xl text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
              How forensic competitor teardowns, Voice-of-Customer (VoC) mining across Amazon & Reddit, and Meta Andromeda AI alignment built a category-defining DTC brand for <strong className="text-white font-semibold">ArborPulse™</strong>.
            </p>
            <p className="sm:hidden text-xs text-slate-300 leading-relaxed font-sans max-w-sm mx-auto px-2">
              How VoC data mining & Meta Andromeda AI built a category-defining DTC machine for <strong className="text-white font-semibold">ArborPulse™</strong>.
            </p>

            {/* Desktop Breadcrumb Pills */}
            <div className="hidden sm:flex flex-wrap items-center justify-center gap-2.5 text-xs font-mono text-slate-400 pt-2">
              <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">🌿 Brand: ArborPulse™</span>
              <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">🎯 Focus: Meta Advantage+ Scaling</span>
              <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">🛠️ Architecture: Part 01 Strategy + Part 02 Creatives & Store</span>
            </div>

            {/* Mobile Unified 3-Column Glass Meta-Card */}
            <div className="sm:hidden w-full max-w-sm mx-auto mt-2 p-2.5 rounded-xl bg-white/[0.04] border border-white/10 grid grid-cols-3 divide-x divide-white/10 font-mono text-center shadow-md">
              <div className="px-1 flex flex-col items-center justify-center">
                <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">Brand</span>
                <span className="text-[11px] font-bold text-white truncate max-w-full">🌿 ArborPulse</span>
              </div>
              <div className="px-1 flex flex-col items-center justify-center">
                <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">Focus</span>
                <span className="text-[11px] font-bold text-emerald-400 truncate max-w-full">🎯 Meta Scaling</span>
              </div>
              <div className="px-1 flex flex-col items-center justify-center">
                <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">Scope</span>
                <span className="text-[11px] font-bold text-amber-400 truncate max-w-full">🛠️ 2-Part System</span>
              </div>
            </div>
          </div>

          {/* 4 Pillar Badges / Key Metrics Strip - Desktop: 4-Column Grid */}
          <div className="hidden md:grid md:grid-cols-4 gap-4 pt-4 font-mono w-full text-left">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5 flex flex-col justify-between">
              <div className="space-y-1">
                <span className="text-slate-400 uppercase text-[10px] tracking-wider block">Root Problem</span>
                <div className="text-red-400 font-bold text-sm md:text-base leading-tight">120-Day Ad Fatigue</div>
              </div>
              <p className="text-slate-400 text-[11px] leading-tight pt-1">Commodity 20% OFF PVC ads bleeding spend & inflating CPA</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5 flex flex-col justify-between">
              <div className="space-y-1">
                <span className="text-slate-400 uppercase text-[10px] tracking-wider block">Algorithm Shift</span>
                <div className="text-blue-400 font-bold text-sm md:text-base leading-tight">Andromeda AI Engine</div>
              </div>
              <p className="text-slate-400 text-[11px] leading-tight pt-1">Broad targeting fed by 3 diverse psychological hooks</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5 flex flex-col justify-between">
              <div className="space-y-1">
                <span className="text-slate-400 uppercase text-[10px] tracking-wider block">Creative Engine</span>
                <div className="text-emerald-400 font-bold text-sm md:text-base leading-tight">Statics & Carousels</div>
              </div>
              <p className="text-slate-400 text-[11px] leading-tight pt-1">High-contrast thumbstop statics + seamless swipe stories</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5 flex flex-col justify-between">
              <div className="space-y-1">
                <span className="text-slate-400 uppercase text-[10px] tracking-wider block">Conversion Engine</span>
                <div className="text-amber-400 font-bold text-sm md:text-base leading-tight">Live Shopify PDP Demo</div>
              </div>
              <p className="text-slate-400 text-[11px] leading-tight pt-1">Multi-pack savings with sub-1s load speed</p>
            </div>
          </div>

          {/* 4 Pillar Badges - Mobile: Native Swipeable Snap-Carousel with Crisp Key Outlines */}
          <div className="md:hidden w-full space-y-2.5 font-mono text-left pt-1">
            <div className="flex gap-2.5 overflow-x-auto snap-x snap-mandatory no-scrollbar px-1 py-1 -mx-2 px-2">
              
              {/* Card 1 */}
              <div className="snap-center shrink-0 w-[78vw] max-w-[270px] p-3.5 rounded-2xl bg-[#0F1522]/95 border border-red-500/25 shadow-lg flex flex-col justify-between space-y-2">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-red-400/90 uppercase text-[9px] tracking-wider font-bold">01 // Problem</span>
                    <span className="text-[9px] text-slate-500">1/4 ➔</span>
                  </div>
                  <div className="text-red-400 font-bold text-sm leading-tight">120-Day Ad Fatigue</div>
                </div>
                <div className="p-2 rounded-xl bg-red-500/10 border border-red-500/20 text-slate-300 text-[11px] leading-snug">
                  Bleeding spend on commodity 20% OFF generic PVC ads.
                </div>
              </div>

              {/* Card 2 */}
              <div className="snap-center shrink-0 w-[78vw] max-w-[270px] p-3.5 rounded-2xl bg-[#0F1522]/95 border border-blue-500/25 shadow-lg flex flex-col justify-between space-y-2">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400/90 uppercase text-[9px] tracking-wider font-bold">02 // Algorithm</span>
                    <span className="text-[9px] text-slate-500">2/4 ➔</span>
                  </div>
                  <div className="text-blue-400 font-bold text-sm leading-tight">Andromeda AI Engine</div>
                </div>
                <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-slate-300 text-[11px] leading-snug">
                  3 distinct psychological angles feeding broad targeting.
                </div>
              </div>

              {/* Card 3 */}
              <div className="snap-center shrink-0 w-[78vw] max-w-[270px] p-3.5 rounded-2xl bg-[#0F1522]/95 border border-emerald-500/25 shadow-lg flex flex-col justify-between space-y-2">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-400/90 uppercase text-[9px] tracking-wider font-bold">03 // Creatives</span>
                    <span className="text-[9px] text-slate-500">3/4 ➔</span>
                  </div>
                  <div className="text-emerald-400 font-bold text-sm leading-tight">Statics & Carousels</div>
                </div>
                <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-slate-300 text-[11px] leading-snug">
                  High-contrast thumbstops + seamless panoramic stories.
                </div>
              </div>

              {/* Card 4 */}
              <div className="snap-center shrink-0 w-[78vw] max-w-[270px] p-3.5 rounded-2xl bg-[#0F1522]/95 border border-amber-500/25 shadow-lg flex flex-col justify-between space-y-2">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-amber-400/90 uppercase text-[9px] tracking-wider font-bold">04 // Conversion</span>
                    <span className="text-[9px] text-slate-500">4/4</span>
                  </div>
                  <div className="text-amber-400 font-bold text-sm leading-tight">Shopify PDP Demo</div>
                </div>
                <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-slate-300 text-[11px] leading-snug">
                  Sub-1s speed, multi-pack savings & conversion copy.
                </div>
              </div>

            </div>

            {/* Mobile Swipe Hint */}
            <div className="flex items-center justify-center gap-1.5 pt-0.5 text-slate-500 text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span className="ml-1 text-slate-400 font-sans">Swipe cards ➔</span>
            </div>
          </div>

        </section>


        {/* ================= PHASE 01: FORENSIC RESEARCH & AUDIT ================= */}
        <section id="phase1" className="scroll-mt-28 space-y-8 sm:space-y-10">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-2.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-[10px] sm:text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                  PART 01 // CREATIVE STRATEGY
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  Phase 01 // Forensic VoC & Competitor Teardown
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                Customer Friction & Competitor Blindspots
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md font-sans leading-relaxed">
              Dual-track research architecture: Internal historical account diagnostics (creative fatigue & CPA leaks) combined with external forensic intelligence (Amazon reviews, Reddit discussions, and Meta Ad Library teardowns).
            </p>
          </div>

          {/* Dual-Track Research & Client Audit Protocol Matrix */}
          <div className="p-5 sm:p-6 rounded-3xl bg-[#0B0F17] border border-blue-500/30 space-y-4 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-xs font-mono font-bold text-blue-300 uppercase tracking-widest">
                  Dual-Track Research Architecture: Internal vs. External
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                Setting Client Expectations: Zero Guesswork Protocol
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Track A: Internal Account & Creative History Diagnostics */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                      Track A // Internal Account Diagnostics
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      Standard Client SOP
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white font-display">
                    Historical Ads Manager Audit & Brand Brief
                  </h3>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    Before spending a dollar on new creative, we audit the client's past 90–180 days of ad account data:
                  </p>
                  <ul className="text-xs text-slate-300 space-y-1.5 font-sans pt-1">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold font-mono">▸</span>
                      <span><strong>90-Day Creative Fatigue Analysis:</strong> Isolating where CPA inflated, frequency peaked, and past winning hooks decayed.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold font-mono">▸</span>
                      <span><strong>Spend Allocation & Funnel Gaps:</strong> Identifying budget wasted on cold traffic that bounced due to poor PDP message-matching.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold font-mono">▸</span>
                      <span><strong>Unit Economics & Founder Intent:</strong> Aligning target CPA, break-even ROAS, inventory margins, and client vision.</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>Deliverable:</span>
                  <span className="text-blue-300 font-bold">Account Diagnostic & Fatigue Teardown</span>
                </div>
              </div>

              {/* Track B: External Forensic Market & VoC Mining */}
              <div className="p-4 rounded-2xl bg-black/40 border border-emerald-500/20 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                      Track B // External Market Intelligence
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      Showcased in ArborPulse™
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white font-display">
                    Unfiltered VoC Mining & Competitor Blindspots
                  </h3>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    When launching zero-to-one or out-positioning commodities, we mine the entire market ecosystem:
                  </p>
                  <ul className="text-xs text-slate-300 space-y-1.5 font-sans pt-1">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold font-mono">▸</span>
                      <span><strong>Meta Ad Library Teardowns:</strong> Deconstructing 120+ day active competitor ads to expose generic discount traps.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold font-mono">▸</span>
                      <span><strong>Amazon & Reddit VoC Mining:</strong> Scraping 380+ 1★–3★ reviews & 14,000+ discussions for unfiltered customer pain.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold font-mono">▸</span>
                      <span><strong>Physical Soil Mechanics:</strong> Biological proof (40°C evaporation trap) that makes ArborPulse™ the obvious choice.</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>Deliverable:</span>
                  <span className="text-emerald-300 font-bold">VoC Swipe File & Angle Seed Matrix</span>
                </div>
              </div>

            </div>
          </div>

          {/* 3-Pillar Methodology Pill Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
            
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0F1522] border border-blue-500/30 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-400">
                <Search className="w-4 h-4 shrink-0" />
                <span>Pillar 01 // Meta Ad Library Teardowns</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Audited 120+ day active competitor ads. Discovered everyone running identical generic "Summer Sale - 20% OFF" promotion with zero problem education.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0F1522] border border-orange-500/30 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-400">
                <Flame className="w-4 h-4 shrink-0" />
                <span>Pillar 02 // Voice of Customer (VoC) Mining</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Scraped r/BackyardOrchard and 380+ 1★–3★ Amazon reviews. Isolated real customer pain: PVC seams splitting in UV sun & algae clogging pinholes.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0F1522] border border-emerald-500/30 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400">
                <Droplets className="w-4 h-4 shrink-0" />
                <span>Pillar 03 // Horticultural Soil Physics</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                40°C summer topsoil causes 78% rapid surface evaporation. Hose watering never reaches the taproot 14 inches below, causing root scorch.
              </p>
            </div>

          </div>

          {/* Andromeda AI Algorithm Alignment Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-purple-950/40 border border-blue-500/30 flex flex-col sm:flex-row items-start sm:items-center gap-3.5 sm:gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center shrink-0 text-blue-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="space-y-1 flex-1 text-xs sm:text-sm">
              <span className="font-mono font-bold text-blue-300 uppercase tracking-wider text-[11px]">
                2026 Meta Algorithm Alignment (Creative-First Andromeda Architecture)
              </span>
              <p className="text-slate-200 leading-relaxed font-sans">
                In modern Meta Advantage+ and Andromeda retrieval systems, <strong>creative is the primary targeting lever</strong>. By engineering distinct, uncorrelated psychological angles mapped to diverse buyer motivations, we empower performance marketing teams to scale broad campaigns into non-overlapping auction pools—securing the lowest blended CAC without audience saturation.
              </p>
            </div>
          </div>

          {/* Asymmetric Split: The Forensic Ad Library Teardown & Live VoC Mining */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* LEFT: Interactive Ad Library Wireframe Vector Teardown */}
            <div className="lg:col-span-6 space-y-3.5 sm:space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-1.5 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-2 text-red-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  Competitor Ad Creative Teardown
                </span>
                <span className="text-[11px] text-slate-500">Active 120+ Days • Meta Ad Library</span>
              </div>

              {/* Vector Ad Breakdown Container */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0D121D] border border-red-500/30 space-y-3.5 sm:space-y-4 shadow-2xl">
                
                {/* Simulated Meta Ad Post Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-[11px] font-bold font-mono text-slate-300">
                      Co.
                    </div>
                    <div>
                      <div className="font-bold text-white font-sans leading-tight">Generic Garden Supply Brand</div>
                      <div className="text-[10px] font-mono text-slate-400">Sponsored • 1:1 Square Feed Ad</div>
                    </div>
                  </div>
                  <span className="text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20 font-bold text-[10px] sm:text-[11px] font-mono">
                    ⚠️ Ad Creative Fatigue
                  </span>
                </div>

                {/* Flaw 01: Ad Primary Text Breakdown */}
                <div className="space-y-1.5">
                  <div className="p-3 rounded-xl bg-black/50 border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Ad Primary Text:</span>
                    <p className="text-xs text-slate-300 font-sans italic">
                      "🌱 Keep your young trees green! Get 20% OFF our high quality PVC tree watering bag during our summer sale. Easy zipper setup. Fast shipping on Amazon. Shop now!"
                    </p>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-[11px] text-red-300 font-sans leading-relaxed">
                    <strong className="font-mono text-red-400">❌ Copy Blindspot:</strong> Commodity discount angle. Fails to agitate why garden hose watering kills trees in heatwaves. Captures only the bottom 5% price-shoppers while ignoring 95% of the problem-aware market.
                  </div>
                </div>

                {/* Flaw 02: Ad Visual Wireframe (Thumbstop Flaw) */}
                <div className="space-y-1.5">
                  <div className="bg-[#080B12] rounded-xl p-3.5 border border-white/5 relative overflow-hidden">
                    <svg viewBox="0 0 400 130" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Background lawn */}
                      <rect x="0" y="0" width="400" height="130" fill="#0b1710" />
                      
                      {/* Wireframe tree trunk */}
                      <rect x="188" y="0" width="24" height="130" fill="#1e293b" />
                      
                      {/* Generic green bag */}
                      <ellipse cx="200" cy="72" rx="90" ry="24" fill="#166534" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="3 3" />
                      <text x="200" y="75" textAnchor="middle" fill="#86efac" fontSize="9" fontFamily="monospace" fontWeight="bold">
                        [ FLAT STOCK PHOTO: GREEN BAG ON GREEN LAWN ]
                      </text>

                      {/* Red Callout 1: Low Contrast */}
                      <rect x="15" y="15" width="135" height="28" rx="4" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" />
                      <text x="22" y="27" fill="#fca5a5" fontSize="8" fontFamily="monospace" fontWeight="bold">
                        ❌ ZERO VISUAL CONTRAST
                      </text>
                      <text x="22" y="38" fill="#fca5a5" fontSize="7" fontFamily="sans-serif">
                        Blends directly into Meta feed
                      </text>
                      <line x1="150" y1="29" x2="180" y2="65" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" />

                      {/* Red Callout 2: Low Hold Rate */}
                      <rect x="250" y="15" width="135" height="28" rx="4" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" />
                      <text x="257" y="27" fill="#fca5a5" fontSize="8" fontFamily="monospace" fontWeight="bold">
                        ❌ NO HOOK / NO MECHANISM
                      </text>
                      <text x="257" y="38" fill="#fca5a5" fontSize="7" fontFamily="sans-serif">
                        Looks like a boring catalog ad
                      </text>
                      <line x1="250" y1="29" x2="220" y2="65" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" />

                      {/* Bottom banner */}
                      <rect x="0" y="106" width="400" height="24" fill="rgba(0,0,0,0.85)" />
                      <text x="200" y="122" textAnchor="middle" fill="#ef4444" fontSize="8.5" fontFamily="monospace" fontWeight="bold">
                        ⚠️ 3-SECOND THUMBSTOP RATE: 13.8% (86% USERS SCROLL PAST IN &lt; 0.5s)
                      </text>
                    </svg>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-[11px] text-red-300 font-sans leading-relaxed">
                    <strong className="font-mono text-red-400">❌ Visual Blindspot:</strong> Flat static product shot with green-on-green camouflage. Zero thumbstop hook, zero scientific tension, and zero stopping power in mobile feeds.
                  </div>
                </div>

                {/* Flaw 03: Ad Headline & CTA Link Bar */}
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase">AMAZON.COM / STORE</span>
                    <span className="font-bold text-white font-mono text-[11px]">SUMMER SALE: 20% OFF TREE BAG</span>
                  </div>
                  <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-white/20 text-slate-300 font-mono text-xs font-bold shrink-0">
                    Shop Now
                  </span>
                </div>

                {/* Diagnostic Metrics Scorecard */}
                <div className="grid grid-cols-3 gap-2 pt-1 font-mono text-center text-[10.5px]">
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="text-slate-500 block text-[9px] uppercase">Thumbstop Rate</span>
                    <span className="text-red-400 font-bold">13.8% (Low)</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="text-slate-500 block text-[9px] uppercase">Outbound CTR</span>
                    <span className="text-red-400 font-bold">0.62% (Fatigued)</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="text-slate-500 block text-[9px] uppercase">Angle Strategy</span>
                    <span className="text-amber-400 font-bold">Price War Only</span>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT: Voice of Customer (VoC) Mining Matrix */}
            <div className="lg:col-span-6 space-y-3.5 sm:space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-2 text-emerald-400 font-bold">
                  <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Real Customer Verbatim (VoC Intelligence)</span>
                </span>
                <span className="text-[11px] text-slate-500">Tap to inspect</span>
              </div>

              {/* VoC Selector Tabs (Fitted Single Line on All Phones) */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                <button
                  onClick={() => setActiveVocTab('leak')}
                  className={`py-2 px-1.5 sm:px-3 rounded-xl text-[11px] sm:text-xs font-mono font-bold transition-all text-center truncate cursor-pointer ${
                    activeVocTab === 'leak'
                      ? 'bg-orange-500 text-black shadow-lg font-extrabold'
                      : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                  }`}
                >
                  <span className="sm:hidden">01. Seam Leaks</span>
                  <span className="hidden sm:inline">01. PVC Bag Leaks</span>
                </button>
                <button
                  onClick={() => setActiveVocTab('evap')}
                  className={`py-2 px-1.5 sm:px-3 rounded-xl text-[11px] sm:text-xs font-mono font-bold transition-all text-center truncate cursor-pointer ${
                    activeVocTab === 'evap'
                      ? 'bg-blue-500 text-white shadow-lg font-extrabold'
                      : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                  }`}
                >
                  <span className="sm:hidden">02. Evaporation</span>
                  <span className="hidden sm:inline">02. Evaporation Trap</span>
                </button>
                <button
                  onClick={() => setActiveVocTab('asset')}
                  className={`py-2 px-1.5 sm:px-3 rounded-xl text-[11px] sm:text-xs font-mono font-bold transition-all text-center truncate cursor-pointer ${
                    activeVocTab === 'asset'
                      ? 'bg-emerald-500 text-black shadow-lg font-extrabold'
                      : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                  }`}
                >
                  <span className="sm:hidden">03. Asset Loss</span>
                  <span className="hidden sm:inline">03. Tree Asset Loss</span>
                </button>
              </div>

              {/* Active VoC Card */}
              <div className="p-4 sm:p-6 rounded-2xl bg-[#0D121D] border border-white/10 space-y-4 shadow-xl">
                
                <div className="flex flex-wrap items-center justify-between gap-1.5 text-xs font-mono">
                  <span className="text-slate-400 text-[11px] sm:text-xs">{vocQuotes[activeVocTab].source}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20 text-[10px] sm:text-xs">
                    {vocQuotes[activeVocTab].tag}
                  </span>
                </div>

                <blockquote className="text-sm sm:text-base text-slate-100 font-sans italic leading-relaxed border-l-2 border-emerald-400 pl-3.5 sm:pl-4">
                  "{vocQuotes[activeVocTab].quote}"
                </blockquote>

                <div className="pt-3 border-t border-white/10 space-y-1">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    Strategic Creative Translation:
                  </span>
                  <p className="text-xs text-slate-300 font-sans font-medium leading-relaxed">
                    {vocQuotes[activeVocTab].takeaway}
                  </p>
                </div>

                {/* Direct Pipeline: Resulting Live Ad Hook (Phase 03) */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-gradient-to-r from-emerald-950/30 via-[#0A121E] to-black/40 border border-emerald-500/30 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-1 text-[10px] font-mono">
                    <span className="text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Resulting Live Ad Hook (Phase 03 Pipeline):</span>
                    </span>
                    <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-semibold">
                      {vocQuotes[activeVocTab].targetAd}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-sans font-bold text-white italic pl-4 sm:pl-5 border-l-2 border-emerald-400/50">
                    "{vocQuotes[activeVocTab].hookHeadline}"
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono text-slate-400 pl-4 sm:pl-5">
                    <span>Eugene Schwartz Awareness:</span>
                    <span className="px-2 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 font-bold">
                      {vocQuotes[activeVocTab].awareness}
                    </span>
                  </div>
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


        {/* ================= PHASE 02: THE 3 STRATEGIC ANGLES & CREATIVE BRIEF DECK ================= */}
        <section id="phase2" className="scroll-mt-28 space-y-8 sm:space-y-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-2.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-[10px] sm:text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">
                  PART 01 // CREATIVE STRATEGY
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  Phase 02 // Strategic Angles & Creative Brief Architecture
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                3 Uncorrelated Angles. 3 Distinct Buyer Avatars. Zero Ad Fatigue.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md font-sans leading-relaxed">
              Translating real Australian customer pain points into 3 distinct, uncorrelated creative angles mapped to Eugene Schwartz's 5 stages of awareness—engineered to unlock separate Meta auction pockets without creative fatigue.
            </p>
          </div>

          {/* Direct-Response Angle Testing Framework Visual & Meta Andromeda Broad Advantage */}
          <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-[#0F1522] via-[#0D121D] to-[#0A0E17] border border-purple-500/30 space-y-5 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-widest">
                  Direct-Response Angle Testing Framework
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                Systematic Angle Isolation Across 3 Buyer Avatars
              </span>
            </div>

            {/* 5-Step Visual Pipeline Ribbon */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 sm:gap-3">
              {[
                { step: '01', title: 'Root Scorch & Pain', desc: '70% Surface Water Loss vs Deep Taproots' },
                { step: '02', title: 'Distinct Buyer Avatars', desc: 'Home Gardener vs Estate Owner vs Burned Buyer' },
                { step: '03', title: 'Uncorrelated Angles', desc: 'Soil Hydration vs Asset Value vs 900D Durability' },
                { step: '04', title: 'Polar Visual Hooks', desc: 'Scorched Soil Cutaway vs $850 Invoice vs Burst Test' },
                { step: '05', title: 'Direct-Response Offer', desc: '50% OFF TODAY ($59.90) + Free Aus Delivery on 2+ Rings' }
              ].map((item, idx) => (
                <div key={idx} className="relative p-3.5 rounded-2xl bg-black/40 border border-white/5 flex flex-col justify-between space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-purple-400 font-bold">{item.step}</span>
                    {idx < 4 && <ArrowRight className="hidden sm:inline w-3 h-3 text-purple-400/50 absolute -right-2.5 top-1/2 -translate-y-1/2 z-10" />}
                  </div>
                  <div className="text-xs font-bold text-white font-display">{item.title}</div>
                  <div className="text-[10px] text-slate-400 font-sans leading-tight">{item.desc}</div>
                </div>
              ))}
            </div>

            {/* Meta Advantage+ Scaling Strategy Callout */}
            <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/20 flex flex-col sm:flex-row items-start sm:items-center gap-3 text-xs">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center shrink-0 text-purple-300">
                <Target className="w-4 h-4" />
              </div>
              <p className="text-slate-300 leading-relaxed font-sans">
                <strong className="text-purple-300 font-mono uppercase text-[11px]">Why 3 Distinct Angles Win on Meta Advantage+: </strong>
                Instead of wasting ad budget on minor copy tweaks or guessing narrow interest groups, deploying 3 completely different creative angles (Deep Root Science, Asset Protection, and Hardware Durability) allows Meta's algorithm to tap into 3 separate customer mindsets simultaneously. The ads never compete against each other in the auction, eliminating creative fatigue and keeping customer acquisition costs (CAC) low as spend scales.
              </p>
            </div>
          </div>

          {/* ================= PHASE 02 GSAP PINNED STACKING CARDS SECTION ================= */}
          <div 
            ref={pinnedSectionRef} 
            id="phase2-gsap-deck" 
            className="relative w-full h-screen min-h-[600px] flex flex-col justify-between pt-20 sm:pt-24 pb-4 sm:pb-5 px-3 sm:px-6 lg:px-8 bg-[#070A0F] overflow-hidden"
          >
            {/* Mobile Compact HUD inside pinned section */}
            <div className="lg:hidden flex items-center justify-between gap-2 px-3 py-2 mb-2 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 text-xs font-mono shrink-0">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${
                  activeStackIdx === 0 ? 'bg-cyan-400' : activeStackIdx === 1 ? 'bg-amber-400' : 'bg-emerald-400'
                } animate-pulse`} />
                <span className="font-bold text-white">
                  Angle 0{activeStackIdx + 1}: {currentStackAngle.badge.split('//')[0].trim()}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {[0, 1, 2].map((sIdx) => (
                  <button
                    key={sIdx}
                    onClick={() => handleSelectStackStage(sIdx)}
                    className={`w-7 h-7 rounded-lg text-xs font-mono font-bold flex items-center justify-center transition-all ${
                      activeStackIdx === sIdx
                        ? sIdx === 0
                          ? 'bg-cyan-500 text-black shadow-cyan-500/30 font-extrabold'
                          : sIdx === 1
                          ? 'bg-amber-500 text-black shadow-amber-500/30 font-extrabold'
                          : 'bg-emerald-500 text-black shadow-emerald-500/30 font-extrabold'
                        : 'bg-white/5 text-slate-400 border border-white/5'
                    }`}
                  >
                    0{sIdx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* 2-Column Responsive Layout - Centered with vertical breathing room */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-center w-full max-w-7xl mx-auto my-auto flex-1 min-h-0 max-h-[520px] sm:max-h-[540px]">
              
              {/* 2. LEFT COLUMN: Single Static Card (Pinned, centered, and motionless) */}
              <div className="lg:col-span-5 hidden lg:flex flex-col justify-center h-[500px] sm:h-[530px]">
                <div className={`p-4 sm:p-4.5 rounded-3xl bg-[#0B0F17] border transition-all duration-500 shadow-2xl space-y-2 sm:space-y-2.5 h-full flex flex-col justify-between ${
                  activeStackIdx === 0
                    ? 'border-cyan-500/40 shadow-cyan-950/20'
                    : activeStackIdx === 1
                    ? 'border-amber-500/40 shadow-amber-950/20'
                    : 'border-emerald-500/40 shadow-emerald-950/20'
                }`}>
                  
                  {/* HUD Header */}
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <div className="space-y-0.5">
                      <span className="text-[9.5px] font-mono text-purple-400 font-bold uppercase tracking-wider block">
                        Eugene Schwartz Architecture
                      </span>
                      <h3 className="text-xs sm:text-sm font-display font-bold text-white flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5 text-purple-400" />
                        Customer Awareness Matrix
                      </h3>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 font-mono text-[10.5px] font-bold">
                      <span className={`w-1.5 h-1.5 rounded-full animate-ping ${
                        activeStackIdx === 0 ? 'bg-cyan-400' : activeStackIdx === 1 ? 'bg-amber-400' : 'bg-emerald-400'
                      }`} />
                      <span className="text-white">Deck 0{activeStackIdx + 1} // 03</span>
                    </div>
                  </div>

                  {/* Eugene Schwartz 5-Stage Spectrum Vertical Visualizer */}
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">
                      Market Sophistication Spectrum:
                    </span>
                    
                    <div className="space-y-0.5 text-xs font-mono">
                      {/* Stage 1 */}
                      <div className="py-1 px-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-slate-500 flex items-center justify-between text-[10.5px]">
                        <span>Stage 01 // Unaware</span>
                        <span className="text-[9px] opacity-60">Passive</span>
                      </div>

                      {/* Stage 2 (Angle 01 // Problem-Aware) */}
                      <div
                        onClick={() => handleSelectStackStage(0)}
                        className={`py-1 px-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between text-[11px] ${
                          activeStackIdx === 0
                            ? 'bg-cyan-500/15 border-cyan-500/60 text-cyan-300 shadow-md shadow-cyan-950/40 scale-[1.01]'
                            : 'bg-black/40 border-white/5 text-slate-400 hover:border-cyan-500/30'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${activeStackIdx === 0 ? 'bg-cyan-400 animate-pulse' : 'bg-slate-600'}`} />
                          <span className="font-bold">Stage 02 // Problem-Aware</span>
                        </div>
                        <span className="text-[9.5px] opacity-80 font-mono font-bold">Angle 01</span>
                      </div>

                      {/* Stage 3 (Angle 03 // Solution-Aware) */}
                      <div
                        onClick={() => handleSelectStackStage(2)}
                        className={`py-1 px-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between text-[11px] ${
                          activeStackIdx === 2
                            ? 'bg-emerald-500/15 border-emerald-500/60 text-emerald-300 shadow-md shadow-emerald-950/40 scale-[1.01]'
                            : 'bg-black/40 border-white/5 text-slate-400 hover:border-emerald-500/30'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${activeStackIdx === 2 ? 'bg-emerald-400 animate-pulse' : 'bg-slate-600'}`} />
                          <span className="font-bold">Stage 03 // Solution-Aware</span>
                        </div>
                        <span className="text-[9.5px] opacity-80 font-mono font-bold">Angle 03</span>
                      </div>

                      {/* Stage 4 */}
                      <div className="py-1 px-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-slate-500 flex items-center justify-between text-[10.5px]">
                        <span>Stage 04 // Product-Aware</span>
                        <span className="text-[9px] opacity-60">Evaluating</span>
                      </div>

                      {/* Stage 5 (Angle 02 // Most-Aware) */}
                      <div
                        onClick={() => handleSelectStackStage(1)}
                        className={`py-1 px-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between text-[11px] ${
                          activeStackIdx === 1
                            ? 'bg-amber-500/15 border-amber-500/60 text-amber-300 shadow-md shadow-amber-950/40 scale-[1.01]'
                            : 'bg-black/40 border-white/5 text-slate-400 hover:border-amber-500/30'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${activeStackIdx === 1 ? 'bg-amber-400 animate-pulse' : 'bg-slate-600'}`} />
                          <span className="font-bold">Stage 05 // Most-Aware</span>
                        </div>
                        <span className="text-[9.5px] opacity-80 font-mono font-bold">Angle 02</span>
                      </div>
                    </div>
                  </div>

                  {/* Active Persona Dossier Box */}
                  <div className="p-2.5 rounded-2xl bg-black/50 border border-white/5 space-y-1 transition-all">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-slate-400 uppercase">Target Avatar:</span>
                      <span className={`font-bold ${
                        activeStackIdx === 0 ? 'text-cyan-400' : activeStackIdx === 1 ? 'text-amber-400' : 'text-emerald-400'
                      }`}>
                        {currentStackAngle.trigger}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-white font-display">
                      {currentStackAngle.avatar}
                    </div>
                    <p className="text-[10.5px] text-slate-300 font-sans leading-relaxed line-clamp-2">
                      {currentStackAngle.awarenessDesc}
                    </p>
                  </div>

                  {/* Downstream Ad Pipeline Link */}
                  <div className="p-2 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1">
                    <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 uppercase">
                      <span>Feeds Phase 03 Ad Studio:</span>
                      <span className="text-emerald-400 font-bold">Message-Match</span>
                    </div>
                    <div className="text-[11.5px] font-bold text-white truncate">
                      {currentStackAngle.brief.targetAdTitle}
                    </div>
                    <button
                      onClick={() => handleJumpToAd(currentStackAngle.brief.targetStaticIdx)}
                      className="w-full py-1 px-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 text-[10.5px] font-mono font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer border border-emerald-500/30"
                    >
                      <span>Jump to Ad in Phase 03 Studio</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Button to Open Full Deep Brief Drawer */}
                  <button
                    onClick={() => setActiveBriefModalAngle(currentStackAngle.id)}
                    className="w-full py-1.5 px-3 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 text-[11px] font-mono font-bold flex items-center justify-center gap-2 transition-all cursor-pointer border border-purple-500/30 hover:scale-[1.01]"
                  >
                    <FileText className="w-3.5 h-3.5 text-purple-300" />
                    <span>Inspect Full Production Brief Deck ↗</span>
                  </button>

                </div>
              </div>

              {/* 3. RIGHT COLUMN: 3 Cards Stacked in Exact Same Coordinates */}
              <div className="lg:col-span-7 relative w-full h-[500px] sm:h-[530px] overflow-hidden rounded-3xl">
                {orderedAngles.map((angle, idx) => {
                  const isCyan = angle.id === 0;
                  const isAmber = angle.id === 1;
                  const accentColor = isCyan ? 'text-cyan-400' : isAmber ? 'text-amber-400' : 'text-emerald-400';
                  
                  // Card 1: z-10, border-cyan-500/50, shadow-2xl
                  // Card 2: z-20, border-amber-500/50, shadow-[0_-25px_60px_rgba(0,0,0,0.95)]
                  // Card 3: z-30, border-emerald-500/50, shadow-[0_-30px_70px_rgba(0,0,0,0.98)]
                  const zIndexClass = idx === 0 ? 'z-10' : idx === 1 ? 'z-20' : 'z-30';
                  const borderClass = idx === 0 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-950/40' 
                    : idx === 1 
                    ? 'border-amber-500/50 shadow-[0_-25px_60px_rgba(0,0,0,0.95)]' 
                    : 'border-emerald-500/50 shadow-[0_-30px_70px_rgba(0,0,0,0.98)]';

                  return (
                    <div
                      key={angle.id}
                      ref={(el) => {
                        if (el) cardsRef.current[idx] = el;
                      }}
                      id={`gsap-angle-card-${idx}`}
                      className={`absolute inset-0 w-full h-full rounded-3xl bg-[#0B0F17] border p-4 sm:p-5 flex flex-col justify-between overflow-y-auto no-scrollbar ${zIndexClass} ${borderClass}`}
                    >
                      {/* Story Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-white/10 text-xs font-mono">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border text-[10.5px] ${angle.awarenessBadgeColor}`}>
                            {angle.badge}
                          </span>
                          <span className="text-slate-400 text-[11px]">({angle.awarenessLevel})</span>
                        </div>
                        <span className="text-slate-400 font-mono text-[10.5px] font-bold">
                          Story Beat 0{idx + 1} of 03
                        </span>
                      </div>

                      {/* Angle Title & Strategy */}
                      <div className="space-y-1 pt-0.5">
                        <h3 className="text-base sm:text-lg font-display font-extrabold text-white tracking-tight leading-snug">
                          {angle.title}
                        </h3>
                        <p className="text-[11.5px] text-slate-300 font-sans leading-relaxed line-clamp-2">
                          {angle.strategy}
                        </p>
                      </div>

                      {/* Winning Thumbstop Hook Quote */}
                      <div className="p-2.5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-0.5">
                        <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">
                          Winning Thumbstop Hook:
                        </span>
                        <p className={`text-xs sm:text-[13px] font-sans font-extrabold italic leading-snug ${accentColor}`}>
                          {angle.headline}
                        </p>
                      </div>

                      {/* Compact Visual Concept & OST Box */}
                      <div className="p-2.5 sm:p-3 rounded-2xl bg-black/40 border border-white/5 space-y-1.5">
                        <div className="flex items-center justify-between text-[10.5px] font-mono">
                          <span className="flex items-center gap-1.5 text-purple-400 font-bold">
                            <Video className="w-3.5 h-3.5" />
                            0-3s Visual Concept Preview
                          </span>
                          <span className="text-[9.5px] text-slate-500">Thumbstop Spec</span>
                        </div>

                        <div className="text-xs font-bold text-white font-display truncate">
                          {angle.brief.conceptName}
                        </div>

                        {/* On-Screen Text (OST) Banner */}
                        <div className="p-1.5 px-2 rounded-xl bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 font-mono text-[11px] font-bold leading-tight">
                          <span className="text-[9px] text-yellow-400/80 uppercase block tracking-wider font-sans">OST:</span>
                          "{angle.brief.onScreenText}"
                        </div>

                        {/* Primary Text Opening Hook */}
                        <div className="space-y-0.5 pt-0.5">
                          <span className="text-[9px] font-mono text-blue-400 uppercase tracking-wider block">Direct-Response Primary Text Hook:</span>
                          <p className="text-[10.5px] text-slate-300 font-sans italic line-clamp-1">
                            "{angle.brief.copyHook}"
                          </p>
                        </div>
                      </div>

                      {/* Compact Action Bar */}
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-1">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleJumpToAd(angle.brief.targetStaticIdx);
                          }}
                          className="w-full sm:w-auto py-1.5 px-3 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-[11.5px] font-mono font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer border border-emerald-500/30 hover:shadow-md hover:shadow-emerald-500/10"
                        >
                          <span>View Ad in Phase 03 Studio</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveBriefModalAngle(angle.id);
                          }}
                          className="w-full sm:w-auto py-1.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-[11.5px] font-mono font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer border border-white/20 hover:scale-[1.01]"
                        >
                          <FileText className="w-3.5 h-3.5 text-purple-300" />
                          <span>Inspect Full Brief (Script & OST) ↗</span>
                        </button>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>

            {/* Viewport Stacking Deck Bottom Status Bar */}
            <div className="hidden lg:flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2.5 border-t border-white/5 max-w-7xl mx-auto w-full px-2 mt-2 sm:mt-3 shrink-0">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${
                  activeStackIdx === 0 ? 'bg-cyan-400' : activeStackIdx === 1 ? 'bg-amber-400' : 'bg-emerald-400'
                } animate-pulse`} />
                <span>Active Angle: <strong className="text-white">Angle 0{activeStackIdx + 1} // {currentStackAngle.title}</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white font-bold">
                  Card 0{activeStackIdx + 1} of 03
                </span>
                <span className="text-emerald-400 font-semibold">
                  {activeStackIdx < 2 ? '• Scroll to swipe next card' : '• Stacking Complete (Scroll resumes page flow)'}
                </span>
              </div>
            </div>

          </div>

          {/* ================= FULL PRODUCTION CREATIVE BRIEF MODAL ================= */}
          {activeBriefModalAngle !== null && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <div 
                className="relative max-w-2xl w-full max-h-[88vh] overflow-y-auto rounded-3xl bg-[#0B0F17] border border-white/20 p-5 sm:p-8 space-y-6 shadow-2xl no-scrollbar"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                      <span className={`px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider border ${angles[activeBriefModalAngle].awarenessBadgeColor}`}>
                        {angles[activeBriefModalAngle].badge}
                      </span>
                      <span className="text-slate-400">
                        {angles[activeBriefModalAngle].awarenessLevel} ({angles[activeBriefModalAngle].awarenessStageNum})
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                      {angles[activeBriefModalAngle].title}
                    </h3>
                  </div>

                  <button
                    onClick={() => setActiveBriefModalAngle(null)}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all cursor-pointer shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="space-y-5 text-xs font-sans">
                  
                  {/* Section 1: Visual Direction */}
                  <div className="p-4 rounded-2xl bg-[#0D121D] border border-white/10 space-y-3">
                    <div className="flex items-center gap-2 text-purple-400 font-mono font-bold uppercase tracking-wider">
                      <Video className="w-4 h-4" />
                      <span>01 // 0-3s Thumbstop Visual Direction</span>
                    </div>
                    
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-slate-400 uppercase">Concept Name:</span>
                      <div className="font-bold text-white">{angles[activeBriefModalAngle].brief.conceptName}</div>
                    </div>

                    <div className="p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 font-mono">
                      <span className="text-[10px] text-yellow-400/80 uppercase block">On-Screen Text (OST):</span>
                      "{angles[activeBriefModalAngle].brief.onScreenText}"
                    </div>

                    <div className="space-y-1 text-slate-300 leading-relaxed">
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">Visual Action & Choreography:</span>
                      <p>{angles[activeBriefModalAngle].brief.thumbstopHook}</p>
                    </div>

                    <div className="pt-2 text-[11px] font-mono text-slate-400 border-t border-white/10">
                      <strong className="text-slate-300">Camera Direction:</strong> {angles[activeBriefModalAngle].brief.cameraAction}
                    </div>
                  </div>

                  {/* Section 2: Ad Copy Deck */}
                  <div className="p-4 rounded-2xl bg-[#0D121D] border border-white/10 space-y-3">
                    <div className="flex items-center gap-2 text-blue-400 font-mono font-bold uppercase tracking-wider">
                      <FileText className="w-4 h-4" />
                      <span>02 // Direct-Response Ad Copy Deck</span>
                    </div>

                    <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                      <span className="text-[10px] font-mono text-blue-400 uppercase font-bold block">1. The Hook:</span>
                      <p className="text-slate-200 italic leading-snug">"{angles[activeBriefModalAngle].brief.copyHook}"</p>
                    </div>

                    <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                      <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block">2. Mechanism Reframe & Proof:</span>
                      <p className="text-slate-300 leading-relaxed">{angles[activeBriefModalAngle].brief.copyBody}</p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 space-y-0.5">
                      <span className="text-[10px] font-mono text-purple-400 uppercase font-bold block">3. Direct CTA:</span>
                      <span className="font-bold">{angles[activeBriefModalAngle].brief.copyCta}</span>
                    </div>
                  </div>

                  {/* Section 3: Performance Targets */}
                  <div className="p-4 rounded-2xl bg-[#0D121D] border border-white/10 grid grid-cols-2 gap-3 font-mono">
                    <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                      <span className="text-[10px] text-slate-500 uppercase block">Hold Rate Benchmark</span>
                      <span className="font-bold text-emerald-400 text-sm">{angles[activeBriefModalAngle].brief.benchmarkHoldRate}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                      <span className="text-[10px] text-slate-500 uppercase block">Cold Feed CTR Target</span>
                      <span className="font-bold text-cyan-400 text-sm">{angles[activeBriefModalAngle].brief.benchmarkCtr}</span>
                    </div>
                  </div>

                </div>

                {/* Modal Footer */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-white/10 font-mono text-xs">
                  <button
                    onClick={() => handleCopyBrief(`CREATIVE BRIEF: ${angles[activeBriefModalAngle].title}\nAwareness: ${angles[activeBriefModalAngle].awarenessLevel}\nTarget: ${angles[activeBriefModalAngle].avatar}\n\n[01 VISUAL HOOK]\nOST: "${angles[activeBriefModalAngle].brief.onScreenText}"\nAction: ${angles[activeBriefModalAngle].brief.thumbstopHook}\n\n[02 AD COPY]\nHook: ${angles[activeBriefModalAngle].brief.copyHook}\nBody: ${angles[activeBriefModalAngle].brief.copyBody}\nCTA: ${angles[activeBriefModalAngle].brief.copyCta}`, angles[activeBriefModalAngle].id)}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold border border-white/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    {copiedBriefId === angles[activeBriefModalAngle].id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedBriefId === angles[activeBriefModalAngle].id ? 'Brief Copied!' : 'Copy Full Brief'}</span>
                  </button>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => {
                        const targetIdx = angles[activeBriefModalAngle].brief.targetStaticIdx;
                        setActiveBriefModalAngle(null);
                        handleJumpToAd(targetIdx);
                      }}
                      className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-bold border border-emerald-500/30 flex items-center justify-center gap-1.5 cursor-pointer transition-all"
                    >
                      <span>Jump to Ad</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => setActiveBriefModalAngle(null)}
                      className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

        </section>


        {/* ================= PART 02 TRANSITION MILESTONE BANNER ================= */}
        <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-[#0A141A] to-teal-950/30 border border-emerald-500/30 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-[100px] pointer-events-none" />
          <div className="space-y-2 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] sm:text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>PART 02 // CREATIVE PRODUCTION & SHOPIFY STORE</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-extrabold text-white">
              Bringing the Strategy to Life: Meta Creatives & Live Shopify Store
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-sans leading-relaxed">
              With the 3 distinct angles formulated in Part 01, Part 02 executes the creative asset production—generating scroll-stopping static ads, panoramic multi-slide carousels, and an audited Shopify store built for maximum conversion congruency.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 relative z-10">
            <div className="px-4 py-2.5 rounded-2xl bg-black/50 border border-emerald-500/30 text-center font-mono shadow-md">
              <span className="block text-[10px] text-slate-400 uppercase">Phase 03</span>
              <span className="text-xs font-bold text-emerald-400">Meta Ad Creatives</span>
            </div>
            <span className="text-slate-500 font-mono">➔</span>
            <div className="px-4 py-2.5 rounded-2xl bg-black/50 border border-amber-500/30 text-center font-mono shadow-md">
              <span className="block text-[10px] text-slate-400 uppercase">Phase 04</span>
              <span className="text-xs font-bold text-amber-400">Shopify PDP Engine</span>
            </div>
          </div>
        </div>


        {/* ================= PHASE 03: META CREATIVE ENGINE & FULL-FUNNEL AD STUDIO ================= */}
        <section id="phase3" className="scroll-mt-28 space-y-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-2.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] sm:text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  PART 02 // CREATIVE PRODUCTION & SHOPIFY STORE
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Phase 03 // Meta Creative Architecture & Interactive Ad Studio
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                Thumbstop-to-Conversion Creative Engine
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md font-sans leading-relaxed">
              Engineered static split-grids (1:1 & 4:5) and multi-slide narrative carousels with zero-gutter panoramic continuity to arrest eye velocity in Meta feeds.
            </p>
          </div>

          {/* Master Creative Studio Container */}
          <div className="p-4 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#0B0F17] border border-emerald-500/30 space-y-6 shadow-2xl relative">
            
            {/* Unified Top Format & Aspect Ratio / Suite Controls Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
              
              {/* Left: Format Switcher Pills */}
              <div className="flex items-center gap-1.5 bg-black/60 p-1 rounded-2xl border border-white/10 shadow-md">
                <button
                  onClick={() => setActiveStudioTab('static')}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    activeStudioTab === 'static'
                      ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/20 font-extrabold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Static Ads</span>
                </button>
                <button
                  onClick={() => {
                    setActiveStudioTab('carousel');
                    setCarouselSlideIdx(0);
                  }}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    activeStudioTab === 'carousel'
                      ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/20 font-extrabold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Multi-Slide Carousels</span>
                </button>
              </div>

              {/* Right: Aspect Ratio / Carousel Slide Meta + 1080p Lightbox Button */}
              <div className="flex items-center gap-2.5">
                {activeStudioTab === 'static' ? (
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-slate-400 text-[11px] hidden sm:inline">Aspect Ratio:</span>
                    <div className="flex items-center bg-black/60 p-1 rounded-2xl border border-white/10 shadow-md">
                      <button
                        onClick={() => setStaticRatio('4x5')}
                        className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                          staticRatio === '4x5'
                            ? 'bg-emerald-500 text-black font-extrabold shadow-sm'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        4:5 Feed Portrait
                      </button>
                      <button
                        onClick={() => setStaticRatio('1x1')}
                        className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                          staticRatio === '1x1'
                            ? 'bg-emerald-500 text-black font-extrabold shadow-sm'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        1:1 Square
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20 text-xs shadow-sm">
                      {currentCarousel.badge}
                    </span>
                    <span className="text-slate-300 text-xs px-2.5 py-1.5 rounded-xl bg-black/50 border border-white/10 font-mono font-bold">
                      Slide {carouselSlideIdx + 1} of {currentCarousel.slides.length}
                    </span>
                  </div>
                )}

                {/* Lightbox / Zoom Button */}
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-emerald-500/15 border border-white/10 hover:border-emerald-500/40 text-xs font-mono text-emerald-400 transition-all cursor-pointer shadow-sm"
                  title="Inspect Full 1080p Resolution"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden md:inline font-bold">1080p Full Res</span>
                </button>
              </div>

            </div>

            {/* ZERO-SCROLL 2-COLUMN STUDIO CONSOLE */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center pt-1">
              
              {/* LEFT COLUMN: MASTER CONTROL & QUICK-SWITCH HUB (5 Cols) */}
              <div className="lg:col-span-5 space-y-3">
                
                {/* Header Subtitle */}
                <div className="flex items-center justify-between">
                  <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{activeStudioTab === 'static' ? 'Select Creative Angle' : 'Select Carousel Suite'}</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                    {activeStudioTab === 'static' ? '3 Master Angles' : '3 Complete Suites'}
                  </span>
                </div>

                {/* 3 Interactive Angle / Suite Switcher Cards */}
                <div className="space-y-2.5">
                  {activeStudioTab === 'static' ? (
                    staticAdsData.map((ad, idx) => (
                      <button
                        key={ad.id}
                        onClick={() => setSelectedStaticIdx(idx)}
                        className={`w-full p-3 sm:p-3.5 rounded-2xl border text-left transition-all cursor-pointer group flex items-center justify-between gap-3 ${
                          selectedStaticIdx === idx
                            ? 'bg-[#131D2E] border-emerald-400/60 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-400/30'
                            : 'bg-black/40 border-white/5 hover:border-white/20 hover:bg-white/[0.02]'
                        }`}
                      >
                        <div className="space-y-1 min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                              selectedStaticIdx === idx ? 'bg-emerald-500/20 text-emerald-300' : 'bg-white/5 text-slate-400'
                            }`}>
                              {ad.badge.split(' // ')[0]}
                            </span>
                            <span className="text-[10px] font-mono text-slate-400 truncate">
                              {ad.funnel.split(' (')[0]}
                            </span>
                          </div>
                          <div className={`text-xs sm:text-sm font-bold truncate font-display transition-colors ${
                            selectedStaticIdx === idx ? 'text-white' : 'text-slate-300 group-hover:text-white'
                          }`}>
                            {ad.title}
                          </div>
                          <div className="flex items-center gap-2.5 text-[10px] font-mono text-slate-400">
                            <span>Hold: <strong className="text-emerald-400">{ad.holdRate.split(' ')[0]}</strong></span>
                            <span>•</span>
                            <span>CTR: <strong className="text-cyan-400">{ad.ctr}</strong></span>
                            <span>•</span>
                            <span>ROAS: <strong className="text-purple-400">{ad.roas.split(' ')[0]}</strong></span>
                          </div>
                        </div>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                          selectedStaticIdx === idx
                            ? 'bg-emerald-500 border-emerald-400 text-black font-bold'
                            : 'border-white/10 text-transparent group-hover:border-white/30'
                        }`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      </button>
                    ))
                  ) : (
                    carouselsData.map((car, idx) => (
                      <button
                        key={car.id}
                        onClick={() => {
                          setSelectedCarouselIdx(idx);
                          setCarouselSlideIdx(0);
                        }}
                        className={`w-full p-3 sm:p-3.5 rounded-2xl border text-left transition-all cursor-pointer group flex items-center justify-between gap-3 ${
                          selectedCarouselIdx === idx
                            ? 'bg-[#131D2E] border-emerald-400/60 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-400/30'
                            : 'bg-black/40 border-white/5 hover:border-white/20 hover:bg-white/[0.02]'
                        }`}
                      >
                        <div className="space-y-1 min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                              selectedCarouselIdx === idx ? 'bg-emerald-500/20 text-emerald-300' : 'bg-white/5 text-slate-400'
                            }`}>
                              {car.badge.split(' // ')[0]}
                            </span>
                            <span className="text-[10px] font-mono text-emerald-400 font-semibold">
                              {car.slides.length} Slides
                            </span>
                          </div>
                          <div className={`text-xs sm:text-sm font-bold truncate font-display transition-colors ${
                            selectedCarouselIdx === idx ? 'text-white' : 'text-slate-300 group-hover:text-white'
                          }`}>
                            {car.title}
                          </div>
                          <div className="flex items-center gap-2.5 text-[10px] font-mono text-slate-400">
                            <span>Swipe: <strong className="text-emerald-400">{car.swipeRate}</strong></span>
                            <span>•</span>
                            <span>CTR: <strong className="text-cyan-400">{car.ctr}</strong></span>
                            <span>•</span>
                            <span>ROAS: <strong className="text-purple-400">{car.roas.split(' ')[0]}</strong></span>
                          </div>
                        </div>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                          selectedCarouselIdx === idx
                            ? 'bg-emerald-500 border-emerald-400 text-black font-bold'
                            : 'border-white/10 text-transparent group-hover:border-white/30'
                        }`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      </button>
                    ))
                  )}
                </div>

                {/* Micro Diagnostic Strip & Direct Jump to Teardown */}
                <div className="p-3 rounded-2xl bg-black/50 border border-white/5 flex items-center justify-between text-[11px] font-mono">
                  <div className="flex items-center gap-2 text-slate-400 truncate min-w-0">
                    <Target className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="text-white font-semibold truncate">
                      {activeStudioTab === 'static' ? currentStatic.awarenessLevel.split(' (')[0] : currentCarousel.awarenessLevel.split(' (')[0]}
                    </span>
                  </div>
                  <a 
                    href="#ad-teardown-blueprint"
                    className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-semibold shrink-0 transition-colors cursor-pointer"
                  >
                    <span>Inspect Copy & Teardown</span>
                    <span>↓</span>
                  </a>
                </div>

              </div>

              {/* RIGHT COLUMN: THE INTERACTIVE CINEMA STAGE CANVAS (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col items-center justify-center">
                
                {/* Cinema Canvas Wrapper with External Navigation (Zero Overlays on Image) */}
                <div className="flex items-center justify-center gap-2 sm:gap-4 w-full">
                  
                  {/* External Prev Slide Arrow Button (Desktop & Tablet) */}
                  {activeStudioTab === 'carousel' ? (
                    <button
                      onClick={() => setCarouselSlideIdx((prev) => (prev > 0 ? prev - 1 : currentCarousel.slides.length - 1))}
                      aria-label="Previous Slide"
                      title="Previous Slide"
                      className="hidden sm:flex w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/15 hover:border-emerald-500/50 items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer shrink-0 group"
                    >
                      <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                    </button>
                  ) : null}

                  {/* Stage Screen Frame (SHARP 90-DEGREE CORNERS - NOT ROUNDED!) */}
                  <div 
                    onClick={() => setIsLightboxOpen(true)}
                    className={`w-full relative flex items-center justify-center transition-all duration-300 cursor-zoom-in group ${
                      activeStudioTab === 'static' && staticRatio === '1x1'
                        ? 'aspect-square max-w-[480px] sm:max-w-[500px]'
                        : 'aspect-[4/5] max-w-[460px] sm:max-w-[480px]'
                    }`}
                    title="Click to inspect full 1080p resolution"
                  >
                    <div className="w-full h-full relative rounded-none border border-white/15 hover:border-emerald-500/40 bg-[#020B06] overflow-hidden shadow-2xl flex items-center justify-center transition-colors">
                      {/* Creative Ad Image - 100% Clean, Sharp Corners, Crisp High-Contrast Typography */}
                      <img
                        src={
                          activeStudioTab === 'static'
                            ? (staticRatio === '4x5' ? currentStatic.ratio4x5 : currentStatic.ratio1x1)
                            : currentSlide.img
                        }
                        alt={
                          activeStudioTab === 'static'
                            ? currentStatic.title
                            : currentSlide.title
                        }
                        className="w-full h-full object-contain rounded-none select-none block transition-transform duration-200 group-hover:scale-[1.005]"
                        style={{ imageRendering: '-webkit-optimize-contrast' }}
                        loading="eager"
                      />

                      {/* Subtle Corner Zoom Pill on Hover */}
                      <div className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        <div className="px-2.5 py-1 rounded bg-black/85 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold text-white flex items-center gap-1 shadow-lg">
                          <Maximize2 className="w-3 h-3 text-emerald-400" />
                          <span>1080p Zoom</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* External Next Slide Arrow Button (Desktop & Tablet) */}
                  {activeStudioTab === 'carousel' ? (
                    <button
                      onClick={() => setCarouselSlideIdx((prev) => (prev < currentCarousel.slides.length - 1 ? prev + 1 : 0))}
                      aria-label="Next Slide"
                      title="Next Slide"
                      className="hidden sm:flex w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black border border-emerald-400/40 items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer shrink-0 font-bold group"
                    >
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  ) : null}

                </div>

                {/* External Carousel Controls for Mobile Devices */}
                {activeStudioTab === 'carousel' && (
                  <div className="flex sm:hidden items-center justify-between w-full max-w-[460px] pt-3 gap-3">
                    <button
                      onClick={() => setCarouselSlideIdx((prev) => (prev > 0 ? prev - 1 : currentCarousel.slides.length - 1))}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Prev Slide</span>
                    </button>
                    <button
                      onClick={() => setCarouselSlideIdx((prev) => (prev < currentCarousel.slides.length - 1 ? prev + 1 : 0))}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs font-mono flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95 shadow-lg shadow-emerald-500/20"
                    >
                      <span>Next Slide</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* Live Companion Caption Preview Strip directly beneath creative */}
                <div className="w-full max-w-[480px] mt-3.5 p-3 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-between gap-3 text-xs shadow-lg">
                  <div className="flex items-center gap-2 min-w-0 text-slate-300">
                    <FileText className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="truncate font-sans text-[11px] sm:text-xs">
                      <strong className="text-cyan-300">Companion Meta Caption:</strong> "{activeStudioTab === 'static' ? currentStatic.primaryText.slice(0, 52).replace(/\n/g, ' ') : currentCarousel.primaryText.slice(0, 52).replace(/\n/g, ' ')}..."
                    </span>
                  </div>
                  <a
                    href="#ad-teardown-blueprint"
                    className="px-2.5 py-1 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] font-bold shrink-0 transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>Read Caption</span>
                    <span>↓</span>
                  </a>
                </div>

              </div>

            </div>

            {/* FULL-WIDTH FORENSIC COPYWRITING & CONVERSION BLUEPRINT (Below Stage) */}
            <div id="ad-teardown-blueprint" className="pt-8 border-t border-white/10 space-y-6">
              
              {/* Section Header with 1:1 Creative & Caption Congruence */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                      <FlaskConical className="w-4 h-4" />
                      <span>1:1 Creative & Caption Congruence</span>
                    </div>
                    <h3 className="text-xl sm:text-3xl font-display font-extrabold text-white">
                      Forensic Copywriting & Strategic Teardown Blueprint
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-sans">
                      Every ad creative has its own dedicated Meta caption, headline & strategic hypothesis. Select an ad below to inspect its exact visual + copy pair.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-xs font-bold border border-emerald-500/20">
                      {activeStudioTab === 'static' ? currentStatic.funnel.split(' (')[0] : currentCarousel.funnel.split(' (')[0]}
                    </span>
                  </div>
                </div>

                {/* IN-SECTION DEDICATED 3-AD SWITCHER TAB BAR (Synchronized with top stage) */}
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 p-2.5 rounded-2xl bg-black/60 border border-white/10 shadow-lg">
                  
                  {/* Format Toggle Pill inside Teardown */}
                  <div className="flex items-center bg-black/80 p-1 rounded-xl border border-white/10 shrink-0">
                    <button
                      onClick={() => setActiveStudioTab('static')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                        activeStudioTab === 'static'
                          ? 'bg-emerald-500 text-black shadow font-extrabold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Static Ads (3)
                    </button>
                    <button
                      onClick={() => {
                        setActiveStudioTab('carousel');
                        setCarouselSlideIdx(0);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                        activeStudioTab === 'carousel'
                          ? 'bg-emerald-500 text-black shadow font-extrabold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Carousels (3)
                    </button>
                  </div>

                  {/* 3 Dedicated Ad Switching Tabs */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 flex-1">
                    {activeStudioTab === 'static' ? (
                      staticAdsData.map((ad, idx) => (
                        <button
                          key={ad.id}
                          onClick={() => setSelectedStaticIdx(idx)}
                          className={`px-3 py-2 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                            selectedStaticIdx === idx
                              ? 'bg-[#131D2E] border-emerald-400 text-white shadow-md ring-1 ring-emerald-400/40'
                              : 'bg-white/[0.02] border-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]'
                          }`}
                        >
                          <div className="min-w-0 flex-1">
                            <div className="text-[10px] font-mono font-bold text-emerald-400">Ad 0{idx + 1}</div>
                            <div className="text-xs font-bold truncate text-white">{ad.title.split(' (')[0]}</div>
                          </div>
                          {selectedStaticIdx === idx && (
                            <div className="w-5 h-5 rounded-full bg-emerald-500 text-black flex items-center justify-center shrink-0">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                          )}
                        </button>
                      ))
                    ) : (
                      carouselsData.map((car, idx) => (
                        <button
                          key={car.id}
                          onClick={() => {
                            setSelectedCarouselIdx(idx);
                            setCarouselSlideIdx(0);
                          }}
                          className={`px-3 py-2 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                            selectedCarouselIdx === idx
                              ? 'bg-[#131D2E] border-emerald-400 text-white shadow-md ring-1 ring-emerald-400/40'
                              : 'bg-white/[0.02] border-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]'
                          }`}
                        >
                          <div className="min-w-0 flex-1">
                            <div className="text-[10px] font-mono font-bold text-emerald-400">Suite 0{idx + 1} ({car.slides.length} Slides)</div>
                            <div className="text-xs font-bold truncate text-white">{car.title.split(' (')[0]}</div>
                          </div>
                          {selectedCarouselIdx === idx && (
                            <div className="w-5 h-5 rounded-full bg-emerald-500 text-black flex items-center justify-center shrink-0">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                          )}
                        </button>
                      ))
                    )}
                  </div>

                </div>
              </div>

              {/* 2-Column Side-by-Side Blueprint Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* LEFT HALF: Active Creative Artwork Preview & Strategic Psychology (6 Cols) */}
                <div className="lg:col-span-6 space-y-4">
                  
                  {/* Active Creative Artwork Visual Preview (Sharp 90° Corners - Rounded None) */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-black/60 border border-white/10 space-y-3 shadow-lg">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Active Creative Artwork</span>
                      </div>
                      <span className="text-[10px] text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                        {activeStudioTab === 'static' ? `${staticRatio} Ratio` : `Slide ${carouselSlideIdx + 1} of ${currentCarousel.slides.length}`}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      {/* Mini Creative Thumbnail (Sharp Corners) */}
                      <div 
                        onClick={() => setIsLightboxOpen(true)}
                        className={`relative rounded-none border border-white/20 bg-[#020B06] overflow-hidden shrink-0 cursor-zoom-in group shadow-lg ${
                          activeStudioTab === 'static' && staticRatio === '1x1'
                            ? 'w-24 h-24 sm:w-28 sm:h-28'
                            : 'w-20 h-24 sm:w-24 sm:h-28'
                        }`}
                        title="Click to view 1080p full resolution"
                      >
                        <img
                          src={
                            activeStudioTab === 'static'
                              ? (staticRatio === '4x5' ? currentStatic.ratio4x5 : currentStatic.ratio1x1)
                              : currentSlide.img
                          }
                          alt={activeStudioTab === 'static' ? currentStatic.title : currentSlide.title}
                          className="w-full h-full object-contain rounded-none block group-hover:scale-105 transition-transform duration-200"
                          style={{ imageRendering: '-webkit-optimize-contrast' }}
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                      </div>

                      {/* Ad Artwork Metadata & Quick Lightbox Trigger */}
                      <div className="space-y-1.5 min-w-0 flex-1">
                        <div className="text-xs sm:text-sm font-bold text-white font-display truncate">
                          {activeStudioTab === 'static' ? currentStatic.title : currentSlide.title}
                        </div>
                        <div className="text-[11px] text-slate-400 font-sans line-clamp-2">
                          {activeStudioTab === 'static' ? currentStatic.hook : currentSlide.desc}
                        </div>
                        <div className="flex items-center gap-2 pt-1">
                          <button
                            onClick={() => setIsLightboxOpen(true)}
                            className="text-[11px] font-mono font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer"
                          >
                            <Maximize2 className="w-3 h-3" />
                            <span>1080p Zoom</span>
                          </button>
                          {activeStudioTab === 'carousel' && (
                            <div className="flex items-center gap-1 text-[10px] font-mono ml-auto">
                              <button
                                onClick={() => setCarouselSlideIdx((prev) => (prev > 0 ? prev - 1 : currentCarousel.slides.length - 1))}
                                className="px-2 py-0.5 bg-white/10 hover:bg-white/20 rounded text-slate-300 cursor-pointer"
                              >
                                Prev
                              </button>
                              <button
                                onClick={() => setCarouselSlideIdx((prev) => (prev < currentCarousel.slides.length - 1 ? prev + 1 : 0))}
                                className="px-2 py-0.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 rounded cursor-pointer font-bold"
                              >
                                Next
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Strategic Metadata Pills */}
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-xs font-mono font-bold text-emerald-400">
                      <Target className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{activeStudioTab === 'static' ? currentStatic.awarenessLevel : currentCarousel.awarenessLevel}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-xs font-mono font-bold text-cyan-300">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{activeStudioTab === 'static' ? currentStatic.angleType : currentCarousel.angleType}</span>
                    </span>
                  </div>

                  {/* Creative Test Hypothesis Box */}
                  <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 space-y-2">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-300 font-bold uppercase tracking-wider">
                      <FlaskConical className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>Creative Test Hypothesis & Win Condition</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed italic pl-4 border-l-2 border-cyan-400/50">
                      "{activeStudioTab === 'static' ? currentStatic.hypothesis : currentCarousel.hypothesis}"
                    </p>
                  </div>

                  {/* Forensic Performance Metrics Grid */}
                  <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                    <div className="p-3 sm:p-3.5 rounded-2xl bg-black/40 border border-white/5 text-center space-y-0.5">
                      <div className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase font-semibold">
                        {activeStudioTab === 'static' ? 'Thumbstop Rate' : 'Swipe Rate'}
                      </div>
                      <div className="text-base sm:text-xl font-bold text-emerald-400 font-mono">
                        {activeStudioTab === 'static' ? currentStatic.holdRate : currentCarousel.swipeRate}
                      </div>
                      <div className="text-[9px] font-mono text-slate-400">
                        {activeStudioTab === 'static' ? '3-Sec Hook Stop' : 'Card Swipe Rate'}
                      </div>
                    </div>
                    <div className="p-3 sm:p-3.5 rounded-2xl bg-black/40 border border-white/5 text-center space-y-0.5">
                      <div className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase font-semibold">
                        Est. Feed CTR
                      </div>
                      <div className="text-base sm:text-xl font-bold text-cyan-400 font-mono">
                        {activeStudioTab === 'static' ? currentStatic.ctr : currentCarousel.ctr}
                      </div>
                      <div className="text-[9px] font-mono text-slate-400">
                        Click-Through Rate
                      </div>
                    </div>
                    <div className="p-3 sm:p-3.5 rounded-2xl bg-black/40 border border-white/5 text-center space-y-0.5">
                      <div className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase font-semibold">
                        Target ROAS
                      </div>
                      <div className="text-base sm:text-xl font-bold text-purple-400 font-mono">
                        {activeStudioTab === 'static' ? currentStatic.roas : currentCarousel.roas}
                      </div>
                      <div className="text-[9px] font-mono text-slate-400">
                        {activeStudioTab === 'static' ? 'Direct DTC Return' : `${currentCarousel.cpmSavingsLabel} Efficiency`}
                      </div>
                    </div>
                  </div>

                  {/* Strategic Psychology Teardown */}
                  <div className="p-4 rounded-2xl bg-[#0D121D] border border-white/10 space-y-1.5">
                    <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-bold">
                      Psychological Hook & Scientific Mechanism:
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                      {activeStudioTab === 'static' ? currentStatic.psychology : currentSlide.desc}
                    </p>
                  </div>

                  {/* If Carousel: Active Slide Role Teardown */}
                  {activeStudioTab === 'carousel' && (
                    <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 space-y-1.5 text-xs">
                      <div className="flex items-center justify-between font-mono text-[11px]">
                        <span className="text-emerald-400 font-bold">Active Slide {carouselSlideIdx + 1}: {currentSlide.role}</span>
                        <span className="text-slate-400 font-bold">{currentSlide.num}</span>
                      </div>
                      <p className="text-slate-200 font-medium text-xs sm:text-sm">{currentSlide.keyStat}</p>
                    </div>
                  )}

                </div>

                {/* RIGHT HALF: Live Meta Copy Deck (6 Cols) */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="p-5 rounded-3xl bg-[#0F1522] border border-cyan-500/20 space-y-4 shadow-xl">
                    
                    {/* Copy Deck Header + Copy Button */}
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold">
                        <FileText className="w-4 h-4" />
                        <span>Companion Meta Caption (Feed & Stories)</span>
                      </div>
                      <button
                        onClick={() => handleCopyAdText(activeStudioTab === 'static' ? currentStatic.primaryText : currentCarousel.primaryText)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all cursor-pointer shadow-sm"
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

                    {/* Primary Text Box */}
                    <div className="p-4 rounded-2xl bg-black/60 border border-white/5 max-h-64 sm:max-h-72 overflow-y-auto font-mono text-xs text-slate-300 leading-relaxed space-y-2 select-text">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider pb-1 border-b border-white/5 font-sans font-bold">
                        Meta Primary Text (Feed & Stories):
                      </div>
                      <div className="whitespace-pre-line">
                        {activeStudioTab === 'static' ? currentStatic.primaryText : currentCarousel.primaryText}
                      </div>
                    </div>

                    {/* Headline & CTA */}
                    <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between text-xs font-mono gap-3">
                      <div className="space-y-0.5 truncate min-w-0">
                        <div className="text-[10px] text-slate-400 uppercase">Headline:</div>
                        <div className="text-slate-100 font-bold truncate">
                          {activeStudioTab === 'static' ? currentStatic.headline : currentCarousel.headline}
                        </div>
                      </div>
                      <div className="px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold shrink-0">
                        {activeStudioTab === 'static' ? currentStatic.cta : currentCarousel.cta}
                      </div>
                    </div>

                    {/* Store Congruency Callout */}
                    <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between gap-3 text-xs font-sans">
                      <div className="text-amber-200/90 text-xs">
                        Matches Phase 04 Shopify Store offer: <strong>50% OFF TODAY ($59.90 AUD)</strong>
                      </div>
                      <button
                        onClick={handleJumpToPdp}
                        className="px-2.5 py-1 rounded-lg bg-amber-500 text-black font-bold text-[11px] font-mono shrink-0 hover:bg-amber-400 transition-colors cursor-pointer"
                      >
                        Inspect PDP ➔
                      </button>
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
            <div className="space-y-2.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] sm:text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                  PART 02 // CREATIVE PRODUCTION & SHOPIFY STORE
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  Phase 04 // Shopify PDP & Conversion Funnel
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                The Live Shopify Conversion Engine
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md font-sans leading-relaxed">
              An ad is only as good as the landing page it hits. We architected a complete Shopify PDP with multi-pack savings, sticky add-to-cart, and instant checkout.
            </p>
          </div>

          {/* UNIFIED FLAGSHIP SHOPIFY OS 2.0 SHOWCASE CARD */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0B0F17] border border-amber-500/30 space-y-8 shadow-2xl relative overflow-hidden">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[130px] pointer-events-none" />

            {/* Card Header: Live Status & Strategic Purpose */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 relative z-10">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>LIVE SHOPIFY OS 2.0 STOREFRONT ONLINE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight">
                  Post-Click Conversion Engine & Message-Match Architecture
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed max-w-2xl">
                  Why 90% of DTC ads fail post-click: <strong className="text-white">Scent Mismatch</strong>. We engineered an Australian Shopify PDP where the 45°C heatwave proof, 50% discount ($59.90 AUD), and interactive sizing match our Meta ad creatives 1-to-1 with zero friction.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-full font-bold">
                  100% Scent-Match Audited
                </span>
              </div>
            </div>

            {/* UNIFIED STOREFRONT ACCESS TERMINAL (Clickable URL + Password in 1 Row) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 relative z-10">
              
              {/* Left Box: Active Clickable Store URL Link */}
              <a
                href="https://arborpulse-store.myshopify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="md:col-span-7 p-4 sm:p-5 rounded-2xl bg-black/60 hover:bg-black/80 border border-white/10 hover:border-amber-400/50 transition-all group flex items-center justify-between gap-3 shadow-lg cursor-pointer"
                title="Click to launch live store in a new tab"
              >
                <div className="space-y-1 min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Live Storefront URL</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-sm sm:text-base font-mono font-extrabold text-white group-hover:text-amber-300 transition-colors truncate">
                    https://arborpulse-store.myshopify.com
                  </div>
                </div>
                <div className="px-3 py-2 rounded-xl bg-amber-500/20 group-hover:bg-amber-400 text-amber-300 group-hover:text-black font-mono font-bold text-xs flex items-center gap-1.5 shrink-0 transition-all shadow-sm">
                  <span>Open Store</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>

              {/* Right Box: Demo Password & 1-Click Copy */}
              <div className="md:col-span-5 p-4 sm:p-5 rounded-2xl bg-black/60 border border-amber-500/30 flex items-center justify-between gap-3 shadow-lg">
                <div className="space-y-1 min-w-0">
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block font-bold">Store Password</span>
                  <div className="text-base sm:text-lg font-mono font-black text-white tracking-wide">
                    StackCuts
                  </div>
                </div>
                <button
                  onClick={handleCopyPassword}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 hover:text-white text-xs font-mono font-bold transition-all cursor-pointer shadow-sm active:scale-95 shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Password</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* DUAL-VIEWPORT RESPONSIVENESS & CLIENT AUDIT PROTOCOL */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-black/60 to-cyan-950/30 border border-emerald-500/25 space-y-3.5 relative z-10 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400">
                  <Smartphone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="uppercase tracking-wider">100% Mobile-First & Desktop Adaptive Architecture</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono">
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-semibold">
                    📱 Mobile Viewport Audited
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-semibold">
                    💻 Desktop Scrollytelling Audited
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                <strong className="text-white">Section-by-Section Client Testing Protocol:</strong> Over 82% of Meta ad traffic converts on mobile feeds. You can test this live storefront on both your <strong className="text-emerald-400">Mobile Device (iOS / Android)</strong> and your <strong className="text-cyan-400">Desktop / Laptop</strong>. Test each interactive component section-by-section to verify zero-friction performance:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs font-mono">
                <div className="p-3 rounded-xl bg-black/50 border border-white/5 space-y-1.5">
                  <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Mobile Thumb-Zone ATC</span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                    Persistent 1-tap checkout bar anchors to mobile viewports past the product gallery, keeping checkout friction-free.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-black/50 border border-white/5 space-y-1.5">
                  <div className="text-cyan-400 font-bold flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Touch-Calibrated Sizing</span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                    Trunk diameter slider glides effortlessly with touch gestures on phones and precise click/drag on desktop.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-black/50 border border-white/5 space-y-1.5">
                  <div className="text-amber-400 font-bold flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Zero Horizontal Drift (0px)</span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                    Comparison tables and scrollytelling diagrams are fluidly constrained with zero horizontal overflow across 320px–4k screens.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 CORE PILLARS: Ad-to-PDP Conversion Architecture */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans relative z-10">
              
              <div className="p-5 rounded-2xl bg-black/40 border border-white/10 hover:border-amber-500/30 transition-all space-y-2.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-400 font-bold">Stage 01 // Headline Scent Match</span>
                  <span className="text-[10px] text-slate-500 font-mono">Ad ➔ PDP Hero</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white font-display">
                  "45°C Heatwave Defense" Hook Congruency
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  When a buyer clicks Ad 01 or Carousel 01, the PDP Hero immediately validates the exact 45°C badge and 50% off discount ($59.90 AUD, was $119.80).
                </p>
                <div className="pt-2 text-[11px] font-mono text-emerald-400 font-semibold border-t border-white/5 flex items-center gap-1">
                  <span>➔</span>
                  <span>Eliminates Bounce / Confirms Intent in &lt;1.2s</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-black/40 border border-white/10 hover:border-cyan-500/30 transition-all space-y-2.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-cyan-400 font-bold">Stage 02 // Sizing & Scientific Proof</span>
                  <span className="text-[10px] text-slate-500 font-mono">Education ➔ Trust</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white font-display">
                  Interactive Trunk Sizing Calculator
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Live trunk diameter slider (50mm–200mm) instantly recommends 37L Standard vs 95L Pro, backed by deep subterranean 50cm root moisture scrollytelling.
                </p>
                <div className="pt-2 text-[11px] font-mono text-cyan-300 font-semibold border-t border-white/5 flex items-center gap-1">
                  <span>➔</span>
                  <span>Zero Purchase Hesitation / High Trust</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-black/40 border border-white/10 hover:border-emerald-500/30 transition-all space-y-2.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400 font-bold">Stage 03 // High-AOV Multi-Pack</span>
                  <span className="text-[10px] text-slate-500 font-mono">Offer Congruency</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white font-display">
                  Pre-Selected Buy 2 Pack ($107.82 AUD)
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Incentivizes multi-tree orders with extra 10% savings + Free Australia Delivery. Persistent floating mobile ATC bar ensures sub-1s checkout paths.
                </p>
                <div className="pt-2 text-[11px] font-mono text-emerald-300 font-semibold border-t border-white/5 flex items-center gap-1">
                  <span>➔</span>
                  <span>+34% Higher AOV / Frictionless Checkout</span>
                </div>
              </div>

            </div>

            {/* SHOPIFY OS 2.0 TECHNICAL SPECIFICATIONS STRIP */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono relative z-10">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="text-amber-400 font-bold">1. 100% Coded Comparison Matrix</div>
                <p className="text-slate-400 text-[11px] font-sans">No static imagery. Live coded table proving 900D ballistic poly & 5-year UV warranty against generic green PVC bags.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="text-cyan-400 font-bold">2. Slide-Out Cart Drawer ($99 Free Ship)</div>
                <p className="text-slate-400 text-[11px] font-sans">Dynamic free shipping progress bar and instant multi-pack quantity recalculation directly inside the drawer.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="text-emerald-400 font-bold">3. Sticky Mobile Add-To-Cart Bar</div>
                <p className="text-slate-400 text-[11px] font-sans">Persistent purchase anchor appears once user scrolls past product gallery, eliminating mobile checkout friction.</p>
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

      {/* ================= 1080P FULL RESOLUTION LIGHTBOX MODAL ================= */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-2xl p-3 sm:p-6 select-none animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Modal Top Controls Bar */}
          <div 
            className="w-full max-w-5xl flex items-center justify-between pb-3 text-white border-b border-white/10 shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold border border-emerald-500/30">
                1080p Native Master
              </span>
              <span className="text-xs sm:text-sm font-bold font-display text-white truncate max-w-xs sm:max-w-md">
                {activeStudioTab === 'static' ? currentStatic.title : currentCarousel.title}
              </span>
              {activeStudioTab === 'carousel' && (
                <span className="text-xs font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded-md border border-white/10">
                  Slide {carouselSlideIdx + 1} of {currentCarousel.slides.length}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Image Viewport */}
          <div 
            className="relative flex-1 flex items-center justify-center w-full max-w-5xl my-auto py-3 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Slide Arrow in Modal */}
            {activeStudioTab === 'carousel' && (
              <button
                onClick={() => setCarouselSlideIdx((prev) => (prev > 0 ? prev - 1 : currentCarousel.slides.length - 1))}
                aria-label="Previous Slide"
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/80 hover:bg-black text-white border border-white/20 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer z-30"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            <div className="relative max-h-[80vh] max-w-full rounded-none overflow-hidden shadow-2xl border border-white/20 flex items-center justify-center bg-[#020B06]">
              <img
                src={
                  activeStudioTab === 'static'
                    ? (staticRatio === '4x5' ? currentStatic.ratio4x5 : currentStatic.ratio1x1)
                    : currentSlide.img
                }
                alt={
                  activeStudioTab === 'static'
                    ? currentStatic.title
                    : currentSlide.title
                }
                className="max-h-[80vh] w-auto max-w-full object-contain block select-none rounded-none"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />
            </div>

            {/* Next Slide Arrow in Modal */}
            {activeStudioTab === 'carousel' && (
              <button
                onClick={() => setCarouselSlideIdx((prev) => (prev < currentCarousel.slides.length - 1 ? prev + 1 : 0))}
                aria-label="Next Slide"
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black border border-emerald-400/50 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer z-30 font-bold"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Modal Footer Bar */}
          <div 
            className="w-full max-w-5xl flex items-center justify-between pt-2 border-t border-white/10 text-xs font-mono text-slate-400 shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="text-emerald-400 font-bold">
                {activeStudioTab === 'static' ? (staticRatio === '4x5' ? '1080 x 1350 px (4:5 Feed)' : '1080 x 1080 px (1:1 Feed)') : '1080 x 1350 px (Panoramic Continuous)'}
              </span>
              <span>•</span>
              <span>Performance: <strong className="text-white">{activeStudioTab === 'static' ? currentStatic.holdRate.split(' ')[0] : currentCarousel.avgSwipeRate}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-slate-500">Press ESC or click outside to close</span>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs cursor-pointer"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
