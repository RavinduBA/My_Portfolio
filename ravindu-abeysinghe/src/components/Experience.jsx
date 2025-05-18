import React from 'react'

const Experience = () => {
  return (
    <section className="section" id='experience'>
        <div className="container">
        <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12'>
            
        <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl text-emerald-400 material-symbols-rounded">school</span>
          <h2 className="text-2xl font-bold text-white">Education</h2>
        </div>
        
        <div className="ml-9 space-y-6">
          {/* University Education */}
          <div className="border-l-2 border-emerald-400/30 pl-6 relative">
            <div className="absolute w-3 h-3 bg-emerald-400 rounded-full -left-[6.5px] top-2"></div>
            <h3 className="text-xl font-semibold text-white">BSc (Hons) in Computer Engineering</h3>
            <div className="flex items-center text-zinc-300 text-sm mb-1">
              <span className="material-symbols-rounded text-base mr-1">location_on</span>
              University of [Your University Name]
            </div>
            <div className="flex items-center text-zinc-400 text-sm mb-2">
              <span className="material-symbols-rounded text-base mr-1">calendar_month</span>
              2021 – Present
            </div>
            <p className="text-zinc-300">
              Currently pursuing my undergraduate degree with a strong focus on software development, computer systems, and emerging technologies.
            </p>
          </div>
          
          {/* High School Education */}
          <div className="border-l-2 border-emerald-400/30 pl-6 relative">
            <div className="absolute w-3 h-3 bg-emerald-400 rounded-full -left-[6.5px] top-2"></div>
            <h3 className="text-xl font-semibold text-white">St. Anthony's College</h3>
            <div className="flex items-center text-zinc-400 text-sm mb-2">
              <span className="material-symbols-rounded text-base mr-1">calendar_month</span>
              2013 – 2019
            </div>
            <p className="text-zinc-300">
              Completed secondary education with a focus on science and mathematics. Built the foundation for my interest in technology and problem solving.
            </p>
          </div>
        </div>
      </div>
      
      {/* Experience Section */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl text-blue-400 material-symbols-rounded">work</span>
          <h2 className="text-2xl font-bold text-white">Experience</h2>
        </div>
        
        <div className="ml-9 space-y-6">
          {/* Work Experience */}
          <div className="border-l-2 border-blue-400/30 pl-6 relative">
            <div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-[6.5px] top-2"></div>
            <h3 className="text-xl font-semibold text-white">Software Engineering Intern</h3>
            <div className="flex items-center text-zinc-300 text-sm mb-1">
              <span className="material-symbols-rounded text-base mr-1">business</span>
              WealthOS
            </div>
            <div className="flex items-center text-zinc-400 text-sm mb-2">
              <span className="material-symbols-rounded text-base mr-1">calendar_month</span>
              2024
            </div>
            <p className="text-zinc-300">
              Contributed to real-world software development projects, collaborated with cross-functional teams, and enhanced my skills in backend systems, APIs, and cloud technologies.
            </p>
          </div>
        </div>
      </div>
            
            
            
            
            </div>

        </div>

    </section>
  )
}

export default Experience