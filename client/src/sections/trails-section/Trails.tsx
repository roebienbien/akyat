import { NavLink, Outlet } from 'react-router-dom';
import Carousel from '../../components/carousel/Carousel';
import TRAILSDATA from './TRAILS_DATA.json';
import heroGuy from '../../assets/heroguy.jpg';

export default function Trails() {
  // const filterByRelevancy = (trails: ITrail[], relevancy: 'popular' | 'new' | 'trending') => {
  //   return trails.filter((trail) => trail.relevancy === relevancy);
  // };

  const filterByRelevancy = (trails: ITrail[], relevancy: 'popular' | 'new' | 'trending') => {
    const filteredTrail = trails.filter((trail) => trail.relevancy === relevancy);
    const defaultTrail = {
      name: 'name1',
      difficulty: 'easy',
      relevancy: relevancy,
    };

    while (filteredTrail.length <= 12) {
      filteredTrail.push({ ...defaultTrail });
    }
    return filteredTrail;
  };

  console.log(filterByRelevancy(trailSample, 'new'));

  console.log(filterByRelevancy(trailSample, 'trending').length);

  return (
    <div className='mt-16 flex h-[100dvh] flex-col gap-y-4 p-2 sm:p-4 lg:px-14 '>
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
