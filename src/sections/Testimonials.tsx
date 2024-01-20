import React from 'react';
import frodoBaggins from '../assets/frodo-baggins.jpeg';
import samwiseGamgee from '../assets/samwise-gamgee.png';
import pippinTook from '../assets/pippin-took.png';
import merryBrandybuck from '../assets/merry-brandybuck.jpg';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6';

type TClient = {
  img: any;
  name: string;
  place: string;
  testimony: string;
};

const Client: TClient[] = [
  {
    img: frodoBaggins,
    name: 'Frodo Baggins',
    place: 'The Shire',
    testimony: `After a challenging hike through Middle-earth's landscapes, booking with Akyat made it worthwhile—the camaraderie and breathtaking views made the journey unforgettable.`,
  },
  {
    img: samwiseGamgee,
    name: ' Samwise Gamgee',
    place: 'The Shire',
    testimony: `Akyat made the hike accessible, turning discomfort into shared adventure. Frodo's resilience, coupled with Akyat's ease, fostered camaraderie and awe-inspiring moments in our journey.`,
  },
  {
    img: pippinTook,
    name: 'Pippin Took',
    place: 'The Shire',
    testimony: `Akyat ensured a seamless booking for our grand Middle-earth adventure. Every step became memorable with Frodo, Sam, and Akyat's convenience, turning the hike into an epic tale.`,
  },
  {
    img: merryBrandybuck,
    name: 'Merry Brandybuck',
    place: 'The Shire',
    testimony: `The hills were a challenge, but Akyat's ease and beauty discovered made it worthwhile. Akyat's fellowship turned the hike into an unforgettable escapade, rich with unique contributions from each of us.`,
  },
];
// Explore transformative experiences with Akyat—seamless bookings, breathtaking landscapes. Discover firsthand the
// essence of unforgettable journeys from our community. Read on to discover the stories that showcase the true
// essence of Akyat's impact on hiking adventures.

export default function Testimonials() {
  return (
    <section className='flex  flex-col space-y-10 px-4 py-20  lg:px-10'>
      <div className=''>
        <h2 className='text-4xl font-bold lg:text-7xl'>Testimony</h2>
        <p className='mt-4  text-justify text-sm lg:text-base'>
          Discover firsthand the essence of unforgettable journeys from our community.{' '}
        </p>
      </div>
      <ul className='grid gap-10  lg:grid-cols-2  '>
        {Client.map((client, key) => (
          <li
            key={key}
            className='relative flex flex-col justify-between space-y-4  rounded-md bg-white   px-4   py-8 shadow-md lg:px-12'>
            <p className='text-xs first-letter:text-xl first-letter:font-bold md:text-lg'>{client.testimony}</p>
            <div className='flex items-center space-x-4'>
              <img src={client.img} alt='client-photo' className=' h-10 w-10 rounded-full object-cover lg:h-20 lg:w-20   ' />
              <div className='flex flex-col   '>
                <h4 className='text-sm  lg:text-xl'>{client.name}</h4>
                <span className='text-[10px] text-gray-500'>{client.place}</span>
              </div>
            </div>
            <FaQuoteRight className='absolute bottom-10 right-10 fill-gray-700 text-lg lg:text-6xl' />
          </li>
        ))}
      </ul>
    </section>
  );
}
