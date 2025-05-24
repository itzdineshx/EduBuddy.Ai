
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Brain, 
  FileText, 
  MessageSquare, 
  Code, 
  PenTool,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    icon: FileText,
    title: 'Text Summarizer',
    description: 'Transform long articles, papers, and documents into concise summaries.',
    badge: 'Popular',
    color: 'blue',
    demo: true
  },
  {
    icon: MessageSquare,
    title: 'Q&A Generator',
    description: 'Create interactive questions and answers from any content.',
    badge: 'New',
    color: 'green',
    demo: true
  },
  {
    icon: PenTool,
    title: 'Essay Assistant',
    description: 'Get help writing essays, reports, and academic papers.',
    badge: null,
    color: 'purple',
    demo: true
  },
  {
    icon: Code,
    title: 'Code Explainer',
    description: 'Understand complex code with AI-powered explanations.',
    badge: null,
    color: 'orange',
    demo: true
  },
  {
    icon: Brain,
    title: 'Concept Mapper',
    description: 'Visualize relationships between ideas and concepts.',
    badge: 'Beta',
    color: 'indigo',
    demo: true
  },
  {
    icon: BookOpen,
    title: 'Study Planner',
    description: 'Create personalized study schedules and learning paths.',
    badge: null,
    color: 'pink',
    demo: true
  }
];

const FeatureShowcase = () => {
  const navigate = useNavigate();
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 hover:bg-blue-200',
      green: 'bg-green-100 text-green-600 hover:bg-green-200',
      purple: 'bg-purple-100 text-purple-600 hover:bg-purple-200',
      orange: 'bg-orange-100 text-orange-600 hover:bg-orange-200',
      indigo: 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200',
      pink: 'bg-pink-100 text-pink-600 hover:bg-pink-200',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful AI Learning Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover a comprehensive suite of AI-powered features designed to enhance your learning experience and boost productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer ${
                  hoveredFeature === index ? 'shadow-xl -translate-y-1' : ''
                }`}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${getColorClasses(feature.color)}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    {feature.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {feature.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigate('/playground')}
                      className="group"
                    >
                      Try Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    {feature.demo && (
                      <span className="text-sm text-gray-500 flex items-center">
                        <Sparkles className="h-4 w-4 mr-1" />
                        Live Demo
                      </span>
                    )}
                  </div>
                </CardContent>
                
                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-50 to-transparent opacity-0 transition-opacity duration-300 ${
                  hoveredFeature === index ? 'opacity-100' : ''
                }`} />
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            onClick={() => navigate('/features')}
          >
            Explore All Features
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
