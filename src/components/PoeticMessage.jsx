import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Sparkles } from 'lucide-react';

const PoeticMessage = () => {
  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative bg-gradient-to-b from-amber-50 via-white to-amber-50 rounded-3xl p-6 sm:p-14 border-4 border-amber-500/40 shadow-2xl text-stone-800 text-center overflow-hidden"
      >
        {/* Decorative Corners */}
        <div className="absolute top-4 left-4 text-2xl opacity-40 select-none">🛕</div>
        <div className="absolute top-4 right-4 text-2xl opacity-40 select-none">🛕</div>
        <div className="absolute bottom-4 left-4 text-2xl opacity-40 select-none">🌺</div>
        <div className="absolute bottom-4 right-4 text-2xl opacity-40 select-none">🌺</div>

        {/* Lord Ganesha Motif */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-amber-100/90 border-2 border-amber-600/50 flex items-center justify-center shadow-inner mb-2">
            <span className="text-3xl text-amber-900 font-bold">🕉️</span>
          </div>
          <span className="font-cinzel text-xs uppercase tracking-widest text-amber-900 font-bold">
            || Shri Ganeshaya Namaha ||
          </span>
        </div>

        {/* Blessing Verse */}
        <p className="font-cormorant text-lg sm:text-2xl text-amber-950 italic font-semibold leading-relaxed max-w-2xl mx-auto mb-6">
          "With the blessings of the Almighty and the love of our beloved family,"
        </p>

        <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto my-6" />

        <p className="font-playfair text-xl sm:text-2xl text-stone-900 font-bold leading-relaxed max-w-2xl mx-auto mb-6">
          Some people walk into your life and quietly become your home. 🌿
        </p>

        <p className="font-cormorant text-base sm:text-xl text-stone-800 leading-relaxed max-w-2xl mx-auto mb-6">
          After all the conversations, the shared dreams and the promises made without words, we are ready to begin the most beautiful journey of our lives: <strong className="text-amber-900 font-extrabold">together, forever.</strong>
        </p>

        <p className="font-cormorant text-base sm:text-xl text-stone-800 leading-relaxed max-w-2xl mx-auto mb-10">
          But we know we did not get here alone. Every blessing, every prayer and every smile from those who love us has carried us to this day. 🙏
        </p>

        {/* Groom & Bride Section */}
        <div className="my-10 py-8 px-6 bg-gradient-to-br from-amber-100/60 via-white to-amber-100/60 rounded-3xl border-2 border-amber-500/40 shadow-lg">
          <span className="font-great-vibes text-3xl sm:text-4xl text-amber-900 block mb-6">
            So with joyful hearts, we invite you to the wedding of
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Groom */}
            <div className="bg-white p-6 rounded-2xl border border-amber-400/50 shadow hover:shadow-md transition-shadow">
              <span className="font-alex-brush text-3xl text-amber-800 block">Groom</span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-extrabold text-amber-950 mt-1">
                Chi. TEJA SATYA BHASKARA REDDY
              </h3>
              <p className="font-cormorant text-sm sm:text-base text-stone-700 font-semibold mt-2">
                Elder son of Sri Naga Satya Srinivasa Reddy & Smt. Sesha Ratnam
              </p>
            </div>

            {/* Bride */}
            <div className="bg-white p-6 rounded-2xl border border-amber-400/50 shadow hover:shadow-md transition-shadow">
              <span className="font-alex-brush text-3xl text-amber-800 block">Bride</span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-extrabold text-amber-950 mt-1">
                Chi. La. Sow. RISHIKA
              </h3>
              <p className="font-cormorant text-sm sm:text-base text-stone-700 font-semibold mt-2">
                Only daughter of Sri Nallamilli Paddi Reddy & Late Amaravathi
              </p>
            </div>
          </div>

          <p className="font-cormorant text-lg sm:text-xl text-stone-900 font-semibold mt-6 pt-4 border-t border-amber-400/30 flex items-center justify-center gap-2">
            <span>as they take the seven sacred steps and begin a lifetime of love, trust and togetherness.</span>
            <Flame className="w-5 h-5 text-amber-600 animate-pulse inline shrink-0" />
          </p>
        </div>

        {/* Continuation */}
        <p className="font-cormorant text-base sm:text-xl text-stone-800 leading-relaxed max-w-2xl mx-auto mb-6">
          You have been a part of our story, in our laughter, in our growing up and in our dreams. Now we want you to be there for its most precious chapter. 💫
        </p>

        {/* Gift Note */}
        <div className="my-8 p-6 bg-amber-100/70 rounded-2xl border border-amber-400/50 max-w-2xl mx-auto">
          <p className="font-cormorant text-lg sm:text-xl text-stone-900 font-medium">
            We don't ask for gifts. We only ask for your presence, your smile and your blessings. That is the greatest gift we could receive. ❤️
          </p>
        </div>

        {/* Closing Quote */}
        <blockquote className="my-8 p-6 bg-stone-900 text-amber-100 rounded-2xl shadow-xl font-playfair italic text-lg sm:text-xl border border-amber-500/40">
          "Your presence will make our wedding a celebration, and your blessings will make it a lifetime of happiness."
        </blockquote>

        <div className="mt-8 pt-6 border-t border-amber-400/30">
          <span className="font-great-vibes text-3xl sm:text-4xl text-amber-900 block">
            With love and gratitude,
          </span>
          <h4 className="font-cinzel text-2xl font-bold text-amber-950 mt-1">
            Teja & Rishika
          </h4>
          <span className="inline-block mt-3 text-base font-bold text-amber-900 bg-amber-200/80 px-4 py-1 rounded-full border border-amber-400">
            #TejaRish
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default PoeticMessage;
