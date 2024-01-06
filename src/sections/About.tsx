import { BsGear } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa6';

export default function About() {
  const Perks = [
    {
      icon: FaCheck,
      perk: 'Environmental Stewardship',
      description: `We prioritize eco-friendly practices to minimize our environmental impact. By booking with us, you contribute to responsible tourism and conservation efforts, making your adventure not only memorable but also meaningful for the preservation of these natural wonders.`,
    },
    {
      icon: FaCheck,
      perk: 'Guided Adventures by the Local Experts',
      description:
        'Our team of local experts not only ensures your safety on trails but also shares stories about the flora, fauna, cultural significance of each location, making your hike a truly enriching experience.',
    },
    {
      icon: FaCheck,
      perk: 'Seamless Booking and Customer Support',
      description: `Enjoy a hassle-free booking experience with our user-friendly platform. Whether your'e a solo adventurer or planning a group expedition, our streamlined booking process ensures convenience.'`,
    },
  ];
  return (
    <div className=' h-[100dvh] pt-40 text-black md:px-40'>
      <div className='flex min-w-[680px] justify-center space-x-10'>
        <div className='grid place-content-center px-6 md:mb-0 lg:px-10'>
          <h3 className='text-5xl font-semibold'>Perks of Exploring with Us.</h3>
          <ul className='flex flex-col  '>
            {Perks.map((perk, key) => (
              <li key={key} className='mt-8  flex flex-col text-2xl'>
                <div className='flex items-center space-x-4 '>
                  <div className='rounded-full bg-green-500 p-1'>
                    <perk.icon className='fill-white text-sm' />
                  </div>
                  <span>{perk.perk}</span>
                </div>
                <p className='pl-10 text-justify text-xs text-gray-500'>{perk.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <img
          src='https://images.unsplash.com/photo-1584223719571-778f3f37aa56?auto=format&fit=crop&q=80&w=2187&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='hiker-portrait'
          className=' h-[450px] w-auto md:h-[600px]'
        />
      </div>
    </div>
  );
}
//https://images.unsplash.com/photo-1602333158618-dd71de539d3b?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGlrZXJ8ZW58MHwxfDB8fHwy
