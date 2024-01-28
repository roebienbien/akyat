import { Client } from './testimony-list';
import Testimony from './Testimony';

// Sample Headline
// Explore transformative experiences with Akyat—seamless bookings, breathtaking landscapes. Discover firsthand the
// essence of unforgettable journeys from our community. Read on to discover the stories that showcase the true
// essence of Akyat's impact on hiking adventures.

export default function Testimonials() {
  return (
    <section className='flex flex-col space-y-10 px-4 py-20  lg:px-10'>
      <div className=''>
        <h2 className='text-4xl font-bold lg:text-7xl'>Testimony</h2>
        <p className='mt-4  text-justify text-sm lg:text-base'>
          Discover firsthand the essence of unforgettable journeys from our community.{' '}
        </p>
      </div>
      <ul className='grid gap-10  lg:grid-cols-2  '>
        {Client.map((client, key) => (
          <Testimony key={key} {...client} />
        ))}
      </ul>
    </section>
  );
}
