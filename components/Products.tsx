
import React from 'react';
import { PRODUCTS, WHATSAPP_NUMBER } from '../constants.tsx';

interface ProductsProps {
  limit?: number;
  filter?: string;
}

const Products: React.FC<ProductsProps> = ({ limit, filter }) => {
  let displayedProducts = filter 
    ? PRODUCTS.filter(p => p.category === filter)
    : PRODUCTS;

  if (limit) {
    displayedProducts = displayedProducts.slice(0, limit);
  }

  const handleTapForPrice = (productName: string) => {
    const message = `Hello, I’m interested in the price of this Prime Med equipment: ${productName}. Please provide more details.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProducts.map((product) => (
          <div 
            key={product.id}
            className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-brand-blue/10 transition-all duration-500 flex flex-col"
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={product.imageUrl} 
                alt={product.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              {/* Category badge removed as requested */}
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-brand-blue transition-colors">
                {product.name}
              </h3>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed">
                {product.description}
              </p>
              
              <button 
                onClick={() => handleTapForPrice(product.name)}
                className="w-full py-4 bg-slate-50 text-brand-blue font-bold rounded-2xl border-2 border-transparent hover:border-brand-blue hover:bg-brand-lightBlue transition-all flex items-center justify-center gap-2 group/btn"
              >
                Tap for Price
                <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      {displayedProducts.length === 0 && (
        <div className="text-center py-20 text-slate-500 italic">
          No products found in this category.
        </div>
      )}
    </div>
  );
};

export default Products;
