import React from 'react'
import { Link } from 'react-router-dom'

const CardFilms = ({title, img, additional}) => {
    return (
      <Link to="/detail" className='w-[24%] rounded-lg h-[26rem] flex items-end mt-[1rem] relative overflow-hidden'>
        <div
          className={`absolute w-[100%] h-[100%] bg-cover bg-center transition-all duration-300 transform hover:scale-110 ${additional}`}
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("${img}")` }}
        ></div>
        <p className='text-[1.7rem] text-white relative font-[500] m-5'>{title}</p>
      </Link>
    )
}

export default CardFilms