import React from 'react'
import logo3 from '../../img/foto-home-3.jpg'
import logo4 from '../../img/foto-home-4.jpg'
import logo5 from '../../img/foto-home-5.jpg'
import logo6 from '../../img/foto-home-6.jpg'
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
            logo={logo3}
            title={"Whispers of the Heart"}
            genre={"Romance, Comedy"}
            year={"2023"}
        />
        <ShowFilmHome 
            logo={logo4}
            title={"Love in Bloom"}
            genre={"Romance, Action"}
            year={"2023"}
        />
        <ShowFilmHome 
            logo={logo5}
            title={"The Pocong"}
            genre={"Horror, Thriller"}
            year={"2023"}
        />
        <ShowFilmHome 
            logo={logo6}
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