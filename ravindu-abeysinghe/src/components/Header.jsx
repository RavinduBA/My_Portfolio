import React, { useState, useEffect } from 'react';

// Components
import Navbar from './Navbar';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = ['hero', 'about', 'skill', 'work', 'blog', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header height
      
      // Special case: if we're at the very top, always show hero as active
      if (window.scrollY < 50) {
        setActiveSection('hero');
        return;
      }
      
      let currentSection = 'hero'; // Default to hero
      
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          // Check if scroll position is within this section
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = sectionId;
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    // Set initial state
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className='fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0'>
      <div className='max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]'>
        <h1>
          <a href="/" className='logo'>
            <img 
              src="/images/logo.png"
              width={35}
              height={35}
              alt="Ravindu Abeysinghe" 
            />
          </a>
        </h1>

        <div className='relative md:justify-self-center'>
          <button
            className='menu-btn md:hidden'
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? 'close' : 'menu'}
            </span>
          </button>

          <Navbar navOpen={navOpen} activeSection={activeSection} />
        </div>

        <a 
          href="#contact"
          className='btn btn-secondary max-md:hidden md:justify-self-end'
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;