import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import heroGuy from '../../assets/heroguy.jpg';
import Trails, { ITrails } from '../../sections/trails-section/trail-list';
import CarouselSlides from './CarouselSlides';
import useSlidesToScroll from '../../hooks/useSlidesToScroll';
import { Link } from 'react-router-dom';

const filterByRelevancy = (trails: ITrails[], relevancy: filterType) => {
  const filteredTrails = relevancy && relevancy !== 'all' ? trails.filter((trail) => trail.relevancy === relevancy) : trails;
  const defaultTrails = {
    name: 'More Trail Coming',
    price: 0,
    route: 'defaultRoute',
    hostImage: '1564564321837-a57b7070ac4f',
    photoId: '1502085671122-2d218cd434e6',
    imgAlt: 'img-alt',
    photos: [
      {
        photoId: '1502085671122-2d218cd434e6',
        imgAlt: 'photo-gallery',
      },
      {
        photoId: '1502085671122-2d218cd434e6',
        imgAlt: 'photo-gallery',
      },
      {
        photoId: '1502085671122-2d218cd434e6',
        imgAlt: 'photo-gallery',
      },
      {
        photoId: '1502085671122-2d218cd434e6',
        imgAlt: 'photo-gallery',
      },
    ],
    location: 'More Trail Coming Soon',
    elevation: '0',
    duration: 0,
    length: '0',
    trailType: 'N/A',
    difficulty: 'N/A',
    rating: 0,
    reviews: [{ userName: '', img: '1502085671122-2d218cd434e6', comment: 'hozier', rate: 2, ratedDate: 'dec25', registeredAt: 4 }],
    description: 'Loremloremloremlorem',
    relevancy: relevancy,
  };

  while (filteredTrails.length < 12) filteredTrails.push({ ...defaultTrails });

  return filteredTrails;
};

export function Carousel({ hasFilter = true }: { hasFilter: boolean }) {
  const slidesToScroll = useSlidesToScroll();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    slidesToScroll,
  });
  const [selectedRelevancy, setSelectedRelevancy] = useState<filterType>('all');

  const FilteredTrails = useMemo(() => filterByRelevancy(Trails, selectedRelevancy), [Trails, selectedRelevancy]);
  const totalScroll = useMemo(() => FilteredTrails.length / slidesToScroll - 1, [FilteredTrails.length, slidesToScroll]);
  const [currentIndex, setCurrentIndex] = useState(0);
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
    [emblaApi, totalScroll]
  );

  // Reset carousel to start at 0 index when relevancy filter changes
  useEffect(() => {
    setCurrentIndex(0);
    if (emblaApi) emblaApi.scrollTo(0);
  }, [selectedRelevancy, emblaApi]);

  return (
    <div>
      <div className="mb-2 flex">
        {hasFilter &&
          FilterButtons.map((button, index) => (
            <button
              key={index}
              onClick={() => setSelectedRelevancy(button.filter)}
              className={`${selectedRelevancy === button.filter && 'bg-gray-700 text-white hover:bg-gray-700'} mb-2 w-20 border border-gray-300 p-2 text-sm font-semibold hover:bg-gray-200`}
            >
              {button.name}
            </button>
          ))}
      </div>
      <div className="relative mx-auto w-11/12 md:w-full">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="-ml-4 flex">
            {FilteredTrails.map((trail, index) => (
              <CarouselSlides key={index} {...trail} />
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
      </div>
    </div>
  );
}

type filterType = 'all' | 'popular' | 'new';

interface IFilterButtons {
  name: string;
  filter: filterType;
}

const FilterButtons: IFilterButtons[] = [
  {
    name: 'All',
    filter: 'all',
  },
  {
    name: 'Popular',
    filter: 'popular',
  },
  {
    name: 'New',
    filter: 'new',
  },
];

export default Carousel;

// import useEmblaCarousel from 'embla-carousel-react';
// import { useCallback, useEffect, useMemo, useState } from 'react';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
// import heroGuy from '../../assets/heroguy.jpg';
// import Trails, { ITrails } from '../../sections/trails-section/trail-list';
// import CarouselSlides from './CarouselSlides';
// import useSlidesToScroll from '../../hooks/useSlidesToScroll';

// const filterByRelevancy = (trails: ITrails[], relevancy: filterType) => {
//   const filteredTrails = relevancy && relevancy !== 'all' ? trails.filter((trail) => trail.relevancy === relevancy) : trails;
//   const defaultTrails = {
//     name: 'More Trail Coming',
//     price: 0,
//     route: 'defaultRoute',
//     photoId: '1502085671122-2d218cd434e6',
//     imgAlt: 'img-alt',
//     photos: [
//       {
//         photoId: 'sample-id',
//         imgAlt: 'photo-gallery',
//       },
//     ],
//     location: 'More Trail Coming Soon',
//     elevation: '0',
//     duration: 0,
//     length: '0',
//     trailType: 'N/A',
//     difficulty: 'N/A',
//     rating: 0,
//     description: 'Loremloremloremlorem',
//     relevancy: relevancy,
//   };

//   while (filteredTrails.length < 12) filteredTrails.push({ ...defaultTrails });

//   return filteredTrails;
// };

// export function Carousel() {
//   const slidesToScroll = useSlidesToScroll();
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     loop: false,
//     slidesToScroll,
//   });
//   const [selectedRelevancy, setSelectedRelevancy] = useState<filterType>('all');
//   const FilteredTrails = useMemo(() => filterByRelevancy(Trails, selectedRelevancy), [Trails, selectedRelevancy]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const totalScroll = FilteredTrails.length / slidesToScroll - 1; //minus 1  cause it's already showing the first set of slides

//   const scrollPrev = useCallback(() => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prevValue) => prevValue - 1);
//       if (emblaApi) emblaApi.scrollPrev();
//     }
//   }, [currentIndex, emblaApi]);

//   const scrollNext = useCallback(() => {
//     if (currentIndex < totalScroll) {
//       setCurrentIndex((prevValue) => prevValue + 1);
//       if (emblaApi) emblaApi.scrollNext();
//     }
//   }, [currentIndex, emblaApi]);

//   // Reset carousel to start at 0 index when relevancy filter changes
//   useEffect(() => {
//     setCurrentIndex(0);
//     if (emblaApi) emblaApi.scrollTo(0);
//   }, [selectedRelevancy, emblaApi]);

//   return (
//     <div>
//       <div className='mb-2 flex'>
//         {FilterButtons.map((button, index) => (
//           <button
//             key={index}
//             onClick={() => setSelectedRelevancy(button.filter)}
//             className={`${selectedRelevancy === button.filter && 'text bg-gray-700 text-white'} mb-2 w-20 border border-gray-300 p-2 text-sm font-semibold hover:bg-gray-200`}>
//             {button.name}
//           </button>
//         ))}
//       </div>
//       <div className='relative mx-auto w-full'>
//         <div ref={emblaRef} className='overflow-hidden'>
//           <div className='-ml-4 flex'>
//             {FilteredTrails.map((trail, index) => (
//               <CarouselSlides key={index} {...trail} />
//             ))}
//           </div>
//         </div>
//         <div className='absolute top-1/2 z-50 flex w-full -translate-y-1/2 justify-between'>
//           <button
//             onClick={scrollPrev}
//             disabled={currentIndex === 0}
//             className='-ml-4 flex h-10 w-10 items-center rounded-full bg-gray-800 p-4 shadow-md disabled:opacity-0 sm:-ml-6 sm:h-12 sm:w-12'>
//             <FaChevronLeft className='fill-white' />
//           </button>
//           <button
//             onClick={scrollNext}
//             disabled={currentIndex === totalScroll}
//             className='-mr-4 flex h-10 w-10 items-center rounded-full bg-gray-800 p-4 shadow-md disabled:opacity-0 sm:-mr-6 sm:h-12 sm:w-12'>
//             <FaChevronRight className='fill-white' />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// type filterType = 'all' | 'popular' | 'new';

// interface IFilterButtons {
//   name: string;
//   filter: filterType;
// }

// const FilterButtons: IFilterButtons[] = [
//   {
//     name: 'All',
//     filter: 'all',
//   },
//   {
//     name: 'Popular',
//     filter: 'popular',
//   },
//   {
//     name: 'New',
//     filter: 'new',
//   },
// ];

// export default Carousel;
