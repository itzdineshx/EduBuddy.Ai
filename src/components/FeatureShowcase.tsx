
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  FileText, 
  MessageSquare, 
  Mic, 
  BookOpen, 
  HelpCircle,
  Brain,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  Zap,
  Target,
  TrendingUp
} from "lucide-react";

const FeatureShowcase = () => {
  const navigate = useNavigate();
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('features');

  const features = [
    {
      icon: FileText,
      title: "Smart Notes",
      description: "AI-powered note-taking with automatic summarization and intelligent organization.",
      benefits: ["Auto-summarization", "Smart tagging", "Cross-references"],
      color: "from-blue-500 to-cyan-500",
      popularity: "Most Popular",
      users: "12K+ users"
    },
    {
      icon: MessageSquare,
      title: "AI Chat Bot",
      description: "Interactive learning assistant that answers questions and provides detailed explanations.",
      benefits: ["24/7 availability", "Contextual answers", "Multi-language support"],
      color: "from-green-500 to-emerald-500",
      popularity: "Trending",
      users: "8K+ users"
    },
    {
      icon: Mic,
      title: "Podcast Generation",
      description: "Convert your notes into engaging podcasts with natural voice synthesis.",
      benefits: ["Natural voices", "Custom speed", "Offline listening"],
      color: "from-purple-500 to-pink-500",
      popularity: "New",
      users: "5K+ users"
    },
    {
      icon: BookOpen,
      title: "Smart Flashcards",
      description: "Automatically generated flashcards from your study materials with spaced repetition.",
      benefits: ["Auto-generation", "Spaced repetition", "Progress tracking"],
      color: "from-orange-500 to-red-500",
      popularity: "Editor's Choice",
      users: "10K+ users"
    },
    {
      icon: HelpCircle,
      title: "Adaptive Quizzes",
      description: "Personalized quizzes that adapt to your learning pace and knowledge gaps.",
      benefits: ["Adaptive difficulty", "Performance analytics", "Custom categories"],
      color: "from-indigo-500 to-purple-500",
      popularity: "Featured",
      users: "7K+ users"
    },
    {
      icon: Brain,
      title: "AI Learning Paths",
      description: "Personalized learning journeys powered by advanced AI algorithms.",
      benefits: ["Custom pathways", "Goal tracking", "Skill assessment"],
      color: "from-teal-500 to-blue-500",
      popularity: "Premium",
      users: "3K+ users"
    }
  ];

  const stats = [
    { icon: Users, label: "Active Users", value: "15,000+", trend: "+25%" },
    { icon: Clock, label: "Study Hours", value: "100K+", trend: "+40%" },
    { icon: Star, label: "Avg Rating", value: "4.9/5", trend: "+0.2" },
    { icon: TrendingUp, label: "Success Rate", value: "98%", trend: "+5%" }
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6 hover:scale-105 transition-transform cursor-pointer">
            <Brain className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Powerful AI Features</span>
            <Badge className="bg-primary text-white text-xs px-2 py-1">6 Tools</Badge>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Everything You Need to
            <span className="text-gradient block">Excel in Learning</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Discover our comprehensive suite of AI-powered tools designed to transform 
            your learning experience and boost your academic success.
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-accent/50 rounded-2xl p-2 inline-flex">
              <button
                onClick={() => setActiveTab('features')}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === 'features' 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Features
              </button>
              <button
                onClick={() => setActiveTab('stats')}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === 'stats' 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Statistics
              </button>
            </div>
          </div>
        </div>

        {activeTab === 'features' ? (
          <>
            {/* Enhanced Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden border-2 card-hover hover-scale cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <CardHeader className="pb-4">
                    <div className="relative">
                      <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <Badge className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-1">
                        {feature.popularity}
                      </Badge>
                      
                      {hoveredFeature === index && (
                        <div className="absolute top-16 right-0 animate-bounce">
                          <CheckCircle className="h-6 w-6 text-primary" />
                        </div>
                      )}
                    </div>
                    
                    <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{feature.users}</span>
                      </div>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        className="text-primary hover:bg-primary/10"
                        onClick={() => navigate('/playground')}
                      >
                        Try Now
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-8 hover-lift group cursor-pointer border-2 card-hover">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2 group-hover:text-purple-500 transition-colors">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground font-medium mb-2">{stat.label}</p>
                <Badge className="bg-green-100 text-green-700 text-xs px-2 py-1">
                  {stat.trend} this month
                </Badge>
              </Card>
            ))}
          </div>
        )}

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-3xl p-12 border border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 animate-pulse" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Experience the Future of Learning?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of students who are already transforming their education with our AI-powered platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  onClick={() => navigate('/playground')}
                  size="lg"
                  className="btn-primary px-8 py-4 text-lg font-semibold rounded-2xl group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Try All Features Free
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/pricing')}
                  className="px-8 py-4 text-lg font-semibold rounded-2xl border-2 hover:bg-accent group relative overflow-hidden"
                >
                  <Zap className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  View Pricing Plans
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </div>

              <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
