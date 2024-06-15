import React, { useState } from 'react'
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const DescDropdown = ({desc, withIg, additionalParent, additionalDesc, one}) => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div onClick={() => setIsOpen(prevIsOpen => !prevIsOpen)} className={additionalParent}>
        <p className={`${additionalDesc} mt-[0.5rem] ${isOpen && 'line-clamp-2'} md:line-clamp-none lg:line-clamp-none`}>
          {desc}
          <br></br>
          {withIg && (
              <Link target='_blank' to="https://www.instagram.com/khoirurrozkn">
                  <FontAwesomeIcon className='text-[30px] transition-all hover:text-[35px] mt-3 text-[#d6249f]' icon={faInstagram} />
              </Link>
          )}
        </p>
        {one && 
          <div className='flex justify-center mt-1'>
            <p className='py-1 shadow-lg px-3 rounded-[20px] font-[500] bg-sky-500 text-white text-center relative mt-1 md:hidden lg:hidden'>
                {isOpen ? 'Tap the desc for more details' : 'Tap again to close the description.'}
                <FontAwesomeIcon className={`arrow-down ms-1 text-[#DCBF99]`} icon={faHandPointUp}/>
            </p>
          </div>
        }


    </div>
  )
} 

export default DescDropdown