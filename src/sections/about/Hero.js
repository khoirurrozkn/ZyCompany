import React from 'react'

const Hero = () => {
  return (
    <div className='container mx-auto'>

        <h1 className='text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] w-[100%] font-[600] tracking-tight leading-[130%] mb-[2rem] md:mb-[3rem] lg:mb-[5rem]'>
        <span className='underline font-[600] underline-offset-4 decoration-indigo-500'>History</span> is the Compass to Our
        <br></br> 
        <span className='underline font-[600] underline-offset-4 decoration-sky-500'>Collective Journey</span>
        </h1>

        <div className="flex flex-wrap md:justify-around">
            <div className="w-full md:w-[45%] lg:w-[32%] lg:h-[17rem] flex md:justify-center items-center mb-[0.5rem] md:mb-0 lg:mb-0">
                <p className='md:text-center'>
                    <span className='font-[600] mb-[0.5rem] inline-block'>We Start - </span>January 2013
                    <br></br>
                    <span className='md:text-[2rem] lg:text-[3rem]'>Development</span>
                    <br></br>
                    <span className='me-[1.5rem] text-black/70'>20 film made</span>
                    <span className='text-black/70'>Earn $400,000++</span>
                </p>
            </div>
            <img alt='unsplash' src='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718316334/foto-about-history-2_jijtwd.jpg' className="shadow-lg bg-black brightness-90 object-cover object-top me-[5%] md:me-0 w-[45%] md:w-[50%] lg:w-[32%] h-[13rem] md:h-[17rem]"></img>
            <img alt='unsplash' src='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718316334/foto-about-history-1_chuvyw.jpg' className="shadow-lg md:hidden lg:block bg-black brightness-90 object-cover w-[45%] lg:w-[32%] h-[13rem] md:h-[17rem]"></img>
        </div>

        <div className="flex flex-wrap md:justify-around mt-[2rem] md:mt-[1rem]">
            <img alt='unsplash' src='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718316335/foto-about-history-5_cewugh.jpg' className="shadow-lg order-2 lg:order-none bg-black brightness-90 object-cover me-[5%] md:me-0 w-[45%] md:w-[50%] lg:w-[32%] h-[13rem] md:h-[17rem] md:hidden lg:block"></img>
            <div className="order-1 lg:order-none w-full md:w-[45%] lg:w-[32%] lg:h-[17rem] flex md:justify-center items-center mb-[0.5rem] md:mb-0 lg:mb-0">
                <p className='md:text-center'>
                    <span className='font-[600] mb-[0.5rem] inline-block'>Expand - </span>January 2018
                    <br></br>
                    <span className='text-[1.3rem] md:text-[2rem] lg:text-[3rem]'>We Grow Up</span>
                    <br></br>
                    <span className='me-[1.5rem] text-black/70'>8 Office</span>
                    <span className='text-black/70'>110 Employee</span>
                </p>
            </div>
            <img alt='unsplash' src='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718316335/foto-about-history-4_susqwx.jpg' className="order-3 lg:order-none bg-black brightness-[80%] object-cover object-left w-[45%] md:w-[50%] lg:w-[32%] h-[13rem] md:h-[17rem]"></img>
        </div>

        <div className="flex flex-wrap md:justify-around mt-[2rem] md:mt-[1rem]"> 
            <img alt='unsplash' src='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718316337/foto-about-history-6_jay3h7.jpg' className="shadow-lg order-2 md:order-none bg-black brightness-90 object-cover me-[5%] md:me-0 w-[45%] md:w-[32%] h-[13rem] md:h-[17rem]"></img>
            <img alt='unsplash' src='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718316336/foto-about-history-7_gbkf3c.jpg' className="shadow-lg order-3 md:order-none bg-black brightness-90 object-cover w-[45%] md:w-[32%] h-[13rem] md:h-[17rem]"></img>
            <div className="order-1 md:order-none w-full md:w-[32%] md:h-[17rem] md:px-[1rem] flex justify-center items-center mb-[0.5rem] md:mb-0 lg:mb-0">
                <p>
                    <span className='font-[600]'>Team Goals - </span>January 2023
                    <br></br>
                    <span className='text-black/70 mt-[0.5rem] md:mt-[1rem] block'>
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