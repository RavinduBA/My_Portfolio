import React from 'react'


import PropTypes from 'prop-types'

const SkillCard = ({
    imgSrc,
    label,
    desc,
    classes
}) => {
  return (
    <div className={'flex items-center gap-2 w-32 ring-2 ring-inset ring-zinc-50/10 rounded-xl p-2 hover:bg-zinc-800 transition-colors group ' + classes}>
        <figure className='bg-zinc-700/50 rounded-lg
        overflow-hidden w-10 h-10 p-1.5 group-hover:bg-zinc-900
        transition-colors'>
            <img 
            src={imgSrc}
            width={28}
            height={28}
            alt= {label} />
        </figure>
    <div>
        <h3 className='text-sm'>{label}</h3>
        
    </div>
    </div>
  )
}

SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string
}  
export default SkillCard