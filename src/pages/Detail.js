import React from 'react'
import Navbar from '../components/Navbar'
import Marquee from 'react-fast-marquee'
import Footer from '../components/Footer'

const Detail = () => {
  return (
    <div className='mt-[7rem] lg:mt-[13rem] md:mt-[10rem] bg-gradient-to-b from-white to-gray-300 bg-opacity-50'>
        <Navbar/>

        <p className='container mx-auto text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] font-[600] tracking-tight leading-[130%]'>There are no details because this is only a dummy project.</p>
        <Marquee className='mt-[3.5rem] md:mt-[5rem] lg:mt-[6rem] bg-[#101013] text-white/80 py-3'>
        <p>{ "Get in Touch - ".repeat(12) }</p></Marquee>

        <Footer/>
    </div>
  )
}

export default Detail