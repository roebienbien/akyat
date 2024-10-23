import { NavLink, Outlet } from 'react-router-dom';
import Carousel from '../../components/carousel/Carousel';
import TRAILSDATA from './TRAILS_DATA.json';

export default function Trails() {
  /*
  // FILTER FUNCTION
   function filterByDifficulty(trails: ITrail[], difficultyFilter: string) {
    return trails.filter((trail) => trail.difficulty.toLowerCase() === difficultyFilter.toLowerCase());
  }
  console.log(TRAILSDATA);

  console.log('Search');
  console.log(filterByDifficulty(TRAILSDATA, 'blue'));
 */
  return (
    <div className='flex h-[100dvh] flex-col gap-y-4 p-2 sm:p-4 lg:px-14 '>
      <div className='flex flex-col gap-y-2'>
        <h2 className='text-2xl font-bold lg:text-4xl'>All the trails in one place</h2>
        <h3 className='text-sm text-gray-600'>From beginner trails to advanced climbs, Akyat supports your spiritual journey.</h3>
      </div>
      {/* Carousel navlinks  */}
      <div className='mb-2 flex gap-x-2'>
        {TrailNavLinks.map((link, index) => (
          // SHOULD BE NAVLINKS
          // <button key={index} className='cursor-pointer rounded-lg bg-gray-200 p-2 hover:bg-gray-700 hover:text-white active:bg-gray-700 active:text-white'>
          //   {link.name}
          // </button>
          <NavLink
            to={link.src}
            key={index}
            className={({ isActive }) => {
              return isActive ? 'cursor-pointer rounded-lg bg-gray-700 p-2 text-white ' : 'rounded-lg p-2 hover:bg-gray-800 hover:text-white';
            }}
            onClick={(event) => {
              if (link.disable) event.preventDefault();
            }}>
            {link.name}
          </NavLink>
        ))}
      </div>
      <Outlet />
      <Carousel />
    </div>
  );
}

const TrailNavLinks = [
  { name: 'Most Popular', src: '/', disable: false },
  { name: 'New', src: '/new', disable: true },
  { name: 'Trending', src: '/trending', disable: true },
];

interface ITrail {
  name: string;
  price: number;
  difficulty: string;
}

const trailSample: ITrail[] = [
  {
    name: 'name1',
    price: 399,
    difficulty: 'hard',
  },
  {
    name: 'name2',
    price: 1999,
    difficulty: 'easy',
  },
  {
    name: 'name3',
    price: 299,
    difficulty: 'easy',
  },
  {
    name: 'name4',
    price: 399,
    difficulty: 'hard',
  },
  {
    name: 'name1',
    price: 399,
    difficulty: 'easy',
  },
];
