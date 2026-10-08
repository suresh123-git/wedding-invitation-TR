import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { weddingData } from '../data/weddingData';

const AvatarFrame = ({ src, alt, className = '' }) => (
  <div
    className={`relative flex items-center justify-center ${className}`}
    style={{ width: 'clamp(170px, 20vw, 240px)', height: 'clamp(170px, 20vw, 240px)' }}
  >
    <svg
      className="absolute inset-0 w-full h-full text-[#C6A15B]/60 pointer-events-none"
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="100" cy="100" r="94" strokeWidth="1.5" strokeDasharray="4 4" />
      <circle cx="100" cy="100" r="88" strokeWidth="1" />
      {Array.from({ length: 16 }).map((_, idx) => {
        const angle = ((idx * 360) / 16) * (Math.PI / 180);
        const x1 = 100 + 88 * Math.cos(angle);
        const y1 = 100 + 88 * Math.sin(angle);
        const x2 = 100 + 94 * Math.cos(angle);
        const y2 = 100 + 94 * Math.sin(angle);
        return <line key={idx} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="1.5" />;
      })}
    </svg>

    <div className="relative w-[86%] h-[86%] rounded-full overflow-hidden p-1.5 bg-gradient-to-tr from-[#8A1F2D] via-[#E2C98A] to-[#C6A15B] shadow-xl">
      <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#FCF9F3] bg-[#F7F1E6]">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  </div>
);

const Couple = () => {
  const { groom, bride } = weddingData;
  const { lang } = useLanguage();

  return (
    <section id="couple" className="section-padding px-4 relative z-10 bg-[#F7F1E6]">
      <div className="section-container text-center">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8"
        >
          <span className="font-['Cinzel'] text-xs sm:text-sm text-[#C6A15B] tracking-[0.3em] uppercase font-bold">
            {lang === 'en' ? 'The Blessed Union' : 'నూతన వధూవరులు'}
          </span>
          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl text-[#8A1F2D] font-bold mt-1">
            {lang === 'en' ? 'Teja & Rishika' : 'తేజ & రిషిక'}
          </h2>
          <p className="font-['Noto_Serif_Telugu'] text-xs text-[#2F6B5D] mt-1 font-semibold">
            {lang === 'en' ? 'నూతన వధూవరులు' : 'The Blessed Union'}
          </p>
        </motion.div>

        {/* Couple Cards Grid */}
        <div className="couple-grid">
          
          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="couple-card"
          >
            <AvatarFrame src={groom.photoUrl} alt={groom.name} className="mb-4 shadow-xl" />

            <span className="inline-block px-3 py-0.5 bg-[#C6A15B]/15 text-[#C6A15B] font-['Cinzel'] text-[10px] tracking-[0.25em] uppercase font-bold rounded-full mb-2">
              {lang === 'en' ? 'Groom' : 'వరుడు'}
            </span>

            <h3 className="font-['Cinzel'] text-2xl sm:text-3xl text-[#8A1F2D] font-bold">
              {lang === 'en' ? groom.name : groom.teluguName}
            </h3>

            <div className="w-full pt-4 border-t border-[#C6A15B]/25 text-xs text-[#302923]/80 space-y-1 mt-4">
              <p className="text-[10px] text-[#C6A15B] uppercase tracking-widest font-bold mb-1">
                {lang === 'en' ? 'Son of' : 'కుమారుడు'}
              </p>
              <p className="font-bold text-[#302923] text-xs sm:text-sm">
                {lang === 'en' ? groom.father : groom.teluguFather}
              </p>
              <p className="font-bold text-[#302923] text-xs sm:text-sm">
                {lang === 'en' ? groom.mother : groom.teluguMother}
              </p>
            </div>
          </motion.div>

          {/* Center Weds Divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center justify-center py-2 lg:py-0 self-center shrink-0"
          >
            <div className="p-3.5 rounded-full bg-[#FCF9F3] border border-[#C6A15B]/40 shadow-md">
              <Heart className="w-6 h-6 text-[#8A1F2D] fill-[#8A1F2D]/20" />
            </div>
            <span className="font-['Great_Vibes'] text-4xl text-[#C6A15B] italic mt-2">
              {lang === 'en' ? 'weds' : 'పరిణయము'}
            </span>
          </motion.div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="couple-card"
          >
            <AvatarFrame src={bride.photoUrl} alt={bride.name} className="mb-4 shadow-xl" />

            <span className="inline-block px-3 py-0.5 bg-[#C6A15B]/15 text-[#C6A15B] font-['Cinzel'] text-[10px] tracking-[0.25em] uppercase font-bold rounded-full mb-2">
              {lang === 'en' ? 'Bride' : 'వధువు'}
            </span>

            <h3 className="font-['Cinzel'] text-2xl sm:text-3xl text-[#8A1F2D] font-bold">
              {lang === 'en' ? bride.name : bride.teluguName}
            </h3>

            <div className="w-full pt-4 border-t border-[#C6A15B]/25 text-xs text-[#302923]/80 space-y-1 mt-4">
              <p className="text-[10px] text-[#C6A15B] uppercase tracking-widest font-bold mb-1">
                {lang === 'en' ? 'Daughter of' : 'ఏకైక పుత్రిక'}
              </p>
              <p className="font-bold text-[#302923] text-xs sm:text-sm">
                {lang === 'en' ? bride.father : bride.teluguFather}
              </p>
              <p className="font-bold text-[#302923] text-xs sm:text-sm">
                {lang === 'en' ? bride.mother : bride.teluguMother}
              </p>
              <p className="text-[11px] text-[#2F6B5D] font-bold pt-1">
                {lang === 'en' ? `of ${bride.location}` : `${bride.teluguLocation}`}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Couple;
