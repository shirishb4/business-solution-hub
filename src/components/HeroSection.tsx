import { Link } from 'react-router-dom';
import { Calendar, Briefcase, Linkedin } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-hero mb-6 animate-fade-in-up">
            I Build AI Automations That Save Time, Cut Costs & Scale Businesses
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Custom AI agents, workflows, and integrations designed for real business impact. 
            Let's transform how your business operates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a 
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book a Free Consultation
            </a>
            
            <Link 
              to="#use-cases"
              className="btn-outline inline-flex items-center gap-2"
            >
              <Briefcase className="w-5 h-5" />
              View Use Cases
            </Link>
            
            <a 
              href="https://www.linkedin.com/in/shirish-bhambure-b7687615/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-linkedin inline-flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-secondary rounded-full" />
            <span className="text-sm font-medium">Founder-Led Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-secondary rounded-full" />
            <span className="text-sm font-medium">Measurable Results</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-secondary rounded-full" />
            <span className="text-sm font-medium">Ethical AI Solutions</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
