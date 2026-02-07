
import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">Terms of Service</h1>
        <p className="text-slate-500 mb-12">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose prose-slate lg:prose-lg max-w-none text-slate-600 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using the Prime Med website, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Medical Equipment Sales</h2>
            <p>
              Prime Med acts as a supplier of medical equipment. While we strive to provide the highest quality products, all equipment must be used according to manufacturer instructions. We are not liable for misuse of equipment by end-users.
            </p>
            <p>
              Quotes provided via WhatsApp or email are valid for 14 days unless otherwise stated. Prices are subject to change based on availability and logistics.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Online Consultations</h2>
            <p>
              Our online consultations are provided by certified medical professionals. However, online consultations are not a substitute for in-person emergency care. In the event of a life-threatening emergency, please visit the nearest hospital immediately.
            </p>
            <p>
              Prime Med reserves the right to refuse service if a patient's condition is deemed unsuitable for remote assessment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. User Obligations</h2>
            <p>
              You agree to provide accurate, current, and complete information during the booking and purchasing process. You are responsible for maintaining the confidentiality of any account information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Intellectual Property</h2>
            <p>
              The content, features, and functionality of this website are owned by Prime Med and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Limitation of Liability</h2>
            <p>
              In no event shall Prime Med, nor its directors, employees, partners, or agents, be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of the service or products.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of Ghana, without regard to its conflict of law provisions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
