import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MarqueeBanner from '@/components/MarqueeBanner';
import MissionSection from '@/components/MissionSection';
import ImageCarousel from '@/components/ImageCarousel';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MarqueeBanner />
        <MissionSection />
        <ImageCarousel />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
