import React from 'react'
import DescDropdown from './DescDropdown'

const DirectorCardHome = ({photo, name, quot, withIg, additional}) => {
    return (
        <div className='lg:w-[30%] md:w-[30%] mt-[2rem]'>
            <img alt='dummy director'
                src={photo}
                className={`object-cover aspect-square brightness-90 ${additional} border`}
            ></img>
            <p className='text-[1.5rem] font-[500] mt-[1rem]'>{name}</p>
            <DescDropdown
                desc={quot}
                additionalDesc='text-black/70' 
                additionalParent='order-2 md:order-2 lg:order-1'
                colorDrop='#0EA5E9'
                withIg={withIg}
            />
        </div>
    )
}

export default DirectorCardHome