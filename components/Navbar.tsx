
import React, { useState, useEffect } from 'react';
import { View } from '../App';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; view: View }[] = [
    { name: 'Home', view: 'home' },
    { name: 'About', view: 'about' },
    { name: 'Equipment', view: 'products' },
    { name: 'Consultation', view: 'consultation' },
    { name: 'Contact', view: 'contact' },
  ];

  const handleMobileNavClick = (view: View) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button onClick={() => onNavigate('home')} className="flex items-center gap-3 group">
            <img src="/images/logo.png" alt="Prime Med Logo" className="h-14 w-auto object-contain" />
          </button>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => onNavigate(link.view)}
                className={`font-medium transition-colors hover:text-brand-red relative py-1 ${currentView === link.view ? 'text-brand-blue font-semibold' : 'text-slate-600'
                  }`}
              >
                {link.name}
                {currentView === link.view && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-red rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-blue"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleMobileNavClick(link.view)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${currentView === link.view
                    ? 'bg-brand-blue text-white font-semibold'
                    : 'text-slate-600 hover:bg-gray-100'
                  }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
