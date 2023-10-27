import React, { useState } from 'react';

type Props = {
  isOpen: boolean;
  toggleMenu: () => void;
};

const HamburgerButton: React.FC<Props> = ({ isOpen, toggleMenu }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const initialHamburgerLine = `h-1 w-6 rounded-full bg-cyan-500 transition ease transform duration-300`;
  const openHamburger = 'translate-y-2 rotate-45 opacity-50 group-hover:opacity-100';
  const closeHamburger = 'opacity-50 group-hover:opacity-100';

  return (
    <button onClick={toggleMenu} className='group flex flex-col gap-y-1 md:hidden '>
      <div
        className={`${initialHamburgerLine} ${
          // isOpen ? 'translate-y-2 rotate-45 opacity-50 group-hover:opacity-100' : 'opacity-50 group-hover:opacity-100'
          isOpen ? openHamburger : closeHamburger
        }`}
      />
      <div className={`${initialHamburgerLine} ${isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'}`} />
      <div
        className={`${initialHamburgerLine} ${
          isOpen ? '-translate-y-2 -rotate-45 opacity-50 group-hover:opacity-100' : 'opacity-50 group-hover:opacity-100'
        }`}
      />
    </button>
  );
};

export default HamburgerButton;
