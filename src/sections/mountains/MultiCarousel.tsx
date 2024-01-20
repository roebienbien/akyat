import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import { Tooltip } from 'react-tooltip';
import ReactDOMServer from 'react-dom/server';
// import CarouselToolTip from './CarouselTooltip';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { ArrowProps } from 'react-multi-carousel';
import { Slides, responsive } from './mountain-utils';
import Slide from './Slide';

type TMulticarousel = {
  title: string;
};

function MultiCarousel({ title }: { title: string }) {
  // Custom Arrows
  const CustomLeftArrow = ({ onClick }: any) => {
    return (
      <button
        className='absolute left-1 top-16 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900  xl:left-0 '
        onClick={() => onClick()}>
        <FaChevronLeft color='white' size={18} />
      </button>
    );
  };

  const CustomRightArrow = ({ onClick }: any) => {
    return (
      <button
        className=' absolute right-2 top-16 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900  xl:right-0  '
        onClick={() => onClick()}>
        <FaChevronRight color='white' size={18} />
      </button>
    );
  };

  return (
    <div className='pt-10'>
      <span className='text-left text-2xl font-bold'>{title}</span>
      <Carousel
        responsive={responsive}
        // infinite
        autoPlay={false}
        draggable={false}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        className='mt-4 min-w-[240px]'>
        {Slides.map((slide, index) => (
          <Slide key={index} {...slide} />
        ))}
      </Carousel>
    </div>
  );
}

export default MultiCarousel;
