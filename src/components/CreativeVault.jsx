import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Play, ZoomIn, X, ChevronLeft, ChevronRight, ExternalLink, ShieldCheck, Copy, Check, Smartphone, Laptop, Lock, ArrowUpRight } from 'lucide-react';

export default function CreativeVault() {
  // Default to first focused service tab (No cluttered "All" tab)
  const [activeTab, setActiveTab] = useState('static');
  const [isUpworkSource, setIsUpworkSource] = useState(false);
  const [staticBrandFilter, setStaticBrandFilter] = useState('all');
  const [staticAngleFilter, setStaticAngleFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [carouselIndexMap, setCarouselIndexMap] = useState({});
  const [gridCols, setGridCols] = useState(2);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const [copiedStoreId, setCopiedStoreId] = useState(null);
  const mobileScrollRef = useRef(null);

  const handleCopyPassword = (e, storeId) => {
    e.stopPropagation();
    navigator.clipboard.writeText('StackCuts').then(() => {
      setCopiedStoreId(storeId);
      setTimeout(() => setCopiedStoreId(null), 2500);
    }).catch(() => {
      setCopiedStoreId(storeId);
      setTimeout(() => setCopiedStoreId(null), 2500);
    });
  };

  const handleOpenModal = (item) => {
    setPlayingVideoId(null);
    setSelectedItem(item);
  };

  const handleTabChange = (catId) => {
    setActiveTab(catId);
    setPlayingVideoId(null);
    setMobileActiveIndex(0);
    if (mobileScrollRef.current) {
      mobileScrollRef.current.scrollTo({ left: 0, behavior: 'instant' });
    }
    if (catId === 'ugc') {
      setGridCols(4);
    } else {
      setGridCols(2);
    }
    try {
      if (window.location.hash !== `#${catId}`) {
        window.history.replaceState(null, '', `#${catId}`);
      }
    } catch {
      // Ignore if restricted
    }
  };

  // Detect Upwork traffic to conditionally isolate client assets (Zero-Footprint in Upwork Mode)
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const refParam = params.get('ref')?.toLowerCase();
      const sourceParam = params.get('source')?.toLowerCase();
      const utmParam = params.get('utm_source')?.toLowerCase();
      const referrer = typeof document !== 'undefined' ? (document.referrer?.toLowerCase() || '') : '';
      const isFromUpwork = referrer.includes('upwork.com');

      if (
        refParam === 'upwork' ||
        sourceParam === 'upwork' ||
        utmParam === 'upwork' ||
        isFromUpwork
      ) {
        setIsUpworkSource(true);
      } else {
        setIsUpworkSource(false);
      }
    } catch {
      // Graceful fallback
    }
  }, []);

  // Handle URL hash deep linking (e.g. #ugc, #shopify, #motion, #static, #carousel, #photoshoot, #vault)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase().replace('#', '').trim();
      const validTabs = ['static', 'motion', 'carousel', 'ugc', 'photoshoot', 'shopify'];

      if (validTabs.includes(hash)) {
        setActiveTab(hash);
        setPlayingVideoId(null);
        setMobileActiveIndex(0);
        if (hash === 'ugc') {
          setGridCols(4);
        } else {
          setGridCols(2);
        }
        setTimeout(() => {
          const el = document.getElementById('vault');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      } else if (hash === 'vault') {
        const el = document.getElementById('vault');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleScrollMobile = () => {
    if (mobileScrollRef.current) {
      const scrollLeft = mobileScrollRef.current.scrollLeft;
      const cardWidth = 320;
      const index = Math.round(scrollLeft / cardWidth);
      setMobileActiveIndex(Math.min(Math.max(0, index), filteredItems.length - 1));
    }
  };

  const handleScrollPrev = () => {
    if (mobileScrollRef.current) {
      mobileScrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const handleScrollNext = () => {
    if (mobileScrollRef.current) {
      mobileScrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  // 6 Specialized Production Categories (Aligned 1-to-1 with Mayur's Audio Briefing)
  const categories = [
    { id: 'static', label: 'Static Meta Ads' },
    { id: 'motion', label: 'Micro-Motion Ads' },
    { id: 'carousel', label: 'Carousel Systems' },
    { id: 'ugc', label: 'AI UGC Video' },
    { id: 'photoshoot', label: 'AI Photoshoots' },
    { id: 'shopify', label: 'Shopify PDPs' },
  ];

  // Curated High-Converting Creative Artifacts from Mayur's Production Suite
  const vaultItems = [
    // 1. STATIC META ADS (4:5 High-Converting Production Creatives)
    {
      id: 'static-01',
      brand: 'auraflora',
      category: 'static',
      categoryLabel: 'Static Meta Ad',
      format: '4:5 Feed Creative',
      title: 'Us vs. Them // Clinical Comparison Matrix',
      hook: 'Direct Feature Breakdown: 5 Drops vs. Bulky Capsules',
      angle: 'Cognitive Reassurance & Superiority',
      image: '/vault/static/AD01_Us_Vs_Them_4x5.png',
      metric: 'CVR Winner (High AOV)',
      description: 'Controlled A/B Split Test Version A. Built for high-intent shoppers needing logical proof points, ingredient counts, and speed verification before pulling out their credit card.'
    },
    {
      id: 'static-02',
      brand: 'auraflora',
      category: 'static',
      categoryLabel: 'Static Meta Ad',
      format: '4:5 Feed Creative',
      title: 'Peer Confession // Native iMessage Split',
      hook: 'Unfiltered Customer Quotes: "Unbuttoning Jeans by 2 PM"',
      angle: 'Empathetic Peer Validation & Raw Relatability',
      image: '/vault/static/AD01B_Your_Problems_Our_Solution_4x5.png',
      metric: 'Thumbstop Winner (Low CPC)',
      description: 'Controlled A/B Split Test Version B. 50/50 split layout pairing authentic iOS peer chat bubbles with studio hero product display to stop scrollers who ignore traditional ads.'
    },
    {
      id: 'static-03',
      brand: 'auraflora',
      category: 'static',
      categoryLabel: 'Static Meta Ad',
      format: '4:5 Feed Creative',
      title: 'iPhone Notes App // Organic Feed Trojan Horse',
      hook: 'Appears Completely Organic in Instagram & Facebook Feeds',
      angle: 'Anti-Ad Fatigue & Emotional Frustration',
      image: '/vault/static/AD02_Notes_App_Confession_4x5.png',
      metric: 'Broad ASC+ Top-of-Funnel',
      description: 'Bypasses commercial ad blindness by simulating an authentic Apple Notes checklist. Addresses probiotic and enzyme fatigue before introducing the 15-second sublingual solution.'
    },
    {
      id: 'static-04',
      brand: 'auraflora',
      category: 'static',
      categoryLabel: 'Static Meta Ad',
      format: '4:5 Feed Creative',
      title: '6-Botanicals // Clinical Ingredient Authority',
      hook: 'Inside Every Drop: 6 Targeted Bioactive Herbs',
      angle: 'Pharmacognosy & Proof-First Authority',
      image: '/vault/static/AD03_6_Botanicals_Clinical_Teardown_4x5.png',
      metric: '32%+ Thumbstop Benchmark',
      description: 'Deep apothecary dark mode palette with golden elixir glow. Features 6 clinical micro-badges with real macro photography detailing each botanical mechanism.'
    },
    {
      id: 'static-05',
      brand: 'auraflora',
      category: 'static',
      categoryLabel: 'Static Meta Ad',
      format: '4:5 Feed Creative',
      title: '3D Kinetic Helix // Visceral Motility Transformation',
      hook: 'Why Liquid Drops Beat Bulky Bloat Pills',
      angle: 'Benefit-First & Visceral Transformation',
      image: '/vault/static/AD03B_Kinetic_Helix_Motility_4x5.png',
      metric: 'Outbound CTR > 2.2%',
      description: 'Pristine alabaster studio lighting featuring a dynamic 3D emerald ribbon helix spiraling around the bottle, communicating 4 plain-English consumer relief outcomes.'
    },
    {
      id: 'static-06',
      brand: 'auraflora',
      category: 'static',
      categoryLabel: 'Static Meta Ad',
      format: '4:5 Feed Creative',
      title: 'Visual Body Map // 15-Sec Vagus Nerve Reflex',
      hook: '1 Dropper. 3 Levels of Motility. 15 Seconds.',
      angle: 'Visual Mechanism & Anatomical Highway',
      image: '/vault/static/AD04_15Sec_Vagus_Nerve_Mechanism_4x5.png',
      metric: '75% Visual / High Retention',
      description: 'Visual-first anatomy body map linking tongue taste receptors to the vagus nerve, stomach acid activation, gallbladder bile rush, and cramp-free morning regularity.'
    },
    {
      id: 'static-07',
      brand: 'auraflora',
      category: 'static',
      categoryLabel: 'Static Meta Ad',
      format: '4:5 Feed Creative',
      title: 'WhatsApp Native UI // "Has Left The Chat" Meme UI',
      hook: 'Zero Cramps. Zero Bathroom Emergencies.',
      angle: 'Objection Destruction & Social Proof',
      image: '/vault/static/AD05_Social_Comment_Objection_Breaker_4x5.png',
      metric: 'High Retargeting ROAS',
      description: 'Directly obliterates the #1 silent customer fear ("Will this give me painful laxative cramps?") using a native social chat frame where stomach cramps and food baby leave the chat.'
    },

    // =========================================================================
    // 1B. QUIETWAKE™ AUSTRALIA — 5-ANGLE PSYCHOGRAPHIC AD MATRIX (15 Master Ads)
    // =========================================================================
    // ANGLE 01: Early Risers & Shift Workers (FIFO Miners, Healthcare, Trades)
    {
      id: 'qw-01',
      brand: 'quietwake',
      isQuietWake: true,
      category: 'static',
      categoryLabel: 'Static Meta Ad',
      angleId: 'angle-1',
      angleName: 'Angle 01 // Shift Workers & Early Risers',
      format: '4:5 Feed Creative',
      title: 'QuietWake™ // Shift Worker Lifestyle Dialogue',
      hook: '"My 5:15 AM alarm used to wake my wife every single shift. QuietWake wakes only me."',
      angle: 'Conversational Dialogue & Partner Empathy',
      image: '/vault/quietwake/QW_Angle01_Ad01_ShiftWorker_4x5.jpg',
      metric: 'Audience CTR Winner',
      description: 'Australian healthcare worker in scrubs paired with an authentic speech bubble addressing early shift partner guilt. Inset hero packshot proves sleek form factor and zero acoustic noise.'
    },
    {
      id: 'qw-02',
      brand: 'quietwake',
      isQuietWake: true,
      category: 'static',
      categoryLabel: 'Static Meta Ad',
      angleId: 'angle-1',
      angleName: 'Angle 01 // Shift Workers & Early Risers',
      format: '4:5 Feed Creative',
      title: 'QuietWake™ // Scorecard Minimal Showdown',
      hook: '3-Row Us vs. Them: Blaring Phone Alarms vs. Silent Sensory Haptics',
      angle: 'Direct Feature Comparison & Household Harmony',
      image: '/vault/quietwake/QW_Angle01_Ad02_Scorecard_4x5.jpg',
      metric: 'High AOV Battlecard',
      description: 'Visceral comparison card contrasting blaring auditory alarms (wakes entire house, morning cortisol spike) against QuietWake silent direct wrist vibration ($79.90 AUD).'
    },
    {
      id: 'qw-03',
      brand: 'quietwake',
      isQuietWake: true,
      category: 'static',
      categoryLabel: 'Static Meta Ad',
      angleId: 'angle-1',
      angleName: 'Angle 01 // Shift Workers & Early Risers',
      format: '4:5 Feed Creative',
      title: 'QuietWake™ // Radial Shockwave Mechanism',
      hook: 'Gentle Radial Haptic Pulse // Zero Sound, 100% Awakening',
      angle: 'Sensory Physics & Haptic Mechanism',
      image: '/vault/quietwake/QW_Angle01_Ad03_RadialShock_4x5.jpg',
      metric: 'Technical Mechanism Winner',
      description: 'Minimalist studio lighting with concentric cyan vibration shockwave rings illustrating the silent motor mechanism waking only the wearer through direct tactile stimulation.'
    },

    // ANGLE 02: Anti-Cortisol & Alarm Trauma (Ending Morning Panic & Heart Spikes)
    {
      id: 'qw-04',
      brand: 'quietwake',
      isQuietWake: true,
      category: 'static',
      categoryLabel: 'Static Meta Ad',
      angleId: 'angle-2',
      angleName: 'Angle 02 // Anti-Cortisol Alarm Shock',
      format: '4:5 Feed Creative',
      title: 'QuietWake™ // The Zombie Morning Diorama',
      hook: '"Waking up with your heart racing at 140 BPM is NOT normal."',
      angle: 'Anti-Cortisol & Fight-or-Flight Agitation',
      image: '/vault/quietwake/QW_Angle02_Ad04_ZombieDiorama_4x5.jpg',
      metric: 'Thumbstop Interrupt',
      description: 'High-contrast cinematic bedroom diorama capturing the visceral exhaustion of blaring acoustic alarms vs the calm blue haptic sunrise awakening.'
    },
    {
      id: 'qw-05',
      brand: 'quietwake',
      isQuietWake: true,
      category: 'static',
      categoryLabel: 'Static Meta Ad',
      angleId: 'angle-2',
      angleName: 'Angle 02 // Anti-Cortisol Alarm Shock',
      format: '4:5 Feed Creative',
      title: 'QuietWake™ // Serene Awakening Lifestyle Hero',
      hook: 'End The Cortisol Spike: Wake Calmly, Naturally, and Silently',
      angle: 'Wellness Ritual & Nervous System Protection',
      image: '/vault/quietwake/QW_Angle02_Ad05_WellnessHero_4x5.jpg',
      metric: 'Broad Female Wellness',
      description: 'Soft morning daylight bedroom aesthetic showing gentle sensory wrist awakening, eliminating the traumatic acoustic shock of blaring iPhone alarms.'
    },
    {
      id: 'qw-06',
      brand: 'quietwake',
      isQuietWake: true,
      category: 'static',
      categoryLabel: 'Static Meta Ad',
      angleId: 'angle-2',
      angleName: 'Angle 02 // Anti-Cortisol Alarm Shock',
      format: '4:5 Feed Creative',
      title: 'QuietWake™ // Bio-Haptic Sensory Blueprint',
      hook: 'Engineered For Peaceful Sleep Architecture // Technical Teardown',
      angle: 'Biometric Engineering & Soundless Mechanics',
      image: '/vault/quietwake/QW_Angle02_Ad06_HapticBlueprint_4x5.jpg',
      metric: 'Authority Blueprint',
      description: 'Apothecary blueprint technical teardown breaking down the internal precision vibration motor, skin-safe silicone strap, and 10-day battery life.'
    },

    // ANGLE 03: Heavy Sleepers & The 10-Alarms Snooze Trap
    {
      id: 'qw-07',
      brand: 'quietwake',
      isQuietWake: true,
      category: 'static',
      categoryLabel: 'Static Meta Ad',
      angleId: 'angle-3',
      angleName: 'Angle 03 // Heavy Sleepers Snooze Trap',
      format: '4:5 Feed Creative',
      title: 'QuietWake™ // Hard vs. Smart Awakening Metaphor',
      hook: 'Setting 10 Louder Alarms Doesn’t Work. Physical Touch Does.',
      angle: 'Cognitive Shift & Sensory Physics',
      image: '/vault/quietwake/QW_Angle03_Ad07_SmartMetaphor_4x5.jpg',
      metric: 'Cognitive Reframing',
      description: 'Visual metaphor contrasting ineffective auditory brute force against intelligent tactile stimulation that cuts straight through heavy sleep cycles.'
    },
    {
      id: 'qw-08',
      brand: 'quietwake',
      isQuietWake: true,
      category: 'static',
      categoryLabel: 'Static Meta Ad',
      angleId: 'angle-3',
      angleName: 'Angle 03 // Heavy Sleepers Snooze Trap',
      format: '4:5 Feed Creative',
      title: 'QuietWake™ // The 10-Alarm Lockscreen Chaos',
      hook: 'Relatable Trap: 6:00 AM, 6:05 AM, 6:10 AM, 6:15 AM Alarm List',
      angle: 'Native Problem Mirror & Snooze Agitation',
      image: '/vault/quietwake/QW_Angle03_Ad08_LockscreenChaos_4x5.jpg',
      metric: 'High Virality & Share Rate',
      description: 'Pairs a chaotic iPhone alarm screen of 12 consecutive alarm triggers with the single, decisive QuietWake silent wristband that ends the snooze cycle on vibration 1.'
    },
    {
      id: 'qw-09',
      brand: 'quietwake',
      isQuietWake: true,
      category: 'static',
      categoryLabel: 'Static Meta Ad',
      angleId: 'angle-3',
      angleName: 'Angle 03 // Heavy Sleepers Snooze Trap',
      format: '4:5 Feed Creative',
      title: 'QuietWake™ // 3-Colorway Family Product Suite',
      hook: 'Midnight Black, Arctic White, Electric Blue // Pick Your Awakening',
      angle: 'Product Lineup & Aesthetic Variety',
      image: '/vault/quietwake/QW_Angle03_Ad09_AllColorsFamily_4x5.jpg',
      metric: 'Catalog Retargeting',
      description: 'Clean studio packshot showcasing all three available band finishes ($79.90 AUD), targeted at retargeting mid-funnel shoppers deciding on color options.'
    },

    // ANGLE 04: Hearing-Impaired & Deaf Community (Batch 2 Client Approval Milestone)
    {
      id: 'qw-10',
      brand: 'quietwake',
      isQuietWake: true,
      category: 'static',
      categoryLabel: 'Static Meta Ad',
      angleId: 'angle-4',
      angleName: 'Angle 04 // Hearing-Impaired Community',
      format: '4:5 Feed Creative',
      title: 'QuietWake™ // Frosted Lens Tactile Awakening',
      hook: 'When Sound Isn’t An Option // 100% Sensory Wrist Awakening',
      angle: 'Deaf Community Accessibility & Independence',
      image: '/vault/quietwake/QW_Angle04_Ad04_FrostedLens_4x5.jpg',
      metric: 'Client Approved Winner',
      description: 'Engineered specifically for hearing-impaired individuals who take off hearing aids at night. Frosted depth effect highlighting silent tactile wrist stimulation.'
    },
    {
      id: 'qw-11',
      brand: 'quietwake',
      isQuietWake: true,
      category: 'static',
      categoryLabel: 'Static Meta Ad',
      angleId: 'angle-4',
      angleName: 'Angle 04 // Hearing-Impaired Community',
      format: '4:5 Feed Creative',
      title: 'QuietWake™ // Verified Deaf Community Review Teardown',
      hook: '"As someone who is profoundly deaf, this replaced my bulky bed shaker."',
      angle: 'Authentic Peer Social Proof & Mobility',
      image: '/vault/quietwake/QW_Angle04_Ad05_SensoryReview_4x5.jpg',
      metric: 'Highest Niche Trust',
      description: '5-star customer review card with real deaf community testimonial highlighting travel convenience and independence from heavy wired bed-shaker units.'
    },
    {
      id: 'qw-12',
      brand: 'quietwake',
      isQuietWake: true,
      category: 'static',
      categoryLabel: 'Static Meta Ad',
      angleId: 'angle-4',
      angleName: 'Angle 04 // Hearing-Impaired Community',
      format: '4:5 Feed Creative',
      title: 'QuietWake™ // Heavy Bed-Shaker vs. QuietWake Showdown',
      hook: 'Clunky 240V Wired Bed Shakers vs. Featherlight Silicone Wristband',
      angle: 'Modernization & Problem Replacement',
      image: '/vault/quietwake/QW_Angle04_Ad06_BedShakerShowdown_4x5.jpg',
      metric: 'Direct Displacement Battlecard',
      description: 'Direct displacement comparison showing the outdated tangled wires of traditional hearing-impaired vibrating pillow pods against QuietWake sleek wearable tech.'
    },

    // ANGLE 05: Parents With Sleeping Babies (Batch 2 Client Approval Milestone)
    {
      id: 'qw-13',
      brand: 'quietwake',
      isQuietWake: true,
      category: 'static',
      categoryLabel: 'Static Meta Ad',
      angleId: 'angle-5',
      angleName: 'Angle 05 // Parents & Sleeping Babies',
      format: '4:5 Feed Creative',
      title: 'QuietWake™ // Nursery Cot Harmony & 0 dB Awakening',
      hook: 'Wake at 5:30 AM Next to Baby’s Cot Without Making a Sound',
      angle: 'Parental Empathy & Infant Sleep Protection',
      image: '/vault/quietwake/QW_Angle05_Ad07_NurseryCotHarmony_4x5.jpg',
      metric: 'Ultra-High Niche Relevancy',
      description: 'Atmospheric warm nursery setting with sleeping infant cot in background. Demonstrates 0 dB silent haptic vibration allowing parents to start their day without waking the baby.'
    },
    {
      id: 'qw-14',
      brand: 'quietwake',
      isQuietWake: true,
      category: 'static',
      categoryLabel: 'Static Meta Ad',
      angleId: 'angle-5',
      angleName: 'Angle 05 // Parents & Sleeping Babies',
      format: '4:5 Feed Creative',
      title: 'QuietWake™ // The New Parents Alarm Showdown',
      hook: 'One Loud Alarm = 45 Minutes of Re-Settling A Crying Infant',
      angle: 'High-Stakes Cost of Failure & Parental Relief',
      image: '/vault/quietwake/QW_Angle05_Ad08_ParentsShowdown_4x5.jpg',
      metric: 'High Emotional Resonance',
      description: 'Calculates the true cost of an auditory phone alarm (crying infant, lost sleep, morning chaos) vs QuietWake soundless sensory pulse.'
    },
    {
      id: 'qw-15',
      brand: 'quietwake',
      isQuietWake: true,
      category: 'static',
      categoryLabel: 'Static Meta Ad',
      angleId: 'angle-5',
      angleName: 'Angle 05 // Parents & Sleeping Babies',
      format: '4:5 Feed Creative',
      title: 'QuietWake™ // Motherhood Testimonial & Real Nursery Proof',
      hook: '"My baby stays asleep through every single 5:00 AM wake-up."',
      angle: 'Word-of-Mouth Motherhood Authority',
      image: '/vault/quietwake/QW_Angle05_Ad09_MotherReview_4x5.jpg',
      metric: 'Client Approved Winner',
      description: 'Authentic verified mother review card with nursery backdrop and pastel tones, validating the product as an essential postpartum household gadget.'
    },


    // 2. MICRO-MOTION ADS (4:5 Kinetic Loop Ads)
    {
      id: 'motion-01',
      category: 'motion',
      categoryLabel: 'Micro-Motion Ad',
      format: '4:5 Feed Creative',
      title: 'Botanical Motility Run // Kinetic Track Loop',
      hook: '4-Second Seamless Peristalsis Motion Trigger',
      angle: 'Oddly Satisfying Kinetic Dopamine & Visceral Flow',
      poster: '/vault/motion/MM01_Botanical_Motility_Run_Poster_4x5.png',
      videoUrl: '/vault/motion/MM01_Botanical_Motility_Run_Loop_4x5.mp4',
      metric: '4-Second Infinite Loop',
      description: 'Engineered as a clean DTC static ad featuring one hypnotic, mathematically seamless kinetic element: a 3D translucent chute where golden amber elixir drops and mint pearls accelerate with real-world gravity physics, driving 200–300% watch-time retention.'
    },
    {
      id: 'motion-02',
      category: 'motion',
      categoryLabel: 'Micro-Motion Ad',
      format: '4:5 Feed Creative',
      title: 'UGC Evolution Orbit // Kinetic Product Interaction',
      hook: 'Dynamic Orbiting Transformation for Feed Engagement',
      angle: 'Pattern Interrupt & Continuous Motion',
      poster: '/vault/motion/MM02_UGC_Evolution_Orbit_Poster_4x5.png',
      videoUrl: '/vault/motion/MM02_UGC_Evolution_Orbit_Loop_4x5.mp4',
      metric: '5-Second Infinite Loop',
      description: 'Seamless 5-second 4:5 micro-motion loop showcasing dynamic product interaction and kinetic elements designed to disrupt habitual feed scrolling and elevate thumb-stop engagement.'
    },

    // 3. CAROUSEL SYSTEMS (1:1 Sequential Transformation Funnels)
    {
      id: 'carousel-01',
      category: 'carousel',
      categoryLabel: 'Carousel System',
      format: '4-Slide Sequential Funnel',
      title: '4-Step Bloat-to-Reset // Sequential Transformation Journey',
      hook: 'From Acute 2 PM Bloat to Clockwork 7:30 AM Morning Regularity',
      angle: 'Sequential Timeline Micro-Commitments',
      slides: [
        '/vault/carousels/AD06_Slide_01_Day1_1x1.png',
        '/vault/carousels/AD06_Slide_02_Day7_1x1.png',
        '/vault/carousels/AD06_Slide_03_Day14_1x1.png',
        '/vault/carousels/AD06_Slide_04_Day30_1x1.png',
      ],
      metric: '4-Slide Dwell Multiplier',
      description: 'Direct-response square carousel guiding cold prospects through a 30-day biological journey from instant 15-second acid stimulation to 60-day empty-bottle guarantee.'
    },
    {
      id: 'carousel-02',
      category: 'carousel',
      categoryLabel: 'Carousel System',
      format: '4-Slide Sequential Funnel',
      title: 'Morning Ritual Synergy // Matcha & Liquid Bitters Protocol',
      hook: 'How Clean Bitters Supercharge Your Morning Wellness Routine',
      angle: 'Lifestyle Integration & Habit Stacking',
      slides: [
        '/vault/carousels/AD06_B_Slide_01_Matcha_1x1.png',
        '/vault/carousels/AD06_B_Slide_02_Matcha_1x1.png',
        '/vault/carousels/AD06_B_Slide_03_Matcha_1x1.png',
        '/vault/carousels/AD06_B_Slide_04_Matcha_1x1.png',
      ],
      metric: 'Lifestyle Habit Stacker',
      description: 'Targeted at health-conscious daily routine shoppers who stack supplements with morning matcha and tea, driving higher bundle adoption and repeat customer LTV.'
    },

    // 4. AI UGC VIDEO ADS (9:16 Vertical Video Suite)
    {
      id: 'ugc-01',
      category: 'ugc',
      categoryLabel: 'AI UGC Video Ad',
      format: '9:16 Vertical Story / Reel',
      title: 'AuraFlora // 3-Second Native UGC Hook Suite',
      hook: 'Hyper-Realistic AI UGC Creator with Zero Creative Fatigue',
      angle: 'Native Creator Vibe & Pain Agitation',
      poster: '/vault/ugc/AuraFlora_UGC_Poster.jpg',
      videoUrl: '/vault/ugc/AuraFlora_UGC_35s.mp4',
      metric: '35s Master Edit',
      description: 'A complete direct-response video script produced with AI creator workflows. Features natural lighting, native voice pacing, and dynamic on-screen text overlays engineered for TikTok & Reels.'
    },
    {
      id: 'ugc-02',
      category: 'ugc',
      categoryLabel: 'AI UGC Video Ad',
      format: '9:16 Hook Split-Test (Var A)',
      title: 'CaratLane // Hook Var 01: The Bank Locker Trap',
      hook: '"If your Diwali gold spends 364 days locked in a bank vault... why are we still buying it?"',
      angle: 'Financial Logic & Vault Frustration',
      poster: '/vault/ugc/Sia_Diwali_Hook01_Poster.jpg',
      videoUrl: '/vault/ugc/Sia_Diwali_Hook01_BankLocker_27s.mp4',
      metric: 'Hook Test Var A (27.7s)',
      description: '3-Way Hook Split-Testing Framework (Variation A). Directly isolates financial friction: buying high-ticket gold jewelry only to hide it in a bank locker 364 days a year. Connects seamlessly to certified 18k featherlight craftsmanship and limited festive drop CTA.',
      realProductProof: {
        brandName: 'CaratLane',
        productName: 'Lawrence Floral Multi Layer Necklace',
        sku: 'JL04527-1YP900',
        productUrl: 'https://www.caratlane.com/jewellery/lawrence-floral-multi-layer-necklace-jl04527-1yp900.html',
        spec: 'Solid 18 KT / 14 KT Yellow Gold (BIS Hallmarked) • 0.419 ct Certified Diamonds • Featherlight 6.06g',
        proofNote: 'High-Precision Retail Adaptation (~90–95% Physical Fidelity): Not an AI fantasy prop. This ad was engineered using CaratLane\'s authentic retail fine jewelry SKU (JL04527-1YP900) as an independent production benchmark to demonstrate ~90–95% geometric and material fidelity, dual-tier chain consistency, and photorealistic gold luster under dynamic lighting.'
      }
    },
    {
      id: 'ugc-03',
      category: 'ugc',
      categoryLabel: 'AI UGC Video Ad',
      format: '9:16 Hook Split-Test (Var B)',
      title: 'CaratLane // Hook Var 02: Heavy Neck Discomfort',
      hook: '"Why are we still buying heavy gold necklaces that feel like a weight on your neck, after just two hours?"',
      angle: 'Physical Discomfort & Relatable Agitation',
      poster: '/vault/ugc/Sia_Diwali_Hook02_Poster.jpg',
      videoUrl: '/vault/ugc/Sia_Diwali_Hook02_HeavyNeck_26s.mp4',
      metric: 'Hook Test Var B (26.7s)',
      description: '3-Way Hook Split-Testing Framework (Variation B). Relatable pain point targeting physical neck strain and discomfort during long family celebrations. Proves the lightweight, wearable luxury alternative in solid hallmarked gold.',
      realProductProof: {
        brandName: 'CaratLane',
        productName: 'Lawrence Floral Multi Layer Necklace',
        sku: 'JL04527-1YP900',
        productUrl: 'https://www.caratlane.com/jewellery/lawrence-floral-multi-layer-necklace-jl04527-1yp900.html',
        spec: 'Solid 18 KT / 14 KT Yellow Gold (BIS Hallmarked) • 0.419 ct Certified Diamonds • Featherlight 6.06g',
        proofNote: 'High-Precision Retail Adaptation (~90–95% Physical Fidelity): Not an AI fantasy prop. This ad was engineered using CaratLane\'s authentic retail fine jewelry SKU (JL04527-1YP900) as an independent production benchmark to demonstrate ~90–95% geometric and material fidelity, dual-tier chain consistency, and photorealistic gold luster under dynamic lighting.'
      }
    },
    {
      id: 'ugc-04',
      category: 'ugc',
      categoryLabel: 'AI UGC Video Ad',
      format: '9:16 Hook Split-Test (Var C)',
      title: 'CaratLane // Hook Var 03: Everyday Wearable Gold',
      hook: '"What if the real gold you buy this Diwali was something you actually wear every single day?"',
      angle: 'Modern Aspiration & Daily Versatility',
      poster: '/vault/ugc/Sia_Diwali_Hook03_Poster.jpg',
      videoUrl: '/vault/ugc/Sia_Diwali_Hook03_EverydayGold_26s.mp4',
      metric: 'Hook Test Var C (26.5s)',
      description: '3-Way Hook Split-Testing Framework (Variation C). Aspirational lifestyle entry hook for modern professionals who desire authentic 18k gold versatile enough to pair with festive silk blouses or a Monday work shirt.',
      realProductProof: {
        brandName: 'CaratLane',
        productName: 'Lawrence Floral Multi Layer Necklace',
        sku: 'JL04527-1YP900',
        productUrl: 'https://www.caratlane.com/jewellery/lawrence-floral-multi-layer-necklace-jl04527-1yp900.html',
        spec: 'Solid 18 KT / 14 KT Yellow Gold (BIS Hallmarked) • 0.419 ct Certified Diamonds • Featherlight 6.06g',
        proofNote: 'High-Precision Retail Adaptation (~90–95% Physical Fidelity): Not an AI fantasy prop. This ad was engineered using CaratLane\'s authentic retail fine jewelry SKU (JL04527-1YP900) as an independent production benchmark to demonstrate ~90–95% geometric and material fidelity, dual-tier chain consistency, and photorealistic gold luster under dynamic lighting.'
      }
    },

    // 5. AI PRODUCT PHOTOSHOOTS (Virtual Studio 4K Renders)
    {
      id: 'photoshoot-01',
      category: 'photoshoot',
      categoryLabel: 'AI Product Photoshoot',
      format: '1:1 Studio Packshot',
      title: 'Hero Bottle // Studio Lighting Packshot',
      hook: 'Flawless Commercial Isolation with Pure Amber Glass Refraction',
      angle: 'Brand Credibility & Product Clarity',
      image: '/vault/photoshoots/PDP_SLIDE_01_Hero_Packshot_1x1.jpg',
      metric: '4K Studio Master',
      description: 'Pristine isolated packshot of the AuraFlora 60ml amber glass dropper bottle. Calibrated with commercial studio lighting, glass refraction, and accurate label typography for Amazon and Shopify PDP headers.'
    },
    {
      id: 'photoshoot-02',
      category: 'photoshoot',
      categoryLabel: 'AI Product Photoshoot',
      format: '1:1 Macro Action',
      title: 'Liquid Gold // Sublingual Dropper Dosage',
      hook: 'Macro Action Shot Capturing 5-Drop Viscosity & Amber Clarity',
      angle: 'Sensory Viscosity & Low-Effort Application',
      image: '/vault/photoshoots/PDP_SLIDE_03_Dropper_Dosage_1x1.jpg',
      metric: 'Macro Action Shot',
      description: 'High-speed macro capture of the precision pipette dispensing a suspended droplet of bioactive herbal bitters. Demonstrates effortless sublingual application and clean amber purity.'
    },
    {
      id: 'photoshoot-03',
      category: 'photoshoot',
      categoryLabel: 'AI Product Photoshoot',
      format: '1:1 Botanical Flatlay',
      title: 'Herbal Harvest // Bioactive Botanicals Flatlay',
      hook: 'Raw Organic Roots & Botanicals Ingredient Architecture',
      angle: 'Ingredient Transparency & Pharmacognosy',
      image: '/vault/photoshoots/PDP_SLIDE_04_Botanicals_Flatlay_1x1.jpg',
      metric: 'Virtual Studio Flatlay',
      description: 'Commercial flatlay featuring fresh organic ginger root, dandelion, artichoke, and herbal botanical leaves surrounding the hero bottle, communicating pure farm-to-bottle potency.'
    },
    {
      id: 'photoshoot-04',
      category: 'photoshoot',
      categoryLabel: 'AI Product Photoshoot',
      format: '1:1 Lifestyle Scene',
      title: 'Post-Pasta Ritual // Dining Lifestyle Scene',
      hook: 'Anchors the Emotional Wedge: Heavy Carbs & Social Dining',
      angle: 'Aspirational Lifestyle & Social Context',
      image: '/vault/photoshoots/PDP_SLIDE_05_Dining_Lifestyle_1x1.jpg',
      metric: 'Lifestyle Context',
      description: 'Atmospheric evening dining table with pasta, candlelight, and wine glass, positioning AuraFlora as the indispensable purse-side companion to prevent post-dinner food baby distention.'
    },
    {
      id: 'photoshoot-05',
      category: 'photoshoot',
      categoryLabel: 'AI Product Photoshoot',
      format: '1:1 Portability Feature',
      title: 'Everyday Carry // Luxury Handbag Portability',
      hook: 'Inoculates Against "Cannot Carry Bulky Pill Bottles" Objection',
      angle: 'Convenience & Everyday Habit',
      image: '/vault/photoshoots/PDP_SLIDE_06_Purse_Portability_1x1.jpg',
      metric: 'On-the-Go Ritual',
      description: 'Styled in-bag flatlay with designer leather purse, sunglasses, and pocket essentials. Proves that pocket-sized liquid bitters fit effortlessly into daily routines compared to bulky pills.'
    },
    {
      id: 'photoshoot-06',
      category: 'photoshoot',
      categoryLabel: 'AI Product Photoshoot',
      format: '1:1 Unboxing Experience',
      title: 'Unboxing Luxury // Premium Cylinder Rigid Box',
      hook: 'Elevates Perceived Brand Value Before The Customer Even Buys',
      angle: 'High-Ticket Gifting & Unboxing Dopamine',
      image: '/vault/photoshoots/PDP_SLIDE_07_Unboxing_Luxury_Box_1x1.jpg',
      metric: 'Premium Packaging',
      description: 'Studio packaging showcase highlighting the textured matte forest-green cylindrical container and gold foil embossed branding, supporting higher $42 AOV and giftability.'
    },
    {
      id: 'photoshoot-07',
      category: 'photoshoot',
      categoryLabel: 'AI Product Photoshoot',
      format: '1:1 Infographic Stack',
      title: 'Core Benefits // Clinical Infographic Teardown',
      hook: 'Transforms Biological Complexities into Clear Purchasing Justifications',
      angle: 'Logic-Driven Conversion Architecture',
      image: '/vault/photoshoots/PDP_SLIDE_08_Core_Benefits_Infographic_1x1.jpg',
      metric: 'CRO Gallery Infographic',
      description: 'High-converting Amazon / Shopify gallery infographic highlighting 15-second sublingual speed, zero laxative cramps, and 100% money-back guarantee.'
    },

    // 6. SHOPIFY OS 2.0 PDPs (CRO-Engineered Live Storefronts)
    {
      id: 'shopify-01',
      category: 'shopify',
      categoryLabel: 'Shopify OS 2.0 Storefront',
      format: 'Live Shopify OS 2.0 Store',
      title: 'AuraFlora™ // Digestive Bitters Conversion Architecture',
      hook: '"Dissolve Post-Meal Food Babies in 15 Seconds Flat."',
      angle: 'Zero Message-Disconnect Direct-Response Funnel',
      image: '/vault/shopify/PDP_SLIDE_01_Hero_Packshot.jpg',
      storeUrl: 'https://auraflora-preview.myshopify.com/',
      password: 'StackCuts',
      metric: 'Live Staging Store',
      heroTag: 'Health & Motility DTC',
      speedScore: '96/100',
      description: 'High-converting Shopify OS 2.0 store engineered with 100% pre-to-post click message match to Meta ad campaigns. Features a custom 3-tier protocol bundle builder ($44 / $78 / $99), TAS2R bitter reflex 3-step science timeline, 4-way comparison matrix, and zero-app-bloat native Liquid.',
      keyFeatures: [
        { label: 'CVR Engine', value: '3-Tier Protocol Bundle Selector ($44 / $78 / $99) with dynamic savings' },
        { label: 'Biological Proof', value: '3-Step "Science of Bitters" Lingual Reflex Timeline + Clinical Matrix' },
        { label: 'Mobile Fluidity', value: 'Sticky Dynamic ATC Bar + Slide-Out Drawer with Free Shipping Threshold' }
      ],
      uxNote: 'Engineered for 100% fluid UX on both mobile and desktop. Test on mobile to inspect native touch drawer and thumb-friendly buy-box; test on desktop to inspect full comparison grid.'
    },
    {
      id: 'shopify-02',
      category: 'shopify',
      categoryLabel: 'Shopify OS 2.0 Storefront',
      format: 'Live Shopify OS 2.0 Store',
      title: 'ArborPulse™ // Tree Hydration Ring CRO Storefront',
      hook: '"Eliminate Daily Hose Dragging • 5–8 Hr Deep-Root Soak"',
      angle: 'High-Ticket Hardware DTC & Interactive Sizing Tools',
      image: '/vault/shopify/arborpulse_hero_tree_installed.jpg',
      storeUrl: 'https://arborpulse-store.myshopify.com/',
      password: 'StackCuts',
      metric: 'Live Staging Store',
      heroTag: 'Australian Hardware DTC',
      speedScore: '97/100',
      description: 'Custom Shopify OS 2.0 storefront designed for high-ticket Australian garden tech. Features a live trunk diameter compatibility slider, interactive 14-day foliage revival before/after drag slider, and 50cm subterranean science diagrams—all coded in zero-app native Liquid.',
      keyFeatures: [
        { label: 'Interactive CRO Tool', value: 'Live Trunk Diameter Sizing Calculator with dynamic kit recommendations' },
        { label: 'Visual Transformation', value: '14-Day Root Revival Interactive Before/After foliage drag slider' },
        { label: 'Engineering Speed', value: 'Zero external apps • 97+ PageSpeed • Native Liquid sections' }
      ],
      uxNote: 'Engineered for 100% fluid UX on both mobile and desktop. Test on mobile to experience touch-friendly before/after slider and dynamic calculator; test on desktop for multi-tier buy-box.'
    },
  ];

  // Filter items based on active tab, dual-mode privacy, and angle sub-filters
  const visibleVaultItems = vaultItems.filter(item => {
    // Upwork Mode: Strictly hide QuietWake from DOM to protect client privacy
    if (isUpworkSource && item.brand === 'quietwake') {
      return false;
    }
    return true;
  });

  const filteredItems = visibleVaultItems.filter(item => {
    if (item.category !== activeTab) return false;

    // In static tab (Normal Mode), handle brand and angle filters
    if (activeTab === 'static' && !isUpworkSource) {
      if (staticBrandFilter === 'auraflora' && item.brand !== 'auraflora') return false;
      if (staticBrandFilter === 'quietwake' && item.brand !== 'quietwake') return false;
      if (staticBrandFilter === 'quietwake' && staticAngleFilter !== 'all' && item.angleId !== staticAngleFilter) return false;
      if (staticBrandFilter === 'all' && staticAngleFilter !== 'all') {
        if (item.brand === 'quietwake' && item.angleId !== staticAngleFilter) return false;
      }
    }

    return true;
  });

  // Helper for multi-slide carousel card navigation
  const handlePrevSlide = (e, itemId, totalSlides) => {
    e.stopPropagation();
    setCarouselIndexMap(prev => {
      const current = prev[itemId] || 0;
      return { ...prev, [itemId]: (current - 1 + totalSlides) % totalSlides };
    });
  };

  const handleNextSlide = (e, itemId, totalSlides) => {
    e.stopPropagation();
    setCarouselIndexMap(prev => {
      const current = prev[itemId] || 0;
      return { ...prev, [itemId]: (current + 1) % totalSlides };
    });
  };

  return (
    <section id="vault" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
      
      {/* ========================================================================= */}
      {/* 1. Header: Section Tag, Editorial Heading & Subtitle                      */}
      {/* ========================================================================= */}
      <div className="text-center space-y-2.5 sm:space-y-3 mb-7 sm:mb-10">
        
        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#EAA779]/15 border border-[#EAA779]/35 text-[#0F172A] text-[10px] sm:text-xs font-mono font-bold tracking-tight whitespace-nowrap">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#EAA779]" />
          <span>03 // THE CREATIVE VAULT</span>
          <span className="text-slate-400 font-normal">•</span>
          <span className="text-slate-600 font-semibold">PROOF OF WORK</span>
        </div>

        {/* Section Headline in Fraunces Serif (Balanced 2-line title on mobile, original large desktop authority) */}
        <h2 className="font-['Fraunces'] text-xl sm:text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight leading-snug sm:leading-tight max-w-2xl mx-auto">
          Production Arsenal // Proven Direct-Response Systems
        </h2>

        {/* Subtitle */}
        <p className="text-[12.5px] sm:text-sm md:text-base text-slate-500 font-sans max-w-2xl mx-auto leading-relaxed">
          Inspect live assets and frameworks grounded in real human psychology: 4:5 Meta creatives, micro-motion loops, swipeable carousels, AI UGC video suites, virtual studio photoshoots, and CRO-aligned Shopify PDPs.
        </p>

      </div>

      {/* ========================================================================= */}
      {/* 2. Interactive Category Tabs (1 Line on Desktop, 2 Neat Rows on Mobile)   */}
      {/* ========================================================================= */}
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-2 sm:gap-2.5 md:gap-3 mb-8 sm:mb-10 max-w-4xl lg:max-w-5xl mx-auto px-2">
        {categories.map(cat => {
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleTabChange(cat.id)}
              className={`px-3.5 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs md:text-[13.5px] font-sans font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-[#0F172A] text-white shadow-md'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200/90 shadow-2xs'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* View Switcher Pill & Item Count (Desktop & Tablet) */}
      <div className="hidden sm:flex items-center justify-between mb-6 max-w-5xl mx-auto px-1">
        <span className="text-xs font-mono text-slate-400">
          Showing <span className="font-bold text-[#0F172A]">{filteredItems.length}</span> {activeTab === 'static' ? 'Static Creatives' : activeTab === 'carousel' ? 'Carousel Systems' : activeTab === 'ugc' ? 'AI UGC Systems (Incl. 3-Way Hook Split-Test)' : 'Production Assets'}
        </span>
        <div className="inline-flex items-center gap-1 p-1 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-mono">
          <button
            onClick={() => setGridCols(2)}
            className={`px-3 py-1 rounded-full transition-all cursor-pointer font-bold ${
              gridCols === 2 ? 'bg-white text-[#0F172A] shadow-xs' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            2-Col Large View
          </button>
          <button
            onClick={() => setGridCols(activeTab === 'ugc' ? 4 : 3)}
            className={`px-3 py-1 rounded-full transition-all cursor-pointer font-bold ${
              (gridCols === 3 || gridCols === 4) ? 'bg-white text-[#0F172A] shadow-xs' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            {activeTab === 'ugc' ? '4-Col Reel View' : '3-Col Compact View'}
          </button>
        </div>
      </div>

      {/* Contextual Brand & 5-Angle Testing Bar for Static Tab (Rendered ONLY in Normal Outreach Mode) */}
      {activeTab === 'static' && !isUpworkSource && (
        <div className="mb-7 max-w-5xl mx-auto space-y-3">
          
          {/* Row 1: Brand Switcher Pills */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 p-2 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[10.5px] font-mono font-bold text-slate-400 uppercase tracking-wider px-2">
                Brand Filter:
              </span>
              <button
                onClick={() => { setStaticBrandFilter('all'); setStaticAngleFilter('all'); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  staticBrandFilter === 'all'
                    ? 'bg-[#0F172A] text-white shadow-xs'
                    : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
                }`}
              >
                All Statics (22)
              </button>
              <button
                onClick={() => { setStaticBrandFilter('auraflora'); setStaticAngleFilter('all'); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  staticBrandFilter === 'auraflora'
                    ? 'bg-[#0F172A] text-white shadow-xs'
                    : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
                }`}
              >
                AuraFlora™ (Gut Health • 7)
              </button>
              <button
                onClick={() => { setStaticBrandFilter('quietwake'); setStaticAngleFilter('all'); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  staticBrandFilter === 'quietwake'
                    ? 'bg-[#0F172A] text-white shadow-xs'
                    : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>QuietWake™ Australia (Sleep Tech • 15)</span>
              </button>
            </div>

            <span className="text-[11px] font-mono text-slate-500 px-2 hidden md:inline">
              {staticBrandFilter === 'quietwake' ? 'QuietWake Australia ($79.90 AUD)' : staticBrandFilter === 'auraflora' ? 'AuraFlora Direct-Response' : '22 Production-Ready Creatives'}
            </span>
          </div>

          {/* Row 2: 5-Angle Psychographic Sub-Filters */}
          {(staticBrandFilter === 'quietwake' || staticBrandFilter === 'all') && (
            <div className="p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-xs space-y-2.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-slate-700/60 pb-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold uppercase tracking-wider">
                    Angle Architecture
                  </span>
                  <span className="text-xs font-mono text-slate-200 font-bold">
                    QuietWake™ 5-Angle Testing Matrix ($79.90 AUD Hero SKU)
                  </span>
                </div>
                <span className="text-[10.5px] font-mono text-slate-400">
                  Select a psychographic angle:
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                {[
                  { id: 'all', label: 'All 5 Angles (15)' },
                  { id: 'angle-1', label: 'Angle 01: Shift Workers & FIFO (3)' },
                  { id: 'angle-2', label: 'Angle 02: Anti-Cortisol Shock (3)' },
                  { id: 'angle-3', label: 'Angle 03: Heavy Sleepers Trap (3)' },
                  { id: 'angle-4', label: 'Angle 04: Hearing-Impaired (Deaf) (3)' },
                  { id: 'angle-5', label: 'Angle 05: Parents & Baby Cot (3)' },
                ].map(angle => (
                  <button
                    key={angle.id}
                    onClick={() => {
                      setStaticAngleFilter(angle.id);
                      if (staticBrandFilter === 'auraflora') setStaticBrandFilter('quietwake');
                    }}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold transition-all cursor-pointer ${
                      staticAngleFilter === angle.id
                        ? 'bg-emerald-400 text-slate-950 font-bold shadow-xs'
                        : 'bg-slate-800/90 hover:bg-slate-700 text-slate-300 border border-slate-700'
                    }`}
                  >
                    {angle.label}
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>
      )}

      {/* Contextual Testing Architecture Note for AI UGC Tab */}
      {activeTab === 'ugc' && (
        <div className="mb-6 max-w-5xl mx-auto px-4 py-3 bg-slate-50 border border-slate-200/80 rounded-none flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="w-2 h-2 rounded-full bg-[#BE185D] flex-shrink-0" />
            <span className="text-xs font-mono font-bold text-[#0F172A] uppercase tracking-wide">
              Meta Ads Framework: 3-Way Hook A/B/C Split-Testing
            </span>
          </div>
          <p className="text-xs text-slate-500 font-sans leading-relaxed">
            Demonstrating 3 modular entry hooks (<span className="text-slate-700 font-semibold">Financial Logic</span> vs. <span className="text-slate-700 font-semibold">Physical Discomfort</span> vs. <span className="text-slate-700 font-semibold">Everyday Luxury</span>) feeding into 1 universal conversion body.
          </p>
        </div>
      )}

      {/* Mobile Top Guidance Strip */}
      {activeTab !== 'shopify' && (
        <div className="flex sm:hidden items-center justify-between mb-3 px-4 select-none">
          <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EAA779]" />
            <span>{filteredItems.length} Creatives Available</span>
          </span>
          <span className="text-[10.5px] font-sans text-slate-400">
            Swipe ➔ or tap buttons below
          </span>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. The Creative Grid: Editorial Cards (Horizontal Snap Track on Mobile, Grid on Desktop) */}
      {/* ========================================================================= */}
      {activeTab === 'shopify' ? (
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-0 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {filteredItems.map(item => {
            const isCopied = copiedStoreId === item.id;
            const displayUrl = item.storeUrl.replace('https://', '').replace(/\/$/, '');
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl bg-white border border-slate-200/90 shadow-[0_8px_25px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.1)] hover:-translate-y-0.5 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Subtle Brand Gradient Strip */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#EAA779] via-[#BE185D] to-[#0F172A]" />

                <div className="space-y-3.5">
                  {/* Top Badges Strip: Live Indicator + Platform */}
                  <div className="flex items-center justify-between gap-2 flex-wrap pt-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-2.5 py-0.5 rounded-full">
                        Live Staging Store
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      Shopify OS 2.0 • Custom Liquid
                    </span>
                  </div>

                  {/* Title & Category Hook */}
                  <div className="space-y-1">
                    <div className="text-[10.5px] font-mono font-bold text-[#BE185D] uppercase tracking-wide">
                      {item.heroTag}
                    </div>
                    <h3 className="font-['Fraunces'] text-lg sm:text-xl font-bold text-[#0F172A] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs font-sans text-slate-500 italic">
                      {item.hook}
                    </p>
                  </div>

                  {/* Plain, Transparent Staging Credentials Box */}
                  <div className="rounded-xl bg-slate-50/90 border border-slate-200/90 p-3 space-y-2.5">
                    {/* Store URL */}
                    <div className="flex items-center justify-between gap-2 text-xs font-mono">
                      <span className="text-slate-500 text-[11px] font-medium flex-shrink-0">
                        Store URL:
                      </span>
                      <a
                        href={item.storeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0F172A] hover:text-[#BE185D] font-bold underline underline-offset-3 decoration-slate-300 hover:decoration-[#BE185D] flex items-center gap-1 truncate max-w-[70%] sm:max-w-none transition-colors"
                        title="Open Live Shopify Storefront"
                      >
                        <span className="truncate">{displayUrl}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#EAA779] flex-shrink-0" />
                      </a>
                    </div>

                    {/* Password with Copy Button */}
                    <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-200/70 text-xs font-mono">
                      <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                        <Lock className="w-3 h-3 text-slate-400" />
                        <span>Password:</span>
                        <code className="px-2 py-0.5 rounded bg-white border border-slate-200 font-bold text-[#0F172A] tracking-wider text-[11.5px]">
                          StackCuts
                        </code>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => handleCopyPassword(e, item.id)}
                        className={`px-2.5 py-1 rounded-md text-[10.5px] font-mono font-bold flex items-center gap-1 transition-all cursor-pointer ${
                          isCopied
                            ? 'bg-emerald-600 text-white shadow-2xs'
                            : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 active:scale-95'
                        }`}
                        title="Copy password to clipboard"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3 h-3 text-white" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 text-slate-500" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar: Dual-Device Hint + Inspect Strategy Button */}
                <div className="pt-3.5 mt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                    <Smartphone className="w-3 h-3 text-[#EAA779]" />
                    <span>Mobile</span>
                    <span className="text-slate-300">•</span>
                    <Laptop className="w-3 h-3 text-[#BE185D]" />
                    <span>Desktop</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleOpenModal(item)}
                    className="px-3.5 py-1.5 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-sans font-bold flex items-center gap-1.5 shadow-xs transition-all hover:scale-102 active:scale-95 cursor-pointer ml-auto"
                    title="Open Strategy & Architecture Breakdown"
                  >
                    <ZoomIn className="w-3.5 h-3.5 text-[#EAA779]" />
                    <span>Inspect Strategy</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      ) : (
        <div 
          ref={mobileScrollRef}
          onScroll={handleScrollMobile}
          className={`flex items-start overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 px-4 pb-4 sm:p-0 sm:overflow-visible sm:grid ${
            activeTab === 'ugc'
              ? (gridCols === 2 
                  ? 'sm:grid-cols-2 sm:gap-8 max-w-4xl mx-auto' 
                  : 'sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 max-w-6xl mx-auto')
              : (gridCols === 2 
                  ? 'md:grid-cols-2 sm:gap-8 max-w-5xl mx-auto' 
                  : 'sm:grid-cols-2 lg:grid-cols-3 sm:gap-7 max-w-6xl mx-auto')
          }`}
        >
        {filteredItems.map(item => {
          const isCarousel = item.category === 'carousel';
          const isVideo = item.category === 'ugc' || item.category === 'motion';
          const isSquare = item.category === 'carousel' || item.category === 'photoshoot' || item.category === 'shopify';
          const isUGC = item.category === 'ugc';
          const aspectClass = isSquare ? 'aspect-square' : isUGC ? 'aspect-[9/16]' : 'aspect-[4/5]';
          const isPlayingThisVideo = isVideo && playingVideoId === item.id;
          const currentSlide = isCarousel ? (carouselIndexMap[item.id] || 0) : 0;
          const displayImage = isCarousel 
            ? item.slides[currentSlide] 
            : (item.poster || item.image);

          return (
            <div
              key={item.id}
              className={`${
                isUGC 
                  ? 'w-[82vw] max-w-[310px]' 
                  : 'w-[91vw] max-w-[365px]'
              } flex-shrink-0 snap-center sm:w-auto sm:max-w-none sm:flex-shrink group relative rounded-none bg-white border border-slate-200/90 shadow-[0_12px_35px_rgba(15,23,42,0.05)] sm:hover:shadow-[0_22px_50px_rgba(15,23,42,0.12)] sm:hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col`}
            >
              
              {/* Media Container: 1:1 Square, 9:16 for Vertical UGC Reels, 4:5 for Static & Motion */}
              <div 
                onClick={() => {
                  if (isVideo) {
                    if (!isPlayingThisVideo) {
                      setPlayingVideoId(item.id);
                    }
                  } else {
                    handleOpenModal(item);
                  }
                }}
                className={`w-full relative ${aspectClass} bg-slate-100 overflow-hidden rounded-none cursor-pointer`}
              >
                
                {isPlayingThisVideo ? (
                  /* ========================================================= */
                  /* Inline Video Player Container (Plays In-Place)           */
                  /* ========================================================= */
                  <div 
                    onClick={(e) => e.stopPropagation()} 
                    className="relative w-full h-full bg-black"
                  >
                    <video
                      key={item.id}
                      src={item.videoUrl}
                      controls
                      controlsList="nodownload noplaybackrate"
                      disablePictureInPicture
                      onContextMenu={(e) => e.preventDefault()}
                      autoPlay
                      playsInline
                      loop
                      className="w-full h-full object-cover"
                    />

                    {/* Top Floating Close Button to revert to poster */}
                    <div className="absolute top-2.5 right-2.5 z-20">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setPlayingVideoId(null);
                        }}
                        className="w-7 h-7 rounded-full bg-[#0F172A]/90 hover:bg-[#0F172A] text-white flex items-center justify-center shadow-lg backdrop-blur-md cursor-pointer transition-all hover:scale-105 border border-white/20"
                        title="Close video"
                        aria-label="Close video"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ) : (
                  /* ========================================================= */
                  /* Poster / Thumbnail State with Interactive Overlays        */
                  /* ========================================================= */
                  <>
                    {/* Thumbnail / Current Slide Image with High-DPI Anti-Aliasing */}
                    <img
                      src={displayImage}
                      alt={item.title}
                      className="w-full h-full object-contain sm:object-cover sm:group-hover:scale-102 sm:transition-transform sm:duration-500 select-none"
                      loading="eager"
                      style={{ 
                        imageRendering: 'high-quality',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'translateZ(0)'
                      }}
                    />

                    {/* Carousel Navigation Buttons inside card */}
                    {isCarousel && (
                      <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity z-20">
                        <button
                          onClick={(e) => handlePrevSlide(e, item.id, item.slides.length)}
                          className="w-9 h-9 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-md flex items-center justify-center cursor-pointer transition-transform active:scale-90"
                          aria-label="Previous slide"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => handleNextSlide(e, item.id, item.slides.length)}
                          className="w-9 h-9 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-md flex items-center justify-center cursor-pointer transition-transform active:scale-90"
                          aria-label="Next slide"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    )}

                    {/* Clean Centered Video Play Button for UGC and Micro-Motion */}
                    {isVideo && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/15 group-hover:bg-black/30 transition-colors z-10">
                        <div 
                          className="w-14 h-14 rounded-full bg-white/95 text-[#0F172A] shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                          title="Click to play inline"
                        >
                          <Play className="w-6 h-6 fill-[#0F172A] ml-0.5 text-[#0F172A]" />
                        </div>
                      </div>
                    )}

                    {/* Centered Click to Inspect Pill on Hover for non-video items */}
                    {!isVideo && (
                      <div className="absolute inset-0 bg-[#0F172A]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                        <span className="px-4 py-2 rounded-full bg-white text-[#0F172A] text-xs font-bold font-sans shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          <ZoomIn className="w-3.5 h-3.5 text-[#BE185D]" />
                          <span>Click to Inspect</span>
                        </span>
                      </div>
                    )}

                    {/* Carousel Slide Dots Indicator */}
                    {isCarousel && (
                      <div className="absolute bottom-3.5 left-0 right-0 flex items-center justify-center gap-1.5 z-10 pointer-events-none group-hover:opacity-0 transition-opacity">
                        {item.slides.map((_, sIdx) => (
                          <span
                            key={sIdx}
                            className={`h-1.5 rounded-full transition-all ${
                              currentSlide === sIdx ? 'w-5 bg-white' : 'w-1.5 bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </>
                )}

              </div>

              {/* ========================================================= */}
              {/* Dedicated Bottom Bar (Below Creative)                    */}
              {/* For Video: Visible on both Desktop & Mobile              */}
              {/* For Static & Others: Visible on Mobile (sm:hidden) so     */}
              {/* mobile visitors know they can tap Inspect Strategy!       */}
              {/* ========================================================= */}
              <div className={`px-3.5 py-2.5 sm:py-3 bg-white border-t border-slate-100 items-center justify-between gap-2 select-none mt-auto ${
                isVideo ? 'flex' : 'flex sm:hidden'
              }`}>
                {/* Metric / Duration Badge */}
                {item.metric ? (
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[10.5px] sm:text-[11px] font-mono font-semibold tracking-tight truncate max-w-[55%] sm:max-w-none">
                    {item.metric}
                  </span>
                ) : <span />}

                {/* Dedicated Inspect Strategy Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenModal(item);
                  }}
                  className="px-3 py-1.5 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-sans font-bold flex items-center gap-1.5 shadow-xs transition-all hover:scale-102 active:scale-95 cursor-pointer whitespace-nowrap ml-auto"
                  title="Open Strategy Breakdown"
                >
                  <ZoomIn className="w-3.5 h-3.5 text-[#EAA779]" />
                  <span>Inspect Strategy</span>
                </button>
              </div>

            </div>
          );
        })}
        </div>
      )}

      {/* Dedicated Mobile Navigation Bar: Previous / Next Buttons + Counter */}
      {activeTab !== 'shopify' && (
        <div className="flex sm:hidden items-center justify-between px-3 py-2.5 mt-2 mb-4 bg-white border border-slate-200/90 shadow-2xs select-none">
          {/* Previous Button */}
          <button
            type="button"
            onClick={handleScrollPrev}
            disabled={mobileActiveIndex === 0}
            className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-bold flex items-center gap-1 transition-all cursor-pointer ${
              mobileActiveIndex === 0
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed opacity-50'
                : 'bg-[#0F172A] text-white hover:bg-[#1E293B] shadow-xs active:scale-95'
            }`}
            aria-label="Previous creative"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Prev</span>
          </button>

          {/* Center Creative Counter & Hint */}
          <div className="flex flex-col items-center">
            <div className="text-xs font-mono font-bold text-[#0F172A]">
              Creative {mobileActiveIndex + 1} of {filteredItems.length}
            </div>
            <div className="text-[10px] font-sans text-slate-400">
              Swipe or tap Prev / Next
            </div>
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleScrollNext}
            disabled={mobileActiveIndex === filteredItems.length - 1}
            className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-bold flex items-center gap-1 transition-all cursor-pointer ${
              mobileActiveIndex === filteredItems.length - 1
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed opacity-50'
                : 'bg-[#0F172A] text-white hover:bg-[#1E293B] shadow-xs active:scale-95'
            }`}
            aria-label="Next creative"
          >
            <span>Next</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Context-Specific Single Lines for Static & Carousel Tabs (Clean & Short) */}
      {activeTab === 'static' && (
        <div className="mt-10 sm:mt-12 text-center px-4">
          <p className="text-xs sm:text-[13.5px] text-slate-500 font-sans max-w-lg mx-auto">
            <span className="font-semibold text-slate-700">Looking for more examples?</span> Additional static ads are available upon inquiry.
          </p>
        </div>
      )}

      {activeTab === 'carousel' && (
        <div className="mt-10 sm:mt-12 text-center px-4">
          <p className="text-xs sm:text-[13.5px] text-slate-500 font-sans max-w-lg mx-auto">
            <span className="font-semibold text-slate-700">Looking for more examples?</span> Additional carousel ads are available upon inquiry.
          </p>
        </div>
      )}

      {/* ========================================================================= */}
      {/* AuraFlora Case Study Deep-Dive Link (Clean, Truthful, Unhyped)             */}
      {/* ========================================================================= */}
      <div className="mt-12 sm:mt-14 text-center px-4">
        <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-5 py-3 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-md transition-all">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#BE185D]" />
            <span className="text-xs sm:text-[13px] font-sans font-medium text-slate-600">
              Looking for the complete creative & conversion breakdown?
            </span>
          </div>
          <a
            href="https://buttery-decade-cf5.notion.site/AuraFlora-Full-Funnel-DTC-Creative-Conversion-Engine-3f4cc3bf9d1180dc8e12e96f06127ec4?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-sans font-bold text-[#BE185D] hover:text-[#9D174D] underline underline-offset-3 decoration-[#BE185D]/40 hover:decoration-[#BE185D] transition-colors"
          >
            <span>Read AuraFlora™ Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#EAA779]" />
          </a>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. Fullscreen Creative Inspection Modal / Lightbox                         */}
      {/* ========================================================================= */}
      {selectedItem && (
        <div 
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 bg-[#0F172A]/90 backdrop-blur-md flex items-center justify-center p-0 sm:p-5 md:p-6 animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full h-full sm:h-auto sm:max-h-[94vh] max-w-5xl lg:max-w-6xl bg-white rounded-none sm:rounded-[28px] shadow-2xl overflow-y-auto md:overflow-hidden flex flex-col md:flex-row border-0 sm:border border-slate-200"
          >
            
            {/* Close Button (Floating & Accessible on Mobile, Clean on Desktop) */}
            <button
              onClick={() => setSelectedItem(null)}
              aria-label="Close modal"
              className="fixed sm:absolute top-3 right-3 sm:top-4 sm:right-4 z-50 w-9 h-9 rounded-full bg-[#0F172A]/80 sm:bg-white/95 text-white sm:text-slate-700 shadow-lg backdrop-blur-md flex items-center justify-center cursor-pointer transition-all hover:scale-105 active:scale-95 border border-white/20 sm:border-transparent"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Media View: Full Commanding Height on Mobile (~72vh), 62% Spacious Luxury Frame on Desktop */}
            <div className={`w-full md:w-3/5 lg:w-[62%] bg-slate-950 flex flex-col items-center justify-center py-6 px-3 sm:p-6 overflow-hidden relative flex-shrink-0 ${
              selectedItem.category === 'ugc' || selectedItem.category === 'motion'
                ? 'min-h-[68vh] sm:min-h-[320px]'
                : 'min-h-[55vh] sm:min-h-[320px]'
            }`}>
              {selectedItem.category === 'ugc' || selectedItem.category === 'motion' ? (
                <video
                  src={selectedItem.videoUrl}
                  controls
                  controlsList="nodownload noplaybackrate"
                  disablePictureInPicture
                  onContextMenu={(e) => e.preventDefault()}
                  autoPlay
                  loop
                  playsInline
                  className="max-h-[72vh] md:max-h-[82vh] max-w-full w-auto object-contain rounded-none shadow-2xl"
                />
              ) : selectedItem.category === 'carousel' ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={selectedItem.slides[carouselIndexMap[selectedItem.id] || 0]}
                    alt={selectedItem.title}
                    className="max-h-[65vh] md:max-h-[82vh] max-w-full w-auto object-contain rounded-none shadow-2xl select-none"
                    style={{ imageRendering: 'auto' }}
                  />
                  <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex items-center justify-between">
                    <button
                      onClick={(e) => handlePrevSlide(e, selectedItem.id, selectedItem.slides.length)}
                      className="w-10 h-10 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-lg flex items-center justify-center cursor-pointer transition-transform active:scale-95"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={(e) => handleNextSlide(e, selectedItem.id, selectedItem.slides.length)}
                      className="w-10 h-10 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-lg flex items-center justify-center cursor-pointer transition-transform active:scale-95"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ) : (
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="max-h-[65vh] md:max-h-[82vh] max-w-full w-auto object-contain rounded-none shadow-2xl select-none"
                  style={{ imageRendering: 'auto' }}
                />
              )}

              {/* Mobile Scroll Guidance Cue */}
              <div className="w-full pt-3 flex sm:hidden items-center justify-center gap-1.5 text-[11px] font-mono text-slate-400 select-none">
                <span>Scroll down for strategy breakdown</span>
                <span className="text-[#EAA779] animate-bounce">↓</span>
              </div>
            </div>

            {/* Meta Strategy Pane: Smooth Continuous Flow on Mobile, Sticky Scrollable Sidebar on Desktop */}
            <div className="w-full md:w-2/5 lg:w-[38%] p-6 sm:p-8 flex flex-col justify-between space-y-5 bg-white md:overflow-y-auto md:max-h-[92vh] flex-grow">
              
              <div className="space-y-4">
                
                {/* Format & Angle Pills */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#EAA779]/20 text-[#0F172A] text-[10px] font-mono font-bold">
                    {selectedItem.format}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[10px] font-mono font-bold">
                    {selectedItem.metric}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-['Fraunces'] text-xl sm:text-2xl font-bold text-[#0F172A] leading-snug">
                  {selectedItem.title}
                </h3>

                {/* The Strategic Hook */}
                <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-3.5 space-y-1">
                  <div className="text-[10.5px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    The Strategic Hook
                  </div>
                  <div className="text-xs sm:text-sm font-sans font-semibold text-[#0F172A]">
                    {selectedItem.hook}
                  </div>
                </div>

                {/* Conversion Breakdown */}
                <div className="space-y-1.5">
                  <div className="text-[10.5px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Conversion Architecture Breakdown
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>

                {/* Real-World Retail Product Proof Card (Authentic Brand Integration) */}
                {selectedItem.realProductProof && (
                  <div className="rounded-xl bg-gradient-to-br from-amber-50/70 via-white to-amber-50/30 border border-amber-200/90 p-3.5 space-y-2.5 shadow-2xs">
                    <div className="flex items-center justify-between gap-1.5 flex-wrap">
                      <div className="flex items-center gap-1.5 text-amber-900">
                        <ShieldCheck className="w-4 h-4 text-amber-600" />
                        <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider">
                          Retail Benchmark Integration
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[9.5px] font-mono font-bold">
                        ~90–95% Physical Fidelity
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="text-xs sm:text-sm font-sans font-bold text-[#0F172A]">
                        {selectedItem.realProductProof.productName}
                      </div>
                      <div className="text-[11px] font-mono text-slate-500">
                        Brand: <span className="font-semibold text-slate-800">{selectedItem.realProductProof.brandName}</span>
                        {selectedItem.realProductProof.sku && (
                          <span className="ml-2 text-slate-400">• SKU: {selectedItem.realProductProof.sku}</span>
                        )}
                      </div>
                      <div className="text-[10.5px] font-mono text-amber-950/70 pt-0.5">
                        {selectedItem.realProductProof.spec}
                      </div>
                      <p className="text-[11.5px] sm:text-xs text-slate-600 font-sans leading-relaxed pt-1 border-t border-amber-100">
                        {selectedItem.realProductProof.proofNote}
                      </p>
                    </div>

                    {/* Official Product Link */}
                    {selectedItem.realProductProof.productUrl && (
                      <div className="pt-2 border-t border-amber-200/60 flex items-center justify-between">
                        <span className="text-[10.5px] font-mono text-slate-500">
                          Official Catalog Link:
                        </span>
                        <a
                          href={selectedItem.realProductProof.productUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white hover:bg-amber-50 border border-amber-300 text-amber-950 text-[11px] font-mono font-bold transition-all shadow-2xs hover:scale-102 cursor-pointer"
                        >
                          <span>View on CaratLane.com</span>
                          <ExternalLink className="w-3 h-3 text-amber-600" />
                        </a>
                      </div>
                    )}
                  </div>
                )}

                {/* Live Shopify Storefront Access Card in Modal */}
                {selectedItem.category === 'shopify' && (
                  <div className="rounded-xl bg-gradient-to-br from-emerald-50/70 via-white to-emerald-50/30 border border-emerald-200/90 p-4 space-y-3 shadow-2xs">
                    <div className="flex items-center justify-between gap-1.5 flex-wrap">
                      <div className="flex items-center gap-2">
                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-emerald-800">
                          Live Interactive Staging Store
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[9.5px] font-mono font-bold">
                        Storefront Protected
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-amber-50/80 border border-amber-200">
                      <div className="flex items-center gap-2">
                        <Lock className="w-3.5 h-3.5 text-amber-700" />
                        <span className="text-xs font-mono text-amber-950">
                          Password: <strong className="bg-white px-2 py-0.5 rounded border border-amber-300 font-mono text-[#0F172A]">StackCuts</strong>
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => handleCopyPassword(e, 'modal-' + selectedItem.id)}
                        className={`px-3 py-1 rounded-md text-[11px] font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                          copiedStoreId === 'modal-' + selectedItem.id
                            ? 'bg-emerald-600 text-white'
                            : 'bg-white hover:bg-amber-100/70 text-amber-950 border border-amber-300'
                        }`}
                      >
                        {copiedStoreId === 'modal-' + selectedItem.id ? (
                          <>
                            <Check className="w-3 h-3 text-white" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 text-amber-700" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    <a
                      href={selectedItem.storeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-sans font-bold flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-101"
                    >
                      <span>Launch Live Shopify Store</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#EAA779]" />
                    </a>
                  </div>
                )}

                {/* Psychological Angle */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span className="text-slate-400">Psychology:</span>
                  <span className="font-bold text-[#BE185D]">{selectedItem.angle}</span>
                </div>

              </div>

              {/* Direct Call to Action */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href="#pricing"
                  onClick={() => setSelectedItem(null)}
                  className="w-full py-3 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-sans font-bold flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <span>Build This System For Your Brand</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#EAA779]" />
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
