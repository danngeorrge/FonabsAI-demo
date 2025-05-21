import React, { useRef, useEffect, useState } from 'react';
import { Bot, LineChart, Link } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-16 md:py-24 relative"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-primary-900 bg-tech-pattern opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive AI solutions to transform your business operations"
          isVisible={isVisible}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mt-12">
          <ServiceCard 
            icon={<Bot />}
            title="AI Chat Agents"
            description="Intelligent conversational agents that engage with your customers 24/7, providing immediate responses and personalized assistance."
            delay={0}
            isVisible={isVisible}
          />
          
          <ServiceCard 
            icon={<LineChart />}
            title="Lead Generation"
            description="Advanced AI systems that identify and qualify potential customers, nurturing them through the sales funnel with targeted engagement."
            delay={0.2}
            isVisible={isVisible}
          />
          
          <ServiceCard 
            icon={<Link />}
            title="CRM Integration"
            description="Seamless connection between your AI tools and existing CRM platforms, ensuring data consistency and enhancing customer relationship management."
            delay={0.4}
            isVisible={isVisible}
          />
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  isVisible: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay, isVisible }) => {
  return (
    <div 
      className={`glass-card rounded-lg p-6 transition-all duration-500 opacity-0 transform translate-y-10 ${
        isVisible ? 'opacity-100 transform-none' : ''
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="w-14 h-14 rounded-full bg-primary-700 flex items-center justify-center mb-6 text-accent-glow">
        {icon}
      </div>
      
      <h3 className="text-xl font-display font-semibold mb-3">{title}</h3>
      
      <p className="text-white/70 leading-relaxed">{description}</p>
    </div>
  );
};

export default Services;