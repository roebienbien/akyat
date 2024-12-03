import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { ITrails } from '../../sections/trails-section/trail-list';
import StarRating from '../StarRating';
import UnsplashImage from '../ui/UnsplashImage';

export default function CarouselSlides({ name, route, price, photoId, imgAlt, location, rating }: ITrails) {
  return (
    <div className="w-full min-w-0 flex-none pl-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
      {/* Cards */}
      <div className="flex h-full scale-100 flex-col overflow-clip rounded-lg border border-gray-300 duration-300">
        <Link to={`trails${route}`} className="h-[180px] lg:h-[240px]">
          <UnsplashImage photoId={photoId} alt={imgAlt} />
        </Link>
        {/* Content section */}
        <div className="flex flex-grow flex-col gap-y-2 rounded-b-lg bg-white p-4 text-xs shadow-xl lg:text-base">
          <span className="truncate text-lg font-semibold lg:text-2xl">{name}</span>
          <span className="flex items-center gap-x-1">{location}</span>
          <span className="flex items-center gap-x-1">₱{price.toLocaleString()} / Person</span>
          <span className="flex items-center gap-x-1">
            {rating}
            <StarRating value={rating} size="small" />
          </span>
          <div className="mt-auto w-full">
            <Link to={`/trails/${route}`} className="flex w-full justify-center rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700">
              Book now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
