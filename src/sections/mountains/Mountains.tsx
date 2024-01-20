import React from 'react';
import MultiCarousel from './MultiCarousel';

export default function Mountains() {
  return (
    <section className='min-h-screen  px-10 py-10'>
      <h2 className='text-6xl font-bold'>Mountain Zaki</h2>
      <MultiCarousel title={'Most Popular'} />
      <MultiCarousel title={'Beginner Mountains'} />
    </section>
  );
}
