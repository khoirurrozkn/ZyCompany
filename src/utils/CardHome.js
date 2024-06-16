import React from 'react'
import DescDropdown from './DescDropdown'

const CardHome = ({title, desc}) => {
    return (
        <div className='lg:w-[32%] border-zinc-600 border-y p-4 bg-black/30 backdrop-blur-[3px]'>
            <div className='text-[1.25rem] md:text-[1.5rem] pb-1'>{title}</div>
            <DescDropdown 
                desc={desc}
                additionalDesc='text-white/90'
            />
        </div>
    )
}

export default CardHome