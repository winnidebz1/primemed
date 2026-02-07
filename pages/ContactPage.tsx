
import React, { useState } from 'react';
import { WHATSAPP_NUMBER } from '../constants';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Hello Prime Med,
I have an inquiry from the website:

*Full Name:* ${formData.name}
*Email:* ${formData.email}
*Subject:* ${formData.subject}
*Message:* ${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="pt-24 bg-white">
      <div className="bg-brand-lightBlue py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-semibold text-slate-800 mb-6">Get in Touch</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Have questions for <strong>Prime Med</strong> about our equipment or services? Our team is here to support you 24/7.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-brand-lightBlue text-brand-blue rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Phone Support</h3>
            <p className="text-slate-500 mb-4">Direct lines for urgent inquiries.</p>
            <p className="text-brand-blue font-bold text-lg">0534045458</p>
          </div>
          
          <div className="bg-brand-blue p-10 rounded-[2rem] shadow-xl text-white flex flex-col items-center text-center transform lg:scale-105 z-10">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.67-1.611-.918-2.208-.242-.588-.487-.508-.67-.517-.173-.009-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.435 5.626 1.435h.004c6.551 0 11.889-5.338 11.892-11.894a11.816 11.816 0 00-3.447-8.413z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-2">WhatsApp Chat</h3>
            <p className="text-slate-100 mb-6 opacity-90">Fastest way to get price quotes.</p>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              className="bg-white text-brand-blue px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-slate-50 transition-colors"
            >
              {WHATSAPP_NUMBER}
            </a>
          </div>

          <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-brand-lightBlue text-brand-blue rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Email Inquiry</h3>
            <p className="text-slate-500 mb-4">Official requests and documents.</p>
            <p className="text-brand-blue font-bold text-lg">contact@primemed.com</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-24">
        <div className="bg-slate-50 p-12 rounded-[3rem] border border-gray-100 shadow-sm">
          <h2 className="text-3xl font-semibold text-slate-800 mb-8 text-center">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand-blue outline-none" 
                placeholder="John Doe" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand-blue outline-none" 
                placeholder="john@example.com" 
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">Subject</label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand-blue outline-none" 
                placeholder="How can we help?" 
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">Your Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4} 
                className="w-full p-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand-blue outline-none" 
                placeholder="Tell us more details..."
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="w-full py-5 bg-brand-blue text-white font-bold rounded-2xl text-lg hover:bg-slate-800 transition-all shadow-xl shadow-brand-blue/20">
                Send Message to WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
