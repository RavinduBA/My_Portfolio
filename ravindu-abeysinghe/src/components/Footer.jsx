import React from 'react'

//components

import { ButtonPrimary } from './Button';


const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Blog',
      href: '#blog'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/RavinduBA'
    },
    {
      label: 'LinkedIn',
      href: 'http://www.linkedin.com/in/ravindu1'
    },
    {
      label: 'Twitter X',
      href: 'https://twitter.com/r_bandara_'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/_.ravin__/'
    },
    {
      label: 'Blogger',
      href: 'https://ravinduabeysinghe.blogspot.com/'
    }
  ];

const Footer = () => {
  return (
    <footer className="section">
        <div className="container">
    
    <div className='lg:grid lg:grid-cols-2'>

        <div className='mb-5'>
        <h2 className="headline-2 mb-5 lg:max-w-[18ch]">
          Let&apos;s work together today!
        </h2>

        <ButtonPrimary 
           href = 'mailto : ravindubandaraha@gmail.com'
           label= 'Start Project'
           icon = 'chevron_right'
        />
        </div>
          
        <div className=' grid grid-cols-2 gap-4 lg:pl-20'>

            <div>
                <p className='mb-2'> Sitemap</p>
                <ul>
                    {sitemap.map(({ label, href }, key) => (
                      <li key={key}>
                        <a 
                        href={href}
                        className='block text-sm text-zinc-400 py-1 transition-colors
                         hover:text-zinc-200'
                        >
                            {label}
                        </a>
                      </li>
                    ))}
                </ul>
            </div>

            <div>
                <p className='mb-2'> Socials</p>
                <ul>
                    {socials.map(({ label, href }, key) => (
                      <li key={key}>
                        <a 
                        href={href}
                        target='_blank'
                        className='block text-sm text-zinc-400 py-1 transition-colors
                        hover:text-zinc-200'
                        >
                            {label}
                        </a>
                      </li>
                    ))}
                </ul>
            </div>
        </div>
        

    </div>

    <div className=' flex items-center justify-between pt-10 mb-8 '>
        <a 
        href=""
        className=''
        >
         <img 
         src="/images/logo.png" 
         width={40}
         height={40}
         alt="Logo" />
        </a>

         <p className='text-zinc-500 text-sm'>
            &copy; 2025 <span className='text-zinc-200'> Ravindu Abeysinghe</span>
         </p>

    </div>

        </div>
    </footer>
  )
}

export default Footer