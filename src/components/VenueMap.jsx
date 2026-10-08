import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

const VenueMap = () => {
  const mapLink = "https://maps.app.goo.gl/GvBRiooXRPMaemTU6";

  return (
    <section id="venue" className="py-10 px-4 max-w-4xl mx-auto">
      <div className="bg-gradient-to-b from-amber-50 to-amber-100 rounded-3xl p-6 sm:p-10 shadow-xl border-2 border-amber-600/40">
        <div className="text-center mb-6">
          <span className="font-cinzel text-xs uppercase tracking-widest text-amber-900 font-bold">
            Location & Directions
          </span>
          <h2 className="font-cinzel text-3xl font-extrabold text-amber-950 mt-1">
            Madhavadhara VUDA Community Hall
          </h2>
          <p className="font-cormorant text-stone-700 text-lg mt-1">
            Madhavadhara VUDA Colony, Visakhapatnam - 530018
          </p>
          <div className="w-20 h-1 bg-amber-600 mx-auto mt-2 rounded-full" />
        </div>

        <div className="rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-lg aspect-video max-h-[350px] mb-6 bg-stone-200">
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
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3.5 px-8 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 text-stone-950 font-extrabold text-sm shadow-xl hover:scale-105 transition-all flex items-center gap-2"
          >
            <Navigation className="w-4 h-4" /> Open Directions in Google Maps <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default VenueMap;
