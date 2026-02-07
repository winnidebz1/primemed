
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ConsultationPage from './pages/ConsultationPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import { CATEGORIES } from './constants';

export type View = 'home' | 'products' | 'consultation' | 'about' | 'contact' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [productFilter, setProductFilter] = useState<string>(CATEGORIES[0].name);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as View;
      if (['home', 'products', 'consultation', 'about', 'contact', 'privacy', 'terms'].includes(hash)) {
        setCurrentView(hash);
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (view: View, filter: string = CATEGORIES[0].name) => {
    setProductFilter(filter);
    window.location.hash = view;
  };

  const renderView = () => {
    switch (currentView) {
      case 'home': return <HomePage onNavigate={navigate} />;
      case 'products': return <ProductsPage activeCategory={productFilter} setActiveCategory={setProductFilter} />;
      case 'consultation': return <ConsultationPage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      case 'privacy': return <PrivacyPage />;
      case 'terms': return <TermsPage />;
      default: return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentView={currentView} onNavigate={navigate} />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer onNavigate={navigate} />
      <WhatsAppButton />
    </div>
  );
};

export default App;
