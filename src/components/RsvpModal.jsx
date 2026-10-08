import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Heart, CheckCircle2, UserCheck, Sparkles, Send } from 'lucide-react';

const RsvpModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '1',
    attending: 'both', // 'dinner', 'muhurtham', 'both'
    diet: 'veg',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    // Trigger celebration confetti
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#d97706', '#dc2626', '#ef4444', '#fbbf24']
    });

    // Save RSVP in localStorage
    const existing = JSON.parse(localStorage.getItem('tejarish_rsvps') || '[]');
    existing.push({ ...formData, timestamp: new Date().toISOString() });
    localStorage.setItem('tejarish_rsvps', JSON.stringify(existing));

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({ name: '', phone: '', guests: '1', attending: 'both', diet: 'veg', message: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-lg bg-amber-50 text-stone-900 rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-amber-600/40 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-amber-200/80 hover:bg-amber-300 text-stone-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="text-center mb-6">
              <span className="font-great-vibes text-3xl text-amber-900 block">
                Join our Celebration
              </span>
              <h3 className="font-cinzel text-2xl font-bold text-amber-950">
                Confirm Your RSVP
              </h3>
              <p className="font-cormorant text-stone-700 text-sm mt-1">
                Please let us know your presence so we can warmly welcome you!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-amber-400/60 bg-white focus:outline-none focus:border-amber-600 text-sm font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-amber-400/60 bg-white focus:outline-none focus:border-amber-600 text-sm font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">
                    Number of Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-amber-400/60 bg-white focus:outline-none focus:border-amber-600 text-sm font-medium"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                    <option value="5+">5+ Family Members</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">
                  Attending Events
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'both', label: 'Both Events' },
                    { id: 'dinner', label: 'Dinner Only' },
                    { id: 'muhurtham', label: 'Muhurtham Only' }
                  ].map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setFormData({ ...formData, attending: item.id })}
                      className={`py-2 px-2 text-xs font-bold rounded-xl border-2 transition-all ${
                        formData.attending === item.id
                          ? 'bg-amber-600 text-stone-950 border-amber-700 shadow'
                          : 'bg-white text-stone-700 border-amber-300 hover:border-amber-400'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">
                  Message / Warm Wishes
                </label>
                <textarea
                  rows="3"
                  placeholder="Share a heartfelt blessing for Teja & Rishika..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-amber-400/60 bg-white focus:outline-none focus:border-amber-600 text-sm font-medium"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-extrabold text-base shadow-xl transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                <Send className="w-5 h-5" /> Submit RSVP & Send Blessings
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-3 animate-bounce" />
            <span className="font-great-vibes text-3xl text-amber-900 block">
              Thank You, {formData.name}!
            </span>
            <h3 className="font-cinzel text-xl font-bold text-amber-950 mt-1">
              Your RSVP Has Been Confirmed 🎉
            </h3>
            <p className="font-cormorant text-stone-700 text-base mt-2">
              We are delighted to have you join us for Teja & Rishika's grand wedding celebrations!
            </p>

            <div className="mt-6 pt-4 border-t border-amber-400/40">
              <button
                onClick={handleReset}
                className="py-2.5 px-6 rounded-full bg-amber-600 text-stone-950 font-bold text-sm shadow hover:bg-amber-500 transition-colors"
              >
                Close & Return to Invitation
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RsvpModal;
