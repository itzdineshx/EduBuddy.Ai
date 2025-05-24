
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
  ArrowRight,
  Mic,
  HelpCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Features = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: FileText,
      title: 'AI Note Generation',
      description: 'Transform audio, video, and documents into comprehensive study notes instantly.',
      benefits: [
        'Upload lectures and get structured notes',
        'YouTube video summarization',
        'PDF and document processing',
        'Multi-format content support'
      ],
      badge: 'Most Popular',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MessageSquare,
      title: 'AI Chat Assistant',
      description: 'Ask questions about your content and get intelligent responses.',
      benefits: [
        'Context-aware responses',
        'Multi-language support',
        'Real-time assistance',
        'Smart content analysis'
      ],
      badge: 'New',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Mic,
      title: 'Podcast Generation',
      description: 'Convert your notes into engaging podcast-style audio content.',
      benefits: [
        'Natural voice synthesis',
        'Multiple voice options',
        'Custom pacing control',
        'Background music options'
      ],
      badge: null,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BookOpen,
      title: 'Smart Flashcards',
      description: 'Generate interactive flashcards from any content for effective memorization.',
      benefits: [
        'Spaced repetition algorithm',
        'Progress tracking',
        'Custom difficulty levels',
        'Export and sharing options'
      ],
      badge: null,
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: HelpCircle,
      title: 'Quiz Generator',
      description: 'Create comprehensive quizzes to test your understanding.',
      benefits: [
        'Multiple choice questions',
        'True/false assessments',
        'Short answer questions',
        'Instant feedback and scoring'
      ],
      badge: 'Beta',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Brain,
      title: 'AI Study Planner',
      description: 'Get personalized study schedules based on your learning goals.',
      benefits: [
        'Adaptive scheduling',
        'Progress monitoring',
        'Deadline management',
        'Performance analytics'
      ],
      badge: null,
      color: 'from-teal-500 to-blue-500'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Powerful AI Learning Features
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover comprehensive AI-powered tools designed to accelerate your learning journey and boost productivity.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8"
              onClick={() => navigate('/playground')}
            >
              Try All Features
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="bg-gray-900/50 border-gray-800 overflow-hidden hover:bg-gray-900/80 transition-all duration-300 hover:border-purple-500/50">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color}`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        {feature.badge && (
                          <Badge className="bg-purple-600 text-white">{feature.badge}</Badge>
                        )}
                      </div>
                      <CardTitle className="text-2xl font-bold text-white">{feature.title}</CardTitle>
                      <CardDescription className="text-lg text-gray-400">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className="w-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white border border-gray-600 group"
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
        <section className="py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Target className="h-16 w-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Accelerate Your Learning?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of students and educators who are already using our AI-powered tools to enhance their learning experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold"
                onClick={() => navigate('/signup')}
              >
                Start Free Trial
                <Zap className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
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
