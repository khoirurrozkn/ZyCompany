import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Marquee from 'react-fast-marquee'
import Hero from '../sections/about/Hero'
import VisionMission from '../sections/about/VisionMission'
import Executive from '../sections/about/Executive'

const About = () => {
  return (
    <div className='mt-[7rem] lg:mt-[13rem] md:mt-[10rem] bg-gradient-to-b from-white to-gray-300 bg-opacity-50'>
      <Navbar/>

      <Hero />
      <Marquee className='mt-[3.5rem] md:mt-[5rem] lg:mt-[6rem] bg-[#101013] text-white/80 py-3'>
        <p>{ "Vision & Mission - ".repeat(9) }</p></Marquee>

      <VisionMission />
      <Marquee className='mb-[3rem] md:mb-[4rem] bg-[#101013] text-white/80 py-3'>
        <p>{ "Executif leadership - ".repeat(8) }</p></Marquee>

      <Executive />
      <Marquee className='mt-[3.5rem] md:mt-[5rem] lg:mt-[6rem] bg-[#101013] text-white/80 py-3'>
        <p>{ "Get in Touch - ".repeat(12) }</p></Marquee>

      <Footer/>
    </div>
  )
}

export default About