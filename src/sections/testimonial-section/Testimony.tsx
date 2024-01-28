import { TClient } from './testimony-list';
import { FaQuoteRight } from 'react-icons/fa6';

export default function Testimony({ testimony, img, name, place }: TClient) {
  console.log('hello 1');
  return (
    <li className='relative flex flex-col justify-between space-y-4  rounded-md bg-white   px-4   py-8 shadow-md lg:px-12'>
      <p className='text-xs first-letter:text-xl first-letter:font-bold md:text-lg'>{testimony}</p>
      <div className='flex items-center space-x-4'>
        <img src={img} alt='client-photo' className=' h-10 w-10 rounded-full object-cover lg:h-20 lg:w-20   ' />
        <div className='flex flex-col   '>
          <h4 className='text-sm  lg:text-xl'>{name}</h4>
          <span className='text-[10px] text-gray-500'>{place}</span>
        </div>
      </div>
      <FaQuoteRight className='absolute bottom-10 right-10 fill-gray-700 text-lg lg:text-6xl' />
    </li>
  );
}
