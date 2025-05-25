
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Play, Sparkles, Brain, BookOpen, Zap, Users, TrendingUp, Award } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useState, useEffect } from "react";

const Hero = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const phrases = ['Smart Learning', 'AI-Powered Education', 'Personalized Study', 'Academic Success'];
  
  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    if (typedText.length < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setTypedText(currentPhrase.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTypedText('');
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [typedText, currentIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced themed background with moving gradients */}
      <div className={`absolute inset-0 ${theme === 'dark' ? 'hero-bg-dark' : 'hero-bg-light'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 animate-pulse" />
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-grid-slate-100 [mask-image:linear-gradient(0deg,rgba(15,23,42,0.8),rgba(15,23,42,0.4))]' : 'bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]'}`} />
      </div>
      
      {/* Enhanced floating elements with more variety */}
      <div className="absolute top-20 left-10 animate-bounce">
        <div className={`w-16 h-16 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl flex items-center justify-center ${theme === 'dark' ? 'shadow-2xl shadow-purple-500/25' : 'shadow-lg'} hover:scale-110 transition-transform cursor-pointer`}>
          <Brain className="h-8 w-8 text-white" />
        </div>
      </div>
      <div className="absolute top-40 right-20 animate-pulse">
        <div className={`w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-xl flex items-center justify-center ${theme === 'dark' ? 'shadow-2xl shadow-pink-500/25' : 'shadow-lg'} hover:scale-110 transition-transform cursor-pointer`}>
          <BookOpen className="h-6 w-6 text-white" />
        </div>
      </div>
      <div className="absolute bottom-40 left-20 animate-bounce delay-300">
        <div className={`w-14 h-14 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center ${theme === 'dark' ? 'shadow-2xl shadow-blue-500/25' : 'shadow-lg'} hover:scale-110 transition-transform cursor-pointer`}>
          <Zap className="h-7 w-7 text-white" />
        </div>
      </div>
      <div className="absolute top-60 right-40 animate-bounce delay-500">
        <div className={`w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-400 rounded-xl flex items-center justify-center ${theme === 'dark' ? 'shadow-2xl shadow-green-500/25' : 'shadow-lg'} hover:scale-110 transition-transform cursor-pointer`}>
          <Users className="h-5 w-5 text-white" />
        </div>
      </div>
      <div className="absolute bottom-60 right-10 animate-pulse delay-700">
        <div className={`w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-xl flex items-center justify-center ${theme === 'dark' ? 'shadow-2xl shadow-orange-500/25' : 'shadow-lg'} hover:scale-110 transition-transform cursor-pointer`}>
          <Award className="h-6 w-6 text-white" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Enhanced badge with animation */}
        <div className={`inline-flex items-center gap-2 ${theme === 'dark' ? 'bg-primary/20 border-primary/40' : 'bg-primary/10 border-primary/20'} border rounded-full px-6 py-3 mb-8 hover-glow animate-fade-in hover:scale-105 transition-all cursor-pointer`}>
          <Sparkles className="h-4 w-4 text-primary animate-spin" />
          <span className="text-sm font-medium text-primary">🚀 AI-Powered Learning Platform</span>
          <Badge className="bg-primary text-white text-xs px-2 py-1">NEW</Badge>
        </div>

        {/* Enhanced main heading with typing effect */}
        <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in">
          Your 
          <br />
          <span className="text-gradient inline-block min-h-[1.2em]">
            {typedText}
            <span className="animate-pulse">|</span>
          </span>
          <br />
          Companion
        </h1>

        {/* Enhanced subheading */}
        <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-300">
          Transform your learning journey with EduBuddy.ai's revolutionary AI-powered tools. 
          <span className="text-primary font-semibold"> Upload documents, generate podcasts, create flashcards, and chat with your personal AI tutor.</span>
        </p>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in delay-500">
          <Button
            onClick={() => navigate('/playground')}
            size="lg"
            className="btn-primary px-8 py-4 text-lg font-semibold rounded-2xl group relative overflow-hidden shadow-xl hover:shadow-2xl"
          >
            <span className="relative z-10 flex items-center">
              Start Learning Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate('/features')}
            className={`px-8 py-4 text-lg font-semibold rounded-2xl border-2 group relative overflow-hidden ${theme === 'dark' ? 'hover:bg-accent hover:border-primary/50' : 'hover:bg-accent'}`}
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Watch Demo
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </div>

        {/* Enhanced stats with better animations and interactions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in delay-700">
          <div className={`text-center p-6 glass-effect rounded-2xl hover-lift group cursor-pointer ${theme === 'dark' ? 'bg-card/60 border-border/30' : ''}`}>
            <div className="flex items-center justify-center mb-3">
              <Users className="h-6 w-6 text-primary mr-2 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-primary group-hover:text-purple-500 transition-colors">15K+</div>
            </div>
            <div className="text-muted-foreground font-medium">Active Learners</div>
            <div className="text-xs text-muted-foreground mt-1">Growing daily</div>
          </div>
          <div className={`text-center p-6 glass-effect rounded-2xl hover-lift group cursor-pointer ${theme === 'dark' ? 'bg-card/60 border-border/30' : ''}`}>
            <div className="flex items-center justify-center mb-3">
              <BookOpen className="h-6 w-6 text-primary mr-2 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-primary group-hover:text-blue-500 transition-colors">100K+</div>
            </div>
            <div className="text-muted-foreground font-medium">Study Materials</div>
            <div className="text-xs text-muted-foreground mt-1">AI-generated</div>
          </div>
          <div className={`text-center p-6 glass-effect rounded-2xl hover-lift group cursor-pointer ${theme === 'dark' ? 'bg-card/60 border-border/30' : ''}`}>
            <div className="flex items-center justify-center mb-3">
              <TrendingUp className="h-6 w-6 text-primary mr-2 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-primary group-hover:text-green-500 transition-colors">98%</div>
            </div>
            <div className="text-muted-foreground font-medium">Success Rate</div>
            <div className="text-xs text-muted-foreground mt-1">Student satisfaction</div>
          </div>
          <div className={`text-center p-6 glass-effect rounded-2xl hover-lift group cursor-pointer ${theme === 'dark' ? 'bg-card/60 border-border/30' : ''}`}>
            <div className="flex items-center justify-center mb-3">
              <Award className="h-6 w-6 text-primary mr-2 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-primary group-hover:text-orange-500 transition-colors">4.9</div>
            </div>
            <div className="text-muted-foreground font-medium">App Rating</div>
            <div className="text-xs text-muted-foreground mt-1">⭐⭐⭐⭐⭐</div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-col items-center animate-fade-in delay-1000">
          <p className="text-sm text-muted-foreground mb-4">Trusted by students from top universities</p>
          <div className="flex items-center space-x-8 opacity-60 hover:opacity-100 transition-opacity">
            <div className="text-2xl font-bold text-primary">MIT</div>
            <div className="text-2xl font-bold text-primary">Harvard</div>
            <div className="text-2xl font-bold text-primary">Stanford</div>
            <div className="text-2xl font-bold text-primary">Oxford</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
