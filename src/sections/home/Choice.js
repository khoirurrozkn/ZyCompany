import React from 'react'
import CardHome from '../../utils/CardHome'

const Choice = () => {
  return (
    <div className='bg-choice bg-fixed'>
        <div className='container mx-auto text-white flex flex-wrap justify-between py-[5rem]'>
            <h1 className='text-[3rem] mb-[3rem] w-[100vw] font-[500] tracking-tight leading-[130%]'>
                Zy.Company <span className='underline font-[500] underline-offset-4 decoration-indigo-500'>The Best</span>
                <br></br> 
                Choice for <span className='underline font-[500] underline-offset-4 decoration-[#AC844E]'>Film Production</span> 
            </h1>
            <CardHome 
                title={"Collaboration with Top Talent"}
                desc={"boasts a network of top film industry talents, including directors, screenwriters, and production designers, ensuring each project is handled by experienced professionals."}
            />
            <CardHome 
                title={"Integrated Production Solutions"}
                desc={"From conception to distribution, zy.company offers comprehensive solutions including pre-production planning, filming, editing, and promotion, all tailored to each project's unique needs."}
            />
            <CardHome 
                title={"Extensive Experience"}
                desc={"With over 10 years in the industry, zy.company is a leader in film production, ensuring each project receives thorough attention and high professionalism from start to finish."}
            />
        </div>
    </div>
  )
}

export default Choice