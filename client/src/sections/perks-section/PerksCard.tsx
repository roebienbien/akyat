import React from 'react';
import { TPerks } from './perks-list';

export default function PerksCard({ icon: Icon, perk, description }: TPerks) {
  return (
    <li className='flex gap-x-2'>
      <div className='flex'>
        <div className='flex aspect-square h-8 items-center justify-center rounded-full bg-green-600 p-2 md:h-12 md:w-12'>
          <Icon className='fill-white text-sm  md:text-base lg:text-2xl' />
        </div>
      </div>
      <div className='flex flex-col  text-start'>
        <span className='text-sm font-semibold lg:text-3xl'>{perk}</span>
        <p className=' text-xs text-gray-500 md:mt-2 md:text-base'>{description}</p>
      </div>
    </li>
  );
}
