import React from 'react'
import { HashLink } from 'react-router-hash-link'

const ButtonHome = ({to, children, additional}) => {
    return (
        <div className='flex justify-center'>
            <HashLink smooth to={to} className={`${additional} font-[500] shadow-lg text-center py-4 px-[2rem] lg:py-4 lg:px-[4rem] transition-all hover:scale-[105%] rounded-[30px]`}>
                {children} 
            </HashLink>
        </div>
    )
}

export default ButtonHome