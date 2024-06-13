import React from 'react'

const Hero = () => {
  return (
    <div className='px-[5rem] flex items-center bg-news text-white flex  h-[100vh] object-top'>
        <div className='font-[500]'>
        <div className='flex'>
            <div className='bg-sky-500 py-1 px-3 rounded-lg me-3'>PREMIUM</div>
            <div className='bg-red-500 py-1 px-3 rounded-lg'>21+</div>
        </div>
        <p className='text-[4rem] tracking-tight leading-[130%]'>
            World War III : 
            <br></br>
            The New Chapter
        </p>
        <p className='text-white/90 mb-[2rem]'>2024 | 185 min | English</p>
        <p><span className='text-red-500'>Genre : </span> Action, Thriller</p>
        <p className='w-[60%]'><span className='text-red-500'>Synopsis : </span>
            In the turbulent aftermath of a global conflict, escalating tensions 
            push the world toward another devastating war, testing alliances and threatening 
            the future of humanity.
        </p>
        </div>
    </div>
  )
}

export default Hero