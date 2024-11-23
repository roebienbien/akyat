import React from 'react';
import UnsplashImage from '../../components/ui/UnsplashImage';
import PrimaryButton from '../../components/ui/buttons/PrimaryButton';

const HostPage = () => {
  return (
    <div className="h-screen">
      <div className="relative h-3/5 bg-black px-20">
        {/* Background Image */}
        <UnsplashImage photoId={'1465311440653-ba9b1d9b0f5b'} alt={'host-image'} className="absolute inset-0 opacity-50" />

        {/* Content */}
        <div className="relative z-10 flex h-full max-w-md flex-col items-start justify-center text-justify text-white">
          <h2 className="text-5xl font-bold">Host a trail with us</h2>
          <p className="mt-4 text-lg">Become a hiking coordinator and guide others on their journey - including your own</p>
          <PrimaryButton text={'Get started'} className="mt-6 w-full rounded-none lg:text-xl" />
        </div>
      </div>
    </div>
  );
};

export default HostPage;
// 1465311440653-ba9b1d9b0f5b
