import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Marquee from 'react-fast-marquee'
import Hero from '../sections/Films/Hero'
import LatestFilms from '../sections/Films/LatestFilms'

const Films = () => {
  return (
    <div className='bg-gradient-to-b from-white to-gray-300 bg-opacity-50'>
        <Navbar />

        <Hero />
        <Marquee className='bg-[#101013] mb-[5rem] text-white/80 py-3'>
          <p id='latest-films'>{ "Latest films - ".repeat(13) }</p></Marquee>

        <LatestFilms />
        <Marquee className='mt-[6rem] bg-[#101013] text-white/80 py-3'>
          <p>{ "Get in Touch - ".repeat(12) }</p></Marquee>

        <Footer />
    </div>
  )
}

export default Films