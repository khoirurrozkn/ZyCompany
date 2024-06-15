import React from 'react'
import DirectorCardHome from '../../utils/DirectorCardHome';

const Director = () => {
  return (
    <div className='container mx-auto flex flex-wrap justify-start md:justify-evenly'>
        <p className='text-[2.2rem] md:text-[2.5rem] lg:text-[3rem] lg:mx-[15%] mb-[1rem] lg:mb-[5rem] lg:text-center w-full font-[600] tracking-tight leading-[130%]'>
            <span className='underline font-[600] underline-offset-4 decoration-indigo-500'>Famous Director</span>  Quotes
            Who <span className='underline font-[600] underline-offset-4 decoration-[#AC844E]'>Have Collaborated with Us</span>
        </p>

        <DirectorCardHome
            photo='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718316345/foto-home-7_a2zojk.jpg'
            withIg={true}
            withDropDown={true}
            additionalParent='me-[1rem] md:me-0'
            name={"Steven Spielberg"}
            quot={"Collaborating with Zy.company was incredible. Their dedication to innovation and support for creative visions make them a remarkable partner."}
        /> 
        <DirectorCardHome
            photo='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718316350/foto-home-8_fjqv0s.jpg'
            withIg={true}
            withDropDown={true}
            name={"Christopher Nolan"}
            quot={"Working with Zy.company has been a journey of creative exploration. Their commitment to advancing film technology and storytelling is truly inspiring."}
        /> 
        <DirectorCardHome
            photo='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718316351/foto-home-9_pebxmi.jpg'
            withIg={true}
            withDropDown={true}
            name={"Kathryn Bigelow"}
            quot={"Zy.company's professional and visionary approach blends technology with artistry, elevating every project we've worked on together."}
        />

    </div>
  )
}

export default Director