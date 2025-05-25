
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { 
  FileText, 
  MessageSquare, 
  Mic, 
  BookOpen, 
  HelpCircle,
  Brain,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const FeatureShowcase = () => {
  const navigate = useNavigate();
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: FileText,
      title: "Smart Notes",
      description: "AI-powered note-taking with automatic summarization and intelligent organization.",
      benefits: ["Auto-summarization", "Smart tagging", "Cross-references"]
    },
    {
      icon: MessageSquare,
      title: "AI Chat Bot",
      description: "Interactive learning assistant that answers questions and provides detailed explanations.",
      benefits: ["24/7 availability", "Contextual answers", "Multi-language support"]
    },
    {
      icon: Mic,
      title: "Podcast Generation",
      description: "Convert your notes into engaging podcasts with natural voice synthesis.",
      benefits: ["Natural voices", "Custom speed", "Offline listening"]
    },
    {
      icon: BookOpen,
      title: "Smart Flashcards",
      description: "Automatically generated flashcards from your study materials with spaced repetition.",
      benefits: ["Auto-generation", "Spaced repetition", "Progress tracking"]
    },
    {
      icon: HelpCircle,
      title: "Adaptive Quizzes",
      description: "Personalized quizzes that adapt to your learning pace and knowledge gaps.",
      benefits: ["Adaptive difficulty", "Performance analytics", "Custom categories"]
    },
    {
      icon: Brain,
      title: "AI Learning Paths",
      description: "Personalized learning journeys powered by advanced AI algorithms.",
      benefits: ["Custom pathways", "Goal tracking", "Skill assessment"]
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Brain className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Powerful Features</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Everything You Need to
            <span className="text-gradient block">Excel in Learning</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of AI-powered tools designed to transform 
            your learning experience and boost your academic success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-2 card-hover hover-scale cursor-pointer"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <CardHeader className="pb-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {hoveredFeature === index && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center animate-bounce">
                      <CheckCircle className="h-4 w-4 text-white" />
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
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-3xl p-12 border border-primary/20">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Experience the Future of Learning?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already transforming their education with our AI-powered platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/playground')}
                size="lg"
                className="btn-primary px-8 py-4 text-lg font-semibold rounded-2xl group"
              >
                Try All Features Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/pricing')}
                className="px-8 py-4 text-lg font-semibold rounded-2xl border-2 hover:bg-accent"
              >
                View Pricing Plans
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
