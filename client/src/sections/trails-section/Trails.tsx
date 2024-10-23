import { NavLink } from 'react-router-dom';
import Carousel from '../../components/carousel/Carousel';

export default function Trails() {
  return (
    <div className='flex h-[100dvh] flex-col gap-y-4 p-2 sm:p-4 lg:px-14 '>
      <div className='flex flex-col gap-y-2'>
        <h2 className='text-2xl font-bold'>All the trails in one place</h2>
        <h3 className='text-sm text-gray-600'>From beginner trails to advanced climbs, Akyat supports your spiritual journey</h3>
      </div>
      {/* Carousel navlinks  */}
      <div className='mb-2 flex gap-x-2'>
        {TrailNavLinks.map((link, index) => (
          <NavLink to={link.src} key={index} className='cursor-pointer rounded-lg bg-gray-200 p-2 hover:bg-gray-700 hover:text-white active:bg-gray-700 active:text-white'>
            {link.name}
          </NavLink>
        ))}
      </div>
      <Carousel />
    </div>
  );
}

const TrailNavLinks = [
  { name: 'Most Popular', src: '/popular' },
  { name: 'New', src: '/new' },
  { name: 'Trending', src: '/trending' },
];
