import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ navOpen, activeSection }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const navLinksRefs = useRef({});

  const initActiveBox = () => {
    if (lastActiveLink.current && activeBox.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    }
  };

  const updateActiveBox = (targetElement) => {
    if (targetElement && activeBox.current) {
      activeBox.current.style.top = targetElement.offsetTop + 'px';
      activeBox.current.style.left = targetElement.offsetLeft + 'px';
      activeBox.current.style.width = targetElement.offsetWidth + 'px';
      activeBox.current.style.height = targetElement.offsetHeight + 'px';
    }
  };

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove('active');
    event.target.classList.add('active');
    lastActiveLink.current = event.target;
    updateActiveBox(event.target);
  };

  // Update active box when activeSection changes (from scroll)
  useEffect(() => {
    if (activeSection && navLinksRefs.current[activeSection]) {
      // Remove active class from previous link
      lastActiveLink.current?.classList.remove('active');
      
      // Add active class to current section link
      const currentLink = navLinksRefs.current[activeSection];
      currentLink.classList.add('active');
      lastActiveLink.current = currentLink;
      
      // Update active box position
      updateActiveBox(currentLink);
    }
  }, [activeSection]);

  useEffect(() => {
    initActiveBox();
    
    const handleResize = () => {
      initActiveBox();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = [
    {
      label: 'Home',
      link: '#hero',
      className: 'nav-link active',
      id: 'hero',
      isInitialActive: true
    },
    {
      label: 'About',
      link: '#about',
      className: 'nav-link',
      id: 'about'
    },
    {
      label: 'Tools',
      link: '#skill',
      className: 'nav-link',
      id: 'skill'
    },
    {
      label: 'Work',
      link: '#work',
      className: 'nav-link',
      id: 'work'
    },
    {
      label: 'Blog',
      link: '#blog',
      className: 'nav-link',
      id: 'blog'
    },
    {
      label: 'Contact',
      link: '#contact',
      className: 'nav-link md:hidden',
      id: 'contact'
    }
  ];

  return (
    <nav className={'navbar ' + (navOpen ? 'active' : '')}>
      {navItems.map(({ label, link, className, id, isInitialActive }, key) => (
        <a
          href={link}
          key={key}
          ref={(el) => {
            navLinksRefs.current[id] = el;
            if (isInitialActive) {
              lastActiveLink.current = el;
            }
          }}
          className={className}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
  activeSection: PropTypes.string
};

export default Navbar;