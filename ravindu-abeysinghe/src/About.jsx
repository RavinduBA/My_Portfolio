import React, {useState} from 'react'



const aboutItems = [
    {
      label: 'Project done',
      number: 20
    },
    {
      label: 'Technologies ',
      number: 15
    }
  ];


const About = () => {

  const [showMore, setShowMore] = useState(false);


  return (
    <section
    id="about"
    className='section'>
        <div className='container'>
            <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12'>
                <p className='text-zinc-300 mb-4 md:mb-8 md:text-l '>
                Hi! I’m Ravindu, a Computer Engineer and former engineering intern passionate about web and app development. I merge technical know-how with
                 creative thinking to deliver user-centric applications that look great and work flawlessly. A software engineer in the making, dedicated to turning ideas
                  into impactful digital realities, one app at a time .....
                </p>  



                
                <div className=' flex flex-wrap items-center gap-4 md:gap-7'>
                    {
                        aboutItems.map(({label, number}, key) => (
                            <div key={key} className=''>
                                <div className='flex items-center md:mb-2 '>
                                    <span className='text-2xl font-semibold md:text-4xl'>{number}</span>
                                    <span className='text-sky-400 font-semibold md:text-3xl'>+</span>
                                </div>
                                <p className='text-sm text-zinc-400'>{label}</p>
                            </div>
                        ))
                    }
                    <img 
                    src="/images/gray.png"
                    alt="" 
                    width={27}
                    height={27}
                    className='ml-auto md:w-[40px] md:h-[40px]' />

      
                    <button 
                      onClick={() => setShowMore(!showMore)}
                      className="btn btn-primary"
                    >
                      {showMore ? 'Show Less' : 'More About Me'}
                      <span className="material-symbols-rounded text-xlg ">
                        {showMore ? 'expand_less' : 'expand_more'}
                      </span>
                    </button>


                </div>


 <div className="">

      </div>
      
      {/* Expandable Content */}
      {showMore && (
        <div className="mt-4 transition-all duration-500 animate-fadeIn">
          
          <br />
          {/* Experience Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl text-blue-400 material-symbols-rounded">work</span>
              <h2 className="text-xl font-bold text-white">Experience</h2>
            </div>
            
            <div className="ml-9 space-y-6">
              {/* Work Experience */}
              <div className="border-l-2 border-blue-400/30 pl-6 relative">
                <div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-[6.5px] top-2"></div>
                <h3 className="text-[17px] font-semibold text-white">Software Engineering Intern</h3>
                <div className="flex items-center text-zinc-300 text-sm ">
                  <span className="material-symbols-rounded text-[14px] mr-1">business</span>
                  WealthOS
                </div>
                <div className="flex items-center text-zinc-400 text-sm mb-1">
                  <span className="material-symbols-rounded text-[14px] mr-1">calendar_month</span>
                  2024
                </div>
                <p className="text-zinc-300 text-[14px]">
                Actively contributed to real-world software development projects, collaborating with cross-functional teams to deliver scalable backend systems and robust APIs. Gained hands-on experience with cloud technologies and participated in development focused on generative AI, deepening my understanding of cutting-edge innovations in the field.
                </p>
              </div>
            </div>
          </div>
          <br />

          {/* Education Section */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl text-blue-400 material-symbols-rounded">school</span>
              <h2 className="text-xl font-bold text-white">Education</h2>
            </div>
            
            <div className="ml-9 space-y-6">
              {/* University Education */}
              <div className="border-l-2 border-blue-400/30 pl-6 relative">
                <div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-[6.5px] top-2"></div>
                <h3 className="text-[17px] font-semibold text-white">BSc (Hons) in Computer Engineering</h3>
                <div className="flex items-center text-zinc-300 text-sm ">
                  <span className="material-symbols-rounded text-[14px] mr-1">location_on</span>
                  University of Peradeniya , Faculty of Engineering 
                </div>
                <div className="flex items-center text-zinc-400 text-sm mb-1">
                  <span className="material-symbols-rounded text-[14px] mr-1">calendar_month</span>
                  2021 – 2025
                </div>
                <p className="text-zinc-300 text-[14px]">
                  Completed my undergraduate degree with a strong focus on software development, cloud computing & emerging technologies.
                </p>
              </div>
              
              {/* High School Education */}
              <div className="border-l-2 border-blue-400/30 pl-6 relative">
                <div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-[6.5px] top-2"></div>
                <h3 className="text-[17px] font-semibold text-white">St. Anthony's College</h3>
                <div className="flex items-center text-zinc-400 text-sm mb-1">
                  <span className="material-symbols-rounded text-[14px] mr-1">calendar_month</span>
                  2013 – 2019
                </div>
                <p className="text-zinc-300 text-[14px]">
                  Completed GCE A/l's on Physical science stream ( AAC ) . Built the foundation for my interest in technology and problem solving.
                </p>
              </div>
            </div>
          </div>
          
          

        </div>
      )}

            </div>
        </div>
    </section>
  )
}

export default About