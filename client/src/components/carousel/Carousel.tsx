import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import heroGuy from '../../assets/heroguy.jpg';
import TrailList from '../../sections/trails-section/trail-list';
import CarouselSlides from './CarouselSlides';

export default function Carousel() {
  const slidesToScroll = 3;
  const totalScroll = Slides.length / slidesToScroll - 1; //minus 1 cause it's already showing the first half

  const [emblaRef, emblaApi] = useEmblaCarousel({
    // draggable: false,
    loop: false,
    slidesToScroll: slidesToScroll,
    breakpoints: {
      '(min-width:0px)': { slidesToScroll: slidesToScroll },
      '(min-width: 640px)': { slidesToScroll: slidesToScroll },
    },
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prevValue) => prevValue - 1);
      if (emblaApi) emblaApi.scrollPrev();
    }
  }, [currentIndex, emblaApi]);

  const scrollNext = useCallback(() => {
    if (currentIndex < totalScroll) {
      setCurrentIndex((prevValue) => prevValue + 1);
      if (emblaApi) emblaApi.scrollNext();
    }
  }, [currentIndex, emblaApi]);

  return (
    <div className='relative mx-auto w-full '>
      <div ref={emblaRef} className='overflow-hidden'>
        <div className='-ml-4 flex'>
          {TrailList.map((trail, index) => (
            <CarouselSlides key={index} {...trail} />
          ))}
        </div>
      </div>
      <div className='absolute top-1/2 z-50 flex w-full -translate-y-1/2 justify-between'>
        <button
          onClick={scrollPrev}
          disabled={currentIndex === 0}
          className='-ml-4 flex h-10 w-10 items-center rounded-full bg-gray-100 p-4 shadow-md disabled:opacity-50  sm:-ml-6 sm:h-12 sm:w-12'>
          <FaChevronLeft className='fill-black' />
        </button>
        <button
          onClick={scrollNext}
          disabled={currentIndex === totalScroll}
          className='-mr-4 flex h-10 w-10 items-center rounded-full bg-gray-100 p-4 shadow-md disabled:opacity-50 sm:-mr-6 sm:h-12 sm:w-12'>
          <FaChevronRight className='fill-black' />
        </button>
      </div>
    </div>
  );
}

const Slides = [
  {
    name: 'Slide 1',
    img: heroGuy,
  },
  {
    name: 'Slide 2',
  },
  {
    name: 'Slide 3',
  },
  {
    name: 'Slide 4',
  },
  {
    name: 'Slide 5',
  },
  {
    name: 'Slide 6',
  },
  {
    name: 'Slide 7',
  },
  {
    name: 'Slide 8',
  },
  {
    name: 'Slide 9',
  },
];
