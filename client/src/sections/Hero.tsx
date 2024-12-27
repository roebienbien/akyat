import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import UnsplashImage from '../components/ui/UnsplashImage';
import PrimaryButton from '../components/ui/buttons/PrimaryButton';
import SecondaryButton from '../components/ui/buttons/SecondaryButton';
import { Link } from 'react-router-dom';

const womanPreg = '1591002680506-8aa78346c040';
const groupHikers = '1464198016405-33fd4527b89d';
const oldMan = '1558840170-2e54d537e55b';

export default function Hero() {
  const options = {
    loop: false,
    duration: 20,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const totalScroll = 1; // == carouselArray.length
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

  return (
    <div className="flex items-center pt-16">
      <div className="relative mx-auto w-11/12">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex h-[500px]">
            {/* Slides */}
            {/* First Slide */}
            <div className="relative w-full min-w-0 flex-none">
              <div className="absolute left-32 top-1/2 z-10 flex h-[280px] w-[480px] -translate-y-1/2 items-center justify-center bg-gray-100 shadow-2xl">
                <div className="flex flex-col items-center justify-center gap-y-4 p-4 text-center">
                  <span className="text-3xl font-bold">Explore the mountains of the Philippines</span>
                  <p className="lg:max-w-sm">
                    Discover the stunning mountains of the Philippines and discover unforgettable adventures.
                    <br /> Start your journey today!
                  </p>
                  <div className="flex justify-between gap-x-4">
                    <Link to={'/trails'} className="w-40 rounded bg-green-600 p-4 text-sm font-bold text-white hover:bg-green-700">
                      Book now
                    </Link>
                    <Link to={'/trails'} className="w-40 rounded border border-green-600 p-4 text-sm font-bold text-green-600 hover:border-green-700">
                      Browse trails
                    </Link>
                  </div>
                </div>
              </div>
              <UnsplashImage photoId={groupHikers} alt={'hero-image'} />
            </div>

            {/* Second Slide */}
            {/* <div className="relative w-full min-w-0 flex-none">
              <div className="absolute left-32 top-1/2 z-10 flex h-60 w-96 -translate-y-1/2 items-center justify-center bg-gray-100">
                <span>Hike with Friends</span>
              </div>
              <UnsplashImage photoId={womanPreg} alt={'hero-image'} />
            </div> */}

            {/* Third Slide */}
            <div className="relative w-full min-w-0 flex-none">
              <div className="absolute right-32 top-1/2 z-10 flex h-[300px] w-[400px] -translate-y-1/2 items-center justify-center bg-gray-100 px-4">
                <div className="flex flex-col items-center justify-center gap-y-4 p-4 text-center">
                  <span className="text-3xl font-bold">Lead the way</span>
                  <p className="lg:max-w-sm">
                    Become a hike coordinator today and inspire adventurers to explore nature, discover hidden trails, and create lasting memories.
                  </p>
                  <Link to="host" className="w-full rounded bg-green-600 p-4 text-white hover:bg-green-700">
                    Join as a guide
                  </Link>
                </div>
              </div>
              <UnsplashImage photoId={oldMan} alt={'hero-image'} />
            </div>
          </div>
        </div>

        {/* Arrow button */}
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

// import { Link } from 'react-router-dom';
// import heroGuy from '../assets/heroguy.jpg';
// import heroGuy50 from '../assets/heroguy50.jpg';
// import heroGuy20 from '../assets/heroguy20.jpg';
// import heroGuy1 from '../assets/heroguy1.jpg';
// import { useEffect, useState } from 'react';

// export default function Hero() {
//   const [heroImage, setHeroImage] = useState(heroGuy20);

//   useEffect(() => {
//     // Preload medium quality image
//     const mediumImage = new Image();
//     mediumImage.src = heroGuy50;
//     mediumImage.onload = () => {
//       setHeroImage(heroGuy50);

//       // Preload high quality image
//       const highImage = new Image();
//       highImage.src = heroGuy;
//       highImage.onload = () => setHeroImage(heroGuy);
//     };
//   }, []);

//   return (
//     <div
//       id="home"
//       style={{
//         backgroundImage: `url(${heroImage})`,
//       }}
//       className="mx-auto h-[100dvh] bg-cover bg-no-repeat px-6"
//     >
//       <div className="flex h-full flex-col justify-center justify-items-start gap-y-4 text-center md:text-start lg:gap-y-8 lg:px-10">
//         <h1 className="w-full text-2xl font-bold xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
//           Explore <br className="hidden md:block" /> the mountains
//           <br className="hidden md:block" /> of the Philippines
//         </h1>
//         <div className="flex w-full flex-col items-start">
//           <p className="text-xs xs:text-sm lg:text-xl">
//             Experience a fun and safe journey when climbing.
//             <br className="hidden md:block" /> What are you waiting for? The peaks are ready.
//           </p>
//           <Link
//             to="/trails"
//             className={`mx-auto mt-4 w-fit bg-green-600 px-6 py-2 text-sm text-white hover:bg-green-700 md:mx-0 lg:px-16 lg:py-4 lg:text-lg`}
//           >
//             Book a Hike
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
