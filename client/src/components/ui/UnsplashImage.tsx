import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  photoId: string;
  alt: string;
  quality?: number;
  className?: string;
};

const UnsplashImage: React.FC<Props> = ({ photoId, alt, quality = 80, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const placeholderUrl = `https://images.unsplash.com/photo-${photoId}?q=10&auto=format&fit=crop&ixlib=rb-4.0.3`;
  const imageUrl = `https://images.unsplash.com/photo-${photoId}?q=${quality}&auto=format&fit=crop&ixlib=rb-4.0.3`;

  // Setting up the srcSet for responsive images
  const srcSet = `
    https://images.unsplash.com/photo-${photoId}?q=${quality}&w=400 400w,
    https://images.unsplash.com/photo-${photoId}?q=${quality}&w=800 800w,
    https://images.unsplash.com/photo-${photoId}?q=${quality}&w=1200 1200w
  `;

  return (
    <img
      src={isLoaded ? imageUrl : placeholderUrl}
      srcSet={isLoaded ? srcSet : undefined}
      alt={alt}
      loading='lazy'
      onLoad={() => setIsLoaded(true)}
      className={twMerge(
        `
        mx-auto
        object-cover
        transition-opacity
        duration-500
        ease-in-out
        ${isLoaded ? 'opacity-100' : 'opacity-0'}
        lg:w-128 xl:w-160 h-auto w-full sm:w-64
        md:w-96
      `,
        className
      )}
    />
  );
};

export default UnsplashImage;