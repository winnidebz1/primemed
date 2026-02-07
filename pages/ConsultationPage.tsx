
import React from 'react';
import Consultation from '../components/Consultation';

const ConsultationPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold text-slate-800 mb-6 mt-12">General Medical Consultation</h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Connect with our certified Medical Officers from the comfort of your home. Secure, private, and professional advice through <strong>Prime Med</strong>.
        </p>
      </div>
      <Consultation />
      
      <div className="max-w-5xl mx-auto px-4 mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
          <div className="w-12 h-12 bg-brand-lightBlue text-brand-blue rounded-xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
          </div>
          <h3 className="font-bold text-slate-800 mb-2">Private & Secure</h3>
          <p className="text-sm text-slate-500">Encrypted communication channels for your absolute privacy.</p>
        </div>
        <div className="text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
          <div className="w-12 h-12 bg-brand-lightBlue text-brand-blue rounded-xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <h3 className="font-bold text-slate-800 mb-2">Easy Booking</h3>
          <p className="text-sm text-slate-500">Instant connection with our medical team via WhatsApp.</p>
        </div>
        <div className="text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
          <div className="w-12 h-12 bg-brand-lightBlue text-brand-blue rounded-xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <h3 className="font-bold text-slate-800 mb-2">Certified Experts</h3>
          <p className="text-sm text-slate-500">Only board-certified medical officers with verified credentials.</p>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;