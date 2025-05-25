
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-12 w-12 rounded-2xl hover:bg-accent hover:text-accent-foreground hover-scale relative overflow-hidden group"
    >
      <div className="relative flex items-center justify-center">
        {theme === 'light' ? (
          <Moon className="h-5 w-5 transition-all duration-300 group-hover:scale-110" />
        ) : (
          <Sun className="h-5 w-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-180" />
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Button>
  );
};

export default ThemeToggle;
