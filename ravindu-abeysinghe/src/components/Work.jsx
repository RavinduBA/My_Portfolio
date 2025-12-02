import React, { useState } from 'react'

//components
import ProjectCard from './ProjectCard';
import ProjectDetailModal from './ProjectDetailModal';

const works = [
  {
      imgSrc: '/images/Mahajana.png',
      title: 'Mahajana Supermarket App & Admin Dashboard',
      tags: ['React native', 'NodeJS','SQL','ExpressJS'],
      projectLink: 'https://github.com/RavinduBA/e19-4yp-AI-Powered-Knowledge-Management-System',
      description: 'Mahajana is a simple supermarket app where customers can browse products and view promotions. Mahajana Dash Pro is its admin dashboard for managing products, categories, branches, brands, and promotions.'
    },
    {
      imgSrc: '/images/Checking.png',
      title: 'CheckingCheckout Web & Mobile App',
      tags: ['React', 'React Native','PostgreSQL','Supabase'],
      projectLink: 'https://github.com/RavinduBA/e19-4yp-AI-Powered-Knowledge-Management-System',
      description: 'CheckingCheckout is our own multi-tenant hospitality management product for hotels and guesthouses, offering property management, bookings, financial tracking, and reporting . Providing a complete and seamless management system across both platforms'
    },
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
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
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
              onProjectClick={() => handleProjectClick({imgSrc, title, tags, projectLink, description})}
            />
          ))}
        </div>
        
        <ProjectDetailModal 
          project={selectedProject} 
          onClose={handleCloseProject} 
        />
      </div>
    </section>
  )
}

export default Work