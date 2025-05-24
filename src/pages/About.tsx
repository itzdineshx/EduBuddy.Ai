
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Brain, Users, Target, Lightbulb } from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "We leverage cutting-edge artificial intelligence to make learning more effective and personalized."
    },
    {
      icon: Users,
      title: "Student-Centered",
      description: "Everything we build is designed with students in mind, focusing on their success and learning outcomes."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "We measure our success by the academic achievements and learning progress of our users."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously innovate to bring the latest educational technology to learners worldwide."
    }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Co-Founder",
      image: "/placeholder.svg",
      description: "Former Stanford AI researcher with a passion for education technology."
    },
    {
      name: "Sarah Johnson",
      role: "CTO & Co-Founder",
      image: "/placeholder.svg",
      description: "MIT graduate specializing in machine learning and educational software."
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Product",
      image: "/placeholder.svg",
      description: "10+ years designing user-centric educational platforms."
    },
    {
      name: "Emily Davis",
      role: "Head of AI",
      image: "/placeholder.svg",
      description: "PhD in Cognitive Science, expert in adaptive learning systems."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Revolutionizing Education with
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Artificial Intelligence</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            We're on a mission to make learning more efficient, engaging, and accessible for students worldwide through the power of AI.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 lg:px-8 bg-accent/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At TurboLearn, we believe that every student deserves access to personalized, intelligent learning tools. 
                Our platform harnesses the power of artificial intelligence to transform how students engage with their 
                educational content.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Founded in 2023 by a team of AI researchers and education enthusiasts, we've already helped over 
                10,000 students improve their learning outcomes through our innovative platform.
              </p>
              <Button
                onClick={() => navigate('/features')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-xl"
              >
                Explore Features
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Impact by Numbers</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold">10,000+</div>
                    <div className="text-purple-100">Active Students</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">1M+</div>
                    <div className="text-purple-100">Notes Generated</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">95%</div>
                    <div className="text-purple-100">User Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-purple-100">Universities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do at TurboLearn.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 lg:px-8 bg-accent/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The brilliant minds behind TurboLearn's innovative AI-powered learning platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Join the Future of Learning
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Be part of the educational revolution. Start your AI-powered learning journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate('/signup')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl text-lg"
            >
              Get Started Free
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate('/contact')}
              className="border-2 font-semibold px-8 py-4 rounded-xl text-lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
