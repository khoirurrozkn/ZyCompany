import React from 'react'
import logo2 from '../../img/foto-home-2.jpg'
import ButtonHome from '../../utils/ButtonHome';

const Overview = () => {
  return (
    <div className='container mx-auto flex flex-wrap justify-evenly items-center'>
        <img src={logo2} 
            alt='By Jakob Owens unsplash'
            className='w-[50%] h-[70vh] object-cover mt-[2rem] brightness-[80%] border'
            style={{ objectPosition: 'bottom' }}>
        </img>
        <div className='w-[40%]'>
            <p className='text-[3rem] font-[500] tracking-tight leading-[130%]'>Company <span className='underline font-[500] underline-offset-4 decoration-sky-500'>Overview</span></p>
            <p className='text-[20px] mt-[30px] text-black/70 mb-[3rem]'>
                In the digital era and the evolution of the entertainment industry, 
                zy.company emerges as a technology integrated film producer. 
                We are committed to creating fresh experiences in filmmaking, 
                with a focus on innovation and creativity. Through our film products, 
                we aim to bring inspiration and new opportunities to film enthusiasts 
                from various backgrounds, while continually collaborating with creative talents.
            </p>
            <ButtonHome to={"/about"} additional={"bg-[#0EA5E9] text-white"}>
                About us 
            </ButtonHome>
        </div>
    </div>
  )
}

export default Overview