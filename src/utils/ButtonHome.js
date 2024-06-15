import React from 'react'
import { Link } from 'react-router-dom'

const ButtonHome = ({to, children, additional}) => {
    return (
        <div className='flex justify-center'>
            <Link to={to} className={`${additional} font-[500] shadow-lg text-center py-4 px-[2rem] lg:py-4 lg:px-[4rem] transition-all hover:scale-[105%] rounded-[30px]`}>
                {children} 
            </Link>
        </div>
    )
}

export default ButtonHome