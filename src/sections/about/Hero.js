import React from 'react'
import history1 from '../../img/foto-about-history-1.jpg'
import history2 from '../../img/foto-about-history-2.jpg'
import history4 from '../../img/foto-about-history-4.jpg'
import history5 from '../../img/foto-about-history-5.jpg'
import history6 from '../../img/foto-about-history-6.jpg'
import history7 from '../../img/foto-about-history-7.jpg'

const Hero = () => {
  return (
    <div className='container mx-auto'>

        <h1 className='text-[3.5rem] w-[100%] font-[500] tracking-tight leading-[130%] mb-[5rem]'>
        <span className='underline font-[500] underline-offset-4 decoration-indigo-500'>History</span> is the Compass to Our
        <br></br> 
        <span className='underline font-[500] underline-offset-4 decoration-sky-500'>Collective Journey</span>
        </h1>

        <div className="flex justify-around">
        <div className="w-[32%] h-[17rem] flex justify-center items-center">
            <p>
            <span className='font-[600]'>We Start - </span>January 2013
            <br></br>
            <span className='text-[3rem]'>Development</span>
            <br></br>
            <span className='me-[1.5rem] text-black/70'>20 film made</span>
            <span className='text-black/70'>Earn $400,000++</span>
            </p>
        </div>
        <img alt='unsplash' src={history2} className="bg-black brightness-90 object-cover object-top w-[32%] h-[17rem]"></img>
        <img alt='unsplash' src={history1} className="bg-black brightness-90 object-cover w-[32%] h-[17rem]"></img>
        </div>

        <div className="flex justify-around mt-[1rem]">
        <img alt='unsplash' src={history5} className="bg-black brightness-90 object-cover w-[32%] h-[17rem]"></img>
        <div className="w-[32%] h-[17rem] flex justify-center items-center">
            <p>
            <span className='font-[600]'>Expand - </span>January 2018
            <br></br>
            <span className='text-[3rem]'>We Grow Up</span>
            <br></br>
            <span className='me-[1.5rem] text-black/70'>8 Office</span>
            <span className='text-black/70'>110 Employee</span>
            </p>
        </div>
        <img alt='unsplash' src={history4} className="bg-black brightness-[80%] object-cover w-[32%] h-[17rem]"></img>
        </div>

        <div className="flex justify-around mt-[1rem]"> 
        <img alt='unsplash' src={history6} className="bg-black brightness-90 object-cover w-[32%] h-[17rem]"></img>
        <img alt='unsplash' src={history7} className="bg-black brightness-90 object-cover w-[32%] h-[17rem]"></img>
        <div className="w-[32%] h-[17rem] px-[1rem] flex justify-center items-center">
            <p>
            <span className='font-[600]'>Team Goals - </span>January 2023
            <br></br>
            <span className='text-black/70 mt-[1rem] block'>
                We have achieved our primary goal by producing films that are not only commercially 
                successful but also widely recognized by critics and fans alike
            </span>
            </p>
        </div>
        </div>

    </div>
  )
}

export default Hero