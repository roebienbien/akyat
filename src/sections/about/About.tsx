import { FaLeaf } from 'react-icons/fa6';
import { RiUserHeartLine } from 'react-icons/ri';
import { FaBookOpen } from 'react-icons/fa';
import { PerksList } from './perks';
import PerksCard from './PerksCard';

export default function About() {
  return (
    <div
      id='about'
      className=' mt-10 flex flex-col items-center justify-center sm:px-20 md:flex-row md:px-40 lg:h-[100dvh] lg:px-10 xl:px-20 '>
      <div className='px-2 md:mb-0 lg:px-10'>
        <h2 className='text-3xl font-bold lg:text-5xl'>Perks of Exploring with Us.</h2>
        <div className='mt-8 flex w-full justify-center  px-8 lg:hidden'>
          <img
            src='https://images.unsplash.com/photo-1584223719571-778f3f37aa56?auto=format&fit=crop&q=80&w=2187&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='hiker-portrait'
            className=' h-[300px] w-full  rounded-lg object-cover object-top shadow-lg'
          />
        </div>
        <ul className='flex flex-col'>
          {PerksList.map((perk, key) => (
            <PerksCard key={key} {...perk} />
          ))}
        </ul>
      </div>
      <div className='mt-8 hidden w-full justify-center  px-10 md:px-0 lg:flex'>
        <img
          src='https://images.unsplash.com/photo-1584223719571-778f3f37aa56?auto=format&fit=crop&q=80&w=2187&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='hiker-portrait'
          className='  h-[200px] w-full   rounded-lg object-cover object-top  shadow-lg  md:h-[500px] lg:h-[650] xl:h-[600px]'
        />
      </div>
    </div>
  );
}
//https://images.unsplash.com/photo-1602333158618-dd71de539d3b?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGlrZXJ8ZW58MHwxfDB8fHwy
