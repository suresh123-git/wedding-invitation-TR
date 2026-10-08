import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Navigation, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { weddingData } from '../data/weddingData';

const ContactSection = () => {
  const { lang } = useLanguage();
  const { hosts, wedding } = weddingData;

  return (
    <section id="contact" className="section-padding px-4 relative z-10 bg-[#F7F1E6]">
      <div className="section-container">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <span className="font-['Cinzel'] text-xs sm:text-sm text-[#C6A15B] tracking-[0.3em] uppercase font-bold">
            {lang === 'en' ? 'Enquiries & Assistance' : 'సమాచారం & ఆతిథ్యం'}
          </span>
          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl text-[#8A1F2D] font-bold mt-1">
            {lang === 'en' ? 'Host Contact Details' : 'ఆతిథ్య గ్రహీతల వివరాలు'}
          </h2>
          <p className="font-['Noto_Serif_Telugu'] text-xs text-[#2F6B5D] mt-1 font-semibold">
            {lang === 'en' ? 'ఆతిథ్య గ్రహీతల వివరాలు' : 'Host Contact Details'}
          </p>
        </motion.div>

        {/* Contacts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {hosts.contacts.map((c, idx) => (
            <div
              key={idx}
              className="bg-[#FCF9F3] p-5 rounded-2xl border border-[rgba(198,161,91,0.38)] flex flex-col items-center text-center shadow-sm hover:border-[#8A1F2D] transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-[#8A1F2D]/10 text-[#8A1F2D] flex items-center justify-center mb-2 font-bold text-sm">
                📞
              </div>
              <span className="text-[11px] uppercase tracking-wider text-[#C6A15B] font-bold mb-1">
                {lang === 'en' ? `Family Host ${idx + 1}` : `ఆతిథ్య గ్రహీత ${idx + 1}`}
              </span>
              <a
                href={`tel:${c.phone}`}
                className="font-['Cinzel'] text-lg font-extrabold text-[#8A1F2D] hover:underline mb-3"
              >
                +91 {c.phone}
              </a>

              <div className="flex items-center gap-2 w-full">
                <a
                  href={`tel:${c.phone}`}
                  className="flex-1 py-2 px-2 rounded-xl bg-[#8A1F2D] text-[#FCF9F3] text-xs font-bold font-['Cinzel'] flex items-center justify-center gap-1 shadow hover:bg-[#6e1823] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" /> Call
                </a>
                <a
                  href={`https://wa.me/91${c.phone}?text=${encodeURIComponent(
                    'Hello! Regarding Teja Satya Bhaskara Reddy & Rishika wedding invitation #TejaRish.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-2 rounded-xl bg-[#2F6B5D] text-white text-xs font-bold font-['Cinzel'] flex items-center justify-center gap-1 shadow hover:bg-[#235348] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Google Map Box */}
        <div className="bg-[#FCF9F3] p-6 rounded-3xl border border-[rgba(198,161,91,0.38)] shadow-md">
          <div className="text-center mb-4">
            <span className="font-['Cinzel'] text-xs font-bold uppercase tracking-wider text-[#C6A15B]">
              {lang === 'en' ? 'GPS Navigation' : 'లైవ్ మ్యాప్ దిశలు'}
            </span>
            <h3 className="font-['Cinzel'] text-xl font-bold text-[#8A1F2D] mt-0.5">
              {lang === 'en' ? wedding.venue : wedding.teluguVenue}
            </h3>
            <p className="text-xs text-[#302923]/80 mt-1 font-medium">
              {lang === 'en' ? wedding.location : wedding.teluguLocation}
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#C6A15B]/40 aspect-video max-h-[340px] mb-4 bg-stone-200 shadow-inner">
            <iframe
              title="Madhavadhara VUDA Community Hall Google Map"
              src="https://maps.google.com/maps?q=Madhavadhara%20VUDA%20Community%20Hall%20Visakhapatnam&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            />
          </div>

          <div className="flex justify-center">
            <a
              href={wedding.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#8A1F2D] text-[#FCF9F3] font-['Cinzel'] text-xs font-bold tracking-[0.18em] uppercase shadow-md hover:bg-[#6e1823] transition-colors"
            >
              <Navigation className="w-4 h-4" />
              <span>{lang === 'en' ? 'OPEN IN GOOGLE MAPS' : 'గూగుల్ మ్యాప్స్ లో తెరవండి'}</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
