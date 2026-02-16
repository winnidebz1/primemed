
import React from 'react';
import { CATEGORIES } from '../constants.tsx';
import { View } from '../App';

interface CategoriesProps {
  onCategorySelect?: (view: View, categoryName: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ onCategorySelect }) => {
  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'Theatre Setups':
        return (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case 'Laboratory Setups':
        return (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        );
      case 'Diagnostic Setups':
        return (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 'Dental Setups':
        return (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9c0 .667-.333 1-1 1s-1-.333-1-1 .333-1 1-1 1 .333 1 1zm3 0c0 .667-.333 1-1 1s-1-.333-1-1 .333-1 1-1 1 .333 1 1z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18v-3" />
          </svg>
        );
      case 'General Medical Machines and Equipment':
        return (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        );
      case 'Medical Consumables':
        return (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 11h6m-3-3v6" />
          </svg>
        );
      case 'Others':
        return (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" />
          </svg>
        );
      default:
        return (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-6 tracking-tight">Browse Specialized Categories</h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10">Select a specialized medical category to explore our range of high-performance equipment and professional setups.</p>
        <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {CATEGORIES.map((cat, idx) => (
          <div
            key={idx}
            onClick={() => onCategorySelect?.('products', cat.name)}
            className="group cursor-pointer bg-white p-6 lg:p-10 rounded-3xl shadow-sm border border-gray-100 hover:border-brand-blue hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-500 text-center flex flex-col items-center relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-lightBlue rounded-full group-hover:scale-150 transition-transform duration-700 opacity-50"></div>

            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-brand-lightBlue rounded-[2rem] flex items-center justify-center text-brand-blue mb-6 lg:mb-8 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-sm relative z-10">
              {getCategoryIcon(cat.name)}
            </div>

            <h3 className="font-bold text-slate-800 text-base lg:text-xl group-hover:text-brand-blue transition-colors mb-3 lg:mb-4 relative z-10">
              {cat.name}
            </h3>

            <p className="text-slate-500 text-sm lg:text-base mb-6 lg:mb-8 leading-relaxed relative z-10 hidden lg:block">
              Explore professional-grade equipment and full setups for {cat.name.toLowerCase()}.
            </p>

            <button className="flex items-center gap-2 text-brand-blue font-bold group-hover:gap-3 group-hover:text-brand-red transition-all relative z-10 text-sm lg:text-base">
              View Products
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
