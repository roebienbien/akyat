import frodoBaggins from '../../assets/frodo-baggins.jpeg';
import samwiseGamgee from '../../assets/samwise-gamgee.png';
import pippinTook from '../../assets/pippin-took.png';
import merryBrandybuck from '../../assets/merry-brandybuck.jpg';

export type TClient = {
  img: any;
  name: string;
  place: string;
  testimony: string;
};

export const Client: TClient[] = [
  {
    img: frodoBaggins,
    name: 'Frodo Baggins',
    place: 'The Shire',
    testimony: `After a challenging hike through Middle-earth's landscapes, booking with Akyat made it worthwhile—the camaraderie and breathtaking views made the journey unforgettable.`,
  },
  {
    img: samwiseGamgee,
    name: ' Samwise Gamgee',
    place: 'The Shire',
    testimony: `Akyat made the hike accessible, turning discomfort into shared adventure. Frodo's resilience, coupled with Akyat's ease, fostered camaraderie and awe-inspiring moments in our journey.`,
  },
  {
    img: pippinTook,
    name: 'Pippin Took',
    place: 'The Shire',
    testimony: `Akyat ensured a seamless booking for our grand Middle-earth adventure. Every step became memorable with Frodo, Sam, and Akyat's convenience, turning the hike into an epic tale.`,
  },
  {
    img: merryBrandybuck,
    name: 'Merry Brandybuck',
    place: 'The Shire',
    testimony: `The hills were a challenge, but Akyat's ease and beauty discovered made it worthwhile. Akyat's fellowship turned the hike into an unforgettable escapade, rich with unique contributions from each of us.`,
  },
];
