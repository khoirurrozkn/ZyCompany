import React from 'react'
import ButtonHome from '../../utils/ButtonHome';
import ShowFilmHome from '../../utils/ShowFilmHome';

const Journey = () => {
  return (
    <div className='container mx-auto flex flex-wrap justify-evenly items-center'>
        <p className='text-black/70 w-[60%] mt-[1.1rem]'>
            Our films have been enjoyed by millions of viewers, 
            captivating audiences with their compelling stories and innovative visuals. 
            From gripping dramas to heartwarming comedies, our productions have left a lasting 
            impression on audiences worldwide.
        </p>
        <h1 className='text-[3rem] w-[30%] font-[500] tracking-tight leading-[130%]'>
            <span className='underline font-[500] underline-offset-4 decoration-indigo-500'>Journey</span> 
            <br></br>
            Retrospective
        </h1>

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
            year={"2023"}
        />
        <ShowFilmHome 
            logo='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718316344/foto-home-6_vry8xw.jpg'
            title={"The Last Human"}
            genre={"Action, Thriller"}
            year={"2024"}
        />
        <ButtonHome to={"/about"} additional={"mt-[4rem] bg-[#6366F1] text-white"}>
            View More 
        </ButtonHome>
    </div>
  )
}

export default Journey