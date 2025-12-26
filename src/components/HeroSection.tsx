import React from 'react';
import { Play, Info, Star } from 'lucide-react';
import { useAppSelector } from '../hooks/redux';

const heroContent = {
  recruiter: {
    title: 'Vijay Tak',
    subtitle: 'Full Stack Engineer',
    description: 'Experienced software engineer with 4+ years in React, Node.js, and cloud technologies. Proven track record of delivering scalable applications and leading development teams.',
    badge: 'Available for Hire',
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
  },
  stacker: {
    title: 'Technology Stack',
    subtitle: 'Modern Development Tools',
    description: 'Comprehensive overview of cutting-edge technologies, frameworks, and tools used in modern software development. From frontend to backend, cloud to mobile.',
    badge: 'Updated 2025',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
  },
  developer: {
    title: 'Featured Project',
    subtitle: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include real-time inventory, payment processing, and advanced analytics dashboard.',
    badge: 'Open Source',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
  },
};

const HeroSection: React.FC = () => {
  const currentProfile = useAppSelector((state) => state.profile.currentProfile);
  const content = heroContent[currentProfile || 'developer'];

  return (
    <div className="relative h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${content.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-2xl">
          <div className="mb-4">
            <span className="bg-red-600 text-white px-3 py-1 rounded text-sm font-semibold">
              {content.badge}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            {content.title}
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
            {content.subtitle}
          </h2>
          
          <p className="text-lg text-gray-200 mb-8 leading-relaxed">
            {content.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-200 transition-colors">
              <Play size={20} className="mr-2" fill="currentColor" />
              View Resume
            </button>
            
            <button className="flex items-center justify-center bg-gray-600/70 text-white px-8 py-3 rounded font-semibold hover:bg-gray-600 transition-colors">
              <Info size={20} className="mr-2" />
              More Info
            </button>
          </div>
          
          <div className="flex items-center mt-6 space-x-4">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={16} className="text-yellow-500" fill="currentColor" />
              ))}
            </div>
            <span className="text-gray-300">Highly Rated</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;