import { BsFillGearFill } from 'react-icons/bs';

export const PerksList = [
  {
    title: 'Plan your trip, All in one place',
    description:
      'Lorem ipsum, dolor sit amet consectetur asda adipisicing elit. Dolore suscipit cumque vero, similique aperiam tenetur.',
    icon: BsFillGearFill,
  },
  {
    title: 'Plan your trip, All in one place',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore suscipit cumque vero, similique aperiam tenetur.',
    icon: BsFillGearFill,
  },
  {
    title: 'Plan your trip, All in one place',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore suscipit cumque vero, similique aperiam tenetur.',
    icon: BsFillGearFill,
  },
  {
    title: 'Plan your trip, All in one place',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore suscipit cumque vero, similique aperiam tenetur.',
    icon: BsFillGearFill,
  },
];

export default function Perks() {
  return (
    <div className='mt-80 grid h-screen grid-cols-1 place-content-center md:grid-cols-3 md:px-20 lg:px-40'>
      <img
        // src='https://images.unsplash.com/photo-1584223719571-778f3f37aa56?auto=format&fit=crop&q=80&w=2187&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        src='https://images.unsplash.com/photo-1568454537842-d933259bb258?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGlrZXJ8ZW58MHwxfDB8fHwy'
        alt='woman-on-beanie'
        className='mx-auto h-[300px]  w-auto place-self-end bg-blue-400 object-cover md:h-[690px]'
      />
      <div className='grid place-items-center justify-items-center md:col-span-2 md:ml-12 '>
        <h2 className='text-3xl font-bold lg:text-6xl'>Perks of Hiking with Us.</h2>
        <div className='mt-8 grid grid-cols-1 justify-items-center gap-y-8 md:grid-cols-2 md:gap-x-8 md:gap-y-24'>
          {PerksList.map((perk, key) => (
            <div
              key={key}
              className=' grid justify-items-center gap-y-2  md:justify-items-start md:gap-y-4 md:px-2 lg:max-w-[350px] '>
              <perk.icon className=' rounded bg-cyan-400 text-3xl' />
              <span className='text-lg font-semibold'>{perk.title}</span>
              <p className='px-10 text-xs xs:px-20 sm:px-40 md:px-0'>{perk.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
