import React from 'react'

const ShowFilmHome = ({logo, title, genre, year}) => {
    return (
        <div className='w-[43.2%] mt-[2rem]'>
            <img src={logo} 
                alt='By Jakob Owens unsplash'
                className='h-[550px] w-[100%] object-cover mt-[2rem] brightness-[80%] border'
                style={{ objectPosition: 'bottom' }}>
            </img>
            <p className='text-[2.2rem] my-[1rem]'>{title}</p>
            <div className='flex border-t border-black/25 pt-4'>
                <span>{genre}</span>
                <span className='ms-auto'>{year}</span>  
            </div>
        </div>
    )
}

export default ShowFilmHome