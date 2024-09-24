import { IMountainList } from './mountain-list';

import { FaRegClock, FaRoute, FaRulerHorizontal, FaMountain, FaGaugeHigh, FaStar } from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa';
export const MountainCard = ({ name, previewSrc, location, elevation, duration, length, route, difficulty, rating, description }: IMountainList) => {
  return (
    <div className='mx-auto flex flex-col  bg-gray-100 shadow-lg lg:w-[600px]'>
      <img src={previewSrc} alt='mountain-image.png' className='rounded-t-md object-cover shadow-md lg:h-64 lg:w-auto' />
      <div className='grid grid-cols-2 gap-y-3  p-2 text-xs lg:grid-cols-3 lg:p-4 lg:text-base'>
        <span className='col-span-2 text-lg font-semibold lg:text-2xl'>{name}</span>
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
        <p className='col-span-2 lg:col-span-3'>
          Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur quisquam asperiores voluptates. Consequatur itaque eveniet iusto nisi amet voluptatem
          animi.
        </p>
      </div>
    </div>
  );
};

// USING FLEX-BOX
// <div className='flex flex-col gap-y-2'>
//   <span className='text-lg font-semibold'>{name}</span>
//   <img src={previewSrc} alt='mountain-image.png' className='rounded shadow-md' />
//   <div className='flex flex-col  gap-y-2 text-xs'>
//     <span>Location: {location}</span>
//     <div className='flex justify-between'>
//       <span>Elevation: {elevation}</span>
//       <span>Length: {length}</span>
//       <span>Duration: {duration}</span>
//     </div>
//     <span>Route Type: {route}</span>
//     <div className='flex gap-x-4'>
//       <span>Difficulty: {difficulty}</span>
//       <span>Rating: {rating}</span>
//     </div>
//     <p>
//       Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur quisquam asperiores voluptates. Consequatur itaque eveniet iusto nisi amet voluptatem
//       animi.
//     </p>
//   </div>
