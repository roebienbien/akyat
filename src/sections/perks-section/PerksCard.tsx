import React from 'react';
import { TPerks } from './perks-list';

export default function PerksCard({ icon: Icon, perk, description }: TPerks) {
  return (
    <li className='mt-8 flex flex-col items-center px-2 md:flex-row  md:items-start  md:space-x-4 xl:max-w-7xl  '>
      <div className='rounded-full bg-green-500 p-2'>
        <Icon className='fill-white text-sm  md:text-base' />
      </div>
      <div className='mt-1 grid justify-items-center md:mt-0 md:justify-items-start'>
        <span className='text-sm font-semibold lg:text-2xl'>{perk}</span>
        <p className='text-justify text-xs text-gray-500 md:mt-2'>{description}</p>
      </div>
    </li>
  );
}
