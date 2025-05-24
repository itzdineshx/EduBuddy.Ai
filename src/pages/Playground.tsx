
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AIPlayground from '@/components/AIPlayground';

const Playground = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-12">
        <AIPlayground />
      </main>
      <Footer />
    </div>
  );
};

export default Playground;
