import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="heading-section text-primary-foreground mb-4">Get in Touch</h3>
            <p className="text-primary-foreground/80 mb-6">
              Ready to transform your business with AI solutions? Let's talk.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-lime flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-primary-foreground/60">Phone</p>
                <a href="tel:+919819068803" className="text-primary-foreground font-semibold hover:text-lime transition-colors">
                  +91 98190 68803
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-lime flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-primary-foreground/60">Contact</p>
                <p className="text-primary-foreground font-semibold">Shirish Bhambure</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} SB Solutions. Empowering Business with AI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
