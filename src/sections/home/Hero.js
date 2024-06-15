import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import DescDropdown from '../../utils/DescDropdown';

const Hero = () => {
    return (
        <div>
            <div className='container mx-auto flex flex-wrap justify-between items-center'>
                <h1 className='text-[2rem] lg:mb-[1rem] md:text-[2.5rem] lg:text-[3.5rem] md:w-[40%] lg:w-[40%] sm:w-full font-[600] tracking-tight leading-[130%]'>
                    <span className='underline font-[600] underline-offset-4 decoration-indigo-500'>Film</span> is the <span className='underline font-[600] underline-offset-4 decoration-[#AC844E]'>Canvas</span>
                    <br></br>
                    of a <span className='underline font-[600] underline-offset-4 decoration-sky-500'>Free Soul</span>
                </h1>
                <div className='lg:w-[55%] md:w-[55%] flex flex-wrap'>
                    <span className='hidden lg:block'><b >Zy.Company</b> Greetings</span>
                    <span className='ms-auto hidden lg:block'><b>-EST</b> 2013</span>
                    <DescDropdown 
                        desc='Welcome to zy-company, where every film becomes a stage for imagination to shine,
                            and every scene is a blank canvas for untold stories. Here, we present works that stimulate
                            the mind, inspire the heart, and celebrate the beauty of unlimited creativity.'
                        additionalDesc='text-black/70'
                        one={true}
                    />
                </div>
            </div>

            <img src='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718316342/foto-home-1_obwu2r.jpg'
                alt='By Jakob Owens unsplash'
                className='container mx-auto lg:h-[70vh] object-cover mt-[2rem] brightness-[80%]'>
            </img>

            <div className='container mx-auto flex flex-wrap justify-between items-center py-[30px]'>
                <div className='font-[500] w-full lg:w-[30%] md:w-[30%] mt-4 lg:mt-0 text-[12px] lg:text-[1rem]'>Media Coverage <FontAwesomeIcon className='arrow-coverage ms-1' icon={faArrowRight} /></div>
                <div className='flex flex-wrap lg:w-[70%] md:w-[70%] text-lg text-white justify-around'>
                    <img src='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718318755/logo-1_isdmia.png' alt='growth tv' className='aspect-square w-[10%] md:w-[50px] lg:w-[60px] mt-2 lg:mt-0 rounded-lg'></img>
                    <img src='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718319316/logo-8_ijhb23.png' alt='whoosh tv' className='aspect-square w-[10%] md:w-[50px] lg:w-[60px] mt-2 lg:mt-0 rounded-lg'></img>
                    <img src='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718319317/logo-6_vpxhcz.png' alt='caps radio' className='aspect-square w-[10%] md:w-[50px] lg:w-[60px] mt-2 lg:mt-0 rounded-lg'></img>
                    <img src='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718319317/logo-4_hsqfcf.png' alt='rand tv' className='aspect-square w-[10%] md:w-[50px] lg:w-[60px] mt-2 lg:mt-0 rounded-lg'></img>
                    <img src='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718319317/logo-3_gzmnzk.png' alt='radio 007' className='aspect-square w-[10%] md:w-[50px] lg:w-[60px] mt-2 lg:mt-0 rounded-lg'></img>
                    <img src='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718319316/logo-7_hfzwps.png' alt='62 tv' className='aspect-square w-[10%] md:w-[50px] lg:w-[60px] mt-2 lg:mt-0 rounded-lg'></img>
                </div>
            </div>
        </div>
    )
}

export default Hero