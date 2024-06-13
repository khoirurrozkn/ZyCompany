import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const DirectorCardHome = ({photo, name, quot}) => {
    return (
        <div className='w-[29%]'>
            <img alt='dummy director' 
                src={photo}
                className='object-cover ratio-1-1 mt-[2rem] brightness-[80%] border'
            ></img>
            <p className='text-[1.5rem] font-[500] mt-[1rem]'>{name}</p>
            <div className='flex text-black/80 border-t border-black/25 mt-[1rem] mb-[1rem] pt-4'>
                {quot}
            </div>
            <Link target='blank' to="https://www.instagram.com/khoirurrozkn">
                <FontAwesomeIcon className='text-[30px] transition-all hover:text-[35px] text-[#d6249f]' icon={faInstagram} />
            </Link>
        </div>
    )
}

export default DirectorCardHome