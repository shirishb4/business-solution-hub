import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MarqueeBanner from '@/components/MarqueeBanner';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyWorkWithMe from '@/components/WhyWorkWithMe';
import UseCases from '@/components/UseCases';
import SocialProof from '@/components/SocialProof';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MarqueeBanner />
        <AboutSection />
        <ServicesSection />
        <WhyWorkWithMe />
        <UseCases />
        <SocialProof />
        <FinalCTA />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
