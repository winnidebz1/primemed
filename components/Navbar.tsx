
import React, { useState, useEffect } from 'react';
import { View } from '../App';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || currentView !== 'home' ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}>
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
            <button className="text-brand-blue">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
