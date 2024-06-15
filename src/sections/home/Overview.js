import React from 'react'
import ButtonHome from '../../utils/ButtonHome';
import DescDropdown from '../../utils/DescDropdown';

const Overview = () => {
  return (
    <div className='container mx-auto flex flex-wrap justify-evenly items-center'>
        <img src='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718316343/foto-home-2_xj8hai.jpg'
            alt='By Jakob Owens unsplash'
            className='lg:w-[50%] lg:h-[70vh] order-2 lg:order-1 object-cover mt-[2rem] brightness-[80%] border'
            style={{ objectPosition: 'bottom' }}>
        </img>
        <div className='lg:w-[40%] order-1 lg:order-2'>
            <p className='text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-[600] tracking-tight leading-[130%]'>Zy.Company <span className='underline font-[600] underline-offset-4 decoration-sky-500'>Overview</span></p>
            <DescDropdown 
                desc='In the digital era and the evolution of the entertainment industry, 
                    zy.company emerges as a technology integrated film producer. 
                    We are committed to creating fresh experiences in filmmaking, 
                    with a focus on innovation and creativity. Through our film products, 
                    we aim to bring inspiration and new opportunities to film enthusiasts 
                    from various backgrounds, while continually collaborating with creative talents.'
                additionalDesc='text-black/70 lg:text-[20px] lg:mb-[3rem]'
            />
            <ButtonHome to={"/about"} additional={"bg-[#0EA5E9] hidden lg:block text-white"}>
                About us 
            </ButtonHome>
        </div>
    </div>
  )
}

export default Overview