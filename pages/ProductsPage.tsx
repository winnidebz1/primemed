
import React from 'react';
import Products from '../components/Products';
import { CATEGORIES } from '../constants';

interface ProductsPageProps {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ activeCategory, setActiveCategory }) => {
  const currentCategory = CATEGORIES.find(cat => cat.name === activeCategory);
  const bannerImage = currentCategory?.bannerImage || 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000';

  return (
    <div className="pt-24 pb-20">
      {/* Dynamic Banner based on category */}
      <div className="bg-slate-900 py-16 md:py-24 mb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={bannerImage} alt="background" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-brand-blue/40 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6 lg:mb-8">
            {activeCategory}
          </h1>
          <p className="text-lg md:text-xl text-slate-100 max-w-2xl mx-auto leading-relaxed opacity-90 px-4">
            Professional-grade tools and systems curated by <strong>Prime Med</strong> for accuracy and reliability in healthcare.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-16 overflow-x-auto no-scrollbar">
        <div className="flex flex-wrap gap-3 justify-center min-w-max pb-4">
          {CATEGORIES.map(cat => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-8 py-3 rounded-2xl font-bold transition-all border-2 whitespace-nowrap ${activeCategory === cat.name
                ? 'bg-brand-blue text-white border-brand-blue shadow-xl shadow-brand-blue/30 scale-105'
                : 'bg-white text-slate-600 border-gray-100 hover:border-brand-blue/30'
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <Products filter={activeCategory === 'All' ? undefined : activeCategory} />
      </div>
    </div>
  );
};

export default ProductsPage;
