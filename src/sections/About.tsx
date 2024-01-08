import { BsGear } from 'react-icons/bs';
import { FaCheck, FaLeaf } from 'react-icons/fa6';
import { RiUserHeartLine } from 'react-icons/ri';
import { FaBookOpen } from 'react-icons/fa';

export default function About() {
  const Perks = [
    {
      icon: FaLeaf,
      perk: 'Environmental Stewardship',
      description: `We prioritize eco-friendly practices to minimize our environmental impact. By booking with us, you contribute to responsible tourism and conservation efforts, making your adventure not only memorable but also meaningful for the preservation of these natural wonders.`,
    },
    {
      icon: RiUserHeartLine,
      perk: 'Guided Adventures by the Local Experts',
      description:
        'Our team of local experts not only ensures your safety on trails but also shares stories about the flora, fauna, cultural significance of each location, making your hike a truly enriching experience.',
    },
    {
      icon: FaBookOpen,
      perk: 'Seamless Booking and Customer Support',
      description: `Enjoy a hassle-free booking experience with our user-friendly platform. Whether your'e a solo adventurer or planning a group expedition, our streamlined booking process ensures convenience.`,
    },
  ];
  return (
    <div className=' mt-10 flex flex-col items-center justify-center sm:px-20 md:flex-row md:px-40 lg:h-[100dvh] lg:px-10 '>
      <div className='px-2 md:mb-0 lg:px-10'>
        <h3 className='text-2xl font-bold lg:text-5xl'>Perks of Exploring with Us.</h3>
        <div className='mt-8 flex w-full justify-center  px-10 lg:hidden'>
          <img
            src='https://images.unsplash.com/photo-1584223719571-778f3f37aa56?auto=format&fit=crop&q=80&w=2187&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='hiker-portrait'
            className=' h-[400px] w-full  md:h-[600px]'
          />
        </div>
        <ul className='flex flex-col'>
          {Perks.map((perk, key) => (
            <li key={key} className='mt-8'>
              <div className='flex flex-col items-center px-2  md:flex-row  md:items-start md:space-x-4  '>
                <div className='rounded-full bg-green-500 p-2'>
                  <perk.icon className='fill-white text-sm  md:text-base' />
                </div>
                <div className='mt-1 grid justify-items-center md:mt-0 md:justify-items-start'>
                  <span className='text-sm font-semibold lg:text-2xl'>{perk.perk}</span>
                  <p className='text-justify text-xs text-gray-500 md:mt-2'>{perk.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className='mt-8 hidden w-full justify-center  px-10 md:px-0 lg:flex'>
        <img
          src='https://images.unsplash.com/photo-1584223719571-778f3f37aa56?auto=format&fit=crop&q=80&w=2187&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='hiker-portrait'
          className='  h-[400px] w-full  rounded-lg object-cover shadow-lg md:h-[500px] lg:h-[640px]'
        />
      </div>
    </div>
  );
}
//https://images.unsplash.com/photo-1602333158618-dd71de539d3b?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGlrZXJ8ZW58MHwxfDB8fHwy
