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

  // const filterTrails = (trails: ITrail[], filter: 'name' | 'relevancy' | 'difficulty') => {
  //   switch (filter) {
  //     case 'name':
  //       return [...trails].sort((a, b) => a.name.localeCompare(b.name));
  //     case 'relevancy':
  //       return [...trails].sort((a, b) => a.relevancy.localeCompare(b.relevancy));
  //     case 'difficulty':
  //       return [...trails].sort((a, b) => a.name.localeCompare(b.difficulty));
  //     default:
  //       return trails;
  //   }
  // };

  const filterByRelevancy = (trails: ITrail[], relevancy: 'popular' | 'new' | 'trending') => {
    return trails.filter((trail) => trail.relevancy === relevancy);
  };

  console.log(filterByRelevancy(trailSample, 'trending'));

  return (
    <div className='flex h-[100dvh] flex-col gap-y-4 p-2 sm:p-4 lg:px-14 '>
      <div className='flex flex-col gap-y-2'>
        <h2 className='text-2xl font-bold lg:text-4xl'>All the trails in one place</h2>
        <h3 className='text-sm text-gray-600'>From beginner trails to advanced climbs, Akyat supports your spiritual journey.</h3>
      </div>
      {/* Carousel navlinks  */}
      <Carousel />
    </div>
  );
}

interface ITrail {
  name: string;
  difficulty: string;
  relevancy: string;
}

const trailSample: ITrail[] = [
  {
    name: 'name1',
    difficulty: 'hard',
    relevancy: 'trending',
  },
  {
    name: 'name2',
    difficulty: 'easy',
    relevancy: 'new',
  },
  {
    name: 'name3',
    difficulty: 'easy',
    relevancy: 'popular',
  },
  {
    name: 'name4',
    difficulty: 'hard',
    relevancy: 'popular',
  },
  {
    name: 'name1',
    difficulty: 'easy',
    relevancy: 'popular',
  },
];
