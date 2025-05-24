
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeatureShowcase from '@/components/FeatureShowcase';
import Testimonials from '@/components/Testimonials';
import TrustedBy from '@/components/TrustedBy';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustedBy />
        <FeatureShowcase />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
