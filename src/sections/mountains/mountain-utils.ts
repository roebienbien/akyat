import { TSlide } from './Slide';

const mobileMax = 464;
const tabletMax = 740;
const largeTabletMax = 1_240;

export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: largeTabletMax },
    items: 5,
    slidesToSlide: 5, // optional, default to 1.
  },
  largeTablet: {
    breakpoint: { max: 1240, min: 740 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: tabletMax, min: mobileMax },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: mobileMax, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const Slides: TSlide[] = [
  {
    title: 'Lorem ipsum dolor sit1.',
    location: 'John Doe',
    url: 'https://placehold.co/600x400',
    price: 999,
    tags: ['programming', 'engineering'],
  },
  {
    title: 'Lorem ipsum dolor sit2.',
    location: 'John Doe',
    url: 'https://placehold.co/600x400',
    price: 999,
    tags: ['programming', 'engineering'],
  },
  {
    title: 'Lorem ipsum dolor sit3.',
    location: 'John Doe',
    url: 'https://placehold.co/600x400',
    price: 999,
    tags: ['programming', 'engineering'],
  },
  {
    title: 'Lorem ipsum dolor sit4.',
    location: 'John Doe',
    url: 'https://placehold.co/600x400',
    price: 999,
    tags: ['programming', 'engineering'],
  },
  {
    title: 'Lorem ipsum dolor sit5.',
    location: 'John Doe',
    url: 'https://placehold.co/600x400',
    price: 999,
    tags: ['programming', 'engineering'],
  },
  {
    title: 'Lorem ipsum dolor sit6.',
    location: 'John Doe',
    url: 'https://placehold.co/600x400',
    price: 999,
    tags: ['programming', 'engineering'],
  },
  {
    title: 'Lorem ipsum dolor sit7.',
    location: 'John Doe',
    url: 'https://placehold.co/600x400',
    price: 999,
    tags: ['programming', 'engineering'],
  },
  {
    title: 'Lorem ipsum dolor sit8.',
    location: 'John Doe',
    url: 'https://placehold.co/600x400',
    price: 999,
    tags: ['programming', 'engineering'],
  },
  {
    title: 'Lorem ipsum dolor sit9.',
    location: 'John Doe',
    url: 'https://placehold.co/600x400',
    price: 999,
    tags: ['programming', 'engineering'],
  },
  {
    title: 'Lorem ipsum dolor sit10.',
    location: 'John Doe',
    url: 'https://placehold.co/600x400',
    price: 999,
    tags: ['programming', 'engineering'],
  },
];
