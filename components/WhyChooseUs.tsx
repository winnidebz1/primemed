
import React from 'react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: 'Certified Products',
      desc: 'All our medical supplies are FDA approved and meet international safety standards.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Expert Consultation',
      desc: 'Get access to top-tier medical specialists for professional advice and guidance.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: 'WhatsApp Support',
      desc: 'Quick response and direct support via WhatsApp for any queries.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      title: 'Trusted Quality',
      desc: 'Preferred partner for hospitals and clinics across the region.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      )
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-6">Why Choose Prime Med?</h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
          We combine cutting-edge technology with professional medical expertise to deliver healthcare excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((reason, idx) => (
          <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-brand-blue/5 transition-all">
            <div className="w-16 h-16 bg-brand-lightBlue text-brand-blue rounded-2xl flex items-center justify-center mb-8">
              {reason.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">{reason.title}</h3>
            <p className="text-slate-500 leading-relaxed">{reason.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;