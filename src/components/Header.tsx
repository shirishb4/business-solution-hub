import { Bot } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-lime px-3 py-1.5 rounded-md flex items-center gap-2">
              <Bot className="w-5 h-5 text-primary" />
              <span className="font-display text-lg text-primary tracking-wider">SB Solutions</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/services" 
              className={`transition-colors font-medium ${
                location.pathname === '/services' 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Services
            </Link>
            {isHome ? (
              <a href="#mission" className="text-foreground hover:text-primary transition-colors font-medium">
                Mission
              </a>
            ) : (
              <Link to="/#mission" className="text-foreground hover:text-primary transition-colors font-medium">
                Mission
              </Link>
            )}
            {isHome ? (
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
                Contact
              </a>
            ) : (
              <Link to="/#contact" className="text-foreground hover:text-primary transition-colors font-medium">
                Contact
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
