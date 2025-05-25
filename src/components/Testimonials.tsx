
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Computer Science Student",
    university: "Stanford University",
    content: "EduBuddy.ai has completely transformed how I study. The AI summarization feature helped me digest complex research papers in minutes instead of hours.",
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
    content: "I use EduBuddy.ai to create engaging lesson materials and quizzes. My students love the interactive content, and it saves me hours of preparation time.",
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
  const { theme } = useTheme();

  return (
    <section className={`py-24 transition-all duration-300 ${theme === 'dark' ? 'bg-background' : 'bg-accent/20'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Star className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Student Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Loved by Students
            <span className="text-gradient block">Worldwide</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of learners who are accelerating their education with EduBuddy.ai's powerful AI tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={`group relative overflow-hidden border-2 card-hover hover-scale transition-all duration-500 ${
              theme === 'dark' 
                ? 'bg-card/60 backdrop-blur-xl border-border/30 hover:bg-card/80' 
                : 'bg-background/80 backdrop-blur-sm border-border hover:bg-background'
            }`}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                </div>
                
                <div className="relative mb-8">
                  <Quote className={`absolute -top-2 -left-2 h-8 w-8 transition-colors ${
                    theme === 'dark' ? 'text-primary/20' : 'text-primary/30'
                  }`} />
                  <p className="text-foreground leading-relaxed pl-6 font-medium">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 group-hover:scale-110 transition-transform">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground font-medium">{testimonial.role}</p>
                    <p className="text-sm text-primary font-semibold">{testimonial.university}</p>
                  </div>
                </div>

                {/* Subtle glow effect on hover */}
                <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-primary/5 via-purple-500/5 to-blue-500/5' 
                    : 'bg-gradient-to-r from-primary/3 via-purple-500/3 to-blue-500/3'
                } pointer-events-none`} />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA at bottom */}
        <div className="text-center mt-16">
          <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 ${
            theme === 'dark' 
              ? 'bg-primary/10 border border-primary/30 hover:bg-primary/20' 
              : 'bg-primary/5 border border-primary/20 hover:bg-primary/10'
          }`}>
            <span className="text-primary font-semibold">Ready to join them?</span>
            <span className="text-muted-foreground">Start your journey today</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
