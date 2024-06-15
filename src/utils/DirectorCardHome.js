import React from 'react'
import DescDropdown from './DescDropdown'

const DirectorCardHome = ({
    photo, name, quot, withIg, colorDrop, 
    additionalParent, additionalImg, withDropDown
    }) => {

    return (
        <div className={`w-[45%] md:w-[30%] mt-[2rem] ${additionalParent}`}>
            <img alt='dummy director'
                src={photo}
                className={`object-cover aspect-square shadow-lg brightness-90 ${additionalImg}`}
            ></img>
            <p className='text-[1rem] md:text-[1.5rem] font-[500] mt-[1rem]'>{name}</p>
            {!withDropDown ? 
                <p className='text-[0.8rem] md:text-[1rem]'>{quot}</p>
            :    
                <DescDropdown
                    desc={quot}
                    additionalDesc='text-black/70' 
                    additionalParent='order-2 md:order-2 lg:order-1'
                    withIg={withIg}
                />
            }
        </div>
    )
}

export default DirectorCardHome