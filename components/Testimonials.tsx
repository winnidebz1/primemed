
import React from 'react';
import { TESTIMONIALS } from '../constants.tsx';

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="relative mb-20 text-center">
        <span className="text-brand-red font-bold tracking-widest uppercase text-sm mb-4 block">Our Reputation</span>
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-800">What Our Clients Say</h2>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-lightBlue rounded-full -z-10 blur-3xl opacity-50"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full relative group hover:-translate-y-2 transition-transform duration-500">
            <div className="absolute top-10 right-10 text-brand-lightBlue group-hover:text-blue-100 transition-colors">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V21H14.017ZM6.01704 21L6.01704 18C6.01704 16.8954 6.91243 16 8.01704 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.01704C7.46476 8 7.01704 8.44772 7.01704 9V12C7.01704 12.5523 6.56936 13 6.01704 13H5.01704V21H6.01704Z" />
              </svg>
            </div>
            <p className="text-slate-600 italic mb-8 relative z-10 text-lg leading-relaxed flex-grow">"{t.content}"</p>
            <div className="flex items-center gap-4 relative z-10">
              <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover ring-4 ring-brand-lightBlue" />
              <div>
                <h4 className="font-bold text-slate-800">{t.name}</h4>
                <p className="text-brand-blue text-sm font-semibold">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;