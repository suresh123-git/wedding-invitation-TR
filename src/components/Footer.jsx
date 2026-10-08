import React, { useState } from 'react';
import { Copy, Check, MessageCircle, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { weddingData } from '../data/weddingData';

const Footer = () => {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const inviteMsg = `With the blessings of the Almighty, we cordially invite you to the wedding of Teja Satya Bhaskara Reddy & Rishika on Thursday, 29th Oct 2026 in Visakhapatnam. #TejaRish. Venue: Madhavadhara VUDA Community Hall. Link: `;

  const handleShareWhatsapp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(inviteMsg + window.location.href)}`;
    window.open(url, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer className="bg-[#302923] text-[#F7F1E6] py-12 px-4 border-t border-[#C6A15B]/30 text-center">
      <div className="narrow-container flex flex-col items-center">
        
        {/* Monogram T ♥ R */}
        <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#C6A15B]/40 bg-[#FCF9F3]/10 mb-3">
          <span className="font-['Cinzel'] font-extrabold text-lg text-[#C6A15B] tracking-wider">
            T
          </span>
          <span className="text-[#8A1F2D] text-xs animate-pulse">♥</span>
          <span className="font-['Cinzel'] font-extrabold text-lg text-[#C6A15B] tracking-wider">
            R
          </span>
        </div>

        <h3 className="font-['Cinzel'] text-xl font-bold text-[#FCF9F3] tracking-wide">
          Teja Satya Bhaskara Reddy & Rishika
        </h3>
        <p className="font-['Cinzel'] text-xs text-[#C6A15B] font-bold tracking-widest mt-1">
          #TejaRish • 29TH OCTOBER 2026
        </p>

        {/* Share & Copy Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 my-6">
          <button
            onClick={handleShareWhatsapp}
            className="py-2.5 px-5 rounded-full bg-[#2F6B5D] hover:bg-[#235348] text-white font-['Cinzel'] font-bold text-xs tracking-wider flex items-center gap-2 shadow transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{lang === 'en' ? 'Share on WhatsApp' : 'వాట్సాప్‌లో షేర్ చేయండి'}</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="py-2.5 px-5 rounded-full bg-[#FCF9F3]/10 hover:bg-[#FCF9F3]/20 text-[#FCF9F3] border border-[#C6A15B]/40 font-['Cinzel'] font-bold text-xs tracking-wider flex items-center gap-2 transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? (lang === 'en' ? 'Link Copied!' : 'లింక్ కాపీ అయింది!') : (lang === 'en' ? 'Copy Link' : 'లింక్ కాపీ చేయండి')}</span>
          </button>
        </div>

        <div className="w-32 h-[1px] bg-[#C6A15B]/30 my-4" />

        <p className="text-xs text-[#F7F1E6]/70 font-medium flex items-center justify-center gap-1">
          <span>{lang === 'en' ? 'With love & blessings' : 'ప్రేమానురాగాలతో'}</span>
          <Heart className="w-3.5 h-3.5 text-[#8A1F2D] fill-[#8A1F2D]" />
          <span>{lang === 'en' ? 'Teja & Rishika Family' : 'తేజ & రిషిక కుటుంబ సభ్యులు'}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
