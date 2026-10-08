import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { weddingData } from '../data/weddingData';

const InvitationVideo = () => {
  const { lang } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      // Pause background music while video plays
      window.dispatchEvent(new CustomEvent('pause-background-audio'));
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section id="invitation-video" className="section-padding px-4 relative z-10 text-center bg-[#F7F1E6]">
      <div className="section-container">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-center"
        >
          <span className="font-['Cinzel'] text-xs sm:text-sm text-[#C6A15B] tracking-[0.3em] uppercase font-bold">
            {lang === 'en' ? 'Cinematic Memory' : 'వివాహ ఆహ్వాన వీడియో'}
          </span>
          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl text-[#8A1F2D] font-bold mt-1">
            {lang === 'en' ? 'Official Animated Invitation' : 'మా వివాహ ఆహ్వాన దృశ్యకావ్యం'}
          </h2>
          <p className="font-['Noto_Serif_Telugu'] text-xs text-[#2F6B5D] mt-1 font-semibold">
            {lang === 'en' ? 'వివాహ ఆహ్వాన వీడియో' : 'Official Animated Invitation'}
          </p>
        </motion.div>

        {/* Video Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-[900px] mx-auto p-1.5 sm:p-2 rounded-[20px] border-2 border-[#C6A15B] bg-[#FCF9F3] shadow-[0_20px_50px_rgba(48,41,35,0.12)]"
        >
          <div className="relative w-full aspect-[9/16] sm:aspect-video rounded-[16px] overflow-hidden bg-black group max-h-[550px]">
            <video
              ref={videoRef}
              preload="metadata"
              playsInline
              muted={isMuted}
              className="w-full h-full object-contain"
              poster={weddingData.media.slide1}
              onEnded={() => setIsPlaying(false)}
            >
              <source src={weddingData.media.invitationVideo} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>

            {/* Overlay Play / Pause Button */}
            <div
              onClick={togglePlay}
              className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 cursor-pointer ${
                isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
              }`}
            >
              <button
                className="w-16 h-16 rounded-full bg-[#8A1F2D] text-[#FCF9F3] flex items-center justify-center shadow-xl border-2 border-[#C6A15B] hover:scale-110 transition-transform"
                aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
                title={isPlaying ? 'Pause Video' : 'Play Video'}
              >
                {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
              </button>
            </div>

            {/* Mute Button */}
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 p-2.5 rounded-full bg-black/60 text-amber-300 hover:bg-black/80 transition-colors border border-amber-500/40 z-20"
              title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
            >
              {isMuted ? <VolumeX className="w-5 h-5 text-rose-400" /> : <Volume2 className="w-5 h-5 text-emerald-400" />}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvitationVideo;
