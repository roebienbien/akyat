import { useEffect, useState } from 'react';
import HamburgerButton from '../ui/HamburgerButton';
import { Navlinks } from './navlinks';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

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
      className={`${
        isScrolled && 'bg-gray-50 text-black'
      } duration-7000 fixed top-0 z-50 grid h-16 w-full  bg-opacity-100 py-2 text-black transition-all  `}>
      <div className='flex items-center justify-between  px-6 xs:px-10 lg:px-20 '>
        <span className='cursor-pointer text-lg font-bold  lg:text-3xl'>Akyat</span>
        <ul className='hidden space-x-10 md:flex'>
          {Navlinks.map((item, key) => (
            <li
              key={key}
              className='cursor-pointer  border-b-2 border-transparent capitalize  hover:border-black  lg:text-xl'>
              <a href={item.src}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button className={`hidden border  border-black px-8 py-2  md:block lg:text-lg`}>Login</button>
        <HamburgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </div>
  );
}

export default Navbar;
