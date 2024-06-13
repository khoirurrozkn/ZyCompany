import React from 'react'
import foto1 from '../../img/foto-about-1.jpg'
import foto2 from '../../img/foto-about-2.jpg'
import foto3 from '../../img/foto-about-3.jpg'
import foto4 from '../../img/foto-about-4.jpg'
import foto5 from '../../img/foto-about-5.jpg'
import foto6 from '../../img/foto-about-6.jpg'
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
            photo={foto1}
            name="Alexander Muller"
            quot="Chief Executive Officer"
        /> 
        <DirectorCardHome
            additional="object-top"
            photo={foto2}
            name="Henrik Olsen"
            quot="Chief Commercial Officer"
        />
        <DirectorCardHome
            additional="object-top"
            photo={foto3}
            name="Lucas Schmidt"
            quot="Chief Financial Officer"
        />
        <DirectorCardHome
            additional="object-top mt-[3rem]"
            photo={foto4}
            name="Jan Novak"
            quot="Chief Operating Officer"
        />
        <DirectorCardHome
            additional="object-top mt-[3rem]"
            photo={foto5}
            name="Viktor Petrov"
            quot="Chief Technology Officer"
        />
        <DirectorCardHome
            additional="object-top mt-[3rem]"
            photo={foto6}
            name="Sophie Dupont"
            quot="Chief Marketing Officer"
        />
        </div>
    </div>
  )
}

export default Executive