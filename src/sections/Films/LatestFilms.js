import React from 'react'
import CardFilms from '../../utils/CardFilms'

const LatestFilms = () => {
  return (
    <div className='container mx-auto'>
        <p className='text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] w-[100%] font-[600] tracking-tight leading-[130%]'>
        Latest <span className='underline font-[600] underline-offset-4 decoration-indigo-500'>Films</span>
        </p>
        <p className='mb-[1rem] lg:mb-[2rem] mt-[0.5rem] md:w-[80%] lg:w-[60%] text-black/80'>
          Discover new stories that we present each year, and follow our journey 
          in delivering works that distinguish Zy.Company in the global film industry
        </p>

        <div className='flex flex-wrap justify-between md:justify-around'>
            <CardFilms
            img="https://res.cloudinary.com/dobjgx7ps/image/upload/v1718523510/foto-about-history-2_jijtwd-ezgif.com-jpg-to-webp-converter_wvbacv.webp"
            title="World War III"
            />
            <CardFilms
            img="https://res.cloudinary.com/dobjgx7ps/image/upload/v1718523510/foto-home-5_g91ffq-ezgif.com-jpg-to-webp-converter_yyhoev.webp"
            title="The Pocong"
            />
            <CardFilms
            img="https://res.cloudinary.com/dobjgx7ps/image/upload/v1718523511/foto-home-3_r9qhsk-ezgif.com-jpg-to-webp-converter_nvxzgl.webp"
            title="Heart Laughs"
            />
            <CardFilms
            img="https://res.cloudinary.com/dobjgx7ps/image/upload/v1718523511/foto-home-4_seobza-ezgif.com-jpg-to-webp-converter_acbqs8.webp"
            title="Love in Bloom"
            />
            <CardFilms
            img="https://res.cloudinary.com/dobjgx7ps/image/upload/v1718523510/foto-home-6_vry8xw-ezgif.com-jpg-to-webp-converter_qjwfjs.webp"
            title="The Last Human"
            />
            <CardFilms
            img="https://res.cloudinary.com/dobjgx7ps/image/upload/v1718523510/foto-about-history-1_chuvyw-ezgif.com-jpg-to-webp-converter_hj2ncr.webp"
            title="The Ghost"
            />
            <CardFilms
            img="https://res.cloudinary.com/dobjgx7ps/image/upload/v1718523513/foto-films-10_h8xlwk-ezgif.com-jpg-to-webp-converter_gfcilq.webp"
            title="Toilet"
            />
            <CardFilms
            img="https://res.cloudinary.com/dobjgx7ps/image/upload/v1718523513/foto-films-11_mb6dyh-ezgif.com-jpg-to-webp-converter_wwprmr.webp"
            title="Hacker"
            />
            <CardFilms
            img="https://res.cloudinary.com/dobjgx7ps/image/upload/v1718523513/foto-films-13_kkv5vp-ezgif.com-jpg-to-webp-converter_xasphi.webp"
            title="Crazy clown"
            />
            <CardFilms
            img="https://res.cloudinary.com/dobjgx7ps/image/upload/v1718523513/foto-films-12_xddjrp-ezgif.com-jpg-to-webp-converter_egvyja.webp"
            title="Lucky man"
            />
            <CardFilms
            img="https://res.cloudinary.com/dobjgx7ps/image/upload/v1718523513/foto-films-14_c9ozde-ezgif.com-jpg-to-webp-converter_ppj2kx.webp"
            title="Lost in the mountain"
            />
            <CardFilms
            img="https://res.cloudinary.com/dobjgx7ps/image/upload/v1718523512/foto-films-15_kxj79l-ezgif.com-jpg-to-webp-converter_tirzca.webp"
            title="Scp 5433"
            />
        </div>

    </div>
  )
}

export default LatestFilms