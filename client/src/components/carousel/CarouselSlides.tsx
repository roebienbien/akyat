import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { ITrails } from '../../sections/trails-section/trail-list';
import StarRating from '../StarRating';

export default function CarouselSlides({ name, route, price, previewSrc, location, difficulty, rating }: ITrails) {
  return (
    <div className='w-full min-w-0 flex-none   pl-4 sm:w-1/2 md:w-1/3 lg:w-1/4 '>
      {/* Cards */}
      <div className='flex  h-full flex-col rounded-lg bg-white '>
        <Link to={`trails${route}`} className='h-1/2'>
          <img src={previewSrc} alt='trail-preview' className='h-full w-full rounded-t-md object-cover ' />
        </Link>
        {/* Content section */}
        {/* <div className='flex flex-col justify-between rounded-b-lg border border-gray-400 bg-gray-50'> */}
        <div className='flex flex-grow flex-col gap-y-2 rounded-b-lg border border-gray-400 p-4 text-xs  lg:text-base'>
          <span className='  text-lg font-semibold lg:text-3xl'>{name}</span>
          <span className='flex items-center gap-x-1  '>
            <CiLocationOn />
            {location}
          </span>
          <span className='flex items-center gap-x-1'>₱{price.toLocaleString()}</span>
          <span className='flex items-center gap-x-1'>
            {rating}
            <StarRating value={rating} size='small' />
          </span>
          <span className='flex items-center gap-x-1'>Difficulty: {difficulty}</span>

          <div className=' mt-auto w-full'>
            <Link to={`/trails/${route}`} className='flex w-full justify-center rounded bg-green-600 px-4 py-2 text-white '>
              Book now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
