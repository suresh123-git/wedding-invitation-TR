import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

const CountdownTimer = () => {
  const targetDate = new Date('2026-10-29T22:22:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPassed: false
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPassed: false });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="py-10 px-4 max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-amber-100 rounded-3xl p-6 sm:p-10 text-center shadow-2xl border-2 border-amber-500/40 relative overflow-hidden">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-amber-400 animate-spin-slow" />
          <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-400">
            Sacred Countdown to Muhurtham
          </span>
          <Sparkles className="w-5 h-5 text-amber-400 animate-spin-slow" />
        </div>

        <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-amber-300 mb-2">
          Thursday, 29th October 2026 • 10:22 PM
        </h2>
        <p className="font-cormorant text-stone-300 text-base sm:text-lg mb-8 italic">
          Madhavadhara VUDA Community Hall, Visakhapatnam
        </p>

        {timeLeft.isPassed ? (
          <div className="py-6 bg-amber-950/80 rounded-2xl border border-amber-500/50">
            <h3 className="font-cinzel text-2xl font-bold text-amber-300">
              🎉 The Wedding Celebrations Have Begun!
            </h3>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-stone-800/80 p-4 sm:p-6 rounded-2xl border border-amber-500/30 shadow-lg flex flex-col items-center">
              <span className="font-cinzel text-3xl sm:text-5xl font-black text-amber-400">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-xs uppercase tracking-widest text-stone-300 font-bold mt-2">Days</span>
            </div>

            <div className="bg-stone-800/80 p-4 sm:p-6 rounded-2xl border border-amber-500/30 shadow-lg flex flex-col items-center">
              <span className="font-cinzel text-3xl sm:text-5xl font-black text-amber-400">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-xs uppercase tracking-widest text-stone-300 font-bold mt-2">Hours</span>
            </div>

            <div className="bg-stone-800/80 p-4 sm:p-6 rounded-2xl border border-amber-500/30 shadow-lg flex flex-col items-center">
              <span className="font-cinzel text-3xl sm:text-5xl font-black text-amber-400">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-xs uppercase tracking-widest text-stone-300 font-bold mt-2">Minutes</span>
            </div>

            <div className="bg-stone-800/80 p-4 sm:p-6 rounded-2xl border border-amber-500/30 shadow-lg flex flex-col items-center animate-pulse">
              <span className="font-cinzel text-3xl sm:text-5xl font-black text-amber-400">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-xs uppercase tracking-widest text-stone-300 font-bold mt-2">Seconds</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CountdownTimer;
