
import React from 'react';
import { WHATSAPP_NUMBER } from '../constants.tsx';

const Consultation: React.FC = () => {
  const handleWhatsAppBooking = () => {
    const message = "Hello, I would like to book a medical consultation with Prime Med. Please provide me with the available schedule.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-brand-blue/10 flex flex-col lg:flex-row min-h-[500px] border border-gray-100">
        <div className="lg:w-1/2 relative min-h-[300px] sm:min-h-[400px] lg:min-h-full">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200"
            alt="Doctor Consultation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-blue/60 backdrop-blur-[2px] flex items-center p-8 lg:p-12">
            <div className="text-white max-w-sm">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 lg:mb-6">General Medical Consultation</h2>
              <p className="text-sm md:text-base lg:text-lg text-slate-100 opacity-95 mb-0 leading-relaxed">
                Connect with our certified Medical Officers from the comfort of your home. Secure, private, and professional advice by <strong>Prime Med</strong>.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center bg-white text-center">
          <div className="max-w-md mx-auto w-full space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-800">Ready to speak with a professional?</h3>
              <p className="text-slate-500 leading-relaxed">
                Click the button below to start your booking process directly via WhatsApp. Our team will assist you with scheduling and payment details instantly.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={handleWhatsAppBooking}
                className="w-full py-5 bg-brand-red hover:bg-red-700 text-white font-bold rounded-2xl text-lg shadow-xl shadow-red-500/20 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.67-1.611-.918-2.208-.242-.588-.487-.508-.67-.517-.173-.009-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.435 5.626 1.435h.004c6.551 0 11.889-5.338 11.892-11.894a11.816 11.816 0 00-3.447-8.413z" />
                </svg>
                Book a consultation
              </button>
            </div>

            <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">
              Available 24/7
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;