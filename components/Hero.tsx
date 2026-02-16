import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center overflow-hidden mt-[90px]">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Hero.jpeg"
          alt="African Medical Professionals in Modern Hospital"
          className="w-full h-full object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent/10"></div>
      </div>

      {/* Abstract Shapes */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-20 w-[300px] h-[300px] bg-brand-blue/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-24 lg:pt-64 lg:pb-32">
        <div className="max-w-2xl text-slate-900">
          <div className="mb-8 overflow-hidden bg-brand-red/10 rounded-full border border-brand-red/20 py-2 relative">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-4">
              <span className="text-brand-red font-bold text-sm uppercase tracking-[0.2em]">If not Prime its a crime!</span>
              <span className="w-2 h-2 bg-brand-red rounded-full"></span>
              <span className="text-brand-red font-bold text-sm uppercase tracking-[0.2em]">If not Prime its a crime!</span>
              <span className="w-2 h-2 bg-brand-red rounded-full"></span>
              <span className="text-brand-red font-bold text-sm uppercase tracking-[0.2em]">If not Prime its a crime!</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            Reliable Medical <br />
            <span className="text-brand-blue">Equipment</span> & <span className="text-brand-red">Prime</span> <br />
            Consultation
          </h1>

          <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-lg">
            Providing high-quality healthcare solutions, advanced diagnostic tools, and expert medical consultation through <strong>Prime Med</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="#consultation"
              className="px-10 py-4 bg-brand-red hover:bg-red-700 text-white rounded-xl font-bold text-lg transition-all shadow-xl shadow-red-900/20 flex items-center justify-center gap-2"
            >
              Book Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#products"
              className="px-10 py-4 bg-white border border-slate-200 hover:bg-slate-50 text-brand-blue rounded-xl font-bold text-lg transition-all flex items-center justify-center shadow-lg"
            >
              Explore Equipment
            </a>
          </div>

          <div className="mt-12 lg:mt-14 mb-8 flex items-center gap-8 bg-black/5 p-4 rounded-2xl border border-black/5 w-fit">
            <div className="flex -space-x-3">
              <img
                src="/images/doctors/doctor1.jpg"
                className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover"
                alt="Doctor"
              />
              <img
                src="/images/doctors/doctor2.jpg"
                className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover"
                alt="Doctor"
              />
              <img
                src="/images/doctors/doctor3.jpg"
                className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover"
                alt="Doctor"
              />
              <img
                src="/images/doctors/doctor4.jpg"
                className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover"
                alt="Doctor"
              />
            </div>
            <div className="text-slate-800">
              <p className="font-bold text-lg leading-none">Verified Experts</p>
              <p className="text-sm opacity-70">Certified Professionals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
