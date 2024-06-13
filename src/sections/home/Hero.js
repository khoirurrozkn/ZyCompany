import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import logo1 from '../../img/foto-home-1.jpg'
import logoDisneg from '../../img/logo-disnep.png'
import logoTranzTV from '../../img/logo-tranztv.png'
import logoAntimo from '../../img/logo-antimo.png'
import logoDetig from '../../img/logo-detig.png'
import logoRcto from '../../img/logo-rcto.png'
import logoKompus from '../../img/logo-kompus.png'

const Hero = () => {
  return (
    <div>
        <div className='container mx-auto flex justify-between items-center'>
            <h1 className='text-[3.5rem] w-[50%] font-[500] tracking-tight leading-[130%]'>
                <span className='underline font-[500] underline-offset-4 decoration-indigo-500'>Film</span> is the <span className='underline font-[500] underline-offset-4 decoration-[#AC844E]'>Canvas</span> 
                <br></br> 
                of a <span className='underline font-[500] underline-offset-4 decoration-sky-500'>Free Soul</span>
            </h1>
            <div className='w-[60%] flex flex-wrap'>
                <span><b>Zy.Company</b> Greetings</span>
                <span className='ms-auto'><b>-EST</b> 2013</span>
                <p className='text-black/70 mt-[1.1rem]'>
                    Welcome to zy-company, where every film becomes a stage for imagination to shine, 
                    and every scene is a blank canvas for untold stories. Here, we present works that stimulate 
                    the mind, inspire the heart, and celebrate the beauty of unlimited creativity.
                </p>
            </div>
        </div>

        <img src={logo1} 
            alt='By Jakob Owens unsplash'
            className='container mx-auto w-[100%] h-[70vh] object-cover mt-[2rem] brightness-[80%] border'>
        </img>

        <div className='container mx-auto flex justify-between items-center py-[30px]'>
            <div className='font-bold'>Media Coverage <FontAwesomeIcon icon={faArrowRight}/></div> 
            <div className='flex w-[70%] text-lg text-white justify-around'>
                <img src={logoDisneg} alt='disneg' className='aspect-square w-[50px]'></img>
                <img src={logoTranzTV} alt='tranztv' className='aspect-square w-[50px]'></img>
                <img src={logoAntimo} alt='antimo' className='aspect-square w-[50px]'></img>
                <img src={logoDetig} alt='detig' className='aspect-square w-[50px]'></img>
                <img src={logoRcto} alt='rcto' className='aspect-square w-[50px]'></img>
                <img src={logoKompus} alt='kompus' className='aspect-square w-[50px]'></img>
            </div>
        </div>
    </div>
  )
}

export default Hero