import React from 'react'
import DescDropdown from './DescDropdown'

const CardHome = ({title, desc, colorDrop}) => {
    return (
        <div className='lg:w-[32%] border-zinc-600 border p-3 mb-4 rounded-lg rounded bg-black/30 backdrop-blur-[3px]'>
            <div className='border-b border-white/50 text-[1.5rem] pb-4 mb-4'>{title}</div>
            <DescDropdown 
                desc={desc}
                colorDrop={colorDrop}
                additionalDesc='text-white/90'
            />
        </div>
    )
}

export default CardHome