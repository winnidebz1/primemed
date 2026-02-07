
import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import WhyChooseUs from '../components/WhyChooseUs';
import CTA from '../components/CTA';
import { View } from '../App';

interface HomePageProps {
  onNavigate: (view: View, filter?: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero />
      <section className="py-24 bg-white">
        <Categories onCategorySelect={onNavigate} />
      </section>
      <section className="py-24 bg-white">
        <WhyChooseUs />
      </section>
      <section className="py-24 bg-white">
        <CTA />
      </section>
    </>
  );
};

export default HomePage;
