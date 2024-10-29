import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaGaugeHigh, FaMountain, FaRegClock, FaRulerHorizontal, FaStar } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import { ITrails } from '../../sections/trails-section/trail-list';

export default function CarouselSlides({ name, route, elevation, previewSrc, location, duration, difficulty, rating }: ITrails) {
  return (
    <div className='w-full min-w-0 flex-none  pl-4 sm:w-1/2 md:w-1/3 lg:w-1/4  '>
      <div className='flex  h-[400px] flex-col'>
        <NavLink to={`trails${route}`} className='h-1/3'>
          <img src={previewSrc} alt='trail-preview' className='h-full w-full rounded-t-md object-cover ' />
        </NavLink>
        {/* Content section */}
        <div className='flex  flex-col justify-between rounded-b-lg border border-gray-400 bg-gray-50'>
          <div className='grid  flex-grow grid-cols-2 gap-y-2 p-4 text-xs lg:grid-cols-3 lg:text-base'>
            {/* <span className='col-span-2 text-lg font-semibold lg:col-span-3 lg:text-3xl'>
              {name} <span className='text-sm'>({relevancy})</span>
            </span> */}
            <span className='col-span-2 text-lg font-semibold lg:col-span-3 lg:text-3xl'>{name}</span>
            <span className='col-span-2 flex items-center gap-x-1 lg:col-span-3 '>
              <FaMapMarkerAlt /> {location}
            </span>
            <span className='flex items-center gap-x-1'>
              <FaMountain /> {elevation}
            </span>
            <span className='flex items-center gap-x-1'>
              <FaRulerHorizontal /> {length}
            </span>

            <span className='flex items-center gap-x-1'>
              <FaRegClock /> {duration}
            </span>
            <div className='col-span-3 hidden grid-cols-3 lg:grid'>
              {/* 
                ON PAGE
              <span className='flex items-center gap-x-1'>
                <FaRoute />
                {route}
              </span> */}
              <span className='flexitems-center gap-x-1'>
                <FaGaugeHigh /> {difficulty}
              </span>
              <span className='flex items-center gap-x-1'>
                <FaStar /> {rating}/5
              </span>
            </div>
            {/* <p className='col-span-2 hidden lg:col-span-3 lg:block'>
              {description}
              Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur quisquam asperiores voluptates. Consequatur itaque eveniet iusto nisi amet
              voluptatem animi.
            </p> */}
            <div className='col-span-3 w-full'>
              <NavLink to={`/trails/${route}`} className='flex w-full justify-center rounded bg-green-600 px-4 py-2 text-white '>
                Explore Link
              </NavLink>
              {/* <PrimaryButton text='Explore Trail' className='w-full bg-green-600 px-4 py-2' /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
