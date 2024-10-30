import { NavLink, Outlet } from 'react-router-dom';
import Carousel from '../../components/carousel/Carousel';
import TRAILSDATA from './TRAILS_DATA.json';
import heroGuy from '../../assets/heroguy.jpg';
import TrailsProvider from './TrailsContext';
import TrailPage from './TrailPage';
import { useState } from 'react';

export default function Trails() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className='mt-16 flex h-[100dvh] flex-col gap-y-4 p-2 sm:p-4 lg:px-14 '>
      <div className='flex flex-col gap-y-2'>
        <h2 className='text-2xl font-bold lg:text-4xl'>All the trails in one place</h2>
        <h3 className='text-sm text-gray-600'>From beginner trails to advanced climbs, Akyat supports your spiritual journey.</h3>
      </div>
      {/* Carousel navlinks  */}
      <Carousel />
      <TrailPage />
    </div>
  );
}
