import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

interface ContentCardProps {
  title: string;
  description: string;
  image: string;
  category?: string;
  rating?: number;
  link?: string;
  github?: string;
}

const ContentCard: React.FC<ContentCardProps> = ({
  title,
  description,
  image,
  category,
  rating,
  link,
  github,
}) => {
  return (
    <div className="group relative bg-gray-900 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:z-10">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Hover Actions */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
          {link && (
            <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
              <ExternalLink size={16} />
            </button>
          )}
          {github && (
            <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
              <Github size={16} />
            </button>
          )}
        </div>
      </div>
      
      <div className="p-4">
        {category && (
          <span className="text-xs text-gray-400 uppercase tracking-wider">
            {category}
          </span>
        )}
        
        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-red-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">
          {description}
        </p>
        
        {rating && (
          <div className="flex items-center">
            <div className="flex items-center mr-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={12}
                  className={star <= rating ? "text-yellow-500" : "text-gray-600"}
                  fill="currentColor"
                />
              ))}
            </div>
            <span className="text-xs text-gray-400">{rating}/5</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentCard;