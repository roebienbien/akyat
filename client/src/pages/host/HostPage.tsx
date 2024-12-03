import React from 'react';
import UnsplashImage from '../../components/ui/UnsplashImage';
import PrimaryButton from '../../components/ui/buttons/PrimaryButton';
import HostingBenefits from './HostingBenefits';
import HostingGuide, { TTabLinks } from './HostingGuide';
import HostingReviews from './HostingReviews';

const TabLinks: TTabLinks[] = [
  {
    title: 'Choose Your Trail',
    id: 1,
    content:
      'Select from a variety of breathtaking trails. Consider factors like difficulty level, scenery, and location to find the perfect match for your group.',
    imageUrl: '1534582929036-cc7f1bb2043e', // Replace with relevant Unsplash image
  },
  {
    title: 'Set  Booking Details',
    id: 2,
    content:
      'Define key details such as available dates, group size limits, and pricing. Ensure the booking process is clear and straightforward for hikers.',
    imageUrl: '1588534510807-86dfb5ed5d5b', // Replace with relevant Unsplash image ID
  },
  {
    title: 'Promote and Manage',
    id: 3,
    content:
      'Share your trail booking on social platforms and engage with potential hikers. Keep track of bookings and provide updates to participants.',
    imageUrl: '1551290465-0e7bd7015b63', // Replace with relevant Unsplash image ID
  },
];

const HostPage = () => {
  return (
    <div className="flex flex-col gap-y-20">
      <div className="relative h-[500px] bg-black md:px-10 lg:px-40">
        {/* Background Image */}
        <UnsplashImage photoId={'1465311440653-ba9b1d9b0f5b'} alt={'host-image'} className="absolute inset-0 opacity-60" />

        {/* Content */}
        <div className="md:px-none relative z-10 flex h-full flex-col items-start justify-center px-4 text-white md:max-w-lg">
          <h2 className="text-3xl font-bold md:text-5xl">Host a trail with us</h2>
          <p className="mt-4 text-sm md:text-lg">Become a hiking coordinator and guide others on their journey - including your own</p>
          <PrimaryButton text={'Get started'} className="mt-6 w-full rounded-none font-semibold lg:text-xl" />
        </div>
      </div>
      <HostingBenefits />
      <HostingGuide tabs={TabLinks} />
      <HostingReviews />
      <div className="bg-gray-200 p-36">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-y-4 text-center">
          <h3 className="text-4xl font-semibold">Become a hiking coordinator today </h3>
          <span className="max-w-lg text-lg">
            Be a part of the Philippines' largest online hiking community and book your next adventure with ease!
          </span>
          <PrimaryButton text={'Get started'} className="w-1/3 rounded-none font-bold lg:text-lg" />
        </div>
      </div>
    </div>
  );
};

export default HostPage;
// 1465311440653-ba9b1d9b0f5b
