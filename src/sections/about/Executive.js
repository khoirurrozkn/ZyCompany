import React from 'react'
import DirectorCardHome from '../../utils/DirectorCardHome'

const Executive = () => {
  return (
    <div className='container mx-auto'>
        <h1 className='text-[3.5rem] font-[500] text-center'>
        <span className='underline font-[500] underline-offset-4 decoration-indigo-500'>Executive</span> Leadership
        </h1>
        <p className='text-black/80 text-center'>
        Our senior executives at the film production company bring tremendous experience,
        <br></br> 
        visionary thinking, and a shared commitment to excellence, creativity,
        <br></br>
        and innovation in the day-to-day operations of the company.
        </p>
        
        <div className='flex flex-wrap justify-evenly mt-[3.5rem]'>
        <DirectorCardHome
            additional="object-top"
            photo='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718316326/foto-about-1_rww8vw.jpg'
            name="Alexander Muller"
            quot="Chief Executive Officer"
        /> 
        <DirectorCardHome
            additional="object-top"
            photo='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718316327/foto-about-2_xkbipd.jpg'
            name="Henrik Olsen"
            quot="Chief Commercial Officer"
        />
        <DirectorCardHome
            additional="object-top"
            photo='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718316326/foto-about-3_tgy2i2.jpg'
            name="Lucas Schmidt"
            quot="Chief Financial Officer"
        />
        <DirectorCardHome
            additional="object-top mt-[3rem]"
            photo='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718316326/foto-about-4_hepsxd.jpg'
            name="Jan Novak"
            quot="Chief Operating Officer"
        />
        <DirectorCardHome
            additional="object-top mt-[3rem]"
            photo='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718316327/foto-about-5_gum5lg.jpg'
            name="Viktor Petrov"
            quot="Chief Technology Officer"
        />
        <DirectorCardHome
            additional="object-top mt-[3rem]"
            photo='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718316327/foto-about-6_e4pqz7.jpg'
            name="Sophie Dupont"
            quot="Chief Marketing Officer"
        />
        </div>
    </div>
  )
}

export default Executive