import { useState } from "react";

// type Props = {
//   isOpen: boolean;
//   toggleMenu: () => void;
// };

// const HamburgerButton: React.FC<Props> = () => {
const HamburgerButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const color = "bg-green-600";
  const initialHamburgerLine = `${color} h-1 w-6 rounded-full  transition ease transform duration-300`;
  const openHamburger =
    "translate-y-2 rotate-45 opacity-50 group-hover:opacity-100";
  const closeHamburger = "opacity-50 group-hover:opacity-100";

  return (
    <button
      onClick={() => setIsMenuOpen((prevState) => !prevState)}
      className="group flex flex-col gap-y-1 md:hidden "
    >
      <div
        className={`${initialHamburgerLine} ${isMenuOpen ? openHamburger : closeHamburger}`}
      />
      <div
        className={`${initialHamburgerLine} ${isMenuOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`}
      />
      <div
        className={`${initialHamburgerLine} ${isMenuOpen ? "-translate-y-2 -rotate-45 opacity-50 group-hover:opacity-100" : "opacity-50 group-hover:opacity-100"}`}
      />
    </button>
  );
};

export default HamburgerButton;

//   const initialHamburgerLine = `h-1 w-6 rounded-full bg-black transition ease transform duration-300`;
//   const openHamburger = 'translate-y-2 rotate-45 opacity-50 group-hover:opacity-100';
//   const closeHamburger = 'opacity-50 group-hover:opacity-100';

//   return (
//     <button onClick={() => setIsMenuOpen((prevState) => !prevState)} className='group flex flex-col gap-y-1 md:hidden '>
//       <div className={`${initialHamburgerLine} ${isMenuOpen ? openHamburger : closeHamburger}`} />
//       <div className={`${initialHamburgerLine} ${isMenuOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'}`} />
//       <div className={`${initialHamburgerLine} ${isMenuOpen ? '-translate-y-2 -rotate-45 opacity-50 group-hover:opacity-100' : 'opacity-50 group-hover:opacity-100'}`} />
//     </button>
//   );
// };
