import React from 'react';
import { X, Github } from 'lucide-react';
import PropTypes from 'prop-types';

const ProjectDetailModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" 
      onClick={onClose}
    >
      <div 
        className="relative bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 p-8 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" 
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-sky-400 hover:bg-sky-500 rounded-full w-10 h-10 flex items-center justify-center transition-all hover:rotate-90 duration-300 z-10"
          aria-label="Close project details"
        >
          <X size={24} className="text-zinc-900" />
        </button>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Project Image */}
          <div className="relative group">
            <img
              src={project.imgSrc}
              alt={project.title}
              className="w-full h-64 object-cover rounded-xl ring-2 ring-zinc-700 group-hover:ring-sky-400 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          {/* Project Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-zinc-50 mb-4 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                {project.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium text-sky-400 bg-sky-400/10 rounded-full ring-1 ring-sky-400/20 hover:bg-sky-400/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <a
              href={project.projectLink}
              target='_blank'
              rel='noopener noreferrer'
              className="flex items-center justify-center gap-2 px-6 py-3 bg-sky-400 hover:bg-sky-500 text-zinc-900 font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-400/50"
            >
              <Github size={20} />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
        
        {/* Description */}
        <div className="mt-6 pt-6 border-t border-zinc-700">
          <h4 className="text-lg font-semibold text-sky-400 mb-3">Project Description</h4>
          <p className="text-zinc-300 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

ProjectDetailModal.propTypes = {
  project: PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    projectLink: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default ProjectDetailModal;
