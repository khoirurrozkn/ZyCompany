import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavbarLink = ({ to, additional, isNavTitle, children }) => {
  const location = useLocation();
  const currentPath = location.pathname + location.hash;

  const isSameUrl = () => {
    if (to === '/') {
      return currentPath === '/';
    } else {
      return currentPath.includes(to.split('#')[0]);
    }
  }

  return (
    <HashLink
      to={to}
      smooth
      className={`nav-link ${isSameUrl() && isNavTitle ? 'text-white font-[500] scale-110 ms-[1rem] md:ms-0' : ''} ${additional} my-[1rem] md:my-auto lg:text-sm md:text-sm w-full lg:h-auto md:h-auto transition duration-200 hover:text-white hover:scale-110`}
    >
      {children}
    </HashLink>
  );
}

const handleMouseEnter = (id) => {
  const element = document.querySelector(`#${id}`)
  element.classList.add('lg:block')
}

const handleMouseLeave = (id) => {
  const element = document.querySelector(`#${id}`)
  element.classList.remove('lg:block')
}

const DisplayNav = ({id, toUrl, toName, children}) => {
  return (
    <div className='relative w-full ps-[2rem] md:p-0 lg:w-auto' onMouseEnter={() => handleMouseEnter(id)} onMouseLeave={() => handleMouseLeave(id)}>
      <NavbarLink isNavTitle={true} additional='block text-[1.2rem]' to={toUrl}>{toName}</NavbarLink>
      <div id={id} className='md:hidden w-full lg:w-[200px] lg:absolute lg:pt-[0.5rem] bot-0'>
        <div className='lg:bg-black/90 lg:backdrop-blur rounded-lg lg:border border-gray-500 ms-4 lg:ms-auto lg:p-4 lg:ps-5 lg:pb-[1.5rem] lg:shadow-lg'>
          {children}
        </div>
      </div>
    </div>
  )
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const location = useLocation();
  const [openNav, setOpenNav] = useState(false);
  const [background, setBackground] = useState(location.pathname !== '/films' ? 'bg-[#101013]' : 'bg-transparent');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      if (location.pathname.includes('/films') && currentScrollPos <= 500) {  
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

  const subNavClass = 'block lg:mt-[0.5rem] text-[1rem]'
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
        <p className='text-lg font-bold'>Zy.Company</p>
        <div
          className={`flex md:hidden lg:hidden relative z-10 flex-col justify-between mt-[0.5rem] w-7 h-3 ms-auto cursor-pointer ${openNav ? 'open' : ''}`}
          onClick={() => setOpenNav(prevOpenNav => !prevOpenNav)}
          >
          <div className={`bg-white h-[0.1rem] transform transition duration-300 ${openNav ? 'rotate-[40deg] translate-y-[5px]' : ''}`}></div>
          <div className={`bg-white h-[0.1rem] transform transition duration-300 ${openNav ? 'rotate-[-40deg] translate-y-[-5px]' : ''}`}></div>
        </div>

        <div className={`box-nav mx-auto text-sm my-auto text-white/60 absolute md:static 
            bg-black/90 backdrop-blur md:bg-transparent md:backdrop-blur-none pt-[5rem] md:pt-0 lg:static ${openNav ? 'top-0 h-[100vh]' : 'hidden'} 
            lg:flex md:flex w-[100vw] left-0 flex flex-wrap 
            md:flex-nowrap content-start lg:flex-nowrap justify-around lg:w-[50%] 
            md:w-[50%] lg:h-auto md:h-auto font-bold`}
        >
            <DisplayNav
              id={'nav-home'}
              toUrl={'/'}
              toName={'Home'}
            >
              <NavbarLink additional={subNavClass} to="/#overview">Overview</NavbarLink>
              <NavbarLink additional={subNavClass} to="/#best-production">Best production</NavbarLink>
              <NavbarLink additional={subNavClass} to="/#journey">Journey</NavbarLink>
              <NavbarLink additional={subNavClass} to="/#famous-directors">Famous Directors</NavbarLink>
            </DisplayNav>

            <DisplayNav
              id={'nav-about'}
              toUrl={'/about'}
              toName={'About'}
            >
              <NavbarLink additional={subNavClass} to="/about/#vission-mission">Vission & Mission</NavbarLink>
              <NavbarLink additional={subNavClass} to="/about/#leadership">Leadership</NavbarLink>
            </DisplayNav>

            <DisplayNav
              id={'nav-films'}
              toUrl={'/films'}
              toName={'Films'}
            >
              <NavbarLink additional={subNavClass} to="/films/#latest-films">Latest films</NavbarLink>
            </DisplayNav>

            <div className='w-full ms-[2rem] md:w-auto md:ms-0'>
              <NavbarLink additional='block text-[1.2rem]' to="/faqs">FAQs</NavbarLink> 
            </div>

        </div>
      </div>
  );
}

export default Navbar;
