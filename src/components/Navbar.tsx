import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Navigation2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Food', href: '#food-highlights' },
    { label: 'Food Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    if (onNavigate) {
      onNavigate(href.replace('#', ''));
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#151515]/90 via-[#151515]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#home');
          }}
          className="flex items-center gap-2 group whitespace-nowrap shrink-0"
        >
          <div className="w-8 h-8 rounded-full bg-[#F59A23]/15 border border-[#C9A45C]/40 flex items-center justify-center text-[#C9A45C] group-hover:border-[#F59A23] transition-colors">
            <span className="font-hindi text-sm font-bold">उ</span>
          </div>
          <span className="text-xl sm:text-2xl font-serif-display font-bold tracking-tight text-[#FFF2D9]">
            Ujala Hotel <span className="font-hindi text-[#C9A45C] text-lg font-normal ml-1">उजाला होटल</span>
          </span>
        </a>

        {/* Zone 2: Navigation Links (Clean typography, whitespace-nowrap) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#FFF2D9]/80">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="hover:text-[#F59A23] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#F59A23] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={BUSINESS_INFO.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#151515] bg-gradient-to-r from-[#F59A23] to-[#C9A45C] hover:from-[#e08915] hover:to-[#b8934a] rounded-md transition-all shadow-md hover:shadow-lg whitespace-nowrap shrink-0"
          >
            <Navigation2 className="w-3.5 h-3.5 fill-current" />
            <span>Get Directions</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-[#FFF2D9] hover:text-[#F59A23] hover:bg-white/5 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#151515]/98 border-b border-[#C9A45C]/20 px-6 pt-4 pb-6 space-y-3 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="py-2 text-base font-medium text-[#FFF2D9]/90 hover:text-[#F59A23] border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={BUSINESS_INFO.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold uppercase tracking-wider text-[#151515] bg-gradient-to-r from-[#F59A23] to-[#C9A45C] rounded-md"
            >
              <Navigation2 className="w-4 h-4 fill-current" />
              <span>Get Directions</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#FFF2D9] border border-[#C9A45C]/40 rounded-md hover:bg-white/5 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#F59A23]" />
              <span>Call Restaurant</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
