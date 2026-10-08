import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { weddingData } from '../data/weddingData';

const GoldDivider = ({ className = '' }) => (
  <div className={`flex items-center justify-center gap-3 text-[#C6A15B] my-6 ${className}`}>
    <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C6A15B]/60" />
    <span className="text-xs select-none">✦</span>
    <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C6A15B]/60" />
  </div>
);

const InvitationIntro = () => {
  const { lang } = useLanguage();

  return (
    <section id="invitation-intro" className="section-padding px-4 relative z-10 text-center w-full flex flex-col items-center justify-center bg-[#F7F1E6]">
      <div className="narrow-container flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col items-center justify-center text-center"
        >
          {/* Top Star Accent */}
          <div className="flex items-center justify-center gap-2 text-[#C6A15B] mb-3 w-full">
            <span className="text-xs">✦</span>
            <span className="text-base font-serif">❈</span>
            <span className="text-xs">✦</span>
          </div>

          <p className="font-['Cinzel'] text-xs sm:text-sm text-[#C6A15B] tracking-[0.3em] uppercase font-bold mb-4 text-center w-full">
            {lang === 'en' ? 'Cordially Inviting You' : 'ఆత్మీయ ఆహ్వానం'}
          </p>

          {/* Main Poem Quote */}
          <h3
            className={`text-[#8A1F2D] max-w-[800px] mx-auto mb-6 text-center w-full block ${
              lang === 'en' ? "font-['Cinzel'] font-bold" : "font-['Noto_Serif_Telugu'] font-semibold"
            }`}
            style={{
              fontSize: lang === 'en' ? 'clamp(1.15rem, 2.2vw, 1.85rem)' : 'clamp(1.05rem, 1.8vw, 1.45rem)',
              lineHeight: '1.6'
            }}
          >
            {lang === 'en' ? weddingData.invitationQuote.english : weddingData.invitationQuote.telugu}
          </h3>

          {/* Poetic Continuation */}
          <p className="font-['Cormorant_Garamond'] text-stone-800 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-4">
            {lang === 'en' ? weddingData.poeticStory.englishParagraph1 : weddingData.poeticStory.teluguParagraph1}
          </p>

          {/* Parents & Hosts Section */}
          <div className="space-y-2 text-[#302923] max-w-lg mx-auto pt-4 border-t border-[#C6A15B]/25 w-full flex flex-col items-center justify-center text-center">
            <p className="font-bold text-base sm:text-lg text-[#2F6B5D] font-['Plus_Jakarta_Sans'] text-center w-full">
              {lang === 'en' ? weddingData.hosts.groomParents : weddingData.hosts.teluguGroomParents}
            </p>
            <p className="text-xs text-[#302923]/80 pt-1 italic text-center w-full font-semibold">
              {lang === 'en' ? weddingData.invitationRequest.english : weddingData.invitationRequest.telugu}
            </p>
          </div>
        </motion.div>

        <GoldDivider className="my-6" />
      </div>
    </section>
  );
};

export default InvitationIntro;
