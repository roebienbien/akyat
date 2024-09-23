import React from 'react';
import { TPerks } from './perks-list';

export default function PerksCard({ icon: Icon, perk, description }: TPerks) {
  return (
    <li className='mt-8 flex flex-col  px-2 md:flex-row  md:items-start  md:space-x-4 xl:max-w-7xl  '>
      <div className='mt-1 grid justify-items-start md:mt-0 md:justify-items-start'>
        <div className='flex items-center gap-x-2'>
          <div className='rounded-full bg-green-500 p-2'>
            <Icon className='fill-white text-sm  md:text-base' />
          </div>
          <span className='text-sm font-semibold lg:text-2xl'>{perk}</span>
        </div>
        <p className='text-justify text-xs text-gray-500 md:mt-2'>{description}</p>
      </div>
    </li>
  );
}
