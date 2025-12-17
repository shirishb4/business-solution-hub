import { Linkedin, Phone, MessageCircle } from 'lucide-react';
import yesBeelogo from '@/assets/yesbee-robot-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={yesBeelogo} alt="YESBEE AI Automation" className="h-16 w-auto mb-4 brightness-0 invert" />
            <p className="text-background/70 mb-6 max-w-md">
              Building intelligent automation solutions that save time, cut costs, 
              and scale businesses. Let AI work for you.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/shirish-bhambure-b7687615/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/919819068803"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-background/70 hover:text-secondary transition-colors">Services</a></li>
              <li><a href="#about" className="text-background/70 hover:text-secondary transition-colors">About</a></li>
              <li><a href="#use-cases" className="text-background/70 hover:text-secondary transition-colors">Use Cases</a></li>
              <li><a href="#contact" className="text-background/70 hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg uppercase tracking-wider mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+919819068803" 
                  className="text-background/70 hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  +91 98190 68803
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/shirish-bhambure-b7687615/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © {currentYear} YESBEE AI Automation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
