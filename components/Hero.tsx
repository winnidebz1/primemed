import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center overflow-hidden mt-[90px]">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2000&auto=format&fit=crop"
          alt="African Medical Professionals in Modern Hospital"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent/10"></div>
      </div>

      {/* Abstract Shapes */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-20 w-[300px] h-[300px] bg-brand-blue/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-2xl text-slate-900">
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

          <div className="mt-16 flex items-center gap-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img
                  key={i}
                  src={`https://picsum.photos/seed/${i + 10}/100`}
                  className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                  alt="Doctor"
                />
              ))}
            </div>
            <div className="text-slate-700">
              <p className="font-bold text-lg">Verified Experts</p>
              <p className="text-sm opacity-80">Certified Professionals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
