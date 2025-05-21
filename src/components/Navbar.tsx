import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './ui/Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-900/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          <Logo className="h-10 w-auto" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLinks />
            <button
              className="py-2 px-6 bg-transparent border border-accent-glow/30 text-accent-glow rounded-md hover:bg-accent-glow/10 hover:border-accent-glow/50 transition-all duration-300 shadow-glow-sm"
            >
              Book a Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-primary-800/95 backdrop-blur-lg animate-slide-down">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <MobileNavLinks closeMenu={() => setIsMenuOpen(false)} />
              <button
                className="py-2 px-6 bg-gradient-to-r from-accent-glow to-accent-purple text-white rounded-md hover:shadow-glow transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Book a Call
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className = '', onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className={`text-white/90 hover:text-accent-glow transition-colors duration-300 ${className}`}
  >
    {children}
  </a>
);

const NavLinks: React.FC = () => (
  <>
    <NavLink href="#services">Services</NavLink>
    <NavLink href="#features">Features</NavLink>
    <NavLink href="#testimonials">Testimonials</NavLink>
    <NavLink href="#about">About</NavLink>
  </>
);

interface MobileNavLinksProps {
  closeMenu: () => void;
}

const MobileNavLinks: React.FC<MobileNavLinksProps> = ({ closeMenu }) => (
  <>
    <NavLink href="#services" onClick={closeMenu} className="py-2 border-b border-primary-700/50">
      Services
    </NavLink>
    <NavLink href="#features" onClick={closeMenu} className="py-2 border-b border-primary-700/50">
      Features
    </NavLink>
    <NavLink href="#testimonials" onClick={closeMenu} className="py-2 border-b border-primary-700/50">
      Testimonials
    </NavLink>
    <NavLink href="#about" onClick={closeMenu} className="py-2 border-b border-primary-700/50">
      About
    </NavLink>
  </>
);

export default Navbar;