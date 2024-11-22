import frodoBaggins from '../../assets/frodo-baggins.jpeg';
import samwiseGamgee from '../../assets/samwise-gamgee.png';
import pippinTook from '../../assets/pippin-took.png';
import merryBrandybuck from '../../assets/merry-brandybuck.jpg';

export type TClient = {
  img: any;
  name: string;
  testimony: string;
  trailName: string;
  route: string;
};

export const Client: TClient[] = [
  {
    img: frodoBaggins,
    name: 'Frodo Baggins',
    testimony: `After a challenging hike through Middle-earth's landscapes, booking with Akyat made it worthwhile hassle free.`,
    trailName: 'Mount Pulag',
    route: '/pulag',
  },
  {
    img: samwiseGamgee,
    name: ' Samwise Gamgee',
    testimony: `Akyat made the hike accessible, turning discomfort into shared adventure. `,
    trailName: 'Mount Apo',
    route: '/apo',
  },
  {
    img: pippinTook,
    name: 'Pippin Took',
    testimony: `Akyat ensured a seamless booking for our grand Middle-earth adventure. `,
    trailName: 'Mount bato',
    route: '/bato',
  },
  {
    img: merryBrandybuck,
    name: 'Merry Brandybuck',
    testimony: `The hills were a challenge, but Akyat's ease and beauty discovered made it worthwhile.`,
    trailName: 'Mount batulao',
    route: '/batulao',
  },
];
