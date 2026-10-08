import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { weddingData } from '../data/weddingData';

const useCountdown = (targetDateString) => {
  const targetDate = new Date(targetDateString).getTime();

  const calculate = () => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      isPast: false
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculate());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculate());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDateString]);

  return timeLeft;
};

const Countdown = () => {
  const { lang } = useLanguage();
  const timeLeft = useCountdown(weddingData.wedding.date);

  const units = [
    { label: lang === 'en' ? 'DAYS' : 'రోజులు', value: timeLeft.days },
    { label: lang === 'en' ? 'HOURS' : 'గంటలు', value: timeLeft.hours },
    { label: lang === 'en' ? 'MINUTES' : 'నిమిషాలు', value: timeLeft.minutes },
    { label: lang === 'en' ? 'SECONDS' : 'సెకన్లు', value: timeLeft.seconds }
  ];

  return (
    <section id="countdown" className="section-padding px-4 relative z-10 text-center bg-[#F7F1E6]">
      <div className="narrow-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-2"
        >
          <p className="font-['Cinzel'] text-xs sm:text-sm text-[#C6A15B] tracking-[0.3em] uppercase font-bold mb-1">
            {lang === 'en' ? 'The Auspicious Countdown' : 'శుభ ముహూర్త కౌంట్‌డౌన్'}
          </p>

          {timeLeft.isPast ? (
            <div className="py-4">
              <h3 className="font-['Cinzel'] text-2xl sm:text-4xl text-[#8A1F2D] font-bold">
                {lang === 'en' ? 'THE CELEBRATION HAS BEGUN' : 'వివాహ మహోత్సవం ప్రారంభమైనది'}
              </h3>
              <p className="font-['Great_Vibes'] text-2xl sm:text-3xl text-[#C6A15B] mt-2">
                Teja & Rishika ❤️
              </p>
            </div>
          ) : (
            <div>
              <h3 className="font-['Cinzel'] text-xs sm:text-sm text-[#302923] font-extrabold tracking-[0.2em] uppercase mb-4">
                {lang === 'en' ? 'THE CELEBRATION BEGINS IN' : 'వివాహ వేడుకకు మిగిలిన సమయం'}
              </h3>

              <div className="flex items-center justify-center gap-3 text-[#C6A15B] mb-4">
                <span className="h-[1px] w-20 sm:w-32 bg-gradient-to-r from-transparent to-[#C6A15B]/60" />
                <span className="text-xs select-none">✦</span>
                <span className="h-[1px] w-20 sm:w-32 bg-gradient-to-l from-transparent to-[#C6A15B]/60" />
              </div>

              {/* Single-line Ticker */}
              <div className="single-line-countdown px-2 overflow-x-hidden">
                {units.map((unit, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flex flex-col items-center justify-center shrink-0">
                      <span
                        className="font-['Cinzel'] font-extrabold text-[#8A1F2D] leading-none tracking-tight"
                        style={{ fontSize: 'clamp(1.8rem, 5.5vw, 4.5rem)' }}
                      >
                        {String(unit.value).padStart(2, '0')}
                      </span>
                      <span
                        className="font-['Cinzel'] text-[#302923] font-extrabold uppercase tracking-widest mt-2"
                        style={{ fontSize: 'clamp(0.6rem, 1.4vw, 0.8rem)' }}
                      >
                        {unit.label}
                      </span>
                    </div>

                    {idx < units.length - 1 && (
                      <span
                        className="text-[#C6A15B] font-serif self-center pb-5 select-none opacity-80 shrink-0"
                        style={{ fontSize: 'clamp(0.7rem, 2vw, 1.2rem)' }}
                      >
                        ✦
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="flex items-center justify-center gap-3 text-[#C6A15B] mt-4">
                <span className="h-[1px] w-20 sm:w-32 bg-gradient-to-r from-transparent to-[#C6A15B]/60" />
                <span className="text-xs select-none">✦</span>
                <span className="h-[1px] w-20 sm:w-32 bg-gradient-to-l from-transparent to-[#C6A15B]/60" />
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;
