
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Menu, X, Brain, User, LogOut, Settings } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleSignOut = () => {
    console.log('User signed out');
    navigate('/');
  };

  return (
    <header className="glass-effect sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <Brain className="h-7 w-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">EduBuddy.ai</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-muted-foreground hover:text-primary transition-all duration-200 font-medium hover:scale-105 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            
            {/* User Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-12 w-12 rounded-2xl hover:bg-accent hover-scale">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback className="bg-gradient-to-r from-primary to-purple-600 text-white font-semibold">
                      FF
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 glass-effect border-border/50" align="end" forceMount>
                <DropdownMenuLabel className="font-normal p-4">
                  <div className="flex flex-col space-y-2">
                    <p className="text-base font-semibold leading-none">Free Fire</p>
                    <p className="text-sm leading-none text-muted-foreground">
                      freefire@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/dashboard')} className="p-3 cursor-pointer hover:bg-accent">
                  <User className="mr-3 h-4 w-4" />
                  <span>Dashboard</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/settings')} className="p-3 cursor-pointer hover:bg-accent">
                  <Settings className="mr-3 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut} className="p-3 cursor-pointer hover:bg-destructive/10 text-destructive">
                  <LogOut className="mr-3 h-4 w-4" />
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              onClick={() => navigate('/login')}
              variant="ghost"
              className="px-4 py-2 rounded-2xl font-medium hover-scale text-muted-foreground hover:text-foreground"
            >
              Login
            </Button>

            <Button
              onClick={() => navigate('/signup')}
              className="btn-primary px-6 py-2 rounded-2xl font-semibold hover-scale"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              className="text-muted-foreground hover:text-foreground hover-scale rounded-xl p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 glass-effect">
            <div className="px-2 pt-6 pb-8 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-accent rounded-xl font-medium transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="pt-4 space-y-4 border-t border-border/50">
                <div className="flex items-center px-4 py-3 bg-accent/50 rounded-xl">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback className="bg-gradient-to-r from-primary to-purple-600 text-white text-sm font-semibold">
                      FF
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Free Fire</p>
                    <p className="text-xs text-muted-foreground">freefire@example.com</p>
                  </div>
                </div>
                
                <Button
                  variant="ghost"
                  onClick={() => {
                    navigate('/dashboard');
                    setIsMenuOpen(false);
                  }}
                  className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-accent rounded-xl"
                >
                  <User className="mr-3 h-4 w-4" />
                  Dashboard
                </Button>
                
                <Button
                  variant="ghost"
                  onClick={() => {
                    navigate('/settings');
                    setIsMenuOpen(false);
                  }}
                  className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-accent rounded-xl"
                >
                  <Settings className="mr-3 h-4 w-4" />
                  Settings
                </Button>
                
                <Button
                  variant="ghost"
                  onClick={() => {
                    navigate('/login');
                    setIsMenuOpen(false);
                  }}
                  className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-accent rounded-xl"
                >
                  <User className="mr-3 h-4 w-4" />
                  Login
                </Button>
                
                <Button
                  variant="ghost"
                  onClick={() => {
                    handleSignOut();
                    setIsMenuOpen(false);
                  }}
                  className="w-full justify-start text-destructive hover:bg-destructive/10 rounded-xl"
                >
                  <LogOut className="mr-3 h-4 w-4" />
                  Sign out
                </Button>
                
                <Button
                  onClick={() => {
                    navigate('/signup');
                    setIsMenuOpen(false);
                  }}
                  className="w-full btn-primary rounded-xl font-semibold"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
