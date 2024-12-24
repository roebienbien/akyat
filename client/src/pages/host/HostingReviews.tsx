import React, { useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import CarouselSlides from '../../components/carousel/CarouselSlides';
import UnsplashImage from '../../components/ui/UnsplashImage';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

type THost = {
  name: string;
  image: string;
  title: string;
  review: string;
};

const Hosts: THost[] = [
  {
    name: 'Gimli Smith',
    image: '1579575766906-b26070ce0b95',
    title: 'Mount Pulag',
    review: `"Akyat made organizing my group hikes so much easier! The platform's seamless booking process and user-friendly interface saved me hours of back-and-forth with participants. It's now my go-to tool for managing hikes efficiently."`,
  },
  {
    name: 'Gandalf Doe',
    image: '1565104781149-275a5392dabc',
    title: 'Mount Apo',
    review: `"As a hiking coordinator, I love how Akyat simplifies everything—from promoting my hikes to collecting payments. The detailed analytics and participant tracking features are game-changers for ensuring a smooth hiking experience."`,
  },
  {
    name: 'Galadriel De La Cruz',
    image: '1682708198473-1a2350c76788',
    title: 'Mount Guiting-Guiting',
    review: `"Using Akyat has significantly increased my bookings and allowed me to focus on creating memorable hiking adventures. The support team is responsive, and the platform is intuitive, making it perfect for both beginners and seasoned coordinators like me."`,
  },
];

const HostingReviews = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: false,
    loop: false,
    slidesToScroll: 1,
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalScroll = 2;

  const handleScroll = useCallback(
    (direction: 'next' | 'prev') => {
      if (!emblaApi) return;

      setCurrentIndex((prevIndex) => {
        const newIndex = direction === 'next' ? prevIndex + 1 : prevIndex - 1;

        if (newIndex < 0 || newIndex > totalScroll) return prevIndex;
        emblaApi.scrollTo(newIndex);
        return newIndex;
      });
    },
    [emblaApi]
  );

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-y-12 bg-gray-100">
      <h3 className="text-4xl font-bold">What Akyat's Hiking Coordinators have experienced.</h3>
      <div className="relative mx-auto w-9/12">
        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="-ml-8 flex gap-x-2">
            {Hosts.map((host, index) => (
              /* Carousel Slides */
              <div key={index} className="h-[500px] w-full flex-none">
                <div className="mx-auto flex h-full max-w-5xl items-center justify-center gap-x-12">
                  <UnsplashImage photoId={host.image} alt={'host-image'} className="h-full w-full flex-grow" />
                  <div className="flex max-w-lg flex-col gap-y-4">
                    <p className="md:text-xl">{host.review}</p>
                    <div className="flex flex-col">
                      <span className="text-xl font-semibold">{host.name}</span>
                      <span className="text-sm text-gray-600">{host.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-1/2 z-50 flex w-full -translate-y-1/2 justify-between">
          <button
            onClick={() => handleScroll('prev')}
            disabled={currentIndex === 0}
            className="-ml-4 flex h-10 w-10 items-center rounded-full bg-gray-800 p-4 shadow-md disabled:opacity-0 sm:-ml-6 sm:h-12 sm:w-12"
          >
            <FaChevronLeft className="fill-white" />
          </button>
          <button
            onClick={() => handleScroll('next')}
            disabled={currentIndex === totalScroll}
            className="-mr-4 flex h-10 w-10 items-center rounded-full bg-gray-800 p-4 shadow-md disabled:opacity-0 sm:-mr-6 sm:h-12 sm:w-12"
          >
            <FaChevronRight className="fill-white" />
          </button>
        </div>
        {/* Dots Navigation */}
        <div className="mt-4 flex justify-center gap-x-2">
          {Array.from({ length: totalScroll + 1 }).map((_, index) => (
            <span
              key={index}
              // onClick={() => emblaApi?.scrollTo(index)}
              className={`h-3 w-3 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HostingReviews;
