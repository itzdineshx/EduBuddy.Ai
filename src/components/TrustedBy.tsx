
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const TrustedBy = () => {
  const { theme } = useTheme();
  
  const logos = [
    { name: 'Stanford', text: 'Stanford' },
    { name: 'MIT', text: 'MIT' },
    { name: 'Harvard', text: 'Harvard' },
    { name: 'Berkeley', text: 'UC Berkeley' },
    { name: 'Yale', text: 'Yale' },
    { name: 'Princeton', text: 'Princeton' }
  ];

  return (
    <section className={`py-20 transition-all duration-300 ${theme === 'dark' ? 'bg-background border-t border-border/30' : 'bg-accent/30'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-primary uppercase tracking-wide">
              Trusted by students and educators at
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center group">
              <div className={`text-2xl font-bold transition-all duration-300 group-hover:scale-110 ${
                theme === 'dark' 
                  ? 'text-muted-foreground hover:text-primary' 
                  : 'text-gray-400 hover:text-primary'
              }`}>
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
