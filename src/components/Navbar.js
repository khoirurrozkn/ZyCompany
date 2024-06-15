import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const getLinkClass = (targetUrl, currentUrl) => {
  return targetUrl === currentUrl ? 'text-white scale-110' : '';
}

const NavbarLink = ({ to, children }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Link
      to={to}
      className={`nav-link ${getLinkClass(to, currentPath)} text-[1.5rem] text-center lg:text-sm md:text-sm w-full h-[3rem] lg:h-auto md:h-auto transition duration-200 hover:text-white hover:scale-110`}
    >
      {children}
    </Link>
  );
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const location = useLocation();
  const [openNav, setOpenNav] = useState(false);
  const [background, setBackground] = useState(location.pathname !== '/news' ? 'bg-[#101013]' : 'bg-transparent');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      if (location.pathname === '/films' && currentScrollPos <= 500) {  
        setBackground('bg-transparent');
      } else {
        setBackground('bg-[#101013]');
      }

      if (currentScrollPos > 130 && !isScrollingUp) {
        setIsScrolled(true);
      } else if (isScrollingUp || currentScrollPos <= 130) {
        setIsScrolled(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, location.pathname]);
  return (
      <div
        className={`
          navbar w-full 
          px-[1rem] md:px-[3rem] lg:px-[4rem] xl:px-[5rem] 2xl:px-[6rem] 
          py-[1rem] md:py-[2rem] lg:py-[1.4rem] fixed left-0 right-0 text-white 
          flex z-10 transition-all duration-700
          ${openNav && 'top-0'}
          ${isScrolled ? '-top-full' : 'top-0'}
          ${background}
        `}
      >
        <p className='text-lg font-bold relative z-10'>Zy.Company</p>
        <div
          className={`flex md:hidden lg:hidden relative z-10 flex-col justify-between mt-[0.5rem] w-7 h-3 ms-auto cursor-pointer ${openNav ? 'open' : ''}`}
          onClick={() => setOpenNav(prevOpenNav => !prevOpenNav)}
          >
          <div className={`bg-white h-[0.1rem] transform transition duration-300 ${openNav ? 'rotate-[40deg] translate-y-[5px]' : ''}`}></div>
          <div className={`bg-white h-[0.1rem] transform transition duration-300 ${openNav ? 'rotate-[-40deg] translate-y-[-5px]' : ''}`}></div>
        </div>

        <div className={`mx-auto text-sm my-auto text-white/60 absolute md:static 
            bg-[#101013] lg:static ${openNav ?  'top-0 h-[100vh]' : 'hidden'} lg:flex md:flex w-[100vw] left-0 flex flex-wrap 
            md:flex-nowrap content-center lg:flex-nowrap justify-around lg:w-[50%] 
            md:w-[50%] lg:h-auto md:h-auto font-bold`
          }>
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/about">About</NavbarLink>
          <NavbarLink to="/films">Latest Films</NavbarLink>
          <NavbarLink to="/faq">FAQs</NavbarLink>
        </div>
      </div>
  );
}

export default Navbar;
