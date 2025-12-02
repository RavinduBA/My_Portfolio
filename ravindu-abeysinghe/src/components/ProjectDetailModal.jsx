import React, { useState } from 'react';
import { X, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import PropTypes from 'prop-types';

const ProjectDetailModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  if (!project) return null;

  // Create images array - if project has images array use it, otherwise use imgSrc
  const images = project.images || [project.imgSrc];
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div 
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" 
      onClick={onClose}
    >
      <div 
        className="relative bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar" 
        onClick={(e) => e.stopPropagation()}
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#0ea5e9 #27272a'
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-sky-400 hover:bg-sky-500 rounded-full w-10 h-10 flex items-center justify-center transition-all hover:rotate-90 duration-300 z-20"
          aria-label="Close project details"
        >
          <X size={24} className="text-zinc-900" />
        </button>
        
        {/* Wide Project Image Carousel at Top */}
        <div className="relative group overflow-hidden rounded-t-2xl">
          <img
            src={images[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            className="w-full h-[400px] object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
          
          {/* Navigation Arrows - Only show if multiple images */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-zinc-900/80 hover:bg-zinc-800 backdrop-blur-sm text-zinc-50 rounded-full p-3 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sky-400 z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-zinc-900/80 hover:bg-zinc-800 backdrop-blur-sm text-zinc-50 rounded-full p-3 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sky-400 z-10"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
              
              {/* Image Indicators */}
              <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'bg-sky-400 w-8'
                        : 'bg-zinc-50/50 hover:bg-zinc-50/80'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
          
          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute top-4 left-4 bg-zinc-900/80 backdrop-blur-sm text-zinc-50 px-3 py-1.5 rounded-full text-sm font-medium z-10">
              {currentImageIndex + 1} / {images.length}
            </div>
          )}
          
          {/* Title Overlay on Image */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h3 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-3 drop-shadow-lg">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-sm font-medium text-zinc-50 bg-zinc-900/70 backdrop-blur-sm rounded-full ring-1 ring-zinc-50/20 hover:bg-zinc-800/70 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-8 md:p-10">
          {/* Description */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-12 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full"></div>
              <h4 className="text-lg font-semibold text-sky-400">About This Project</h4>
            </div>
            <p className="text-zinc-300 text-base leading-relaxed">
              {project.description}
            </p>
          </div>
          
          {/* Action Button */}
          <div className="flex justify-center pt-6 border-t border-zinc-700/50">
            <a
              href={project.projectLink}
              target='_blank'
              rel='noopener noreferrer'
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-zinc-900 font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-sky-400/50 w-full md:w-auto"
            >
              <Github size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>View on GitHub</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectDetailModal.propTypes = {
  project: PropTypes.shape({
    imgSrc: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    projectLink: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default ProjectDetailModal;
