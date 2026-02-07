
import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">Privacy Policy</h1>
        <p className="text-slate-500 mb-12">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose prose-slate lg:prose-lg max-w-none text-slate-600 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Introduction</h2>
            <p>
              Welcome to Prime Med. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Information We Collect</h2>
            <p>
              We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on our website or otherwise contacting us.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Name and Contact Data:</strong> We collect your first and last name, email address, postal address, phone number, and other similar contact data.</li>
              <li><strong>Medical Information:</strong> In the context of medical consultations, we may collect health-related information necessary for professional assessment.</li>
              <li><strong>Payment Data:</strong> We collect data necessary to process your payment if you make purchases.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. How We Use Your Information</h2>
            <p>
              We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To facilitate account creation and logon process.</li>
              <li>To send administrative information to you.</li>
              <li>To fulfill and manage your orders.</li>
              <li>To deliver medical consultation services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Sharing Your Information</h2>
            <p>
              We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may share data with third-party vendors, service providers, contractors or agents who perform services for us or on our behalf and require access to such information to do that work.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Contact Us</h2>
            <p>
              If you have questions or comments about this policy, you may email us at contact@primemedsolutions.com or by post to our office in Ghana.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
