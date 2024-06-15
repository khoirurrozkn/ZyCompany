import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Marquee from 'react-fast-marquee';
import Hero from '../sections/home/Hero';
import Overview from '../sections/home/Overview';
import Choice from '../sections/home/Choice';
import Journey from '../sections/home/Journey';
import Director from '../sections/home/Director';


const Home = () => {
  return (
    <div className="mt-[7rem] overflow-hidden lg:mt-[13rem] bg-gradient-to-b from-white to-gray-300 bg-opacity-50">
        <Navbar/>

        <Hero />
        <div className='origin-center rotate-[4deg] md:rotate-[0] lg:rotate-[0] w-[110vw] relative left-[-5%]'>
            <Marquee className='mt-[3.5rem] md:mt-[2rem] mb-[2rem] md:mb-[3rem] lg:mb-[5rem] bg-[#101013] text-white/80 py-3'>
                <p>{ "Overview - ".repeat(17) }</p></Marquee>
        </div>
        
        <Overview />
        <Marquee className='mt-[3.5rem] md:mt-[4.5rem] lg:mt-[7rem] bg-[#101013] text-white/80 py-3'>
            <p>{ "Best Production - ".repeat(10) }</p></Marquee> 
        
        <Choice />
        <Marquee className='mb-[3rem] lg:mb-[6rem] md:mb-[4rem] bg-[#101013] text-white/80 py-3'>
            <p>{ "Journey - ".repeat(17) }</p></Marquee> 
        
        <Journey />
        <div className='origin-center rotate-[-4deg] lg:rotate-[0] md:rotate-[0] w-[110vw] relative left-[-5%]'>
            <Marquee className='mt-[3.5rem] mb-[3.5rem] lg:mt-[6rem] lg:mb-[5rem] bg-[#101013] text-white/80 py-3'>
                <p>{ "Quotes - ".repeat(17) }</p></Marquee>
        </div>

        <Director />
        <Marquee className='mt-[4rem] lg:mt-[6rem] bg-[#101013] text-white/80 py-3'>
            <p>{ "Get in Touch - ".repeat(12) }</p></Marquee>

        <Footer />
    </div>
  )
}

export default Home