import React from 'react'
import CardHome from '../../utils/CardHome'

const Choice = () => {
  return (
    <div className='bg-choice bg-fixed py-[3rem] md:py-[4rem] lg:py-[7rem]'>
        <div className='container mx-auto text-white flex flex-wrap justify-between'>
            <h1 className='text-[2rem] md:text-[2.5rem] lg:text-[3rem] mb-[3rem] w-full font-[500] tracking-tight leading-[130%]'>
                Zy.Company 
                <br></br>
                The <span className='underline font-[500] underline-offset-4 decoration-indigo-500'>Best</span> Choice
                <br></br> 
                for <span className='underline font-[500] underline-offset-4 decoration-[#AC844E]'>Film Production</span> 
            </h1>
            <CardHome 
                title={"Collaboration with Top Talent"}
                colorDrop='#AC844E'
                desc={"boasts a network of top film industry talents, including directors, screenwriters, and production designers, ensuring each project is handled by experienced professionals."}
            />
            <CardHome 
                title={"Integrated Production Solutions"}
                colorDrop='#AC844E'
                desc={"From conception to distribution, zy.company offers comprehensive solutions including pre-production planning, filming, editing, and promotion, all tailored to each project's unique needs."}
            />
            <CardHome 
                title={"Extensive Experience"}
                colorDrop='#AC844E'
                desc={"With over 10 years in the industry, zy.company is a leader in film production, ensuring each project receives thorough attention and high professionalism from start to finish."}
            />
        </div>
    </div>
  )
}

export default Choice