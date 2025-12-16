import { Bot } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-lime px-3 py-1.5 rounded-md flex items-center gap-2">
              <Bot className="w-5 h-5 text-primary" />
              <span className="font-display text-lg text-primary tracking-wider">SB Solutions</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
              Services
            </a>
            <a href="#mission" className="text-foreground hover:text-primary transition-colors font-medium">
              Mission
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
