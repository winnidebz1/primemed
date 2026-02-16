
import React from 'react';
import WhyChooseUs from '../components/WhyChooseUs';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-semibold text-slate-800 mb-8 leading-tight">Empowering Healthcare Through Innovation</h1>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Founded with a vision to bridge the gap between advanced medical technology and quality patient care, <strong>Prime Med</strong> has become a trusted partner for healthcare providers nationwide.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We believe that every medical professional deserves access to the finest equipment and every patient deserves expert consultation without barriers. Our mission is to provide the infrastructure for a healthier tomorrow.
              </p>
              <div className="grid grid-cols-2 gap-8 py-8 border-y border-gray-100">
                <div>
                  <h4 className="text-3xl font-bold text-brand-blue mb-1">15+</h4>
                  <p className="text-slate-500 font-medium">Years of Excellence</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-brand-blue mb-1">5k+</h4>
                  <p className="text-slate-500 font-medium">Facilities Served</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <img src="/images/about/team.jpg" alt="Prime Med Team" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white border border-gray-100 p-10 rounded-3xl shadow-2xl hidden md:block max-w-sm">
                <p className="text-2xl font-bold mb-2 text-brand-blue">
                  <span className="text-brand-red">Quality</span> First
                </p>
                <p className="text-slate-500 leading-relaxed mb-6">Our commitment to medical standards is unwavering and globally recognized.</p>
                <div className="bg-brand-blue/5 p-4 rounded-xl border-l-4 border-brand-red">
                  <p className="italic font-bold text-brand-blue text-xl leading-none">"If not Prime its a crime!"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <WhyChooseUs />
      </section>
    </div>
  );
};

export default AboutPage;
