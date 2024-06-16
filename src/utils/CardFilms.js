import React from 'react'
import { Link } from 'react-router-dom'

const CardFilms = ({title, img}) => {
    return (
      <Link to="/detail" className='w-[49%] md:w-[31%] lg:w-[24%] rounded-lg h-[17rem] md:h-[26rem] flex items-end mt-[0.5rem] md:mt-[1rem] relative overflow-hidden'>
        <div
          className='absolute w-[100%] h-[100%] bg-cover bg-center transition-all duration-300 transform hover:scale-110'
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("${img}")` }}
        ></div>
        <p className='text-[1.2rem] md:text-[1.7rem] text-white relative font-[500] m-3 md:m-5'>{title}</p>
      </Link>
    )
}

export default CardFilms