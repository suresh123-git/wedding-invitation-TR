import React from 'react';
import { Calendar, Clock, Utensils, Flame, Download, ExternalLink } from 'lucide-react';

const EventDetails = () => {
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
    <section className="py-10 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <span className="font-cinzel text-xs uppercase tracking-widest text-amber-900 font-bold">
          Program & Timings
        </span>
        <h2 className="font-cinzel text-3xl font-extrabold text-amber-950 mt-1">
          Wedding Schedule
        </h2>
        <div className="w-20 h-1 bg-amber-600 mx-auto mt-2 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Dinner */}
        <div className="bg-amber-50/90 p-6 sm:p-8 rounded-3xl border-2 border-amber-500/40 shadow-xl flex flex-col justify-between hover:scale-[1.01] transition-transform">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-amber-600 text-stone-950 flex items-center justify-center mb-4 shadow">
              <Utensils className="w-6 h-6" />
            </div>

            <span className="font-cinzel text-xs font-bold uppercase tracking-wider text-amber-800">
              Evening Celebration
            </span>
            <h3 className="font-cinzel text-2xl font-bold text-amber-950 mt-1">
              Grand Wedding Dinner
            </h3>

            <div className="space-y-2 mt-4 text-stone-800 font-cormorant text-lg">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-700" />
                <span className="font-semibold">Thursday, 29th October 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-700" />
                <span className="font-semibold">7:00 PM Onwards</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sumuhurtham */}
        <div className="bg-stone-900 text-amber-100 p-6 sm:p-8 rounded-3xl border-2 border-amber-500/50 shadow-xl flex flex-col justify-between hover:scale-[1.01] transition-transform">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 text-stone-950 flex items-center justify-center mb-4 shadow">
              <Flame className="w-6 h-6 animate-pulse" />
            </div>

            <span className="font-cinzel text-xs font-bold uppercase tracking-wider text-amber-400">
              Sacred Ceremony
            </span>
            <h3 className="font-cinzel text-2xl font-bold text-amber-300 mt-1">
              Sumuhurtham
            </h3>

            <div className="space-y-2 mt-4 text-stone-200 font-cormorant text-lg">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span className="font-semibold">Thursday, 29th October 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span className="font-extrabold text-amber-300">10:22 PM Night (10:22 hrs)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Buttons */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href={gcalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-sm shadow-lg hover:scale-105 transition-all"
        >
          <Calendar className="w-4 h-4" /> Add to Google Calendar <ExternalLink className="w-3.5 h-3.5 ml-1" />
        </a>

        <button
          onClick={downloadIcs}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 hover:bg-stone-800 text-amber-300 border border-amber-500/40 font-bold text-sm shadow-lg hover:scale-105 transition-all"
        >
          <Download className="w-4 h-4" /> Save .ics Calendar Event
        </button>
      </div>
    </section>
  );
};

export default EventDetails;
