import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useMemo, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import heroGuy from '../../assets/heroguy.jpg';
import TrailList, { ITrailList } from '../../sections/trails-section/trail-list';
import CarouselSlides from './CarouselSlides';

export default function Carousel() {
  /*
    ADD FILTER FUNCTION
   function filterByDifficulty(trails: ITrailList[], difficultyFilter: string) {
     return trails.filter((trail) => trail.difficulty.toLowerCase() === difficultyFilter.toLowerCase());
   }

   const TrailListByDifficulty = filterByDifficulty(TrailList, 'easy');
   */

  const slidesToScroll = 4;
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

  const [selectedRelevancy, setSelectedRelevancy] = useState<filterType>('popular');

  function filterByRelevancy(trails: ITrailList[], relevancy: filterType) {
    const filteredTrails = trails.filter((trail) => trail.relevancy === relevancy);
    const defaultTrails = {
      name: 'More Trail Coming',
      previewSrc: heroGuy,
      location: 'More Trail Coming Soon',
      elevation: '0m',
      duration: '0h',
      length: '0km',
      route: 'N/A',
      difficulty: 'N/A',
      rating: '0',
      description: 'Loremloremloremlorem',
      relevancy: relevancy,
    };

    while (filteredTrails.length < 12) filteredTrails.push({ ...defaultTrails });

    return filteredTrails;
  }

  const FilteredTrails1 = filterByRelevancy(TrailList, selectedRelevancy);

  const FilteredTrails = useMemo(() => filterByRelevancy(TrailList, selectedRelevancy), [TrailList, selectedRelevancy]);

  return (
    <div>
      <div className='flex gap-x-2'>
        {FilterButtons.map((button, index) => (
          <button
            key={index}
            onClick={() => setSelectedRelevancy(button.filter)}
            className={`${selectedRelevancy === button.filter && 'text bg-gray-700 text-white'} mb-2 rounded-lg p-4 font-semibold hover:bg-gray-300  `}>
            {button.name}
          </button>
        ))}
      </div>
      <div className='relative mx-auto w-full '>
        <div ref={emblaRef} className='overflow-hidden'>
          <div className='-ml-4 flex'>
            {FilteredTrails.map((trail, index) => (
              <CarouselSlides key={index} {...trail} />
            ))}
          </div>
        </div>
        <div className='absolute top-1/2 z-50 flex w-full -translate-y-1/2 justify-between'>
          <button
            onClick={scrollPrev}
            disabled={currentIndex === 0}
            className='-ml-4 flex h-10 w-10 items-center rounded-full bg-gray-800 p-4 shadow-md disabled:opacity-0 sm:-ml-6 sm:h-12 sm:w-12'>
            <FaChevronLeft className='fill-white' />
          </button>
          <button
            onClick={scrollNext}
            disabled={currentIndex === totalScroll}
            className='-mr-4 flex h-10 w-10 items-center rounded-full bg-gray-800 p-4 shadow-md disabled:opacity-0 sm:-mr-6 sm:h-12 sm:w-12'>
            <FaChevronRight className='fill-white' />
          </button>
        </div>
      </div>
    </div>
  );
}

type filterType = 'popular' | 'new' | 'trending';

interface IFilterButtons {
  name: string;
  filter: filterType;
}

const FilterButtons: IFilterButtons[] = [
  {
    name: 'Popular',
    filter: 'popular',
  },
  {
    name: 'New',
    filter: 'new',
  },
  {
    name: 'Trending',
    filter: 'trending',
  },
];

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
