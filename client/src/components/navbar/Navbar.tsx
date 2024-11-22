import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import akyatLogo from '../../assets/akyat-logo.svg';
import HamburgerButton from '../ui/HamburgerButton';

function Navbar({ isSticky, className }: { isSticky: boolean; className?: string }) {
  // Change navbarColorOnScroll function
  const [isScrolled, setIsScrolled] = useState(false);
  const changeNavBackground = () => {
    window.scrollY >= 1 ? setIsScrolled(true) : setIsScrolled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavBackground);
    return () => {
      window.removeEventListener('scroll', changeNavBackground);
    };
  }, []);

  return (
    <div
      className={twMerge(
        `${isScrolled && 'bg-gray-50 text-black'} ${
          isSticky ? 'fixed' : 'border-b border-gray-300'
        } duration-7000 top-0 z-50 grid h-16 w-full bg-opacity-100 py-2 text-black transition-all`,
        className
      )}
    >
      {/* <div className={`${isScrolled && 'bg-gray-50 text-black'} duration-7000 top-0 z-50 grid h-16 w-full border-b border-gray-400  bg-opacity-100 py-2 text-black transition-all  `}> */}
      <div className="flex items-center justify-between px-6 xs:px-10 lg:px-20">
        {/* <span className='cursor-pointer text-lg font-bold  lg:text-3xl'>Akyat</span> */}
        <Link to="/">
          <img src={akyatLogo} alt="akyat-logo" className="h-10 w-auto" />
        </Link>
        <div className="hidden items-center space-x-10 md:flex">
          {Navlinks.map((item, key) => (
            <Link
              to={`/${item.to}`}
              key={key}
              className="cursor-pointer border-b-2 border-transparent font-semibold capitalize hover:border-black lg:text-lg"
            >
              {item.title}
            </Link>
          ))}
          <div className="flex gap-x-4">
            <Link
              to={'/login'}
              className="flex h-10 w-20 items-center justify-center border border-black font-semibold text-black hover:bg-gray-200 lg:text-base"
            >
              Log in
            </Link>
            <Link
              to={'/register'}
              className="flex h-10 w-20 items-center justify-center border bg-green-600 font-semibold text-white hover:bg-green-700 lg:text-base"
            >
              Sign up
            </Link>
          </div>
          {/* <button className={`hidden border border-black px-8 py-2  md:block lg:text-lg`}>Login</button> */}
        </div>
        {/* <HamburgerButton isOpen={isOpen} toggleMenu={toggleMenu} /> */}
        <HamburgerButton />
      </div>
    </div>
  );
}

export const Navlinks = [
  {
    title: 'home',
    to: '#home',
  },
  {
    title: 'explore',
    to: '#explore',
  },
  {
    title: 'trails',
    to: 'trails',
  },
  {
    title: 'FAQ',
    to: '#faq',
  },
  {
    title: 'About',
    to: '#about',
  },
];

export default Navbar;
