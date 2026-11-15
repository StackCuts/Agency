import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function ExecutiveAudioBriefing() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(115.76); // Master duration
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  // 4 Core Strategic Anchors (Clean timestamp bookmarks - NO script or text clutter)
  const chapters = [
    { time: 0, label: 'The Cold Traffic Trap', icon: '⚡' },
    { time: 18.5, label: 'Psychology Over Graphics', icon: '🧠' },
    { time: 46.0, label: '1-to-1 Funnel Match', icon: '🎯' },
    { time: 84.5, label: 'Broadcast-Grade Execution', icon: '✨' },
  ];

  // Update time smoothly via standard HTML5 audio timeupdate
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current && audioRef.current.duration) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  // Play / Pause Toggle
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.error('Audio playback error:', err);
      });
    }
  };

  // Seek on click anywhere in waveform / scrubber
  const handleSeek = (e) => {
    if (!audioRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = pct * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Jump directly to chapter bookmark
  const jumpToChapter = (time) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
    if (!isPlaying) {
      audioRef.current.play().then(() => setIsPlaying(true));
    }
  };

  // Cycle playback speed: 1x -> 1.25x -> 1.5x -> 1x
  const cyclePlaybackRate = () => {
    const nextRate = playbackRate === 1 ? 1.25 : playbackRate === 1.25 ? 1.5 : 1;
    setPlaybackRate(nextRate);
    if (audioRef.current) {
      audioRef.current.playbackRate = nextRate;
    }
  };

  // Toggle Mute
  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Format seconds to mm:ss
  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Calculate progress percentage accurately
  const progressPercent = duration > 0 ? Math.min(100, Math.max(0, (currentTime / duration) * 100)) : 0;

  // 44 High-Definition Waveform Bars with acoustic envelope
  const waveformHeights = [
    25, 45, 65, 80, 50, 70, 95, 60, 40, 75, 95, 80, 50, 65,
    85, 95, 70, 45, 60, 80, 95, 85, 55, 40, 65, 85, 100, 75, 50, 70,
    90, 80, 60, 45, 65, 85, 70, 50, 40, 65, 80, 60, 40, 20
  ];

  // Identify currently active chapter
  const currentChapterIndex = chapters.reduce((acc, chap, idx) => {
    return currentTime >= chap.time ? idx : acc;
  }, 0);

  // References to chapter milestone cards for smooth mobile auto-scrolling
  const chapterRefs = useRef([]);

  // Auto-scroll the active chapter card into view on mobile as audio advances
  useEffect(() => {
    if (isPlaying && chapterRefs.current[currentChapterIndex]) {
      chapterRefs.current[currentChapterIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [currentChapterIndex, isPlaying]);

  return (
    <section id="briefing" className="max-w-4xl lg:max-w-[960px] mx-auto px-4 sm:px-8 pb-16 sm:pb-16">
      
      {/* Hidden Master Audio Element */}
      <audio
        ref={audioRef}
        src="/strategy_briefing.wav"
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleAudioEnded}
      />

      {/* ========================================================================= */}
      {/* MAIN CARD: Responsive Hybrid — Sleek Viewport Fit on Desktop + Clean Mobile UI */}
      {/* ========================================================================= */}
      <div className="relative rounded-[24px] sm:rounded-[30px] bg-white border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.05)] p-5 sm:p-7 md:p-8 transition-all">
        
        {/* Subtle Top Ambient Accent Line in Brand Peach (#EAA779) */}
        <div className="absolute top-0 left-8 sm:left-12 right-8 sm:right-12 h-[3px] bg-gradient-to-r from-transparent via-[#EAA779] to-transparent opacity-80" />

        {/* 1. Header: Status Badge & Editorial Heading */}
        <div className="text-center space-y-2.5 sm:space-y-2 mb-6 sm:mb-6">
          
          {/* Status Pill matching brand peach accent */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#EAA779]/15 border border-[#EAA779]/35 text-[#0F172A] text-[10px] sm:text-xs font-mono font-bold tracking-tight whitespace-nowrap">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#EAA779] animate-pulse" />
            <span>02 // THE BRIEFING</span>
            <span className="text-slate-400 font-normal">•</span>
            <span className="text-slate-600 font-semibold">1:56 MIN AUDIO MASTER</span>
          </div>

          {/* Section Headline in Fraunces Serif */}
          <h2 className="font-['Fraunces'] text-2xl sm:text-[28px] md:text-[32px] font-bold text-[#0F172A] tracking-tight leading-snug">
            The Briefing // DTC Strategy Breakdown
          </h2>

          {/* Original Clean Subtitle */}
          <p className="text-xs sm:text-sm text-slate-500 font-sans max-w-lg mx-auto leading-relaxed">
            A quick audio walkthrough on eliminating cold traffic bounce and engineering 1-to-1 conversion architecture.
          </p>

        </div>

        {/* 2. Interactive Player Console: Mobile-Optimized + Desktop Viewport-Optimized */}
        <div className="rounded-2xl bg-[#F8F9FC] border border-slate-200/80 p-4 sm:p-5 md:p-6 space-y-4 sm:space-y-4">
          
          {/* Top Row: Avatar + Name/Role + Play Button */}
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            
            <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
              
              {/* Mayur's Avatar (Headshot with collar anchoring) */}
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white shadow-sm overflow-hidden bg-gradient-to-tr from-[#93C5FD]/40 to-[#EAA779]/30 shrink-0 flex items-center justify-center">
                <img
                  src="/mayur_avatar_headshot.png?v=6"
                  alt="Mayur // Lead Creative Strategist"
                  className="w-full h-full object-contain select-none pointer-events-none"
                  onError={(e) => { e.currentTarget.src = '/mayur_portrait.png'; }}
                />
              </div>

              {/* Title & Role: Clean stacked on mobile, sleek single horizontal line on desktop */}
              <div className="text-left min-w-0">
                
                {/* Mobile author title */}
                <div className="sm:hidden text-sm font-bold text-[#0F172A] font-sans leading-tight">
                  Mayur
                </div>
                <div className="sm:hidden text-[11px] text-slate-500 font-medium leading-normal truncate">
                  Lead Creative Strategist
                </div>

                {/* Desktop author title (Original Single Line) */}
                <div className="hidden sm:flex text-base font-bold text-[#0F172A] font-sans items-center gap-1.5">
                  <span>Mayur</span>
                  <span className="text-slate-400 font-light text-xs">//</span>
                  <span className="text-xs text-slate-600 font-medium">Lead Creative Strategist</span>
                </div>

                {/* Subtitle / Status */}
                <div className="text-[10px] sm:text-xs text-slate-400 font-mono mt-0.5 flex items-center gap-1.5">
                  {isPlaying ? (
                    <span className="text-[#BE185D] font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#BE185D]" />
                      <span className="sm:hidden">Listening now</span>
                      <span className="hidden sm:inline">Listening now (Mastered Audio)</span>
                    </span>
                  ) : (
                    <>
                      <span className="sm:hidden">Tap play to listen</span>
                      <span className="hidden sm:inline">Tap play to start briefing</span>
                    </>
                  )}
                </div>

              </div>

            </div>

            {/* Tactile Big Play / Pause Button with responsive scaling */}
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause audio briefing' : 'Play audio briefing'}
              className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#1E293B] hover:bg-[#0F172A] active:scale-95 text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all sm:hover:scale-105 shrink-0 cursor-pointer ml-auto"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white" />
              ) : (
                <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white ml-0.5" />
              )}
            </button>

          </div>

          {/* Middle Row: Waveform Track */}
          <div className="space-y-2">
            
            {/* Scrubber Container */}
            <div
              onClick={handleSeek}
              className="relative h-12 sm:h-13 cursor-pointer select-none group"
              title="Click or drag anywhere to seek"
            >
              {/* Inner Track */}
              <div className="relative w-full h-full">
                
                {/* 1. Base Grey Bars (Inactive track) */}
                <div className="w-full h-full flex items-center justify-between gap-[2px] sm:gap-1 pointer-events-none">
                  {waveformHeights.map((h, i) => (
                    <div
                      key={`bg-${i}`}
                      style={{ height: `${h}%` }}
                      className="w-full rounded-full bg-slate-200/90 group-hover:bg-slate-300/90 transition-colors"
                    />
                  ))}
                </div>

                {/* 2. Active Solid Waveform (Seamlessly masked to progressPercent) */}
                <div
                  className="absolute inset-0 flex items-center justify-between gap-[2px] sm:gap-1 pointer-events-none overflow-hidden"
                  style={{
                    clipPath: `inset(0 calc(100% - ${progressPercent}%) 0 0)`
                  }}
                >
                  {waveformHeights.map((h, i) => (
                    <div
                      key={`fg-${i}`}
                      style={{ height: `${h}%` }}
                      className="w-full rounded-full bg-[#BE185D]"
                    />
                  ))}
                </div>

                {/* 3. The Playhead Pin */}
                <div
                  className="absolute top-1/2 pointer-events-none -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${progressPercent}%`
                  }}
                >
                  <div className="w-3.5 h-3.5 rounded-full bg-white border-2 border-[#BE185D] shadow-sm flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#BE185D]" />
                  </div>
                </div>

              </div>

            </div>

            {/* Time Indicators & Auxiliary Controls */}
            <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-500 pt-1 sm:pt-1">
              
              {/* Current Elapsed & Total Duration */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-bold text-[#0F172A]">{formatTime(currentTime)}</span>
                <span className="text-slate-300">/</span>
                <span>{formatTime(duration)}</span>
              </div>

              {/* Speed & Mute Controls */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                
                {/* Playback Speed Pill Button */}
                <button
                  onClick={cyclePlaybackRate}
                  className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-white border border-slate-200 hover:border-slate-300 text-[10px] sm:text-[11px] font-mono font-bold text-slate-700 hover:text-[#0F172A] transition-colors shadow-2xs cursor-pointer"
                  title="Toggle playback speed"
                >
                  {playbackRate}x
                </button>

                {/* Mute Button */}
                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                  className="p-1 sm:p-1.5 rounded-full bg-white border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-[#0F172A] transition-colors shadow-2xs cursor-pointer"
                >
                  {isMuted ? (
                    <VolumeX className="w-3.5 h-3.5 text-[#BE185D]" />
                  ) : (
                    <Volume2 className="w-3.5 h-3.5" />
                  )}
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* 3. Bottom Key Focus Points: Responsive Single-Row Scroll on Mobile, Original 4-Col Grid on Desktop */}
        <div className="mt-5 sm:mt-5 pt-4 sm:pt-4 border-t border-slate-100 space-y-2.5 sm:space-y-2.5">
          
          <div className="flex items-center justify-between">
            <span className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-400 tracking-wider uppercase">
              Key Strategic Focus Points
            </span>
            {isPlaying ? (
              <span className="text-[10px] sm:text-[11px] font-mono text-[#EAA779] font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EAA779] animate-pulse" />
                <span>Syncing with audio</span>
              </span>
            ) : (
              <span className="text-[10px] sm:text-[11px] font-mono text-slate-400">
                4 Strategic Milestones
              </span>
            )}
          </div>

          {/* Single-row swipeable pills on mobile (zero vertical waste), clean 4-grid on desktop */}
          <div className="flex sm:grid sm:grid-cols-4 gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar pb-1 -mx-1 px-1 sm:mx-0 sm:px-0 scroll-smooth">
            {chapters.map((chap, idx) => {
              const isActive = currentChapterIndex === idx && isPlaying;
              return (
                <div
                  key={chap.label}
                  ref={(el) => (chapterRefs.current[idx] = el)}
                  className={`px-3 py-2 sm:py-2.5 rounded-xl text-left border transition-all duration-300 select-none shrink-0 min-w-[145px] sm:min-w-0 ${
                    isActive
                      ? 'bg-[#EAA779]/15 border-[#EAA779] text-[#0F172A] shadow-xs'
                      : 'bg-white border-slate-200 text-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-400 mb-0.5 sm:mb-1">
                    <span>{formatTime(chap.time)}</span>
                    <span>{chap.icon}</span>
                  </div>
                  <div className={`text-[11px] sm:text-xs font-bold font-sans tracking-tight line-clamp-1 ${
                    isActive ? 'text-[#0F172A]' : 'text-slate-700'
                  }`}>
                    {chap.label}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
}
