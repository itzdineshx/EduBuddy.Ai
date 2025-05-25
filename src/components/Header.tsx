
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
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
import { Badge } from '@/components/ui/badge';
import { Menu, X, Brain, User, LogOut, Settings, Sparkles, BookOpen, Zap } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Features', href: '/features', icon: Sparkles },
    { name: 'Pricing', href: '/pricing', icon: Zap },
    { name: 'About', href: '/about', icon: BookOpen },
    { name: 'Contact', href: '/contact', icon: User },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = () => {
    console.log('User signed out');
    navigate('/');
  };

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <header className={`glass-effect sticky top-0 z-50 border-b transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-xl bg-background/95 shadow-lg' : 'backdrop-blur-sm bg-background/80'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with enhanced animation */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-primary/25">
                <Brain className="h-7 w-7 text-white group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">EduBuddy.ai</span>
              <span className="text-xs text-muted-foreground group-hover:text-primary/70 transition-colors">Smart Learning Platform</span>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 relative group flex items-center space-x-2 ${
                  isActivePath(link.href) 
                    ? 'bg-primary/10 text-primary shadow-sm' 
                    : 'text-muted-foreground hover:text-primary hover:bg-accent/50'
                }`}
              >
                <link.icon className="h-4 w-4" />
                <span>{link.name}</span>
                {isActivePath(link.href) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Enhanced Right side controls */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            
            {/* User Profile Dropdown with enhanced styling */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-12 w-12 rounded-2xl hover:bg-accent hover-scale group">
                  <Avatar className="h-10 w-10 border-2 border-primary/20 group-hover:border-primary/40 transition-colors">
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback className="bg-gradient-to-r from-primary to-purple-600 text-white font-semibold">
                      FF
                    </AvatarFallback>
                  </Avatar>
                  <Badge className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-1.5 py-0.5 min-w-0 h-5">
                    Pro
                  </Badge>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 glass-effect border-border/50 shadow-xl" align="end" forceMount>
                <DropdownMenuLabel className="font-normal p-4">
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder.svg" alt="User" />
                        <AvatarFallback className="bg-gradient-to-r from-primary to-purple-600 text-white font-semibold">
                          FF
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-base font-semibold leading-none">Free Fire</p>
                        <p className="text-sm leading-none text-muted-foreground mt-1">
                          freefire@example.com
                        </p>
                        <Badge className="mt-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs">
                          Pro Member
                        </Badge>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border/50">
                      <div className="text-center">
                        <p className="text-lg font-bold text-primary">24</p>
                        <p className="text-xs text-muted-foreground">Notes</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-primary">48h</p>
                        <p className="text-xs text-muted-foreground">Study Time</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-primary">7</p>
                        <p className="text-xs text-muted-foreground">Streak</p>
                      </div>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/dashboard')} className="p-3 cursor-pointer hover:bg-accent group">
                  <User className="mr-3 h-4 w-4 group-hover:text-primary transition-colors" />
                  <span>Dashboard</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/settings')} className="p-3 cursor-pointer hover:bg-accent group">
                  <Settings className="mr-3 h-4 w-4 group-hover:text-primary transition-colors" />
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
              className="px-4 py-2 rounded-2xl font-medium hover-scale text-muted-foreground hover:text-foreground hover:bg-accent/50"
            >
              Login
            </Button>

            <Button
              onClick={() => navigate('/signup')}
              className="btn-primary px-6 py-2 rounded-2xl font-semibold hover-scale relative overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              className="text-muted-foreground hover:text-foreground hover-scale rounded-xl p-2 hover:bg-accent/50 transition-all"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 glass-effect animate-fade-in">
            <div className="px-2 pt-6 pb-8 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all group ${
                    isActivePath(link.href)
                      ? 'bg-primary/10 text-primary shadow-sm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <link.icon className="h-5 w-5" />
                  <span>{link.name}</span>
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
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">Free Fire</p>
                    <p className="text-xs text-muted-foreground">freefire@example.com</p>
                  </div>
                  <Badge className="bg-primary text-white text-xs">Pro</Badge>
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
