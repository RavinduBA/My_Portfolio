import React from 'react'
//Node modules
import PropTypes from 'prop-types'

const ProjectCard = ({
    imgSrc,
    title,
    tags,
    projectLink,
    description,
    classes
}) => {
  return (
    <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " + classes}>
        <figure className='h-50 img-box rounded-lg mb-4 overflow-hidden'>
            <img
            src={imgSrc}
            alt={title}
            loading='lazy'
            className='img-cover w-full h-full object-cover' />
        </figure>
        <div>
            <h3 className=' mb-1 text-[18px]  font-semibold text-zinc-100'>
                {title}
            </h3>
            
            {description && (
                <p className='text-xs text-zinc-400 mb-3 line-clamp-6 h-15 overflow-hidden'>
                    {description}
                </p>
            )}
            
            <div className='flex flex-wrap items-center gap-2 '>
                {tags.map((label, key) => (
                <span
                    key={key}
                    className='h-5 text-xs text-zinc-300 bg-zinc-50/5 grid items-center px-3 rounded-lg'
                >
                    {label}
                </span>
                ))}
            </div>  
            
        <div className=' y-40 flex justify-end'>
            <div className='w-8 h-8 rounded-lg grid
            place-items-center bg-sky-400 text-zinc-950 shrink-0'>
                <span
                className='material-symbols-rounded'
                aria-hidden='true'
                >
                    arrow_outward
                </span>
            </div>
        </div>

        </div>
      
        <a
        href={projectLink}
        target='_blank'
        rel="noopener noreferrer"
        className='absolute inset-0'
        ></a>
    </div>
  )
}

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    projectLink: PropTypes.string,
    description: PropTypes.string,
    classes: PropTypes.string
}

export default ProjectCard