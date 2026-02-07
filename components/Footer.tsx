
import React from 'react';
import { WHATSAPP_NUMBER } from '../constants.tsx';
import { View } from '../App';

interface FooterProps {
  onNavigate: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <button onClick={() => onNavigate('home')} className="flex items-center gap-3">
              <img src="/images/logo.png" alt="Prime Med Logo" className="h-16 w-auto" />
            </button>
            <p className="leading-relaxed">
              Prime Med is your leading provider of medical equipment and professional healthcare consultation services. We bring quality care to your doorstep.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate('home')} className="hover:text-brand-red transition-colors text-left">Home</button></li>
              <li><button onClick={() => onNavigate('products')} className="hover:text-brand-red transition-colors text-left">Equipment Catalog</button></li>
              <li><button onClick={() => onNavigate('consultation')} className="hover:text-brand-red transition-colors text-left">Book Consultation</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-brand-red transition-colors text-left">About Us</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-brand-red transition-colors text-left">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-wider">Contact Details</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <svg className="w-6 h-6 text-brand-red shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0534045458</span>
              </li>
              <li className="flex gap-4">
                <svg className="w-6 h-6 text-brand-red shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Ghana</span>
              </li>
              <li className="flex gap-4">
                <svg className="w-6 h-6 text-brand-red shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@primemedsolutions.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-wider">Fast Response</h4>
            <p className="mb-6">Click below to chat with our medical equipment specialists immediately.</p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white px-6 py-4 rounded-2xl font-bold transition-all w-full justify-center shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.67-1.611-.918-2.208-.242-.588-.487-.508-.67-.517-.173-.009-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.435 5.626 1.435h.004c6.551 0 11.889-5.338 11.892-11.894a11.816 11.816 0 00-3.447-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Prime Med Solutions. All rights reserved.</p>
          <div className="flex gap-8 text-sm">
            <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
