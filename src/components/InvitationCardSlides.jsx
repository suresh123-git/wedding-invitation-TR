import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Film, Image as ImageIcon, Sparkles } from 'lucide-react';

const slideData = [
  { id: 1, title: "Invitation", image: "/assets/slide1_invitation.jpg", label: "Entrance Gopuram" },
  { id: 2, title: "Couple", image: "/assets/slide2_couple.jpg", label: "Teja & Rishika" },
  { id: 3, title: "Groom", image: "/assets/slide3_groom.jpg", label: "Groom Family" },
  { id: 4, title: "Bride", image: "/assets/slide4_bride.jpg", label: "Bride Family" },
  { id: 5, title: "Sumuhurtham", image: "/assets/slide5_muhurtham.jpg", label: "Kalyana Mandapam" },
  { id: 6, title: "Save Date", image: "/assets/slide6_savethedate.jpg", label: "#TejaRish" }
];

const InvitationCardSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [viewMode, setViewMode] = useState('cards'); // 'cards' or 'video'

  useEffect(() => {
    let timer;
    if (viewMode === 'cards') {
      timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slideData.length);
      }, 6500);
    }
    return () => clearInterval(timer);
  }, [viewMode]);

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <div className="bg-gradient-to-b from-amber-100/50 via-amber-50/80 to-amber-100/50 rounded-3xl p-6 sm:p-10 border-2 border-amber-600/30 shadow-xl text-center relative overflow-hidden">
        
        {/* Header Title */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-amber-600 animate-spin-slow" />
          <span className="font-cinzel text-xs font-extrabold uppercase tracking-widest text-amber-900">
            Interactive Video Invitation Reel
          </span>
          <Sparkles className="w-5 h-5 text-amber-600 animate-spin-slow" />
        </div>

        <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-amber-950 mb-6">
          The Wedding Story Cards
        </h2>

        {/* View Mode Toggle Switcher */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="bg-stone-900/90 p-1.5 rounded-full border border-amber-500/40 shadow-lg flex items-center gap-1">
            <button
              onClick={() => setViewMode('cards')}
              className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-extrabold transition-all ${
                viewMode === 'cards'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 shadow-md'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" /> Story Cards
            </button>
            <button
              onClick={() => setViewMode('video')}
              className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-extrabold transition-all ${
                viewMode === 'video'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 shadow-md'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <Film className="w-3.5 h-3.5" /> Watch Video Reel
            </button>
          </div>
        </div>

        {viewMode === 'cards' ? (
          <div className="flex flex-col items-center">
            {/* Phone Display Mockup */}
            <div className="relative max-w-sm w-full aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-500/50 bg-stone-950 group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={slideData[currentSlide].image}
                  alt={slideData[currentSlide].title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Badge */}
              <div className="absolute top-4 left-4 z-10 bg-amber-950/80 backdrop-blur-md text-amber-300 text-[11px] font-bold px-3 py-1 rounded-full border border-amber-500/40 shadow">
                {slideData[currentSlide].label}
              </div>

              {/* Bottom Hashtag Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent text-amber-200">
                <span className="font-great-vibes text-2xl text-amber-300">#TejaRish</span>
              </div>

              {/* Arrows */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slideData.length) % slideData.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-stone-900/80 hover:bg-stone-900 text-amber-300 border border-amber-500/40 backdrop-blur-md shadow-lg transition-transform hover:scale-110"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slideData.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-stone-900/80 hover:bg-stone-900 text-amber-300 border border-amber-500/40 backdrop-blur-md shadow-lg transition-transform hover:scale-110"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Slide Navigation Tabs */}
            <div className="flex items-center justify-center gap-1.5 mt-6 flex-wrap">
              {slideData.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                    idx === currentSlide
                      ? 'bg-amber-600 text-stone-950 shadow-md font-black'
                      : 'bg-white/80 text-stone-700 hover:bg-white border border-amber-300'
                  }`}
                >
                  {idx + 1}. {slide.title}
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Video Reel Player */
          <div className="flex flex-col items-center">
            <div className="max-w-sm w-full aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-500/50 bg-black">
              <video
                src="/assets/invitation_video.mp4"
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-xs text-amber-900 font-bold mt-3">
              🎥 Animated Telugu Invitation Video with Traditional Music
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default InvitationCardSlides;
