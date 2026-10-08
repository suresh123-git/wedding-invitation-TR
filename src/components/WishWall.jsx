import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Heart, MessageSquare, Send, Sparkles } from 'lucide-react';

const initialWishes = [
  {
    id: 1,
    name: "Uncle & Aunty (Reddy Family)",
    message: "Wishing Teja and Rishika a lifetime of togetherness, endless laughter, and divine prosperity! Blessed to be a part of your story.",
    time: "Today"
  },
  {
    id: 2,
    name: "Srinivas & Family",
    message: "Congratulations Teja & Rishika! May your home be filled with peace, love, and sacred joy as you start this wonderful journey. #TejaRish",
    time: "Yesterday"
  },
  {
    id: 3,
    name: "Friends Circle",
    message: "To our dear brother Teja & sister-in-law Rishika! Can't wait for the grand wedding night at Madhavadhara. Super excited! 🔥❤️",
    time: "2 days ago"
  }
];

const WishWall = () => {
  const [wishes, setWishes] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('tejarish_wishes') || '[]');
    setWishes([...saved, ...initialWishes]);
  }, []);

  const handlePostWish = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim(),
      time: "Just now"
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);

    // Save user wish
    const savedUserWishes = JSON.parse(localStorage.getItem('tejarish_wishes') || '[]');
    localStorage.setItem('tejarish_wishes', JSON.stringify([newWish, ...savedUserWishes]));

    setName('');
    setMessage('');

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <div className="bg-amber-100/70 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-amber-600/40">
        <div className="text-center mb-8">
          <span className="font-cinzel text-xs uppercase tracking-widest text-amber-800 font-bold flex items-center justify-center gap-1">
            <Heart className="w-4 h-4 text-rose-600 fill-rose-600" /> Digital Guestbook
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-amber-950 mt-1">
            Blessings & Warm Wishes
          </h2>
          <p className="font-cormorant text-stone-700 text-base sm:text-lg mt-1 italic">
            "Your blessings will make it a lifetime of happiness." #TejaRish
          </p>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-2 rounded-full" />
        </div>

        {/* Wish Post Form */}
        <form onSubmit={handlePostWish} className="bg-white/90 p-5 rounded-2xl border border-amber-500/30 shadow-md mb-8">
          <h3 className="font-cinzel text-sm font-bold text-amber-950 mb-3 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-600" /> Send Your Blessings to Teja & Rishika
          </h3>

          <div className="space-y-3">
            <input
              type="text"
              required
              placeholder="Your Name (e.g. Ramesh Reddy & Family)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-amber-300 bg-amber-50/50 text-sm focus:outline-none focus:border-amber-600"
            />
            <textarea
              rows="2"
              required
              placeholder="Write your loving blessings and wishes..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-amber-300 bg-amber-50/50 text-sm focus:outline-none focus:border-amber-600"
            />
            <button
              type="submit"
              className="w-full py-2.5 px-5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 text-stone-950 font-bold text-sm shadow hover:from-amber-500 hover:to-amber-400 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" /> Post Blessing on Wall ❤️
            </button>
          </div>
        </form>

        {/* Wishes List */}
        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-1">
          {wishes.map((w) => (
            <div
              key={w.id}
              className="bg-white/80 p-4 rounded-2xl border border-amber-400/40 shadow-sm hover:shadow transition-shadow"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-cinzel font-bold text-amber-950 text-sm flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> {w.name}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold">
                  {w.time}
                </span>
              </div>
              <p className="font-cormorant text-stone-800 text-base italic leading-relaxed">
                "{w.message}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WishWall;
