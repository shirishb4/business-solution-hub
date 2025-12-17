import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin } from 'lucide-react';
import { useState } from 'react';
import yesBeelogo from '@/assets/yesbee-robot-logo.png';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#use-cases', label: 'Use Cases' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={yesBeelogo} alt="YESBEE AI Automation" className="h-16 w-auto" />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              isHome ? (
                <a 
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors font-medium text-sm"
                >
                  {link.label}
                </a>
              ) : (
                <Link 
                  key={link.href}
                  to={`/${link.href}`}
                  className="text-foreground hover:text-primary transition-colors font-medium text-sm"
                >
                  {link.label}
                </Link>
              )
            ))}
            
            <a 
              href="https://www.linkedin.com/in/shirish-bhambure-b7687615/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-linkedin py-2 px-4 text-sm inline-flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              Connect
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border mt-3">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                isHome ? (
                  <a 
                    key={link.href}
                    href={link.href}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link 
                    key={link.href}
                    to={`/${link.href}`}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              
              <a 
                href="https://www.linkedin.com/in/shirish-bhambure-b7687615/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-linkedin py-2 px-4 text-sm inline-flex items-center gap-2 w-fit"
              >
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
