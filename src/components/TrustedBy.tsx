
import React from 'react';

const TrustedBy = () => {
  const logos = [
    { name: 'Stanford', text: 'Stanford' },
    { name: 'MIT', text: 'MIT' },
    { name: 'Harvard', text: 'Harvard' },
    { name: 'Berkeley', text: 'UC Berkeley' },
    { name: 'Yale', text: 'Yale' },
    { name: 'Princeton', text: 'Princeton' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            Trusted by students and educators at
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <div className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors duration-300">
                {logo.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
