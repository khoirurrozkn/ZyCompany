import React, { useState } from 'react'
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const DescDropdown = ({desc, colorDrop, withIg, additionalParent, additionalDesc}) => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div onClick={() => setIsOpen(prevIsOpen => !prevIsOpen)} className={additionalParent}>
        <p className={`${additionalDesc} mt-[1.1rem] ${isOpen && 'line-clamp-3'} md:line-clamp-none lg:line-clamp-none`}>
          {desc}
          <br></br>
          {withIg && (
              <Link target='_blank' to="https://www.instagram.com/khoirurrozkn">
                  <FontAwesomeIcon className='text-[30px] transition-all hover:text-[35px] mt-3 text-[#d6249f]' icon={faInstagram} />
              </Link>
          )}
        </p>
        <p className='desc-button w-full text-center relative mt-1 md:hidden lg:hidden'
              style={{color: colorDrop}}
              >
            {isOpen ? 'Open' : 'Close'}
            <FontAwesomeIcon className={`arrow-down ms-1 text-[#DCBF99]`} icon={faHandPointUp}/>
        </p>
    </div>
  )
} 

export default DescDropdown