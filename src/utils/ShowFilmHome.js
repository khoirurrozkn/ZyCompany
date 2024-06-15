import React from 'react'

const ShowFilmHome = ({logo, title, genre, year, additional}) => {
    return (
        <div className={`lg:w-[43.2%] md:w-[32%] my-[1rem] lg:mb-[2rem] ${additional}`}>
            <img src={logo}
                alt='By Jakob Owens unsplash'
                className='w-[100%] aspect-square object-cover mt-[2rem] brightness-[80%]'
                style={{ objectPosition: 'bottom' }}>
            </img>
            <p className='text-[1.5rem] font-[500] lg:text-[2.2rem] my-[1rem]'>{title}</p>
            <div className='flex border-t border-black/25 pt-4'>
                <span>{genre}</span>
                <span className='ms-auto'>{year}</span>  
            </div>
        </div>
    )
}

export default ShowFilmHome