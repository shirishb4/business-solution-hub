import { Calendar, MessageCircle, Linkedin, Phone } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide mb-6 font-display">
            Let AI Work for Your Business — Not the Other Way Around
          </h2>
          
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Ready to transform your business operations with intelligent automation? 
            Let's discuss how AI can save you time, cut costs, and scale your growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="#book"
              className="btn-secondary inline-flex items-center gap-2 animate-pulse-glow"
            >
              <Calendar className="w-5 h-5" />
              Book a Call
            </a>
            
            <a 
              href="https://wa.me/919819068803"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[hsl(142,70%,45%)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[hsl(142,70%,40%)] transition-all duration-300 inline-flex items-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Me
            </a>
            
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
          
          <div className="flex items-center justify-center gap-2 text-primary-foreground/70">
            <Phone className="w-4 h-4" />
            <span>+91 98190 68803</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
