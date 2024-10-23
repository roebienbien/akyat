import React from 'react';
import { ITrailList } from '../../sections/trails-section/trail-list';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaMountain, FaRulerHorizontal, FaRegClock, FaRoute, FaGaugeHigh, FaStar } from 'react-icons/fa6';
import PrimaryButton from '../ui/buttons/PrimaryButton';

export default function CarouselSlides({ name, elevation, previewSrc, location, duration, route, difficulty, rating }: ITrailList) {
  return (
    <div className='w-full min-w-0 flex-none  pl-4 sm:w-1/2 md:w-1/3  '>
      <div className='flex flex-col'>
        <img src={previewSrc} alt='heroguy' className='h-60 rounded-t-md object-cover ' />

        {/* Content section */}
        <div className='flex h-full flex-col justify-between rounded-b-lg border border-gray-400 bg-gray-50 '>
          <div className='grid flex-grow  grid-cols-2 gap-y-3  p-2 text-xs lg:grid-cols-3 lg:gap-y-6 lg:p-4 lg:text-lg'>
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
              <span className='flex items-center gap-x-1'>
                <FaRoute />
                {route}
              </span>
              <span className='flex items-center gap-x-1'>
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
              <PrimaryButton text='Explore Trail' className='w-full bg-green-600 px-4 py-2' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
