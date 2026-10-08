import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { weddingData } from '../data/weddingData';

const Hero = () => {
  const { lang } = useLanguage();

  return (
    <section className="relative flex flex-col justify-between items-center text-center px-4 pt-8 pb-12 overflow-hidden bg-[#F7F1E6]">
      <div className="relative z-10 max-w-4xl mx-auto py-6 sm:py-10 flex flex-col items-center">
        
        {/* Auspicious Symbol & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="flex flex-col items-center mb-6"
        >
          <div className="w-14 h-14 rounded-full bg-[#FCF9F3] border border-[#C6A15B]/40 shadow-sm flex items-center justify-center mb-3">
            <span className="text-3xl text-[#8A1F2D]">🪔</span>
          </div>
          <p className="font-['Noto_Serif_Telugu'] text-xs sm:text-sm text-[#2F6B5D] font-bold tracking-wider">
            {weddingData.auspiciousHeader.telugu}
          </p>
          <p className="font-['Cinzel'] text-[11px] text-[#C6A15B] tracking-[0.2em] uppercase mt-1 font-extrabold">
            {weddingData.auspiciousHeader.english}
          </p>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mb-4"
        >
          <h2 className="font-['Cinzel'] text-xs sm:text-sm text-[#302923]/80 tracking-[0.25em] uppercase font-bold">
            {lang === 'en' ? weddingData.invitationTitle.english : weddingData.invitationTitle.telugu}
          </h2>
        </motion.div>

        {/* Gold Line Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-32 sm:w-48 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mb-6"
        />

        {/* Groom & Bride Names */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center gap-1.5 w-full"
        >
          <h1
            className="font-['Cinzel'] font-extrabold text-[#8A1F2D] tracking-wide leading-tight"
            style={{ fontSize: 'clamp(1.9rem, 4vw, 3.6rem)' }}
          >
            {lang === 'en' ? weddingData.groom.name : weddingData.groom.teluguName}
          </h1>

          <div className="my-3 flex items-center justify-center gap-4">
            <span className="w-10 sm:w-16 h-[1px] bg-[#C6A15B]/60" />
            <span className="font-['Great_Vibes'] text-3xl sm:text-4xl text-[#C6A15B] italic px-2">
              {lang === 'en' ? 'weds' : 'పరిణయము'}
            </span>
            <span className="w-10 sm:w-16 h-[1px] bg-[#C6A15B]/60" />
          </div>

          <h1
            className="font-['Cinzel'] font-extrabold text-[#8A1F2D] tracking-wide leading-tight"
            style={{ fontSize: 'clamp(1.9rem, 4vw, 3.6rem)' }}
          >
            {lang === 'en' ? weddingData.bride.name : weddingData.bride.teluguName}
          </h1>
        </motion.div>

        {/* Date Pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 px-6 py-2.5 rounded-full border border-[#C6A15B]/40 bg-[#FCF9F3] shadow-md"
        >
          <p className="font-['Cinzel'] text-xs sm:text-sm text-[#302923] font-bold tracking-[0.2em] uppercase">
            {lang === 'en' ? weddingData.wedding.displayDate : weddingData.wedding.teluguDate}
          </p>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="relative z-10 flex flex-col items-center cursor-pointer text-[#302923]/70 hover:text-[#8A1F2D] transition-colors mt-4"
        onClick={() => document.getElementById('invitation-intro')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="font-['Cinzel'] text-[10px] tracking-[0.2em] uppercase mb-1 font-bold">
          {lang === 'en' ? 'Scroll to view invitation' : 'ఆహ్వాన పత్రిక వీక్షించండి'}
        </span>
        <ChevronDown className="w-4 h-4 text-[#C6A15B]" />
      </motion.div>
    </section>
  );
};

export default Hero;
