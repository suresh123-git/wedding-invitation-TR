import React from 'react';
import { Phone, MessageCircle, HeartHandshake } from 'lucide-react';

const contactNumbers = [
  { name: "Family Host", phone: "9949758122", formatted: "+91 99497 58122" },
  { name: "Family Host", phone: "9848375988", formatted: "+91 98483 75988" },
  { name: "Family Host", phone: "9010361456", formatted: "+91 90103 61456" },
];

const ContactCard = () => {
  return (
    <section className="py-10 px-4 max-w-4xl mx-auto">
      <div className="bg-stone-900 text-amber-100 rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-amber-500/40 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <HeartHandshake className="w-5 h-5 text-amber-400" />
          <span className="font-cinzel text-xs uppercase tracking-widest text-amber-400 font-bold">
            Family Enquiries
          </span>
        </div>

        <h2 className="font-cinzel text-3xl font-extrabold text-amber-300 mb-2">
          For More Details
        </h2>
        <p className="font-cormorant text-stone-300 text-base mb-6 italic">
          Feel free to reach out to our family hosts
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {contactNumbers.map((c, idx) => (
            <div key={idx} className="bg-stone-800 p-5 rounded-2xl border border-amber-500/30 flex flex-col items-center">
              <span className="text-xs uppercase tracking-wider text-stone-400 font-bold mb-1">
                {c.name}
              </span>
              <a
                href={`tel:${c.phone}`}
                className="font-cinzel text-lg font-bold text-amber-300 hover:text-amber-200 mb-4"
              >
                {c.formatted}
              </a>

              <div className="flex items-center gap-2 w-full">
                <a
                  href={`tel:${c.phone}`}
                  className="flex-1 py-2 px-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-bold flex items-center justify-center gap-1 transition-all"
                >
                  <Phone className="w-3.5 h-3.5" /> Call
                </a>

                <a
                  href={`https://wa.me/91${c.phone}?text=${encodeURIComponent(
                    'Hello! Regarding Teja & Rishika wedding invitation #TejaRish.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-1 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
