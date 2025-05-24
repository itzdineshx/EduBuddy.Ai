
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Computer Science Student",
    university: "Stanford University",
    content: "Turbolearn.ai has completely transformed how I study. The AI summarization feature helped me digest complex research papers in minutes instead of hours.",
    rating: 5,
    avatar: "SC"
  },
  {
    name: "Marcus Rodriguez",
    role: "PhD Candidate",
    university: "MIT",
    content: "The Q&A generator is incredible for exam prep. I can create practice questions from any textbook chapter and test my understanding instantly.",
    rating: 5,
    avatar: "MR"
  },
  {
    name: "Emily Johnson",
    role: "High School Teacher",
    university: "Lincoln High School",
    content: "I use Turbolearn.ai to create engaging lesson materials and quizzes. My students love the interactive content, and it saves me hours of preparation time.",
    rating: 5,
    avatar: "EJ"
  },
  {
    name: "David Kim",
    role: "Medical Student",
    university: "Harvard Medical School",
    content: "The concept mapping feature helps me visualize complex biological processes. It's like having a personal tutor available 24/7.",
    rating: 5,
    avatar: "DK"
  },
  {
    name: "Lisa Thompson",
    role: "Law Student",
    university: "Yale Law School",
    content: "Summarizing case studies used to take me all night. Now I can analyze multiple cases in the time it took to read one. Game-changer!",
    rating: 5,
    avatar: "LT"
  },
  {
    name: "Ahmed Hassan",
    role: "Engineering Student",
    university: "UC Berkeley",
    content: "The code explanation feature helped me understand algorithms that seemed impossible before. My programming skills have improved dramatically.",
    rating: 5,
    avatar: "AH"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Loved by Students Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of learners who are accelerating their education with AI-powered tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-200" />
                  <p className="text-gray-700 leading-relaxed pl-6">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-blue-600">{testimonial.university}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
