import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Download, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { weddingData } from '../data/weddingData';

const EventCardItem = ({
  eventNumber,
  badgeText,
  teluguSubtitle,
  event,
  buttonLabel,
  teluguButtonLabel,
  illustrationSrc
}) => {
  const { lang } = useLanguage();

  return (
    <div className="event-card bg-[#FCF9F3] border border-[rgba(198,161,91,0.38)]">
      <span className="font-['Cinzel'] text-[clamp(2.8rem,4.5vw,4.2rem)] font-extrabold text-[#C6A15B]/35 leading-none select-none">
        {eventNumber}
      </span>

      <div className="w-16 h-16 rounded-2xl bg-[#F7F1E6] border border-[#C6A15B]/40 flex items-center justify-center my-3 shadow-inner">
        <img src={illustrationSrc} alt={badgeText} className="w-10 h-10 object-contain" />
      </div>

      <div className="mb-2">
        <span className="inline-block px-3 py-0.5 bg-[#8A1F2D]/10 text-[#8A1F2D] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
          {badgeText}
        </span>
        <p className="font-['Noto_Serif_Telugu'] text-xs font-bold text-[#2F6B5D] mt-1">
          {teluguSubtitle}
        </p>
      </div>

      <div className="event-title-area mb-4">
        <h3 className="font-['Cinzel'] text-xl sm:text-2xl text-[#8A1F2D] font-bold tracking-wide">
          {lang === 'en' ? event.title : event.teluguTitle}
        </h3>
      </div>

      <div className="space-y-3 w-full text-center mb-6">
        <div>
          <p className="font-['Cinzel'] font-bold text-sm sm:text-base text-[#302923]">
            {lang === 'en' ? event.displayDate : event.teluguDate}
          </p>
          <p className="font-['Cinzel'] text-xs sm:text-sm font-extrabold text-[#C6A15B] mt-1">
            {lang === 'en' ? event.time : event.teluguTime}
          </p>
        </div>

        <div className="pt-3 border-t border-[#C6A15B]/20">
          <p className="font-['Cinzel'] font-bold text-sm text-[#8A1F2D]">
            {lang === 'en' ? event.venue : event.teluguVenue}
          </p>
          <p className="text-xs text-[#302923]/80 font-medium">
            {lang === 'en' ? event.location : event.teluguLocation}
          </p>
        </div>
      </div>

      <a
        href={event.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={event.ariaLabel}
        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-[#C6A15B] text-[#302923] font-['Cinzel'] text-xs font-bold tracking-[0.18em] uppercase transition-all duration-250 ease-out hover:bg-[#8A1F2D] hover:text-[#FCF9F3] hover:border-[#8A1F2D] shadow-sm"
      >
        <span>{lang === 'en' ? buttonLabel : teluguButtonLabel}</span>
        <span className="text-xs transition-transform group-hover:translate-x-1">→</span>
      </a>
    </div>
  );
};

const Events = () => {
  const { wedding, reception, media } = weddingData;
  const { lang } = useLanguage();

  const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'Teja & Rishika Wedding & Sumuhurtham (#TejaRish)'
  )}&dates=20261029T133000Z/20261029T180000Z&details=${encodeURIComponent(
    'Wedding Celebrations of Chi. Teja Satya Bhaskara Reddy & Chi. La. Sow. Rishika. Dinner at 7:00 PM, Sumuhurtham at 10:22 PM.'
  )}&location=${encodeURIComponent(
    'Madhavadhara VUDA Community Hall, Madhavadhara VUDA Colony, Visakhapatnam - 530018'
  )}`;

  const downloadIcs = () => {
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Teja & Rishika Wedding//EN
BEGIN:VEVENT
UID:teja-rishika-wedding-2026
DTSTAMP:20261008T000000Z
DTSTART:20261029T190000
DTEND:20261029T235900
SUMMARY:Teja Satya Bhaskara Reddy & Rishika Wedding #TejaRish
DESCRIPTION:Dinner at 7:00 PM. Sumuhurtham at 10:22 PM. Madhavadhara VUDA Community Hall, Visakhapatnam.
LOCATION:Madhavadhara VUDA Community Hall, Madhavadhara VUDA Colony, Visakhapatnam - 530018
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Teja_Rishika_Wedding_29Oct2026.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="events" className="section-padding px-4 relative z-10 bg-[#F7F1E6]">
      <div className="section-container">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 sm:mb-8"
        >
          <span className="font-['Cinzel'] text-xs sm:text-sm text-[#C6A15B] tracking-[0.3em] uppercase font-bold">
            {lang === 'en' ? 'Sacred Celebrations' : 'శుభకార్య వివరములు'}
          </span>
          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl text-[#8A1F2D] font-bold mt-1">
            {lang === 'en' ? 'Wedding & Dinner' : 'వివాహం & డిన్నర్'}
          </h2>
          <p className="font-['Noto_Serif_Telugu'] text-xs text-[#2F6B5D] mt-1 font-semibold">
            {lang === 'en' ? 'శుభకార్య వివరములు' : 'Sacred Celebrations'}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="events-grid">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <EventCardItem
              eventNumber="01"
              badgeText="Sumuhurtham"
              teluguSubtitle={wedding.teluguTitle}
              event={wedding}
              buttonLabel="VIEW WEDDING VENUE"
              teluguButtonLabel="కళ్యాణ వేదిక చూడండి"
              illustrationSrc={media.slide5}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <EventCardItem
              eventNumber="02"
              badgeText="Celebration Evening"
              teluguSubtitle={reception.teluguTitle}
              event={reception}
              buttonLabel="VIEW DINNER VENUE"
              teluguButtonLabel="విందు వేదిక చూడండి"
              illustrationSrc={media.slide1}
            />
          </motion.div>
        </div>

        {/* Add to Calendar Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={gcalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8A1F2D] text-[#FCF9F3] font-['Cinzel'] text-xs font-bold tracking-[0.18em] uppercase shadow-md hover:bg-[#6e1823] transition-colors"
          >
            <Calendar className="w-4 h-4" /> Add to Google Calendar <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>

          <button
            onClick={downloadIcs}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#C6A15B] bg-[#FCF9F3] text-[#302923] font-['Cinzel'] text-xs font-bold tracking-[0.18em] uppercase shadow-sm hover:border-[#8A1F2D] hover:text-[#8A1F2D] transition-colors"
          >
            <Download className="w-4 h-4" /> Save .ics Calendar File
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
