import React from 'react'


//components

import { ButtonPrimary ,ButtonOutline} from './Button'

const Hero = () => {
  return (
    
<section
id = "home"
className='pt-28 lg:pt-36'>

<div className='container items-center lg:grid lg:grid-cols-2 lg:gap-10 '>
    <div className='animate-fade-in-up'>
        <div className='flex items-center gap-3'>
            <figure className='img-box w-9 h-9 rounded-lg'>
                <img src="/images/new.jpg"
                width={40}
                height={40}
                alt="Henry clark portrait"
                className='img-cover' />
            </figure>
        <div className='flex items-center gap-1.5 
        text-zinc-400 text-sm tracking-wide'>
            <span className='relative w-2 h-2
            rounded-full bg-emerald-400'>
                <span className='absolute inset-0 
                rounded-full bg-emerald-400 animate-ping'></span>
                </span>
                Available for work
                
        </div>                     
        </div>
        <h2 className='headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-1 lg:mb-5'> 
        Engineering the Web, One Pixel at a Time...
         </h2>

         <p className='text-zinc-300 mb-5 md:mb-8 md:text-l bg-zinc-800 
         w-fit px-4 py-2 rounded-lg flex items-center hover:bg-zinc-700'>
           Ravindu Abeysinghe
           </p>

         <div className=' flex items-center gap-3'>
         <ButtonPrimary
          label="Download CV"
          icon="download"
          href="/images/cv.pdf"  // Path to your PDF file
          downloadFile="Ravindu_Abeysinghe_CV.pdf"  // Name that will appear when downloaded
        />

            <ButtonOutline
               href="#about"
               label="Scroll down"
               icon="arrow_downward"
               />
         </div>
    </div>
    <div className='hidden lg:block animate-fade-in-right'>
        <figure className='w-full max-w-[400px] ml-auto
        bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[100px]
        overflow-hidden '>
            <img src="/images/ME.jpg" 
            width= {656}
            height={800}
            alt="Ravindu Abeysighe"
            className='w-full'  />
        </figure>
    </div>
</div>
</section>

  )
}


export default Hero