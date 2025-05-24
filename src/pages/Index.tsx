
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureShowcase from "@/components/FeatureShowcase";
import TrustedBy from "@/components/TrustedBy";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeatureShowcase />
      <TrustedBy />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
