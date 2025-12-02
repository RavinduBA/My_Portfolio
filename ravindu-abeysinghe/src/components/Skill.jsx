import React, { useEffect, useRef, useState } from 'react'

//components
import SkillCard from './SkillCard'

const skillItem = [
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  
    {
      imgSrc: '/images/figma.svg',
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/t.png',
      label: 'TypeScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: '/images/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: '/images/mongodb.svg',
      label: 'MongoDB',
      desc: 'Database'
    },{
      imgSrc: '/images/Next.png',
      label: 'Next.js',
      desc: 'Framework'
    },
    
    {
      imgSrc: '/images/Astro.png',
      label: 'Astro',
      desc: 'Framework'
    }, {
      imgSrc: '/images/streamlit.png',
      label: 'Streamlit',
      desc: 'Framework'
    }, {
      imgSrc: '/images/Csharp.png',
      label: 'C#',
      desc: 'Language'
    }, {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/aws.png',
      label: 'AWS',
      desc: ' Cloud platform'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React Native',
      desc: 'Framework'
    },{
      imgSrc: '/images/php.png',
      label: 'PHP',
      desc: 'Server language'
    }
    ,
    {
      imgSrc: '/images/python.png',
      label: 'Python',
      desc: 'Language'
    },
    {
      imgSrc: '/images/sql.png',
      label: 'MYSQL',
      desc: 'DBMS'
    },
    {
      imgSrc: '/images/git.png',
      label: 'Git',
      desc: 'Version Control '
    },
    {
      imgSrc: '/images/as.png',
      label: 'Android Studio',
      desc: 'Development'
    },
    {
      imgSrc: '/images/bt.png',
      label: 'Bootstrap',
      desc: 'CSS framework'
    },
    {
      imgSrc: '/images/fi.png',
      label: 'Firebase',
      desc: 'BaaS'
    },
    {
      imgSrc: '/images/d.png',
      label: 'Docker',
      desc: 'Containerization '
    },
    {
      imgSrc: '/images/j.png',
      label: 'Java',
      desc: 'Language'
    }
     
  ];



const Skill = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target);
            if (index !== -1 && !visibleCards.includes(index)) {
              setVisibleCards((prev) => [...prev, index]);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, [visibleCards]);

  return (
    <section className='section' id="skill">
        <div className='container'>
            <h2 className='headline-2'>
            Essential Tools I use
            </h2>
            <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch]'>
            Discover the powerful tools and technologies I use to create exceptional, high-performing websites & 
            applications.
            </p>
            <div className='grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
           {
            skillItem.map(({imgSrc, label, desc},key) =>
            (
              <div
                key={key}
                ref={(el) => (cardRefs.current[key] = el)}
                className={`transform transition-all duration-500 ease-out ${
                  visibleCards.includes(key)
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-8 scale-90'
                }`}
                style={{
                  transitionDelay: `${(key % 6) * 80}ms`,
                }}
              >
                <SkillCard 
                  imgSrc={imgSrc}
                  label={label}
                  desc={desc} />
              </div>
            )
            )
           }
            </div>
        </div>
    </section>
  )
}

export default Skill