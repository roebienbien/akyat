import React from 'react';

export const PerksList = [
  {
    title: 'Plan your trip, All in one place',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore suscipit cumque vero, similique aperiam tenetur.',
  },
  {
    title: 'Plan your trip, All in one place',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore suscipit cumque vero, similique aperiam tenetur.',
  },
  {
    title: 'Plan your trip, All in one place',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore suscipit cumque vero, similique aperiam tenetur.',
  },
  {
    title: 'Plan your trip, All in one place',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore suscipit cumque vero, similique aperiam tenetur.',
  },
];

export default function Perks() {
  return (
    // <div className='grid h-screen grid-cols-2 place-content-center  px-20'>
    <div className='grid h-screen grid-cols-3 place-content-center px-20'>
      <div className='col-span-2 grid place-items-center justify-items-start '>
        <h2 className='text-6xl font-bold'>Perks of Hiking with Us.</h2>
        <div className='grid  grid-cols-2 gap-x-8 gap-y-24'>
          {PerksList.map((perk, key) => (
            <div key={key} className='grid max-w-[350px] gap-y-4 '>
              <span className='text-lg font-semibold'>{perk.title}</span>
              <p className=''>{perk.description}</p>
            </div>
          ))}
        </div>
      </div>
      <img
        src='https://images.unsplash.com/photo-1584223719571-778f3f37aa56?auto=format&fit=crop&q=80&w=2187&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='woman-on-beanie'
        className='  h-[690px] w-auto place-self-end bg-blue-400 object-cover'
      />
    </div>
  );
}
