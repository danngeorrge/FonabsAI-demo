import React from 'react';
import Logo from './ui/Logo';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-800 pt-16 pb-8 relative">
      <div className="absolute inset-0 bg-primary-900 bg-tech-pattern opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo className="mb-4" />
            <p className="text-white/70 mt-4 mb-6">
              Transforming businesses with intelligent AI automation solutions that drive efficiency and growth.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook size={18} />} />
              <SocialLink href="#" icon={<Twitter size={18} />} />
              <SocialLink href="#" icon={<Linkedin size={18} />} />
              <SocialLink href="#" icon={<Instagram size={18} />} />
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Solutions</h4>
            <ul className="space-y-2">
              <FooterLink href="#" text="AI Chat Agents" />
              <FooterLink href="#" text="Lead Generation" />
              <FooterLink href="#" text="CRM Integration" />
              <FooterLink href="#" text="Workflow Automation" />
              <FooterLink href="#" text="Data Analytics" />
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <FooterLink href="#" text="About Us" />
              <FooterLink href="#" text="Case Studies" />
              <FooterLink href="#" text="Testimonials" />
              <FooterLink href="#" text="Blog" />
              <FooterLink href="#" text="Careers" />
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={18} className="text-accent-glow mr-3 mt-1 flex-shrink-0" />
                <span className="text-white/70">contact@fonabsai.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-accent-glow mr-3 mt-1 flex-shrink-0" />
                <span className="text-white/70">+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-700/50 pt-6 mt-8 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} FonabsAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => {
  return (
    <a 
      href={href} 
      className="w-8 h-8 rounded-full bg-primary-700 flex items-center justify-center text-white hover:bg-accent-glow/20 hover:text-accent-glow transition-all duration-300"
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  href: string;
  text: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, text }) => {
  return (
    <li>
      <a href={href} className="text-white/70 hover:text-accent-glow transition-colors duration-300">
        {text}
      </a>
    </li>
  );
};

export default Footer;