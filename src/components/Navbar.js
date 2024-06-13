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
        className={`nav-link ${getLinkClass(to, currentPath)} my-auto transition duration-200 hover:text-white hover:scale-110`}
      >
        {children}
      </Link>
    );
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const location = useLocation();
  const [background, setBackground] = useState( location.pathname != '/news' ? 'bg-[#101013]' : 'bg-transparent')

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      if (location.pathname == '/films' && currentScrollPos <= 500) {  
        setBackground('bg-transparent')
      }else{
        setBackground('bg-[#101013]')
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
  }, [prevScrollPos]);

  return (
    <div
      className={`
          navbar w-full 
          px-[1rem] md:px-[3rem] lg:px-[4rem] xl:px-[5rem] 2xl:px-[6rem] 
          py-[1.5rem] fixed left-0 right-0 text-white 
          flex z-10 transition-all duration-700
          ${isScrolled ? '-top-full' : 'top-0'}
          ${background}
      `}
    >
      <p className='text-lg font-bold'>Zy.Company</p>

      <div className='mx-auto text-sm my-auto text-white/60 flex justify-around w-[50%] font-bold'>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/about">About</NavbarLink>
        <NavbarLink to="/films">Latest Films</NavbarLink>
        <NavbarLink to="/faq">FAQs</NavbarLink>
        <NavbarLink to="/career">Career</NavbarLink>
      </div>
    </div>
  );
}

export default Navbar;
