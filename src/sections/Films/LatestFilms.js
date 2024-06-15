import React from 'react'
import CardFilms from '../../utils/CardFilms'

const LatestFilms = () => {
  return (
    <div className='container mx-auto'>
        <p className='text-[3.5rem] w-[100%] font-[600] tracking-tight leading-[130%]'>
        Latest <span className='underline font-[600] underline-offset-4 decoration-indigo-500'>Films</span>
        </p>
        <p className='mb-[2rem] mt-[0.5rem] w-[60%] text-black/80'>
        Discover new stories that we present each year, and follow our journey 
        in delivering works that distinguish Zy.Company in the global film industry
        </p>

        <div className='flex flex-wrap justify-around'>
            <CardFilms
            img="https://res.cloudinary.com/dobjgx7ps/image/upload/v1718316334/foto-about-history-2_jijtwd.jpg"
            title="World War III"
            />
            <CardFilms
            img="https://res.cloudinary.com/dobjgx7ps/image/upload/v1718316344/foto-home-5_g91ffq.jpg"
            title="The Pocong"
            />
            <CardFilms
            img="https://res.cloudinary.com/dobjgx7ps/image/upload/v1718316342/foto-home-3_r9qhsk.jpg"
            title="Heart Laughs"
            />
            <CardFilms
            img="https://res.cloudinary.com/dobjgx7ps/image/upload/v1718316343/foto-home-4_seobza.jpg"
            title="Love in Bloom"
            />
            <CardFilms
            img="https://res.cloudinary.com/dobjgx7ps/image/upload/v1718316344/foto-home-6_vry8xw.jpg"
            title="The Last Human"
            />
            <CardFilms
            img="https://res.cloudinary.com/dobjgx7ps/image/upload/v1718316334/foto-about-history-1_chuvyw.jpg"
            title="The Ghost"
            />
            <CardFilms
            img="https://res.cloudinary.com/dobjgx7ps/image/upload/v1718318754/foto-films-10_h8xlwk.jpg"
            title="Toilet"
            />
            <CardFilms
            img="https://res.cloudinary.com/dobjgx7ps/image/upload/v1718318755/foto-films-11_mb6dyh.jpg"
            title="Programmer"
            />
            <CardFilms
            img="https://res.cloudinary.com/dobjgx7ps/image/upload/v1718318755/foto-films-13_kkv5vp.jpg"
            title="Crazy clown"
            />
            <CardFilms
            img="https://res.cloudinary.com/dobjgx7ps/image/upload/v1718318755/foto-films-12_xddjrp.jpg"
            title="Lucky man"
            />
            <CardFilms
            img="https://res.cloudinary.com/dobjgx7ps/image/upload/v1718318756/foto-films-14_c9ozde.jpg"
            title="Lost in the mountain"
            />
            <CardFilms
            img="https://res.cloudinary.com/dobjgx7ps/image/upload/v1718318753/foto-films-15_kxj79l.jpg"
            title="Scp 5433"
            />
        </div>

    </div>
  )
}

export default LatestFilms