import React from 'react'


//components

import ProjectCard from './ProjectCard';



const works = [
    {
      imgSrc: '/images/p2.png',
      title: 'Event Attendance management System',
      tags: ['React', 'Web', 'AWS',' Mongo'],
      projectLink: 'https://github.com/RavinduBA/e19-3yp-Event-Attendance-Management-System/'
    },
    {
      imgSrc: '/images/p1.png',
      title: 'Baby Development Tracking System',
      tags: ['Android Studio', 'Firebase','API'],
      projectLink: 'https://github.com/RavinduBA/e19-co225-Baby-Developement-Tracking-System-Mobileapplication/'
    },
    {
      imgSrc: '/images/p4.png',
      title: 'Library Management System',
      tags: ['PHP', 'MYSQL',"SCSS"],
      projectLink: 'https://github.com/RavinduBA/librarymanagmentsystemD/'
    },
    {
      imgSrc: '/images/p3.png',
      title: 'Movie Review Web App',
      tags: ['Node', 'React','Tailwind CSS','Ongoing'],
      projectLink: 'https://github.com/RavinduBA/Movie-Review-WebApp'
    },
    {
      imgSrc: '/images/p5.png',
      title: 'Game of Thrones MobileApp',
      tags: ['React Native', 'Firebase','SCSS'],
      projectLink: 'https://github.com/RavinduBA/Game-Of-Thrones-MobileApp'
    },
    {
      imgSrc: '/images/p6.jpeg',
      title: 'Keyboard for the Visually Impaired',
      tags: ['Python', 'Hardware'],
      projectLink: 'https://github.com/RavinduBA/e19-co227-Keyboard-for-Visually-Impaired'
    },
  ];



const Work = () => {
  return (
    <section 
    id= "work"
    className="section"
    >
 <div className='container'>
    <h2 className="headline-2 mb-8">
    My portfolio highlights
    </h2>
    <div className='grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]'>
       {works.map(({imgSrc, title, tags, projectLink}, key) => (
              <ProjectCard
               key={key}
               imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
              />
       ))}
    </div>
 </div>
    </section>
  )
}

export default Work