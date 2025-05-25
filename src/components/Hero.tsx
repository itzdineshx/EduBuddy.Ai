
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Play, Sparkles, Brain, BookOpen, Zap } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const Hero = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic themed background */}
      <div className={`absolute inset-0 ${theme === 'dark' ? 'hero-bg-dark' : 'hero-bg-light'}`}>
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-grid-slate-100 [mask-image:linear-gradient(0deg,rgba(15,23,42,0.8),rgba(15,23,42,0.4))]' : 'bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]'}`} />
      </div>
      
      {/* Floating elements with theme-aware styling */}
      <div className="absolute top-20 left-10 animate-bounce">
        <div className={`w-16 h-16 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl flex items-center justify-center ${theme === 'dark' ? 'shadow-2xl shadow-purple-500/25' : 'shadow-lg'}`}>
          <Brain className="h-8 w-8 text-white" />
        </div>
      </div>
      <div className="absolute top-40 right-20 animate-pulse">
        <div className={`w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-xl flex items-center justify-center ${theme === 'dark' ? 'shadow-2xl shadow-pink-500/25' : 'shadow-lg'}`}>
          <BookOpen className="h-6 w-6 text-white" />
        </div>
      </div>
      <div className="absolute bottom-40 left-20 animate-bounce delay-300">
        <div className={`w-14 h-14 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center ${theme === 'dark' ? 'shadow-2xl shadow-blue-500/25' : 'shadow-lg'}`}>
          <Zap className="h-7 w-7 text-white" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge with theme-aware styling */}
        <div className={`inline-flex items-center gap-2 ${theme === 'dark' ? 'bg-primary/20 border-primary/40' : 'bg-primary/10 border-primary/20'} border rounded-full px-4 py-2 mb-8 hover-glow`}>
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">AI-Powered Learning Platform</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
          Transform Your Learning
          <br />
          <span className="text-gradient">with AI Magic</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          Upload documents, generate podcasts, create flashcards, and chat with AI. 
          Experience the future of personalized education.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button
            onClick={() => navigate('/playground')}
            size="lg"
            className="btn-primary px-8 py-4 text-lg font-semibold rounded-2xl group"
          >
            Start Learning Free
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate('/features')}
            className={`px-8 py-4 text-lg font-semibold rounded-2xl border-2 group ${theme === 'dark' ? 'hover:bg-accent hover:border-primary/50' : 'hover:bg-accent'}`}
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Watch Demo
          </Button>
        </div>

        {/* Stats with enhanced dark mode styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className={`text-center p-6 glass-effect rounded-2xl hover-lift ${theme === 'dark' ? 'bg-card/60 border-border/30' : ''}`}>
            <div className="text-3xl font-bold text-primary mb-2">10K+</div>
            <div className="text-muted-foreground">Students Learning</div>
          </div>
          <div className={`text-center p-6 glass-effect rounded-2xl hover-lift ${theme === 'dark' ? 'bg-card/60 border-border/30' : ''}`}>
            <div className="text-3xl font-bold text-primary mb-2">50K+</div>
            <div className="text-muted-foreground">Documents Processed</div>
          </div>
          <div className={`text-center p-6 glass-effect rounded-2xl hover-lift ${theme === 'dark' ? 'bg-card/60 border-border/30' : ''}`}>
            <div className="text-3xl font-bold text-primary mb-2">99%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
