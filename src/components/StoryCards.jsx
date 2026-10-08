import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { weddingData } from '../data/weddingData';

const slideCards = [
  { id: 1, labelEn: "1. Entrance Gopuram", labelTe: "1. ప్రారంభ ద్వారం", image: "/assets/slide1_invitation.jpg" },
  { id: 2, labelEn: "2. Teja & Rishika", labelTe: "2. తేజ & రిషిక", image: "/assets/slide2_couple.jpg" },
  { id: 3, labelEn: "3. Groom Details", labelTe: "3. వరుడు వివరాలు", image: "/assets/slide3_groom.jpg" },
  { id: 4, labelEn: "4. Bride Details", labelTe: "4. వధువు వివరాలు", image: "/assets/slide4_bride.jpg" },
  { id: 5, labelEn: "5. Sumuhurtham", labelTe: "5. సుముహూర్తం & వేదిక", image: "/assets/slide5_muhurtham.jpg" },
  { id: 6, labelEn: "6. Save the Date", labelTe: "6. శుభదినం", image: "/assets/slide6_savethedate.jpg" }
];

const StoryCards = () => {
  const { lang } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCards.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding px-4 relative z-10 bg-[#F7F1E6] text-center">
      <div className="narrow-container">
        
        <div className="flex items-center justify-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-[#C6A15B]" />
          <span className="font-['Cinzel'] text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
            {lang === 'en' ? 'Interactive Story Slides' : 'వివాహ కథాచిత్రాలు'}
          </span>
          <Sparkles className="w-4 h-4 text-[#C6A15B]" />
        </div>

        <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#8A1F2D] mb-6">
          {lang === 'en' ? 'Invitation Slide Cards' : 'అలంకార పత్రిక కార్డ్‌లు'}
        </h2>

        <div className="flex flex-col items-center">
          {/* Smartphone Reel Frame */}
          <div className="relative max-w-sm w-full aspect-[9/16] rounded-[24px] overflow-hidden shadow-2xl border-4 border-[#C6A15B] bg-black">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={slideCards[currentSlide].image}
                alt={slideCards[currentSlide].labelEn}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.03 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Badge */}
            <div className="absolute top-4 left-4 z-10 bg-[#8A1F2D]/90 text-[#FCF9F3] text-[11px] font-bold px-3 py-1 rounded-full border border-[#C6A15B]/50 shadow">
              {lang === 'en' ? slideCards[currentSlide].labelEn : slideCards[currentSlide].labelTe}
            </div>

            {/* Nav Arrows */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slideCards.length) % slideCards.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-[#C6A15B] border border-[#C6A15B]/50 backdrop-blur-sm shadow transition-transform hover:scale-110"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slideCards.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-[#C6A15B] border border-[#C6A15B]/50 backdrop-blur-sm shadow transition-transform hover:scale-110"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Slide Indicator Pills */}
          <div className="flex items-center justify-center gap-1.5 mt-6 flex-wrap">
            {slideCards.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(idx)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  idx === currentSlide
                    ? 'bg-[#8A1F2D] text-[#FCF9F3] shadow-md font-extrabold'
                    : 'bg-[#FCF9F3] text-[#302923] hover:bg-white border border-[#C6A15B]/40'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryCards;
