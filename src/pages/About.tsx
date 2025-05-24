
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, Users, Lightbulb, Award, Linkedin, Twitter } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '2023',
      title: 'Company Founded',
      description: 'Started with a vision to democratize AI-powered learning tools for students worldwide.'
    },
    {
      year: '2023',
      title: 'First AI Model Integration',
      description: 'Successfully integrated our first AI summarization tool, helping 1,000+ early adopters.'
    },
    {
      year: '2024',
      title: 'Platform Expansion',
      description: 'Launched comprehensive suite of AI learning tools including Q&A generation and essay assistance.'
    },
    {
      year: '2024',
      title: 'Gemini 2.0 Integration',
      description: 'Upgraded to Google\'s latest Gemini 2.0-Flash model for enhanced performance and accuracy.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Co-Founder',
      bio: 'Former educator with 10+ years experience in EdTech. PhD in Educational Technology from Stanford.',
      initials: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Co-Founder',
      bio: 'AI researcher and engineer with expertise in NLP. Previously at Google AI and OpenAI.',
      initials: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      bio: 'Product strategist focused on user experience. Former PM at Khan Academy and Coursera.',
      initials: 'ER'
    },
    {
      name: 'David Kim',
      role: 'Lead AI Engineer',
      bio: 'Machine learning expert specializing in educational AI applications. MIT Computer Science graduate.',
      initials: 'DK'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We believe every learner deserves access to powerful AI tools that can accelerate their educational journey.'
    },
    {
      icon: Users,
      title: 'Student-Centric',
      description: 'Everything we build is designed with students and educators at the center, ensuring real-world impact.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with AI to create breakthrough learning experiences.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in AI accuracy, user experience, and educational effectiveness.'
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
              Revolutionizing Learning with AI
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're on a mission to make advanced AI learning tools accessible to students and educators worldwide.
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Turbolearn.ai was born from a simple observation: while AI technology was advancing rapidly, 
              students and educators were struggling to access and utilize these powerful tools effectively. 
              Our founders, coming from backgrounds in education and AI research, saw an opportunity to bridge 
              this gap and democratize AI-powered learning.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, we serve thousands of students and educators worldwide, providing them with cutting-edge 
              AI tools that enhance comprehension, accelerate learning, and improve educational outcomes. 
              Our platform continues to evolve, always with our users' success at the forefront.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Journey
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {timeline.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Meet Our Team
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                      {member.initials}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                    <div className="flex justify-center space-x-3">
                      <Button variant="ghost" size="sm">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Twitter className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Learning Revolution
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Ready to experience the future of AI-powered learning? Start your journey today.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Get Started Free
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
