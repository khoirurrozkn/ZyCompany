import React from 'react'
import ButtonHome from '../../utils/ButtonHome';
import ShowFilmHome from '../../utils/ShowFilmHome';
import DescDropdown from '../../utils/DescDropdown';

const Journey = () => {
  return (
    <div className='container mx-auto flex flex-wrap justify-evenly items-center'>
        <div className='flex flex-wrap justify-evenly'>
            <DescDropdown
                desc='Our films have been enjoyed by millions of viewers, 
                    captivating audiences with their compelling stories and innovative visuals. 
                    From gripping dramas to heartwarming comedies, our productions have left a lasting 
                    impression on audiences worldwide.'
                additionalDesc='text-black/70'
                additionalParent='order-2 lg:order-none lg:w-[60%] md:order-none md:w-[60%]'
                colorDrop='#0EA5E9'
            />
            <h1 className='text-[2.3rem] md:text-[2.5rem] lg:text-[3rem] sm:w-full w-full lg:w-[30%] md:w-[30%] order-1 md:order-2 lg:order-2 font-[600] tracking-tight leading-[130%]'>
                <span className='underline font-[600] underline-offset-4 decoration-indigo-500'>Journey</span> 
                <br></br>
                Retrospective
            </h1>
        </div>

        <ShowFilmHome
            logo='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718316342/foto-home-3_r9qhsk.jpg'
            title={"Whispers of the Heart"}
            genre={"Romance, Comedy"}
            year={"2023"}
        />
        <ShowFilmHome
            logo='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718316343/foto-home-4_seobza.jpg'
            title={"Love in Bloom"}
            genre={"Romance, Action"}
            year={"2023"}
        />
        <ShowFilmHome
            logo='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718316344/foto-home-5_g91ffq.jpg'
            title={"The Pocong"}
            genre={"Horror, Thriller"}
            additional='hidden lg:block'
            year={"2023"}
        />
        <ShowFilmHome
            logo='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718316344/foto-home-6_vry8xw.jpg'
            title={"The Last Human"}
            genre={"Action, Thriller"}
            additional='hidden lg:block'
            year={"2024"}
        />
        <ButtonHome to={"/about"} additional={"mt-[2rem] lg:mt-[4rem] bg-[#6366F1] text-white"}>
            View More 
        </ButtonHome>
    </div>
  )
}

export default Journey