
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  MessageSquare, 
  PenTool, 
  Code, 
  Brain, 
  BookOpen,
  Target,
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Features = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: FileText,
      title: 'AI Text Summarizer',
      description: 'Transform lengthy documents, research papers, and articles into concise, digestible summaries.',
      benefits: [
        'Save hours of reading time',
        'Extract key insights instantly',
        'Support for multiple languages',
        'Customizable summary length'
      ],
      badge: 'Most Popular',
      color: 'blue'
    },
    {
      icon: MessageSquare,
      title: 'Q&A Generator',
      description: 'Create interactive quizzes and question sets from any content to test comprehension.',
      benefits: [
        'Generate multiple choice questions',
        'Create true/false assessments',
        'Short answer questions',
        'Instant grading and feedback'
      ],
      badge: 'New',
      color: 'green'
    },
    {
      icon: PenTool,
      title: 'Essay Writing Assistant',
      description: 'Get intelligent help with writing essays, reports, and academic papers.',
      benefits: [
        'Structure and outline generation',
        'Grammar and style suggestions',
        'Citation assistance',
        'Plagiarism detection'
      ],
      badge: null,
      color: 'purple'
    },
    {
      icon: Code,
      title: 'Code Explanation Tool',
      description: 'Understand complex code snippets with AI-powered explanations and suggestions.',
      benefits: [
        'Line-by-line code analysis',
        'Algorithm explanations',
        'Bug detection and fixes',
        'Code optimization tips'
      ],
      badge: null,
      color: 'orange'
    },
    {
      icon: Brain,
      title: 'Concept Mapping',
      description: 'Visualize relationships between ideas and create interactive knowledge maps.',
      benefits: [
        'Visual learning aids',
        'Connection identification',
        'Mind map generation',
        'Knowledge organization'
      ],
      badge: 'Beta',
      color: 'indigo'
    },
    {
      icon: BookOpen,
      title: 'Study Planner',
      description: 'Create personalized study schedules and learning paths based on your goals.',
      benefits: [
        'Adaptive scheduling',
        'Progress tracking',
        'Deadline management',
        'Goal setting and milestones'
      ],
      badge: null,
      color: 'pink'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      indigo: 'bg-indigo-100 text-indigo-600',
      pink: 'bg-pink-100 text-pink-600',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Powerful AI Learning Features
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover comprehensive AI-powered tools designed to accelerate your learning journey and boost productivity.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => navigate('/playground')}
            >
              Try All Features
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-lg ${getColorClasses(feature.color)}`}>
                          <Icon className="h-8 w-8" />
                        </div>
                        {feature.badge && (
                          <Badge variant="secondary">{feature.badge}</Badge>
                        )}
                      </div>
                      <CardTitle className="text-2xl font-bold">{feature.title}</CardTitle>
                      <CardDescription className="text-lg text-gray-600">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        variant="outline"
                        className="w-full group"
                        onClick={() => navigate('/playground')}
                      >
                        Try {feature.title}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Target className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Accelerate Your Learning?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of students and educators who are already using our AI-powered tools to enhance their learning experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => navigate('/signup')}
              >
                Start Free Trial
                <Zap className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/contact')}
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
