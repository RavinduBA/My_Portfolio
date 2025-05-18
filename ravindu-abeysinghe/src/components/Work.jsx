import React from 'react'


//components

import ProjectCard from './ProjectCard';



const works = [
    {
      imgSrc: '/images/p1.png',
      title: 'Baby Development Tracking System',
      tags: ['API', 'MVC', 'Development'],
      projectLink: 'https://musify-5al0.onrender.com/'
    },
    {
      imgSrc: '/images/p2.png',
      title: 'Event Attendance management System',
      tags: ['API', 'SPA'],
      projectLink: 'https://pixstock-official.vercel.app/'
    },
    {
      imgSrc: '/images/p4.png',
      title: 'Library Management System',
      tags: ['Development', 'API'],
      projectLink: ''
    },
    {
      imgSrc: '/images/p3.png',
      title: 'Movie Review Web App',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/codewithsadee-org/wealthome'
    },
    {
      imgSrc: '/images/p5.png',
      title: 'Game of Thrones MobileApp',
      tags: ['eCommerce', 'Development'],
      projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
    },
    {
      imgSrc: '/images/p6.jpeg',
      title: 'Keyboard for the Visually Impaired',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
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