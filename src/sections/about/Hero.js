import React from 'react';

const Hero = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] font-[600] tracking-tight leading-[130%] mb-[2rem] md:mb-[3rem] lg:mb-[5rem]'>
        <span className='underline font-[600] underline-offset-4 decoration-indigo-500'>History</span> is the Compass to Our
        <br />
        <span className='underline font-[600] underline-offset-4 decoration-sky-500'>Collective Journey</span>
      </h1>

      {/* First Row */}
      <div className="flex flex-wrap md:justify-around">
        <div className="w-full md:w-[45%] lg:w-[32%] lg:h-[17rem] flex md:justify-center items-center mb-[0.5rem] md:mb-0 lg:mb-0">
          <p className='md:text-center'>
            <span className='font-[600] mb-[0.5rem] inline-block'>We Start - </span>January 2013
            <br />
            <span className='md:text-[2rem] lg:text-[3rem]'>Development</span>
            <br />
            <span className='me-[1.5rem] text-black/70'>20 film made</span>
            <span className='text-black/70'>Earn $400,000++</span>
          </p>
        </div>
        <img alt='unsplash' src='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718523510/foto-about-history-2_jijtwd-ezgif.com-jpg-to-webp-converter_wvbacv.webp' className="shadow-lg bg-black brightness-90 object-cover object-top me-[5%] md:me-0 w-[45%] md:w-[50%] lg:w-[32%] h-[13rem] md:h-[17rem]" />
        <img alt='unsplash' src='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718523510/foto-about-history-1_chuvyw-ezgif.com-jpg-to-webp-converter_hj2ncr.webp' className="shadow-lg md:hidden lg:block bg-black brightness-90 object-cover w-[45%] lg:w-[32%] h-[13rem] md:h-[17rem]" />
      </div>

      {/* Second Row */}
      <div className="flex flex-wrap md:justify-around mt-[2rem] md:mt-[1rem]">
        <img alt='unsplash' src='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718523513/foto-about-history-5_cewugh-ezgif.com-jpg-to-webp-converter_wgg2zp.webp' className="shadow-lg order-2 lg:order-none bg-black brightness-90 object-cover me-[5%] md:me-0 w-[45%] md:w-[50%] lg:w-[32%] h-[13rem] md:h-[17rem] md:hidden lg:block" />
        <div className="order-1 lg:order-none w-full md:w-[45%] lg:w-[32%] lg:h-[17rem] flex md:justify-center items-center mb-[0.5rem] md:mb-0 lg:mb-0">
          <p className='md:text-center'>
            <span className='font-[600] mb-[0.5rem] inline-block'>Expand - </span>January 2018
            <br />
            <span className='text-[1.3rem] md:text-[2rem] lg:text-[3rem]'>We Grow Up</span>
            <br />
            <span className='me-[1.5rem] text-black/70'>8 Office</span>
            <span className='text-black/70'>110 Employee</span>
          </p>
        </div>
        <img alt='unsplash' src='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718523510/foto-about-history-4_susqwx-ezgif.com-jpg-to-webp-converter_z3eebk.webp' className="order-3 lg:order-none bg-black brightness-[80%] object-cover object-left w-[45%] md:w-[50%] lg:w-[32%] h-[13rem] md:h-[17rem]" />
      </div>

      {/* Third Row */}
      <div className="flex flex-wrap md:justify-around mt-[2rem] md:mt-[1rem]">
        <img alt='unsplash' src='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718523514/foto-about-history-6_jay3h7-ezgif.com-jpg-to-webp-converter_nzxrwv.webp' className="shadow-lg order-2 md:order-none bg-black brightness-90 object-cover me-[5%] md:me-0 w-[45%] md:w-[32%] h-[13rem] md:h-[17rem]" />
        <img alt='unsplash' src='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718523513/foto-about-history-7_gbkf3c-ezgif.com-jpg-to-webp-converter_oxdacv.webp' className="shadow-lg order-3 md:order-none bg-black brightness-90 object-cover w-[45%] md:w-[32%] h-[13rem] md:h-[17rem]" />
        <div className="order-1 md:order-none w-full md:w-[32%] md:h-[17rem] md:px-[1rem] flex justify-center items-center mb-[0.5rem] md:mb-0 lg:mb-0">
          <p>
            <span className='font-[600]'>Team Goals - </span>January 2023
            <br />
            <span className='text-black/70 mt-[0.5rem] md:mt-[1rem] block'>
              We have achieved our primary goal by producing films that are not only commercially
              successful but also widely recognized by critics and fans alike
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
