import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-ai.jpg';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-0 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="heading-hero mb-4 animate-fade-in-up">
          Empowering AI Solutions for<br />Business
        </h1>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Transforming Industries with Innovative AI Technology.
        </p>
        <Link 
          to="/services"
          className="btn-primary inline-block animate-fade-in-up" 
          style={{ animationDelay: '0.4s' }}
        >
          Explore Our Services
        </Link>
      </div>
      
      <div className="mt-12 w-full overflow-hidden">
        <img 
          src={heroImage} 
          alt="AI Technology - Futuristic 3D AI letters on glowing platform with neon network connections" 
          className="w-full h-auto object-cover max-h-[600px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
