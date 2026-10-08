import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = ({ onTogglePetals, showPetals }) => {
  const { lang, setLang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        { id: 'home', top: 0 },
        { id: 'invitation-intro', el: document.getElementById('invitation-intro') },
        { id: 'couple', el: document.getElementById('couple') },
        { id: 'events', el: document.getElementById('events') },
        { id: 'countdown', el: document.getElementById('countdown') },
        { id: 'invitation-video', el: document.getElementById('invitation-video') },
        { id: 'contact', el: document.getElementById('contact') }
      ];

      const scrollPos = window.scrollY + 130;
      let current = 'home';
      for (let s of sections) {
        if (s.id === 'home' && window.scrollY < 250) {
          current = 'home';
        } else if (s.el && s.el.offsetTop <= scrollPos) {
          current = s.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: lang === 'en' ? 'HOME' : 'హోమ్', href: '#' },
    { id: 'couple', label: lang === 'en' ? 'COUPLE' : 'వధూవరులు', href: '#couple' },
    { id: 'events', label: lang === 'en' ? 'EVENTS' : 'వేడుకలు', href: '#events' },
    { id: 'countdown', label: lang === 'en' ? 'COUNTDOWN' : 'కౌంట్‌డౌన్', href: '#countdown' },
    { id: 'invitation-video', label: lang === 'en' ? 'VIDEO' : 'వీడియో', href: '#invitation-video' },
    { id: 'contact', label: lang === 'en' ? 'CONTACT' : 'సంప్రదించండి', href: '#contact' }
  ];

  return (
    <header
      className={`sticky top-0 z-[1000] w-full h-[60px] flex items-center transition-all duration-300 border-b border-[#C6A15B]/25 ${
        isScrolled
          ? 'bg-[#F7F1E6]/95 shadow-[0_4px_18px_rgba(48,41,35,0.035)] backdrop-blur-xl'
          : 'bg-[#F7F1E6]/90 backdrop-blur-md'
      }`}
    >
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Monogram Logo T ♥ R */}
        <a
          href="#"
          className="group relative flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[#C6A15B]/45 bg-[#FCF9F3] shadow-[0_2px_10px_rgba(198,161,91,0.15)] hover:border-[#8A1F2D] hover:shadow-[0_4px_16px_rgba(138,31,45,0.25)] transition-all duration-300"
        >
          <span className="font-['Cinzel'] font-extrabold text-base sm:text-lg text-[#8A1F2D] tracking-wider">
            T
          </span>
          <span className="text-[#8A1F2D] text-xs animate-pulse drop-shadow-[0_0_6px_rgba(198,161,91,0.7)] group-hover:scale-125 transition-transform">
            ♥
          </span>
          <span className="font-['Cinzel'] font-extrabold text-base sm:text-lg text-[#8A1F2D] tracking-wider">
            R
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveSection(item.id)}
                className={`group font-['Cinzel'] text-xs tracking-[0.18em] font-bold transition-colors relative py-1.5 ${
                  isActive ? 'text-[#8A1F2D]' : 'text-[#302923] hover:text-[#8A1F2D]'
                }`}
              >
                {item.label}
                {isActive ? (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-[#C6A15B] rounded-full transition-all duration-300" />
                ) : (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-full h-[1.5px] bg-[#C6A15B]/60 transition-all duration-300" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Language Switcher & Controls */}
        <div className="flex items-center gap-3">
          {/* Petal toggle button */}
          <button
            onClick={onTogglePetals}
            className="text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-full border border-[#C6A15B]/40 bg-[#FCF9F3] text-[#8A1F2D] hover:bg-[#8A1F2D] hover:text-white transition-all hidden sm:inline-block"
            title="Toggle Falling Petals"
          >
            {showPetals ? '🌸 Petals' : '🌸 Off'}
          </button>

          {/* EN / Telugu Language Switcher */}
          <div className="font-['Cinzel'] text-xs tracking-wider font-bold flex items-center gap-1 bg-[#FCF9F3] p-1 rounded-full border border-[#C6A15B]/40 shadow-sm select-none">
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-0.5 rounded-full transition-all ${
                lang === 'en'
                  ? 'bg-[#8A1F2D] text-[#FCF9F3] font-black shadow-sm'
                  : 'text-[#302923] hover:text-[#8A1F2D]'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('telugu')}
              className={`px-2.5 py-0.5 rounded-full transition-all font-['Noto_Serif_Telugu'] ${
                lang === 'telugu'
                  ? 'bg-[#8A1F2D] text-[#FCF9F3] font-black shadow-sm'
                  : 'text-[#302923] hover:text-[#8A1F2D]'
              }`}
            >
              తెలుగు
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#8A1F2D] hover:text-[#302923] transition-colors"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#F7F1E6]/98 backdrop-blur-2xl border-b border-[#C6A15B]/30 shadow-xl py-6 px-6 flex flex-col gap-4 text-center z-50">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => {
                setActiveSection(item.id);
                setMobileMenuOpen(false);
              }}
              className="font-['Cinzel'] text-sm tracking-[0.2em] font-bold text-[#302923] hover:text-[#8A1F2D] py-2 border-b border-[#C6A15B]/15"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
