import React from 'react';

const ShowFilmHome = ({ logo, logoSet, title, genre, year, additional }) => {
  return (
    <div className={`w-[47%] lg:w-[43.2%] md:w-[45%] my-[1rem] lg:mt-[2rem] ${additional}`}>
      <img
        src={logo}
        srcSet={logoSet}
        alt='By Jakob Owens unsplash'
        className='shadow-lg aspect-square object-cover brightness-[80%]'
        style={{ objectPosition: 'bottom' }}
      />
      <p className='font-[500] text-[1.1rem] md:text-[1.7rem] lg:text-[2.2rem] mt-[0.6rem] mb-[0.3rem] md:my-[1rem]'>
        {title}
      </p>
      <div className='flex md:border-t border-black/25 text-[0.9rem] md:text-[1rem] md:pt-4'>
        <span>{genre}</span>
        <span className='ms-auto'>{year}</span>
      </div>
    </div>
  );
};

export default ShowFilmHome;
