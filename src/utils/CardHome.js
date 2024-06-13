import React from 'react'

const CardHome = ({title, desc}) => {
    return (
        <div className='w-[32%] p-3 rounded bg-black/25 backdrop-blur-[3px]'>
            <div className='border-b border-white/50 text-[1.5rem] pb-4 mb-4'>{title}</div>
            <p className='text-white/80'>{desc}</p>
        </div>
    )
}

export default CardHome