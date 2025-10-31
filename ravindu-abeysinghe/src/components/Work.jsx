import React, { useState } from 'react'
import { X, Github } from 'lucide-react';

//components
import ProjectCard from './ProjectCard';

const works = [
   {
      imgSrc: '/images/AIP.png',
      title: 'AI Powered Knowledge Management System',
      tags: ['React', 'RAG',' Langchain','Flask'],
      projectLink: 'https://github.com/RavinduBA/e19-4yp-AI-Powered-Knowledge-Management-System',
      description: 'Built a platform to help the institute store, access, and interact with internal knowledge more effectively. Key features include an AI-powered RAG-based Q&A model, real-time summarization, a user-friendly web interface, and secure user authentication.'
    },
    {
      imgSrc: '/images/p2.png',
      title: 'Event Attendance management System',
      tags: ['React', 'AWS',' Mongo','NodeJS'],
      projectLink: 'https://github.com/RavinduBA/e19-3yp-Event-Attendance-Management-System/',
      description: 'A comprehensive system designed to enhance the tracking of attendees during events such as conferences and workshops. The system includes a web application for organizers to manage conference rooms, schedule sessions, monitor real-time attendance, and session analytics.'
    },
    {
      imgSrc: '/images/p1.png',
      title: 'Baby Development Tracking System',
      tags: ['Android Studio', 'Firebase','API'],
      projectLink: 'https://github.com/RavinduBA/e19-co225-Baby-Developement-Tracking-System-Mobileapplication/',
      description: 'A mobile application designed to help parents, doctors & health midwives track and monitor the development of children aged 0 to 5 years. It enables registration, vaccination tracking, growth monitoring & medical professionals to record and provide recommendations.'
    },
    {
      imgSrc: '/images/p4.png',
      title: 'Library Management System',
      tags: ['PHP', 'MYSQL',"SCSS"],
      projectLink: 'https://github.com/RavinduBA/librarymanagmentsystemD/',
      description: 'A web-based Library Management System that allows users to register/login, search and view books, and track lending activities. The solution enhances library processes seamlessly, offering improved user experiences.'
     
    },{
      imgSrc: '/images/RNP.png',
      title: 'Rythem Nation Blog Site',
      tags: ['Astro', 'TailwindCSS','JavaScript'],
      projectLink: 'https://github.com/RavinduBA/Rythem-Nation-Astro-blog-site-',
      description: 'A modern, dynamic web application built with Astro, Tailwind CSS, and TypeScript that celebrates music culture, showcases emerging artists, and explores the universal language of rhythm. (Currently under construction.'
    },
    {
      imgSrc: '/images/p3.png',
      title: 'Movie Review Web App',
      tags: ['SpringBoot', 'React','API'],
      projectLink: 'https://github.com/RavinduBA/Movie-Review-WebApp',
      description: 'An ongoing full-stack web application that allows users to Register/login, search for movies, watch trailers, submit reviews & rate films. The backend is built with Spring Boot, using MongoDB for data storage, while the frontend is developed with React for a responsive user experience. '
    },
    {
      imgSrc: '/images/p5.png',
      title: 'Game of Thrones MobileApp',
      tags: ['React Native', 'Firebase','SCSS'],
      projectLink: 'https://github.com/RavinduBA/Game-Of-Thrones-MobileApp',
      description: 'An ongoing mobile application that allows users to explore detailed profiles of Game of Thrones characters, including their backgrounds and house affiliations. The app features user Authentication ,persistent session handling, ensuring a smooth and personalized experience.'
    },
    {
      imgSrc: '/images/p6.jpg',
      title: 'Keyboard for the Visually Impaired',
      tags: ['Python', 'Arudino','Hardware'],
      projectLink: 'https://github.com/RavinduBA/e19-co227-Keyboard-for-Visually-Impaired',
      description: 'Designed & developed an innovative keyboard application tailored for visually impaired users, enabling accurate character input through intuitive key combinations. The system integrates auditory feedback to guide users as they type, creating an accessible & empowering typing experience that promotes independence.'
    },
  ];


const Work = () => {
  const [popupImg, setPopupImg] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleImgClick = (imgSrc) => {
    setPopupImg(imgSrc);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setPopupImg(null);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <section 
      id="work"
      className="section"
    >
      <div className='container'>
        <h2 className="headline-2 mb-8">
          My portfolio highlights
        </h2>
        <div className='grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]'>
          {works.map(({imgSrc, title, tags, projectLink, description}, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              description={description}
              onImgClick={handleImgClick}
              onProjectClick={() => handleProjectClick({imgSrc, title, tags, projectLink, description})}
            />
          ))}
        </div>
        {popupImg && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70">
            <div className="relative bg-zinc-900 p-8 rounded-xl shadow-2xl min-w-[320px] min-h-[240px] max-w-3xl max-h-[90vh] flex flex-col items-center">
              <button
                onClick={handleClose}
                className="absolute top-1 right-1 bg-sky-400 hover:bg-sky-500 rounded-full w-5 h-5 flex items-center justify-center transition-colors"
                aria-label="Close image popup"
              >
                <X size={32} className="text-white" />
              </button>
              <img
                src={popupImg}
                alt="Project"
                className="rounded-lg max-w-full max-h-[70vh] object-contain"
              />
            </div>
          </div>
        )}
        
        {selectedProject && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={handleCloseProject}>
            <div className="relative bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 p-8 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto ring-2 ring-sky-400/20" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={handleCloseProject}
                className="absolute top-4 right-4 bg-sky-400 hover:bg-sky-500 rounded-full w-10 h-10 flex items-center justify-center transition-all hover:rotate-90 duration-300 z-10"
                aria-label="Close project details"
              >
                <X size={24} className="text-zinc-900" />
              </button>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Project Image */}
                <div className="relative group">
                  <img
                    src={selectedProject.imgSrc}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-xl ring-2 ring-zinc-700 group-hover:ring-sky-400 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Project Details */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-50 mb-4 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                      {selectedProject.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedProject.tags.map((tag, index) => (
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
                    href={selectedProject.projectLink}
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
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Work