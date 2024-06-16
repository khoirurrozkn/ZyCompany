import React from 'react'
import DirectorCardHome from '../../utils/DirectorCardHome'
import DescDropdown from '../../utils/DescDropdown'

const Executive = () => {
  return (
    <div className='container mx-auto'>
        <h1 className='text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] font-[600] md:text-center'>
        <span className='underline font-[600] underline-offset-4 decoration-indigo-500'>Executive</span> Leadership
        </h1>
        <DescDropdown
            desc='Our senior executives at the film production company bring tremendous experience,
            visionary thinking, and a shared commitment to excellence, creativity,
            and innovation in the day-to-day operations of the company.'
                colorDrop='#6366F1'
                additionalDesc='text-black/80 md:text-center md:px-[10%]'
        />
        
        <div className='flex flex-wrap justify-evenly md:mt-[1rem] lg:mt-[2rem]'>
            <DirectorCardHome
                additionalImg="object-top"
                photo='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718523513/foto-about-1_zdwj7i.webp'
                name="Alexander Muller"
                quot="Chief Executive Officer"
            /> 
            <DirectorCardHome
                photo='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718523513/foto-about-2_xkbipd-ezgif.com-jpg-to-webp-converter_s0jg09.webp'
                name="Henrik Olsen"
                quot="Chief Commercial Officer"
            />
            <DirectorCardHome
                additionalImg="object-top"
                photo='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718523512/foto-about-3_tgy2i2-ezgif.com-jpg-to-webp-converter_xpumuw.webp'
                name="Lucas Schmidt"
                quot="Chief Financial Officer"
            />
            <DirectorCardHome
                additionalImg="object-top"
                photo='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718523512/foto-about-4_hepsxd-ezgif.com-jpg-to-webp-converter_enkorg.webp'
                name="Jan Novak"
                quot="Chief Operating Officer"
            />
            <DirectorCardHome
                additionalImg="object-top"
                photo='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718523512/foto-about-5_gum5lg-ezgif.com-jpg-to-webp-converter_u18zov.webp'
                name="Viktor Petrov"
                quot="Chief Technology Officer"
            />
            <DirectorCardHome
                additionalImg="object-top"
                photo='https://res.cloudinary.com/dobjgx7ps/image/upload/v1718523512/foto-about-6_e4pqz7-ezgif.com-jpg-to-webp-converter_gmdt9v.webp'
                name="Sophie Dupont"
                quot="Chief Marketing Officer"
            />
        </div>
    </div>
  )
}

export default Executive