import { FaQuoteLeft, FaChevronRight } from 'react-icons/fa6';
import { TClient } from './testimony-list';
import { Link } from 'react-router-dom';

export default function Testimony({ testimony, img, name, route, trailName }: TClient) {
  return (
    <li className="flex w-full flex-col justify-between space-y-4 rounded-md bg-white p-4 shadow-md md:w-1/4">
      <FaQuoteLeft className="fill-gray-700 text-lg lg:text-4xl" />
      <p className="text-justify text-sm first-letter:text-xl first-letter:font-bold md:text-sm">{testimony}</p>
      <div className="flex items-center space-x-4">
        <img src={img} alt="client-photo" className="h-10 w-10 rounded-full object-cover lg:h-12 lg:w-12" />
        <div className="flex flex-col">
          <h4 className="text-sm lg:text-base">{name}</h4>
          <span className="text-xs text-gray-500">{trailName}</span>
        </div>
      </div>
      <Link to={`/trails${route}`} className="flex items-center gap-x-2 text-green-600">
        <span className="text-xs font-semibold leading-none md:text-base">{`View ${trailName} trail `}</span>
        <FaChevronRight className="text-[8px] md:text-[12px]" />
      </Link>
    </li>
  );
}
