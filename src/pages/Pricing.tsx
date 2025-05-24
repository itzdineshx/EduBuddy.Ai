
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started with AI learning',
      icon: Star,
      features: [
        '10 AI generations per month',
        'Basic summarization',
        'Simple Q&A generation',
        'Community support',
        'Web access only'
      ],
      limitations: [
        'Limited to 500 words per request',
        'No priority support',
        'No advanced features'
      ],
      buttonText: 'Get Started Free',
      buttonVariant: 'outline' as const,
      popular: false
    },
    {
      name: 'Pro',
      price: '$19',
      period: 'per month',
      description: 'Best for students and individual learners',
      icon: Zap,
      features: [
        '500 AI generations per month',
        'Advanced summarization',
        'Interactive Q&A generation',
        'Essay writing assistance',
        'Code explanation',
        'Priority support',
        'Mobile app access',
        'Export to multiple formats'
      ],
      limitations: [],
      buttonText: 'Start Pro Trial',
      buttonVariant: 'default' as const,
      popular: true
    },
    {
      name: 'Business',
      price: '$49',
      period: 'per month',
      description: 'Ideal for educators and teams',
      icon: Crown,
      features: [
        'Unlimited AI generations',
        'All Pro features',
        'Concept mapping',
        'Study planning',
        'Team collaboration',
        'Custom integrations',
        'Advanced analytics',
        'Dedicated support',
        'White-label options'
      ],
      limitations: [],
      buttonText: 'Contact Sales',
      buttonVariant: 'outline' as const,
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'What happens when I exceed my monthly limit?',
      answer: 'You can upgrade your plan anytime or wait for the next billing cycle. We\'ll notify you when you\'re approaching your limit.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. You\'ll continue to have access to Pro features until the end of your billing period.'
    },
    {
      question: 'Do you offer student discounts?',
      answer: 'Yes! We offer a 50% discount for verified students. Contact our support team with your student ID for more information.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use enterprise-grade security measures and never store your personal content longer than necessary for processing.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Choose the plan that fits your learning needs. Start free and upgrade when you're ready.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => {
                const Icon = plan.icon;
                return (
                  <Card
                    key={index}
                    className={`relative overflow-hidden ${
                      plan.popular 
                        ? 'border-blue-500 shadow-xl scale-105' 
                        : 'border-gray-200 hover:shadow-lg'
                    } transition-all duration-300`}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center py-2 text-sm font-medium">
                        Most Popular
                      </div>
                    )}
                    
                    <CardHeader className={plan.popular ? 'pt-12' : ''}>
                      <div className="flex items-center justify-between mb-4">
                        <Icon className={`h-8 w-8 ${plan.popular ? 'text-blue-600' : 'text-gray-600'}`} />
                        {plan.popular && <Badge className="bg-blue-600">Recommended</Badge>}
                      </div>
                      <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-600 ml-2">/{plan.period}</span>
                      </div>
                      <p className="text-gray-600 mt-2">{plan.description}</p>
                    </CardHeader>
                    
                    <CardContent>
                      <Button
                        className={`w-full mb-6 ${
                          plan.buttonVariant === 'default' 
                            ? 'bg-blue-600 hover:bg-blue-700' 
                            : ''
                        }`}
                        variant={plan.buttonVariant}
                        onClick={() => plan.name === 'Business' ? navigate('/contact') : navigate('/signup')}
                      >
                        {plan.buttonText}
                      </Button>
                      
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Compare All Features
            </h2>
            
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Feature</th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Free</th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Pro</th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Business</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Monthly AI Generations</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-700">10</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-700">500</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-700">Unlimited</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Text Summarization</td>
                      <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Q&A Generation</td>
                      <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Essay Writing Assistant</td>
                      <td className="px-6 py-4 text-center text-gray-400">×</td>
                      <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Code Explanation</td>
                      <td className="px-6 py-4 text-center text-gray-400">×</td>
                      <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Team Collaboration</td>
                      <td className="px-6 py-4 text-center text-gray-400">×</td>
                      <td className="px-6 py-4 text-center text-gray-400">×</td>
                      <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
