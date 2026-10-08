import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, Music } from 'lucide-react';

const AudioPlayer = ({ autoPlayTrigger }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const userManuallyPausedRef = useRef(false);
  const initialGestureHandledRef = useRef(false);

  // Play helper
  const playAudio = () => {
    if (audioRef.current && !userManuallyPausedRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Audio play prevented:", err));
    }
  };

  // Pause helper
  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Handle autoPlayTrigger prop
  useEffect(() => {
    if (autoPlayTrigger) {
      userManuallyPausedRef.current = false;
      playAudio();
    }
  }, [autoPlayTrigger]);

  // Handle global custom events (e.g. video playback pause)
  useEffect(() => {
    const handlePauseEvent = () => pauseAudio();
    const handlePlayEvent = () => {
      userManuallyPausedRef.current = false;
      playAudio();
    };

    window.addEventListener('pause-background-audio', handlePauseEvent);
    window.addEventListener('play-background-audio', handlePlayEvent);

    return () => {
      window.removeEventListener('pause-background-audio', handlePauseEvent);
      window.removeEventListener('play-background-audio', handlePlayEvent);
    };
  }, []);

  // Handle one-time initial user gesture anywhere on screen to enable autoplay
  useEffect(() => {
    const handleInitialGesture = (e) => {
      if (initialGestureHandledRef.current) return;
      initialGestureHandledRef.current = true;

      // Remove window listeners immediately
      window.removeEventListener('click', handleInitialGesture, true);
      window.removeEventListener('touchstart', handleInitialGesture, true);

      // Only autoplay if user hasn't manually paused
      if (!userManuallyPausedRef.current && audioRef.current && audioRef.current.paused) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
    };

    window.addEventListener('click', handleInitialGesture, true);
    window.addEventListener('touchstart', handleInitialGesture, true);

    return () => {
      window.removeEventListener('click', handleInitialGesture, true);
      window.removeEventListener('touchstart', handleInitialGesture, true);
    };
  }, []);

  // Explicit Toggle Play/Pause on Button Click
  const togglePlayPause = (e) => {
    e.stopPropagation(); // Stop event from triggering global window click handlers!
    
    if (audioRef.current) {
      if (isPlaying) {
        userManuallyPausedRef.current = true;
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        userManuallyPausedRef.current = false;
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.log("Play error:", err));
      }
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <>
      <audio ref={audioRef} src="/assets/wedding_audio.mp3" loop preload="auto" />

      {/* Floating Music Control Badge */}
      <div
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 bg-[#302923]/95 backdrop-blur-md text-[#FCF9F3] border border-[#C6A15B]/50 px-3.5 py-2 rounded-full shadow-2xl transition-all hover:scale-105 select-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Play / Pause Toggle Button */}
        <button
          onClick={togglePlayPause}
          className={`w-10 h-10 rounded-full bg-gradient-to-r from-[#C6A15B] to-[#E2C98A] text-[#302923] font-bold flex items-center justify-center shadow-md transition-all active:scale-95 ${
            isPlaying ? 'ring-2 ring-[#8A1F2D]' : ''
          }`}
          title={isPlaying ? 'Pause Background Music' : 'Play Background Music'}
          aria-label={isPlaying ? 'Pause Background Music' : 'Play Background Music'}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 fill-[#302923]" />
          ) : (
            <Play className="w-5 h-5 ml-0.5 fill-[#302923]" />
          )}
        </button>

        {/* Text Label & Status Indicator */}
        <button
          onClick={togglePlayPause}
          className="flex flex-col text-left pr-1 cursor-pointer group"
          title={isPlaying ? 'Click to Pause' : 'Click to Play'}
        >
          <span className="text-[10px] uppercase tracking-wider text-[#C6A15B] font-extrabold flex items-center gap-1">
            <Music className={`w-3 h-3 text-[#C6A15B] ${isPlaying ? 'animate-bounce' : ''}`} />
            {isPlaying ? 'Playing Melody' : 'Music Paused'}
          </span>
          <span className="text-xs text-[#FCF9F3] font-bold group-hover:underline">
            {isPlaying ? 'Tap to Pause ⏸️' : 'Tap to Play ▶️'}
          </span>
        </button>

        {/* Mute / Unmute Button */}
        <button
          onClick={toggleMute}
          className="p-1.5 rounded-full hover:bg-stone-800 text-[#C6A15B] transition-colors ml-1"
          title={isMuted ? 'Unmute Volume' : 'Mute Volume'}
          aria-label={isMuted ? 'Unmute Volume' : 'Mute Volume'}
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
        </button>
      </div>
    </>
  );
};

export default AudioPlayer;
