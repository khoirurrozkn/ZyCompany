import React from 'react'
import DirectorCardHome from '../../utils/DirectorCardHome';
import logo7 from '../../img/foto-home-7.jpg'
import logo8 from '../../img/foto-home-8.jpg'
import logo9 from '../../img/foto-home-9.jpg'

const Director = () => {
  return (
    <div className='container mx-auto flex flex-wrap justify-evenly'>
        <p className='text-[3rem] mb-[5rem] text-center w-full font-[500] tracking-tight leading-[130%]'>
            <span className='underline font-[500] underline-offset-4 decoration-indigo-500'>Famous Director</span>  Quotes <br></br> 
            Who <span className='underline font-[500] underline-offset-4 decoration-[#AC844E]'>Have Collaborated with Us</span>
        </p>

        <DirectorCardHome
            photo={logo7}
            withIg={true}
            name={"Steven Spielberg"}
            quot={"Collaborating with Zy.company was incredible. Their dedication to innovation and support for creative visions make them a remarkable partner."}
        /> 
        <DirectorCardHome
            photo={logo8}
            withIg={true}
            name={"Christopher Nolan"}
            quot={"Working with Zy.company has been a journey of creative exploration. Their commitment to advancing film technology and storytelling is truly inspiring."}
        /> 
        <DirectorCardHome
            photo={logo9}
            withIg={true}
            name={"Kathryn Bigelow"}
            quot={"Zy.company's professional and visionary approach blends technology with artistry, elevating every project we've worked on together."}
        />

    </div>
  )
}

export default Director