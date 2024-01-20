import React from 'react';

export type TSlide = {
  url: string;
  title: string;
  location: string;
  price: number;
  tags?: string[];
};

export default function Slide({ url, title, location, price, tags }: TSlide) {
  return (
    <div className='flex justify-center space-x-4'>
      <div>
        <img src={url} alt='slide-image' data-tooltip-id='slide-tooltip' className='h-40 w-full' />
        <div className='mt-4 grid'>
          <h3 className='text-lg font-semibold '>{title}</h3>
          <span className='text-xs text-gray-500'>{location}</span>
          <span className='text-xs'>₱{price}</span>
          {/* <ul className='flex space-x-1'>
            {tags?.map((tag) => (
              <li className='border border-black p-[1px] text-xs'>{tag}</li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
}

// <div  className='flex justify-center space-x-4'>
//   <div>
//     <img  src={slide.url} alt='slide-image' data-tooltip-id='slide-tooltip' className='h-40 w-full' />
//     <div className='mt-4 grid'>
//       <h3 className='text-xl font-bold'>{slide.title}</h3>
//       <span className='text-gray-500'>{slide.author}</span>
//       <span>₱{slide.price}</span>
//       <ul className='flex space-x-1'>
//         {slide.tags?.map((tag) => (
//           <li className='border border-black p-[1px]'>{tag}</li>
//         ))}
//       </ul>
//     </div>
//   </div>
// </div>
