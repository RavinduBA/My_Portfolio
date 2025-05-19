import React from 'react'
import PropTypes from 'prop-types'


const ReviewCard = ({
  content,
  imgSrc,
  topic,
  date,
  tags = [],
  link
}) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col h-full transition-all duration-300 hover:bg-zinc-700/50 hover:shadow-lg">
      <div>
        <p className="font-medium text-m line-clamp-2">{topic}</p>
      </div>
      
      <figure className="w-full h-48 mt-4 rounded-lg overflow-hidden">
        <img
          src={imgSrc}
          alt={topic}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </figure>
      
      <p className="text-zinc-400 mt-4 mb-4 line-clamp-3 text-sm">
        {content}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="text-xs px-2 py-1 bg-zinc-50/5 text-zinc-300 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      
     
      <div className="flex justify-between items-center mt-auto mb-4">
  <p className="text-xs text-zinc-300 tracking-wider">{date}</p>

  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-sky-400 hover:text-blue-300 transition-colors"
  >
    <span>Read more</span>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </a>
</div>


    </div>
  )
}

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  link: PropTypes.string.isRequired
}



export default ReviewCard