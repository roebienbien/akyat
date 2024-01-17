import { useEffect, useState } from 'react';
import HamburgerButton from './HamburgerButton';
import { Navlinks } from './navlinks';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

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
        isScrolled ? 'bg-[#446e7a] text-white' : 'bg-transparent text-white'
      } duration-7000 absolute top-0 z-50 grid h-16 w-full bg-opacity-100 py-2 transition-all  `}>
      <div className='flex items-center justify-between  px-6 xs:px-10 lg:px-20 '>
        <span className='cursor-pointer text-lg  font-semibold lg:text-2xl'>Akyat</span>
        <ul className='hidden space-x-10 md:flex'>
          {Navlinks.map((item, key) => (
            <li
              key={key}
              className='cursor-pointer border-b-2 border-transparent capitalize text-gray-300 hover:border-white hover:text-white      lg:text-xl'>
              {item.title}
            </li>
          ))}
        </ul>
        <button className='hidden border   px-8 py-2  md:block lg:text-lg'>Login</button>
        <HamburgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </div>
  );
}

export default Navbar;
// #446E7A
