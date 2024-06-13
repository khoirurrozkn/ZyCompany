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
    <div className="mt-[13rem] bg-gradient-to-b from-white to-gray-300 bg-opacity-50">
        <Navbar/>

        <Hero />
        <Marquee className='mb-[5rem] mt-[4rem] bg-[#101013] text-white/80 py-3'>
            <p>{ "Overview - ".repeat(16) }</p></Marquee>
        
        <Overview />
        <Marquee className='mt-[7rem] bg-[#101013] text-white/80 py-3'>
            <p>{ "Best Production - ".repeat(11) }</p></Marquee> 
        
        <Choice />
        <Marquee className='mb-[6rem] bg-[#101013] text-white/80 py-3'>
            <p>{ "Journey - ".repeat(18) }</p></Marquee> 
        
        <Journey />
        <Marquee className='mb-[5rem] mt-[6rem] bg-[#101013] text-white/80 py-3'>
            <p>{ "Quotes - ".repeat(20) }</p></Marquee> 

        <Director />
        <Marquee className='mt-[6rem] bg-[#101013] text-white/80 py-3'>
            <p>{ "Get in Touch - ".repeat(13) }</p></Marquee>

        <Footer />
    </div>
  )
}

export default Home