import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import AudioPlayer from './components/AudioPlayer';
import FallingPetals from './components/FallingPetals';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InvitationIntro from './components/InvitationIntro';
import Couple from './components/Couple';
import Events from './components/Events';
import Countdown from './components/Countdown';
import StoryCards from './components/StoryCards';
import InvitationVideo from './components/InvitationVideo';
import WishWall from './components/WishWall';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [showPetals, setShowPetals] = useState(true);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#F7F1E6] text-[#302923] font-outfit relative">
        {/* Falling Petals Overlay */}
        {showPetals && <FallingPetals count={26} />}

        {/* Floating Background Music Player */}
        <AudioPlayer />

        {/* Sticky Navbar with Monogram, Nav Links, & EN/Telugu Switch */}
        <Navbar
          showPetals={showPetals}
          onTogglePetals={() => setShowPetals(!showPetals)}
        />

        {/* Main Content Sections */}
        <main>
          {/* Hero Section */}
          <Hero />

          {/* Invitation Intro & Quoted Poetry */}
          <InvitationIntro />

          {/* Couple Section (Groom & Bride Cards) */}
          <Couple />

          {/* Events Section (Sumuhurtham & Grand Dinner) */}
          <Events />

          {/* Auspicious Single-Line Countdown Ticker */}
          <Countdown />

          {/* Interactive Invitation Story Cards */}
          <StoryCards />

          {/* Cinematic Animated Video Player */}
          <InvitationVideo />

          {/* Host Contact Details & Google Maps */}
          <ContactSection />

          {/* Digital Guestbook Wish Wall */}
          <section className="section-padding px-4 relative z-10 bg-[#F7F1E6]">
            <div className="narrow-container">
              <WishWall />
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}
