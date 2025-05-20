import React from 'react'

//components
import ProjectCard from './ProjectCard';

const works = [
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
     
    },
    {
      imgSrc: '/images/p3.png',
      title: 'Movie Review Web App',
      tags: ['SpringBoot', 'React','API','Ongoing'],
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
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work